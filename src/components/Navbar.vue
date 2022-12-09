<template>
  <header
    class="w-full px-4 relative bg-white inset-x-0 z-10 transition-all ease-in-out duration-500 top-0 border shadow-sm"
    :class="isActive ? 'h-[280px]' : 'h-[80px]'"
  >
    <div
      class="max-w-[900px] mx-auto h-[80px] flex items-center justify-between"
    >
      <div class="cursor-pointer">
        <a href="#" class="text-2xl text-zinc-700 tracking-wide"
          >Perisai<span class="text-blue-500 text-3xl">.</span>io</a
        >
      </div>
      <nav class="md:block hidden">
        <Nav />
      </nav>
      <div class="hidden md:block">
        <ButtonVariants>Login</ButtonVariants>
      </div>
      <div class="md:hidden cursor-pointer" @click="isActives">
        <HamburgerMenu />
      </div>
    </div>
  </header>
</template>

<script>
import Nav from "./Nav.vue";
import ButtonVariants from "./ButtonVariants.vue";
import HamburgerMenu from "./HamburgerMenu.vue";
export default {
  name: "NavbarComponent",
  components: {
    Nav,
    HamburgerMenu,
    ButtonVariants,
  },
  mounted() {
    window.addEventListener(
      "resize",
      () =>
        window.innerWidth >= 768 &&
        this.$store.commit({
          type: "isActive",
          isActive: false,
        })
    );
  },
  computed: {
    isActive() {
      return this.$store.state.isActive;
    },
  },
  methods: {
    isActives() {
      this.$store.commit({
        type: "isActive",
        isActive: !this.isActive,
      });
    },
  },
};
</script>
