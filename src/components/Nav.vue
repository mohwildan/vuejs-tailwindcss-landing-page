<template>
  <ul class="flex items-center gap-4">
    <li v-for="item in nav" :key="item.title" class="text-zinc-500">
      <a :href="item.href">{{ item.title }}</a>
    </li>
  </ul>
</template>

<script>
const nav = [
  {
    title: "Home",
    href: "#home",
  },

  {
    title: "About us",
    href: "#about",
  },
  {
    title: "Price",
    href: "#price",
  },
  {
    title: "Contact",
    href: "#contact",
  },
];

export default {
  name: "NavComponent",
  data() {
    return {
      nav,
    };
  },
};
</script>
