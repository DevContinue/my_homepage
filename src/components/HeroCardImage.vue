<template>

   <div class="profile-image">
    <img src="@/assets/images/profileOne.jpg">
   </div>
    
</template>

<style lang="scss" scoped>

$size: 20rem;
$size-small: 10rem;

.profile-image {
    border-radius: 100rem;
    overflow: hidden;
    width: $size;
    height: $size;
    margin: 0 5rem 0 0;
    img {
        width: $size;
    }

    @include small {
        width: $size-small;
        height: $size-small;
        img {
            width: $size-small;
        }
    }
}

</style>