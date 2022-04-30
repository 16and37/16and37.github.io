function lovetime() {
    window.setTimeout("lovetime()", 1000);
    function timingTime(){
      let start = '2022-3-15 10:00:00'
      let startTime = new Date(start).getTime()
      let currentTime = new Date().getTime()
      let difference = currentTime - startTime
      let m =  Math.floor(difference / (1000))
      let mm = m % 60  // 秒
      let f = Math.floor(m / 60)
      let ff = f % 60 // 分钟
      let s = Math.floor(f/ 60) // 小时
      let ss = s % 24
      let day = Math.floor(s  / 24 ) // 天数
      return "我们已经在一起"day + "天" + ss + "时" + ff + "分" + mm +'秒啦'
    }
    setInterval(()=>{
      document.getElementById('box1').innerHTML = timingTime()
    },1000)
}
lovetime()
