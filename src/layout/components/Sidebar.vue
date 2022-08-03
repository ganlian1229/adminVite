<template>
    <div class="sidebar-container" :class="props.isActive ? 'act' : ''">
        <div class="logo">
            <transition name="el-zoom-in-center">
                <h1 v-show="props.isActive" class="logo-text">logo</h1>
            </transition>
        </div>
        <el-scrollbar wrap-class="scrollbar-wrapper">
            <el-menu
                :default-active="$route.path"
                :collapse="props.isActive"
                :show-timeout="200"
                :router="true"
                text-color="#fff"
                background-color="#4a5a74"
                active-text-color="#409EFF"
            >
                <template v-for="item in routerList" :index="item.path">
                    <el-sub-menu
                        :index="item.path"
                        :key="item.path"
                        v-if="item.meta.show && !item.meta.isOne"
                    >
                        <template #title>
                            <el-icon>
                                <component :is="item.meta.icon"></component>
                            </el-icon>
                            <span>{{ item.meta.title }}</span>
                        </template>
                        <el-menu-item
                            v-for="(list, ind) in item.children"
                            :key="ind"
                            :index="list.path"
                        >
                            <el-icon>
                                <component :is="list.meta.icon"></component>
                            </el-icon>
                            <template #title> {{ list.meta.title }}</template>
                        </el-menu-item>
                    </el-sub-menu>
                    <el-menu-item :index="item.children[0].path" :key="item.name" v-else>
                        <el-icon>
                            <component :is="item.meta.icon"></component>
                        </el-icon>
                        <template #title> {{ item.meta.title }}</template>
                    </el-menu-item>
                </template>
            </el-menu>
        </el-scrollbar>
    </div>
</template>

<script setup>
import dynamicRouter from '@/router/dynamicRouter';
import { deepCopy } from '@/utils/index';

const props = defineProps({
    isActive: {
        type: Boolean
    }
});
onMounted(() => {
    showMenu(deepCopy(dynamicRouter));
});

const routerList = ref([]);
//显示左侧导航
function showMenu(arr) {
    var menusArr = [];
    arr.forEach((val) => {
        if (val.meta) {
            if (val.meta.show) {
                if (val.children.length) {
                    var child = [];
                    val.children.forEach((cval) => {
                        if (cval.meta.show) {
                            child.push(cval);
                        }
                    });
                    val.children = child;
                    menusArr.push(val);
                } else {
                    menusArr.push(val);
                }
            }
        }
    });
    routerList.value = menusArr;
    console.log(routerList);
}
</script>

<style lang="scss" scoped>
.sidebar-container {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 210px;
    height: 100%;
    padding-top: 50px;
    overflow: hidden;
    font-size: 0;
    background-color: #4a5a74;
    transition: width 0.28s;
    &.act {
        width: 54px;
    }
    .logo {
        position: absolute;
        top: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 50px;
        overflow: hidden;
        text-align: center;
        cursor: pointer;
        background-color: #2b2f3a;

        .logo-img {
            width: 32px;
            height: 32px;
        }

        .logo-text {
            display: inline-block;
            height: 50px;
            margin-left: 12px;
            font-size: 14px;
            line-height: 50px;
            color: #fff;
        }
    }
}
</style>
