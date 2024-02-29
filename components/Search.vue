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
        width: %;
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
.where{
  width: 100%;
  cursor: pointer!IMPORTANT;
  height: 40px;
  display: flex;
  z-index: 145;
  padding: 0px 0px 0px 25px!IMPORTANT;
}
.truncate{
  width: 100%;
  cursor: pointer;
}
select{
  cursor: pointer;
}
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
  border: 1px solid #00000015;
  padding: 5px 5px 5px 5px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
  font-weight: 500;
  font-size: 17px!IMPORTANT;
    transition: all 0.3s;
  -moz-transition: all 0.3s;
  -webkit-transition: all 0.3s;
}
form:hover{
  transition: all 0.3s;
  -moz-transition: all 0.3s;
  -webkit-transition: all 0.3s;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.09);
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
