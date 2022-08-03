import router from '@/router';
/**
 * @Description: 移出添加的动态路由
 */
export function removeRouter(routerArr) {
    routerArr.forEach((item) => {
        if (router.hasRoute(item.name)) {
            router.removeRoute(item.name);
        }
    });
}

/**
 * @Description: 添加动态路由
 */
export function addRouter(routerArr) {
    //添加之前先删除之前添加的路由
    removeRouter(routerArr);
    routerArr.forEach((item) => {
        if (!router.hasRoute(item.name)) {
            router.addRoute(item.name, item);
        }
    });
}
