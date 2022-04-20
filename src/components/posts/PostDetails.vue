<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-8">
                <div class="content-box-news">
                    <div class="props"></div>
                    <h1 class="single-title">{{contents.title}}</h1>
                    <div class="meta-single"><span>Ngày đăng: {{contents.date}}</span> <span>Lượt xem: {{contents.view}} lượt</span></div>
                    <article class="post-content" v-html="contents.content_full"></article>
                    <div class="tag singlehk">
                        <a :href="item.slug" rel="tag" v-for="(item, index) in contents.tag">{{item.name}}</a>
                    </div>
                    <div id="author">
                        <img src="https://hocwordpress.vn/wp-content/uploads/2020/03/avatar.jpg" alt="Huy Kira"> 
                        <div class="info">
                            <h4>Tìm hiểu vuejs</h4>
                            <p>Tự tìm hiểu vuejs</p>
                        </div>
                        <div class="clear"></div>
                    </div>
                    <!-- BÀI VIẾT LIÊN QUAN -->
                    <div class="rel">
                        <h3>Bài viết liên quan</h3>
                        <div class="rel-content content-box-news">
                            <div class="list-news">
                                <a href="/cach-tat-tuy-chon-chuyen-doi-ngon-ngu-tren-giao-dien-dang-nhap-wordpress" title="Cách tắt tuỳ chọn chuyển đổi ngôn ngữ trên giao diện đăng nhập WordPress"><img src="/img/196x123/vue/2022/04/cach-tat-tuy-chon-chuyen-doi-ngon-ngu-tren-giao-dien-dang-nhap-wordpress.jpeg" alt="Cách tắt tuỳ chọn chuyển đổi ngôn ngữ trên giao diện đăng nhập WordPress"></a> 
                                <h4><a href="/cach-tat-tuy-chon-chuyen-doi-ngon-ngu-tren-giao-dien-dang-nhap-wordpress" title="Cách tắt tuỳ chọn chuyển đổi ngôn ngữ trên giao diện đăng nhập WordPress">Cách tắt tuỳ chọn chuyển đổi ngôn ngữ trên giao diện đăng nhập WordPress</a></h4>
                                <span class="meta">16 - 04 - 2022</span> 
                                <p class="content-box">Bạn có muốn xoá tuỳ chọn chuyển đổi ngôn ngữ trên giao diện đăng nhập WordPress không?
                                    Việc tắt trình...
                                </p>
                                <div class="clear"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- SIDEBAR -->
            <app-sidebar></app-sidebar>
            <!-- END SIDEBAR -->
        </div>
    </div>
</template>

<script>
    import Sidebar from '@/components/sidebar/Sidebar.vue'

    export default {
        components: {
            appSidebar: Sidebar,

        },

        data() {
            return {
               contents: [],
               related_posts: []
            }
        },

        created() {
            const slug = this.$route.params.slug;
            const url_detail = 'https://hocwordpress.vn/wp-json/api/news/' + slug;
            this.axios.get(url_detail).then((response) => {
                const http_code = response.data.code;
                if(http_code == 200) {
                    this.contents = response.data.data;
                }
            })
            // bài viết liên quan
        },

        methods: {
           
        },
        computed: {
            
        },
    };
</script>
