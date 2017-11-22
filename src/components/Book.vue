<template>
  <div class="book-wrap">
    <input type="text" v-model="text" placeholder="book">
    <p>{{text}}</p>
  </div>
</template>
<style scoped>
  .book-wrap{
    background-color: #ccc;
  }
  .book-wrap p{
    color: #f90;
  }
</style>
<script>
  export default {
    name: "Book",
    data() {
      return {
        text: ""
      }
    }
  } 
</script>