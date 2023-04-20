

function getLastCommitDate(username) {
    const url = `https://api.github.com/users/${username}/events`;
    const gitApiToken = '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';

    return fetch(url, { headers: { 'Authorization': `token ${gitApiToken}` } })
        .then(response => response.json())
        .then(data => {
            const lastCommit = data.find(event => event.type === 'PushEvent');
            if (!lastCommit) {
                throw new Error('User has no commit history');
            }
            const lastCommitDate = new Date(lastCommit.created_at);
            return lastCommitDate.toDateString();
        });
}

getLastCommitDate('coleausher')
    .then(date => console.log(date))
    .catch(error => console.error(error));