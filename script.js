document.getElementById("search-input").addEventListener("keyup", async (e) => {
  // Search comments
  // Use this API: https://jsonplaceholder.typicode.com/comments?postId=3
  // Display the results in the UI

  // Things to look out for
  // ---
  // Use es6

  const res = await fetch("http://localhost:8000/");
  let json = await res.json();

  const searchKey = document.getElementById("search-input").value;

  json = json.filter((data) => data.name.includes(searchKey));

  const results = json.map((data) => `${data.name}`);

  const result = `<li>${results.join("</li><li>")}</li>`;

  document.getElementById("results").innerHTML =
    results.length > 0 ? result : "No Data found";
});
