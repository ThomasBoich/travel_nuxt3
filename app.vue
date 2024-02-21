<script lang="ts" setup>
const hello = ref("Путешевствуй в компании");

const loaded = ref(false);
const handleImageLoad = () => {
  loaded.value = true;
};

onMounted(() => {
  // Измерение времени монтирования компонента
  const timeToMount = performance.now();
  console.log("Время монтирования компонента:", timeToMount);

  setTimeout(() => {
    loaded.value = true;
  }, 70);
  // Установка loaded после завершения монтирования
});
</script>

<template>
  <Navigation></Navigation>
  <NuxtLoadingIndicator />
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
      <p>Site.ru — это тысячи любителей впечатлений в одном месте</p>
      <Search></Search>
      <IndexSearch></IndexSearch>
      <button class="other">Еще варианты: 495 шт.</button>
    </div>

    <PopularRoad></PopularRoad>
    <IndexFriends></IndexFriends>
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
</template>
<style>
body {
  font-family: "Inter", sans-serif;
}
.content {
  max-width: 1279px;
  margin: auto auto 100px;
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
.info-slide{
  background-color: #F6F5F2;
  border-radius: 35px;
  padding: 25px 25px 25px 75px;
  min-height: 350px;
  margin: 75px 0px 75px 0px;
  display: flex;
  align-items: center;
  flex-direction: row;
}.info-slide span{font-size: 35px;font-weight:900;max-width: 50%;margin: 0px 0px 25px 0px;line-height: 1.5;}
.info-slide p{font-size: 15px;color: #7B7B7B;margin: 0px 0px 50px 0px;padding: 0;max-width: 50%;}
.info-slide button{
  background-color: #F2994A;
  font-size: 17px;
  font-weight: 700;
  color: #FFFFFF;
  border-radius: 50px;
  padding: 15px 25px 15px 25px;
  width: max-content;
}
.info-slide-layout{
  display: flex;
  flex-direction: column;
  height: max-content;
  margin: 50px 0px 50px 0px;
}
</style>
