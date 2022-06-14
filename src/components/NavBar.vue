<template>
<div class="container-fluid">
  <ul>
    <li><a class="navbar-brand" href="#"><VBut @click="$router.push('/Employess')">Сотрудники</VBut></a></li>
    <li><a class="navbar-brand" href="#"><VBut @click="$router.push('/Suppliers')">Поставщики</VBut></a></li>
    <li><a class="navbar-brand" href="#"><VBut @click="$router.push('/orders')">Заказы</VBut></a></li>
    <li><a class="navbar-brand" href="#"><VBut @click="$router.push('/Stock')">Склады</VBut></a></li>
    <li><a class="navbar-brand" href="#"><VBut @click="$router.push('/product')">Продукты</VBut></a></li>
    <li><a class="navbar-brand" href="#"><VBut @click="$emit('logOut', false)">Выход</VBut></a></li>
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

</style>