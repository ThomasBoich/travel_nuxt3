<template>
  <slot>
    <div class="content">
    <div class="chat-layout">
    <div class="chat-nav" style="border-bottom: 1px solid #EEEEEE;display:flex;justify-content:space-between;">
      <div class="message-user-nav-layout">
        <NuxtLink to="/chat" style="width:max-content;"><img src="~/assets/img/left.png" class="message-chat" /></NuxtLink>
        <NuxtLink to="/page"><div class="message-user-nav"><img src="~/assets/img/photo.png" />Алёна</div></NuxtLink>
      </div>
      <img src="~/assets/img/addmark.png" class="message-addfavorite" />
    </div>
    <div class="chat-content-message">
    <div class="message right">
      <div class="message-content">
        <p>Поехали со мной детка =)</p>
        <img src="~/assets/img/photo2.png" />
      </div>      
    </div>    
    <div class="message left">
      <div class="message-content">
        <p>Хорошо :*</p>
        <img src="~/assets/img/photo.png" />
      </div>      
    </div>
    </div>
    
    <div class="message-input">
      <input type="text" placeholder="Введите сообщение">
      <img src="~/assets/img/smile.png" />
      <img src="~/assets/img/file.png" style="right: 42px;" />
      <button></button>
    </div>    
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

.message-user-nav-layout a{
  width: max-content;
  min-width: max-content;
  margin: 0px 0px 0px 0px;
}.message-user-nav-layout a img{
  margin: 0px 9px 0px 0px;
}.message-user-nav{
  color: #000000;
}
.message-chat img{}
img.message-chat:hover{
  opacity: 0.7;
  cursor: pointer;
}
.message-addfavorite{}
.message-addfavorite:hover{
  opacity: 0.7;
  cursor: pointer;
}
.message-user-nav-layout{
  display: flex;
  align-items: center;
}.message-user-nav:hover{
  opacity: 0.7;
  cursor: pointer;
}
.message-user-nav-layout img{
  margin: 0px 25px 0px 0px;
}
.message-input{
  border-top: #EEEEEE 1px solid;
  padding: 15px 0px 0px 0px;
  position: relative;
  align-items: center;
  display: flex;
}.message-input img{
  position: absolute;
  float: right;
  right: 15px;
}.message-input img:hover{
  cursor: pointer;
  opacity: 0.7;
}
.chat-layout input{
  border: 1px solid #DCDCDC;
  border-radius: 50px;
  padding: 9px 15px 9px 15px;
  width: 100%;
}
.message-content{
  width: max-content;
  position: relative;
}
.message-content p{
  padding: 15px;
  background-color: #4dd8cf;
  border-radius: 10px;
  color: #000000;
  width: max-content;
  position: relative;
}
.message-content img{
  height: 25px;
  width: auto;
  border-radius: 50px;
  position: relative;
  top: -9px;
  border: 4px solid #F9F9F9;
}
.right .message-content{
  float: right;
}
.right .message-content img{
  float: right;
}
.right p{
  background-color: #EFEFEF;
}
.left .message-content{
  float: left;
}
.right{
  float: right;
}
.left{
  float: left;
}
.chat-layout{
  position: relative;
}
.message{
  width: 100%;
  margin: 15px 0px 0px 0px;
}
.message-user-nav{
  display: flex;
  align-items: center;
  font-size: 17px;
  font-weight: 700;
}
.message-user-nav img{
  width: 27px;
  height: 27px;
  border-radius: 50px;
  margin: 0px 9px 0px 0px;
}
.chat-content-message{
  width: 100%;
  height: 70dvh;
  padding: 15px;
  overflow-y: auto;
}
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
}
.chat-folders a{
  width: max-content;
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
  padding: 5px 15px 15px 0px;
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
  /* min-height: 70dvh; */
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