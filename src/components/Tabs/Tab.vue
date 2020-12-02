

<script>

export default {
    name:'Tab',
    components:{
      
    },
    props:{
      label:{
        type:String,
        default:'tab'
      },
      index:{
        type:[String,Number],
        default:'1'
      }
    },
    mounted(){
      this.$parent.spans.push(this)
    },
    methods:{
      activeIndex(){
        //找到父级的onChangeActive方法，将this.index传递到onChangeActive里
        this.$parent.onChangeActive(this.index)
        //或者找到父级的父级即App里的getActiveIndex方法，将this.index传递到App里
        // this.$parent.$parent.getActiveIndex(this.index)
      }
    },
    computed:{
      isActive(){
        return this.$parent.currentIndex === this.index;
      }
    },
    render(){
      // console.log(this.index);
      // console.log(this.$parent.currentIndex);
      var className = {
        tab:true,
        active:this.isActive
      }
      return(
        <li class={className} onClick={this.activeIndex}>{this.label}</li>
      )
    }
}
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