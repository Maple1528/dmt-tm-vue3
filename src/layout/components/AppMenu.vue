<template>
  <el-menu
    class="el-menu-vertical-demo"
    :default-active="defaultActive"
    router
  >
    <el-menu-item index="/grade">
      <span>年级管理</span>
    </el-menu-item>
    <el-menu-item index="/subject">
      <span>课程管理</span>
    </el-menu-item>
  </el-menu>
</template>

<script lang='ts' setup>
import { computed } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()

console.log(router.currentRoute.value)

const defaultActive = computed(() => {
  if (router.currentRoute.value.meta.activeMenu) {
    return router.currentRoute.value.meta.activeMenu as string
  }
  return router.currentRoute.value.path
})

</script>

<style lang='scss' scoped>
</style>
