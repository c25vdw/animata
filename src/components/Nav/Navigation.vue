<template>
  <div class="site-nav">
      <router-link to="/projects" target="_blank" class="nav-item">Projects</router-link>
      <a href="https://lucaszeng99.github.io/blog/" target="_blank" class="nav-item">Blog</a>
      <router-link to="/about" target="_blank" class="nav-item">About</router-link>
      <router-link to="/" target="_blank" class="nav-item">Home</router-link>
  </div>
</template> 
<script>
export default {

}
</script>
<style lang="less" scoped>
.site-nav {
    display: flex;
    flex-wrap: wrap;
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
