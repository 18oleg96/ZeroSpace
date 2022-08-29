<template>
  <div class="button">
    <button class="button-application" :class="`${size ? size : 'md'} ${color ? color : 'primary'}`">
      <slot />
    </button>
  </div>
</template>

<script>


export default {
  name: "Index",
  props: {
    size: String,
    color: String
  },
  components: {


  },
}
</script>

<style lang="scss">
  @import '~/components/uikit/Button/style';
</style>