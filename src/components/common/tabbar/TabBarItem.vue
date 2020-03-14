<template>
    <div class="tab-bar-item" @click="linkRoute">
      <div v-if="!isActive"><slot name="iconimg"></slot></div>
      <div v-else><slot name="iconactive"></slot></div>
      <div 
        :style="isActiveStyle"
      ><slot name="icontext"></slot></div>
    </div>
</template>
<script>
export default {
  name:'TabBarItem',
  props: {
    link:String,
    actcolor:{
      type:String,
      default:'red'
    }
  },
  data(){
    return {
    }
  },
  computed:{
    isActive:{
      get:function(){
        return this.$route.path.indexOf(this.link) > -1
      },
      set:function(){
        
      }  
    },
    isActiveStyle(){
      return this.isActive ? {color:this.actcolor} : {}
    }
  },
  methods: {
    linkRoute(){
      this.$router.replace(this.link)
      this.isActive = true
    }
  }

}
</script>
<style scoped>
.tab-bar-item{
  flex:1;
  text-align: center;
  font-size: 12px;
}
.tab-bar-item img{
  width: 24px;
  height: 24px;
  vertical-align: middle;
  margin-top: 3px;
  margin-bottom: 2px;
}
/* .active{
  color: red;
} */
</style>