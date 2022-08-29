<template>
  <div class="video">
    <video autoplay="autoplay" loop="loop" muted="muted" class="playVideo">
      <source src = "~/assets/video/video.webm" >
    </video>
    <h2 class="heading">
      Let your tokens not idle, but bring you passive income
    </h2>
  </div>
</template>

<script>


export default {
  name: "Index",
  components: {


  },
}
</script>

<style lang="scss">
  @import '~/components/indexPage/Video/style';
</style>