<template>
  <div id="main">
    <nav>
      <a v-for="(item, index) in items" :class="{'show': item.active}" @click="makeActive(item, index)">{{item.name}}<b>{{index}}</b></a>
    </nav>
    <p>You choose <b>{{active}}</b></p>
  </div>
</template>
<style>
  .show{
    background-color: #f90;
    padding: 5px 8px;
  }
</style>
<script>
  export default {
    name: 'nav',
    data(){
      return {
        active: 'HTML',
        items: [{name: 'HTML', active: true}, {name: 'CSS', active: false}, {name: 'JAVASCRIPT', active: false}, {name: 'Vue', active: false}]
      } 
    },
    methods: {
      makeActive: function(item, index) {
        this.active = item.name;
        console.log(this);
        for(var i = 0; i < this.items.length; i++) {
          this.items[i].active = false;
        }
        this.items[index].active = true;
      }
    }
  }
</script>