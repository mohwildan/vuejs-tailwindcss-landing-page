<template>
  <Navbar />
  <main class="pt-36 max-w-[900px] mx-auto px-4">
    <HeroSections />
    <AboutSections />
  </main>
</template>

<script>
import ModalInView from "./components/ModalInView.vue";
import Navbar from "./components/Navbar.vue";
import HeroSections from "./components/sections/HeroSection.vue";
import AboutSections from "./components/sections/AboutSections.vue";
export default {
  name: "IndexPage",
  components: {
    ModalInView,
    Navbar,
    HeroSections,
    AboutSections,
  },
};
</script>
