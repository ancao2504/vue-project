<template>
    <div class="content" id="content">
        <app-header></app-header>
        <div class="main-content">
           <router-view />
        </div>
        <app-footer></app-footer>
    </div>
</template>

<script>
    import Header from './components/shared/Header.vue'
    import Footer from './components/shared/Footer.vue';

    export default {
        components: {
            appHeader: Header,
            appFooter: Footer,
        },

        data() {
            return {
               
            }
        },

        methods: {
           
        },
        computed: {
            
        },
    };
</script>
<style>
    @import './assets/css/main.css';
    @import './assets/css/vendors.min.css';
    @import './assets/css/bootrap.min.css';
</style>
