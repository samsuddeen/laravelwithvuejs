<template>
    <div>
        <h1>welcome to the vuejs {{ name }}</h1>
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
