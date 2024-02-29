<template>
  <slot>
    <div class="content">
    <div class="chat-layout">
    <NuxtLink to="">
    <div class="chat-messege">
    <img src="~/assets/img/photo.png" alt="">
    <div class="chat-messege-user-info">
    <span>Алёна</span><p>Отвези меня в Дубай ...</p>
    </div>
    </div>
  </NuxtLink>
  <NuxtLink to="">
    <div class="chat-messege">
    <img src="~/assets/img/photo2.png" alt="">
    <div class="chat-messege-user-info">
    <span>Алёна</span><p>Отвези меня в Дубай ...</p>
    </div>
    </div>
  </NuxtLink>
    <div class="chat-content"></div>
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
.content{
  width: 100%;
}
.chat-layout{
  background-color: #F9F9F9;
  width: 100%;
  border-radius: 15px;
  padding: 15px 15px 15px 15px;
  display: flex;
  flex-direction: column;
  min-height: 70dvh;
}.chat-layout a{
  width: 100%;
  display: flex;
}
.chat-messege{
  width: 100%;
  padding: 12px 15px 12px 15px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  cursor: pointer;
}.chat-messege:hover{
  background-color: #EFEFEF;
}
.chat-messege img{
  width: auto;
  height: 45px;
  border-radius: 50px;
  margin: 0px 12px 0px 0px;
}.chat-messege-user-info{
  line-height: 1.2;
}.chat-messege-user-info span{
  font-weight: 700;
  font-size: 17px;
}.chat-messege-user-info p{
  font-size: 14px;
  color: #A3A3A3;
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
</style>