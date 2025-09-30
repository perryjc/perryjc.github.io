<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <title>2Do</title>
  <link rel="stylesheet" href="style.css">
</head>

<body>
  <link rel="stylesheet" href="bootstrap-theme.min.css">
  <link rel="stylesheet" href="bootstrap.min.css">
  <script src="bootstrap.min.js"></script>

  <body>
    <div class="form-group">
      <h1>To-Do <small>List</small></h1>
      <form role="form" action="index.php" method="POST">
        <input type="text" class="form-control" placeholder="Your Task" name="task">
      </form>
      <form action="index.php" method="POST">
        <input type="submit" name="reset" value="Reset" class="btn btn btn-primary" />
      </form>
    </div>
  </body>
  <script src='jquery.min.js'></script>
</body>

</html>

<div></div><ul class="list-unstyled" id="todo"></ul>