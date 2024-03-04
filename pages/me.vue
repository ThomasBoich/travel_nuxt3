<template>
  <slot>
    <div class="content">
    <div class="user-layer">
    <div class="user-info-layer">
    <img src="~/assets/img/photo.png" class="user-avatar"/>
    <div class="user-info">
    <h2>Алёна</h2>
    <span>Online</span>
    <p>Люблю летать за чужой счето =)</p>
    </div>
    </div>
    <NuxtLink to="chat"><button style="max-width: max-content;font-size:15px;"><img src="~/assets/img/Communication.png" /> Написать сообщение</button></NuxtLink>
    </div>
    <div class="user-nav">
    <NuxtLink to="">Фото</NuxtLink>
    <NuxtLink to="">Отзывы</NuxtLink>
    <NuxtLink to="">Объявления</NuxtLink>
    </div>
  </div>
  
  </slot>

</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'base'
})
</script>

<style scoped>
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