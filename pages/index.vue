<template>
<div>
  <Loading v-if="isLoading" />
  <DefaultLayout>
    <Hero 
      :USD="info.totalUSD"
      :participants="info.participantsNum"
      :reward="rewar"
    />
    <div v-scroll-spy>
      <AboutUs id="AboutUs" />
      <Video id="Video" />
      <Stake id="Stake" />
      <HowToStake id="HowToStake" />
      <OurDepools 
        :USD1="address1.totalUSD"
        :USD2="address2.totalUSD"
        :participants1="address1.participantsNum"
        :participants2="address2.participantsNum"
        :addressCode1="address1.address"
        :addressCode2="address2.address"
      />
    </div>
  </DefaultLayout>
</div>
</template>

<script>
import Loading from "~/components/uikit/Loading";
import Hero from "~/components/indexPage/Hero";
import AboutUs from "~/components/indexPage/AboutUs";
import Video from "~/components/indexPage/Video";
import Stake from "~/components/indexPage/Stake";
import HowToStake from "~/components/indexPage/HowToStake";
import OurDepools from "~/components/indexPage/OurDepools";
import DefaultLayout from "~/layouts/DefaultLayout";
const axios = require('axios').default;

export default {
  components: {
    DefaultLayout,
    Hero,
    AboutUs,
    Video,
    Stake,
    HowToStake,
    OurDepools,
    Loading,
  },
  data() {
    return {
      address1: "",
      address2: "",
      info: "",
      rewar: "",
      isLoading: true,
    };
  },
  mounted() {
    axios
      .get('https://allrightsreserved.ru/')
      .then(response => (
        this.info = response.data.total, 
        this.rewar = response.data.reward,
        this.address1 = response.data.data[0], 
        this.address2 = response.data.data[1]
      ))
      .catch(error => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  },
}
</script>

<style lang="scss">

</style>
