<template>
  <div id="app">
    <el-header>
      <Header></Header>
    </el-header>
    <el-row type="flex" justify="center">
      <el-col :span="16">
          <el-container>
            <el-aside width="180px">
              
                 <el-menu :router=true>
                   <el-menu-item index="/dailyList"><i class="el-icon-edit"></i><span slot="title">Post</span></el-menu-item>
                   <el-menu-item index="/shareList" style="margin-bottom:10px"><i class="el-icon-share"></i><span slot="title">Share</span></el-menu-item>
                 </el-menu>
              
            </el-aside>
            <el-main>
              <router-view></router-view>
            </el-main>
          </el-container>
      </el-col>
    </el-row>
    <el-footer height="100px" v-show="showFoot">
      <div style="padding-top:20px">
        Developed By:&emsp;Ron <br/>
        <span>Commercial/Technical Contact:&emsp;houn27@163.com</span><br/>
        <el-link @click="zhifuShow=true">help server sustain for one more day  </el-link>
        <el-image v-show="zhifuShow" style="width: 50px; height: 50px" :src="url" :preview-src-list="srcList">
        </el-image>
      </div>
    </el-footer>
  </div>
    
</template>

<script>

import Header from './components/header'
export default {
  name: 'App',
  components: { Header},
  data(){
      return{
        zhifuShow:false,
        url: '../src/assets/zhifubao.jpg',
        srcList: [
          '../src/assets/zhifubao.jpg',
        ],
        showFoot:false,
      }
    },
  methods:{
    
  },
  mounted(){
    // this.$http.post('api/cityjson?ie=utf-8',{}).then(res=>{
    //   this.ip=res.data["cip"];
    //   //console.log(res.data);
    // });  

    window.addEventListener('scroll',()=>{

        //console.log(document.documentElement.scrollTop+window.screen.height,document.body.scrollHeight+62);
        if(document.documentElement.scrollTop+window.screen.height>=document.body.scrollHeight+62){
            this.showFoot=true;
        }else{
          this.showFoot=false;
        }
      });
    
  }
}

</script>
<style>
   .el-footer {
    background-color:#f6f9fa;
    color: #999;
    text-align: center;
    
    position: fixed;
    left: 0px;
    bottom: 0px;
    width: 100%;
  }
  .el-header{
    background-color: white;
    color: rgb(26, 27, 73);
    line-height: 60px;
    padding-left:100px;
    box-shadow: 0 0 1px 0px rgba(0,0,0,0.3), 0 0 6px 2px rgba(0,0,0,0.15);
  }
  
  .el-aside {
    background-color: #f6f6f6;
    color: #333;
    text-align: center;
    line-height: 200px;
    margin: 10px 10px 150px 0px;
  }
  
  .el-main {
    background-color: white;
    color: #333;
    margin-bottom: 150px;
    box-shadow: 2px 0 5px 0 rgba(232,235,237,0.91)
  }
  body{
    margin: 0px;
    background: #f6f6f6;
  }
  
.el-menu-item {
    font-size: 16px;
    height: 50px;
}
  
</style>

