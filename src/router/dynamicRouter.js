const modules = import.meta.glob('@/views/**/*.vue');
export default [
    {
        path: '/home',
        name: 'Home',
        meta: {
            title: '首页',
            icon: 'HomeFilled',
            isOne: true, //是否只有一个子集
            show: true //是否显示在右侧
        },
        component: () => import('@/layout/index.vue'),
        children: [
            {
                path: '/home/index',
                component: () => import('@/views/home/index.vue'),
                name: 'HomeIndex',
                meta: {
                    title: '首页',
                    show: true //是否显示在右侧
                }
            }
        ]
    },
    {
        path: '/menu',
        name: 'Menu',
        meta: {
            title: '菜单',
            icon: 'menu',
            isOne: false, //是否只有一个子集
            show: true //是否显示在右侧
        },
        component: () => import('@/layout/index.vue'),
        children: [
            {
                path: '/menu/index',
                name: 'Menu1',
                component: () => import('@/views/menu/index.vue'),
                meta: {
                    icon: 'Football',
                    title: '菜单1',
                    show: true //是否显示在右侧
                }
            },
            {
                path: '/menu/menu2',
                name: 'Menu2',
                component: () => import('@/views/menu/menu2.vue'),
                meta: {
                    icon: 'ShoppingCart',
                    title: '菜单2',
                    show: true //是否显示在右侧
                }
            },
            {
                path: '/menu/menu3',
                component: () => import('@/views/menu/menu3.vue'),
                name: 'Menu3',
                meta: {
                    icon: 'Tickets',
                    title: '菜单3',
                    show: true //是否显示在右侧
                }
            }
        ]
    }
];
