<template>
    <div>
        <h1>List of Ninjas</h1>
        <ul>
            <li v-for="ninja in ninjas" v-bind:key="ninja"> <!-- v-bind used for ESLint error -->
                {{ninja}}
            </li>
        </ul>
    </div>
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

<style scoped>
h1{
    color:green
}
</style>