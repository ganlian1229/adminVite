<template>
    <section class="app-main">
        <router-view v-slot="{ Component }">
            <transition name="fade-transform" mode="out-in">
                <keep-alive :include="keepAliveArr">
                    <component :is="Component" />
                </keep-alive>
            </transition>
        </router-view>
    </section>
</template>

<script setup>
const props = defineProps({
    //是否收起菜单 true 收起
    isActive: {
        type: Boolean
    }
});
//需要缓存的路由  值是组件的name
let keepAliveArr = ref([]);
</script>
<style lang="scss" scoped>
.app-main {
    position: relative;
    height: calc(100vh - 50px);
    padding: 20px;
    overflow-x: hidden;
}
</style>
