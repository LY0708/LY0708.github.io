var works = 
[
    {
        "time": "Jul 2022 - On going",
        "position": "Software Engineer @ Account Spark",
        "descriptions": ['Deploying and maintaining applications on Google Cloud Platform', 'Developing data science/machine learning models in Python, TensorFlow', 'Initiated using Terraform to improve and save time in the deployment process'],
        "technologies": ['Python', 'TensorFlow', 'Terraform', 'Google Cloud Platform'],
    },

    {
        "time": "Feb 2022 - May 2022",
        "position": "Software Engineer Intern @ Ayoka Systems",
        "descriptions": ['Built and tested a table dashboard for a web application for the client to view its company data', 'Used C# with ASP.NET framework, HTML/CSS, and JavaScript, AG Grid, SQL Server', 'Participated in client meetings and offer recommendations'],
        "technologies": ['C#', 'ASP.NET', 'HTML/CSS/JS', 'SQL Server'],
    },

    {
        "time": "May 2021 - Aug 2021",
        "position": "Software Engineer Intern @ Tyler Technologies",
        "descriptions": ['Utilized C# with WPF framework to develop a component of a desktop application', 'Resolved issues related to integrating legacy code into the current modern framework', 'Collaborated with 2 other interns in an agile 2 weeks sprint'],
        "technologies": ['C#', 'WPF', 'Microsoft SQL'],
    },
]

let positions = document.querySelector('#positions');


let html = ``;

for (let work of works) {

    let descriptions_html = ``;

    for (let description of work['descriptions']) {
        descriptions_html += 
        `<li class="text-m">${description}</li>`;
    }

    let technologies_html = ``;

    for (let technology of work['technologies']) {
        technologies_html += 
        `<span class="inline-block px-3 py-1 text-m font-semibold mr-2 ml-2">${technology}</span>`;
    }


    html = html +

    `
    <div class="2xl:max-w-sm 2xl:rounded 2xl:bg-emerald-400 2xl:text-gray-900 
                xl:max-w-sm xl:rounded xl:bg-emerald-400 xl:text-gray-900 
                lg:text-slate-400
                md:text-slate-400" >
    <div class="px-6 py-4">
        <div class="text-m lg:pt-5 md:pt-5">${work["time"]}</div>
        <div class="font-bold mb-2 text-xl">${work["position"]} </div>

            <div class="text-base space-y-4 lg:mr-20 md:mr-20"> ` 
            
            + 
            
            descriptions_html 
            
            +

    `        
            </div>
    </div>

    <div class="px-6 pt-4 pb-2 lg:pb-5">
    `
    + 

    technologies_html

    +
    `
    </div>

    </div>`;


}

html += 
`
<a href="assets/Larry,Yu.pdf" class="pt-5 md:hidden sm:hidden">click <u> here</u> to view my resume</a>
`;

positions.innerHTML = html;