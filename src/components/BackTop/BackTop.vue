<template>
  <div class="backtop-box">
    <span class="backtop" @click="cancelTop">
      <img src="../../assets/icon-backtop.png" alt="" />
    </span>
  </div>
</template>

<script>
export default {
  name: "BackTop",
  methods: {
    cancelTop() {
      document.documentElement.scrollTop = 0;
    },
  },
};
</script>

<style>
.backtop {
  width: 50px;
  height: 50px;
}
.backtop > img {
  width: 50px;
  height: 50px;
}
</style>