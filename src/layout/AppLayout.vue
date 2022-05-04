<template>
  <div class="common-layout">
    <el-container>
      <el-header class="flex-between-center">
        <h3>数字媒体技术 实践教学管理系统</h3>
        <div class="user-box flex-between-center">
          <div class="userID">当前用户：{{ user.userID }}</div>
          <div class="logout">安全退出</div>
        </div>
      </el-header>
      <el-container class="main">
        <el-aside>
          <AppMenu />
        </el-aside>
        <el-container>
          <el-main>
            <div class="breadcrumb">
              <breadcrumb></breadcrumb>
            </div>
            <router-view></router-view>
          </el-main>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script lang='ts' setup>
import AppMenu from './components/AppMenu.vue'
import Breadcrumb from './components/Breadcrumb.vue'
import { useUserStore } from '@/store/user'

const user = useUserStore()
</script>

<style lang='scss' scoped>
$header-height: 100px;

.el-header {
  height: $header-height;
  padding: 0 5vw;
  background-color: #d3e7ff;

  .user-box {
    font-size: 14px;
    width: 220px;
  }

  .logout:hover {
    cursor: pointer;
  }
}

.main {
  height: calc(100vh - $header-height);
  width: 100%;
  padding: 30px 10vw 0;
}

.el-aside {
  width: 250px;
}

.breadcrumb {
  margin-bottom: 20px;
}
</style>
