<template>
    <el-aside :width="$store.state.isCollapsed?'64px':'200px'">
        <el-menu :collapse="$store.state.isCollapsed" :collapse-transition="false" :router="true" :default-active="route.fullPath">
            <el-menu-item index="/index">
                <el-icon>
                    <HomeFilled />
                </el-icon>
                <span>首页</span>
            </el-menu-item>
            <el-menu-item index="/center">
                <el-icon>
                    <Avatar />
                </el-icon>
                <span>个人中心</span>
            </el-menu-item>
            <el-sub-menu index="user-manage" v-admin>
                <template #title>
                    <el-icon>
                        <UserFilled />
                    </el-icon>
                    <span>用户管理</span>
                </template>
                <el-menu-item index="/user-manage/useradd">
                    <el-icon>
                        <Plus />
                    </el-icon>
                    <span>添加用户</span>
                </el-menu-item>
                <el-menu-item index="/user-manage/userlist">
                    <el-icon>
                        <Memo />
                    </el-icon>
                    <span>用户列表</span>
                </el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="news-manage">
                <template #title>
                    <el-icon>
                        <List />
                    </el-icon>
                    <span>新闻管理</span>
                </template>
                <el-menu-item index="/news-manage/newsadd">
                    <el-icon>
                        <Plus />
                    </el-icon>
                    <span>添加新闻</span>
                </el-menu-item>
                <el-menu-item index="/news-manage/newslist">
                    <el-icon>
                        <Memo />
                    </el-icon>
                    <span>新闻列表</span>
                </el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="product-manage">
                <template #title>
                    <el-icon>
                        <Menu />
                    </el-icon>
                    <span>产品管理</span>
                </template>
                <el-menu-item index="/product-manage/productadd">
                    <el-icon>
                        <Plus />
                    </el-icon>
                    <span>添加产品</span>
                </el-menu-item>
                <el-menu-item index="/product-manage/productlist">
                    <el-icon>
                        <Memo />
                    </el-icon>
                    <span> 产品列表</span>
                </el-menu-item>
                <el-menu-item index="/tools/exceltool">
                    <el-icon>
                        <Memo />
                    </el-icon>
                    <span> 工具箱</span>
                </el-menu-item>
            </el-sub-menu>
        </el-menu>
    </el-aside>
</template>
<script setup>
import { HomeFilled, Avatar, UserFilled, List, Menu ,Plus,Memo} from '@element-plus/icons-vue'
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
const store = useStore()
const route = useRoute()
const vAdmin = {
    mounted(el){
        // console.log(el);
        if(store.state.userInfo.role!=1){
            el.parentNode.removeChild(el)
        }
    }
}
</script>
<style lang="scss" scoped>
.el-aside {
    height: 100vh;
    .el-menu{
        height: 100vh;
    }
}</style>