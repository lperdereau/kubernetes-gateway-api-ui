<template>
  <div class="flex flex-col space-y-5">
    <GatewayDashboard
      v-for="gateway in gateways"
      :key="gateway.name"
      :gateway="gateway"
    />
  </div>
</template>

<script setup lang="ts">
import GatewayModel from "~/domain/models/GatewayModel.model";
import { GatewayRepository } from "~/infrastucture/repositories";

const gateways = ref<GatewayModel[]>([]);

new GatewayRepository().getAll().then((items) => {
  return (gateways.value = items);
});
</script>

<style>
</style>
