<template>
    <div v-if="canEnter == false" class="signup">
            <h1>ВОЙТИ</h1>
        
        <div class="login">
            <p>Логин</p>
            <input  @keyup.enter="$emit('checkPas', login, password)" v-model="login" type="text">
        </div>
        <div class="password">
            <p>Пароль</p>
            <input  @keyup.enter="$emit('checkPas', login, password)" v-model="password" type="text">
        </div>
        <button @click="$emit('checkPas', login, password)" class="btn">Войти</button>
    </div>
</template>

<script>
    
    export default {
        data(){
            return{
                login: 'admin',
                password: 'admin'
            }
        },
        
        props: ['canEnter'],
        methods:{
            
        }
    }
</script>

<style scoped>
.signup{
  background: #FFFFFF;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  width: 340px;
  height: 408px;
  border-radius: 17px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  margin-top: 10%;
}
 .login,.password{
  width: 300px;
  margin-left: 20px;
}
.signup p{
  padding: 0;
  margin: 5px 0;
}
</style>