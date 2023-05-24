<template>
  <div>
    <el-button type="primary" @click="dichuyen()">Add User</el-button>
    <table-component></table-component>
  </div>
</template>
<script lang="ts" setup>
import { useRouter } from "nuxt/app";

const route = useRouter();
const dichuyen = () => {
  route.push("/add");
};</script>
