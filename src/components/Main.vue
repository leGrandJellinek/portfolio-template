<template>
<main class="main">
    <About />
    <Skill />
    <Portfolio/>
</main>
</template>

<script>

import About from "@/components/Main/About.vue";
import Portfolio from "@/components/Main/Portfolio.vue";
import Skill from "@/components/Main/Skill.vue";

export default {
    components: {
        About,
        Portfolio,
        Skill
    }
}


</script>