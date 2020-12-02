<template>
  <div class="lrcContainer">
    <div class="lrc" ref="lrcTop">
      <p
        class="lrc-p"
        :class="{
          active:
            currentTime > allKeys[index] && currentTime < allKeys[index + 1],
        }"
        v-for="(item, index) in lyric"
        :key="index"
      >
        {{ item }}{{getScoll(index)}}
        <!-- <span>{{item}}</span> -->
      </p>
    </div>
  </div>
</template>

<script>
import api from "../../api";
export default {
  name: "Lyric",
  props: {
    id: {
      type: [Number, String],
      required: true,
    },
    currentTime: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      lyric: [], //歌词
      timeObj: {}, //{歌曲时间:歌词}
      allKeys: [], //歌曲时间
    };
  },
  mounted() {
    //歌曲歌词
    api.getLyric(this.id).then((res) => {
      // console.log(res.data);
      var lyrics = res.data.lrc.lyric.split("\n");
      var reg = /\[\d*:\d*(:|\.)\d*\]/g;
      var temp = {};
      // console.log(res.data.lrc.lyric);
      for (let i = 0; i < lyrics.length; i++) {
        //歌词播放时间
        var timeArr = lyrics[i].match(reg);
        if (!timeArr) continue;
        var time = timeArr[0];
        //歌词
        var content = lyrics[i].replace(timeArr, "");
        //分
        var mimute = ~~time.match(/\[\d*/).toString().slice(1);
        //秒
        var second = ~~time.match(/:\d*/).toString().slice(1);
        var s = mimute * 60 + second;
        temp[s] = content;
        this.lyric.push(content);
      }
      this.timeObj = temp;
      // console.log(this.timeObj);
    //   console.log(this.lyric);
      this.getallKeys(temp);
    });
  },
  methods: {
    getallKeys(obj) {
      for (const key in obj) {
        this.allKeys.push(key);
      }
    //   console.log(this.allKeys);
    },
    getScoll(index){
        if(this.currentTime > this.allKeys[index] && this.currentTime < this.allKeys[index + 1]){
            this.$refs.lrcTop.style.top = -(30*index ) + 'px' 
        }
    }
  },
};
</script>

<style>
.active {
  color: red;
}

.lrcContainer {
  width: 100%;
  height: 150px;
  overflow: scroll;
  position: relative;
}

.lrc {
  width: 100%;
  position: absolute;
  top: 0;
}

.lrc-p {
  height: 30px;
  line-height: 30px;
}

.up30 {
  margin-top: -30px;
}
</style>