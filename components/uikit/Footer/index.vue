<template>
<div class="footer" id="Support">
  <Container>
    <div class="border">
    </div>
    <div class="blocks">
      <div class="blockOne">
        <p class="Contact">
          Questions? Contact us!
        </p>
        <a href="mailto:mail@zerospace.xyz" >
          <h3 class="mail">
            mail@zerospace.xyz
          </h3>
        </a>
      </div>
      <div class="blockTwo">
        <div class="blockTelegram">
          <p class="Contact">
            Questions? Contact us!
          </p>
          <h3 class="telegram">
            <a href="#" class="telegramLink">
              Our telegram
              <img src="~/assets/images/link.svg" alt="link" class="linkImg">
            </a>
          </h3>
        </div>
      </div>
    </div>
    <p class="text">
      © 2022 ZeroSpace
    </p>
  </Container>
  <img src="~/assets/images/blurFooter.webp" alt="blurFooter" class="blurFooter">
</div>
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
  @import '~/components/uikit/Footer/style';

</style>
