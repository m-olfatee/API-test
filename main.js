function show() {
    let name = document.getElementById("name").value;
    console.log(name);
    fetch(`https://reqres.in/api/users`)
        .then(response => response.json())
        .then(data => {
            console.log(data.data)
            let persons = data.data
            for (let item of persons) {
                if (item.first_name === name) {
                    console.log(item)
                    document.getElementById("content").innerHTML = `
                  <div>
                     <h3>ID: ${item.id}</h3>  
                     <h3>Name: ${item.first_name} ${item.last_name}</h3>
                     <h3>Email address: ${item.email}</h3>
                     <img src=${item.avatar} style="width: 100px;"></img > <br>
                   </div>`
                }
            }
        })
        .catch(error => {
            console.log("error!")
        })

}



