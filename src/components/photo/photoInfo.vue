<template>
    <div class="photoinfo-container">
        <h3>{{photoInfo.title}}</h3>
         <p class="subtitle">
      <span>发表时间：{{ photoInfo.add_time | dateFormat }}</span>
      <span>点击：{{ photoInfo.click }}次</span>
    </p>
    <hr>
    <!-- //图片缩略图 -->

    <div class="my-pic mui-clearfix">
        <vue-preview :slides="img"></vue-preview>
    </div>



    <!-- 图片内容区域 -->
    <div class="content" v-html="photoInfo.content"></div>
      <!-- 放置一个现成的 评论子组件 -->
    <comment :id="id"></comment>


    </div>
</template>
<script>
// 1. 导入评论子组件
import comment from "../news/subcomponents/comment.vue";
export default {
        data() {
            return {
                id:this.$route.params.id,
                photoInfo:{},
                img:[]
            }
        },
        created(){
              this.getPhotoInfo(),
              this.getImg()
        },
        methods: {
            getPhotoInfo() {
                this.$http.get('api/getimageInfo/'+this.id)
                .then(res=>{
                    // console.log(res)
                    if(res.body.status==0) {
                       this.photoInfo=res.body.message[0]
                    }
                })
            },
            getImg(){
              this.$http.get('api/getthumimages/'+this.id)
              .then(res=>{
                console.log(res.body)
                  if(res.body.status==0) {
                    this.img=res.body.message
                    this.img.forEach(item => {
                      item.h=400
                      item.w=600
                      item.msrc=item.src
                    });
                  }
              })
            }

        },
        components:{
                comment
        }
}
</script>
<style lang="scss" scoped>
.photoinfo-container {
  padding: 3px;
  h3 {
    color: #26a2ff;
    font-size: 15px;
    text-align: center;
    margin: 15px 0;
  }
  .subtitle {
    display: flex;
    justify-content: space-between;
    font-size: 13px;
  }

  .content {
    font-size: 13px;
    line-height: 30px;
  }
     .my-pic {
        width: 92%;
        margin: 20px auto;
    }
    
    .my-pic figure {
        float: left;
        width: 100px;
        margin: 0;
        margin-left: 10px
    }
    
    .my-pic figure img {
        width: 100%;
        box-shadow: 0 0 8px #999;
    }
}
</style>
