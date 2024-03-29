<script setup>
const hello = ref("Путешевствуй в компании");
import { useMyStoreStore } from '@/stores/store';

const loaded = ref(false);
const store = useMyStoreStore();
const handleImageLoad = () => {
  loaded.value = true;
};

const countries = ref()
const users = ref()
const interests = ref()
const travel_count = ref(0)

onMounted(async () => {
  // Измерение времени монтирования компонента
  await store.fetchData();
  countries.value = store.countries
  users.value = store.users
  interests.value = store.interests
  travel_count.value = store.travelCount
  const timeToMount = performance.now();
  console.log("Время монтирования компонента:", timeToMount);
  console.log(store.travelCount);

  setTimeout(() => {
    loaded.value = true;
    handleImageLoad;
  }, 70);
  // Установка loaded после завершения монтирования
});

</script>
<template>
    <slot>
    <div class="content">
    <div class="hello-layout">
      <UProgress
        animation="carousel"
        v-if="!loaded"
        style="margin: 100px 0px 70px 0px; max-width: 669px; width: 75%"
        color="#00C7BB"
      />
      <h1 v-if="loaded" data-aos="fade-down">
        {{ hello }}
      </h1>
      <p>Travelo — это тысячи любителей впечатлений в одном месте</p>
      <Search></Search>
      <IndexSearch :popular_countries="countries" :total_popular_countries="travel_count.total_country_count"></IndexSearch>
      <NuxtLink to="search" style="width:100%;"><button class="other">Еще варианты: {{ travel_count.total_country_count}} шт.</button></NuxtLink>
    </div>

    <PopularRoad></PopularRoad>
    <IndexFriends :popular_users="users" :popular_interests="interests"></IndexFriends>
    <div class="info-slide" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
      <div class="info-slide-layout">
      <span>Запывпл ыжэлпжыэвлп эыжлп 
вадлоыва опжапо ждываоп вы</span>
      <p>ывлдаофыж даофжы оапфжоп жфдво пджлво пывжо дывоп ыовжрд оыро ывждлро ыап
ывжр ывджлр оыапр оыдлро дывор джыордыаордлыаор дыворвоыр
ывджлр оыдвлжорывдорджываордлаыопр</p>
      <button>Название кнопки</button>
    </div>
    </div>
    <!-- <img src="~/assets/img/slider.png" alt=""> -->

  </div>

  <Footer></Footer>


        
    </slot>
</template>
<style scoped>
@media (max-width: 490px){
  .hello-layout h1{
  width: 99%;
  text-align: center;
  font-size: 6.5vw;
  margin: 35px 0px 0px 0px;
}
.hello-layout p{
  width: 95%;
  font-size: 4.5vw;
  margin: 0px 0px 35px 0px;
}
}

</style>