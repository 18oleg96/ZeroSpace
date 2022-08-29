<template>
  <canvas ref="canvas"></canvas>
</template>

<script>
export default {
  props: {
    image: {
      required: true,
      type: String,
    },
    verticalAlign: {
      default: 'top', // center
      type: String,
    },
  },
  computed: {
    frameTime() {
      const RAF_MS = 1000 / 60
      const FRAME_TIME = 1000 / this.fps
      return Math.max(0, FRAME_TIME - RAF_MS)
    },
  },
  watch: {
    image() {
      this.renderImage()
    },
  },
  mounted() {
    this.init()
    this.renderImage()
  },
  beforeDestroy() {
    clearTimeout(this.timeout)
  },
  methods: {
    init() {
      this.imgNode = new Image()
      this.imgNode.onload = this.drawImage
    },
    getVerticalAlign(cHeight, iHeight, ratio) {
      switch (this.verticalAlign) {
        case 'center':
          return (cHeight - iHeight * ratio) / 2
        case 'top':
        default:
          return 0
      }
    },
    renderImage() {
      if (!this.image) return
      this.imgNode.src = this.image
    },
    drawImage() {
      const c = this.$refs.canvas
      const { width, height } = c.getBoundingClientRect()
      if (width === 0 || height === 0) {
        this.timeout = setTimeout(this.drawImage, 100)
        return
      }
      const ctx = c.getContext('2d')
      c.width = width
      c.height = height
      const iWidth = this.imgNode.width
      const iHeight = this.imgNode.height
      const ratio = Math.max(width / iWidth, height / iHeight)
      ctx.clearRect(0, 0, width, height)
      
      ctx.drawImage(
        this.imgNode,
        0,
        0,
        iWidth,
        iHeight,
        0,
        this.getVerticalAlign(height, iHeight, ratio),
        iWidth * ratio,
        iHeight * ratio
      )
    },
  },
}
</script>

<style lang="scss" scoped>
canvas {
  width: 100%;
  height: 100%;
  image-rendering: pixelated;
  image-rendering: optimizeSpeed;
}
</style>
