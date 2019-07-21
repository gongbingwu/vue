<template>
   <div class="cmt-container">
    <h3>发表评论</h3>
    <hr>
    <textarea placeholder="请输入要BB的内容（做多吐槽120字）" maxlength="120" v-model="msg"></textarea>

    <mt-button type="primary" size="large" @click="postComment" >发表评论</mt-button>

    <div class="cmt-list" v-for="(item,i) in comment " :key="i">
      <div class="cmt-item">
        <div class="cmt-title">
          第{{i+1}} 楼&nbsp;&nbsp;用户：{{item.user_name}}&nbsp;&nbsp;发表时间：{{item.add_time | dateFormat}}
        </div>
        <div class="cmt-body">
      
                 {{item.content=='undefined'?'此用户很懒':item.content}}
        
        </div>
      </div>

    </div>

    <mt-button type="danger" size="large" plain @click="addmore" >加载更多</mt-button>
  </div>
</template>
<script>
import {Toast} from 'mint-ui'
export default {
    data() {
    
      return {
        pageIndex:1,
        comment:[],
        msg:''
      }
    },
    props:['id'],
    created() {
      this.getComments()
    },
    methods:{
      getComments() {
        this.$http.get('http://www.liulongbin.top:3005/api/getcomments/'+this.id+'?pageindex='+this.pageIndex)
        .then(res=>{
          // console.log(res)
          if(res.body.status===0) {
             this.comment=this.comment.concat(res.body.message)
          } else {
              Toast('获取数据失败')
          }
        })
      },
      addmore(){
             this.pageIndex++;
              this. getComments()
      },
      postComment() {
        if(this.msg.trim().length==0) {
          return Toast('评论的内容不能为空')
        }
          this.$http.post('api/postcomment/'+this.id,{content:this.msg.trim()})
          .then(res=>{
            if(res.body.status==0) {
              var info={
                user_name:'匿名用户',
                add_time:Date.now(),
                content:this.msg.trim()
              }
              this.comment.unshift(info)
              this.msg=''
            }
          })
      }
    }
}
</script>
<style lang="scss" scoped>
.cmt-container {
  h3 {
    font-size: 18px;
  }
  textarea {
    font-size: 14px;
    height: 85px;
    margin: 0;
  }
  .cmt-list {
    margin: 5px 0;
    .cmt-item {
      font-size: 13px;
      .cmt-title {
        line-height: 30px;
        background-color: #ccc;
      }
      .cmt-body {
        line-height: 35px;
        text-indent: 2em;
      }
    }
  }
}
</style>
