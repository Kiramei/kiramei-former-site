<template>
  <div>
    <div class="content-loader">
    	<img src="../static/logo.png" draggable="false" alt="" />
    </div>
    <div class="content-mask">
    </div>
    <div class="head">
      <div class="head-container">
        <div class="logo-left">
          <img src="../static/top_.png" alt="">
        </div>
        <div class="head-index">
          <TitleBox />
        </div>
        <MorePanel />
      </div>
    </div>
    <ScrollPanel @openValueChange="val=>isShow=val " @urlChanged="val=>currentImg=val" />
    <Background />
    <div class="image-showing" v-if="isShow">
      <div class="background-shadow" @click="isShow=false">
      </div>
      <div class="image-showing-container" @click="isShow=false">
        <img :src="currentImg" alt="" @click="isShow=false">
      </div>
    </div>
    <div class="beian"><a href="http://beian.miit.gov.cn/" target="_blank">沪ICP备20005789号</a></div>
  </div>
</template>

<script>
  function lastSet() {
  	setTimeout(function() {
  		fadeOut(document.querySelector(".content-loader"), 10);
  		fadeOut(document.querySelector(".content-mask"), 5);
  	}, 900);
  }

  function fadeOut(element, spd) {
  	var speed = spd;
  	var num = 100;
  	var st = setInterval(function() {
  		num--;
  		element.style.opacity = num / 100;
  		if (num <= 0) {
  			clearInterval(st);
  			element.style.display = "none";
  		}
  	}, speed);
  }

  export default {
    name: 'IndexPage',
    data() {
      return {
        isShow: false,
        currentImg: ''
      }
    },
    mounted() {
      lastSet();
    }
  }
</script>

<style>
  /* All Default Css */

  @font-face {
    font-family: YuGothic;
    src: url('../static/YuGothic.ttf');
  }

  html {
    user-select: none;
  }

  body {
    overflow: hidden;
    font-family: YuGothic, serif;
    text-rendering: optimizeSpeed;
    font-stretch: condensed;
    line-height: 1.5;
  }

  * {
    text-decoration: none;
    user-select: none;
  }

  a {
    color: #ffeaea;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  img {
    -webkit-user-drag: none;
    -moz-user-select: none;
  }

  *::-webkit-scrollbar {
    z-index: 999;
    width: 7px;
    height: 1px
  }

  *::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #e0dcdcaa;
    background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.2) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.2) 50%, rgba(255, 255, 255, 0.2) 75%, transparent 75%, transparent)
  }

  *::-webkit-scrollbar-track {
    background: #ededed55;
    border-radius: 10px
  }

  /* Specific Css On Top Layer */

  .head {
    position: fixed;
    top: 0;
    left: 0;
    width: calc(100% - 7px);
    height: 80px;
    background: rgba(30, 30, 30, 0.2);
    backdrop-filter: blur(4px);
    z-index: 9;
  }

  .logo-left {
    float: left;
    margin-left: 1%;
    cursor: pointer;
  }

  .head-container {
    width: 100%;
    padding: 15px 10px 15px 10px;
    float: left;
  }

  .head-index {
    margin-left: 25%;
  }

  .logo-left img {
    float: left;
    width: 50px;
    cursor: pointer;
  }

  .image-showing-container {
    cursor: pointer;
    position: absolute;
    z-index: 10;
    top: 0;
    left: 0;
    height: 80%;
    width: 100%;
    transform: translateX(50%) translateY(65%);
  }

  .image-showing-container img {
    cursor: pointer;
    transform: translateX(-50%) translateY(-50%);
    height: 100%;
  }

  .background-shadow {
    width: 100vw;
    height: 100vh;
    background-color: #000;
    position: absolute;
    z-index: 10;
    left: 0;
    top: 0;
    opacity: 0.5;
    cursor: pointer;
  }

  .beian {
  	display: block;
  	position: absolute;
  	bottom: 0;
  	left: 0;
  	width: calc(100% - 20px);
  	height: 30px;
  	text-align: right;
  	z-index: 100000;
  	line-height: 30px;
  }

.content-loader {
	width: 20%;
	position: fixed;
	_position: absolute;
  top: calc( 45% - 28px );
  left: calc( 50% - 113px );
	z-index: 999;
	-webkit-animation: blink 1.5s ease-in-out infinite alternate;
	-moz-animation: blink 1.5s ease-in-out infinite alternate;
	animation: blink 1.5s ease-in-out infinite alternate
}

.content-loader img {
	width: 225px;
}



.content-mask {
	background-size: cover;
	-moz-background-size: cover;
	-webkit-background-size: cover;
	-o-background-size: cover;
	width: 100%;
	height: 100%;
	background: white no-repeat fixed center center;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 998
}

@-webkit-keyframes blink {
	0% {
		opacity: 0
	}

	100% {
		opacity: 1
	}
}

@-moz-keyframes blink {
	0% {
		opacity: 0
	}

	100% {
		opacity: 1
	}
}

@keyframes blink {
	0% {
		opacity: 0
	}

	100% {
		opacity: 1
	}
}

</style>
