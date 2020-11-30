'use strict'
const Employee = require('../lib/Employee.js')



const generateCards = teamMembers => {
    const teamArr = teamMembers.map(({ name, id, email, role, other }) => {

        if (role === "Engineer") {
            let teamCardHtml =

                `
        <div class="col-sm">         
            <div class="card bg-primary" style="width: 18rem; margin-top: 20px;">   
               <div class="card-body">
                  <h2 class ="card-title text-white">${name}</h2>
                  <h5 class="card-title text-white";" >${role}</h5>
                    <ul class="list-group">
                        <li class="list-group-item">Id: ${id}</li>
                        <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>  
                        


                       <li class="list-group-item">gitHub: <a href="other:${other}">${other}</a></li>  
                    </ul>
                </div>
            </div>
        </div>
        `
            return teamCardHtml;
        }
        else if (role === "Manager") {
            let teamCardHtml =
                `
      
            <div class="col-sm">
            <div class="card bg-primary" style="width: 18rem; margin-top: 20px;">
               <div class="card-body">
                  <h2 class ="card-title text-white">${name}</h2>
                  <h5 class="card-title text-white";" >${role}</h5>
                    <ul class="list-group">
                        <li class="list-group-item">Id: ${id}</li>
                        <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>  
                        <li class="list-group-item other">Office Number: ${other}</li> 
                    </ul>
                </div>
            </div>
        </div>
        `
            return teamCardHtml;
        }
        else if (role === "Intern") {

            let teamCardHtml =

                `
        <div class="col-sm">         
            <div class="card bg-primary" style="width: 18rem; margin-top: 20px;">   
               <div class="card-body">
                  <h2 class ="card-title text-white">${name}</h2>
                  <h5 class="card-title text-white";" >${role}</h5>
                    <ul class="list-group">
                        <li class="list-group-item">Id: ${id}</li>
                        <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>  
                        <li class="list-group-item other">School: ${other}</li> 
                    </ul>
                </div>
            </div>
        </div>
        `
            return teamCardHtml;
        }


    })

    return teamArr.join('');
}

const generatePage = (teamMembers) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>TeamChart</title>
         <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
  <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
    </head>
        <body>
            
            <header id = "headerbar">
                <nav class="navbar navbar-light bg-primary " style="height:100px; display:flex; justify-content:center; color:white">
                    <span class="h1" >Team </span>
                </nav>
            </header>
            
            <div class="container">
                <div class="row">
                    ${generateCards(teamMembers)}
                </div>
            </div>
           
        </body>
    </html`
};


module.exports = generatePage;
