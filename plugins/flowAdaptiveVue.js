import Vue from 'vue'
import FlowAdaptive from 'flow-adaptive-vue'

Vue.use(FlowAdaptive, {
  fontRatio: 1440 / 10,  // the best practice is to set fontRatio to base layout width / 10
  // maxWidth: 1440,
  minWidth: 769,
  breakPoints: [
    // {
    //   minWidth: 650,
    //   maxWidth: 900,
    //   fontRatio: 768 / 10,
    // },
    {
      maxWidth: 768,
      fontRatio: 375 / 10,
    },
  ],
})