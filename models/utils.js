/**
 * [format_date 格式化日期格式]
 * @param  {[type]} date [日期参数]
 * @return {[type]}      [返回值]
 */
exports.format_date = function (date,flag) {//flag 为true返回时分秒
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();
  var hour = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds();
  var result ='';
  result+=year + '-' + month + '-' + day; 
  if(flag){
    hour = ((hour < 10) ? '0' : '') + hour;
    minute = ((minute < 10) ? '0' : '') + minute;
    second = ((second < 10) ? '0': '') + second;
    result+=' '+hour + ':' + minute + ':' + second;
  }
  return result;
};
/**
 * 很牛叉的一个日期格式化函数
 * atuhor : meizz
 */
exports.format = function(format){
  var o = {
    "M+" : this.getMonth()+1, //month
    "d+" : this.getDate(),    //day
    "h+" : this.getHours(),   //hour
    "m+" : this.getMinutes(), //minute
    "s+" : this.getSeconds(), //second
    "q+" : Math.floor((this.getMonth()+3)/3),  //quarter
    "S" : this.getMilliseconds() //millisecond
  }
  if(/(y+)/.test(format)) format=format.replace(RegExp.$1,
    (this.getFullYear()+"").substr(4 - RegExp.$1.length));
  for(var k in o)if(new RegExp("("+ k +")").test(format))
    format = format.replace(RegExp.$1,
      RegExp.$1.length==1 ? o[k] :
        ("00"+ o[k]).substr((""+ o[k]).length));
  return format;
}