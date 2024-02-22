<template>
<select class="what-search">
<option value="Я ищу" selected disabled>Я ищу</option>
<option value="Мужчину">Мужчину</option>
<option value="Женжину">Женщину</option>
<option value="Семью">Семью</option>
<option value="Не важно">Не важно</option>

</select>
</template>

<script lang="ts" setup>
const people = ['Мужчину', 'Женщину', 'Пару', 'Семью', 'Не важно']

const selected = ref()
const query = ref('')
</script>

<style scoped>
.what-search {
  border-right: 1px solid #000;
  width: 75% !important;
  display: flex;
  box-shadow: none !important;
  padding: 0px 15px 0px 15px;
  font-size: 17px !important;
  outline: none;
  margin: 0px 0px 0px 0px;
}.what-search option{
  font-size: 15px!IMPORTANT;
  padding: 5px;
  margin: 15px 0px 0px 0px;
}
</style>
