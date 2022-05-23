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
            headerItem: ['#', 'Фамилия', 'Имя', 'Отчество', 'Должность', 'Зарплата']
          }
        ],
        tableData: [
          {
            Items: [
              {
                tableItem: ['1', 'Кузьмин', 'Семён', 'Владимирович', 'Директор', '1000000'], id: 1 
              },
              {
                tableItem: ['2', 'Иванов', 'Иван', 'Иванович', 'Бухгалтер', '10000'], id:2
              },
              {
                tableItem: ['3', 'Данилова', 'Виктория', 'Данииловна','Бухгалтер', '10000'], id:3
              },
              {
                tableItem: ['4', 'Маркелов', 'Роман', 'Кириллович', 'Бухгалтер', '10000'], id:4
              },
              

            ]
          },
          {
            Items:[
              {
                tableItem: ['8', 'Петров', 'Петр', 'Петрович', 'Менеджер', '100000'], id:5
              },
              {
                tableItem: ['9', 'Иванов', 'Иван', 'Петрович', 'Менеджер', '10000'], id:6
              }
            ]
          },
          {
            Items:[
              {
                tableItem: ['10', 'Петров', 'Петр', 'Петрович', 'Директор', '1000000'], id:7
              },
              {
                tableItem: ['11', 'Иванов', 'Иван', 'Петрович', 'Менеджер', '10000'], id:8
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
        localStorage.tableDataKitchen = JSON.stringify(this.tableData)
        this.showPopup = false

      },

      removeRow(item){
        this.tableData[this.currentPage].Items = this.tableData[this.currentPage].Items.filter(p => p.id !== item.id)
        localStorage.tableDataKitchen = JSON.stringify(this.tableData)

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
        this.tableData = JSON.parse(localStorage.tableDataKitchen)
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