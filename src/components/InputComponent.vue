<template>
  <input
    :type="type"
    @input="$emit('update:modalValue', $event.target.value)"
  />
</template>

<script setup>
defineProps(["type"]);
defineEmits(["update:modalValue"]);
</script>
