<template>
    <v-div>
        <h1>Сотрудники</h1>
        <v-table :headers="tableHeaders" :content="tableContent" />
    </v-div>
</template>

<script>
import VTable from "@/components/VTable.vue";

export default {
    components: {
        VTable
    },
    data() {
        return {
            tableHeaders: [
                "ID", "Имя", "Отчество", "Фамилия", "Телефон", "Почта"
            ],
            tableContent: [
                [0, 'Богдан','Константинович','Скрипкин','7(914)844-52-41','zxc.@mail.ru'],
                [1, 'Артём','Владимирович','Щербаков','7(914)629-19-46','Щербаков.@mail.ru'],
                [2, 'Мирон','Кириллович','Дмитриев','7(914)889-59-73','Дмитриев.@mail.ru'],
                [3, 'Максим','Мирославович','Соколов','7(914)260-96-72','Соколов.@mail.ru'],
                [4, 'Артур','Даниилович','Третьяков','7(914)260-51-24','Третьяков.@mail.ru'],
                [5, 'Макар','Фёдорович','Демин','7(914)439-48-62','Демин.@mail.ru']
            ]
        }
    }
} 
</script>

<style>
</style>