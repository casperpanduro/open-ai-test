<template>
  <div v-if="loading">
    <div class="flex items-center justify-center mt-4">
      <div class="w-12 h-12 border-t-2 border-b-2 border-white rounded-full animate-spin"></div>
    </div>
  </div>
</template>
<script>
export default {
    props: {
        loading: {
            type: Boolean,
            required: false
        }
    }
}
</script>
