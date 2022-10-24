<template>
  <Container>
    <div class="hero">
      <div class="heroText">
        <div class="heroBlock">
          <h1 class="heroHeading">
            ZeroSpace Everscale staking
          </h1>
          <p class="descriptionHeading">
            Earn passive income without risk by non-custodial Everscale staking
          </p>
          <div class="border" />
          <div class="enumeration">
            <div class="blockEnumeration">
              <p class="text">
                Total assets
              </p>
              <p class="number">
                $ {{USD | round | format}}
              </p>
            </div>
            <div class="blockEnumeration">
              <p class="text">
                Total member
              </p>
              <p class="numbers">
                {{participants}}
              </p>
            </div>
            <div class="blockEnumeration">
              <p class="text">
                Yearly profit
              </p>
              <p class="numbers">
                {{reward}}%
              </p>
            </div>
          </div>
        </div>
        <div class="scroll">
          <img src="~/assets/images/scroll.svg" alt="scroll" class="scrollImg">
          <p class="scrollText">
            Scroll down to learn more
          </p>
        </div>
      </div>
      <div class="heroVideo">
        <video autoplay="autoplay" loop="loop" muted="muted" class="playHeroVideo">
          <source src = "~/assets/video/sequence.webm" >
        </video>
      </div>
      <img src="~/assets/images/blurHeroOne.webp" alt="blurHeroOne" class="blurHeroOne">
      <img src="~/assets/images/blurHeroTwo.webp" alt="blurHeroTwo" class="blurHeroTwo">
    </div>
  </Container>
</template>

<script>
import Container from '~/components/uikit/Container';
import round from 'vue-round-filter';

export default {
  components: {
    Container,
  },
  props: {
    USD: Number,
    participants: Number,
    reward: Number,
  },
  filters: {
    round,
    format: val => `${val}`.replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 '),
  },
}
</script>

<style lang="scss">
  @import '~/components/indexPage/Hero/style';
</style>