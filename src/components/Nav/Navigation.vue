<template>
  <div class="site-nav">
      <router-link to="/projects" class="nav-item item-1">Projects</router-link>
      <a href="https://lucaszeng99.github.io/blog/" target="_blank" class="nav-item item-2">Blog</a>
      <router-link to="/about" class="nav-item item-3">About</router-link>
      <router-link to="/" class="nav-item item-4">Home</router-link>
  </div>
</template> 
<script>
export default {

}
</script>
<style lang="less" scoped>
.site-nav {
    display: grid;
    margin: auto;
    grid-auto-columns: minmax(100px, auto);
    grid-auto-rows: minmax(2rem, auto);
    grid-template-areas:
        ". item-1 ."
        "item-2 . item-3"
        ". item-4 .";
    .nav-item {
        text-align: center;
        align-items: center;
        justify-content: center;
        &.item-1 {
            grid-column: 1/2;
            grid-row: 2/3;
            grid-area: item-1;
        }
        &.item-2 {
            grid-column: 2/3;
            grid-row: 1/2;
            grid-area: item-2;
        }
        &.item-3 {
            grid-column: 3/4;
            grid-row: 2/3;
            grid-area: item-3;
        }
        &.item-4 {
            grid-column: 2/3;
            grid-row: 3/4;
            grid-area: item-4;
        }

        &:active, &:visited {
            color: #000;
        }
        &:hover {
            background-color: indigo;
            color: #ddd;
        }
    }
    a {
        color: #000;
    }
    a:active, a:visited {
        color: #000;
    }
}
@keyframes hovered {
    
}
</style>
