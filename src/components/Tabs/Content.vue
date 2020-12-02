

<script>
export default {
  name: "Content",
  props: {
    spans: {
      type: Array,
      default: function () {
        return [];
      },
    },
  },
  render() {
    // console.log(this.spans);
    return (
      <div>
        {this.spans.map((item, index) => {
          return (
            <div key={index}>{item.isActive ? item.$slots.default : ""}</div>
          );
        })}
      </div>
    );
  },
};
</script>

<style>
</style>