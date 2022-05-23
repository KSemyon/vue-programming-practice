<template>
    <div class="kitchen-search">
        <input @input="$emit('search',searchValue)" v-model="searchValue"
        type="text" name="" id="table" placeholder="Поиск...">
        <img class = "search-button" src="\assets\premium-icon-magnifying-glass-2811790.png" alt="">
        
    </div>
</template>

<script>
    export default {
        data(){
            return{
                searchValue: ''
            }
        }
    }
</script>

<style>
.hide{
  display: none;
}
.kitchen-search{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  max-width: 1288px;
  margin-bottom: 20px;
}
input{
  border-radius: 17px;
  border: none;
  height: 57px;
  padding-left: 40px;
  width: 100%;
  max-width: 90%;
  background: #FFFFFF;
  box-shadow: 1px 5px 17px rgba(0, 0, 0, 0.25);
}


.search-button{
  margin-left: 5px;
  width: 80px;
}
</style>