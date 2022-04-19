<template>
    <header>
        <div class="top-header">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                        <form action="/" method="GET" role="form">
                            <div class="main-input"><i class="fa fa-search"></i> <input type="text" id="s" name="s" placeholder="Từ khóa ...... " class="form-control input-search"></div>
                        </form>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                        <div class="top-social"><a href="https://facebook.com/hocwordpressdotvn" target="_blank" rel="noreferrer"><i class="fa fa-facebook"></i></a> <a href="https://twitter.com/huykira" target="_blank" rel="noreferrer"><i class="fa fa-twitter"></i></a> <a href="https://instagram.com/huykira" target="_blank" rel="noreferrer"><i class="fa fa-instagram"></i></a> <a href="https://youtube.com/huykira" target="_blank" rel="noreferrer"><i class="fa fa-youtube-play"></i></a></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="main-header">
            <div class="container">
                <div class="logo">
                    <a href="/" title="Học Wordpress từ a đến z"><img src="https://hocwordpress.vn/wp-content/uploads/2020/03/hocwordpress.png" alt="Học Wordpress từ a đến z"></a> 
                    <h1>Học Wordpress từ a đến z</h1>
                </div>
            </div>
        </div>
        <div class="main-menu">
            <div class="container">
                <div class="content-menu">
                    <ul>
                        <li class="">
                            <router-link to="/">Trang chủ</router-link>
                        </li>
                        <li class="">
                            <router-link to="/about">Về chúng tôi</router-link>
                        </li>
                        <li class="">
                            <a href="/wordpress-co-ban">
                                WP cơ bản <!---->
                            </a>
                            <!---->
                        </li>
                        <li class="">
                            <a href="/lap-trinh-theme">
                                WP theme <!---->
                            </a>
                            <!---->
                        </li>
                        <li class="">
                            <a href="/huong-dan-woocommerce">WooCommerce <i class="fa fa-angle-down"></i></a> 
                            <ul class="sub-menu">
                                <li class=""><a href="/huong-dan-flatsome">Hướng dẫn Flatsome</a></li>
                            </ul>
                        </li>
                        <li class="">
                            <a href="/thu-thuat">
                                Thủ thuật <!---->
                            </a>
                            <!---->
                        </li>
                        <li class="">
                            <a href="/khoa-hoc">
                                Khóa học <!---->
                            </a>
                            <!---->
                        </li>
                        <li class="">
                            <a href="#">Mục khác <i class="fa fa-angle-down"></i></a> 
                            <ul class="sub-menu">
                                <li class=""><a href="/share-code">Share code</a></li>
                                <li class=""><a href="/lap-trinh-plugin">WP plugin</a></li>
                                <li class=""><a href="/wordpress-rest-api">WP rest API</a></li>
                                <li class=""><a href="/domain-hosting-vps-server">Tên miền &amp; Hosting, Server</a></li>
                            </ul>
                        </li>
                        <li class="">
                            <a href="/lien-he">
                                Liên hệ <!---->
                            </a>
                            <!---->
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
</template>

