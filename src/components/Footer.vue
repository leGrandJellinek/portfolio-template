<template>
<footer class="footer">
    <div class="footer__container">
        <div class="footer__contacts-block">
            <h2 class="footer__contacts-title">
                    Contacts
            </h2>
            <p class="footer__contacts-info">
                Want to know more or just chat? 
                You are welcome!
            </p>
            <button class="footer__contacts-btn">
                <a href="#!">Send message</a>
            </button>
        </div>
        <div class="footer__social-block">
            <div class="footer__social-icons">
                <a href="https://www.linkedin.com/" target="_blank"><img src="@/assets/images/icons/in.svg" alt="" class="footer__social-icon"></a>
                <a href="https://www.instagram.com/" target="_blank"><img src="@/assets/images/icons/instagram.svg" alt="" class="footer__social-icon"></a>
                <a href="https://www.behance.net/" target="_blank"><img src="@/assets/images/icons/behance.svg" alt="" class="footer__social-icon"></a>
                <a href="https://dribbble.com/"  target="_blank"><img src="@/assets/images/icons/surface.svg" alt="" class="footer__social-icon"></a>
            </div>
            <div class="footer__social-text">Like me on
LinkedIn, Instagram, Behance, Dribble</div>
        </div>
    </div>
</footer> 
</template>

<script>
export default {

}
</script>

<style lang="sass" scoped>
@mixin iconTransition
    transition: all 100ms cubic-bezier(0.420, 0.000, 0.580, 1.000)
.footer
    &__social
        &-icons
            font-size: 2.5em
            height: 50px
            overflow: hidden
            border-bottom: 1px solid #abc
            & a
                position: relative
                top: 30px
                margin: 0 10px
                @include iconTransition
                &:hover
                    top: 5px
</style>