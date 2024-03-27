
var base_Url = 'https://api.github.com/repos/larryydev';
const include_repos = new Set(['larryydev.github.io','synapticgo', 'whiteneurix', 'zephyr-queue']);

let names = []
let descriptions = []
let html_urls = []
let languagesList = []

const fetchPromises = [];

for(const repo of include_repos) {

    let repo_url = `${base_Url}/${repo}`
    let repo_lang_url = `${base_Url}/${repo}/languages`

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
                languagesList.push(languages)
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
            let project_html = `
            <div class="div-link" onclick="window.open('${html_urls[i]}', '_blank')">
                <p class="sub-title" id="project-link">${names[i].toLowerCase()} &emsp; (${languagesList[i]})</p>
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
