<template>
  <div class="flex flex-col space-y-5">
    <DashboardGateway
      v-for="gateway in data"
      :key="gateway.metadata?.name"
      :gateway="gateway"
    />
  </div>
</template>

<script setup lang="ts">
import { Gateway } from "~/domain/models/index";
import { notifyError } from "~/store/notifications";

const { data, error } = useFetch<Gateway[]>("/api/gateways", {
  default: () => [],
});

watch(error, () => {
  if (error.value) {
    notifyError(error.value?.name);
  }
});
</script>
