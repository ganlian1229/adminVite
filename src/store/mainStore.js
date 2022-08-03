import { defineStore } from 'pinia';

export default defineStore({
    id: 'mainStore',
    state: () => {
        return {
            testMsg: '123456',
            test2Msg: '951',
            userInfo: null
        };
    },
    getters: {
        testMsg2: (state) => state.testMsg + 'msg2'
    },
    actions: {
        changeTesstMsg(data) {
            // this.testMsg = data;
            this.$patch((state) => {
                state.testMsg = data;
                state.test2Msg = data;
            });
        },
        setUserInfo(data) {
            this.userInfo = data;
        }
    },
    // 开启数据缓存
    persist: {
        enabled: true,
        strategies: [
            {
                key: 'myMainStore', // 修改储存的key值  默认为该store的id值
                storage: sessionStorage, // 修改储存的方式  默认sessionStorage
                paths: ['testMsg', 'userInfo'] // 需要储存的变量值放入数组的会储存 默认全部
            }
        ]
    }
});
