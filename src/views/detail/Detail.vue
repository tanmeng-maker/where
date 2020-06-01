<template>
  <div>
    <detail-banner :sightName="sightName" :bannerImg="bannerImg" :gallaryImgs="gallaryImgs"></detail-banner>
    <detail-header></detail-header>
    <div class="content">
      <detail-list :list="categoryList"></detail-list>
    </div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data() {
    return {
      sightName: '',
      bannerImg: '',
      gallaryImgs: [],
      categoryList: []
    }
  },
  mounted() {
    this.axios
      .get('/api/detail.json', {
        params: {
          id: this.$route.params.id
        }
      })
      .then(res => {
        this.sightName = res.data.data.sightName
        this.bannerImg = res.data.data.bannerImg
        this.gallaryImgs = res.data.data.gallaryImgs
        this.categoryList = res.data.data.categoryList
      })
  }
}
</script>

<style lang="stylus" scoped>
.content {
  height: 50rem;
}
</style>
