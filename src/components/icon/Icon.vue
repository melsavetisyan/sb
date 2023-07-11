<template>
  <span :class="currentIconColor">
    <component :is="iconComponent" v-if="iconComponent" />
  </span>
</template>

<script setup>
import { shallowRef, onMounted, defineProps, watch, toRef } from "vue";

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  iconColor: {
    type: String,
    required: false,
  },
});

const iconComponent = shallowRef(null);
const currentIconColor = toRef(props, "iconColor");

onMounted(() => {
  loadIconComponent();
});

watch(() => props.name, loadIconComponent);

async function loadIconComponent() {
  const iconName = props.name;
  try {
    const module = await import(`../../Icons/${iconName}.vue`);
    iconComponent.value = module.default;
  } catch (error) {
    console.error(`Failed to load icon component: ${error}`);
  }
}
</script>
