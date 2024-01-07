<template>
  <slot name="empty-list" v-if="routes.length == 0">
    <slot name="empty-list">No routes</slot>
  </slot>
  <div
    v-else
    class="flex flex-col p-2 bg-white border-gray-300 rounded-md text-center"
  >
    <table class="table-auto">
      <thead>
        <tr class="border-b">
          <th>Name</th>
          <th>Namespace</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(route, i) in routes"
          :key="i"
          :id="`route-${i}`"
          class="border-t h-10"
        >
          <td>{{ route.name }}</td>
          <td>{{ route.namespace }}</td>
          <td class="cursor-pointer">
            <span class="inline-block rotate-90">…</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { ObjectMeta } from "~/domain/models";
interface Props {
  routes: ObjectMeta[];
}
const props = defineProps<Props>();
</script>

<style></style>
