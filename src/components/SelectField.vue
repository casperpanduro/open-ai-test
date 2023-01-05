<template>
  <select class="h-10 text-gray-800 w-full" :value="value" @change="updateValue" id="mood">
    <option value="" selected disabled v-if="defaultValue" v-text="defaultValue"></option>
    <option :value="option.value" v-for="option in options" v-text="option.text"></option>
  </select>
</template>
<script setup>
  defineProps({
    value: {
      type: String,
      required: true
    },
    id: String,
    options: {
      type: Array,
      required: true
    },
    defaultValue: String
  });

  const emit = defineEmits(['update:value']);

  const updateValue = (e) => {
    emit('update:value', e.target.value);
  }

</script>
