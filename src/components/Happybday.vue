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
  width: 80px; height: 100px;
  background-color: burlywood;
  border-radius: 50%;
  ::after {
    position: absolute;
    bottom: 50%; left: 50%;
    width: 2px; height: 20px;
    border: 4px solid blue;
  }
}
#stage-balloon .balloon-1 { animation: floatup 4s ease 1s forwards; }
#stage-balloon .balloon-2 { animation: floatup 4s ease 1.15s forwards; }
#stage-balloon .balloon-3 { animation: floatup 4s ease 1.3s forwards; }
#stage-balloon .balloon-4 { animation: floatup 4s ease 1.31s forwards; }
#stage-balloon .balloon-5 { animation: floatup 4s ease 1.6s forwards; }
#stage-balloon .balloon-6 { animation: floatup 4s ease 1.7s forwards; }
#stage-balloon .balloon-7 { animation: floatup 4s ease 1.75s forwards; }
#stage-balloon .balloon-8 { animation: floatup 4s ease 2.1s forwards; }

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
@keyframes floatup {
  0%   { top: 100%; }
  100% { top: -40%; }
}
</style>
