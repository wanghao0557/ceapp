<template>
  <div class="hello">
    <app-header :todo="todo" :app-message="inputNotice" v-on:increment="incrementTotal"></app-header>
    <div class="control-input">
      <input type="text" v-model="inputNotice">
    </div>
  </div>
</template>

<script>
import AppHeader from './Header.vue'
export default {
  name: 'HelloWorld',
  beforeCreate: function() {
    console.log('创建前-total: '+this.total+'$el:'+this.$el);
  },
  created: function() {
    console.log('创建之后-total: '+this.total+'$el:'+this.$el);
  },
  beforeMount: function() {
    console.log('mount之前-total: '+this.total+'$el:'+this.$el);
  },
  mounted: function() {
    console.log('mount之后-total: '+this.total+'$el:'+this.$el);
  },
  beforeUpdate: function() {
    console.log('更新之前-total: '+this.total+'$el:'+this.$el);
  },
  updated: function() {
    console.log('更新之后-total: '+this.total+'$el:'+this.$el);
  },
  beforeDestroy: function() {
    console.log('销毁之前-total: '+this.total+'$el:'+this.$el);
  },
  destroyed: function() {
    console.log('销毁之后-total: '+this.total+'$el:'+this.$el);
  },
  data () {
    return {
      total: 0,
      inputNotice: '',
      todo: {
        text: 'learn vue',
        isComplete: false
      }
    }
  },
  components: {
    AppHeader
  },
  methods: {
    incrementTotal: function() {
      this.total += 1;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.control-input {
  margin-top: 10px;
}
.control-input input {
  height: 24px;
  padding-left: 5px;
}
</style>
