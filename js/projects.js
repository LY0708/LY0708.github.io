
var base_Url = 'https://api.github.com/repos/larryydev';
const include_repos = new Set(['larryydev.github.io','synapticgo', 'whiteneurix', 'zephyr-queue']);

let names = []
let descriptions = []
let html_urls = []
const languages_list = new Map();


const fetchPromises = [];

for(const repo_name of include_repos) {

    let repo_url = `${base_Url}/${repo_name}`
    let repo_lang_url = `${base_Url}/${repo_name}/languages`

    fetchPromises.push(
        fetch(repo_url)
            .then(response => response.json())
            .then(data => {
                names.push(data['name'])
                descriptions.push(data['description'])
                html_urls.push(data['html_url']) 
            })
            .catch(function(){
                throw new Error('Repo response was not ok');
            })
    )

    fetchPromises.push(
        fetch(repo_lang_url)
            .then(response => response.json())
            .then(data => {
                let languages = Object.keys(data)
                languages_list.set(repo_name,languages)
            })
            .catch(function(){
                throw new Error('Languages response was not ok');
            })
    )

}

Promise.all(fetchPromises)
    .then(() => {
        let projects_html = ``;

        for(let i = 0; i < names.length; i++){
            let repo_name = names[i].toLowerCase()
            let project_html = `
            <div class="div-link" onclick="window.open('${html_urls[i]}', '_blank')">
                <p class="sub-title" id="project-link">${repo_name} &emsp; (${languages_list.get(repo_name)})</p>
                <p class="content">${descriptions[i].toLowerCase()}</p>
            </div>
            `
            projects_html += project_html;
        }
        
        let projects = document.querySelector('#projects');
        projects.innerHTML = projects_html;
    })
    .catch(error => {
        console.error('Error:', error);
    });
