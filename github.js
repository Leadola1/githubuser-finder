class Github {
 constructor(){
    this.client_id = 'f9bb1c2e553bcd189aae'
    this.client_secret = '51c9ff4a3a9cdd184d691f92b8c3d934e3436d5f'
    this.repos_count = 5
    this.repos_sort = 'created: asc'
 }

 async getUsers(user){
    const userResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`)

    const userRepo = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`)

    const profile = await userResponse.json()
    const repos = await userRepo.json()
    return {
        //profile: profile
            profile,
            repos
    }

 }

}

// avatar_url: "https://avatars.githubusercontent.com/u/3854874?v=4"
// bio: " CTO @ Short Story Inc"
// blog: "linkedin.com/in/hoffstaetter"
// company: null
// created_at: "2013-03-13T14:47:30Z"
// email: null
// events_url: "https://api.github.com/users/h/events{/privacy}"
// followers: 79
// followers_url: "https://api.github.com/users/h/followers"
// following: 6
// following_url: "https://api.github.com/users/h/following{/other_user}"
// gists_url: "https://api.github.com/users/h/gists{/gist_id}"
// gravatar_id: ""
// hireable: null
// html_url: "https://github.com/h"
// id: 3854874
// location: "San Francisco"
// login: "h"
// name: "Samuel Hoffstaetter"
// node_id: "MDQ6VXNlcjM4NTQ4NzQ="
// organizations_url: "https://api.github.com/users/h/orgs"
// public_gists: 5
// public_repos: 15
// received_events_url: "https://api.github.com/users/h/received_events"
// c: "https://api.github.com/users/h/repos"
// site_admin: false
// starred_url: "https://api.github.com/users/h/starred{/owner}{/repo}"
// subscriptions_url: "https://api.github.com/users/h/subscriptions"
// twitter_username: null
// type: "User"
// updated_at: "2022-08-15T06:52:54Z"
// url: "https://api.github.com/users/h"