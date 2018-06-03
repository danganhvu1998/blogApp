<!DOCTYPE html>
<html>
<head>
	<title>Create Users</title>
</head>
<body>
	<h1> Testing Creating User</h1>
	<form action="{{route('createUser')}}" method="post">
		username: <input type="text" name="username" value="dav@gmail.com"><br>
		password: <input type="text" name="password" value="ahihiahyhy"><br>
		<input type="submit">
	</form>
</body>
</html>