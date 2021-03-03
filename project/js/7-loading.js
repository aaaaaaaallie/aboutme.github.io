var percent = 0

function eatCount(){
  $(".monsterText").html("We are<br>SQUARE<br>MONSTER!")
}

var timer = setInterval(function(){
  $(".bar").css("width",percent+"%")
  percent += 1
  if (percent > 100){
    $(".pageLoading").addClass("complete") //進度條載入完後加上complete class
    clearInterval(timer) //進度條到100%時關掉
    setTimeout(eatCount,3000) //在3秒後更新文字
  }
},30)