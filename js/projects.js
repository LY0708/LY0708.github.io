var apiUrl = 'https://api.github.com/users/larryydev/repos';

fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        let repos = data;
        let projects_html = ``;

        const dont_include_names = new Set(['ly0708', 'todo-list-management', 'larryydev.github.io', 'my-site']);

        for (let repo of repos) {
            console.log(repo['html_url'])
            if (repo['fork'] == false && !dont_include_names.has(repo['name'].toLowerCase())) {
                let temp_html = 
                `
                <div class="div-link" onclick="location.href='${repo['html_url']}'">
                    <p class="sub-title" id="project-link">${repo['name'].toLowerCase()}</p>
                    <p class="content">${repo['description'].toLowerCase()}</p>
                </div>
                `;

                projects_html += temp_html;
            }
        }

        let projects = document.querySelector('#projects');
        projects.innerHTML = projects_html;
    })
    .catch(error => {
        console.error('Error:', error);
    });