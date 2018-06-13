function gamelist(){
var h = new Object(); // or just {}
h['Lineage'] = '1&emsp;리니지M';
h['Black_Desart'] = '2&emsp;검은사막 모바일'
h['Seven_Nights'] = '3&emsp;세븐나이츠 for Kakao'
h['Lineage2'] = '4&emsp;리니지2 레볼루션';
h['Ragnarok'] = '5&emsp;라그나로크M:영원한 사랑';
h['3Man'] = '6&emsp;삼국지M';
h['Every_Mable'] = '7&emsp;모두의마블 for Kakao';
h['Over_Hit'] = '8&emsp;오버히트';
h['Fate_Grand_Order'] = '9&emsp;페이트/그랜드 오더';
h['Mable_FutureFight'] = '10&emsp;MARVEL 퓨처파이트';

// show the values stored
for (var k in h) {
    if (h.hasOwnProperty(k)) {
        document.write("<li><a href="+k+".html>"+h[k]+"</a></li>");
    }
  }
}





function doDisplay(cnt){
    var con1 = document.getElementById("introduce_game");
    var con2 = document.getElementById("introduce_company");
    var con3 = document.getElementById("app_evaluation");
    var con4 = document.getElementById("comment");
    var li1 =  document.getElementById("li1");
    var li2 =  document.getElementById("li2");
    var li3 =  document.getElementById("li3");
    var li4 =  document.getElementById("li4");

    if(cnt=='1'){
        con1.style.display = 'block';
	      con2.style.display = 'none';
        con3.style.display = 'none';
        con4.style.display = 'none';

        li1.style.background ="#848484"
        li2.style.background = ""
        li3.style.background = ""
        li4.style.background = ""
    }
    else if(cnt=='2'){
        con1.style.display = 'none';
	      con2.style.display = 'block';
        con3.style.display = 'none';
        con4.style.display = 'none';

        li1.style.background = ""
        li2.style.background = "#848484"
        li3.style.background = ""
        li4.style.background = ""
    }
    else if(cnt==3){
      con1.style.display = 'none';
      con2.style.display = 'none';
      con3.style.display = 'block';
      con4.style.display = 'none';

      li1.style.background = ""
      li2.style.background = ""
      li3.style.background = "#848484"
      li4.style.background = ""
    }
    else if(cnt==4){
      con1.style.display = 'none';
      con2.style.display = 'none';
      con3.style.display = 'none';
      con4.style.display = 'block';

      li1.style.background = ""
      li2.style.background = ""
      li3.style.background = ""
      li4.style.background = "#848484"
    }
}

window.onload = function() {
  setInterval(function() {
    var d = new Date();
    var week = new Array('Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat');
    var target = document.getElementsByName("dt_now")[0];
              target.value = (d.getFullYear()+". " + (d.getMonth() + 1) +". "+d.getDate()+". "+week[d.getDay()]+"  "+d.getHours()+" : "+d.getMinutes()+" : "+d.getSeconds());
  }, 1);
}
