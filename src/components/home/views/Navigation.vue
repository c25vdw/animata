<template>
  <div class="site-nav">
      <a href="" class="nav-item" @mouseover="emitHover('project')">Projects</a>
      <a href="" class="nav-item" @mouseover="emitHover('blog')">Blog</a>
      <a href="" class="nav-item right" @mouseover="emitHover('about')">About</a>
  </div>
</template>
<script>
export default {
    methods: {
        emitHover(str) {
            console.log(str)
            this.$emit('hoverLink', str)
        }
    }
}
</script>
<style lang="less" scoped>
.site-nav {
    position: absolute;
    top: 0; left: 0;
    padding: 10px;
    margin-top: 6px;
    .nav-item {
        background-color: khaki;
        border:2px solid seagreen;
        padding: 6px;  
        font-family: Georgia, 'Times New Roman', Times, serif;
        font-size: 24px;
        transition: 0.5s;
        &:active, &:visited {
            color: #000;
        }
        &:hover {
            background-color: indigo;
            color: #fff;
        }
    }
    
}
@keyframes hovered {
    
}
</style>
