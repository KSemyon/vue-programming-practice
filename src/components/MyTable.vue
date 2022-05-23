<template>
    <div class="table">
    <div class="header">
        <div class="headerItem"
          v-for="(headerItem, index) in tableHeader[0].headerItem"
          :key="index"
        ><strong>{{headerItem}}</strong></div>
        </div>
    <table-list
      @remove="removeRow"
      :tableData="tableData"
      :currentPage="currentPage"
    />
  </div>
  
</template>

<script>
import TableList from '@/components/TableList.vue'


    export default {
        components: {TableList},
        props: ['tableHeader', 'tableData', 'currentPage'],
        methods: {
          removeRow(item){
            this.$emit('remove', item)
          }
        }
    }
</script>

<style scoped>

.table{
  background: #fff;
  box-shadow: 0px 4px 21px rgba(0, 0, 0, 0.25);
  border-radius: 17px;
  width: 100%;
  margin: 0 auto;
}

.header{
  display: flex;
  width: 100%;
  margin-left: 20px;
}
.headerItem{
  width: 14%;
  font-size: 24px;

}
.headerItem:first-child{
  width: 10%;
}

</style>