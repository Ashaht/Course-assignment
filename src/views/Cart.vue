<template>
  <div class="cart">
    <CartTable/>
  </div>
</template>

<script>
import CartTable from '@/views/CartChild/CartTable.vue'
import { mapGetters } from 'vuex'

export default {
  data() {
    return {}
  },
  methods: {
    
  },
  computed: {
    ...mapGetters(['cartLength','cartList']),
  },
  components: {
    CartTable,
  }
}
</script>

<style>

</style>