<template>
  <div class="SongList">
    <h1>推荐歌单</h1>
    <div class="SongList-ul">
      <router-link  tag="div" :to="'/details/'+item.id" class="SongList-li" v-for="item in SongList" :key="item.id">
        <img :src="item.picUrl" alt="" />
        <p>{{ cutContent(item.name) }}</p>
        <p>{{ cutContent(item.copywriter) }}</p>
      </router-link>
    </div>
  </div>
</template>

<script>
import api from "../../api";
export default {
  name: "SongList",
  data() {
    return {
      SongList: [],
    };
  },
  methods:{
        cutContent(str){
            if(str.length > 7){
                return str.substring(0,7) + "..."
            }
            return str;
        }
    },
  mounted() {
    //推荐歌单
    api.getRecommend().then((res) => {
      // console.log(res.data);
      for (let i = 0; i < res.data.recommend.length; i++) {
        var temp = {
          id: res.data.recommend[i].id,
          name: res.data.recommend[i].name,
          picUrl: res.data.recommend[i].picUrl,
          copywriter: res.data.recommend[i].copywriter,
        };
        this.SongList.push(temp);
      }
    });
  },
};
</script>

<style scoped lang="less">
.SongList {
  width: 100%;
  background-color: #fff;
  h1 {
    padding: 20px;
    font-size: 20px;
  }
  .SongList-ul {
    padding: 10px 17px;
    display: flex;
    flex-wrap: wrap;
    .SongList-li {
      width: 103px;
      padding: 5px;  
      img{
        width: 100px;
        height: 100px;
      }
      p{
        font-size: 12px;
      }
    }
  }
}
</style>