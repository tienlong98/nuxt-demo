<template>
  <Nuxt-Layout name="default">
    <el-button type="primary" @click="dichuyen()">Add Product</el-button>
    <table-component></table-component>
  </Nuxt-Layout>
</template>
<script lang="ts" setup>
import { useRouter } from "nuxt/app";
const route = useRouter();
const dichuyen = () => {
  route.push("/add");
};
</script>
