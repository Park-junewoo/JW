function doDisplay(cnt){
    var con1 = document.getElementById("introduce_game");
    var con2 = document.getElementById("introduce_company");
    var con3 = document.getElementById("app_evaluation");

    var li1 =  document.getElementById("li1");
    var li2 =  document.getElementById("li2");
    var li3 =  document.getElementById("li3");

    if(cnt=='1'){
        con1.style.display = 'block';
	      con2.style.display = 'none';
        con3.style.display = 'none';
        li1.style.background ="#01DFD7"
        li2.style.background = ""
        li3.style.background = ""
    }
    else if(cnt=='2'){
        con1.style.display = 'none';
	      con2.style.display = 'block';
        con3.style.display = 'none';
        li1.style.background = ""
        li2.style.background = "#01DFD7"
        li3.style.background = ""
    }
    else if(cnt==3){
      con1.style.display = 'none';
      con2.style.display = 'none';
      con3.style.display = 'block';
      li1.style.background = ""
      li2.style.background = ""
      li3.style.background = "#01DFD7"
    }
}

window.onload = function() {
  setInterval(function() {
    var d = new Date();
    var week = new Array('Sun', 'Mon', 'Tue', 'Wen', 'Thu', 'Fri', 'Sat');
    var target = document.getElementsByName("dt_now")[0];
              target.value = (d.getFullYear()+". " + (d.getMonth() + 1) +". "+d.getDate()+". "+week[d.getDay()]+"  "+d.getHours()+" : "+d.getMinutes()+" : "+d.getSeconds());
  }, 1);
}
