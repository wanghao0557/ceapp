<template>
  <div id="main" v-cloak>
    <div class="bar">
      <input type="text" v-model="key" placeholder="Enter your search terms">
    </div>
    <ul>
      <li v-for="item in filterShopping">
        {{item}}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        shoppingList: [
            "Milk", "Donuts", "Cookies", "Chocolate", "Peanut Butter", "Pepto Bismol", "Pepto Bismol (Chocolate flavor)", "Pepto Bismol (Cookie flavor)"
        ],
        key: ''
      }
    },
    computed: {
      filterShopping: function() {
        var key = this.key;
        var shoppingList = this.shoppingList;
        return shoppingList.filter(function(item) {
          return item.toLowerCase().indexOf(key.toLowerCase()) !== -1;
        });
      }
    }
  }
</script>
<style>
  [v-cloak] {
    display: none;
  }
</style>