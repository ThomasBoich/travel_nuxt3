<template>
  <div class="popular-countries">
    <div class="popular-countries-title">
      <h2>Популярные направления <span>{{ total_popular_countries }} шт.</span></h2>
      <button>Как найти надежного попутчика ></button>
    </div>

    <div
      class="popular-countries-layout"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
    >
      <div
        v-for="country in countries"
        :key="country.id"
        class="popular-country"
        v-if="!loaded"
      >
        <div class="flex items-center space-x-4">
          <USkeleton class="h-12 w-12" :ui="{ rounded: 'rounded-full' }" />
          <div class="space-y-2">
            <USkeleton class="h-4 w-[200px]" />
            <USkeleton class="h-4 w-[150px]" />
          </div>
        </div>
      </div>

      <div
        v-for="country in popular_countries"
        :key="country.id"
        class="popular-country"
        v-if="loaded"
      >
      <NuxtLink to="search" style="width: 100%;
    display: flex;
    align-items: center;justify-content: flex-start;text-align: left;">
        <img :src="country.image" alt="" />
        <div class="popular-country-info">
          <div class="popular-country-info-layer">
            <span>{{ country.name }}</span>
            <p>Поездок: {{ country.travel_count }}</p>
          </div>
        </div>
      </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const loaded = ref(false);
const handleImageLoad = () => {
  loaded.value = true;
};
const props = defineProps(['popular_countries', 'total_popular_countries'])

onMounted(() => {
  // Измерение времени монтирования компонента
  const timeToMount = performance.now();
  console.log("Время монтирования компонента:", timeToMount);

  setTimeout(() => {
    loaded.value = true;
  }, 500);
  // Установка loaded после завершения монтирования
});
const countries = ref([
  {
    id: 1,
    name: "Калининград",
    countRoad: "1500 поездок",
    url: "./country.png",
  },
  {
    id: 2,
    name: "Ростов-на-Дону",
    countRoad: "1500 поездок",
    url: "./country2.webp",
  },
  {
    id: 3,
    name: "Екатерингбург",
    countRoad: "1500 поездок",
    url: "./country3.webp",
  },
  {
    id: 4,
    name: "Ярославль",
    countRoad: "1500 поездок",
    url: "./country4.webp",
  },
  {
    id: 5,
    name: "Геленджик",
    countRoad: "1500 поездок",
    url: "./country5.webp",
  },
  {
    id: 6,
    name: "Краснодар",
    countRoad: "1500 поездок",
    url: "./country6.webp",
  },
  {
    id: 7,
    name: "Красная Поляна",
    countRoad: "1500 поездок",
    url: "./country7.webp",
  },
  {
    id: 8,
    name: "Новосибирск",
    countRoad: "1500 поездок",
    url: "./country7.webp",
  },
  { id: 9, name: "Воронеж", countRoad: "1500 поездок", url: "./country9.webp" },
  { id: 10, name: "Самара", countRoad: "1500 поездок", url: "./country10.webp" },
  { id: 11, name: "Тула", countRoad: "1500 поездок", url: "./country11.webp" },
  {
    id: 12,
    name: "Кисловодск",
    countRoad: "1500 поездок",
    url: "./country12.webp",
  },
]);
</script>

<style scoped>
.popular-countries {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
  padding-bottom: 25px;
  flex-direction: column;
  margin: 75px 0px 50px 0px;
}
.popular-countries-title {
  width: calc(100% - 27px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0px 0px 35px 0px;
}
.popular-countries-title h2 {
  font-size: 25px;
  font-weight: 700;
  display: inline-flex;
  align-items: center;
  margin: 0px 15px 0px px;
}
.popular-countries-title h2 span {
  font-size: 15px;
  background-color: #f3f3f3;
  padding: 5px 9px 5px 9px;
  border-radius: 25px;
  font-weight: 500;
  color: #989898;
  margin: 0px 0px 0px 15px;
}
.popular-countries-layout {
  width: 100%;
  min-width: 200px;
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4 столбца */
  grid-template-rows: repeat(3, auto); /* 3 ряда */
  justify-content: space-between;
  align-items: center;
  gap: 35px;
  flex-shrink: 0;
  overflow: hidden;
  overflow-x: auto;
  padding: 0px 15px 25px 15px;
}
.popular-country {
  width: 22%;
  display: flex;
  height: 78px;
  align-items: center;
  min-width: 250px;
}
.popular-country img {
  min-width: 78px;
  min-height: 78px;
  border-radius: 9px;
  object-fit: cover;
  margin: 0px 15px 0px 0px;
  align-items: center;
  max-width: 78px;
  max-height: 78px;
}
.popular-country-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}
.popular-country-info p {
  margin: 0;
  padding: 0;
  font-size: 15px;
  color: #707070;
}
.popular-country-info span {
  font-weight: 700;
  font-size: 19px;
}

/* мобильная версия */
@media (max-width: 770px) {
  .popular-countries-title h2 {
    font-size: 5vw;
  }
  .popular-countries-title {
    flex-direction: column;
    justify-content: flex-start;
    text-align: left;
    align-items: flex-start;
    margin: 0px 0px 25px 0px;
  }.popular-countries-title button{
    font-size: 4vw;
    color: #707070;
  }
  .popular-country-info span {
    font-size: 15px;
  }
  .popular-country {
    min-width: max-content;
  }
  .popular-countries-layout {
    gap: 15px;
  }
  .popular-countries {
    margin: 45px 0px 0px 0px;
  }
  .popular-countries-layout{
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(2, auto);
  }
}
</style>
