import VueRouter from 'vue-router'
// 引入组件

import Home from '../pages/Home'
import About from '../pages/About'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'

// 创建并暴露一个路由器
export default new VueRouter({
	routes:[
		{
			path:'/about',
			component:About
		},
		{
			path:'/home',
			component:Home,
            //多级路由
            children:[
                {path:'news',component:News},
                {path:'message',component:Message,
                    children:[{
                        //简化跳转准备
                        name:"detail",
                        path:'detail',
                        component:Detail
                    }
                    
                    ]
                },
            ]
		}
	]
})