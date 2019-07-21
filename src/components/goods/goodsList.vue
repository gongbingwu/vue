<template>
    <div class="goods-list">
        <div class="goods-item">
            <img src="//img10.360buyimg.com/mobilecms/s250x250_jfs/t10078/327/2847575638/182188/4c3e1adb/5cdbafe5N28e24ef2.jpg" alt="">
            <h1 class="title">联想小新Air13.3窄边框超轻薄本</h1>
            <div class="info">
                <p class="price">
                    <span class="now">￥2900</span>
                      <span class="old">￥3200</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩余50</span>
                </p>
            </div>
        </div>
      
         <div class="goods-item">
            <img src="//img11.360buyimg.com/mobilecms/s250x250_jfs/t1/61758/34/4095/192714/5d230345E35807946/253a16e0b0faebf8.jpg" alt="">
            <h1 class="title">小米（Mi）小米Note 16G双网通版</h1>
            <div class="info">
                <p class="price">
                    <span class="now">￥1200</span>
                      <span class="old">1500</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩余50</span>
                </p>
            </div>
        </div>
           <div class="goods-item">
            <img src="//img13.360buyimg.com/mobilecms/s250x250_jfs/t19690/263/1947634738/190301/ad172397/5adfe5eaN42591f8c.jpg" alt="">
            <h1 class="title">小米6X 6GB+64GB 赤焰红</h1>
            <div class="info">
                <p class="price">
                    <span class="now">￥2000</span>
                      <span class="old">￥2300</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩余50</span>
                </p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    .goods-list {
        display:flex;
        flex-wrap: wrap;
        padding: 7px;
         justify-content: space-between;

        .goods-item {
            width: 49%;
            border: 1px solid #ccc;
            box-shadow: 0 0 8px #ccc;
            margin: 4px 0;
            padding: 2px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            min-height: 293px;
            img {
                width: 100%;
            }
            .title {
                font-size: 14px;
               
            }
            .info {
                background-color: #eee;
                p{
                margin: 0;
                padding: 5px;
                }
                .now{
                    color:red;
                    font-size: 16px;
                    font-weight: blod;
                }
                .old{
                     font-size: 12px;
                    font-weight: blod; 
                    text-decoration: line-through;
                }
                .sell {
                    display: flex;
                    justify-content: space-between;
                }

            }

        }
    }
</style>
