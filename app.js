const github = new Github
const ui = new UI
const searchUser = document.querySelector('#search-user')

searchUser.addEventListener('keyup',(e)=>{

    
    if (e.target.value!==''){
        // console.log(e.target.value)
    const userName= e.target.value
        github.getUsers(userName).then(data =>{
            // console.log(data)
            if(data.profile.message==='Not Found'){
                //show alert
                ui.showAlert('User not found','alert alert-danger')
            }else{
                //show profile
                // console.log(data.profile)
                ui.showProfile(data.profile)
                ui.showRepo(data.repos)
            
            }
        })
    }else{
            //clear profile
            ui.clearProfile()
    }
})

