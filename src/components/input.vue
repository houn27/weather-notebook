<template>
    <div>
    <div style="margin: 15px 0;">
        
    </div>
        <div style="margin:5px">Take Note: </div>
        <el-input type="textarea" :rows="5" placeholder="input text" v-on:input="inputText" v-model="textarea" clearable></el-input>
        
    </div>
</template>
<script>
export default {
    props:{
      listLen:{
        type: Number,
        default: 0
      },  
    },
    data() {
    return {
      textarea: ''
    }
  },
  methods:{
    inputText:function () {
        //this.textarea=event.target.value;
        //console.log(this.textarea);
        this.$emit('input',this.textarea);
    },
    removeInput(){
      document.getElementsByTagName('input')[0].value = '';
    }
  },
  watch: {
      listLen(val) {
        //console.log(val);
        this.textarea = '';
      }
    }
}
</script>
<style scoped>

</style>