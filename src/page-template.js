
'use strict'
const generateCards = teamMembers => {
  const teamArr = teamMembers.map(({ name, id, email, role, other }) => {



    let teamCardHtml = `
        <div class="col-sm">         
            <div class="card bg-primary" style="width: 18rem; margin-top: 20px;">   
               <div class="card-body">
                  <h2 class ="card-title text-white">${name}</h2>
                  <h5 class="card-title text-white";" >${role}</h5>
                    <ul class="list-group">
                        <li class="list-group-item">Id: ${id}</li>
                        <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>   
                        <li class="list-group-item">${other}</li> 
                    </ul>
                </div>
            </div>
        </div>

        `

    return teamCardHtml;

  });
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
          
    </html`
};


module.exports = generatePage;
