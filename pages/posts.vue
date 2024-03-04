
<template>
  <slot>
    <div class="content">
    <div class="user-layer">
    <div class="user-info-layer">
    <img src="~/assets/img/photo.png" class="user-avatar"/>
    <div class="user-info">
    <div class="user-rating">
      <h2>Алёна, 25 лет</h2>
      <img src="~/assets/img/pic_location_grey.png" alt=""><span>Москва</span>
      <div class="rating_layout_star" data-total-value="5">
              <div class="rating_star" data-item-value="5">★</div>
              <div class="rating_star" data-item-value="4">★</div>
              <div class="rating_star" data-item-value="3">★</div>
              <div class="rating_star" data-item-value="2">★</div>
              <div class="rating_star" data-item-value="1">★</div>
            </div>
    </div>
    <span>Online</span>
    <p>Люблю летать за чужой счето =)</p>
    </div>
    </div>
    <NuxtLink to="chat"><button style="max-width: max-content;font-size:15px;"><img src="~/assets/img/Communication.png" /> Написать сообщение</button></NuxtLink>
    </div>
    <div class="user-nav">
    <NuxtLink to="/me">О себе</NuxtLink>
    <NuxtLink to="/comments">Отзывы</NuxtLink>
    <NuxtLink to="/posts" class="active">Объявления</NuxtLink>
    </div>
    <div class="posts-layout">
    <div class="rating_item">
      <img src="~/assets/img/country.png" alt="">
      <div class="post-layout">
        <div class="post_item">
          <h2><img src="~/assets/img/pic_location_grey.png" alt="">Сейшелы, Маэ</h2> <span>Знакомства</span>
        </div>
        <div class="date">
        <span>5 Декабря</span>
        Поездка с целью развлечься господа =)
      </div>
    </div>
    </div>
    <div class="rating_item">
      <img src="~/assets/img/country.png" alt="">
      <div class="post-layout">
        <div class="post_item">
          <h2><img src="~/assets/img/pic_location_grey.png" alt="">Чеджу, Острова </h2> <span>Знакомства</span>
        </div>
        <div class="date">
        <span>5 Декабря</span>
        Ну тут сами понимаете ^_^
      </div>
    </div>
    </div>
  </div>
  </div>

  </slot>

</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'base'
})

const active = true

</script>

<style scoped>
.post_item h2 {display: inline-flex;align-items: center;}
.post_item h2 img{
  width: auto;
  height: 19px;
  margin: 0px 5px 0px 0px;
}
.post_item span{
  font-size: 15px;
  padding: 9px 15px 9px 15px;
  border-radius: 91px;
  background-color: #F8EFE1;
  color: #454545;
  margin: 0px 0px 0px 15px;
  border-radius: 1px solid #F3E2C8;
}
a.active{
  color: #000000!IMPORTANT;
}
.posts-layout{
  display: flex;
  flex-direction: column;
  margin: 15px 0px 0px 0px;
}

.rating_layout{
    display: flex;
    flex-direction: column;
    margin: 0px 0px 60px 0px;
}
.rating_top{
    display: flex;
    justify-content: space-between;
    align-content: center;
    margin: 0px 0px 40px 0px;
}
.post-layout{
  width: 100%;
}
.rating_top a{
    padding: 12px 15px 12px 15px;
    background-color: #00b44e;
    color: #FFFFFF!IMPORTANT;
    border-radius: 150px;
    font-weight: 500;
    height: 49px;
}
.rating_item{
    padding: 25px 25px 25px 25px;
    border-radius: 15px;
    border: none;
    margin: 0px 0px 15px 0px;
    background-color: #F7F7F7;
    display: flex;
    align-items: center;
}
.rating_item img{
  width: auto;
  height: 90px;
  border-radius: 15px;
  margin: 0px 15px 0px 0px;
}
.date{
    display: flex;
    flex-direction: column;
}.date span{
    color: #9e9e9e;
}

.rating_item .date{
    border: none;
    padding: 0px 0px 0px 0px;
    margin: 0px 0px 0px 0px;
}
.post_item h2{
    font-size: 19px;
    font-weight: 700;
}
.post_item{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: max-content;
}

.rating_layout_star{
    display: inline-flex;
    flex-direction: row-reverse;
}
.rating_star{
    color: #dcdcdc;
    cursor: pointer;
    font-size: 19px;
    transition: 0.2s;
}
.rating_star:hover,
.rating_star:hover ~ .rating_star{
    color: #f0be19;
}
.date_and_rating{
    display: flex;
    align-items: center;
}
.date_rating{
    margin: 0px 15px 0px 0px;
}
.rating_layout_star[data-total-value="1"] .rating_star:nth-child(n + 5),
.rating_layout_star[data-total-value="2"] .rating_star:nth-child(n + 4),
.rating_layout_star[data-total-value="3"] .rating_star:nth-child(n + 3),
.rating_layout_star[data-total-value="4"] .rating_star:nth-child(n + 2),
.rating_layout_star[data-total-value="5"] .rating_star:nth-child(n + 1){
    color: #f0be19;
}

.user-nav{
  width: 100%;
  padding: 15px 15px 15px 25px;
  border-radius: 25px;
  border: 1px solid #d2d2d2;
  margin: 15px 0px 0px 0px;
  display: flex;
  align-items: center;
}.user-nav a{
  font-size: 17px;
  font-weight: 700;
  margin: 0px 25px 0px 0px;
  color: #9F9F9F;
}.user-nav a:hover{
  cursor: pointer;
  color: #000000;
}button img{
  width: auto;
  height: 19px;
  margin: 0px 5px 0px 0px;
}
.user-info-layer{
  display: flex;
  align-items: center;
}
.user-avatar{
  border-radius: 500px;
  width: auto;
  height: 95px;
  margin: 0px 25px 0px 0px;
}
.user-layer{
  padding: 25px 25px 25px 25px;
  border-radius: 25px;
  border: 1px solid #d2d2d2;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.user-layer button{margin: 0px 0px 0px 0px;
  border-radius: 50px;
  border: 1px solid #ebebeb;
  padding: 9px 15px 9px 15px;
  font-size: 17px;
  display: inline-flex;
  align-items: center;
  border: 1px solid #DDD;
  /* border-radius: 7px; */
  box-shadow: 1px 1px 2px rgba(0,0,0,0.1);}
.content{
  width: 100%;
}
.user-info{
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  line-height: 1.5;
}.user-info h2{
  font-weight: 700;
  font-size: 19px;
}.user-info span{
  font-size: 15px;
  color: #d2d2d2;
}
.user-info p{
  margin: 15px 0px 0px 0px;
}
</style>