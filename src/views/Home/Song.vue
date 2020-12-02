<template>
  <div class="Song">
    <h1>推荐歌曲</h1>
    <div class="Song-ul">
      <router-link
        tag="div"
        :to="{
          name: 'MusicPlay',
          params: { id: item.id, name: item.name, image: encodeURIComponent(item.picUrl) },
        }"
        class="Song-li"
        v-for="item in Song"
        :key="item.id"
      >
        <img :src="item.picUrl" alt="" />
        <p>{{ item.name }}</p>
        <p>{{ item.copywriter }}</p>
      </router-link>
    </div>
  </div>
</template>

<script>
import api from "../../api";
export default {
  name: "Song",
  data() {
    return {
      Song: [],
    };
  },
  mounted() {
    //推荐歌曲
    api.getSongs().then((res) => {
      // console.log(res.data);
      // console.log(this.Song);
      for (let i = 0; i < res.data.result.length; i++) {
        var temp = {
          id: res.data.result[i].id,
          name: res.data.result[i].name,
          picUrl: res.data.result[i].picUrl,
        };
        this.Song.push(temp);
      }
    });
  },
};
</script>

<style scoped lang="less">
.Song {
  width: 100%;
  background-color: #fff;
  h1 {
    padding: 20px;
    font-size: 20px;
  }
  .Song-ul {
    padding: 10px 17px;
    display: flex;
    flex-wrap: wrap;
    .Song-li {
      width: 103px;
      padding: 5px;
      img {
        width: 100px;
        height: 100px;
      }
      p {
        font-size: 12px;
      }
    }
  }
}
</style>