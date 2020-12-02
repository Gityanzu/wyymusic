

<script>
// import Content from './Content'
export default {
    name:'Tabs',
    components:{
        // Content
    },
    props:{
        currentIndex:{
            type:String,
            default:'1'
        }
    },
    mounted(){

    },
    render(){
        return(
            <div>
                <ul class="tabs-header">{this.$slots.default}</ul>
            </div>
        )
    }
}
</script>

<style>
.tabs-header {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    border-bottom: 2px solid #ededed;
}
</style>