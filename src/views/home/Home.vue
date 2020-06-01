<template>
  <div>
    <home-header></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :list="iconsList"></home-icons>
    <home-recommend :list="recommendList"></home-recommend>
    <home-weekend :list="weekendList"></home-weekend>
  </div>
</template>
<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import { mapState } from 'vuex'//导入辅助函数
export default {
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  data() {
    return {
      lastCity: '',
      swiperList: [],
      iconsList: [],
      recommendList: [],
      weekendList: []
    }
  },
  mounted() {
    this.axios.get('/api/index.json?city=' + this.city).then(res => {
      this.swiperList = res.data.data.swiperList
      this.iconsList = res.data.data.iconList
      this.recommendList = res.data.data.recommendList
      this.weekendList = res.data.data.weekendList
    })
  },
  computed: {
    ...mapState(['city'])//引入store文件state下的city
  },
  activated() {
    // 如果再一次打开这个页面当前城市和上一次显示的城市不一样则发送请求
    // 否则用缓存数据
    if (this.lastCity !== this.city) {
      this.lastCity = this.city
    }
  }
}
</script>
<style>
</style>
