<template >
    <Navbar/>
    <div class="">
        <button @click="routeHome">Home</button>
    </div>
</template>

<script>
import Navbar from "../reusable/navbar.vue";
export default {
    name: "index",
    components: {
        Navbar
    },
    methods: {
        routeHome() {
            alert("Route");
        }
    },
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
