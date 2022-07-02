<template>
  <div>
    <h2>Catalog</h2>
    <div class="catalog__list">
      <catalog-item
          v-for="product in products" :key="product.id"
          :product="product"
      />
    </div>
  </div>
</template>

<script>
import CatalogItem from '@/components/catalog-item'
export default {
  name: "catalog-view",
  components:{
    CatalogItem
  },
  data(){
    return{
      products:[
        { id: 1, title: "T-shirt", price: 1245 },
        { id: 2, title: "T-shirt", price: 1235 },
        { id: 3, title: "T-shirt", price: 1355 },
        { id: 4, title: "T-shirt", price: 1855 },
        { id: 5, title: "T-shirt", price: 1245 },
        { id: 6, title: "T-shirt", price: 1235 },
        { id: 7, title: "T-shirt", price: 1355 },
        { id: 8, title: "T-shirt", price: 1855 }
      ]
    }
  }
}
</script>

<style lang="scss">
.catalog {
  &__list {
    display: flex;
    flex-wrap: wrap;
  }
}

</style>