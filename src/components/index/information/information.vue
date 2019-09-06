<template>
    <div>
        <Navigation></Navigation>
        <!--建议在该位置放一级、二级菜单-->
        <Essay></Essay>
        <Video></Video>
        <Software></Software>
    </div>

</template>

<script>
    import Navigation from '../the-navigation'
    import Essay from './essay/essay'
    import Software from './software/software'
    import Video from './video/video'
    export default {
        name: "information",
        components: {Navigation, Essay, Video, Software}
    }
</script>

<style scoped>

</style>
