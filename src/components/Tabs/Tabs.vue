

<script>
import Content from './Content'
export default {
    name:'Tabs',
    components:{
      Content
    },
    props:{
      currentIndex:{
        type:String,
        default:'1'
      }
    },
    data(){
      return{
        className:"active",
        spans:[]
      }
    },
    methods:{
      //再在Tab组件的父级组件Tabs里的onChangeActive方法中将收到的参数传递到App的getActiveIndex方法里
      onChangeActive(index){
      //   // console.log(index);
      //   this.$parent.getActiveIndex(index)
        this.$emit("onChangeActive",index)
      }
    },
    render(){
      return(
        <div>
          <ul class="tabs-header">{ this.$slots.default }</ul>
          <Content spans={this.spans} />
        </div>
        
      )
    }
}
</script>

<style scope>
.tabs-header {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    border-bottom: 2px solid #ededed;
}

</style>