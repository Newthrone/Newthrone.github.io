window.onload = function() {
  document.querySelector('#send').onclick = function() {
    ajaxGet('a=b');
  }
}

function ajaxGet(params) {
  var request = new XMLHttpRequest();
  
  request.onreadystatechange = function() {
    if(request.readyState == 4 && request.status == 200) {
      document.querySelector('#result').innerHTML = request.responseText;
    }
  }
  request.open('POST', 'app.php');
  request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  request.send(params);
}