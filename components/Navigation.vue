<template>
  <div class="navigation">
    <div class="navigantion-layer">
      <div class="logo">
        <a href="/">Trave<span>lo</span></a>
      </div>
      <div class="auth-user">
        <div class="no-login">
          <addContent></addContent>
          <!-- <span class="create-button">+ Создать</span> -->
          <Button
            class="login"
            label="Войти"
            severity="contrast"
            rounded
            @click="isOpen = true"
          />
        </div>
      </div>
    </div>
  </div>
  <!-- <UButton label="Open" @click="isOpen = true" /> -->
  <UModal v-model="isOpen" prevent-close style="z-index: 1150">
    <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
      <template #header>
                  <!-- <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
            Modal
          </h3> -->
          <UButton
            color="gray"
            variant="ghost"
            icon="i-heroicons-x-mark-20-solid"
            class="-my-1"
            @click="isOpen = false"
          />
        <div class="flex items-center justify-between" style="height: 75dvh;">
          <div class="text-layout">
          <img src="~/assets/img/planet.png" alt="" style="max-width:49px;max-height: auto;position: relative;left: -5px;margin: 0px 0px 15px 0px;">
          <span>
          Войдите в систему,
          чтобы открыть все возможности
          Trave<span style="color:#4dd8cf;">lo</span>.
          </span>
          <form method="post" action="" @submit.prevent="" style="box-shadow: none;border:none;">
            <input type="text" placeholder="Электронная почта">
            <input type="password" placeholder="Пароль">
            <button>Войти</button>
          </form>
         <NuxtLink>Нет аккаунта? <span>Зарегистрироваться</span></NuxtLink>
         <div class="copy">
          Продолжай, Вы соглашайтесь с <span>Условиями использования</span> и <span>Политикой конфиденциальности</span>, а так же с <span>Политикой использования файлов cookie</span>.
         </div>
          </div>
        </div>
      </template>

      <Placeholder class="h-32" />
    </UCard>
  </UModal>
</template>

<script lang="ts" setup>
const isOpen = ref(false);
</script>

<style scoped>

.text-layout{
  font-weight: 900;
  font-size: 25px;
  width: 100%;
  padding: 2vw;
  display: inline-flex;
  flex-direction: column;
}.text-layout .copy{
  font-size: 13px;
  text-align: center;
  font-weight: 700;
  margin: 25px 0px 0px 0px;
  color: #b5b5b5;
}
.text-layout a{
  font-size: 17px;
  text-align: center;
  font-weight: 700;
}.text-layout a span{
  color: #4ac9c0;
}.text-layout a span{cursor: pointer;}
.text-layout a span:hover{
  color: #54e9df;
}
.text-layout button{
  font-size: 17px;
  font-weight: 700;
  background-color: #4dd8cf;
  padding: 15px;
  border-radius: 50px;
  margin: 0px 0px 25px 0px;
  width: 100%;
}.text-layout button:hover{
  background-color: #54e9df;
}.text-layout button:focus{
  background-color: #4ac9c0;
}

.text-layout form{
  display: flex;
  flex-direction: column;
  margin: 25px 0px 0px 0px;
}

.text-layout input{
  font-size: 17px;
  font-weight: 700;
  border: 1px solid #000000;
  width: 100%;
  padding: 15px 15px 15px 25px;
  margin: 0px 0px 15px 0px;
  border-radius: 50px;
}
.navigation {
  width: 100%;
  position: sticky;
  top: 0;
  display: flex;
  padding: 15px 15px 15px 15px;
  background-color: #ffffff;
  border-bottom: 1px solid #e8e8e8;
  z-index: 999;
}
.navigantion-layer {
  max-width: 1279px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}
.login {
  margin: 0px 0px 0px 25px;
  padding: 9px 19px 9px 19px;
  background-color: #000000;
  color: #ffffff;
  border-radius: 50px;
}

.no-login {
  display: flex;
  align-items: center;
}
.logo {
  font-size: 25px;
  font-weight: 900;
  color: #000000;
}
.logo a {
  color: #000000;
}
.logo span {
  color: #4dd8cf;
}
.no-login .create-button {
  border-right: 1px solid #d6d6d6;
  padding: 0px 25px 0px 0px;
  font-weight: 500;
  font-size: 17px;
  cursor: pointer;
}
.no-login .create-button:hover {
  opacity: 0.9;
}
@media(max-width: 350px){
  .no-login button{
    display: none;
  }
}
</style>
