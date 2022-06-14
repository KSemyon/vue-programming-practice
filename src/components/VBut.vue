<template>
    <div class="btn">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'VBut'
}
</script>

<style>
.btn {
    padding: 10px 15px;
    margin: 5px;
    background: none;
    font-size: 12pt;
    color:#fff;
}
</style>