<template>
  <div class="news-panel">
    <div class="news-title">
      <slot name="title" />
    </div>
    <div class="news-content">
      <slot name="content" />
    </div>
    <div class="news-date">
      <slot name="date" />
    </div>
  </div>
</template>

<script>
</script>

<style>
  .news-panel {
    padding: 80px 80px 95px 80px;
    margin: 0 0 0 150px;
    font-weight: 500;
    border-radius: 4px;
    background: rgba(30, 30, 30, 0.2);
    padding: 80px 80px 95px 80px;
    margin: 0 0 0 150px;
    font-weight: 500;
    border-radius: 4px;
    background: rgba(30, 30, 30, 0.2);
  }
  .news-title{
    text-align: center;
    font-size: 30px;
  }
  .news-content{
    font-size: 20px;
    margin-top: 45px;
  }
  .news-date{
    font-size: 18px;
    margin-top: 30px;
    text-align: right;
  }
</style>
