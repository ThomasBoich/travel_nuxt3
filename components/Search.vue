<template>
  <!-- <div></div> -->
  <form action="" method="post">
    <USelectMenu
      class="where"
      v-model="selected"
      :loading="loading"
      :searchable="search"
      placeholder="Куда.."
      option-attribute="name"
      multiple
      trailing
      by="id"
      style="border: none;box-shadow:none;font-size:17px;padding: 0px 0px 0px 25px;width:97%;"
    />
    <UInput size="sm" placeholder="Откуда едем" class="is" style="border:none;box-shadow: none;font-size:17px;padding: 0px 0px 0px 25px;color: #676767;" />

    <USelectMenu
      class="where"
      v-model="selected"
      :loading="loading"
      :searchable="search"
      placeholder="Куда.."
      option-attribute="name"
      multiple
      trailing
      by="id"
      style="border: none;box-shadow:none;font-size:17px;padding: 0px 0px 0px 25px;width:97%;"
    />
    <Button class="search" label="Найти" severity="contrast" rounded />
  </form>
</template>

<script lang="ts" setup>
const loading = ref(false);
const selected = ref([]);

async function search(q: string) {
  loading.value = true;

  const users = await $fetch<any[]>("https://jsonplaceholder.typicode.com/users", {
    params: { q },
  });

  loading.value = false;

  return users;
}
</script>

<style scoped>
.is {
  border-right: 1px solid #000;
  width: 100%;
}
form {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: calc(100% - 27px);
  max-width: 768px;
  border-radius: 50px;
  border: 1px solid #00000025;
  padding: 5px 5px 5px 5px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
}
.where {
  width: 100%;
  border: none;
}
.ring-gray-300,
.shadow-sm {
  --tw-ring-opacity: 0;
  --tw-ring-opacity: 0;
}
.search {
  background-color: #00c7bb;
  padding: 15px;
  min-width: 125px;
  display: flex;
  font-weight: 500 !important;
  border-radius: 50px;
  text-align: center;
  justify-content: center;
}
</style>
