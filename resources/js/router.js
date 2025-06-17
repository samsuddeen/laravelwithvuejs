import { createRouter, createWebHistory } from "vue-router";
import ExampleComponent from './components/ExampleComponent.vue';
import SampleComponent from './components/SampleComponent.vue';

const routes =[
    {
        path: '/',
        name: 'home',
        component: ExampleComponent
    },
    {
        path:'/about',
        name:'about',
        component:SampleComponent

    }

];

const router = createRouter({
    history:createWebHistory(),
    routes
});

export default router;


