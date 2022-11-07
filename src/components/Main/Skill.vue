<template>
  <section class="main__skill">
    <div class="main__skill-container">
      <h2 class="main__skill-title">Skills</h2>
      <p class="main__skill-info">I work in such programs as</p>
      <div class="main__skill-block">
        <SkillItem
          v-for="skill in getSkillsList"
          :key="skill.id"
          :skill="skill"
          class="wow animate__fadeInUp"
          :data-wow-delay="skillAnimDelay(skill.id)"
        />
      </div>
    </div>
  </section>
</template>



<script>

import SkillItem from "@/components/Main/SkillItem.vue";
import {mapGetters} from "vuex"
import {WOW} from "wowjs"

export default {
    components: {
        SkillItem
    },
    computed: {
      ...mapGetters(["getSkillsList"])
    },
    mounted(){
      new WOW({live:false}).init()
    },
    methods: {
      skillAnimDelay(id){
        const delayTime = ["0.1s", "0.3s", "0.5s","0.7s"]
        return delayTime[id-1]
      }
    }
};
</script>