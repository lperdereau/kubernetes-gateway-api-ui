<template>
  <nav class="flex items-center justify-between flex-wrap bg-blue-950 p-4">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <span class="font-semibold text-xl tracking-tight">GatewayAPI</span>
    </div>
    <div class="block lg:hidden">
      <button
        class="relative h-10 w-10 border rounded text-white border-white hover:text-white hover:border-white"
        @click="open = !open"
      >
        <span class="sr-only">Open main menu</span>
        <div
          class="block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
        >
          <span
            aria-hidden="true"
            class="block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out"
            :class="{ 'rotate-45': open, ' -translate-y-1.5': !open }"
          ></span>
          <span
            aria-hidden="true"
            class="block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out"
            :class="{ 'opacity-0': open }"
          ></span>
          <span
            aria-hidden="true"
            class="block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out"
            :class="{ '-rotate-45': open, ' translate-y-1.5': !open }"
          ></span>
        </div>
      </button>
    </div>
    <div
      class="w-full flex-grow delay-150 lg:flex lg:items-center lg:w-auto"
      :class="{ block: open, hidden: !open }"
    >
      <NuxtLink
        class="flex items-center mt-4 lg:mt-0 text-zinc-400 hover:text-white mr-4"
        v-for="item in navItems"
        :to="item.route"
        :key="item.text"
      >
        <Icon :name="item.icon" class="mr-2" /> <span>{{ item.text }}</span>
      </NuxtLink>
    </div>
  </nav>
</template>

<script setup lang="ts">
const open = ref(false);
const navItems = reactive([
  {
    icon: "charm:apps",
    text: "Dashboard",
    route: "/",
  },
  {
    icon: "tabler:world-www",
    text: "HTTP",
    route: "/gateway/http",
  },
  {
    icon: "tabler:world",
    text: "TCP",
    route: "/gateway/tcp",
  },
  {
    icon: "tabler:world-upload",
    text: "UDP",
    route: "/gateway/udp",
  },
  {
    icon: "tabler:world-check",
    text: "TLS",
    route: "/gateway/tls",
  },
]);
</script>


<style scoped>
.active {
  @apply text-white;
}
</style>
