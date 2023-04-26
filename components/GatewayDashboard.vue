<template>
  <div class="flex flex-col">
    <SectionTitle>{{ gateway.name }}</SectionTitle>
    <div class="flex pt-4">
      <Entrypoint
        v-for="listener in gateway.listeners"
        :key="listener.name"
        :listener="listener"
        class="mr-2"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { GatewayInterface } from "~/domain/models/GatewayModel.model";

interface Props {
  gateway: GatewayInterface;
}
const props = defineProps<Props>();
</script>

<style>
</style>
