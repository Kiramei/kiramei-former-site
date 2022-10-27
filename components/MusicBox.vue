<template>
  <div class="music-box">
    <div class="music-title">
      <slot name="title" />
    </div>
    <a :href="$attrs.url" download>
      <div class="download-button">Download</div>
    </a>
  </div>
</template>

<script>
</script>

<style>
  .music-box {
    font-size: 18px;
    margin-top: 20px;
    padding-bottom: 20px;
    width: 100%;
    border-bottom: dashed 1px;
  }

  .music-box:last-child {
    border-bottom: none;
  }

  .music-title {
    padding: 8px 24px 8px 24px;
    display: inline-block;
    margin-left: 40px;
  }

  .download-button {
    border-radius: 20px;
    color: white;
    padding: 8px 24px 8px 24px;
    background: #efefef22;
    display: inline-block;
    float: right;
    transition: ease .3s;
    margin-right: 5%
  }
  
  .down:active {
  	background: #6E696D;
  }
</style>
