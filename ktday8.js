document.getElementById("myBtn").addEventListener('click', getData)
function getData() {
    
    fetch('https://pokeapi.co/api/')
    .then (res => res.json())
    .then (data => {
        console.log(data)
        /*
        let author = data.abilities;
        
        
        let output = "<h2><center> Get Data </center></h2>"
        author.forEach(function (lists) {
            output += `
            <div class="container">
                <div class="card mt-4 bg-light">
                    <ul class="list-group">
                        <li class="list-group-item"><h2>Name: ${lists.name}</h2></li>
                        <li class="list-group-item"><img src="${lists.picture.large}"></li>
                        <li class="list-group-item">Phone Number: ${lists.cell}</li>
                        <li class="list-group-item">DOB: ${lists.dob.date}</li>
                        <li class="list-group-item">Age: ${lists.dob.age}</li>
                        <li class="list-group-item">Email ID: ${lists.email}</li>
                        <li class="list-group-item">Gender: ${lists.gender}</li>
                        <li class="list-group-item">City: ${lists.location.city}</li>
                        <li class="list-group-item">Country: ${lists.location.country}</li>
                        <li class="list-group-item">PostCode: ${lists.location.postcode}</li>
                    </ul>
                </div>
            </div> `;
                            
        });
        document.getElementById('output').innerHTML=output;
        */
    });
}