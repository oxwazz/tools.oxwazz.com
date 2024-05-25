<template>
  <UDivider label="test slider (swiper)" class="mt-16" />
  <Swiper
    :modules="[SwiperAutoplay, SwiperEffectCreative]"
    :slides-per-view="1"
    :loop="true"
    :effect="'creative'"
    :autoplay="{
      delay: 1000,
      disableOnInteraction: true
    }"
    :creative-effect="{
      prev: {
        shadow: false,
        translate: ['-20%', 0, -1]
      },
      next: {
        translate: ['100%', 0, 0]
      }
    }"
  >
    <SwiperSlide v-for="slide in 10" :key="slide">
      <div class="bg-green-200 h-[200px] w-full flex justify-center items-center">{{ slide }}</div>
    </SwiperSlide>
  </Swiper>
</template>
