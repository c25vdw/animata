<template>
  <div class="about content">
      <div class="about-title"><h1>About me</h1></div>
      <div class="about-intro">
<p>
Student @University of Alberta, majoring in Software Engineering.
</p>
      </div>
      <div class="about-social">
        <p>Find me on:</p>
        <a href="https://github.com/LucasZeng99" target="_blank"><img class="icon" src="../icons/github.svg" alt=""></a>
        <a href="https://www.linkedin.com/in/zichangzeng/" target="_blank"><img class="icon" src="../icons/linkedin.svg" alt=""></a>
      </div>
      
  </div>
</template>

<script>
import SiteNav from '@/components/Nav'
export default {
  components: { SiteNav }
}
</script>
<style lang="less" scoped>
@import "../../less/content";
@import "../../less/keyframes";
p {
  font-size: 1.3rem;
}
.about {
  padding-top: 300px;
}

.about-title {
  margin-bottom: 30px;
}

.about-social {
  margin-top: 30px;
  p {
    margin-bottom: 10px;
  }
  img.icon {
    height: 2rem;
    margin: 0 8px;
  }
}
</style>
