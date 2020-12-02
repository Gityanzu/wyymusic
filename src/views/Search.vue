<template>
  <div class="music-search">
    <van-search
      
      v-model="value"
      @change="search"
      placeholder="请输入想搜索的歌曲"
    />
    <div v-if="value">
      <router-link
        class="music-list"
        tag="div"
        :to="{
          name: 'MusicPlay',
          params: {
            id: item.id,
            name: item.name,
            image: encodeURIComponent(item.artists[0].img1v1Url),
          },
        }"
        v-for="(item, index) in searchData"
        :key="index"
      >
        <p class="name">{{ cutContent(item.name) }}</p>
        <p class="singer">{{ item.artists[0].name }}-{{ item.name }}</p>
      </router-link>
    </div>
    <div class="hotSearh" v-else>
      <div class="hotmusic" v-for="(item1, index1) in hotList" :key="index1">
        <span class="num">{{ index1 + 1 }}</span
        ><span ref="hot" @click="dian">{{ item1.first }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import api from "../api";
export default {
  name: "Search",
  data() {
    return {
      value: "",
      searchData: [],
      hotList: [],
      valueData:[]
    };
  },
  methods: {
    search() {
      api.getSearch(this.value).then((res) => {
        // console.log(res.data);
        for (let i = 0; i < res.data.result.songs.length; i++) {
          this.searchData.push(res.data.result.songs[i]);
        }
      });
    },
    cutContent(str) {
      if (str.length > 22) {
        return str.substring(0, 22) + "...";
      }
      return str;
    },
    dian(){
      console.log(this.$refs.hot);
      // for (let k = 0; k < this.$refs.hot.length; k++) {
      //   console.log(this.$refs.hot[k].innerText);
      // }
    }
  },
  mounted() {
    api.getHot().then((res) => {
      // console.log(res.data);
      for (let j = 0; j < res.data.result.hots.length; j++) {
        this.hotList.push(res.data.result.hots[j]);
      }
    });
  },
};
</script>

<style scoped lang="less">
.music-search {
  position: relative;
  .hotSearh {
    padding: 10px;
    position: absolute;
    top: 50px;
    left: 0;
    width: 100%;
    z-index: 1;
    .hotmusic {
      display: inline-block;
      width: 50%;
      height: 20px;
      color: black;
      padding: 10px 0;
      .num {
        margin-right: 5px;
      }
    }
  }
}

.music-list {
  width: 100%;
  height: 40px;
  padding: 10px;
  border-bottom: 0.3px solid rgb(228, 220, 220);
  z-index: 999;
  background-color: #fff;
  .name {
    color: black;
    margin-bottom: 5px;
  }
  .singer {
    font-size: 12px;
  }
}
</style>