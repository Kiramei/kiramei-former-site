<template>
  <div>

    <a class="title-unit" v-if="isShow" v-for="item in titles" @click="select(item.index)">
      {{ item.text }}
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
            scrollTop: -77,
            index: 0
          },
          {
            text: "Music",
            scrollTop: 650.5,
            index: 1
          },
          {
            text: "Video",
            scrollTop: 1471,
            index: 2
          },
          {
            text: "Gallery",
            scrollTop: 2067,
            index: 3
          }
        ],
        height: '',
        width: '',
        isShow: true,
        t: 0
      }
    },
    methods: {
      select(event) {
        var x = document.querySelector('.scroll-panel').scrollTop;
        var y = this.titles[event].scrollTop + eval(this.height);
        var z = y - x;
        if (t != 0) clearInterval(this.t);
        this.t = setInterval(() => {
          document.querySelector('.scroll-panel').scroll(0, y - (z /= 1.2));
          if (z > -1e-3 && z < 1e-3) {
            clearInterval(this.t);
          }
        }, 8);
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
    width: 16%;
    text-align: center;
    font-weight: 300;
    font-size: 19px;
    line-height: 50px;
    color: white;
    transition: 0.2s ease;
    cursor: pointer;
  }

  .title-unit:hover {
    color: #74aeec;
  }
</style>
