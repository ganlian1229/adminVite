export default [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/common/login.vue'),
        meta: {
            title: '登录'
        }
    }
];
