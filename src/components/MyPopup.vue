<template>
    <div class="popup" :class="{'disabled-popup': showPopup == false}">
      <div class = "popup-item" v-for="(Header, index) in tableHeader[0].headerItem" :key="index">
        <p>{{Header}}</p>
        <input class="pop-input" type="text" autocomplete="on" >
      </div>
      <button class="add-button" @click="$emit('addRow')">Добавить</button>
    </div>
</template>

<script>
    export default {
        props: ['tableHeader']
    }
</script>

<style scoped>
.popup{
  transition: all 0.3s ease;
  transform: translate(-7%,-102%);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  background: #fff;
  border-radius: 17px;
  padding: 20px;
  width: 600px;
  border-bottom-right-radius: 0 ;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  z-index: 1000;
  left: 47%
}
.popup-item{
  width: 80%;
}
.disabled-popup{
  display: none;
}
.popup p{
  margin-top: 20px;
}
.popup input{
  width: 100%;
  height: 40px;
}
.popup button{
  margin-top: 20px;
  height: 45px;
}
.add-button{
  margin-top:20px;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.25);
  width: 100px;
  display: flex;
  justify-content: center;
  color: #fff;
  align-items: center;
  background: #198754;
  cursor: pointer;
  position: relative;
}
.add-button:hover{
    background: #fff;
    color: #000; 
}
</style>