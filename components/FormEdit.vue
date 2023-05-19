<template>
  <el-form :rules="rules" ref="formRef" :model="form" label-width="120px">
    <el-form-item label="Name" prop="name">
      <el-input v-model="form.name" />
    </el-form-item>
    <el-form-item label="Email" prop="email">
      <el-input v-model="form.email" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="addproduct(formRef)">Update</el-button>
      <el-button>Cancel</el-button>
    </el-form-item>
  </el-form>
</template>
<script lang="ts" setup>
import UserRequest from "~/composables/requests/UserRequest";
import { useRouter } from "nuxt/app";
import type { FormInstance } from "element-plus";
const formRef = ref<FormInstance>();
const route = useRouter();

</script>
