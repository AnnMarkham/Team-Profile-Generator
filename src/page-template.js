
'use strict'
const generateCards = members => {
  const teamArr = members.map(({ name, id, email, role, ...other }) => {


    let otherName = Object.getOwnPropertyNames(other)[0]
    let otherVal = other[featureName];

    teamCardHtml = `
        <div class="col-sm">         
            <div class="card bg-primary rounded" style="width: 18rem; margin-top: 20px;">   
                <div class="card-body">
                <h2 class ="card-title text-white">${name}</h2>
                    <h5 class="card-title text-white";" >${role}</h5>
                    <ul class="list-group">
                        <li class="list-group-item">Id: ${id}</li>
                        <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>   
                        <li class="list-group-item">${otherName}: ${otherVal}</li> 
                    </ul>
                </div>
            </div>
        </div>
        `

    return teamCardHtml;

  });
  return teamArr.join('');
}

const generatePage = (members) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>TeamChart</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    </head>
        <body>
            
            <header id = "headerbar">
                <nav class="navbar navbar-light bg-primary " style="height:100px; display:flex; justify-content:center; color:white">
                    <span class="h1" >Team </span>
                </nav>
            </header>
            
            <div class="container">
                <div class="row">
                    ${generateCards(members)}
                </div>
            </div>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script>    
        </body>
    </html`
};


module.exports = generatePage;