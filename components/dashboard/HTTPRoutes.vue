<template>
  <div class="flex flex-col">
    <SectionTitle>HTTPRoute</SectionTitle>
    <RoutesTable :routes="props.routes.map((r) => r.metadata)">
      <template #empty-list>
        <img src="/assets/illustrations.svg" class="lg:w-1/3 mt-32 m-auto"/>
      </template>
    </RoutesTable>
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
