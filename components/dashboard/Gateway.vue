<template>
  <div class="flex flex-col">
    <SectionTitle>{{ gateway.metadata?.name }} ({{ gateway.spec.addresses?.map((a) => a.value).join(',') || 'No IP addresses yet' }})</SectionTitle>
    <div class="flex flex-col lg:flex-row pt-4">
      <Listener
        v-for="listener in gateway.spec.listeners"
        :key="listener.name"
        :listener="listener"
        class="mt-2 lg:mr-2"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Gateway } from "~/domain/models";

interface Props {
  gateway: Gateway;
}
const props = defineProps<Props>();
</script>

<style>
</style>
