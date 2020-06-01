<template>
  <div>
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list :letter="letter" :cities="cities" :hotCities="hotCities"></city-list>
    <city-alphabet @change="handleLetterChange" :cities="cities"></city-alphabet>
  </div>
</template>
<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
export default {
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data() {
    return {
      cities: {},
      hotCities: [],
      letter: ''
    }
  },
  methods: {
    // 获取子组件传过来的值
    handleLetterChange(letter) {
      this.letter = letter
    }
  },
  mounted() {
    this.axios.get('/api/city.json').then(res => {
      this.cities = res.data.data.cities
      this.hotCities = res.data.data.hotCities
    })
  }
}
</script>
<style lang="stylus" scoped></style>
