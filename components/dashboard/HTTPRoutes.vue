<template>
  <div class="flex flex-col">
    <SectionTitle>HTTPRoute</SectionTitle>
    <RoutesTable :routes="props.routes.map((r) => r.metadata)" />
  </div>
</template>

<script setup lang="ts">
import { HTTPRoute } from "~/domain/models";

interface Props {
  routes: HTTPRoute[];
}

const props = defineProps<Props>();
</script>

<style></style>
