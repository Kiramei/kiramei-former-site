<template>
  <div class="scroll-panel">
    <div class="scrollbar"></div>
    <div class="scroll-panel-container">
      <div class="logo-before">
        <img src="/top_1.png" alt="">
      </div>
      <div class="main-content">
        <div class="tip-before">
          Scroll To See More<br />|
        </div>
        <div class="tip-unit">
          <div class="tip-title">
            News
          </div>
        </div>
        <div class="content-news">
          <NewsBox v-for="item in news" :key="item.id">
            <template #title>
              {{ item.title }}
            </template>
            <template #content>
              <div v-html="item.content"></div>
            </template>
            <template #date>
              {{ item.date }}
            </template>
          </NewsBox>
        </div>
        <div class="tip-unit">
          <div class="tip-title">
            Musics
          </div>
        </div>
        <div class="content-music">
          <div class="music-download-panel">
            <div class="music-list">
              <MusicBox v-for="item in musics" :url="item.src" :key="item.id">
                <template #title>
                  {{ item.title }}
                </template>
              </MusicBox>
            </div>
          </div>
          <div class="music-controller">
            <client-only>
              <APlayer style="background:#00000055;color: #fff;" listMaxHeight='120px' theme="pic" repeat="list"
                :music='musics[0]' :list='musics' />

            </client-only>

          </div>
        </div>
        <div class="tip-unit">
          <div class="tip-title">
            Video
          </div>
        </div>
        <div class="content-video">
          <div class="video-list">
            <VideoBox @click.native="select" v-for="item in movies" :value="item.value" :key="item.id">
              <template #title>
                {{ item.name }}
              </template>

            </VideoBox>
          </div>
          <div class="video-display">
            <iframe id="video-container" width="120%" height="380px" scrolling="no" border="0" frameborder="no"
              framespacing="0" allowfullscreen="allowfullscreen" :src="currentUrl"></iframe>
          </div>
        </div>
        <div class="tip-unit">
          <div class="tip-title">
            Gallery
          </div>
        </div>
        <div class="content-gallery">
          <div class="image-container">
            <vue-masonry-wall :items="imgs" :options="{width: 300,padding: {}}">
              <template v-slot:default="{item}">
                <div class="Item">
                  <img :src="item.url" alt="" @click="toggle(item.url)">
                </div>
              </template>
            </vue-masonry-wall>
          </div>
        </div>
      </div>
      <div class="logo-after">
        <img src="/top_1.png" alt="">
      </div>
    </div>
  </div>
</template>
<script>
  import axios from 'axios';
  import VueMasonryWall from "vue-masonry-wall";

  export default {
    data() {
      return {
        news: [],
        musics: [],
        movies: [],
        imgs: [],
        currentUrl: "",
        currentImg: "",
        open: false
      }
    },
    created() {
      axios('/news_list.json').then(response => this.news = response.data);
      axios('/music_list.json').then(response => this.musics = response.data);
      axios('/movie_list.json').then(response => this.movies = response.data);
      axios('/img_list.json').then(response => this.imgs = response.data);
    },
    methods: {
      select(event) {
        let index = eval(event.target.getAttribute('index'));
        this.currentUrl = this.movies[index].url;
      },
      toggle(name){
        this.open=true;
        this.$emit('openValueChange', this.open);
        this.$emit('urlChanged',name);
      }
    },
    beforeMount() {
      this.$options.components.APlayer = () => import('vue-aplayer');
    },
    components: {
      VueMasonryWall
    }
  }
</script>

<style scoped>
  .scroll-panel {
    top: 0;
    left: 0;
    display: flex;
    width: 100%;
    height: 100%;
    z-index: 8;
    position: fixed;
    overflow: scroll;
    overflow-x: hidden;
  }

  .scroll-panel-container {
    width: 100%;
  }

  .logo-before {
    position: relative;
    z-index: 10;
    left: 45vw;
    top: 30vh;
  }

  .logo-before img {
    height: 183px;
  }

  .logo-after {
    position: relative;
    z-index: 10;
    left: 45vw;
    top: calc(120% + 3000px);
    padding-bottom: 20%;
  }

  .logo-after img {
    height: 183px;
  }

  .main-content {
    backdrop-filter: blur(2px);
    background: rgba(30, 30, 30, 0.2);
    width: 100%;
    height: 3000px;
    position: absolute;
    top: calc(100% - 100px);
    left: 0;
    font-family: YuGothic, serif;
    color: #f5f8f8;
  }

  .tip-before {
    font-size: 20px;
    line-height: 40px;
    padding-top: 8px;
    text-align: center;
    font-weight: 500;
  }

  .tip-unit {
    margin-top: 15px;
    border-top: dashed 1px #ffffff;
  }

  .tip-title {
    margin-top: 35px;
    text-align: center;
    font-family: YuGothic, serif;
    font-size: 40px;
  }

  .content-news {
    width: 80%;
    height: 422px;
    margin: 80px 0% 80px 5%;
    margin-bottom: 129px;
    border: #ffffff;
    overflow: auto;
  }

  .content-music {
    padding: 40px 5% 70px 5%;
  }

  .music-download-panel {
    padding: 10px 10px 10px 10px;
    margin-left: 10%;
    width: 80%;
    height: 300px;
    background: rgba(30, 30, 30, 0.2);
    border-radius: 4px;
  }

  .music-list {
    height: 100%;
    overflow: auto;
  }

  .music-controller {
    opacity: 0.7;
    padding: 10px 10px 10px 10px;
    margin-left: 10%;
    margin-top: 60px;
    width: 80%;
    height: 200px;
    background: rgba(30, 30, 30, 0.2);
    border-radius: 4px;
  }

  .aplayer-list-light {
    color: #000;
  }

  .content-video {
    width: 80%;
    height: 380px;
    background: rgba(30, 30, 30, 0.2);
    margin: 50px 10% 50px 10%;
    padding: 10px 3% 10px 3%;
    border-radius: 4px;
  }

  .video-list {
    width: 40%;
    height: 380px;
    overflow: auto;
    float: left;
    background: rgba(30, 30, 30, 0.2);
  }

  .video-display {
    float: left;
    margin-left: 11%;
    width: 40%;
    height: 380px;
  }

  #video-container {
    background: rgba(30, 30, 30, 0.2);
  }


  .content-gallery {
    width: 80%;
    height: 450px;
    background: rgba(30, 30, 30, 0.2);
    margin: 50px 10% 50px 10%;
    padding: 10px 3% 10px 3%;
    border-radius: 4px;
  }

  .image-container {
    height: 430px;
    overflow: scroll;
    padding-top: 10px;
  }

  .Item img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    line-height: 0;
    display: block;
    opacity: 0.6;
    transition: 0.1s ease;
    cursor: pointer;
  }

  .Item img:hover {
    opacity: 1;
  }


</style>
