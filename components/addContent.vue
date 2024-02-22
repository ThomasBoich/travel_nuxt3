<template>
  <UDropdown :items="items" :popper="{ placement: 'bottom-start' }">
    <UButton
      color="white"
      label="Создать"
      trailing-icon="i-heroicons-chevron-down-20-solid"
    />
  </UDropdown>
</template>

<script lang="ts" setup>
const items = [
  // [
  //   {
  //     label: "Profile",
  //     avatar: {
  //       src: "https://avatars.githubusercontent.com/u/739984?v=4",
  //     },
  //   },
  // ],
  [
    {
      label: "Путешествие",
      icon: "i-heroicons-pencil-square-20-solid",
      shortcuts: ["E"],
      click: () => {
        console.log("Edit");
      },
      disabled: true,
    },
    {
      label: "Запись в блоге",
      icon: "i-heroicons-document-duplicate-20-solid",
      shortcuts: ["D"],
      disabled: true,
    },
  ],
  [
    // {
    //   label: "Archive",
    //   icon: "i-heroicons-archive-box-20-solid",
    // },
    {
      label: "Выйти из системы",
      icon: "i-heroicons-arrow-right-circle-20-solid",
      disabled: true,
    },
  ],
  // [
  //   {
  //     label: "Delete",
  //     icon: "i-heroicons-trash-20-solid",
  //     shortcuts: ["⌘", "D"],
  //   },
  // ],
];
</script>

<style scoped>
button {
  border: none;
  font-size: 17px;
  --tw-ring-opacity: 0;
  box-shadow: none;
  border-right: 1px solid #d6d6d6 !important;
  padding: 0px 25px 0px 0px;
  border-radius: 0px;
}
</style>
