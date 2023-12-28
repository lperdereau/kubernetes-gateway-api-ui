<template>
  <DashboardHTTPRoutes :routes="data"/>
</template>

<script setup lang="ts">
import { HTTPRoute } from "~/domain/models/index";
import { notifyError } from "~/store/notifications";

const { data, error } = useFetch<HTTPRoute[]>("/api/http-routes", {
  default: () =>[]
});

watch(error, () => {
  if (error.value) {
    notifyError(error.value?.name);
  }
});
</script>

<style>
</style>
