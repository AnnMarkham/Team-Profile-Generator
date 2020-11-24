//require inquirer
// require generatePage-  see module.exports in src/index.js


// add inquirer prompts to enter:
  //team manager's name, 
  //employee id;
  //email address
  //office number

      //then menu with choices 
          //['add and engineer', 'add an intern', 'finish building team']

              //if Engineer 
                  // prompts:  
                    //(*** How these inherit from Employee **  maybe at call getEmployee or some thing else)
                      // Engineer name
                      // ID
                      // email
            //?? Example does not show Engineer's manager or intern's manager - so could do first 3 prompt all togther and then present only the added questions if Engineer or Intern.

                  // added Engineer prompts
                    //GitHub Username

                    //.then back to menu (add Engineer, add intern or finish building team.)

                //if Intern
                    //prompts: 
                      //Intern name
                      //ID
                      //email 
                      //(?? see notes with Engineer)

                    // added prompt 
                      // school

                    //.then return to main menu.

                  //when select finish building team (then exit and generate html)  -- generatePage() -- see code in src/generatePage.js


                  // ADD MEANINGFUL VALIDATION --  i.e. is there input? is this a valid email address.  is this a valid github link. etc.


