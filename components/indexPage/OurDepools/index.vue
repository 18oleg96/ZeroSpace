<template>
  <Container>
    <div class="ourDepools">
      <h3 class="headingOurDepools">
        Our depools
      </h3>
      <div class="cards">
        <div class="cardOne">
          <Card 
            heading="ZeroSpace_01" 
            code1="вфыв" 
            code2="вфывфы" 
            :USD="USD1"
            :participants="participants1"
            :addressCode="addressCode1"
          />
        </div>
        <div>
          <Card 
            heading="ZeroSpace_02" 
            code1="34234" 
            code2="236542364" 
            :USD="USD2"
            :participants="participants2"
            :addressCode="addressCode2"
          />
        </div>
      </div>
      <img src="~/assets/images/blur.webp" alt="blurOurDepools" class="blurOurDepools">
    </div>
  </Container>
</template>

<script>
import Container from '~/components/uikit/Container';
import Card from '~/components/uikit/Card';

export default {
  components: {
    Card,
    Container
  },
  props: {
    USD1: Number,
    USD2: Number,
    participants1: Number,
    participants2: Number,
    addressCode1: String,
    addressCode2: String,
  },
}
</script>

<style lang="scss">
  @import '~/components/indexPage/OurDepools/style';
</style>