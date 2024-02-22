<script lang="ts" setup>
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

const users = ref([
    {id: 1, first_name: 'Виктория', photo: './photo.png', description: 'Описание профиля пользователя'},
    {id: 2, first_name: 'Инчон', photo: './photo2.png', description: 'Описание профиля пользователя'},
    {id: 3, first_name: 'Настя', photo: './photo3.png', description: 'Описание профиля пользователя'},
    {id: 4, first_name: 'Сергей', photo: './photo4.png', description: 'Описание профиля пользователя'},
    {id: 5, first_name: 'Алёна', photo: './photo5.png', description: 'Описание профиля пользователя'},
])
</script>
<template>
    <div class="index-friends-layout" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
        <div class="index-friends-title">
            <h2>Найди друга по интересам</h2>
            <button>Как найти надежного попутчика ></button>
        </div>
        <div class="friends-layout">
            <div class="road-view">
                <span v-for="view in views" :key="view.id"><img :src="view.image" alt="">{{ view.title }}</span>
            </div>
            <div class="index-friends-users">
                <div class="index-friends-user" v-for="user in users" :key="user.id">
                    <img :src="user.photo" alt="">
                    <span>{{ user.first_name }}</span>
                    <p>{{ user.description }}</p>
                </div>
            </div>
        </div>
        <button class="other">Показать всех</button>
    </div>
</template>
<style scoped>
    .index-friends-layout{
        width: 100%;
        margin: 75px auto auto;
    }
    .index-friends-layout h2{
        font-size: 25px;
        font-weight: 700;
    }
    .friends-layout{width: 100%;margin: 0 auto;}
    .index-friends-title{display: flex;justify-content: space-between;align-items: center;margin: 0px 0px 25px 0px;}
    .road-view{display: flex;flex-wrap: wrap;gap: 15px;margin:0px 0px 25px 0px;}
    .road-view span{
        border-radius: 50px;
        border:1px solid #EBEBEB;
        padding: 9px 15px 9px 15px;
        min-width: max-content;
        display: flex;
        align-items: center;
        font-size: 17px;
    }
    .road-view span img{
        margin: 0px 5px 0px 0px;
    }
    .index-friends-users{
        margin: 50px 0px 0px 0px;
        display: flex;
        justify-content: space-between;
        overflow: hidden;
        overflow-x: auto;
    }
    .index-friends-user{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        width: max-content;
    }
    .index-friends-user img{
        border-radius: 1000px;
        max-width: 150px;
        max-height: 150px;
        margin: 0px 0px 15px 0px;
    }
    .index-friends-user span {
        font-size: 19px;
        font-weight: 700;
    }
    .index-friends-user p{
        font-size: 15px;
        color: #9B9B9B;
        width: 79%;
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
@media (max-width: 490px){
    .index-friends-layout{
        margin: 0px auto 35px;
    }
    .index-friends-title{
        width: calc(100% -30px);
        flex-direction: column;
        align-items: flex-start;
        padding: 0px 0px 0px 15px;
    }
    .index-friends-title h2{
        font-size: 5vw;
    }
    .road-view{
        overflow: hidden;
        overflow-x: auto;
        display: grid;
        grid-template-columns: repeat(7, 1fr);
    grid-template-rows: repeat(2, auto);
    padding: 0px 15px 0px 15px;
    }
    .index-friends-user{
        margin: 0px 15px 0px 0px;
    }
    .index-friends-user img{
        max-width: 135px;
    }.index-friends-user p{
        font-size: 12px;
        padding: 0px;
        width: 100%;
        margin: 0px 0px 0px 0px;
    }
    .index-friends-users{
        padding: 0px 15px 0px 15px;
        margin: 0px 0px 35px 0px;
    }
}
</style>