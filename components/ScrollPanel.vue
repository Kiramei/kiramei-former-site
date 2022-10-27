<template>
  <div class="scroll-panel">
    <div class="scrollbar"></div>
    <div class="scroll-panel-container">
      <div class="logo-before">
        <img src="../static/top_1.png" alt="">
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
                  <img :src="'../static/'+item.url" alt="" @click="toggle('../static/'+item.url)">
                </div>
              </template>
            </vue-masonry-wall>
          </div>
        </div>
      </div>
      <div class="logo-after">
        <img src="../static/top_1.png" alt="">
      </div>
    </div>
  </div>
</template>
<script>
  import axios from 'axios';
  import VueMasonryWall from "vue-masonry-wall";

  export default {

    methods: {
      select(event) {
        let index = eval(event.target.getAttribute('index'));
        this.currentUrl = this.movies[index].url;
      },
      toggle(name) {
        this.open = true;
        this.$emit('openValueChange', this.open);
        this.$emit('urlChanged', name);
      }
    },
    beforeMount() {
      this.$options.components.APlayer = () => import('vue-aplayer');
    },
    mounted() {
      console.log(this.data)
    },
    components: {
      VueMasonryWall
    },
    data() {
      return {
        news: [{
            "title": "写真配信",
            "content": "いろいろな写真を配信しました,ぜひお見て下さい！",
            "date": "—————— 2022/10/17"
          },
          {
            "title": "音楽配信",
            "content": "いろいろな歌を配信しました,ぜひお聞て下さい！",
            "date": "—————— 2022/9/6"
          },
          {
            "title": "アプリケーションリメイク",
            "content": "｢Manga Surfer」Androidのリメイクバージョンです、<br/><a href=\"https://link.jscdn.cn/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBdGpqY2tQeDRTVW9tZ2ZlLTlEbmtKUEF1Q1dsP2U9RE5hNjFk.apk\">ここでクリックするとダウンロードしてください</a>",
            "date": "—————— 2021/6/29"
          },
          {
            "title": "新しいアプリケーション",
            "content": "｢Manga Surfer」プロジェクトです、<br/><a href=\"https://github.com/Kiramei/MangaSurfer/releases/\">Androidはここでクリックするとダウンロードしてください</a><br/><a href=\"https://www.mediafire.com/file/1flhu6xaraexdgq/QuickDownloader_installer.exe/file\">Windowsはここでクリックするとダウンロードしてください</a>",
            "date": "—————— 2021/1/26"
          },
          {
            "title": "新しいプロジェクト",
            "content": "｢Rush Spider」プロジェクトです、<a href=\"https://github.com/Kiramei/RushSpider\">ここでクリックすると見てください</a>",
            "date": "—————— 2021/1/26"
          },
          {
            "title": "新しいプロジェクト",
            "content": "｢Video2Text」プロジェクトです、<a href=\"https://github.com/Kiramei/Video2Text\">ここでクリックすると見てください</a>",
            "date": "—————— 2020/2/13"
          },
          {
            "title": "音楽アップロード",
            "content": "｢光は遠い」音楽ファイルです、<a href=\"https://kiramei.github.io/pages/source/toi.zip\">ここをクリックしてダウンロードしください</a>",
            "date": "—————— 2020/2/10"
          },
          {
            "title": "音楽プラットフォームの紹介",
            "content": "僕は今は「Netease Cloud Music｣に音楽を作りているの、どうかよろしくたのむ！",
            "date": "—————— 2020/1/26"
          },
          {
            "title": "音楽アップロード",
            "content": "｢星空を見上げ」音楽ファイルです、<a href=\"https://kiramei.github.io/pages/source/hoshi.zip\">ここをクリックしてダウンロードしください</a>",
            "date": "—————— 2020/1/24"
          }, {
            "title": "音楽アップロード",
            "content": "｢闇の世界で光を探す」音楽ファイルです、<a href=\"https://kiramei.github.io/pages/source/yami.zip\">ここをクリックしてダウンロードしください</a>",
            "date": "—————— 2020/1/24"
          }
        ],
        musics: [{
            "title": "最後は、海で来た",
            "src": "https://link.jscdn.cn/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBdGpqY2tQeDRTVW9tWGdjbk51aXZfRGhuZWg5P2U9cVUyRWlG.mp3",
            "artist": "Kiramei",
            "pic": "pic.png"
          }, {
            "title": "突然、雨が降りました",
            "src": "https://link.jscdn.cn/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBdGpqY2tQeDRTVW9uSElmdG5ONmpMRWxEWm5WP2U9RzZuUjBs.mp3",
            "artist": "Kiramei",
            "pic": "pic.png"
          }, {
            "title": "秋のイメージ",
            "src": "https://link.jscdn.cn/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBdGpqY2tQeDRTVW9uSHU0UEFTMkNTSFQ1VmstP2U9QTVYbHNY.mp3",
            "artist": "Kiramei",
            "pic": "pic.png"
          }, {
            "title": "旅の初め",
            "src": "https://link.jscdn.cn/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBdGpqY2tQeDRTVW9uSF9NYzRNV3NxU0xsbUNWP2U9bldMMjFC.mp3",
            "artist": "Kiramei",
            "pic": "pic.png"
          }, {
            "title": "流ストリーム",
            "src": "https://link.jscdn.cn/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBdGpqY2tQeDRTVW9uSEFJMXk0V3lkVHZUY3AwP2U9Y3pEWE1s.mp3",
            "artist": "Kiramei",
            "pic": "pic.png"
          }, {
            "title": "空気の匂い",
            "src": "https://link.jscdn.cn/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBdGpqY2tQeDRTVW9uSDNVTnAzMDJaR1JoNTNBP2U9VFgwdjFx.mp3",
            "artist": "Kiramei",
            "pic": "pic.png"
          }, {
            "title": "空が明くる日々",
            "src": "https://link.jscdn.cn/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBdGpqY2tQeDRTVW9uSG9xU0FWOEFQRjhPb3B0P2U9ZzgwREVi.mp3",
            "artist": "Kiramei",
            "pic": "pic.png"
          }, {
            "title": "静がな空",
            "src": "https://link.jscdn.cn/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBdGpqY2tQeDRTVW9uSDRmMjAwd1ZMUnFLbFREP2U9VnFMRWFD.mp3",
            "artist": "Kiramei",
            "pic": "pic.png"
          }, {
            "title": "今日も始まりましょう",
            "src": "https://link.jscdn.cn/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBdGpqY2tQeDRTVW9uSFl6SjZRU0pXR0RnWmVRP2U9Zjg2Wklo.mp3",
            "artist": "Kiramei",
            "pic": "pic.png"
          }, {
            "title": "闇の中で光を探す",
            "src": "https://link.jscdn.cn/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBdGpqY2tQeDRTVW9uSHpINmZ0WUxfbi1QYmx1P2U9YnNSSDhi.mp3",
            "artist": "Kiramei",
            "pic": "pic.png"
          }, {
            "title": "だんだん晴れました",
            "src": "https://link.jscdn.cn/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBdGpqY2tQeDRTVW9uSE9odWJHYmNSZ3JaM1piP2U9RENzRnNk.mp3",
            "artist": "Kiramei",
            "pic": "pic.png"
          },
          {
            "title": "星空を見上げ",
            "src": "https://link.jscdn.cn/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBdGpqY2tQeDRTVW9uUUNpaTRsU1Z6ZFU0WE1JP2U9VUQ5aUxv.mp3",
            "artist": "Kiramei",
            "pic": "pic.png"
          }
        ],
        movies: [{
            "name": "空気の匂い",
            "url": "//player.bilibili.com/player.html?aid=500000331&bvid=BV1HK411A7Ap&cid=249115573&page=1&high_quality=1",
            "value": 0
          },
          {
            "name": "暑い日々",
            "url": "//player.bilibili.com/player.html?aid=85144012&bvid=BV1o7411k7Gy&cid=145570548&page=1&high_quality=1",
            "value": 1
          },
          {
            "name": "星空を見上げ",
            "url": "//player.bilibili.com/player.html?aid=85133801&bvid=BV1Q7411k7Zw&cid=249059267&page=1&high_quality=1",
            "value": 2
          }
        ],
        imgs: [{
            "url": "bg1.webp"
          },
          {
            "url": "bg2.webp"
          },
          {
            "url": "bg3.webp"
          },
          {
            "url": "bg4.webp"
          },
          {
            "url": "bg5.webp"
          },
          {
            "url": "bg6.webp"
          },
          {
            "url": "bg7.webp"
          },
          {
            "url": "bg8.webp"
          },
          {
            "url": "bg9.webp"
          },
          {
            "url": "bg10.webp"
          },
          {
            "url": "bg11.webp"
          },
          {
            "url": "bg12.webp"
          },
          {
            "url": "bg13.webp"
          },
          {
            "url": "bg14.webp"
          },
          {
            "url": "bg15.webp"
          },
          {
            "url": "bg16.webp"
          }, {
            "url": "bk.webp"
          }
        ],
        currentUrl: "",
        currentImg: "",
        open: false
      }
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
