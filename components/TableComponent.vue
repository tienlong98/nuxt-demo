<template>
  <!-- v-if="tableData ? (loading = false) : (loading = true)" -->
  <div>
    <!-- <el-button type="primary" @click="getListUser">search</el-button> -->
    <el-table v-loading="loading" :data="tableData" :empty-text="noData">
      <el-table-column prop="id" label="Title" width="60" />
      <el-table-column prop="name" label="Title" width="180" />
      <el-table-column prop="email" label="Price" width="180" />
      <el-table-column fixed="right" label="Operations" width="180">
        <template #default="scope">
          <el-button
            link
            type="primary"
            size="small"
            @click="detailuser(scope.row.id)"
            >Detail</el-button
          >
          <el-button
            link
            type="warning"
            size="small"
            @click="openDialogUpdate(scope.row.id)"
            >Edit</el-button
          >
          <el-button
            link
            type="danger"
            size="small"
            @click="deleteuser(scope.row.id)"
            >Delete</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-dialog :model-value="dialogFormVisible" title="Edit Data">
      <el-form :model="form">
        <el-form-item label=" name" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off" />
        </el-form-item>
        <el-form-item label=" email" :label-width="formLabelWidth">
          <el-input v-model="form.email" autocomplete="off" />
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogFormVisible = false">Cancel</el-button>
          <el-button type="primary" @click="editUser"> Confirm </el-button>
        </span>
      </template>
    </el-dialog>
    <el-dialog :model-value="dialogTableVisible" title="Shipping address">
      <h1>Name: {{ gridData.name }}</h1>
      <h2>Name: {{ gridData.email }}</h2>
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import { log } from "console";
import UserRequest from "../composables/requests/UserRequest";
import {onBeforeMount} from "vue";
const tableData = ref([]);
let gridData = ref([]);
const loading = ref(true);
const dialogFormVisible = ref(false);
const dialogTableVisible = ref(false);
const formLabelWidth = "140px";
const noData = ref("");
const isMounted = ref(false);
const form = reactive({
  id: "",
  name: "",
  email: "",
});
//Hàm delete
const deleteuser = async (id: number) => {
  await UserRequest.delete(id);
  getListUser();
};
// Hàm show detail data
const detailuser = async (id: number) => {
  gridData = await UserRequest.show(id);
  dialogTableVisible.value = true;
};
// Hàm show thông tin cần edit
const openDialogUpdate = async (id: number) => {
  const data = await UserRequest.show(id);
  form.id = data.id;
  form.name = data.name;
  form.email = data.email;
  dialogFormVisible.value = true;
};
// Hàm edit data
const editUser = async () => {
  const data = await UserRequest.put(Number(form.id), form);
  dialogFormVisible.value = false;
  getListUser();
};
//Hàm lấy tất cả thông tin data
const getListUser = async () => {
  try {
    loading.value = true;
    tableData.value = await UserRequest.getList();
  } catch (e) {
  } finally {
    loading.value = false;
  }
};

defineExpose(() => {
  isMounted
})

onMounted(async () => {
  isMounted.value = true;
  await getListUser();
});
</script>
<style scoped>
.el-button--text {
  margin-right: 15px;
}
.el-select {
  width: 300px;
}
.el-input {
  width: 300px;
}
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>
