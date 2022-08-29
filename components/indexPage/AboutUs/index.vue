<template>
  <Container>
    <div class="aboutUs">
      <div class="navbar">
      </div>
      <div class="blocks">
        <div class="servers">
          <p class="serversText">
            Magister Ludi contest winner 
          </p>
        </div>
        <div class="blockText">
          <h2 class="aboutUsHeading">
            We guarantee safety and profitability of your tokens
          </h2>
          <div class="serverss">
            <p class="serversTexts">
              Magister Ludi contest winner 
            </p>
          </div>
          <div class="border">
          </div>
          <div class="aboutUsEnumeration">
            <div class="blockEnumeration">
              <img src="~/assets/images/heart.webp" alt="heart" class="imgEnumeration imgOne">
              <p class="textEnumeration">
                Great team
              </p>
              <p class="descriptionEnumeration">
                We have a great team that supports the servers operation 24/7
              </p>
            </div>
            <div class="blockEnumeration">
              <img src="~/assets/images/message.webp" alt="message" class="imgEnumeration imgTwo">
              <p class="textEnumeration">
                Depool reliability
              </p>
              <p class="descriptionEnumeration">
                Due to smart contracts, you will not lose your tokens, 
                and modern hardware guarantees 100% uptime
              </p>
            </div>
            <div class="blockEnumeration">
              <img src="~/assets/images/graph.webp" alt="graph" class="imgEnumeration imgThree">
              <p class="textEnumeration">
                Everscale staking
              </p>
              <p class="descriptionEnumeration">
                By staking your tokens, you not only increase the security
                of the network, but also contribute to the growth of the token rate
              </p>
            </div>
          </div>
        </div>
      </div>
      <img src="~/assets/images/blurAboutUs.webp" alt="blurAboutUs" class="blurAboutUs">
    </div>
  </Container>
</template>

<script>
import Container from '~/components/uikit/Container';

export default {
  components: {
    Container
  },
}

</script>

<style lang="scss">
  @import '~/components/indexPage/AboutUs/style';
</style>