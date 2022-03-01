```
const res = await fetch('/search-results.json')
const json = await res.json()

const result = `<li>${json.join('</li><li>')}</li>`
document.getElementById('results').innerHTML = result
```