<template>
    <div class="newsinfo-container">
        <h3 class="title">{{newsInfo.title}}</h3>
        <p class="subtitle">
      <span>发表时间：{{newsInfo.add_time | dateFormat}}</span>
      <span>点击：{{newsInfo.click}}次</span>
    </p>
      <hr>
       <div class="content" v-html="newsInfo.content"></div>

    <comment :id="id"></comment>
    </div>
</template>
<script>
    // 导入评论子路由
    import  comment from "./subcomponents/comment.vue"
export default {
    data() {
        return {
            id:this.$route.params.id,
            newsInfo:{}
        }
    },
    created(){
        this. getnewsInfo()
    },
    methods:{
        getnewsInfo(){
            this.$http.get('http://www.liulongbin.top:3005/api/getnew/'+this.id)
            .then(res=>{
                // console.log(res)
                if(res.body.status===0) {
                    this.newsInfo=res.body.message[0]
                }
            })
        }
    },
    components:{
         comment:comment
    }

}
</script>
<style lang="scss">
    .newsinfo-container {
  padding: 0 4px;
  .title {
    font-size: 16px;
    text-align: center;
    margin: 15px 0;
    color: red;
  }
  .subtitle {
    font-size: 13px;
    color: #226aff;
    display: flex;
    justify-content: space-between;
  }
  .content {
    img {
      width: 100%;
    }
  }
}
</style>