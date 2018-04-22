<template>
  <div class="happy-bd-root" v-if="!skipped">
    <div id="stage-balloon">
      <div class="balloon balloon-1">
        <p class="text">妈</p>
      </div>
      <div class="balloon balloon-2">
        <p class="text">,</p>
      </div>
      <div class="balloon balloon-3">
        <p class="text">生</p>
      </div>
      <div class="balloon balloon-4">
        <p class="text">日</p>
      </div>
      <div class="balloon balloon-5">
        <p class="text">快</p>
      </div>
      <div class="balloon balloon-6">
        <p class="text">乐</p>
      </div>
      <div class="balloon balloon-7">
        <p class="text">开</p>
      </div>
      <div class="balloon balloon-8">
        <p class="text">心</p>
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
<style lang="less" scoped>
// timing
@total-time: 8s;
@half-time: calc(@total-time/2);
@transition-time: 1s;

* {
  overflow: hidden;
  margin: 0; padding: 0;
}
#stage-balloon {
  width: 100%; height: 100%;
  background-color: antiquewhite;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 1;
  animation: popup @transition-time ease-in-out;
}

#stage-balloon .balloon {
  position: absolute;
  top: 100%;
  text-align: center;
  .text {
    position: relative;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 48px;
    top: 50%;
    transform: translateY(-50%);
  }
  &.balloon-1 { left: 3%; }
  &.balloon-2 { left: 14%; }
  &.balloon-3 { left: 22%; }
  &.balloon-4 { left: 37%; }
  &.balloon-5 { left: 50%; }
  &.balloon-6 { left: 56%; }
  &.balloon-7 { left: 75%; }
  &.balloon-8 { left: 84%; }
  width: 120px; height: 140px;
  background-color: burlywood;
  border-radius: 50%;
}

#stage-balloon .balloon-1 { 
  animation: floatup 4s ease 1s forwards; 
  background-color: #e53935;
  color: #B2EBF2;
  }
#stage-balloon .balloon-2 {
  animation: floatup 4s ease 1.15s forwards; 
  background-color: #D81B60;
  color: #FFF9C4;
  }
#stage-balloon .balloon-3 { 
  animation: floatup 4s ease 1.3s forwards; 
  background-color: #F06292;
  color: #1A237E;
  }
#stage-balloon .balloon-4 { 
  animation: floatup 4s ease 1.31s forwards; 
  background-color: #FF9800;
  color: #4527A0;
  }
#stage-balloon .balloon-5 { 
  animation: floatup 4s ease 1.6s forwards; 
  background-color: #4FC3F7;
  color: #880E4F;
  }
#stage-balloon .balloon-6 { 
  animation: floatup 4s ease 1.7s forwards; 
  background-color: #E040FB;
  color: #BBDEFB;
  }
#stage-balloon .balloon-7 { 
  animation: floatup 4s ease 1.75s forwards; 
  background-color: #FFEB3B;
  color: #4527A0;
  }
#stage-balloon .balloon-8 { 
  animation: floatup 4s ease 2.1s forwards; 
  background-color: #AB47BC;
  color: #FFF9C4;
  }

#stage-popme {
  width: 100%; height: 100%;
  background-color: aquamarine;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  animation: popup @transition-time ease-in-out @half-time forwards,
             shiftout 2s ease-in-out calc(@total-time - 2s) forwards;
  .popme-image {
    animation: popup @transition-time ease-in-out @half-time forwards;
    width: 300px;
    position: absolute;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
  }
}

@keyframes popup {
  0%   { opacity: 0; }
  100% { opacity: 1; }
}
@keyframes shiftout {
  0%   { opacity: 1; }
  100% { opacity: 0; }
}
@keyframes floatup {
  0%   { top: 100%; }
  100% { top: -40%; }
}
</style>
