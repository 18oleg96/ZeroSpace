<template>
  <Container>
    <div class="stake" ref="root">
      <p class="staking">
        How staking works
      </p>
      <div class="blocks">
        <span class="border"></span>
        <section class="blockText">
          <div class="blockEnumeration1" ref="borderScroll">
            <p class="headingEnumeration1">
              Stake your tokens into our DePool contract
            </p>
            <p class="descriptionEnumeration1">
              DePool is a special verified smart contract. 
              The funds are used by us to be able to participate in the elections of 
              validators in the Everscale network
            </p>
          </div>
          <div class="blockEnumeration2">
            <p class="headingEnumeration2">
              We sign the blocks and get reward
            </p>
            <p class="descriptionEnumeration2">
              The Everscale network uses Proof Of Stake consensus. 
              We sign the blocks in the network and get rewards for the validation.   
            </p>
          </div>
          <div class="blockEnumeration3">
            <p class="headingEnumeration3">
              Our DePool distributes received rewards
            </p>
            <p class="descriptionEnumeration3">
              You will receive a reward by the DePool smart-contract in proportion 
              to your share. You can withdraw these rewards or
              reinvest in the next round of validation.
            </p>
          </div>
        </section>
        <div class="blockImg">
          <SequenceControlled 
            :images="sequenceImages"
            :index="sequenceIndex"
            :fps="30"
            :max-fps="30"
            vertical-align="center"
            extension="webp"
          />
        </div>
      </div>
      <img src="~/assets/images/blurStake.webp" alt="blurStake" class="blurStake">
    </div>
  </Container>
</template>

<script>
import { generateSequenceNames } from '~/utils/string.js'
import { mapState, mapMutations } from 'vuex'
import Loader from '~/services/Loader.js'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import SequenceControlled from '~/components/uikit/SequenceControlled';
import Container from '~/components/uikit/Container';

export default {
  components: {
    Container,
    SequenceControlled
  },
  data() {
    const path = `sequences/stake/1_Interactive_LightMix0000`
    return {
      sequenceImages: generateSequenceNames(path, 1, 200),
      isMounted: false,
    }
  },
  computed: {
    ...mapState({
      stakeSeqLoaded: (state) => state.sequences.stakeSeqLoaded,
      scrollY: (state) => state.events.scrollY,
    }),
    sequenceIndex() {
      if (!this.isMounted || !this.stakeSeqLoaded) return 0
      const bodyRect = document.body.getBoundingClientRect()
      const elemRect = this.$refs.root.getBoundingClientRect()
      const FROM = elemRect.top - bodyRect.top - window.innerHeight * 1
      const TO = FROM + window.innerHeight * 2
      const length = this.sequenceImages.length
      switch (true) {
        case this.scrollY < FROM:
          return 0
        case this.scrollY > TO:
          return length - 1
        default:
          return Math.floor(length * ((this.scrollY - FROM) / (TO - FROM)))
      }
    },
  },
  destroyed() {
    this.togglePreloader(false)
  },
  methods: {
    ...mapMutations({
      togglePreloader: 'TOGGLE_OVERLAY',
      onLoad: 'sequences/STAKE_SEQ_LOADED',
    }),
    preload() {
      let count = this.sequenceImages.length
      this.sequenceImages.forEach((image) => {
        Loader.add(`${image}.webp`).finally(() => {
          if (--count <= 0) {
            this.onLoad()
          }
        })
      })
    },
  },
  mounted() { 
    this.isMounted = true
    if (!this.stakeSeqLoaded) this.preload()

    // НИЖЕ ПЛАВНОЕ ПЕРЕКЛЮЧЕНИЕ ТЕКСТА ПРИ СКРОЛЛЕ

    gsap.registerPlugin(ScrollTrigger);
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
      gsap.to('.blockEnumeration1', {autoAlpha: 1,
        scrollTrigger: {
          trigger: '.blockEnumeration1',
          // start: 'top center',
          end: 'bottom center',
          toggleActions: 'play reverse play reverse',
        },
      });
      gsap.to('.blockEnumeration2', {autoAlpha: 1,
        scrollTrigger: {
          trigger: '.blockEnumeration2',
          start: 'top center',
          end: 'bottom center',
          toggleActions: 'play reverse play reverse',
        },
      });
      gsap.to('.blockEnumeration3', {autoAlpha: 1,
        scrollTrigger: {
          trigger: '.blockEnumeration3',
          start: 'top center',
          // end: 'bottom center',
          toggleActions: 'play reverse play reverse',
          // markers: true,
        },
      });
    })
  }
}
</script>

<style lang="scss">
  @import '~/components/indexPage/Stake/style';
</style>