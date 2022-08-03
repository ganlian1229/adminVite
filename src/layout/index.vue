<template>
    <div class="app-wrapper">
        <!--侧边栏-->
        <Sidebar v-model:isActive="isActive" />
        <!--主体内容-->
        <div class="main-container" :class="isActive ? 'act' : ''">
            <!--顶部导航-->
            <TopNavBar v-model:isActive="isActive" />
            <!--主页面-->
            <AppMain v-model:isActive="isActive" />
        </div>
    </div>
</template>

<script setup>
import Sidebar from './components/Sidebar.vue';
import TopNavBar from './components/TopNavBar.vue';
import AppMain from './components/AppMain.vue';
let isActive = ref(false);
</script>

<style lang="scss" scoped>
.app-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    .main-container {
        margin-left: 210px;
        transition: margin-left 0.28s;
        &.act {
            margin-left: 54px;
        }
    }
}
</style>
