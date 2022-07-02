<template>
  <div class="main-wrapper">
    <catalog-view/>
  </div>
</template>

<script>
import CatalogView from '@/components/catalog-view'

export default {
  name: "main-wrapper",
  components:{
    CatalogView
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