<template>
  <div id="entry-animation">
    <main id="root">
        <section class="images">
                <div class="image"></div>
                <div class="image"></div>
            </section>
        <section id="prologue">
            <div class="word-1">
                <div>
                    <p>苟</p>
                </div>
                <div class="line"></div>
                <div>
                    <p>利</p>
                </div>
            </div>
            <div class="word-2">
                <div>
                    <p>国</p>
                </div>
                <div class="line"></div>
                <div>
                    <p>家</p>
                </div>
            </div></section>
        <section id="stage-1">
            <div class="message-panel">
                <div class="message">
                    <p class="char">循</p>
                    <p class="char">循</p>
                    <p class="char">渐</p>
                    <p class="char">进</p>
                    <small class="text">论努力在哪不是一条咸鱼</small>
                </div>
                <div class="message">
                    <p class="char">蓦</p>
                    <p class="char">然</p>
                    <p class="char">回</p>
                    <p class="char">首</p>
                    <small class="text">到头来只是普通村民之一</small>
                </div>
                <div class="message">
                    <p class="char">左</p>
                    <p class="char">右</p>
                    <p class="char">是</p>
                    <p class="char">壁</p>
                    <small class="text">不开始就不会牛批</small>
                </div>
            </div>
        </section>
        </main>
  </div>
</template>

<script>
export default {
  data () {
      return {

      }
  }
}
</script>

<style scoped>
p {
  margin: 0;
}

#root {
  overflow: hidden;
  position: absolute;
  width: 100%; height: 100%;
  top: 0; left: 0;
}

#prologue, .images {
  position: absolute;
  width: 200%; height: 100%;
  top: 0; left: 0;
}

/* words setup */
#prologue .word-1,
#prologue .word-2{
  position: absolute;
  top: calc(50% - 60px);
  height: 120px;
}

#prologue .word-1 div,
#prologue .word-2 div{
  float: left;
  width: 120px; height: 120px;
  border: 4px solid rgba(88, 88, 88, 0.603);
  background-color: rgba(202, 202, 202, 0.432);
  border-radius: 20%;
  box-sizing: border-box;
  margin-right: 120px;
}
#prologue .word-1 div:nth-child(3),
#prologue .word-2 div:nth-child(3){
  margin-right: 0;
}
#prologue .word-1 div.line,
#prologue .word-2 div.line{
  height: 0;
  position: absolute;
  margin: 0;
  top: calc(50%);
  left: calc(33.33%);
  border: 2px solid rgba(88, 88, 88, 0.88);
  border-radius: 0;
  overflow: hidden;
  width: 0;
}

#prologue .word-1 div p,
#prologue .word-2 div p {
  width: 100%; height: 100%;
  margin: 0;
  font-size: 70px;
  font-weight: 100;
  color: green;
  text-align: center;
  line-height: 120px;
  opacity: 0;
}
#prologue .word-2 div p {color: rgb(114, 18, 18);}

#prologue .word-1{
  left: calc(25% - 180px);
}
#prologue .word-2 { right: 80px; }
/* end of words */

/* background images setup */
.images .image {
  position: absolute;
  top: 0; left: 0;
  width: 0%; height: 100%;
  overflow: hidden;
}
.images .image:nth-child(2) {
  width: 100%; height: 0;
}

.images .image:after {
  content: "";
  display: block;
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background-size: cover;
  background-position: center;
}


.images .image:nth-child(1):after { background-color: rgb(247, 134, 119); }
.images .image:nth-child(2):after { background-color: rgb(128, 194, 128); }
/* end of background colors */

/* messages setup */
#stage-1 {
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
}
#stage-1 .message-panel {
  position: absolute;
  top: calc(50% - 200px); right: 80px;
  width: 400px; height: 400px;
}

#stage-1 .message-panel .message {
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
}

#stage-1 .message-panel .message .char {
  float: left;
  width: 190px; height: 190px;
  font-size: 170px;
  color: red;
  font-weight: 400;
  text-align: center;
  line-height: 190px;
  opacity: 0;
}
#stage-1 .message-panel .message .char:nth-child(1),
#stage-1 .message-panel .message .char:nth-child(2) { margin-bottom: 20px; }
#stage-1 .message-panel .message .char:nth-child(odd) { margin-left: 20px; }
#stage-1 .message-panel .message .text {
  position: absolute;
  top: 185px; left: 50px;
  width: 350px; height: 30px;
  display: block;
  font-size: 15px;
  color: rgb(3, 0, 199);
  line-height: 30px;
  opacity: 0;
}

#stage-1 .message-panel .message:after {
  content: ""; display: block;
  position: absolute;
  top: 0; left: 0;
  width: 30px; height: 100%;
  background-color: rgb(255, 123, 0);
  opacity: 0;
}
/* end of stage-1 setup */

/* words animation config */
#prologue .word-1 div:nth-child(1) p {animation: show-word 0.3s ease-out 0.0s forwards;}
#prologue .word-1 div:nth-child(2) {animation: draw-line 0.3s ease-out 0.0s forwards, jump-glasses 0.4s ease-out 0.9s forwards;}
#prologue .word-1 div:nth-child(3) p {animation: show-word 0.3s ease-out 0.3s forwards;}
#prologue .word-1 div:nth-child(1) {animation: jump-glasses 0.4s ease-out 0.9s forwards;}
#prologue .word-1 div:nth-child(3) {animation: jump-glasses 0.4s ease-out 0.9s forwards;}

#prologue { animation: move-prologue 0.8s ease 1.3s forwards; }

#prologue .word-2 div:nth-child(1) p {animation: show-word 0.3s ease-out 1.7s forwards}
#prologue .word-2 div:nth-child(2) {animation: draw-line 0.2s ease-out 1.8s forwards, jump-glasses 0.4s ease-out 2.4s forwards;}
#prologue .word-2 div:nth-child(3) p {animation: show-word 0.3s ease-out 2.0s forwards}
#prologue .word-2 div:nth-child(1) {animation: jump-glasses 0.4s ease-out 2.4s forwards;}
#prologue .word-2 div:nth-child(3) {animation: jump-glasses 0.4s ease-out 2.4s forwards;}

#prologue .word-2 { animation: throw-left 1s ease 3s forwards;}
/* images animation config */
.images .image:nth-child(1) { 
  animation: 
    show_image_from_left 1.6s ease 0.0s forwards,
    rotate-right 2s ease 8.6s forwards;
  }
.images .image:nth-child(2) { 
  animation: 
    show_image_from_top 0.8s ease 1.7s forwards, 
    rotate-right 2s ease 8.2s forwards;
}

/* stage-1 animation config starts with 3s*/
#stage-1 .message-panel {
  animation: 
    panel-slide-in 0.8s ease 3s forwards,
    panel-slide-left 0.8s ease 4.2s forwards,
    panel-slide-right 0.8s ease 5.8s forwards,
    throw-left-stage-1 2s ease 7.2s forwards;
}

#stage-1 .message-panel .message:nth-child(1):after {
  animation: show-bar 0.5s ease 3s forwards;
}
#stage-1 .message-panel .message:nth-child(1) .char {color: rgb(177, 80, 51);}
#stage-1 .message-panel .message:nth-child(1) .char:nth-child(1) {
  animation: show-word 0.4s ease 3s forwards;}
#stage-1 .message-panel .message:nth-child(1) .char:nth-child(2) {
  animation: show-word 0.4s ease 3.1s forwards;}
#stage-1 .message-panel .message:nth-child(1) .char:nth-child(3) {
  animation: show-word 0.4s ease 3.2s forwards;}
#stage-1 .message-panel .message:nth-child(1) .char:nth-child(4) {
  animation: show-word 0.4s ease 3.3s forwards;}
#stage-1 .message-panel .message:nth-child(1) .text {
  animation: show-text 0.5s ease 3s forwards;}
#stage-1 .message-panel .message:nth-child(1) {
  animation: fadeout 0.3s ease 3.9s forwards;
}

#stage-1 .message-panel .message:nth-child(2):after {
  animation: show-bar 0.5s ease 4.2s forwards;
}
#stage-1 .message-panel .message:nth-child(2) .char {color: rgb(18, 85, 139);}
#stage-1 .message-panel .message:nth-child(2) .char:nth-child(1) {
  animation: show-word 0.4s ease 4.5s forwards;}
#stage-1 .message-panel .message:nth-child(2) .char:nth-child(2) {
  animation: show-word 0.4s ease 4.6s forwards;}
#stage-1 .message-panel .message:nth-child(2) .char:nth-child(3) {
  animation: show-word 0.4s ease 4.7s forwards;}
#stage-1 .message-panel .message:nth-child(2) .char:nth-child(4) {
  animation: show-word 0.4s ease 4.8s forwards;}
#stage-1 .message-panel .message:nth-child(2) .text {
  animation: show-text 0.5s ease 4.7s forwards;}
#stage-1 .message-panel .message:nth-child(2) {
  animation: fadeout 0.3s ease 5.4s forwards;
}

#stage-1 .message-panel .message:nth-child(3):after {
  animation: show-bar-left 0.5s ease 5.7s forwards;
}
#stage-1 .message-panel .message:nth-child(3) .char {color: rgb(92, 43, 11);}
#stage-1 .message-panel .message:nth-child(3) .text {color: rgb(163, 7, 7); font-weight: 700;}
#stage-1 .message-panel .message:nth-child(3) .char:nth-child(1) {
  animation: show-word 0.4s ease 6s forwards;}
#stage-1 .message-panel .message:nth-child(3) .char:nth-child(2) {
  animation: show-word 0.4s ease 6.1s forwards;}
#stage-1 .message-panel .message:nth-child(3) .char:nth-child(3) {
  animation: show-word 0.4s ease 6.2s forwards;}
#stage-1 .message-panel .message:nth-child(3) .char:nth-child(4) {
  animation: show-word 0.4s ease 6.3s forwards;}
#stage-1 .message-panel .message:nth-child(3) .text {
  animation: show-text 0.5s ease 6.1s forwards;}

/* quit everything. */
* {
  animation: kill 0.1s ease 10s forwards;
}
@keyframes kill {
  0%   { position: absolute; top:inherit; left: inherit; }
  100% { position: absolute; top: -9999px; right: -9999px;}
}
@keyframes panel-slide-in {
  0%   { right: -400px;}
  80%  { right: 80px; transform: scale(1.3);}
  100% { right: 80px; transform: scale(1);}
}
@keyframes panel-slide-left {
  0%   { right: 80px; opacity: 1}
  80% { right: calc(100% - 480px); opacity: 1;transform: scale(1.3);}
  100% { right: calc(100% - 480px); opacity: 1;transform: scale(1);}
}
@keyframes panel-slide-right {
  0%   { right: calc(100% - 480px); opacity: 1;}
  80% { right: 80px; opacity: 1; transform: scale(1.3);}
  100% { right: 80px; opacity: 1; transform: scale(1);}
}
@keyframes fadeout{
  0%   { opacity: 1;}
  100% { opacity: 0;}
}
@keyframes throw-left {
  0%   { right: 80px; opacity: 1;}
  100% { right: calc(50%); transform: rotate(360deg); opacity: 0;}
}
@keyframes throw-left-stage-1 {
  0%   { right: 80px; opacity: 1;}
  100% { right: 1200px; transform: rotate(360deg); opacity: 0;}
}
@keyframes rotate-right {
  0%   { transform-origin: right bottom; opacity: 1;}
  100% { transform: rotate(180deg); transform-origin: right bottom; opacity: 1;}
}
@keyframes show-text {
  0%   { opacity: 0; }
  100% { opacity: 1; }
}
@keyframes show-bar {
  0%   { width: 300px; opacity: 0; }
  100% { width: 15px; opacity: 1; }
}
@keyframes show-bar-left {
  0%   { width: 300px; left: -285px; opacity: 0; }
  100% { width: 15px; left: 0; opacity: 1; }
}
@keyframes show-word {
  0%   { transform: scale(0.4); opacity: 0; }
  70%  { transform: scale(1.1); opacity: 1; }
  100% { transform: scale(1); opacity: 1; }
}
@keyframes draw-line {
  0%   { width: 0px; }
  100% { width: 120px; }
}
@keyframes move-prologue {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
@keyframes jump-glasses {
  0%   { transform: translateY(0); }
  20%  { transform: translateY(-20px); }
  40%  { transform: translateY(0); }
  80%  { transform: translateY(-10px); }
  100% { transform: translateY(0); }
}
@keyframes show_image_from_left {
  0%   { width: 0%; }
  100% { width: 100%; }
}
@keyframes show_image_from_top {
  0%   { height: 0%; }
  100% { height: 100%; }
}
</style>
