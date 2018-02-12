import Vue from 'vue'
import Router from 'vue-router'
import InsulinCarbIndex from '@/components/InsulinCarbIndex'
import InsulinSlidingScale from '@/components/InsulinSlidingScale'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: HelloWorld,
            props: { msg: "Hello, World!"}
        },
        {    
            path: '/insulin-carb',
            name: 'insulin-carb',
            component: InsulinCarbIndex
        },
        {    
            path: '/insulin-sliding-scale',
            name: 'insulin-sliding-scale',
            component: InsulinSlidingScale
        }
    ]
})