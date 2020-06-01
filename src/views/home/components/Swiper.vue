<template>
  <div class="wrapper">
    <swiper :options="swiperOption" >
      <!-- slides -->
      <swiper-slide v-for="item in list" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        autoplay: 2000,
        // 用户操作swiper之后，是否禁止autoplay
        autoplayDisableOnInteraction: false,
        // 循环播放
        loop: true
      }
    }
  },
}
</script>
<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background: #fff
  .wrapper
    overflow: hidden
    width: 100%
    height: 0
    padding-top:0.86rem
    padding-bottom: 31.25%
    background: #eee
    .swiper-img
      width: 100%
</style>
