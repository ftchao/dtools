// 设置当前时间戳
$.fn.setCurrentTimeStamp = function() {
  var timestamp = Date.parse(new Date());
  this.html(timestamp / 1000);
}

// 设置当天零点时间戳
$.fn.setCurrentTimeDay = function() {
  var t = new Date();
  var timestamp = Date.parse(t.toDateString());
  this.html(timestamp / 1000);   
}

// 设置转化时间戳
$.fn.upUnixTimeVal = function() {
    var input = this;
    $('#in_timestr').on('change', function() {
        var t = $(this).val();
        input.val(Date.parse(t) / 1000);
    })
}
// 设置转换北京时间
$.fn.upTimeStrVal = function() {
    var input = this;
    $('#in_unixtime').on('change', function() {
        var timestamp = $(this).val();
        var timestr = moment(timestamp * 1000).format('YYYY/MM/DD HH:mm:ss'); 
        input.val(timestr);
    });
}

$('#timestamp').setCurrentTimeStamp();
$('#timeday').setCurrentTimeDay();

$('#in_timestr').upTimeStrVal();
$('#in_unixtime').upUnixTimeVal();
// $('#in_timestr').on('change', function() {
//     console.log("gssssss");
// });