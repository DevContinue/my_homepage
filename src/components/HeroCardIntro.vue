<template>
    <article class="intro-text">
        <p class="intro-hello">Hey ich heiße Sascha Kapahnke,</p>
        <h1>und bin Web-Entwickler,</h1>
        <p class="content">Aktuell arbeite ich als Entwickler für die Aequitas AG,</p>
        <p class="content" style="margin-top: -14px">wenn Sie spannende Projekte umsetzten wollen oder</p>
        <p class="content" style="margin-top: -14px">Hilfe brauchen, kontaktieren Sie mich gerne.</p>
    <SocialNetworks />
    </article> 
    
</template>

<script>
import SocialNetworks from "@/components/SocialNetworks.vue";

export default {
    components: {
        SocialNetworks
    }
}
</script>

<style lang="scss" scoped>
.intro-text {
    color: $ciWhite;
    max-width: 40rem;
    font-family: $roboto;
    p {
        font-size: 1.5rem;
        padding: 0;
        margin: 0;
        &.intro-hello {
            margin: 2rem 0 1rem 0;
        }
        &.content {
            margin: 0 0 2rem 0;
            line-height: 1.4rem;
            color: $ciGrey;
        }
    }
    h1 {
        font-size: 2.5rem;
        padding: 0;
        margin: 0 0 1rem 0;
    }
}    
</style>
