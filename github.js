class Github {
    constructor() { 
        this.client_id = '83715e995a785c13af5b'
        this.client_secret = '7e8f36f946e4069399454a6195a3538b431071f1'
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