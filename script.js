var apiUrl = 'https://api.github.com/users/ly0708/repos'


fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
    return response.json();
    })
    .then(data => {
        const dictionary = data;
        console.log(typeof dictionary)
    })
    .catch(error => {
        console.error('Error:', error);
    });