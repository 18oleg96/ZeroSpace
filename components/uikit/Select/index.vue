<template>
  <div class="select" v-click-outside="closeDropdown">
    <div class="selectRow">
      <div class="selectToggle" @click="open = !open">
        <span class="selectList">Stake now</span>
        <img
          src="~/assets/images/expand.svg"
          alt="open dropdown"
          class="arrowIcon"
          :class="{opened: open}"
        />
      </div>
    </div>
    <div
      class="dropdownMenu"
      :class="{hide: !open}"
    >
      <div class="dropdownWrap">
        <a class="selectList" @click="openedPopup1 = true; openPopup()">EverSurf</a>
        <div class="modal" :class="{opened: this.openedPopup1}">
          <div class="modaltor">
            <div class="modaltorBackgroundSelect">
              <i class="closeicon" @click="openedPopup1 = false; closePopup()">&#9587;</i>
              <div class="modaltorHeading">
                <h3>
                  EverSurf
                </h3>
              </div>
              <p class="modaltorText">
                Temporary unavailable
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="dropdownWrap">
        <a class="selectList" @click="openedPopup2 = true; openPopup()">Wallet</a>
        <div class="modal" :class="{opened: this.openedPopup2}">
          <div class="modaltor">
            <div class="modaltorBackgroundSelect">
              <i class="closeicon" @click="openedPopup2 = false; closePopup()">&#9587;</i>
              <div class="modaltorHeading">
                <h3>
                  Everspace Wallet
                </h3>
              </div>
              <div class="modaltorText">
                <div>
                  <p class="modaltorTextManual">
                    You need to install an extension EVER Wallet for Google Chrome
                  </p>
                  <div class="modaltorTextDownload">
                    <a 
                      href="https://chrome.google.com/webstore/detail/ever-wallet/cgeeodpfagjceefieflmdfphplkenlfk" 
                      target="_blank"
                      class="modaltorTextExpansion"
                    >
                      expansion
                    </a>
                  </div>
                  <p class="modaltorTextManual">
                    And follow the links to our depools on everpools.io:
                  </p>
                  <div class="modaltorBlockLink">
                    <a 
                      href="https://everpools.io/depools/0:a94c82af0485ec5b7fcc810d945d800613c2862e1e0b37d8c3c29b038443b518" 
                      target="_blank"
                      class="modaltorTextLink"
                    >
                      the first link
                    </a>
                    <a 
                      href="https://everpools.io/depools/0:a0ddd162a6d180fc7d39891f5453b8670ee5e0bdb511b6fbe1e9da4848ce03af" 
                      target="_blank"
                      class="modaltorTextLink"
                    >
                      second link
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="dropdownWrap">
        <a class="selectList" @click="openedPopup3 = true; openPopup()">Everpools</a>
        <div class="modal" :class="{opened: this.openedPopup3}"> 
          <div class="modaltor">
            <div class="modaltorBackgroundSelect">
              <i class="closeicon" @click="openedPopup3 = false; closePopup()">&#9587;</i>
              <div class="modaltorHeading">
                <h3>
                  Everpools
                </h3>
              </div>
              <div class="modaltorText">
                <div>
                  <p class="modaltorTextManual">
                    Install a wallet using the link Everspace  for ios or android:
                  </p>
                  <div class="modaltorTextDownload">
                    <a href="https://apps.apple.com/ru/app/everspace/id1585434994?l=en" target="_blank">
                      <img src="~/assets/images/appStore.png" alt="appStore" class="modaltorTextDownloadImg">
                    </a>
                    <a href="https://play.google.com/store/apps/details?id=com.oberton.app" target="_blank">
                      <img src="~/assets/images/googlePlay.png" alt="googlePlay" class="modaltorTextDownloadImg">
                    </a>
                  </div>
                  <p class="modaltorTextManual">
                    And follow the following links:
                  </p>
                  <div class="modaltorBlockLink">
                    <a 
                      href="https://everspace.app/deeplink?depool=0:a94c82af0485ec5b7fcc810d945d800613c2862e1e0b37d8c3c29b038443b518&type=depool_stake&network=mainnet" 
                      target="_blank"
                      class="modaltorTextLink"
                    >
                      the first link
                    </a>
                    <a 
                      href="https://everspace.app/deeplink?depool=0:a0ddd162a6d180fc7d39891f5453b8670ee5e0bdb511b6fbe1e9da4848ce03af&type=depool_stake&network=mainnet" 
                      target="_blank"
                      class="modaltorTextLink"
                    >
                      second link
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import vClickOutside from 'v-click-outside';

export default {
  data() {
    return {
      open: false,
      openedPopup1: false,
      openedPopup2: false,
      openedPopup3: false,
    }
  },
  directives: {
    clickOutside: vClickOutside.directive
  },
  methods: {
    closeDropdown() {
      if (this.open === true) {
        this.open = false;
      }
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
  @import './styles';
</style>
