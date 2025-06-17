<template>
    <div>
        <h1>welcome to the vuejs {{ name }}</h1>

        <router-link to="/about">Go to About</router-link>

    </div>
</template>

<script>
export default {
    name: "ExampleComponent",
    data(){
        return{
            name: 'king'
        }
    }

}

</script>

<style scoped>
h1{
    color:red;
}
</style>
