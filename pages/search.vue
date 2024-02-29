<template>
  <div class="content">
    <Search></Search>
    <h1 style="font-size: 25px; font-weight: 700; margin: 0px 0px 25px 0px">
      Популярные направления из Москвы
    </h1>
    <nuxtLink to="page">
      <div class="search-result">
        <img src="~/assets/img/photo.png" alt="" />
        <div class="search-result-info">
          <h2>Доминикана, Индонезия, Кипр, Мальдивы...</h2>
          <div class="search-info-status"><span>Мария, 28</span>&nbsp; · &nbsp;
            <img src="~/assets/img/pic_male.png" alt="" />
            <!-- > -->
            <img src="~/assets/img/item.gif" alt="" style="width: auto; height: 9px" />
            <img src="~/assets/img/pic_female.png" alt="" /> · Женщина ищет мужчину · на
            15 дней · уже отдыхаю
          </div>
          <p>
            Смена локации и возможность разгрузить мозг от рутинных мыслей , а то декабрь
            на носу , пора заряжаться новогодним настроением )
          </p>          
        </div>
      </div>
      <div class="search-result">
        <img src="~/assets/img/photo2.png" alt="" />
        <div class="search-result-info">
          <h2>Доминикана, Индонезия, Кипр, Мальдивы...</h2>
          <div class="search-info-status"><span>Мария, 28</span>&nbsp; · &nbsp;
            <img src="~/assets/img/pic_male.png" alt="" />
            <!-- > -->
            <img src="~/assets/img/item.gif" alt="" style="width: auto; height: 9px" />
            <img src="~/assets/img/pic_female.png" alt="" /> · Женщина ищет мужчину · на
            15 дней · уже отдыхаю
          </div>
          <p>
            Смена локации и возможность разгрузить мозг от рутинных мыслей , а то декабрь
            на носу , пора заряжаться новогодним настроением )
          </p>          
        </div>
      </div>
    </nuxtLink>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "base",
});
</script>

<style scoped>
.what-search-layout {
  padding: 0px 0px 0px 0px !important;
}
form {
  width: 100%;
  max-width: 100%;
  border-radius: 0px;
  border: none;
  border-bottom: 2px solid #dddddd;
  box-shadow: none;
  margin: 0px 0px 25px 0px;
  background-color: #ffffff;
  padding: 0px 0px 15px 0px;
}
form:hover {
  box-shadow: none;
}
.where-layout input,
select {
  background-color: inherit !important;
}
.where select {
  background-color: inherit !important;
}
.search-result {
  display: flex;
  width: 100%;
  margin: 0px 0px 25px 0px;
  padding: 0px 0px 25px 0px;
  border-bottom: 1px solid #dddddd;
  align-items: center;
}
.search-result img {
  width: auto;
  height: 135px;
  border-radius: 15px;
  margin: 0px 15px 0px 0px;
}
.search-result-info {
  display: flex;
  flex-direction: column;
}
.search-result-info h2 {
  font-weight: 700;
  font-size: 17px;
  margin: 0px 0px 5px 0px;
}
.search-result-info p {
  border-top: 1px solid #dddddd;
  margin: 9px 0px 9px 0px;
  padding: 9px 0px 0px 0px;
  font-size: 15px;
}
.search-info-status {
  display: inline-flex;
  align-items: center;
  font-size: 15px;
}
.search-info-status img {
  height: 17px;
  width: auto;
}
.search-info-status img {
  margin: 0px 5px 0px 0px;
}
</style>
