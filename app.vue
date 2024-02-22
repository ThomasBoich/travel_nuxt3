<script lang="ts" setup>
</script>
<template>
  <Navigation></Navigation>
  <NuxtLoadingIndicator />
  <NuxtLayout>
  <NuxtPage></NuxtPage>
  </NuxtLayout>
</template>
<style>
body {
  font-family: "Inter", sans-serif;
}
.content {
  max-width: 1279px;
  margin: auto auto 100px;
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
.info-slide{
  background-color: #F6F5F2;
  border-radius: 35px;
  padding: 25px 25px 25px 75px;
  min-height: 350px;
  margin: 75px 0px 75px 0px;
  display: flex;
  align-items: center;
  flex-direction: row;
}.info-slide span{font-size: 35px;font-weight:900;max-width: 50%;margin: 0px 0px 25px 0px;line-height: 1.5;}
.info-slide p{font-size: 15px;color: #7B7B7B;margin: 0px 0px 50px 0px;padding: 0;max-width: 50%;}
.info-slide button{
  background-color: #F2994A;
  font-size: 17px;
  font-weight: 700;
  color: #FFFFFF;
  border-radius: 50px;
  padding: 15px 25px 15px 25px;
  width: max-content;
}
.info-slide-layout{
  display: flex;
  flex-direction: column;
  height: max-content;
  margin: 50px 0px 50px 0px;
}
@media (max-width: 490px){
  form{
    font-size: 15px!IMPORTANT;
  }
  .other{
    width: calc(100% - 30px);
  }
  .info-slide{
    width: calc(100% - 30px);
    margin: 0px auto 0px;
    padding: 0px 15px 15px 15px;
    border-radius: 9px;
  }
  .info-slide span{
    font-size: 7vw;
    width: 100%;
    max-width: 100%;
    margin: 0px 0px 15px 0px;
  }.info-slide p{
    width: 100%;
    max-width: 100%;
    margin: 0px 0px 25px 0px;
  }
  .info-slide-layout{
    margin: 25px 0px 25px 0px;
  }
}
</style>
