<template>
  <div class="flex flex-col">
    <SectionTitle>UDPRoute</SectionTitle>
    <RoutesTable :routes="props.routes">
      <template #empty-list>
        <img src="/public/nodata.svg" class="lg:w-1/3 mt-32 m-auto"/>
      </template>
    </RoutesTable>
  </div>
</template>

<script setup lang="ts">
interface Props {
  routes: [];
}

const props = defineProps<Props>();
</script>

<style></style>
