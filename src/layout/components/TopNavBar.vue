<template>
    <el-menu class="navbar" mode="horizontal">
        <div class="hamburger-box" @click="switchActFun()">
            <el-icon :size="23">
                <component :is="props.isActive ? 'expand' : 'fold'" />
            </el-icon>
        </div>
        <div class="right-menu">
            <el-dropdown class="avatar-container right-menu-item">
                <div class="avatar-wrapper">
                    <img :src="avatar" class="user-avatar" />
                    <el-icon :size="23">
                        <component is="caret-bottom" />
                    </el-icon>
                </div>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item @click="loginOut">退出</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
    </el-menu>
</template>

<script setup>
import { ElMessageBox } from 'element-plus';
import { getAssetsImage } from '@/utils/index';
const router = useRouter();
const props = defineProps({
    isActive: {
        type: Boolean
    }
});

let avatar = getAssetsImage('logo.png');
const emits = defineEmits(['update:isActive']);
function switchActFun() {
    emits('update:isActive', !props.isActive);
}

const loginOut = () => {
    ElMessageBox.confirm('退出登录', '提示', {
        confirmButtonText: '确认',
        cancelButtonText: '取消',
        type: 'warning'
    })
        .then(() => {
            router.push({
                path: '/'
            });
            sessionStorage.clear();
        })
        .catch(() => {});
};
// toRefs(props);
</script>

<style lang="scss" scoped>
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    padding: 0 20px;
    .right-menu {
        .avatar-wrapper {
            display: flex;
            align-items: center;
            .user-avatar {
                width: 40px;
                height: 40px;
            }
        }
    }
}
</style>
