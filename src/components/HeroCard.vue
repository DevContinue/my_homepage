<template>

    <section class="hero-card">
        <HeroCardImage />
        <HeroCardIntro />
    </section>

    
</template>

<script>
import HeroCardImage from "@/components/HeroCardImage.vue";
import HeroCardIntro from "@/components/HeroCardIntro.vue";

export default {
    components: {
        HeroCardImage,
        HeroCardIntro
    }
}
</script>

<style lang="scss" scoped>

    .hero-card {
        display: flex;
        justify-content: space-between;
        flex-direction: row;

        @include small {
            flex-direction: column;
            margin-left: 2rem;
        }
    }
</style>