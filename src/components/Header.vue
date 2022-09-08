<template>
<header class="header">
    <div class="header__container">
        <Navbar />
        <div class="header__content">
            <div class="header__content-up">
                <h1 class="header__content-title">Denis Novik</h1>
                <h2 class="header__content-info">
                    UX | UI designer
                    24 years old, Minsk
                </h2>
                <div class="header__content-block">
                    <h2 class="header__content-lang"><span>Ru</span> | <span>Eng</span></h2>
                </div>
            </div>
            <div class="header__content-bottom">
                <img src="@/assets/images/header/header__content-img.png" alt="" class="header__content-img">
                <img src="@/assets/images/header/header__content-mobile-bg.png" alt="" class="header__content-img mobile">
            </div>
        </div>
    </div>
</header>
</template>

<script>

import Navbar from "@/components/Navbar.vue"

export default {
    components: {
        Navbar
    }
}
</script>

<style>

</style>