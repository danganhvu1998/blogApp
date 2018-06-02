<!DOCTYPE html>
<html>
<head>
	<title>Create Blog Laravel</title>
</head>
<body>
	<h1> Testing Creating Blog Ability</h1>
	<form action="{{route('store')}}" method="post">
		Title: <input type="text" name="title" value="title"><br>
		Body: <input type="text" name="body" value="body"><br>
		<input type="submit">
	</form>
</body>
</html>