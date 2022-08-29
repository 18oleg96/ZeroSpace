<template>
  <SequenceCanvas :image="image" :vertical-align="verticalAlign" />
</template>

<script>
import SequenceCanvas from '~/components/uikit/SequenceCanvas';

export default {
  components: {
    SequenceCanvas
  },
  props: {
    images: {
      default: () => [],
      type: Array,
    },
    index: {
      default: 0,
      type: Number,
    },
    fps: {
      default: 30,
      type: Number,
    },
    maxFps: {
      default: 30,
      type: Number,
    },
    extension: {
      default: 'webp',
      type: String,
    },
    verticalAlign: {
      type: String,
    },
  },
  data() {
    return {
      image: '',
    }
  },
  computed: {
    frameTime() {
      const RAF_MS = 1000 / 60
      const FRAME_TIME = 1000 / this.fps
      const fps = Math.max(0, FRAME_TIME - RAF_MS)
      return Math.min(this.maxFps, fps)
    },
  },
  watch: {
    index() {
      this.play()
    },
  },
  mounted() {
    this.i = this.index
    this.updateImage()
  },
  destroyed() {
    this.stop()
  },
  methods: {
    play() {
      this.stop()
      this.interval = setInterval(() => {
        requestAnimationFrame(() => {
          if (this.isReached()) {
            this.$emit('reached', this.i)
            return this.stop()
          }
          this.doStep()
          if (this.isOverflowed()) return this.stop()
          this.updateImage()
        })
      }, this.frameTime)
    },
    stop() {
      this.interval && clearInterval(this.interval)
    },
    updateImage() {
      this.image = `${this.images[this.i]}.${this.extension}`
    },
    doStep() {
      const step = this.index > this.i ? 1 : -1
      this.i += step
    },
    isReached() {
      return this.index === this.i
    },
    isOverflowed() {
      return this.i >= this.images.length || this.i <= 0
    },
  },
}
</script>
