<template>
  <div class="slots">
      <div class="title-slot">Tìm hiểu về slot trong vuejs</div>
      <component-tabs title="Tiêu đề của tabs">
          <ul class="ul-tabs">
             
             <li v-for="(item, index) in tabHeader" v-bind:key="index" @click="eventClickTabActive(index)" v-bind:class="{active: tabActive == index}">
                  <i class="fas fa-home"></i>{{item.text}}
             </li>
          </ul>
          <div class="tab-content tab1" v-if="tabActive == 0">
              <p class="slot">Tab 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, nostrum perferendis. Beatae, debitis cum vero facere voluptates corporis fugiat repellat veniam. Nesciunt incidunt laborum sequi aspernatur perspiciatis, eos quaerat dignissimos.</p>
          </div>
          <div class="tab-content tab2" v-else-if="tabActive == 1">
              <p class="slot">Tab 2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, nostrum perferendis. Beatae, debitis cum vero facere voluptates corporis fugiat repellat veniam. Nesciunt incidunt laborum sequi aspernatur perspiciatis, eos quaerat dignissimos.</p>
          </div>
          <div class="tab-content tab3" v-else>
              <p class="slot">Tab 3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, nostrum perferendis. Beatae, debitis cum vero facere voluptates corporis fugiat repellat veniam. Nesciunt incidunt laborum sequi aspernatur perspiciatis, eos quaerat dignissimos.</p>
          </div>
      </component-tabs>
  </div>
</template>

<script>
import ComponentTabs from './ComponentTabs.vue'
    export default {
        components: { ComponentTabs },
        name: 'slot',
        data() {
            return {
                tabHeader: [
                    {text: 'Tab1'},
                    {text: 'Tab2'},
                    {text: 'Tab3'}
                ],
                tabActive: 0
            }
        },
        methods: {
            eventClickTabActive(index) {
                console.log(`Active click ${index}`)
                this.tabActive = index
            }
         }
    }
</script>

<style>
    .ul-tabs {
        position: relative;
        width: 80%;
        height: 50px;
        display: flex;
        align-items: center;
    }
    .ul-tabs li {
        display: block;
        height: 100%;
        width: 100%;
        text-align: center;
        line-height: 50px;
        cursor: pointer;
        position: relative;
        z-index: 1;
        color: #36a7e8;
        font-size: 17px;
        border-radius: 5px;
        margin: 0 5px;
        transition: all 0.3s ease;
    }
    .ul-tabs li.active {
        background: #36a7e8;
    color: #fff;
    }
    .tab-content p{
  text-align: justify;
}
</style>