<template>
  <div>
    <h2>Catalog</h2>
    <div class="catalog__list">
      <catalog-item
          v-for="product in productsPrint" :key="product.id"
          :product="product"
          @sendIdCardss="printIdCard"
      />
    </div>
  </div>
</template>

<script>
import CatalogItem from '@/components/catalog-item'
import {mapActions, mapGetters} from 'vuex'
export default {
  name: "catalog-view",
  components:{
    CatalogItem
  },
  data(){
    return{

    }
  },
  methods:{
    ...mapActions([
      'getProducts'
    ]),
    printIdCard(dataId){
      console.log(dataId)
    }
  },
  computed:{
    ...mapGetters([
        'productsPrint'
    ])
  },
  mounted() {
    this.getProducts()

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