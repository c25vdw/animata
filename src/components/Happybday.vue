<template>
  <div class="happy-bd-root" v-if="!skipped">
    <div id="stage-balloon">
      <div class="balloon balloon-1">
        <p class="text">一</p>
      </div>
      <div class="balloon balloon-2">
        <p class="text">二</p>
      </div>
      <div class="balloon balloon-3">
        <p class="text">三</p>
      </div>
      <div class="balloon balloon-4">
        <p class="text">四</p>
      </div>
      <div class="balloon balloon-5">
        <p class="text">五</p>
      </div>
      <div class="balloon balloon-6">
        <p class="text">六</p>
      </div>
      <div class="balloon balloon-7">
        <p class="text">七</p>
      </div>
      <div class="balloon balloon-8">
        <p class="text">八</p>
      </div>
    </div>
    <div id="stage-popme">
      <img src="../assets/me.jpg" alt="me_image" class="popme-image">
    </div>
  </div>
</template> 
<script>
export default {
  name: 'Happybday-animation',
  props: ["skipped"],
}
</script>
<style lang="less">
@total-time: 4s;
@half-time: calc(@total-time/2);
@transition-time: 1s;
#stage-balloon {
  width: 100%; height: 100%;
  background-color: antiquewhite;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 1;
  animation: popup @transition-time ease-in-out;
}

#stage-balloon balloon {
  width: 20%; height: 20%;
  background-color: burlywood;
  
}

#stage-popme {
  width: 100%; height: 100%;
  background-color: aquamarine;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  animation: popup @transition-time ease-in @half-time forwards;
  .popme-image {
    width: 40px;
  }
}

@keyframes popup {
  0%   { opacity: 0; }
  100% { opacity: 1; }
}
</style>
