<!DOCTYPE html>
<html>
<body>

<?php

echo "hello";
$Times = $_POST["times"];
$Location = $_POST["location"];
$name = $_POST["church_name"];
fopen($name."/", "w");
$newchurchfile = fopen("index.html", "w");
$html = '<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" type="text/css" href="style.css">
</head>
  <title>Clamber 99101</title>
<body>
  <div class="menubar"><div id="colville">CLAMBER</div></div>
<div class="wrapper">

<div id="a1"><div class="boxtxt">GRACE</div></div>

</div> vc
</div>
<script src="jquery.min.js"></script>
<script src="app.js"></script>
</body>
</html>
';
fwrite($newchurchfile, $html);
fclose($newchurchfile);
?>
</body>
</html>
