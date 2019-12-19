<template>
    <div style="margin:5px 0px">
        <el-card v-for="(item ,index1) in list" :key="index1" style="margin:2px 0px">
            
            <div style="margin-bottom:5px">
                <span class="date">{{item.weather}}&emsp;</span>
                <span class="date">{{item.temperature}} &#8451; &emsp;&emsp;</span>
                <span class="date">Created at:&emsp;{{item.content[0].date.toLocaleString()}}&emsp;</span>
                <div>
                    <div class="demo-image__preview" v-for="(url,imgIndex) in item.imgList" :key="imgIndex">
                        <el-image style="width: 100px; height: 100px; margin: 5px 5px 0px 0px;" :src="url" :preview-src-list="item.imgList"></el-image>
                    </div>
                </div>
                
            </div>
            <div class="msg" v-for="(item ,index) in item.content" :key="index" style="margin:15px 0px">
                {{item.msg}}
                <div v-show="index != 0" class="newDate" v-time="item.date.getTime()"></div>
                <div class="link-top"></div>
            </div>

            <el-button type="primary" size="mini" @click="showNew=!showNew">Add</el-button>
            <el-button type="text" style="padding:0px" @click="deleteItem(index1)">delete</el-button>
            <div v-show="showNew" style="margin:5px 0px">
                <Input v-on:input="getText($event,index1)"  ref="message"/>

            </div> 
        </el-card>
    </div>
</template>
<script>
import Input from '../components/addInput';
import Time from '../../libs/time.js'
export default {
    directives: { Time },
    components: {Input},
    props:{
        list:{
            type:Array,
            
        },
        
    },
    data() {
        return {
            msgList:[],
            showNew:false,
            
        }
    },
    methods:{
        getText:function(val,index){
            //console.log(index);
            this.list[index].content.push({
                msg:val.msg,
                date:val.date,
            });
            // this.list[index].push{
            //     val
            // }
        },
        deleteItem:function(index){
            this.list.splice(index, 1);
            //console.log(this.list);
        }
    },
    
}
</script>
<style scoped>
.date{
    font-size: 14px;
    color: gray;
}
.msg{
    margin:5px 0px; 
    font-size: 20px;
    word-wrap:break-word;
}
.link-top {
    margin-top:5px;
    width: 100%;
    height: 1px;
    border-top: solid rgb(241, 241, 241) 1px;
}
.newDate{
    margin: 3px 0px;
    font-size: 12px;
    color: gray;
}
.demo-image__preview{
    display: inline;
}


</style>