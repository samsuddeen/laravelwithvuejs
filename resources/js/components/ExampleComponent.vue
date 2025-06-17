<template>
    <div>
        <h1>welcome to the vuejs {{ name }}</h1>

        <router-link to="/about">Go to About</router-link>
        <br>

        <button @click="goToAbout">Alternative way</button>

    </div>
</template>

<script>
export default {

  mounted(){
        console.log('example component');
    },

    data(){
        return{
            name: 'king'
        }
    },

    methods: {
        goToAbout(){
            this.$router.push('/about');
        }

    }

}

</script>

<style scoped>
h1{
    color:red;
}
</style>
