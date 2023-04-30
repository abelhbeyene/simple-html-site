document.getElementById('search-input').addEventListener('keyup', async (e) => {
    // Search comments
    // Use this API: https://jsonplaceholder.typicode.com/comments?postId=3
    // Display the results in the UI

    // Things to look out for
    // ---
    // Use es6
    // Error handling
    const key=document.getElementById('search-input').value;
    const res = await fetch('http://localhost:8000/?key='+key)
    const json = await res.json()
    let results ="";
    for (const key in json) {
        results+= 
        ` <div class="card">
            <div class="header">
            <p>`+json[key].name+`</p>
            </div>
            <div class="container">
            <p>`+json[key].body+`</p>
            <p>`+json[key].email+`</p>
            </div>
        </div>`
    }
    document.getElementById('results').innerHTML = results

})