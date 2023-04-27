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
import { Gateway } from "@kubernetes-models/gateway-api/gateway.networking.k8s.io/v1alpha2/Gateway";
import { notifyError } from "~/store/notifications";

const { data, error } = useFetch<Gateway[]>("/api/gateways");

watch(error, () => {
  notifyError(error.value?.name);
});
</script>
