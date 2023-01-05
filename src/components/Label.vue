<template>
  <label :for="this.for" class="block text-xs mb-1">
    <slot />
  </label>
</template>

<script setup>
  defineProps({
    for: {
      type: String,
      required: true
    }
  })
</script>
