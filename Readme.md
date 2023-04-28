This project is designed to understand your ability to solve a simple fullstack challenge.
It is not designed to trick you, its simply to understand your ability.
Feel free to use google but be sure to understand what you are copy pasting.

We are looking for HTML, CSS, PHP, JS, Clean code, and ability to understand project setup skills in this test.
The aim is to build a simple search suggestion like google. I.E as user is typing to display a list of results from a hardcoded API endpoint using.

The flow should look like this:
User types into UI (on keystroke) -> Use JS to make an ajax request to PHP Proxy -> PHP proxy makes request to the api -> PHP proxy sends response -> Use JS to filer the response and show relevant results

Use node 16

1. Figure out how to run the project
2. In ./script.js write your code to make your AJAX request to the PHP endpoint
3. In ./php/public/index.php write your logic to make request to https://jsonplaceholder.typicode.com/comments?postId=3
4. In ./script.js take the response and filter by the keywords the user has input (use the `name` property from the API response to compare)
5. In ./style.scss modify the css to give it some form of presentable UI. Don't spend to long on here just want to see you can use semantics CSS & HTML to make things presentable


Submit your code into Github or Gitlab for review. Please ensure the code is accessible publicly

Good luck