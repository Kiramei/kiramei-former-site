<template>
  <div>

    <a class="title-unit" @click="select(0)">
      News
    </a>
    <a class="title-unit" @click="select(1)">
      Music
    </a>
    <a class="title-unit" @click="select(2)">
      Video
    </a>
    <a class="title-unit" @click="select(3)">
      Gallery
    </a>
  </div>

</template>

<script>
  export default {
    name: 'TestView',
    data() {
      return {
        titles: [{
            text: "News",
            scrollTop: -80
          },
          {
            text: "Music",
            scrollTop: 650
          },
          {
            text: "Video",
            scrollTop: 1470
          },
          {
            text: "Gallery",
            scrollTop: 2067
          }
        ],
        height: '',
        width: ''
      }
    },
    methods: {
      select(event) {
        document.querySelector('.scroll-panel').scroll(0, this.titles[event].scrollTop + eval(this.height));
      },
      preset() {
        let m = document.querySelector("#t");
        var height = this.height;
        var width = this.width;
        if (height * 16 / 9 >= width) {
          m.style = "height:" + height +
            "px;margin-left:" + (-(height * 16 / 9) / 2 + width /
              2) + "px;";
        } else {
          m.style = "width:" + width + "px;";
        }
      }
    },
    mounted() {
      var that = this;
      this.width = `${document.documentElement.clientWidth}`;
      this.height = `${document.documentElement.clientHeight}`;
      var ms = () => {
        this.height = `${document.documentElement.clientHeight}`;
        that.wid = this.width = `${document.documentElement.clientWidth}`;
        that.isShow = that.wid > 720;
        let m = document.querySelector("#t");
        var height = this.height;
        var width = this.width;
        if (height * 16 / 9 >= width) {
          m.style = "height:" + height +
            "px;margin-left:" + (-(height * 16 / 9) / 2 + width /
              2) + "px;";
        } else {
          m.style = "width:" + width + "px;";
        }
      };
      this.preset();
      window.addEventListener('resize', ms);
      window.addEventListener('load', ms);
    }
  }
</script>

<style>
  .title-unit {
    float: left;
    margin-left: 8%;
    text-align: center;
    font-weight: 300;
    font-size: 19px;
    line-height: 50px;
    color: white;
    transition: 0.1s ease;
    cursor: pointer;
  }

  .title-unit:hover {
    color: aliceblue;
  }
</style>
