<template>
  <div
    class="w-6 h-1 bg-gray-700/80 my-1 rounded-md transition-all duration-300"
    :class="isActive && '-rotate-45 translate-y-1'"
  ></div>
  <div
    class="w-6 h-1 bg-gray-700/80 my-1 rounded-md transition-all duration-300"
    :class="isActive && 'rotate-45 -translate-y-1'"
  ></div>
</template>

<script>
export default {
  name: "HamburgerMenu",
  computed: {
    isActive() {
      return this.$store.state.isActive;
    },
  },
};
</script>
