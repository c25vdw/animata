<template>
  <div class="site-nav">
      <router-link to="/projects" class="nav-item item-1">Projects</router-link><p> | </p>
      <a href="https://lucaszeng99.github.io" target="_blank" class="nav-item item-2">Blog<img src="./icons/open_in_new_24px.svg" alt=""></a><p> | </p>
      <router-link to="/about" class="nav-item item-3">About</router-link><p> | </p>
      <router-link to="/" class="nav-item item-4">Home</router-link>
  </div>
</template> 
<script>
export default {

}
</script>
<style lang="less">

.site-nav{
  font-weight: 300;
  position: absolute;
  bottom: 200px; left: 50%;
  transform: translateX(-50%);
  display: flex;
  p {
  font-size: 1.3rem;
  margin: 0 10px;
  }
  a, a:link, a:visited {
    color: #15222c;
    font-size: 1.3rem;
    text-decoration: none;
  }

  a::after {
    display:block;
    content: '';
    border-bottom: solid 3px #d3634f;  
    transform: scaleX(0);  
    transition: transform 200ms ease-in-out;
  }

  a:hover::after {
    transform: scale(1);
  }

  .router-link-exact-active::after {
    display: none;
  }
  .router-link-exact-active {
    border-bottom: solid 3px #417e7b;
  }
  img {
    height: 1.3rem;
  }
}

</style>

