<template>
  <div class="movie-unit" :index='$attrs.value'>
    <slot name="title"/>
  </div>
</template>

<script>
</script>

<style>
  .movie-unit {
    font-size: 35px;
    line-height: 50px;
    padding: 10px;
    font-weight: 300;
    text-align: center;
    color: #ffffff;
    border-bottom: dashed 1px;
    transition: 0.3s ease;
  	cursor: pointer;
  }

  .movie-unit:last-child {
  	border-bottom: none;
  }

  .movie-unit:hover {
  	background: #f5f5f566;
  	color: #ffffffaa;
  }

  .movie-unit:active {
  	background: #6E696Daa;
  }
</style>
