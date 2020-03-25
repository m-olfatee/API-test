function show() {
    let cur = document.getElementById("currency").value;
    console.log(cur);
    fetch(`https://api.nomics.com/v1/currencies/ticker?key=demo-26240835858194712a4f8cc0dc635c7a&ids=${cur}&interval=1d,30d&convert=EUR`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            document.getElementById("content").innerHTML = `
                 <div>
                    <h3>ID: ${data[0].id}</h3>  
                    <h3>Name: ${data[0].name}</h3>
                    <h3>this currency rank is: ${data[0].rank}</h3>
                    <img src=${data[0].logo_url} style="width: 100px;"></img > <br>
                    <h3>this currency price is: ${data[0].price} $</h3>
                  </div>`

        })
}



