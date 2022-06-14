<template>
    <v-div>
        <h1>Продукты</h1>
        <v-table :headers="Headers" :content="Content" />
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
            Headers: [
                "ID", "Название", "Цена продажи"
            ],
            Content: [
                [1,'Китайские палочки для еды',50],
                [2,'Одноразовые салфетки',50],
                [3,'Бумага A4',350],
                [4,'Zeva',150],
                [5,'Одноразовые стаканчики',50],
                [6,'Батончики "BogDal"',1000]
            ]
        }
    }
} 
</script>

<style>
</style>