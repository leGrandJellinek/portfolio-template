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
        />
      </div>
    </div>
  </section>
</template>



<script>

import SkillItem from "@/components/Main/SkillItem.vue";
import {mapGetters} from "vuex"

export default {
    components: {
        SkillItem
    },
    computed: {
      ...mapGetters(["getSkillsList"])
    }

};
</script>