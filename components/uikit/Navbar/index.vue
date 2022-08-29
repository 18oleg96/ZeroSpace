<template>
  <div class="navSticky">
    <Container>
      <nav class="nav">
        <div class="logo">
          <Logo />
        </div>
        <img 
          class="burger"
          src="~/assets/images/burger.svg" 
          alt="burger" 
          @click="openedSidebar = true; openBurger()"
        >
        <ul class="navList" v-scroll-spy-active>
          <li class="navListEnumeration">
            <a 
              href="#AboutUs" 
              class="navListLink" 
              v-scroll-to="'#AboutUs'"
            >
              About us
            </a>
          </li>
          <li class="navListEnumeration">
            <a 
              href="#Video" 
              class="navListLink" 
              v-scroll-to="'#Video'"
            >
              Staking
            </a>
          </li>
          <li class="navListEnumeration">
            <a 
              href="#Stake" 
              class="navListLink" 
              v-scroll-to="'#Stake'"
            >
              How to stake
            </a>
          </li>
          <li class="navListEnumeration">
            <a 
              href="#OurDepools" 
              class="navListLink" 
              v-scroll-to="'#OurDepools'"
            >
              Our depools
            </a>
          </li>
          <li class="navListEnumeration">
            <a 
              href="#Support" 
              class="navListLink" 
              v-scroll-to="'#Support'"
            >
              Support
            </a>
          </li>
        </ul>
        <div class="navBtn">
          <a 
            href="#OurDepools" 
            v-scroll-to="'#OurDepools'" 
          >
            <Button>
              Stake now
            </Button>
          </a>
        </div>
      </nav>

      <div class="sidebar" :class="{opened: this.openedSidebar}">
        <Container>
          <div class="sidebarHeader">
            <div class="logo">
              <Logo />
            </div>
            <img 
              class="burgerSidebar"
              src="~/assets/images/burger.svg" 
              alt="burger" 
              @click="openedSidebar = false; closeBurger()"
            >
          </div>
          <div class="sidebarMenu">
            <ul class="navList">
              <li class="navListEnumeration">
                <a 
                  href="#AboutUs" 
                  class="navListLink" 
                  v-scroll-to="'#AboutUs'"
                  @click="openedSidebar = false; closeBurger()"
                >
                  About us
                </a>
              </li>
              <li class="navListEnumeration">
                <a 
                  href="#Video" 
                  class="navListLink" 
                  v-scroll-to="'#Video'"
                  @click="openedSidebar = false; closeBurger()"
                >
                  Staking
                </a>
              </li>
              <li class="navListEnumeration">
                <a 
                  href="#Stake" 
                  class="navListLink" 
                  v-scroll-to="'#Stake'"
                  @click="openedSidebar = false; closeBurger()"
                >
                  How to stake
                </a>
              </li>
              <li class="navListEnumeration">
                <a 
                  href="#OurDepools" 
                  class="navListLink" 
                  v-scroll-to="'#OurDepools'"
                  @click="openedSidebar = false; closeBurger()"
                >
                  Our depools
                </a>
              </li>
              <li class="navListEnumeration">
                <a 
                  href="#Support" 
                  class="navListLink" 
                  v-scroll-to="'#Support'"
                  @click="openedSidebar = false; closeBurger()"
                >
                  Support
                </a>
              </li>
              <div class="sidebarMenuBtn">
                <a 
                  href="#OurDepools" 
                  v-scroll-to="'#OurDepools'" 
                  @click="openedSidebar = false; closeBurger()"
                >
                  <Button size="max">
                    Stake now
                  </Button>
                </a>
              </div>
            </ul>
          </div>
        </Container>
      </div>
    </Container>
  </div>
</template>

<script>
import Container from '~/components/uikit/Container';
import Logo from '~/components/uikit/Logo';
import Button from '~/components/uikit/Button';

export default {
  components: {
      Logo,
      Button,
      Container
  },
  data() {
    return {
      openedSidebar: false
    }
  },
  methods: {
    openBurger: () => {
      document.querySelector("body").classList.add("disableScroll");
    },
    closeBurger: () => {
      document.querySelector("body").classList.remove("disableScroll");
    },
  },
}
</script>

<style lang="scss">
  @import '~/components/uikit/Navbar/style';
</style>
