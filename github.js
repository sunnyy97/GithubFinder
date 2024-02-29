class Github {
    constructor() { 
        this.client_id = '83715e995a785c13af5b'
        this.client_secret = '7e8f36f946e4069399454a6195a3538b431071f1'
        this.repos_count = 5
        this.repos_sort = 'created: asc'
    }

    async getUsers(user) {
        // 응답을 보내고 기다리고 있어야하니까 비동기 await 사용, 답이 와야 그다음 동작을 실행하니까
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const repoResonse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id}&client_secret=${this.client_secret}`);

        // 요청을 보내고 응답을 json 형식으로 데이터를 받아옴
        const profile = await profileResponse.json();
        const repos = await repoResonse.json();

        return {
            profile,
            repos
        }

    }
}