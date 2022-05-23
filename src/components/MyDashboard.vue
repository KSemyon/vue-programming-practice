<template>
    <div class="dashboard" :style="{background: `${darkMode? '#000': '#fff'}`}">
    <ul>
        <slot></slot>
    </ul>
    </div>
</template>

<script>
    export default {
        props:['darkMode']
    }
</script>

<style>
.dashboard{
  position: fixed;
  z-index: 10;
  background: #ffff;
  width: 270px;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.25);
  transition: all 0.3s ease;
  height:100%;
}
ul{
    margin: 0;
    padding: 20px 0 0 0;
    }
</style>