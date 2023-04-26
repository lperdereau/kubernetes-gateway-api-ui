<template>
  <div
    class="flex flex-col items-center bg-white border-gray-300 border rounded-md w-48 p-6"
  >
    <span class="text-x font-light text-gray-500"> {{ props.listener.name.toUpperCase() }} </span>
    <span class="text-4xl font-bold pt-2"> :{{ props.listener.port }} </span>
  </div>
</template>

<script setup lang="ts">
import { Listener } from "~/domain/models/GatewayModel.model";

interface Props {
  listener: Listener;
}
const props = defineProps<Props>();
</script>
