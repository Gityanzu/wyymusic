<template>
  <div>
    
      <li :class="className" @click="isActive">{{ label }}</li>
   
    
  </div>
</template>

<script>
export default {
  name: "Tab",
  props: {
    label: {
      type: String,
      default: "tab",
    },
    index: {
      type: [String, Number],
    },
  },
  data() {
    return {
      className: {
        tab: true,
        active: this.isActive,
      },
    };
  },
  methods: {
    isActive() {
      // console.log(this.index,this.$parent.currentIndex);
      // console.log(this.className);
      return this.$parent.currentIndex === this.index;
    },
  },

  mounted() {
    // console.log(this.label,this.index);
  },
};
</script>

<style>
.tab {
  flex: 1;
  list-style: none;
  line-height: 40px;
  margin-right: 30px;
  position: relative;
  text-align: center;
}

.tab.active {
  border-bottom: 2px solid blue;
}
</style>