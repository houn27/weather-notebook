<template>
    <div>
        <Weather v-on:weather="getWeather"></Weather>
        <Input v-on:input="getText"  ref="message" :listLen="this.list.length" />
        <div style="margin-top:10px;">
          <el-upload action="https://www.mocky.io/v2/5185415ba171ea3a00704eed/posts/" list-type="picture-card" :on-success="handleSuccess" :before-upload="beforeUpload" :on-preview="handlePictureCardPreview" ref="upload">
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="ImageUrl" alt="" >
          </el-dialog>
        </div>
        <el-button type="info" @click="handleSend" style="margin:10px 0px">Submit</el-button>
        <div class="link-top1" v-show="list.length"></div>
        <!-- <List :list="list"></List> -->
        <Daily :list="list"></Daily>
    </div>
</template>
<script>
import Weather from './weather';
import Input from './input';
import Daily from './daily'
export default {
    components: { Weather,Input,Daily},
    data(){
      return{
        message:'',
        list:[],
        weatherList:{},
        imgList:[],
        ImageUrl: '',
        dialogVisible: false,
        showUpload:true,
      }
    },
    methods:{
    //get the message 
    handleSend:function(){
      //var keys=weatherList.Keys().toArray();
      this.list.push({
          content:[{
            msg:this.message,
            date:new Date(),
            }],
          temperature:this.weatherList.temperature,
          weather:this.weatherList.weather,
          imgList:this.imgList,
      });
      this.message='';
      this.imgList=[];
      this.dialogVisible=false;
      this.$refs.upload.clearFiles();
      
    },
    //get text from input
    getText:function(val){
      this.message=val;
      //console.log(val)
    },
    getWeather:function(val){
      this.weatherList=val;  
      //console.log(val);
    },
    handlePictureCardPreview(file) {
      this.dialogVisible = true;
    },
    handleSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
        this.imgList.push(URL.createObjectURL(file.raw));
        
    },
    beforeUpload(file) {
      const isJPG = ['image/jpeg', 'image/jpg', 'image/png','image/pjpeg','image/gif'].includes(file.type);
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isJPG) {
        this.$message.error('the uploaded picture must be in JPG/PNG/GIF form!');
      }
      if (!isLt2M) {
        this.$message.error('the size of the uploaded picture must smaller than 2MB!');
      }
      return isJPG && isLt2M;
    },

  },

}
</script>
<style>
.el-upload--picture-card,.el-upload-list--picture-card .el-upload-list__item{
    height: 100px;
    width: 100px;
  }
  
  .el-upload--picture-card i{
    position: relative;
    top: -20px; /*偏移*/
    
  }
  .link-top1 {
    margin-bottom:20px;
    width: 100%;
    height: 1px;
    border-top: solid rgb(241, 241, 241) 1px;
}
</style>