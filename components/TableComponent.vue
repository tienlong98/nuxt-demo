<template>
  <el-table :data="tableData" border style="width: 100%">
    <el-table-column prop="title" label="Title" width="180" />
    <el-table-column prop="price" label="Price" width="180" />
    <el-table-column prop="description" label="Description" />
    <el-table-column prop="rating.rate" label="Rating" />
  </el-table>
</template>

<script lang="ts" setup>
import ProductsRequest from "../composables/requests/ProductsRequest";
const tableData = await ProductsRequest.getList();
console.log(tableData)
// const addproduct =  () => {
//   const data = await ProductsRequest.post();
//   console.log(data)
// };
</script>
