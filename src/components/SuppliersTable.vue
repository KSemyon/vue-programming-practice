<template>
    <v-div>
        <h1>Поставщики</h1>
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
                "INN", "Название", "Почта", "Телефон", "Адрес"
            ],
            tableContent: [
                [372523715592,'udarytokag','udarytokag.@mail.ru','7(914)864-35-92','310948, г Сергиев Посад, пер. Домодедовская, 39'],
                [111074240439,'ylinecobuq','ylinecobuq.@mail.ru','7(914)878-58-70','310948, г Сергиев Посад, пер. Домодедовская, 37'],
                [346946915745,'yruhypufew','yruhypufew.@mail.ru','7(914)179-72-32','459618, г Серпухов, проезд Ладыгина, 63'],
                [854100967547,'acavuqoviq','acavuqoviq.@mail.ru','7(914)085-70-80','331403, г Москва, бульвар Чехова, 77'],
                [278298932927,'uhuhulyral','uhuhulyral.@mail.ru','7(914)543-03-50','828770, г Луховицы, спуск Славы, 74'],
                [789906678634,'Unujynyvuc','Unujynyvuc.@mail.ru','7(914)388-26-83','333468, г Люберцы, пер. Сталина, 68']
            ]
        }
    }
}
</script>

<style>
</style>