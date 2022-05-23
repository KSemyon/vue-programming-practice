<template>
    <div class="pagination">
        <div class="page-container">
            <div class="page"
                @click="setPage"
                v-for="(page, index) in tableData"
                :key="index"
                :id="index"
                :class="{
                    'current-page': currentPage === index
                }"
            >{{index+1}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                currentPage: 0
            }
        },
        props: ['tableData'],
        methods: {
            setPage(e){
                this.currentPage = Number(e.target.id)
                this.$emit('setPage', this.currentPage)
            }
        }
    }
</script>

<style scoped>
.pagination{
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.25);
  margin-top:20px;
  background: #ffff;
  height: 42px;
  display: inline-block;

}
.page-container{
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.page{
  position: relative;
  height: 100%;
  width:65px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.page::before{
content: '';
background: #198754;
width: 1px;
height: 100%;
position: absolute;
top:0;
right:0;
}
.page:last-child::before{
  display: none;
}
.current-page{
  background: #198754;

}

</style>