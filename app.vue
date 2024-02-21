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
        style="margin: 145px 0px 70px 0px; max-width: 669px; width: 75%"
        color="#00C7BB"
      />
      <h1 v-if="loaded" data-aos="fade-up" data-aos-anchor-placement="center-center">
        {{ hello }}
      </h1>
      <p>Site.ru — это тысячи любителей впечатлений в одном месте</p>
      <Search></Search>
      <IndexSearch></IndexSearch>
      <button class="other">Еще варианты: 495 шт.</button>
    </div>
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
</style>
