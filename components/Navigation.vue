<template>
  <div class="navigation">
    <div class="navigantion-layer">
      <div class="logo">
        <a href="/">Trave<span>lo</span></a>
      </div>
      <div class="auth-user">
        <div class="no-login">
          <span class="create-button">+ Создать</span>
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
  <UModal v-model="isOpen" prevent-close style="z-index: 150;">
    <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
      <template #header>
        <div class="flex items-center justify-between">
          <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
            Modal
          </h3>
          <UButton
            color="gray"
            variant="ghost"
            icon="i-heroicons-x-mark-20-solid"
            class="-my-1"
            @click="isOpen = false"
          />
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
.navigation {
  width: 100%;
  position: sticky;
  top: 0;
  display: flex;
  padding: 15px 15px 15px 15px;
  background-color: #ffffff;
  border-bottom: 1px solid #e8e8e8;
  z-index: 99;
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
</style>
