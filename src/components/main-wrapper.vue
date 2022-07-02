<template>
  <div class="main-wrapper">
    <catalog-view/>
    <cart-view />
  </div>
</template>

<script>
import CatalogView from '@/components/catalog-view'
import CartView from '@/components/cart-view'
import {mapGetters} from 'vuex'
export default {
  name: "main-wrapper",
  components:{
    CatalogView, CartView
  },
  methods:{},
  computed:{
    ...mapGetters([
      'cartPrint'
    ])
  }

}
</script>
<style>
  .main-wrapper{
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
  }
</style>