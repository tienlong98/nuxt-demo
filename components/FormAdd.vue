<template>
  <el-form :rules="rules" ref="formRef" :model="form" label-width="120px">
    <el-form-item label="Title" prop="title">
      <el-input v-model="form.title" />
    </el-form-item>
    <el-form-item label="Price" prop="price">
      <el-input-number controls-position="right"  class="custom-column" v-model="form.price" />
    </el-form-item>
    <el-form-item label="Description" prop="description">
      <el-input v-model="form.description" />
    </el-form-item>
    <el-form-item label="Link Image">
      <el-input v-model="form.image" />
    </el-form-item>
    <el-form-item label="Category">
      <el-input v-model="form.category" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="addproduct(formRef)">Create</el-button>
      <el-button>Cancel</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import ProductsRequest from "~/composables/requests/ProductsRequest";
import { useRouter } from "nuxt/app";
import type { FormInstance } from "element-plus";
import { log } from "console";

const formRef = ref<FormInstance>();
const route = useRouter();
let form = reactive({
  title: "",
  price: "",
  description: "",
  image: "",
  category: "",
});
const rules = reactive({
  title: [
    {
      required: true,
      message: "title is required",
    },
  ],
  price: [
    {
      required: true,
      message: "price is required",
    },
    {
      type: "number",
      message: "price is a number",
    },
  ],
});

const addproduct = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate(async (valid) => {
    if (valid) {
      try {
        await ProductsRequest.post(form);
        route.push("/invoices");
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
  .el-input-number__decrease{
    display: none !important;
  }
}
</style>
