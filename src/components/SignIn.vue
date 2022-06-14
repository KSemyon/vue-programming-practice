<template>
    <div class="sign-in-form">
        <form class="login" @submit.prevent="login">
            <h1>Авторизация</h1>
            <label>Имя пользователя</label>
            <MInp required v-bind:value="login" @input="login = $event.target.value" type="text"
                placeholder="Login" />
            <label>Пароль</label>
            <MInp required v-bind:value="password" @input="password = $event.target.value" type="password"
                placeholder="Password" />
            <div class='button'><VBut @click="checkLogin" type="submit">Войти</VBut></div>
        </form>
    </div>
</template>

<script>
export default {
    name: 'sign-in',
    data() {
        return {
            login: '',
            password: ''
        }
    },
    methods: {
        checkLogin() {
            if ((this.login == "admin") && (this.password == "admin")) {
                this.$emit('logIn', true);
            } else {
                alert("Пароль/логин admin")
            }
        }
    }
}
</script>

<style>
.sign-in-form {
    position: absolute;
    top: 30%;
    left: 40%;
    width: 20%;
    background-color:#a0a0a024;
    border:solid 1px #a0a0a024;
    border-radius:10px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 35px;
    margin: 5px 0 5px 0;
}

.login {
    width: 100%;
    display: flex;
    flex-direction: column;
}

.button {
    background-color:#000;
    border:solid 1px #000;
    border-radius:10px;
}
</style>