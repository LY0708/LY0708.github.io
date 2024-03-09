var apiUrl = 'https://api.github.com/users/ly0708/repos'

fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
    return response.json();
    })
    .then(data => {
        let repos = data;

        let projects = document.querySelector('#projects');

        let projects_html = `<ol class="list-decimal space-y-5">`;

        const dont_include_names = new Set(['ly0708', 'Todo-list-management']);

        for (let repo of repos) {
            console.log(repo)
            if (repo['fork'] == false && !dont_include_names.has(repo['name'])) {
                let temp_html = 
                `
                <li class="text-emerald-400">  
                <a href="${repo["html_url"]}">${repo["name"]}</a>
                <div class="text-slate-400">${repo["description"]}</div> 
                </li>

                `;

                projects_html += temp_html;
            }
        }

        projects_html += `</ol>`;

        projects.innerHTML = projects_html;
    })
    .catch(error => {
        console.error('Error:', error);
    });


