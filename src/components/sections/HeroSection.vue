<template>
  <div class="flex flex-col items-center mb-40">
    <div class="text-center">
      <h1 class="md:text-6xl text-5xl text-black font-bold tracking-wide">
        first-class Business Countsultan
      </h1>
      <p class="mt-6 text-zinc-400 leading-6">
        we know how large Lorem ipsum dolor sit amet, qui minim labore
        adipisicing minim sint cillum sint consectetur cupidatat. Lorem ipsum
        dolor, sit amet consectetur adipisicing elit. Eum, dolor optio eius
        harum suscipit architecto amet. Nesciunt quidem libero debitis sit,
        dolor soluta iusto possimus corporis delectus.
      </p>
    </div>
    <div class="flex mt-6 gap-4">
      <ButtonVariants>Order Now</ButtonVariants>
      <ButtonVariants variants="ghost">Watch</ButtonVariants>
    </div>
    <div
      class="mt-52 cursor-pointer p-3 hover:ring ring-blue-500 rounded-full shadow-md border animate-bounce"
    >
      <ArrowDownIcon class="h-6 w-6 text-blue-500" />
    </div>
  </div>
</template>

<script>
import ButtonVariants from "../ButtonVariants.vue";
import { ArrowDownIcon } from "@heroicons/vue/24/outline";
export default {
  name: "HeroSection",
  components: {
    ButtonVariants,
    ArrowDownIcon,
  },
};
</script>
