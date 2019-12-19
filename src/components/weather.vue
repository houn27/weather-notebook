<template>
  <el-card :body-style="{ padding: '0px' }">
    <el-row type="flex" style="align-items:center;">
      <el-col :span="8">
        <div align="center">
          <img :src="imgSrc" >
        </div>
        <div class="weather-name">{{weather}}</div>
      </el-col>
      <el-col :span="8">
        <div style="font-size:20px"><i class="el-icon-location"></i>{{loc}}</div>
        <h1>{{temperature}}&#8451;</h1>
      </el-col>
      <el-col :span="8" align="center">
        <div class="calendar"> 
            <div class="month">{{ getMonth(currentDate) }}</div>
            <div style="padding-top:5px;">
              <div>{{ currentDate.toString().substr(0,3)}}</div>
              <div class="date">{{ currentDate.getDate()}}</div>
            </div>
        </div>
      </el-col>
    </el-row>
  </el-card>
</template>
<script>

export default {
  data() {
    return {
      currentDate: new Date(),
      city:'',
      weather:'',
      loc:"",
      lat1:0,
      lng1:0,
      city:"",
      imgSrc:'',
      temperature:0,
      weather:'',
    };
  },
  methods:{
    getLocation() {
      let _this=this;
      //var myLatLng=null;
      if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition( function(position) {
            
            _this.lat1=position.coords.latitude;
            _this.lng1=position.coords.longitude;
            var geocoder = new google.maps.Geocoder();
            var myLatLng = new google.maps.LatLng({lat:_this.lat1, lng: _this.lng1}); 
            //通过google earth得位置信息
          //   var city=geocoder.geocode ({ location: myLatLng } ,function(GeocoderResult,GeocoderStatus){
          //       //console.log(GeocoderResult[0]);
          //       _this.loc=GeocoderResult[0].address_components[GeocoderResult[0].address_components.length-3].short_name;
          // });
          _this.getWeather(_this.lat1,_this.lng1);
          
          });
      };
    },
   
    getWeather(lat,lng){
      let _this=this;
      //console.log(_this.loc);
      this.$http.get('wea/now.json?key=SD526QbBBR57MSLy5&location='+lat+':'+lng+'&language=en&unit=c').then(res=>{
          console.log(res.data.results[0].location.name);
          //_this.imgPath='../assets/weather-icon/'+res.data.results[0].now.code+'.png';
          _this.imgSrc=require('../assets/weather-icon/'+res.data.results[0].now.code+'.png');
          _this.temperature=res.data.results[0].now.temperature;
          _this.weather=res.data.results[0].now.text;
          _this.loc=res.data.results[0].location.name
          _this.$emit('weather',{
            //imgSrc:_this.imgSrc,
            temperature:_this.temperature,
            weather:_this.weather,
          });
    });
    },
    getMonth(date){
      //console.log(date)
      let month=date.toString().substr(4,3);
      let year=date.getFullYear();
      return month+' '+year
    },

  },
  mounted(){
    this.getLocation();
    //this.getWeather();
  },
}
</script>
<style scoped>
.time {
    font-size: 13px;
    color: #999;
    
  }
  

  .image {
    width: 150px;
  }
  .weather-name{
    margin-bottom: 15px;
  }
 .el-card{
   text-align: center;
 }
 .month{
    background-color: rgb(247, 93, 93);
    color: white;
    height:30px;
    padding-top:5px;
    border-radius: 5px 5px 0px 0px;
  }
  .calendar{
    width:100px;
    height:100px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    border-radius: 8px;
  }
  .date{
    font-size: 24px;
    font-family:'Microsoft YaHei';
    font-weight:bolder;
  }

</style>