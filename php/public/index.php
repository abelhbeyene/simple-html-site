<?php

/**
 * https://www.php.net/manual/en/curl.examples-basic.php
 */
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

try {
     $url = 'https://jsonplaceholder.typicode.com/comments?postId=3'; // path to your JSON file
    //$url = 'data.json'; // path to your JSON file
    $data = file_get_contents($url); // put the contents of the file into a variable
    $comments = json_decode ($data); // decode the JSON feed
    $searchKey="/".$_GET['key']."/i";
    $results=null;
    $string = "some-image.jpg";
    $insertion = ".big";
    $index = 10;
    $result = substr_replace($string, $insertion, $index, 0);
    foreach ($comments as $key => $value) {
         if(preg_match_all($searchKey, $value->name, $matches,PREG_OFFSET_CAPTURE)) {
            $index=$matches[0][0][1];
            $found=$matches[0][0][0];
            $length=strlen($found);
            //print_r(substr_replace($value->name , "<font color=red>$found</font>", $index, $length));
            $value->name = substr_replace($value->name , "<font color=blue>$found</font>", $index, $length);
            $results[]=$value;
         }
    }
     die(json_encode($results));
} 
catch (\Throwable $th) {
    //Send the crash report into system admin or developer 
    throw $th;
}