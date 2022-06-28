<template>
      <div class="social-media-icon">
        <a href="https://github.com/DevContinue/" target="_blank" rel="noopener noreferrer">
            <GitHubIcon />
        </a>
         <a href="https://linkedin.com/in/sascha-kapahnke-a08783222/" target="_blank" rel="noopener noreferrer">
            <Linkedin />
        </a>
      </div>
</template>

<script>
import Linkedin from "@/components/icons/Linkedin.vue";
import GitHubIcon from "@/components/icons/GitHubIcon.vue";

export default {
    components: {        
        Linkedin,
        GitHubIcon
    }
}
</script>

<style lang="scss">

.social-media-icon {
    svg {
        margin: 1rem 1rem 0 0;
        width: 3rem;
        path {
            fill: $ciGrey;
            transition: 250ms all ease-in-out;
        }
        &:hover, &:focus {
            path {
                fill: $path;
            }
        }
    }
}

</style>