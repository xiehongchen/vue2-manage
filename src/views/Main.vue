<template>

    <div>
        <el-container>
            <el-aside width="auto">
                <!-- 驼峰 -->
                <CommonAside />
            </el-aside>
            <el-container>
                <el-header>
                    <CommonHeader />
                </el-header>
                <CommonTag />
                <el-main>
                    <!-- 路由出口 -->
                    <!-- 路由匹配到组件将渲染在这里 -->
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
import CommonAside from '../components/CommonAside.vue';
import CommonHeader from '../components/CommonHeader.vue';
import CommonTag from '../components/CommonTag.vue';
export default {
    name: 'App',
    data() {
        return {}
    },
    components: {
        CommonAside,
        CommonHeader,
        CommonTag,
    }
}
</script>

<style lang="less">
.el-header{
    padding: 0;
}
</style>