class Github {
    constructor() { 
        this.client_id = '74t3tndxag9o7h0890bnpfzh4'
        this.client_secret = '<KEY>'
        this.repos_count = 5
        this.repos_sort = 'created: asc'
    }

    async getUsers(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const repoResonse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        const repos = await repoResonse.json();

        return {
            profile,
            repos
        }

    }
}