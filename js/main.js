
//
document.addEventListener('DOMContentLoaded', displayProject);
function displayProject() {
    //variable to get the output
    let output = '';
    //variable to hold if the project is done 
    const projects = JSON.parse(localStorage.getItem('projects'));
    //if there are no projects in the localStorage display a message
    if (projects == '') {
        document.querySelector('#projects').innerHTML = 'No Projects Yet'
    }
    projects.forEach((project) => {
        let technology = project.done;
        if (technology) {
            technology = 'Technologies used'
        } else {
            technology = 'Technologies To Use'
        }
        if (project.done) {
            project.done = 'Done';
        } else {
            project.done = 'Not Done';
        }
        output += `
        <div class='card mt-2'>
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-8">
                        
                            <h3 class='text-warning'>${project.id + 1}. ${project.title}</h3> 
                            <h5>Project Details</h5>
                            <p>${project.details}</p> 
                            <h5 class='technology'>${technology}</h5>
                            <p>${project.technology}</p> 
                        </div>
                        <div class='col-md-4  mt-10'>
                            <div class=''>
                                <div class='card-body'>
                                        <ul class='list-group'> 
                                            <li class='list-group-item bg-warning'>Priority : <span class='text-white'> ${project.priority}</span></li>
                                        </ul>
                                        <ul class='list-group  mt-2 status'> 
                                        <li class='list-group-item bg-warning'>Project Status:<span class='text-white'> ${project.done}</span></li>   
                                        </ul>
                                        <ul class='list-group mt-2'> 
                                            <li class='list-group-item bg-warning'>Start Date : <span class='text-white'> ${project.startDate}</span></li>
                                        </ul>
                                        <ul class='list-group mt-2'> 
                                            <li class='list-group-item bg-warning'>Due Date : <span class='text-white'>${project.dueDate}</span></li>
                                       </ul>
                                       
                                    
    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class='row'>
                        <div class='col-md-6'>
                               <div class='container'>
                                  <div class='row'>
                                        <div class='col-md-6'>  
                                           <button class='btn btn-primary mt-2 w-100 p-2' onclick=markProject('${project.id}') >Mark As Done</button>
                                        </div>
                                        <div class='col-md-6'>  
                                           <button class='btn btn-primary mt-2 w-100 p-2' onclick=unmarkProject('${project.id}') >Mark As Undone</button>
                                        </div>
                                  </div>
                               
                               
                               </div>
                             
                        </div>
                        <div class='col-md-6'>
                            <div class='container'>
                               <div class='row'>
                                    <div class='col-md-12'>  
                                       <button class='btn btn-danger mt-2 w-100 p-2 delete' onclick=deleteProject('${project.id}') >Delete Project</button>
                                    </div>
                                    
                               </div>
                            
                            </div>
                            
                        </div>
                    </div>
             </div>
     </div>
     `

    })
    document.querySelector('#projects').innerHTML = output;

}
function deleteProject(id) {
    const projects = JSON.parse(localStorage.getItem('projects'));
    projects.forEach((project, index) => {
        if (id == project.id) {
            projects.splice(index, 1);
        }
    })
    localStorage.setItem('projects', JSON.stringify(projects));
    window.location = 'index.html'
}
// function to alert a project as done
function markProject(id) {
    const projects = JSON.parse(localStorage.getItem('projects'));
    projects.forEach((project) => {
        if (id == project.id) {
            project.done = true;
        }
    })
    localStorage.setItem('projects', JSON.stringify(projects));
    window.location = 'index.html'
}

// function to alert a project as not done
function unmarkProject(id) {
    const projects = JSON.parse(localStorage.getItem('projects'));
    projects.forEach((project) => {
        if (id == project.id) {
            project.done = false;
        }
    })
    localStorage.setItem('projects', JSON.stringify(projects));
    window.location = 'index.html'
}


// document.querySelector('#form').addEventListener('submit', e => {
//     console.log('Hello Friend')
// })
