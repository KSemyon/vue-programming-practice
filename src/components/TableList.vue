<template>
    <ul>
      <li v-for="(Item, index) in tableData[currentPage].Items" :key="index">
        <table-item :Item="Item"/>
        <button
            class="btn"
            @click="$emit('remove', Item)"
        >Del</button>
      </li>
    </ul>
</template>

<script>
import TableItem from '@/components/TableItem.vue'

    export default {
        components: {TableItem},
        props: ['tableData', 'currentPage']
    }
</script>

<style scoped>
.hide{
  display: none;
}
li{
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    position: relative;
    list-style: none;
}
li::before{
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    background: #000;
    bottom: 0;
}
li:last-child::before{
    display: none;
}
.btn{
    color: #fff;
    margin-right: 20px;
    margin-bottom: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20px;
    width: 5%;
    background: #198754;
}
.btn:hover{
    color: #000;
    background: #fff;
}
</style>