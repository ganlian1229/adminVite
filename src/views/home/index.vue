<template>
    <div class="home-view">
        <h2 class="title">{{ msg }}</h2>
        <div class="test"></div>
    </div>
</template>

<script setup>
const msg = ref('Welcome to system');

const h2Style = reactive({
    color: '#435448'
});

setInterval(() => {
    h2Style.color = '#' + Math.random().toString(16).slice(-6);
}, 1000);
</script>

<style lang="scss" scoped>
.home-view {
    .title {
        color: v-bind('h2Style.color');
        text-align: center;
    }
    .test {
        width: 20px;
        height: 20px;
        background-image: url($bgimg + 'logo.png');
        background-size: 100% 100%;
    }
}
</style>
