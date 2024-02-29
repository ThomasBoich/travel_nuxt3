<template>
  <slot>
    <div class="content">
    <div class="page-title">
    <div class="page-title-layout">
    <div class="page-title-status">
    <img src="~/assets/img/pic_male.png" alt="">
     <!-- > -->
    <img src="~/assets/img/item.gif" alt="" style="width: auto;height:9px;">
    <img src="~/assets/img/pic_female.png" alt="">
    Женщина ищет мужчину
    </div>
    <div class="page-status-list-content">
      <span> <img src="~/assets/img/pic_location_green.png" alt="" style="display:inline;height:19px;position:relative;top:-3px;margin:0px 0px 0px -2px;"> Ищу попутчика:</span> Аргентина, Доминикана, Индонезия, Коста-Рика, Куба, Маврикий, Мальдивы, Мексика, Шри-Ланка
    </div>
    </div>    
    </div>
    <div class="page-profile">
    <div class="page-profile-description">
    <div class="page-user">
    <img src="~/assets/img/photo.png" />
    <div class="page-user-info">
    <span>
    <img src="~/assets/img/pic_location_grey.png" style="display: inline;height:15px;width:auto;margin: 0px 3px 3px -2px;"/>
    Токио</span>
    Виктория, 25 лет
    <!-- <h2>О себе</h2> -->
    <div class="citata">
    <div class="shtrih">
    <img src="~/assets/img/bio.png" alt="" style="width: 25px;height:auto;">
    </div>
      Обожаю пересматривать старые добрые фильмы Хичкока/Альмодовара, готовить, путешествовать,чилить в спа ну и конечно дурачиться с умными людьми 🙃  Кого ищу? Друга/любовника/мужа и желательно 3 в 1, но как повезет.. главное химия⚛️
    </div>
    <img src="~/assets/img/self.png" alt="" style="width: max-content;height: auto;margin: 15px 0px 0px 0px;">
   
    </div>
    </div>
    <div class="page-user-info-content">
    <h2 style="font-size: 17px;font-weight: 700;margin: 0px 0px 15px 0px;">Ищу</h2>
      Всем привет. Я добрая, позитивная и свободная девушка. Буду рада новым знакомствам. Очень долго не была на теплом солнышке в приятной компании.
    </div>
    <!-- <div class="intresting">
    <h2>О себе</h2>
    <aboutViews :views="abouts"></aboutViews>
    </div>   
    <div class="citata">
    <div class="shtrih">
    <img src="~/assets/img/bio.png" alt="">
    </div>
      Обожаю пересматривать старые добрые фильмы Хичкока/Альмодовара, готовить, путешествовать,чилить в спа ну и конечно дурачиться с умными людьми 🙃  Кого ищу? Друга/любовника/мужа и желательно 3 в 1, но как повезет.. главное химия⚛️
    </div> -->
    </div>
    
    <div class="intresting">
    <h2>Теги</h2>
    <roadViews :views="views"></roadViews>
    </div>   
    <button><img src="~/assets/img/share.png"> Рекомендовать другу</button> 
    </div>
    <div class="similar-ads">
    <h2>Схожие объявления</h2>
    <div class="similar-ads-content">
    <div class="similar-ad">
    <img src="~/assets/img/photo.png" alt="">
    Виктория
    <div class="similar-ad-tags">
      <span>Маврикий,</span> <span>Мальдивы,</span> <span>Мексика,</span> <span>Шри-Ланка</span>
    </div>
    </div>
    <div class="similar-ad">
    <img src="~/assets/img/photo.png" alt="">
    Виктория
    <div class="similar-ad-tags">
    <span>Маврикий,</span> <span>Мальдивы,</span> <span>Мексика,</span> <span>Шри-Ланка</span>
    </div>
    </div>
    <div class="similar-ad">
    <img src="~/assets/img/photo.png" alt="">
    Виктория
    <div class="similar-ad-tags">
    <span>Маврикий,</span> <span>Мальдивы,</span> <span>Мексика,</span> <span>Шри-Ланка</span>
    </div>
    </div>
    <div class="similar-ad">
    <img src="~/assets/img/photo.png" alt="">
    Виктория
    <div class="similar-ad-tags">
    <span>Маврикий,</span> <span>Мальдивы,</span> <span>Мексика,</span> <span>Шри-Ланка</span>
    </div>
    </div>
    <!-- <div class="similar-ad">
    <img src="~/assets/img/photo.png" alt="">
    Виктория
    <span>Маврикий,</span> <span>Мальдивы,</span> <span>Мексика,</span> <span>Шри-Ланка</span>
    </div>
    <div class="similar-ad">
    <img src="~/assets/img/photo.png" alt="">
    Виктория
    <span>Маврикий,</span> <span>Мальдивы,</span> <span>Мексика,</span> <span>Шри-Ланка</span>
    </div>
    <div class="similar-ad">
    <img src="~/assets/img/photo.png" alt="">
    Виктория
    <span>Маврикий,</span> <span>Мальдивы,</span> <span>Мексика,</span> <span>Шри-Ланка</span>
    </div>
    <div class="similar-ad">
    <img src="~/assets/img/photo.png" alt="">
    Виктория
    <span>Маврикий,</span> <span>Мальдивы,</span> <span>Мексика,</span> <span>Шри-Ланка</span>
    </div> -->
    </div>
    </div>
  </div>
  </slot>

</template>

<script lang="ts" setup>
definePageMeta({
    layout: 'base'
})

const views = ref([
    {id: 1, title: 'Лес', image: './view.png'},
    {id: 2, title: 'Театр', image: './view2.png'},
    {id: 3, title: 'Знакомства', image: './view3.png'},
    {id: 4, title: 'Комедии', image: './view4.png'},
    {id: 5, title: 'Спортзал', image: './view5.png'},
    {id: 6, title: 'Конный спорт', image: './view6.png'},
    {id: 7, title: 'Парусный спорт', image: './view7.png'},
    {id: 8, title: 'Еда', image: './view8.png'},
    {id: 9, title: 'Фотографии', image: './view9.png'},
    {id: 10, title: 'Фотографии', image: './view3.png'},
    {id: 11, title: 'Дайвинг', image: './view7.png'},
    {id: 12, title: 'Параплыны', image: './view2.png'},
    {id: 13, title: 'Прогулки', image: './view.png'},
])
const abouts = ref([
    {id: 1, title: 'Лес', image: './view.png'},
    {id: 2, title: 'Театр', image: './view2.png'},
    {id: 3, title: 'Знакомства', image: './view3.png'},
    {id: 4, title: 'Комедии', image: './view4.png'},
    {id: 5, title: 'Спортзал', image: './view5.png'},
])
</script>

<style>
.citata{
  font-size: 15px;
    color: #626262;
    width: 90%;
    margin: 15px 0px 0px 0px;
    display: flex;
    align-items: baseline;
    font-weight: 500;
    border-top: 1px solid #d2d2d2;
    padding: 15px 0px 0px 0px;
}
.shtrih{
  width: 35px;
  margin: 0px 5px 0px 0px;
}
.intresting{
  margin: 25px 0px 15px 0px;
  border-bottom: 1px solid #D2D2D2;
  padding: 0px 0px 25px 0px;
}.intresting h2{
  font-size: 17px;
  font-weight: 700;
  margin: 0px 0px 15px 0px;
}
.page-user-info-content{
  font-size: 17px;
}
.similar-ad-tags{
  
}
.similar-ads-content{
  display: flex;
  gap: 35px;
  flex-wrap: wrap;
  justify-content: flex-start;
  
}
.similar-ads{

}.similar-ads h2{
  font-size: 17px;
  font-weight: 700;
  margin: 25px 0px 25px 0px;
}
.similar-ad{
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 19%;
}.similar-ad img{
  width: 90px;
  height: 90px;
  border-radius: 9px;
  margin: 0px 0px 15px 0px;
}.similar-ad{
  font-size: 17px;
  font-weight: 700;
}.similar-ad span{
  font-size: 15px;
  font-weight: 400;
  color: #626262;
}
.page-status-list-content{
  text-decoration: underline;
  text-decoration: none;
  font-size: 19px;
  font-weight: 700;
  color: #000000;
  width: 90%;
}.page-status-list-content span{
  color: #000000;
}
.page-title-status{
  display: inline-flex;
  align-items: center;
  margin: 0px 0px 15px 0px;
  font-size: 12px;
}.page-title-status img{
  max-width: 15px;
}.page-title-status img{
  margin: 0px 9px 0px 0px;
}
.page-title-layout{
  border-bottom: 1px solid #D2D2D2;
  padding: 0px 0px 25px 0px;
  margin: 9px 0px 25px 0px;
  display: inline-flex;
  flex-direction: column;
}
.page-title-layout span{
  font-weight: 700;
}
.page-user{
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  max-width: 100%;
  font-weight: 700;
  margin: 0px 0px 15px 0px;
  width: 100%;
  border-bottom: 1px solid #D2D2D2;
  padding: 0px 0px 25px 0px;
}.page-user img{
  width: 259px;
  height: 259px;
  border-radius: 15px;
  margin: 0px 15px 0px 0px;
}
.page-user-info{
  display: flex;
  flex-direction: column;
  font-size: 17px;
}.page-user-info span{
  font-size: 15px;
  font-weight: 500;
}
.page-profile{
  border-bottom: 1px solid #D2D2D2;
  padding: 0px 0px 25px 0px;
}
.page-profile-description{border-bottom: 1px solid #D2D2D2;
    margin: 0px 0px 25px 0px;
    padding: 0px 0px 25px 0px;}
.page-profile-description button{
  margin: 15px 0px 0px 0px;
  border-radius: 50px;
  border: 1px solid #D2D2D2;
  padding: 9px 15px 9px 15px;
  font-size: 17px;
  display: inline-flex;
  align-items: center;
  border: 1px solid #DDD;
  /* border-radius: 7px; */
  box-shadow: 1px 1px 2px rgba(0,0,0,0.1);
}.page-profile button{  
  margin: 15px 0px 0px 0px;
  border-radius: 50px;
  border: 1px solid #D2D2D2;
  padding: 9px 15px 9px 15px;
  font-size: 17px;
  display: inline-flex;
  align-items: center;
  border: 1px solid #DDD;
  /* border-radius: 7px; */
  box-shadow: 1px 1px 2px rgba(0,0,0,0.1);
}.page-profile button img{
  height: 17px;
  width: auto;
  margin: 0px 5px 0px 0px;
}
.page-profile-description button img{
  height: 17px;
  width: auto;
  margin: 0px 5px 0px 0px;
}.road-view{
  margin: 0px 0px 0px 0px!IMPORTANT;
}
</style>