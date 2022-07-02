<template>
  <div class="v-main-wrapper">
    <catalog-view/>
    <cart-view/>
  </div>
</template>

<script>
import CatalogView from '@/components/catalog-view'
import CartView from '@/components/cart-view'
export default {
  name: "main-wrapper",
  components:{
    CatalogView, CartView
  }
}
</script>
<style>
  v-main-wrapper{
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 900px;
    margin: 0 auto;
  }
</style>