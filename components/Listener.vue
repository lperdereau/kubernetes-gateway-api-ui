<template>
  <div
    class="flex flex-col items-center bg-white w-full border-gray-300 border rounded-md p-6"
  >
    <span class="text-xl font-light text-gray-500">
      {{ props.listener.name.toUpperCase() }}
    </span>
    <span class="text-xs font-light text-gray-500"> ({{ props.listener.protocol }}) </span>
    <span class="font-bold pt-2"> {{ props.listener.hostname || '' }}:{{ props.listener.port }} </span>
  </div>
</template>

<script setup lang="ts">
import { Listener } from "~/domain/models/Gateway.model";

interface Props {
  listener: Listener;
}
const props = defineProps<Props>();
</script>
