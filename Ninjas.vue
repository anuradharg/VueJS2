<template>
    <ul>
        <li v-for="ninja in ninjas" v-bind:key="ninja"> <!-- v-bind used for ESLint error -->
            {{ninja}}
        </li>
    </ul>
</template>

<script>
    export default {

        data: function () {
            //data() {
            return {
                ninjas: ['Yoshi','Mario','Ryu']
            }
        }

    }
</script>

<style>

</style>