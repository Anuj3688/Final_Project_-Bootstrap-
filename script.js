// functions for contact and about us hover and inclick
function aboutvis() {
    document.getElementById("abfunc").style = "display:flex";
  }
  
  function aboutvisd() {
    document.getElementById("abfunc").style = "display:none;";
  }
  
  function contactvis() {
    document.getElementById("cofunc").style = "display:block";
  }
  function contactvisd() {
    document.getElementById("cofunc").style = "display:none";
  }
  
  function oabout() {
    window.open(
      "aboutus.html"
    );
  }
  
  function ocontact() {
    window.open(
      "contact.html"
    );
  }
  
  // Function for Login
  
  function openSubject() {
    window.open("Course.html");
  }
  
  
  // to open the full tab of SQL
  
  var sqls = 0;
  var sq = 0;
  function openfull(x , score) {
    var idans = "SQL" + x;
    var h = document.getElementById(idans).style.height;    
    if (document.getElementById(idans).style.height > "70px") {
      document.getElementById(idans).style.height = "70px";
  
    } else {
  
      if(document.getElementById(idans).querySelector(".visited").innerText == 0){
          sqls += score;
          sq++;
          document.getElementById(idans).querySelector(".visited").innerText = 1;
          document.getElementById(idans).querySelector(".subheadsco").innerHTML = "Score Boost " + score+"/"+score;
          document.getElementById("sqlscore").innerText = sqls+"/200";
          document.getElementById("sqlq").innerText = sq +"/10";
      }
  
      document.getElementById(idans).style.height = "unset";
    }
  }
  // if(document.getElementById(idans).getElementsByClassName("visited").innerText == 0){
  //     sqls += score;
  //     document.getElementById(idans).getElementsByClassName("visited").innerText = 1;
  //     document.getElementById("sqlscore").innerText = sqls+"/200"
  // }
  
  // Functions for the course page
  
  function openSQl() {
    window.open("sql.html");
  }
  
  function openWebTech() {
    window.open("webtech.html");
  }
  function openJava() {
    window.open("java.html");
  }
  
  
  // Functions for java Page
  
  var javas = 0;
  var jq = 0;
  function openfull1(x , score) {
    var idans = "Java" + x;
    var h = document.getElementById(idans).style.height;    
    if (document.getElementById(idans).style.height > "70px") {
      document.getElementById(idans).style.height = "70px";
  
    } else {
  
      if(document.getElementById(idans).querySelector(".visited").innerText == 0){
          javas += score;
          jq++;
          document.getElementById(idans).querySelector(".visited").innerText = 1;
          document.getElementById(idans).querySelector(".subheadsco").innerHTML = "Score Boost " + score+"/"+score;
          document.getElementById("javascore").innerText = javas+"/200";
          document.getElementById("javaq").innerText = jq +"/10";
      }
  
      document.getElementById(idans).style.height = "unset";
    }
  }
  
  
  //Close function
  function closelog() {
    document.getElementById("login").style = 'display:none';
    // document.getElementById("anicont").style = 'display:block';
  }
  
  function openlog(){
    document.getElementById("login").style = 'display:block';
    // document.getElementById("anicont").style = 'display:none';
  }