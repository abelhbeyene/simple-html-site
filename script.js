// 1 Here we will write ajax request that runs the php endpoint
// 3 taking the response with key stroke

document.getElementById("search-input").addEventListener("keyup", async (e) => {
  // Search comments
  // Use this API: https://jsonplaceholder.typicode.com/comments?postId=3
  // Display the results in the UI

  // Things to look out for
  // ---

  // Use es6

  const res = await fetch("http://127.0.0.1:8000/");
  var names = [];
  const json = await res.json().then((data) => {
    names = data;
  });

  const searchInput = document.querySelector("#search-input");
  const searchedValue = searchInput.value.toLowerCase();
  const result = [];
  names.forEach((name) => {
    if (name.toLowerCase().includes(searchedValue.toLowerCase())) {
      result.push(name);
    } else {
    }
  });

  const final_result = `<li class="item"">${result.join("</li><li>")}</li>`;

  document.getElementById("results").innerHTML = final_result;
});
