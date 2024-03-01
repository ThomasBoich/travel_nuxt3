<template>
  <!-- <div></div> -->
  <form action="" method="post">
    <ButtonsWhatSearch></ButtonsWhatSearch>
    <!-- <UInput
      size="sm"
      placeholder="Откуда едем?"
      class="is"
      style="
        border: none;
        box-shadow: none;
        font-size: 17px;
        padding: 0px 0px 0px 25px;
        color: #676767;
      "
    /> -->

    <ButtonsTheWhereSearch></ButtonsTheWhereSearch>

    <USelectMenu
      class="where"
      v-model="selected"
      :loading="loading"
      :searchable="search"
      placeholder="Куда?"
      option-attribute="name"
      multiple
      trailing
      by="id"
      style="
        border: none;
        box-shadow: none;
        font-size: 17px;
        padding: 0px 0px 0px 0px;
        width: 100%!IMPORTANT;
      "
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


@media (max-width: 770px){
  form{
    display: flex;
    flex-direction: column;
    border-radius: 9px;
  }.search{
    width: calc(100% - 30px);
    border-radius: 9px;
    padding: 9px 5px 9px 5px;
    margin: 0px 0px 15px 0px;
  }
  .where{
    width: 100%;
    padding: 15px 0px 15px 15px!IMPORTANT;
    margin: 0px 0px 0px 0px!IMPORTANT;
    display: inline-flex;
    height: 55px;
  }
}

</style>
