<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-8">
                <div class="content-box-news">
                    <h1 class="single-title">Giới thiệu</h1>
                    <article class="post-content">Hiển thị nội dung giới thiệu</article>
                    <div class="send-props" cardsSection="send props"></div>
                    <ListUser></ListUser>
                </div>
            </div>
            <app-sidebar :titleHeader="title"></app-sidebar>
        </div>
    </div>
</template>

<script>
    import ListUser from '@/components/ListUser.vue'
    import Sidebar from '@/components/sidebar/Sidebar.vue'

    export default {
        name: 'About',
        components: {
            appSidebar: Sidebar,
            ListUser
        },
       

        data() {
            return {
               title: 'Understanding Props in vuejs'
            }
        },

        methods: {
           
        },
        computed: {
            
        },
    };
</script>