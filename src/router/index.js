import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home'
import Category from '@/views/category'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/category/:typeid',
            name: 'Category',
            component: Category
        },
    ]
})
