<template>
<nav class="header__nav">
    <ul class="header__nav-menu" :class="{active: burger}">
        <li v-for="link in getMenuList" :key="link.id"><router-link :to="link.path" class="header__nav-link">{{link.title}}</router-link></li>
        <img src="@/assets/images/icons/back.svg" alt="" class="header__nav-back" @click="burger = !burger">
    </ul>
    <button class="header__nav-burger"><img src="@/assets/images/icons/burger.svg" alt="" @click="burger = !burger"></button>
</nav>
</template>

<script>
export default {
    computed: {
        getMenuList(){
           return this.$store.getters.getMenuList
        }
    },
    data(){
        return {
            burger: false
        }
    }
}
</script>