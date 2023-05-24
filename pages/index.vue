<template>
  <div>
    <input-upload-file></input-upload-file>
    {{ refTest?.red}}
    <thongtin-taikhoan
      ref="refTest"
      :user-name="userName"
      @change-user-name="changeUserName"
    
    />
  </div>
</template>

<script setup lang="ts">
import { log } from "console";

const userName = ref("matt");
const refTest = ref();

const changeUserName = (name: string) => {
    userName.value = name;
}

</script>

<style scoped></style>
