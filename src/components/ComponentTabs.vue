<template>
    <div class="component-tabs">
        <div class="tabs-title">
            <span>{{title}}</span>
        </div>
        <div class="style-tabs">
            <div class="wrapper">
                <header class="tabs-title">{{title}}</header>
                <section>
                    <div class="tab-content">
                        <slot></slot>
                    </div>
                    
                </section>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'component-tabs',
        props: {
            title: {
                type: String,
                default: 'Giá trị mặc định tiêu đề của slots'
            }
        },
        data() {
            return {

            }
        },
        methods: {

        }
    }
</script>
<style>
::selection{
  background: rgb(45 166 218 / .3);
}
.wrapper{
  max-width: 700px;
  width: 100%;
  margin: 150px auto;
  padding: 25px 30px 30px 30px;
  border-radius: 5px;
  background: #fff;
  box-shadow: 0px 10px 15px rgba(0,0,0,0.1);
}
.wrapper header{
  font-size: 30px;
  font-weight: 600;
  padding-bottom: 20px;
}
</style>