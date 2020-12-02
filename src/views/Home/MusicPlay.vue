<template>
  <div class="music">
      <!-- <div class="music-header">
          <div class="iconfont icon-shouye left"></div>
          <div class="title">{{name}}</div>
          <div class="iconfont icon-sousuo right"></div>
      </div> -->
      <div class="music-left">
          <router-link to="/">
              <div class="iconfont icon-shouye shouye" style="color:black"></div>
          </router-link>
          <div class="iconfont icon-shoucang2 soucang"></div>
      </div>
      <div class="music-center">
          <div class="title">{{name}}</div>
          <div class="pic"><img :src="decodeURIComponent(image)" alt=""></div>
          <div class="lyric">
              <Lyric :id="id" :currentTime="currentTime" />
              <!-- timeupdate事件，获取当前正在播放的时间 -->
          </div>
          <div class="url"><audio ref="player" autoplay controls :src="music.url"></audio></div>
      </div>
      <div class="music-right">
          <router-link to="/search">
              <div class="iconfont icon-sousuo sousuo"></div>
          </router-link>
          <div class="iconfont icon-xiazai xiazai"></div>
      </div>
  </div>
</template>

<script>
import api from '../../api'
import Lyric from './Lyric.vue';
export default {
  components: { Lyric },
    name:'MusicPlay',
    props:{
        id:{
            type:[String,Number],
            required: true,
        },
        name:{
            type:String,
            required: true,
        },
        image:{
            type:String,
            required: true,
        }
    },
    data(){
        return{
            music:{},
            currentTime:0
        }
    },
    methods:{
        addEventTimeUpdate(){
            this.$refs.player.addEventListener('timeupdate',this.currentTimeHandle)
        },
        removeEventTimeUpdate(){
            this.$refs.player.removeEventListener('timeupdate',this.currentTimeHandle)
        },
        currentTimeHandle(){
            // console.log(this.$refs.player.currentTime);
            this.currentTime = this.$refs.player.currentTime
        }
    },
    mounted(){
        //歌曲地址
        api.getSongUrl(this.id).then(res=>{
            // console.log(res.data);
            this.music = res.data.data[0];
        });
        this.addEventTimeUpdate();
    }
}
</script>

<style scoped lang="less">
.music{
    width: 100%;
    height: 500px;
    display: flex;
    text-align: center;
    .music-left{
        width: 50px;
        height: 100%;
        .shouye,.soucang{
            height: 250px;
            font-size: 26px;
            padding-top: 10px;
        }
    }
    .music-center{
        flex: 1;
        .title{
           padding: 10px 0; 
        }
        .pic{
            display: inline-block;
            width: 150px;
            height: 150px;
            padding: 25px;
        }
        .lyric{
            width: 250px;
            height: 150px;
            margin-top: 75px;
            padding: 25px;
            display: inline-block;
        }
        .url{
            height: 50px;
        }
    }
    .music-right{
        width: 50px;
        height: 100%;
        .sousuo,.xiazai{
            height: 250px;
            font-size: 26px;
            padding-top: 10px;
        }
    }
}
</style>