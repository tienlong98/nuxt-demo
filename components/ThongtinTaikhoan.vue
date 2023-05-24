<template>
  <div id="account-info">
    <h1>Name:{{ userName }}</h1>
    <br />
    <button @click="changeUsername">Change Username</button>
  </div>
</template>

<script setup lang="ts">
// import { toRefs } from "vue";
interface Prop {
  userName: string;
}
const red = ref("");
const emits = defineEmits(["changeUserName"]);
const props = withDefaults(defineProps<Prop>(), {
    userName: "test"
})

const { userName } = toRefs(props)
const changeUsername = () => {
  emits("changeUserName", "Long")
}

defineExpose({
    red
})

</script>
