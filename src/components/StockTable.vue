<template>
<v-div>
    <h1>Склады</h1>
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
                "Id", "Адрес", "ID Сотрудника"
            ],
            tableContent: [
                [1,'843628, г Самара, Ленина, 31',3],
                [2,'126345, г Иркутск, Бабушкина, 29',2],
                [3,'193643, г Владивосток, Кирова, 5',6]
            ]
        }
    }
}
</script>

<style>
</style>