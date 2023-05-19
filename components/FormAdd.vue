<template>
  <el-form :rules="rules" ref="formRef" :model="form" label-width="120px">
    <el-form-item label="Name" prop="name">
      <el-input v-model="form.name" />
    </el-form-item>
    <el-form-item label="Email" prop="email">
      <el-input v-model="form.email" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="addproduct(formRef)">Create</el-button>
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
let form = reactive({
  name: "",
  email: "",
});
const rules = reactive({
  name: [
    {
      required: true,
      message: "Name is required",
    },
  ],
  email: [
    {
      required: true,
      message: "Email is required",
    },
  ],
});

const addproduct = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate(async (valid) => {
    if (valid) {
      try {
        await UserRequest.post(form);
        await route.push("/customer");
      } catch (e) {
      } finally {
      }
    }
  });
};
</script>
<style lang="scss" scoped>
.custom-column {
  width: 100% !important;
  .el-input-number__increase {
    display: none;
  }
  .el-input-number__decrease {
    display: none !important;
  }
}
</style>
