<script setup>
const popularCity = ref([
  {
    id: 1,
    image: "./city.png",
    name: "Казань",
    info: "ФОоджыоваывоа ыв ава оыва оыждва оыджа оыа ывад ываы ыа ыаыаыв аыа",
  },
  {
    id: 2,
    image: "./city2.png",
    name: "Самара",
    info: "ФОоджыоваывоа ыв ава оыва оыждваоыа ывад ываы ыа ыаыаыв аыа",
  },
  {
    id: 3,
    image: "./city3.png",
    name: "Санкт-Петербург",
    info: "ФОоджыоваывоа ыв ава оыва оыждваоыа ывад ываы ыа ыаыаыв аыа",
  },
]);
const props = defineProps({
  popularCityCount: {
    type: Array,
    required: true,
  },
});
</script>
<template>
  <div
    class="index-pupular-roads-layer"
    data-aos="fade-up"
    data-aos-anchor-placement="center-bottom"
  >
    <div class="index-popular-roads-title">
      <h2>Популярные направления из Москвы</h2>
      <span>596 шт.</span>
    </div>
    <div class="popular-roads">
      <div class="popular-road" v-for="city in popularCity">
        <NuxtLink to="search">
          <div class="popular-road-filter"></div>
          <div class="index-popular-city-info">
            <span>{{ city.name }}</span>
            <p>{{ city.info }}</p>
          </div>
          <img :src="city.image" alt="" />
        </NuxtLink>
      </div>
    </div>
    <NuxtLink to="search"><button class="other">Показать всех</button></NuxtLink>
  </div>
</template>
<style scoped>
.index-pupular-roads-layer {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 75px 0px 0px 0px;
}
.index-popular-roads-title {
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: flex-start;
  margin: 0px 0px 35px 0px;
}
.index-popular-roads-title h2 {
  font-size: 25px;
  font-weight: 700;
  margin: 0px 15px 0px 0px;
}
.index-popular-roads-title span {
  background-color: #f3f3f3;
  border-radius: 50px;
  padding: 5px 15px 5px 15px;
  color: #989898;
}
.popular-roads {
  display: flex;
  justify-content: space-between;
  margin: 0px 0px 50px 0px;
}
.popular-road {
  position: relative;
  border-radius: 9px;
  overflow: hidden;
  width: 32%;
  cursor: pointer;
}
.popular-road:hover {
  opacity: 0.9;
}
.popular-road img {
  width: 100%;
}
.popular-road-filter {
  background-color: #00000025;
  width: 100%;
  height: 100%;
  position: absolute;
}
.index-popular-city-info {
  position: absolute;
  bottom: 25px;
  height: max-content;
  padding: 0px 0px 0px 25px;
}
.index-popular-city-info p {
  margin: 0;
  padding: 0;
  color: #ffffff;
  font-size: 15px;
}
.index-popular-city-info span {
  font-size: 25px;
  color: #ffffff;
  font-weight: 700;
}
.other {
  border: 1px solid #e6e6e6;
  border-radius: 9px;
  font-size: 17px;
  text-align: center;
  width: 100%;
  padding: 15px 15px 15px 15px;
  transition: all 0.3s;
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
}
.other:hover {
  background-color: #000000;
  color: #ffffff;
  border: 1px solid #000000;
  transition: all 0.3s;
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
}
@media (max-width: 770px) {
  .index-popular-roads-title h2 {
    font-size: 5vw;
  }
  .index-pupular-roads-layer {
    width: calc(100% - 30px);
    margin: 45px auto 45px;
  }
  .index-popular-roads-title span {
    font-size: 15px;
  }
  .popular-roads {
    overflow: hidden;
    overflow-x: auto;
    margin: 0px 0px 35px 0px;
  }
  .popular-road {
    min-width: 250px;
    margin: 0px 15px 0px 0px;
  }
}
</style>
