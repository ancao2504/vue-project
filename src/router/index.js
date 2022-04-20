import { createWebHistory, createRouter } from "vue-router";
import Home from "@/components/Home.vue";
import About from "@/components/About.vue";
import PostDetails from '@/components/posts/PostDetails.vue';

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: '/:slug',
    name: 'Post Details',
    component: PostDetails,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;