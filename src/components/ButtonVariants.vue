<template>
  <button
    class="py-3 px-6 rounded-md transition-all duration-300"
    :class="
      variants === 'ghost'
        ? 'bg-transparent border-2 hover:ring  ring-blue-600'
        : 'text-white bg-blue-500 hover:ring  ring-blue-600'
    "
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: "ButtonVarians",
  props: {
    variants: String,
  },
};
</script>
