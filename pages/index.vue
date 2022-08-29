<template>
<div>
  <DefaultLayout>
    <Hero 
      :USD="data.total.USD"
      :participants="data.total.participants"
    />
    <div v-scroll-spy>
      <AboutUs id="AboutUs" />
      <Video id="Video" />
      <Stake id="Stake" />
      <HowToStake id="HowToStake" />
      <OurDepools 
        
        :USD1="data.wallet1.USD"
        :USD2="data.wallet2.USD"
        :participants1="data.wallet1.participants"
        :participants2="data.wallet2.participants"
        :addressCode1="data.wallet1.wallet"
        :addressCode2="data.wallet2.wallet"
      />
    </div>
  </DefaultLayout>
</div>
</template>

<script>
import Hero from "~/components/indexPage/Hero";
import AboutUs from "~/components/indexPage/AboutUs";
import Video from "~/components/indexPage/Video";
import Stake from "~/components/indexPage/Stake";
import HowToStake from "~/components/indexPage/HowToStake";
import OurDepools from "~/components/indexPage/OurDepools";
import DefaultLayout from "~/layouts/DefaultLayout";
import jsonData from "~/jsonData.json"

export default {
  components: {
    DefaultLayout,
    Hero,
    AboutUs,
    Video,
    Stake,
    HowToStake,
    OurDepools,
  },
  data(){
    return{
      data: jsonData
    }
  },
}
</script>

<style lang="scss">

</style>
