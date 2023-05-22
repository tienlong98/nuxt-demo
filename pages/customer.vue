<template>
    <div v-loading="!_refTable?.isMounted">
      <el-button type="primary" @click="dichuyen()">Add User</el-button>
      <table-component ref=_refTable v-if="_refTable || _refTable?.isMounted"></table-component>
    </div>
</template>
<script lang="ts" setup>
import { useRouter } from "nuxt/app";

const route = useRouter();
const dichuyen = () => {
  route.push("/add");
};
const _refTable = ref()
</script>
