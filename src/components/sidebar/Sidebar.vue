<template>
    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-4">
        <div class="sidebar-ads"><ins data-ad-client="ca-pub-1228209458646183" data-ad-slot="8538206399" data-ad-format="auto" data-full-width-responsive="true" class="adsbygoogle" style="display: block;"></ins></div>
        <div class="sidebar">
            <div class="widget">
                <div>
                    <h3><span>Chuyên mục</span></h3>
                    <div class="widget-content w-category">
                        <ul class="sidebar-ul-category">
                            <li v-for="(item, index) in categories">
                                <i class="fa fa-angle-right"></i> <a :href="'/'+item.slug" :title="item.name">{{item.name}} ({{item.count}})</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="widget">
                <div>
                    <h3><span>Dùng Thử</span></h3>
                    <div class="widget-content"><a href="https://my.azdigi.com/aff.php?aff=932&amp;url=https://azdigi.com/">
                        <img src="https://images.azdigi.com/images/2017/06/25/476x249-openvz-vps-ssd.png">
                        </a>
                    </div>
                </div>
            </div>
            <div class="widget">
                <div>
                    <h3><span>Mới nhất</span></h3>
                    <div class="widget-content w-news">
                        <ul class="widget-news">
                            <li v-for="(item, index) in latest">
                                <a :href="'/'+item.slug">
                                    <img v-bind:src="pathPicture + item.image" v-bind:alt="item.title" v-bind:title="item.title"/> 
                                </a> 
                                <h4><a :href="'/'+item.slug" :title="item.title">{{item.title}}</a></h4>
                                <span>{{item.view}} lượt xem</span> 
                                <div class="clear"></div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="widget">
                <div>
                    <h3><span>Xem nhiều</span></h3>
                    <div class="widget-content w-news">
                        <ul>
                            <li v-for="(item, index) in most_view">
                                <a :href="'/'+item.slug">
                                    <img v-bind:src="pathPicture + item.image" v-bind:alt="item.title" v-bind:title="item.title"/> 
                                </a> 
                                <h4><a :href="'/'+item.slug" :title="item.title">{{item.title}}</a></h4>
                                <span>{{item.view}} lượt xem</span> 
                                <div class="clear"></div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="widget">
                <div>
                    <h3><span>Hosting wordpress</span></h3>
                    <div class="widget-content"><a href="https://my.azdigi.com/aff.php?aff=932&amp;url=https://azdigi.com/">
                        <img src="https://images.azdigi.com/images/2017/06/25/476x249-wordpress-hosting-text.png">
                        </a>
                    </div>
                </div>
            </div>
            <div class="widget">
                <div>
                    <h3><span>Bạn bè</span></h3>
                    <div class="widget-content">
                        <div class="w-category">
                            <ul>
                                <li><i class="fa fa-angle-right"></i><a href="https://hoclaravel.vn" target="_blank" title="Học Laravel">Học Laravel</a></li>
                                <li><i class="fa fa-angle-right"></i><a href="https://fuvavi.com/" target="_blank" title="Thủ thuật Frontend – Kinh nghiệm thiết kế web">Blog Fuvavi</a></li>
                                <li><i class="fa fa-angle-right"></i><a href="https://didauchillout.com/" target="_blank" title="Đi đâu chill out">Đi đâu chill out</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="sidebar-ads-bottom"><ins data-ad-client="ca-pub-1228209458646183" data-ad-slot="4602830813" data-ad-format="auto" data-full-width-responsive="true" class="adsbygoogle" style="display: block;"></ins></div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                blogs: [],
                categories: [],
                latest: [],
                most_view : [],    
                pathPicture: 'https://hocwordpress.vn/img/100x80/vue/',
                limit: 10
            };
        },
        created() {
            this.axios.get("https://hocwordpress.vn/wp-json/api/sidebar").then((response) => {
                const http_code = response.data.code;
                if(http_code == 200) {
                    this.blogs = response.data.data;
                }
            })

            // categories
            this.axios.get("https://hocwordpress.vn/wp-json/api/categories").then((response) => {
                const http_code = response.data.code;
                if(http_code == 200) {
                    this.categories = response.data.data;
                }
            })
            // mới nhất
            this.axios.get("https://hocwordpress.vn/wp-json/api/news?limit=5").then((response) => {
                const http_code = response.data.code;
                if(http_code == 200) {
                    this.latest = response.data.data;
                }
            })
            // xem nhiều
            this.axios.get("https://hocwordpress.vn/wp-json/api/news-view?limit=5").then((response) => {
                const http_code = response.data.code;
                if(http_code == 200) {
                    this.most_view = response.data.data;
                }
            })
        },
        methods: {
        },
    }
</script>