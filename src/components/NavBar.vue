<template>
<div class="container-fluid">
  <ul>
    <li><a class="navbar-brand" href="#"><VBut @click="$router.push('/Employess')">Сотрудники</VBut></a></li>
    <li><a class="navbar-brand" href="#"><VBut @click="$router.push('/Suppliers')">Поставщики</VBut></a></li>
    <li><a class="navbar-brand" href="#"><VBut @click="$router.push('/orders')">Заказы</VBut></a></li>
    <li><a class="navbar-brand" href="#"><VBut @click="$router.push('/Stock')">Склады</VBut></a></li>
    <li><a class="navbar-brand" href="#"><VBut @click="$router.push('/product')">Продукты</VBut></a></li>
    <li><a class="navbar-brand" href="#"><VBut @click="$emit('logOut', false)">Выход</VBut></a></li>
    <li class ="right"><img class="navbar-img" src = "..\img\user.jpg" alt=""></li>
  </ul>  

</div>
</template>

<script>
export default {
  name: "v-nav"
};
</script>

<style>
.container-fluid {
  padding:0px
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
  vertical-align: middle;
}

li {
  float: left;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  
}

li a:hover {
  background-color: #111;
}

.navbar-img{
  width:50px;
  height:50xp;
  border-radius:100px;
  float:right;
  margin-top:13px;
}

.right {
    float:right;
    margin-right:100px;
}

</style>