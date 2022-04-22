<template>
  <div class="log-drawer">
    <div class="login">
      <div v-show="!this.isLogin">
        <el-button class="sign" type="primary" @click="table = true">登录</el-button>
        <el-button class="reg" @click="regtable = true">注册</el-button>
      </div>
      <div v-show="this.isLogin">
        欢迎! {{this.currentUser.userName}} 
        <el-button class="logout" type="primary" plain size="small" @click="logout">注销</el-button>
      </div>
    </div>
    <el-drawer
      title="登录"
      :visible.sync="table"
      :before-close="handleClose"
      direction="rtl"
      size="25%"
      ref="drawer">
      账号:
      <el-input
        class="account"
        placeholder="请输入账号"
        v-model="acc">
      </el-input><br>
      密码:
      <el-input
        class="account"
        placeholder="请输入密码"
        v-model="psw"
        show-password>
      </el-input>
      <div class="demo-drawer__footer">
        <el-button @click="cancelForm">取 消</el-button>
        <el-button type="primary" @click="Cmflogin()" :loading="loading">{{ loading ? '登录中 ...' : '确 定' }}</el-button>
      </div>
    </el-drawer>
    <el-drawer
      title="注册"
      :visible.sync="regtable"
      :before-close="handleClose"
      direction="rtl"
      size="25%"
      ref="drawer">
      <el-result v-show="isShowRegSuc" class="reg-success" icon="success" title="注册成功" subTitle="请前往登录界面进行登录">
        <template slot="extra">
          <el-button type="primary" size="medium" @click="handleRegSuc">返回</el-button>
        </template>
      </el-result>
      <el-result v-show="isShowRegFail" class="reg-success" icon="error" title="注册失败" subTitle="账号已存在!">
        <template slot="extra">
          <el-button type="primary" size="medium" @click="handleRegFail">返回</el-button>
        </template>
      </el-result>
      <el-tabs v-model="activeName" @tab-click="handleTabClick" class="tablist" stretch>
        <el-tab-pane label="手机号注册" name="phoneReg">
          账号名:
          <el-input
            class="account"
            placeholder="选填"
            v-model="regUserName">
          </el-input><br>
          账号:
          <el-input
            class="account"
            placeholder="请输入手机号"
            v-model="regPhone">
          </el-input><br>
          密码:
          <el-input
            class="account"
            placeholder="请输入密码"
            v-model="regPsw"
            show-password>
          </el-input><br>
          确认密码:
          <el-input
            class="account"
            placeholder="请再次输入密码"
            v-model="regCmfPsw"
            show-password>
          </el-input>
        </el-tab-pane>
        <el-tab-pane label="用户名注册" name="nameReg">懒得写了</el-tab-pane>
      </el-tabs>
      
      <div class="demo-drawer__footer">
        <el-button @click="cancelForm">取 消</el-button>
        <el-button type="primary" @click="CmfReg()" :loading="registing">{{ registing ? '注册中 ...' : '确 定' }}</el-button>
      </div>
    </el-drawer>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import { login } from '@/network/login'
import { register } from '@/network/register'

export default {
  data() {
    return {
      acc: '',
      psw: '',
      regUserName: '',
      regPhone: '',
      regPsw: '',
      regCmfPsw: '',
      table: false,
      regtable: false,
      loading: false,
      formLabelWidth: '80px',
      timer: null,
      activeName: 'phoneReg',
      registing: false,
      isShowRegSuc: false,
      isShowRegFail: false
    }
  },
  methods: {
    ...mapActions(['loginInUser','logoutCurrentUser']),
    handleClose(done) {
      if (this.loading) {
        return;
      }
      this.$confirm('要取消关闭该窗口吗？')
        .then(_ => {
          this.cancelForm()
        })
        .catch(_ => {});
    },
    cancelForm() {
      this.loading = false;
      this.table = false;
      this.regtable = false;
      clearTimeout(this.timer);
    },
    Cmflogin() {
      if(this.acc == null || this.acc == '') {
        alert('账号不能为空')
      } else if(this.psw == null || this.psw == '') {
        alert('密码不能为空')
      } else {
        login(this.acc,this.psw).then(res => {
          console.log(res)
          console.log(res.data.length != 0)
          if(res.data.length != 0) {
            this.loginInUser(res.data[0])
            this.handleLogin()
            // this.cancelForm()
          } else {
            this.loginFail()
          }
        })
      }
    },
    handleLogin() {
      this.loading = true;
      this.timer = setTimeout(() => {

        // 动画关闭需要一定的时间
        setTimeout(() => {
          this.loading = false;
          this.loginSuccess()
          this.table = false;
        }, 400);
      }, 2000);
    },
    loginSuccess() {
      this.$message({
        message: '登录成功!',
        type: 'success'
      });
    },
    loginFail() {
      this.$message.error('登录失败!请检查账号或密码!');
    },
    logout() {
      this.$confirm('确定要注销账号吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.logoutCurrentUser()
        this.$message({
          type: 'success',
          message: '注销成功!'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消注销'
        });          
      });
    },
    handleTabClick(tab, event) {
      // console.log(tab, event);
    },
    CmfReg() {
      if(this.regPhone == null || this.regPhone == '') {
        this.$message({
          message: '手机号不能为空',
          type: 'warning'
        });
      } else if (this.regPsw == null || this.regPsw == '') {
        this.$message({
          message: '密码不能为空',
          type: 'warning'
        });
      } else if (this.regCmfPsw == null || this.regCmfPsw == '') {
        this.$message({
          message: '请再次输入密码',
          type: 'warning'
        });
      } else if (this.regPsw != this.regCmfPsw){
        this.$message({
          message: '两次输入的密码不一致',
          type: 'warning'
        });
      } else {
        register(this.regUserName, this.regPhone, this.regPsw).then(res => {
          if(res.data != 0) {
            this.handleRegister()
          } else {
            this.isShowRegFail = true;
          }
          console.log(res.data)
        }, err => {
        })
      }
    },
    handleRegister() {
      this.registing = true;
      this.timer = setTimeout(() => {
        // 动画关闭需要一定的时间
        setTimeout(() => {
          this.registing = false;
          this.isShowRegSuc = true;
        }, 400);
      }, 2000);
    },
    handleRegSuc() {
      this.isShowRegSuc = false;
      this.regtable = false;
    },
    handleRegFail() {
      this.isShowRegFail = false;
    }
  },
  computed: {
    ...mapGetters(['currentUser']),
    isLogin() {
      return this.currentUser.userId != null
    }
  }
}
</script>

<style>
.login {
  position: absolute;
  top: 80px;
  right: 20px;
}
.account {
  width: 180px;
  margin: 4px 0;
}
.demo-drawer__footer {
  margin: 15px;
}
.reg-success {
  z-index: 100;
  background-color: #fff; 
  position: absolute;
  top: -150px;
  width: 100%;
  height: 100%;
}
</style>