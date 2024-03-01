<template>
  <slot>
    <div class="content">
    <div class="chat-layout">
    <div class="chat-nav">
    <h2>Мои чаты <span>2</span></h2>
    <div class="prime-chat-menu">
    <NuxtLink to="/chat" >Все 2</NuxtLink>
    <NuxtLink to="/chat/favorite" class="active">Избранные 9</NuxtLink>
    </div>
    <div class="chat-folders-layout">
    <div class="chat-folders">
    <NuxtLink to=""><img src="~/assets/img/folder.png" alt="">Знакомые</NuxtLink>
    <NuxtLink to=""><img src="~/assets/img/folder.png" alt="">Длинное наз..</NuxtLink>
    </div>
    <button @click="isOpen = true"><img src="~/assets/img/plus.png" alt=""></button>
    <UModal v-model="isOpen" style="z-index: 99999;align-items: flex-start;">
      <div class="p-4 addFavorite" style="z-index: 99999;align-items: flex-start;">
       <input type="text" placeholder="Название папки..">
       <div class="users-folder">
       <div class="users-folder-add">
       <!-- <span></span>         -->
        <label for="user1"><img src="~/assets/img/photo.png" alt=""> Марина</label>
        <input checked type="checkbox" name="user1" id="user1"/>
       </div>
       <div class="users-folder-add">
       <!-- <span></span>         -->
        <label for="user2"><img src="~/assets/img/photo2.png" alt=""> Настя</label>
        <input checked type="checkbox" name="user2" id="user2"/>
       </div>        
       </div>
       <button>Создать папку</button>
      </div>
    </UModal>
    </div>
    </div>
    <NuxtLink to="message">
    <div class="chat-messege">
    <img src="~/assets/img/photo.png" alt="">
    <div class="chat-messege-user-info">
    <div class="info-message">
      <span>Алёна</span><p>Отвези меня в Дубай ...</p>
    </div>
    <button><img src="~/assets/img/favorite.png" alt=""></button>
    
    </div>
    </div>
  </NuxtLink>
  <NuxtLink to="message">
    <div class="chat-messege">
    <img src="~/assets/img/photo2.png" alt="">
    <div class="chat-messege-user-info">
    <div class="info-message">
      <span>Алёна</span><p>Отвези меня в Дубай ...</p>
    </div>
    <button><img src="~/assets/img/favorite.png" alt=""></button>
    
    </div>
    </div>
  </NuxtLink>
  <NuxtLink to="message">
    <div class="chat-messege">
    <img src="~/assets/img/photo.png" alt="">
    <div class="chat-messege-user-info">
    <div class="info-message">
      <span>Алёна</span><p>Отвези меня в Дубай ...</p>
    </div>
    <button><img src="~/assets/img/favorite.png" alt=""></button>
    
    </div>
    </div>
  </NuxtLink>
  <NuxtLink to="message">
    <div class="chat-messege">
    <img src="~/assets/img/photo2.png" alt="">
    <div class="chat-messege-user-info">
    <div class="info-message">
      <span>Алёна</span><p>Отвези меня в Дубай ...</p>
    </div>
    <button><img src="~/assets/img/favorite.png" alt=""></button>
    
    </div>
    </div>
  </NuxtLink>    <NuxtLink to="message">
    <div class="chat-messege">
    <img src="~/assets/img/photo.png" alt="">
    <div class="chat-messege-user-info">
    <div class="info-message">
      <span>Алёна</span><p>Отвези меня в Дубай ...</p>
    </div>
    <button><img src="~/assets/img/favorite.png" alt=""></button>
    
    </div>
    </div>
  </NuxtLink>
  <NuxtLink to="message">
    <div class="chat-messege">
    <img src="~/assets/img/photo2.png" alt="">
    <div class="chat-messege-user-info">
    <div class="info-message">
      <span>Алёна</span><p>Отвези меня в Дубай ...</p>
    </div>
    <button><img src="~/assets/img/favorite.png" alt=""></button>
    
    </div>
    </div>
  </NuxtLink>
  <NuxtLink to="message">
    <div class="chat-messege">
    <img src="~/assets/img/photo.png" alt="">
    <div class="chat-messege-user-info">
    <div class="info-message">
      <span>Алёна</span><p>Отвези меня в Дубай ...</p>
    </div>
    <button><img src="~/assets/img/favorite.png" alt=""></button>
    
    </div>
    </div>
  </NuxtLink>
  <NuxtLink to="message">
    <div class="chat-messege">
    <img src="~/assets/img/photo2.png" alt="">
    <div class="chat-messege-user-info">
    <div class="info-message">
      <span>Алёна</span><p>Отвези меня в Дубай ...</p>
    </div>
    <button><img src="~/assets/img/favorite.png" alt=""></button>
    
    </div>
    </div>
  </NuxtLink>    <NuxtLink to="message">
    <div class="chat-messege">
    <img src="~/assets/img/photo.png" alt="">
    <div class="chat-messege-user-info">
    <div class="info-message">
      <span>Алёна</span><p>Отвези меня в Дубай ...</p>
    </div>
    <button><img src="~/assets/img/favorite.png" alt=""></button>
    
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
const isOpen = ref(false)
</script>

<style scoped>
.users-folder-add label{
  display: flex;
  align-items: center;
  width: 97%!IMPORTANT;
  cursor: pointer;
}.users-folder-add label:hover{opacity: 0.5;}.users-folder-add{
  display: flex;
  align-items: center;
  width: 100%;
  cursor: pointer;
}.users-folder-add input{
  margin: 0px 0px 0px 0px!IMPORTANT;
  width: max-content!IMPORTANT;
  border-bottom: 1px solid #DDDDDD;
}
.users-folder-add{
  display: flex;
  align-items: center;
  margin: 0px 0px 15px 0px;
  cursor: pointer;
}.users-folder-add img{
  margin: 0px 15px 0px 0px;
}
.users-folder{}
.users-folder img{
  width: auto;
  height: 25px;
  border-radius: 50px;
}
.addFavorite{

}.addFavorite input{
  width: 100%;
  outline: none;
  margin: 0px 0px 15px 0px;
}.addFavorite button{
  font-size: 15px;
  font-weight: 700;
  background-color: #4dd8cf;
  border-radius: 50px;
  padding: 9px 15px 9px 15px;
  color: #000000;
  margin: 15px 0px 0px 0px;
}
.chat-folders-layout{
  width: 100%;
  display: flex;
  align-items: center;
}
.chat-folders{
  width: calc(100% -35px);
  display: inline-flex;
  align-items: center;
  overflow: hidden;
}.chat-folders a img{
  margin: 0px 9px 0px 0px;
  line-height: 0;
}.chat-folders a{
  display: inline-flex;
  align-items: center;
  padding: 5px 9px 5px 9px;
  border-radius: 9px;
  margin: 0px 9px 0px 0px!IMPORTANT;
}.chat-folders a:hover{
  background-color: #EFEFEF;
}
.prime-chat-menu{
  display: flex;
  min-width: max-content;
  border-right: 1px solid #DDDDDD;
  padding: 0px 0px 0px 0px;
  margin: 0px 15px 0px 0px;
}
.chat-nav{
  display: flex;
  align-items: center;
  padding: 5px 15px 15px 15px;
  width: 100%;
}.chat-nav h2{
  font-weight: 700;
  font-size: 19px;
  width: max-content;
  min-width: max-content;
  border-right: 1px solid #DDDDDD;
  margin: 0px 25px 0px 0px;
  padding: 0px 25px 0px 0px;
}.chat-nav span{
  color: #D2D2D2;
}
.chat-nav a{
  font-weight: 700;
  cursor: pointer;
  color: #A4A4A4;
  font-size: 15px;
  min-width: max-content;
  margin: 0px 9px 0px 0px;
  padding: 5px 9px 5px 9px;
  border-radius: 9px;
}.chat-nav a.active{
  color: #666666;
  background-color: #EFEFEF;
}.chat-nav a:hover{
  background-color: #EFEFEF;
}
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
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  position: relative;
}.chat-messege-user-info img{width: auto;height: 19px;cursor: pointer;}.chat-messege-user-info span{
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