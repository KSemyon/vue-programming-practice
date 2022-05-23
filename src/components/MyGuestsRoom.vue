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
            headerItem: ['#', ' ИНН', 'Индекс', 'Фирма', 'Почта']
          }
        ],
        tableData: [
          {
            Items: [
              {
                tableItem: ['1', '7727563751', '142192', 'ТТК', 'ТТК@mail.ru'], id: 1 
              },
              {
                tableItem: ['2', '7727563774', '142100', 'ПГаз', 'ПГаз@mail.ru'], id:2
              },
              {
                tableItem: ['3', '7727563772', '142102', 'Absolute','Absolute@mail.ru'], id:3
              },
              {
                tableItem: ['4', '7727563771', '142109', 'Golaz', 'Golaz@mail.ru'], id:4
              },
              {
                tableItem: ['5', '7727563778', '142108', 'Hsad', 'Hsad@mail.ru'], id:5
              },
              {
                tableItem: ['6', '7727563776', '142107', 'York', 'York@mail.ru'], id:6
              },
              {
                tableItem: ['7', '7727563775', '142106', 'Энерго', 'Энерго@mail.ru'], id:7
              },

            ]
          },
          {
            Items:[
              {
                tableItem: ['8', '7727563774', '142105', 'NY', 'NY@mail.ru'], id:8
              },
              {
                tableItem: ['9', '7727563773', '142104', 'Some', 'Some@mail.ru'], id:9
              }
            ]
          },
          {
            Items:[
              {
                tableItem: ['10', '7727563713', '142113', 'Fant', 'Fant@mail.ru'], id:10
              },
              {
                tableItem: ['11', '7727563712', '142121', 'All', 'All@mail.ru'], id:11
              }
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
        localStorage.tableDataGuests = JSON.stringify(this.tableData)
        this.showPopup = false

      },

      removeRow(item){
        this.tableData[this.currentPage].Items = this.tableData[this.currentPage].Items.filter(p => p.id !== item.id)
        localStorage.tableDataGuests = JSON.stringify(this.tableData)

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
      if(localStorage.tableDataKitchen){
        this.tableData = JSON.parse(localStorage.tableDataGuests)
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