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
            :item="item"
            class="wow"
            :class="portfolioAnimSide(item.id)"
            />
        </div>
        <swiper
        :pagination="{
            type: 'bullets',
        }"
        :modules="modules" 
        class="main__portfolio-block mobile wow animate__fadeInUp">
            <swiper-slide
            v-for="item in getPortfolioWorks" 
            :key="item.id">
                <PortfolioItem 
                :item="item"
                :class="portfolioAnimSide(item.id)"
                />
            </swiper-slide>
        </swiper>
        <div class="swiper-pagination">
        </div>
    </div>
</section>
</template>

<script>

import PortfolioItem from "@/components/Main/PortfolioItem.vue";

import {mapGetters} from "vuex"

import {WOW} from "wowjs"

import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default {
    components: {
        PortfolioItem,
        Swiper,
        SwiperSlide,
    },
    computed: {
        ...mapGetters(["getPortfolioWorks"])
    },
    mounted(){
        new WOW({live:false}).init()
    },
    methods: {
        portfolioAnimSide(id){
            const classes = ["animate__fadeInLeft", "animate__fadeInRight", "animate__fadeInLeft"]
            return classes[id-1]
        }
    },
    setup() {
        return {
            modules: [Pagination, Navigation],
        };
    },
}


</script>

<style lang="sass" scoped>
.swiper
    width: 100%
    height: 430px
.swiper-slide 
    text-align: center
    font-size: 18px
    background: #fff
    display: -webkit-box
    display: -ms-flexbox
    display: -webkit-flex
    display: flex
    -webkit-box-pack: center
    -ms-flex-pack: center
    -webkit-justify-content: center
    justify-content: center
    -webkit-box-align: center
    -ms-flex-align: center
    -webkit-align-items: center
    align-items: center
</style>