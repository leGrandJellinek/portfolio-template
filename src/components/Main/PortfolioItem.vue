<template>
<div class="main__portfolio-item">
    <img :src="require(`@/assets/images/main/${item.image}`)" alt="" class="main__portfolio-img">
    <a href="" class="main__portfolio-link">{{item.title}}</a>
</div>
</template>

<script>

export default {
    props: {
        item: Object,
    }
}

</script>