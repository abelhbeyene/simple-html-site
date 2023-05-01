<?php
   
    header("Access-Control-Allow-Origin: *");
   $curl = curl_init();
   $url = sprintf("%s?%s", "https://jsonplaceholder.typicode.com/comments", http_build_query(["postId=3"]));
   curl_setopt($curl, CURLOPT_URL, $url);

   $result = curl_exec($curl);
   if(!$result){die("Connection Failure");}
   curl_close($curl);

   return $result;

?>