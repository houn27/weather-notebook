<template>
    <div>
    <div style="margin: 15px 0;">
        
    </div>
        <el-input type="textarea" :rows="2" placeholder="input new things" v-on:input="inputText" v-model="textarea"></el-input>
        <el-button  type="primary" size="mini" style="margin:5px 0px" @click="addNew" >Submit</el-button>
    </div>
</template>
<script>
export default {
  
  data() {
    return {
      textarea: ''
    }
  },
  methods:{
    inputText:function () {
        this.textarea=event.target.value;
        //console.log(this.textarea);
        
    },
    addNew:function(){
      // var textarea=this.textarea;
      //   this.list.push({
      //           textarea
      //   });
      
      this.$emit('input',{
        msg:this.textarea,
        date:new Date()
        });
    }
  }
}
</script>
<style scoped>

</style>