var Time={
    getUnix:function(){
        var date=new Date();
        return date.getTime();
    },
    //获取今天0点0分0秒的时间戳
    getTodayUnix:function(){
        var date=new Date();
        date.setHours(0);
        date.setMinutes(0);
        date.setSeconds(0);
        date.setMilliseconds(0);
        return date.getTime();
    },
    //获取今年1月1日0点0分0秒的时间戳
    getYearUnix:function(){
        var date=new Date();
        date.setMonth(0);
        date.setDate(1);
        date.setHours(0);
        date.setMinutes(0);
        date.setSeconds(0);
        date.setMilliseconds(0);
        return date.getTime();
        
    },
    //获取标准年月日格式
    getLastDate: function( time){
        var date=new Date(time);
        const year= date.getFullYear();
        //js中月份为0-11
        const month=date.getMonth()+1<10 ? '0'+(date.getMonth()+1):date.getMonth()+1;
        const day=date.getDate()<10 ? '0'+date.getDate():date.getDate();
        return year+'-'+month+'-'+day;
    },
    //转换时间
    getFormatTime:function(timestamp){
        var now=this.getUnix();
        var today=this.getTodayUnix();
        var year=this.getYearUnix();
        var timer=(now-timestamp)/1000;
        var tip='';
        if(timer<=0){
            tip='recently';
        }else if(Math.floor(timer/60 )<=0){
            tip='recently'
        }else if(timer<3600){
            tip=Math.floor(timer/60)+'minutes ago';
        }else if(timer>=3600 && (timestamp-today>=0)){
            tip=Math.floor(timer/3600)+'hours ago';
        }else{
            tip=this.getLastDate(timestamp);
        }
        return tip;
    }
 
}

//将指令 v-time 表达式的值 binding.value 作为参数传入 Time.getFormatTime() 方法得到格式化时间
//bind: 为自定义指令的钩子函数，在指令被绑定在元素时调用
//参数binding: 指令对象->binding.value指令的绑定值：v-my-directive＝"1+1"， value 的值是2. 
export default { 

    bind:function(el,binding){
        el.innerHTML=Time.getFormatTime(binding.value*1000);
        el._timeout_=setInterval(function(){
            el.innerHTML=Time.getFormatTime(binding.value*1000);

        },6000);
    },
    unbind:function(el){
        clearInterval(el._timeout_);
        delete el._timeout_;
    }
};