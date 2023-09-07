function sayJoke(apiUrl, jokeId) {
    return fetch(apiUrl)
.then(response =>
    response.json()
)
.then(json => {
    for (let joke of json.jokes) {
        if (joke.id === jokeId) {
            return {saySetup: () => joke.setup, 
            sayPunchLine: () => joke.punchLine
            };
        }
    }
    throw new Error(`No jokes found id: ${jokeId}`);
}).catch(error => {
    throw (error instanceof TypeError)? new Error(`No jokes at url: ${apiUrl}`) : error
})};