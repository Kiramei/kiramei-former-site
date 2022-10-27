<template>
  <div  class="background">
  	<img id="t" src="/bk.webp" alt="" />
  </div>
</template>

<script>
</script>

<style>
  .background {
  	position: fixed;
  	top: 0;
  	left: 0;
  	margin: auto;
    animation: in 3s 0.8s;
    z-index: -10;
  }

  @keyframes in {
  	0% {
  		transform: scale(1.3)
  	}

  	100% {
  		transform: scale(1)
  	}
  }
</style>
