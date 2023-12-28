<template>
  <div
    :class="['rounded-b', 'shadow-md', type]"
    role="alert"
    @mouseover="hover = true"
    @mouseleave="hover = false"
  >
    <div class="flex px-3 py-3 items-center">
      <div class="py-1">
        <Icon class="w-6 h-6 pr-1" :name="iconName" />
      </div>
      <div>
        <p class="text-sm font-bold">{{ notification.msg }}</p>
      </div>
    </div>
    <div class="w-full bg-gray-200 h-2.5 dark:bg-gray-700">
      <div class="h-2.5" :style="{ width: `${width}%` }"></div>
    </div>
  </div>
</template>

  <script setup lang="ts">
import { watch, ref, computed } from "vue";
import { type Notification, NotificationType } from "@/types/notification";

type Props = {
  notification: Notification;
};

const { notification } = defineProps<Props>();
const hover = ref(false);

const COLOR_MAP = {
  [NotificationType.ERROR]: "error",
  [NotificationType.WARN]: "warn",
  [NotificationType.SUCCESS]: "success",
};

const ICON_MAP = {
  [NotificationType.ERROR]: "heroicons:x-circle",
  [NotificationType.WARN]: "heroicons:exclamation-triangle",
  [NotificationType.SUCCESS]: "heroicons:check-circle",
};

const type = computed(() => {
  return COLOR_MAP[notification.type];
});

const iconName = computed(() => {
  return ICON_MAP[notification.type];
});

const emit = defineEmits(["finished"]);

let time = ref(notification.duration);

const interval = ref(
  setInterval(function () {
    time.value -= 1;
  }, 1)
);

const width = computed(() => {
  return (time.value / notification.duration) * 100;
});

watch(time, () => {
  if (!time.value) {
    clearInterval(interval.value);
    emit("finished");
  }
});

watch(hover, () => {
  if (hover.value) {
    clearInterval(interval.value);
  } else {
    interval.value = setInterval(function () {
      time.value -= 1;
    }, 1);
  }
});
</script>

  <style scoped lang="scss">
.error {
  @apply bg-red-100 text-red-900;

  div:nth-child(2) > div {
    @apply bg-red-600;
  }
}

.warn {
  @apply bg-yellow-100 text-yellow-900;

  div:nth-child(2) > div {
    @apply bg-yellow-600;
  }
}

.success {
  @apply bg-green-100 text-green-900;

  div:nth-child(2) > div {
    @apply bg-green-600;
  }
}
</style>
