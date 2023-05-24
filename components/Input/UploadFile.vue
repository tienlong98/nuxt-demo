<template>
  <div>
    <input type="file" ref="fileInput" @change="uploadFile" />
  </div>
</template>

<script lang="ts" setup>
import UploadsRequest from "~/composables/requests/UploadRequest";

const fileInput = ref<any>();
const uploadFile = async (event: any) => {
  console.log(event);
  console.log(fileInput);
  const formData = new FormData();
  formData.append("file", fileInput?.value?.files?.[0]);
  try {
    const response = await UploadsRequest.post(formData);
    console.log(response.data.filepath);
  } catch (error) {
    console.log(error);
  }
};
</script>
