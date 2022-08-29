<template>
  <div class="card">
    <div class="blockOne">
      <img src="~/assets/images/zeroSpace.svg" alt="ZeroSpace" class="imgZeroSpace">
      <h4 class="blockOneHeading">
        {{heading}}
      </h4>
      <a class="qrCode" @click="openedPopup = true; openPopup()">
        Show QR-code
        <img src="~/assets/images/qrCode.svg" alt="QR-Code" class="imgQrCode">
      </a>
      <div class="modaltorQR" :class="{opened: this.openedPopup}">
        <div class="modaltor">
          <div class="modaltorBackground">
            <div class="modaltorHeadingCard">
              <i class="closeiconQR" @click="openedPopup = false; closePopup()">
                &#9587;
              </i>
            </div>
            <div class="modaltorTextCard">
              <h3 class="headingCardQR">
                <div class="backgroundQR">
                  <qrcode-vue :value="addressCode" :size="size" level="H" />
                </div>
              </h3>
              <p class="textCardQR">
                Scan the QR to copy the address to the clipboard
              </p>
            </div>
          </div>
        </div>
      </div>
      <img 
        src="~/assets/images/qrCode.svg" 
        @click="openedPopup = true; openPopup()" 
        alt="QR-Code" 
        class="imgQrCodeMobil"
      >
    </div>
    <div class="blockTwo">
      <div class="blockData">
        <span class="address">
          Address
        </span>
        <input type="text" v-model="addressCode" class="cardInput">
        <div class="window">
          <p class="textWindow">
            0:A94C82
          </p>
          <img src="~/assets/images/points.svg" alt="points" class="imgPoints">
          <p class="textWindow">
            B37D8C3C
          </p>
        </div>
      </div>
      <div>
        <button 
          class="btnBlockTwo" 
          type="button"
          v-clipboard:copy="addressCode"
          v-clipboard:success="onCopy"
          v-on:click="splitText()"
        >
          <img src="~/assets/images/copy.svg" alt="copy" class="imgCopy">
        </button>
      </div>
    </div>
    <div class="border">
    </div>
    <div class="blockThree">
      <div class="text">
        <div class="blockAssets">
          <span class="assets">
            Assets
          </span>
          <h4 class="number">
            $ {{USD}}
          </h4>
        </div>
        <div class="blockAssets">
          <span class="assets">
            Members
          </span>
          <h4 class="number">
            {{participants}}
          </h4>
        </div>
      </div>
      <div class="cardSelect">
        <Select />
      </div>
    </div>
  </div>
</template>

<script>
import Select from '~/components/uikit/Select';
import QrcodeVue from 'qrcode.vue';

export default {
  components: {
    Select,
    QrcodeVue
  },
  props: {
    heading: String,
    USD: Number,
    participants: Number,
    addressCode: String,
  },
  data() {
    return {
      addressCode: '',
      value: '',
      size: 300,
      opened: false,
      openedPopup: false
    };
  },
  methods: {
    onCopy: function () {
      this.$toasted.show("The address is copied to the clipboard", { 
        theme: "toasted-primary", 
        position: "top-center", 
        duration : 1000
      });
    },
    splitText: function () {
      var str = this.addressCode;
      var Address = str.match(/.{1,33}/g);
      console.log(Address)
    },
    openPopup: () => {
      document.querySelector("body").classList.add("disableScroll");
    },
    closePopup: () => {
      document.querySelector("body").classList.remove("disableScroll");
    },
  },
}
</script>

<style lang="scss">
  @import '~/components/uikit/Card/style';
</style>