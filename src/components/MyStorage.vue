<template>


  <div class="container">
  

  <my-search
    @search="search"
    :value="value"
  >
  </my-search>

  <my-table
    @remove="removeRow"
    :tableData="tableData"
    :tableHeader="tableHeader"
    :currentPage="currentPage"
  />
  <div class="end-section">
    <my-pages
    :currentPage="currentPage"
    :tableData="tableData"
    @setPage="setPage"
  />
  <div @click="showPopupToggle" class="add-button">Добавить</div>

  </div>
  <my-popup
  v-if="showPopup"
  :tableHeader="tableHeader"
  @addRow="addRow"
  />
  </div>
</template>

<script>
    import MyPopup from '@/components/MyPopup.vue'
    import MySearch from '@/components/MySearch.vue'
    import MyTable from '@/components/MyTable.vue'
    import MyPages from '@/components/MyPages.vue'
  export default {
    components: { MySearch, MyTable, MyPages, MyPopup},
    data(){
      return{
        popup: '',
        showPopup: false,
        tableHeader: [
          {
            headerItem: ['#', 'Название', 'кол-во', 'Стоимость']
          }
        ],
        tableData: [
          {
            Items: [
              {
                tableItem: ['1', 'ДСП', '200', '500Р'], id: 1 
              },
             

            ]
          },
          {
            Items:[
              {
                tableItem: ['2', 'Стулья', '20', '400Р'], id:2
              },
            ]
          },
        ],
    
        value: '',
        currentPage: 0
      }
    },
    methods:{
    
      setPage(currentPage){
        this.currentPage = currentPage
      },
      
      showPopupToggle(){
        if (this.showPopup == true){
          this.showPopup = false
        }else{
          this.showPopup = true
        }
      },
      addRow(e){
        const input = document.querySelectorAll('.pop-input')
        var x = []
        input.forEach(function(el){
          x.push(el.value)
        })
        this.tableData[this.currentPage].Items.push({tableItem: x})
        localStorage.tableDataStorage = JSON.stringify(this.tableData)
        this.showPopup = false

      },

      removeRow(item){
        this.tableData[this.currentPage].Items = this.tableData[this.currentPage].Items.filter(p => p.id !== item.id)
        localStorage.tableDataStorage = JSON.stringify(this.tableData)

      },


      search(searchValue){
        console.log('hui')
        let tableItems = document.querySelectorAll('.table li')
        var value = searchValue
        if (value != ''){
          tableItems.forEach(function(el){
            if (el.innerText.search(value) == -1){
              el.classList.add('hide')
            }else{
              el.classList.remove('hide');
            }
          });
        } else{
          tableItems.forEach(function(el){
            el.classList.remove('hide')
          })
        }
      }





    },
    mounted(){
      if(localStorage.tableDataStorage){
        this.tableData = JSON.parse(localStorage.tableDataStorage)
      }
    }
  }
</script>

<style scoped>

.end-section{
  display: flex;
  justify-content: space-between;
  width: 100%;
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