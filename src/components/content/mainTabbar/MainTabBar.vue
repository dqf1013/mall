<template>
  <tab-bar>
      <tab-bar-item link="/home" actcolor="red">
        <template v-slot:iconimg>
          <img src="~assets/img/tabbar/home.svg" alt="">
        </template>
        <<template v-slot:iconactive>
          <img src="~assets/img/tabbar/home_active.svg" alt="">
        </template>
        <template v-slot:icontext>
          首页
        </template>
      </tab-bar-item>
      <tab-bar-item link="/category" actcolor="red">
        <template v-slot:iconimg>
          <img src="~assets/img/tabbar/category.svg" alt="">
        </template>
        <template v-slot:iconactive>
          <img src="~assets/img/tabbar/category_active.svg" alt="">
        </template>
        <template v-slot:icontext>
          分类
        </template>
      </tab-bar-item>
      <tab-bar-item link="/cart" actcolor="red">
        <template v-slot:iconimg>
          <img src="~assets/img/tabbar/cart.svg" alt="">
        </template>
        <template v-slot:iconactive>
          <img src="~assets/img/tabbar/cart_active.svg" alt="">
        </template>
        <template v-slot:icontext>
          购物车
        </template>
      </tab-bar-item>
      <tab-bar-item link="/profile" actcolor="red">
        <template v-slot:iconimg>
          <img src="~assets/img/tabbar/profile.svg" alt="">
        </template>
        <template v-slot:iconactive>
          <img src="~assets/img/tabbar/profile_active.svg" alt="">
        </template>
        <template v-slot:icontext>
          我的
        </template>
      </tab-bar-item>
    </tab-bar>
</template>
<script>
import TabBar from 'components/common/tabbar/TabBar'
import TabBarItem from 'components/common/tabbar/TabBarItem'
export default {
  name:'MainTabBar',
  components:{
    TabBar,
    TabBarItem
  }
}
</script>
<style scoped>

</style>