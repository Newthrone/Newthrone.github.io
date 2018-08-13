<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>How to send html-form with Ajax.</title>
  
  
  

</head>

<body>
    <form method="post" id="ajax_form" action="app.php" >
       Email: <br>
       <input type="email" name="email" id="email" placeholder="email" /><br>
       
       Телефон: <br>
       <input type="text" id="phone" name="phone" placeholder="phone" /><br>
       
       Имя: <br>
       <input type="text" id="name" name="name" placeholder="name" /><br>  
               
        <input type="button" id="send" value="Отправить" />
    </form>

    <br>

    <div id="result"><div> 
    <script src="script.js"></script>
</body>
</html>