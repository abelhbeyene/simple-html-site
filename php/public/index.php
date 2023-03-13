<?php

/**
 * https://www.php.net/manual/en/curl.examples-basic.php
 */
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");


$api_endpoint = 'https://jsonplaceholder.typicode.com/comments?postId=3';

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $api_endpoint);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

// Execute the cURL request and get the response
$response = curl_exec($ch);

// Close the cURL handle
curl_close($ch);

// Send the response back to JavaScript
echo $response;