<template>
  <div>
    <Tabs :currentIndex="currentIndex" @onChangeActive="getActiveIndex">
      <Tab
        :index="index + 1 + ''"
        :label="category[index].name"
        v-for="(item, index) in categoryData"
        :key="index"
      >
        <div class="panel hotsongs on">
          <ul class="list">
            <li
              class="song url"
              v-for="(dj, djIndex) in item.djRadios"
              :key="djIndex"
            >
              <div class="poster">
                <img :src="dj.picUrl" alt />
              </div>
              <div class="info">
                <div class="name">{{ dj.desc }}</div>
                <div class="author">{{ dj.name }}</div>
              </div>
            </li>
          </ul>
          <!-- <router-link
            :to="{ name: 'DJMore', params: { id: title[index].id } }"
            tag="div"
            class="more-songs"
            >加载更多</router-link
          > -->
        </div>
      </Tab>
    </Tabs>
  </div>
</template>

<script>
import api from "../../api";
import axios from "../../utils/request";
export default {
  name: "MusicTab",
  data() {
    return {
      currentIndex: "1",
      category: [
        {
          id: 3,
          name: "情感调频",
        },
        {
          id: 3001,
          name: "声音恋人",
        },
        {
          id: 2001,
          name: "创作翻唱",
        },
      ],
      categoryData: [],
    };
  },
  methods: {
    getActiveIndex(index) {
      this.currentIndex = index;
    },
  },
  mounted() {
    // for (let i = 0; i < this.category.length; i++) {
    //   api.getCategory(this.category[i].id).then((res) => {
    //     console.log(res.data);
    //     var temp = {};
    //     temp = res.data;
    //     this.categoryData.push(temp);
    //     console.log(this.categoryData);
    //   });
    // }
    // var that = this;
    function Dj3() {
      return api.getCategory(3);
    }
    function Dj3001() {
      return api.getCategory(3001);
    }
    function Dj2001() {
      return api.getCategory(2001);
    }
    axios.all([Dj3(), Dj3001(), Dj2001()]).then(
      axios.spread( (Dj3, Dj3001, Dj2001) =>{
        // 两个请求现在都执行完成
        // console.log(Dj3.data, Dj3001.data,Dj2001.data);
        this.categoryData.push(Dj3.data, Dj3001.data, Dj2001.data);
        // console.log(that.categoryData);
      })
    );
  },
};
</script>

<style scoped>
.tabs {
  padding: 10px;
  background: #fff;
}
.musictop {
  background: #fff;
  padding: 10px;
}

.panel {
  border-top: 1px solid #eee;
  position: relative;
  top: -1px;
  display: block;
  background: #fff;
}

.list {
  padding-top: 0;
  height: 450px;
}

.panel .list li {
  height: 60px;
  border-bottom: 1px solid #eee;
  padding-left: 0;
  display: flex;
  padding-top: 10px;
}

.panel .list li .poster {
  position: relative;
  width: 45px;
  margin-right: 8px;
}

.panel .list li .poster img {
  border: 1px solid #eee;
}
.info {
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.info .name {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 16px;
  color: #333;
}

.info .author {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 12px;
  color: #999;
  margin-top: 2px;
}

.more-songs {
  color: #999;
  margin-top: 9px;
  font-size: 12px;
  text-align: center;
  height: 32px;
  line-height: 32px;
}
</style>