<template>
  <div class="home">
    <SongList />
    <Song />
    <MusicTab />
    <BackTop />
  </div>
</template>

<script>
import SongList from "./SongList";
import Song from "./Song";
import MusicTab from "./MusicTab";

export default {
  name: "Home",
  components: {
    SongList,
    Song,
    MusicTab,
  },
};
</script>

<style>
.home {
  padding: 5px 0;
}
.backtop-box {
  position: fixed;
  right: 10px;
  bottom: 10%;
}
</style>