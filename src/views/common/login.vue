<template>
    <div class="logingCom">
        <div class="login-bg"></div>
        <div class="login_form">
            <el-form :model="ruleForm" :rules="rules" ref="ruleFormDom" label-width="80px">
                <el-form-item prop="username">
                    <el-input v-model="ruleForm.username" placeholder="用户名">
                        <template #prefix>
                            <el-icon class="el-input__icon"><user /></el-icon>
                        </template>
                    </el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input
                        type="password"
                        placeholder="输入密码"
                        v-model="ruleForm.password"
                        autocomplete="off"
                        @keyup.enter.native="submitForm(ruleFormDom)"
                    >
                        <template #prefix>
                            <el-icon class="el-input__icon"><lock /></el-icon>
                        </template>
                    </el-input>
                </el-form-item>
                <el-form-item style="text-align: left; margin-bottom: 0">
                    <el-button type="primary" @click="submitForm(ruleFormDom)" style="width: 100%">
                        登录
                    </el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script setup>
import storeObj from '@/store';
import dynamicRouter from '@/router/dynamicRouter';
import { addRouter } from '@/common/index';
const route = useRoute();
const router = useRouter();
let { setUserInfo } = storeObj.mainStore;
let ruleForm = reactive({
    username: 'admin',
    password: '123456'
});

function userNameRule(rule, value, callback) {
    if (value === '') {
        callback(new Error('请输入用户名！'));
    } else {
        callback();
    }
}
function passwordRule(rule, value, callback) {
    if (value === '') {
        callback(new Error('请输入密码！'));
    } else {
        callback();
    }
}
let rules = reactive({
    username: [{ validator: userNameRule, trigger: 'blur' }],
    password: [{ validator: passwordRule, trigger: 'blur' }]
});

let ruleFormDom = ref(null);
//登录
const submitForm = (formDom = undefined) => {
    if (!formDom) return;
    formDom.validate((valid) => {
        if (valid) {
            let userInfo = {
                userId: 1
            };
            setUserInfo(userInfo);
            addDynamicRoutes();
        } else {
            console.log('error submit!!');
            return false;
        }
    });
};
//登录成功后添加动态路由
function addDynamicRoutes() {
    addRouter(dynamicRouter);
    sessionStorage.setItem('isLogin', true);
    router.replace({
        path: '/home/index'
    });
}
</script>

<style lang="scss" scoped>
.logingCom {
    .login-bg {
        width: 100%;
        height: 100vh;
        background: #232323;
    }
    .login_form {
        width: 300px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
        padding: 20px;
        z-index: 9999;
        background: #f0f2f5;
        :deep(.el-form-item__content) {
            margin-left: 0 !important;
        }
    }
}
</style>
