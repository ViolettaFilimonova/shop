<template>
  <div class="catalog-item">
    <img class="catalog-item__img" src="" alt="img">
    <h3 class="catalog-item__title">{{product.title}}</h3>
    <p class="catalog-item__price">{{product.price}}p</p>
    <button class="catalog-item__add">Добавить в карзину</button>
  </div>
</template>

<script>
export default {
  name: "catalog-item",
  props:{
    product:{
      type: Object
    }
  }
}
</script>

<style lang="scss">
.catalog {
  &-item{
    width: 300px;
    border: 3px solid black;
    margin: 20px;
  }
}
</style>