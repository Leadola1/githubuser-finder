class UI{
    constructor(){
        this.profile = document.querySelector('.profile')
    }

 

    showProfile(input){
        this.profile.innerHTML = `

            <div class='card card-body mb-3'>
            <div class='row'>
            <div class='col-md-3'>
            <img class='img-fluid mb-3' src='${input.avatar_url}'>
            <a href='${input.html_url}' target='_blank' class="btn btn-primary mb-4" style='display:block;'>view profile</a>
            </div>
            <div class='col-md-9'>
            <span class='badge text-bg-primary'>Public Repos: ${input.public_repos}</span>
            <span class='badge text-bg-secondary'>public gist: ${input.public_gists}</span>
            <span class='badge text-bg-success'>Followers: ${input.followers}</span>
            <span class='badge text-bg-info'>Following: ${input.following}</span>
            <br><br>
            <ul class='list-group'>
            <li class='list-group-item'>Company: ${input.company}</li>
            <li class='list-group-item'>Website/Blog: ${input.blog}</li>
            <li class='list-group-item'>Location: ${input.location}</li>
            <li class='list-group-item'>Member Since: ${input.created_at}</li>


            </ul>
            
            </div>
            </div>
            </div>
            <h3 class='page-heading mb-3'>Latest Repos</h3>
            <div id='repos'></div>

        `
    }

    showRepo(repos){
        let output = ''

        repos.forEach(function(repo){
            output += `
           
            <div class='card card-body mb-2'>
            <div class='row'>
            <div class='col-md-6'>
            <a href='${repo.html_url}' target='_blank'>${repo.name}</a>
            </div>
            <div class='col-md-6'>
            <span class='badge text-bg-primary'>Stars: ${repo.stargazers_count}</span>
            <span class='badge text-bg-secondary'>Watchers: ${repo.watchers_count}</span>
            <span class='badge text-bg-success'>Forks: ${repo.forms_count}</span>
            </div>
            </div>
            </div>
            `
        })
        document.getElementById('repos').innerHTML = output
    }





    showAlert(message, className){
        this.clearAlert()
        const div = document.createElement('div')
        div.className = className
        div.appendChild(document.createTextNode(message))
        const container = document.querySelector('.search-container')
        const bod = document.querySelector('.search')
        container.insertBefore(div,bod)
        setTimeout(()=>{
            div.remove()
        },3000)

    }
    clearAlert(){
        const currentAlert = document.querySelector('.alert')
        if(currentAlert){
            currentAlert.remove()
        }
    }

    clearProfile(){
        this.profile.innerHTML = ''
    }
}