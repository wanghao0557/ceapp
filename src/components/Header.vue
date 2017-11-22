<template>
  <div class="header">
    <button v-on:click="incrementCounter">{{counter}}</button>
  </div>
</template>
<style lang="scss" scoped>
  $blue: #999;
  .header{
    background-color: $blue;
    min-height: 85px;
    padding: 5px 10px;
    ul{
      list-style: none;
      margin: 0;
    }
    li{
      display: inline-block;
      font-size: 0;
      a{
        font-size: 14px;
        color: #fff;
      }
    }
  }
</style>
<script>
  export default {
    name: 'AppHeader',
    props: {
      appMessage: String,
      todo: Object
    },
    data() {
      return {
        counter: 0
      }
    },
    methods: {
      incrementCounter: function() {
        this.counter += 1;
        this.$emit('increment');
      }
    }
  }
</script>