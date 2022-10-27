<template>
  <div class="more-panel">
    <svg @click="change" t="1656759118430" class="icon" viewBox="0 0 1024 1024" version="1.1"
      xmlns="http://www.w3.org/2000/svg" p-id="2256" width="30" height="50">
      <path
        d="M437.333333 224C437.333333 183.466667 471.466667 149.333333 512 149.333333s74.666667 34.133333 74.666667 74.666667S552.533333 298.666667 512 298.666667s-74.666667-34.133333-74.666667-74.666667zM439.466667 512c0-40.533333 34.133333-74.666667 74.666666-74.666667s74.666667 34.133333 74.666667 74.666667-34.133333 74.666667-74.666667 74.666667-74.666667-34.133333-74.666666-74.666667zM437.333333 800c0-40.533333 34.133333-74.666667 74.666667-74.666667s74.666667 34.133333 74.666667 74.666667S552.533333 874.666667 512 874.666667s-74.666667-34.133333-74.666667-74.666667z"
        fill="#fff" p-id="2257"></path>
    </svg>
    <ul class="more-menu" v-show="flag">
      <li class="link">
        <a href="https://music.163.com/#/artist?id=34227281">
          <div class="text">Cloud Music ページへ</div>
        </a>
      </li>
      <li class="link" id="bili">
        <a href="https://space.bilibili.com/43914903">
          <div class="text">Bilibili ページへ</div>
        </a>
      </li>
      <li class="link" id="git">
        <a href="https://github.com/Kiramei">
          <div class="text">Github ページへ</div>
        </a>
      </li>
      <li class="link" id="close" @click="close">
        <a class="text">× Close</a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        flag: false
      }
    },
    methods: {
      change() {
        this.flag = !this.flag;
      },
      close() {
        this.flag = false;
      }
    }
  }
</script>

<style>
  .more-panel {
    float: right;
    margin-right: 30px;
  }

  .more-panel {
    cursor: pointer;
  }

  .more-menu {
    position: absolute;
    top: 64px;
    right: 0px;
    background: rgba(30, 30, 30, 0.2);
    width: 200px;
    height: 160px;
  }

  .link {
    position: absolute;
    width: 200px;
    height: 40px;
    margin-top: 0px;
    border-bottom: dashed 1px #fdfdfd;
  }

  #bili {
    margin-top: 40px;
  }

  #git {
    margin-top: 80px;
  }

  #close {
    margin-top: 120px;
    border-bottom: none;
    color: #fdb5b3;
    cursor: pointer;
  }

  .text {
    position: relative;
    top: 8px;
    left: 20px;
  }
</style>
