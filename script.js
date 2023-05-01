var xmlhttp = new XMLHttpRequest();
let result;
xmlhttp.onreadystatechange = function() {
    console.log(this.status)
    
  if (this.readyState == 4 && this.status == 200) {
    result = JSON.parse(this.responseText)
    console.log("First Time Call:", result)
  }
}
xmlhttp.open("GET", "http://localhost/html-css-site/php/public/", true);
        xmlhttp.send();
    // var substring = ""
    
document.getElementById('search-input').addEventListener('keyup', async (e) => {
    // Search comments
    // Use this API: https://jsonplaceholder.typicode.com/comments?postId=3
    // Display the results in the UI
    let filterdItem;
    if (e.target.value) {
        substring=e.target.value
        console.log(substring)
        filterdItem=result.filter((i)=>{       
        return i.name.includes(substring)
        
    })
    }
    
    let items=filterdItem 
    let list = document.getElementById("results")
    list.innerHTML=''     
      for (let index = 0; index < items.length; index++) {
        const element = items[index];
        console.log("Elements",element)
        let li = document.createElement("li");
        
        li.innerText=element.name
        list.appendChild(li);   
      }      
          
    // Things to look out for
    // ---
    // Use es6
    // Error handling
}); 
