<template>
  <my-nav/>
  <sign-up
    :canEnter="canEnter"
    @checkPas="signup"
    :class="correctLoginPass == false ? 'noncorrect': ''"
  />
  <my-dashboard
    :darkMode="darkMode"
    v-if="canEnter"
    @mouseenter="hover = true"
    @mouseleave="hover = false"
    :class="hover == true ? '': 'minimized'"  
  >
  <dashboard-links
    @click="selected"
    v-for="(text, index) in dashboard[0].titles"
    :key="index"
    :id="index"
    :links="dashboard[0].links[index]"
    :src="dashboard[0].Dlogos[index]"
    :class="index == 0? 'disabled': ''"
  > {{dashboard[0].titles[index]}} </dashboard-links>
  </my-dashboard>


  <b-container><router-view
    v-if="canEnter"
  ></router-view></b-container>
  
</template>

<script>

import SignUp from '@/components/SignUp.vue'
import MyNav from '@/components/MyNav.vue'
import DashboardLinks from '@/components/DashboardLinks.vue'
import MyDashboard from '@/components/MyDashboard.vue'

  export default {
    components: {SignUp,MyNav,MyDashboard, DashboardLinks},
    data(){
      return{
        dashboard: [
          {titles: ['Сотрудники', 'Поставщики', 'Товары', 'Склад', 'Заказы'],
           Dlogos: ['./../assets/chef.png', './../assets/food-serving.png', './assets/menu.png', './assets/sklad.png', './assets/income.png'],
           links: ['kitchen', 'guests-room', 'menu', 'storage', 'finance']
           }
        
        ],
        
        CurrentSection:false,
          
        canEnter: false,
        correctLoginPass: true,
        hover: false,
        isActive: false,
        value: '',
        currentPage: 0,
      }
    },
    methods:{
      selected(e){
        this.CurrentSection = e.target.id
      },

      signup(login, pass){
        if (login == 'admin' && pass == 'admin'){
          this.canEnter = true
          localStorage.login = login
          localStorage.pass = pass
        }else{
          alert('Не верный логин или пароль!')
          this.correctLoginPass = false
        }
      },
      




    },
    mounted(){
        if(localStorage.login){
          this.canEnter = true
        }
        console.log(localStorage.login)
      }
  }
  
</script>
<style>

body{
  font-family: 'Istok Web', sans-serif;
  background: #fffbe5;
  overflow: hidden;
}

.container{
  padding: 3%;
}


.btn{
  margin-top: 20px;
  background: #198754;
  color: #fff;
}
.btn:hover{
  background: #fff;
  border: 1px solid #198754;
}
.noncorrect input{
  border: 1px solid red
}
.noncorrect input:focus{
  outline: none;
}

</style>