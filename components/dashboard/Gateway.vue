<template>
  <div class="flex flex-col">
    <SectionTitle>{{ gateway.metadata?.name }}</SectionTitle>
    <div class="flex pt-4">
      <Entrypoint
        v-for="listener in gateway.spec.listeners"
        :key="listener.name"
        :listener="listener"
        class="mr-2"
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
