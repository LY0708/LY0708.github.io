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

        const include_names = new Set(['synapticgo', 'whiteneurix', 'zephyr-queue', 'xor-list']);

        for (let repo of repos) {
            console.log(repo['html_url'])
            if (repo['fork'] == false && include_names.has(repo['name'].toLowerCase())) {
                let temp_html = 
                `
                <div class="div-link" onclick="window.open('${repo['html_url']}', '_blank')">
                    <p class="sub-title" id="project-link">${repo['name'].toLowerCase()} &emsp; (${repo['language']})</p>
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