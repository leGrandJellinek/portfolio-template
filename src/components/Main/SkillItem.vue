<template>
<div class="main__skill-item">
    <img :src="require(`@/assets/images/main/${skill.img}`)" alt="" class="main__skill-img" :class="{resz: skill.wImg}">
    <p class="main__skill-name">{{skill.title}}</p>
    <div class="main__skill-stars">
        <img src="@/assets/images/icons/Black-Star.svg" alt="" v-for="num in skill.stars" :key="num">
        <img src="@/assets/images/icons/Grey-Star.svg" alt="" v-for="num in (5-skill.stars)" :key="num">
    </div>
</div>
</template>

<script>

export default {
    props: {
        skill: Object,
    }
}


</script>