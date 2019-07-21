<template>
    <div>
        <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="item in newList" :key="item.id">
					<router-link :to="'/home/newsInfo/'+item.id">
						<img class="mui-media-object mui-pull-left" :src="item.img_url">
						<div class="mui-media-body">
							<h1>{{item.title}}</h1>
							<p class='mui-ellipsis'>
                                <span>创建时间：{{item.add_time | dateFormat}}</span>
                                <span>点击：{{item.click}}</span>
                            </p>
						</div>
					</router-link>
				</li>
			</ul>
    </div>
</template>
<script>
export default {
    data(){
        return {
            newList:[]
        }
    },
    created(){
    this.getNewsList()
    },
    methods:{
        getNewsList(){
           this.$http.get('http://www.liulongbin.top:3005/api/getnewslist')
            .then(res=>{
                if(res.body.status==0) {
                        this.newList=res.body.message
                } 
            })
        }
    }
}
</script>

<style lang="scss" scoped>
    .mui-table-view {
        h1 {
            font-size: 14px;
        }
        
        .mui-ellipsis {
            color: #226aff;
            display: flex;
            justify-content: space-between;
        }
    }
</style>
