<template>
<section class="main__portfolio">
    <div class="main__portfolio-container">
        <h2 class="main__portfolio-title">
            Portfolio
        </h2>
        <div class="main__portfolio-block">
            <PortfolioItem 
            v-for="item in getPortfolioWorks" 
            :key="item.id"
            :item="item"/>
        </div>
    </div>
</section>
</template>

<script>

import PortfolioItem from "@/components/Main/PortfolioItem.vue";
import {mapGetters} from "vuex"

export default {
    components: {
        PortfolioItem,
    },
    computed: {
        ...mapGetters(["getPortfolioWorks"])
    }
}


</script>