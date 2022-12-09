<template>
  <div class="h-[300px] max-w-[300px] shadow-lg">
    <h2 class="text-lg text-zinc-700 font-semibold">{{ title }}</h2>
    <h1 class="text-zinc-600 mt-2">{{ sub }}</h1>
    <p class="text-base text-zinc-500 mt-1">{{ desc }}</p>
  </div>
</template>

<script setup>
defineProps(["title", "desc", "sub"]);
</script>
