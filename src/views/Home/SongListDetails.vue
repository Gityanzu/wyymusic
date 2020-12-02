<template>
  <div class="details">
    <div class="Song-ul">
      <router-link
        tag="div"
        :to="{
          name: 'MusicPlay',
          params: {
            id: item.id,
            name: item.name,
            image: encodeURIComponent(item.picUrl),
          },
        }"
        class="Song-li"
        v-for="(item, index) in detailsList"
        :key="index"
      >
        <img :src="item.picUrl" alt="" />
        <p>{{ item.name }}</p>
      </router-link>
    </div>
  </div>
</template>

<script>
import api from "../../api";
export default {
  name: "SongListDetails",
  data() {
    return {
      detailsList: [],
    };
  },
  props: {
    id: {
      type: [String, Number],
      required: true,
    },
  },
  mounted() {
    // console.log(this.id);
    api.getRecommendMusic(this.id).then((res) => {
      // console.log(res.data);
      for (let i = 0; i < res.data.playlist.tracks.length; i++) {
        this.detailsList.push(res.data.playlist.tracks[i].al);
      }
      // console.log(this.detailsList);
    });
  },
};
</script>

<style scoped lang="less">
.details {
  width: 100%;
  background-color: #fff;
  .Song-ul {
    padding: 10px 17px;
    display: flex;
    flex-wrap: wrap;
    .Song-li {
      width: 100px;
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