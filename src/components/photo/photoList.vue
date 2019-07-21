<template>
    <div>
      	    <div id="slider" class="mui-slider">
      <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
        <div class="mui-scroll">
          <a :class="['mui-control-item', item.id == 0 ? 'mui-active' : '']" v-for="item in cates" :key="item.id" @tap="getPhotoListByCateId(item.id)">
            {{ item.title }}
          </a>
        </div>
      </div>
    </div>
	
		<ul class="photo-list">
  			<router-link v-for="item in list" :key="item.id"  :to="'/home/photoInfo/'+item.id"   tag="li">
  			  <img v-lazy="item.img_url">
				 <div class="info">
          			<h1 class="info-title">{{ item.title }}</h1>
          			<div class="info-body">{{ item.zhaiyao }}</div>
        		 </div>
  			</router-link>
		</ul>
	</div>
	
</template>

<script>
import  mui from '../../lib/mui/js/mui.js'

export default {
		data(){
			return {
				 cates: [], // 所有分类的列表数组
				 list:[]
			}
		},
     mounted() {
		mui('.mui-scroll-wrapper').scroll({
			deceleration: 0.0005 
		})
	},
	created(){
			this.getAllCategory();
			this.getPhotoListByCateId(0)
	},
	methods:{
		getAllCategory() {
    	  // 获取所有的图片分类
    	  this.$http.get("api/getimgcategory").then(result => {
    	    if (result.body.status === 0) {
    	      // 手动拼接出一个最完整的 分类列表
    	      result.body.message.unshift({ title: "全部", id: 0 });
    	      this.cates = result.body.message;
    	    }
    	  });
		},
		getPhotoListByCateId(cateId) {
			this.$http.get("api/getimages/"+cateId).then(res=>{
				// console.log(res)
				if (res.body.status === 0) {
         			this.list = res.body.message;
        		}
			})
		}
	
	}
}
</script>
<style lang="scss" scoped>
        * {
              touch-action:pan-y;
        }
.photo-list {
	 list-style: none;
	 margin: 0;
	 padding: 10px;
	 padding-bottom: 0;
		li {
   			background-color: #ccc;
   			text-align: center;
   			margin-bottom: 10px;
   			box-shadow: 0 0 9px #999;
   			position: relative;
		}
		img {
			 width: 100%;
			 vertical-align: middle;
		}
		img[lazy="loading"] {
    	 width: 40px;
    	 height: 300px;
    	 margin: auto;
		}
	.info {
      color: cyan;
      text-align: left;
      position: absolute;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.4);
      max-height: 84px;
      .info-title {
        font-size: 14px;
      }
      .info-body {
		  width: 90%;
        font-size: 13px;
	    overflow: hidden;  /*超出部分隐藏*/
        white-space: nowrap;  /*禁止换行*/
        text-overflow: ellipsis; /*省略号*/
      }
    }
}	
	

</style>