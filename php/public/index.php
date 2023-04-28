<?php
// 2 we will make request to the api here
/**
 * https://www.php.net/manual/en/curl.examples-basic.php
 */
// Calling an api 
$api_url = 'https://jsonplaceholder.typicode.com/comments?postId=3';

// Read JSON file
$response_data = file_get_contents($api_url);
// decoding the json file
$posts = json_decode($response_data);
// creating an array 
$name = array();
foreach ($posts as $post) {
    array_unshift($name, $post->name);
}
// sending a json value
$jsonvalue = json_encode($name);
print_r($jsonvalue);
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
// Notes removed the publi

// Example from Laravel framework 
return call_user_func(function () {
    $uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
    $publicDir = __DIR__ . '';
    $uri = urldecode($uri);

    $requested = $publicDir . '/' . $uri;

    if ($uri !== '/' && file_exists($requested)) {
        return false;
    }

    require_once $publicDir . '/index.php';
});
