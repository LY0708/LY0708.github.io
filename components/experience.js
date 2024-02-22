var works = 
[
    {
        "time": "08 2022 - 08 2023",
        "position": "Software Engineer @ Intel",
        "descriptions": [
            'Optimized front end performance by addressing API over-fetching. Developed a caching service layer for static data APIs, and adopted an observable/subscriber architecture for dynamic data APIs, resulting in a 7% improvement in browser load times',
            'Developed a server that display error messages on the landing page, resulting in a 2% reduction in server workload per instance, eliminated for manually search for error and enhanced operational efficiency', 
            'Enhanced efficiency for developers and users by adding color-coding in server and debug logs'
        ],
        "technologies": ['Test Driven Development', 'JEST Framework', 'Unit Test', 'Functional Test', 'Python', 'TypeScript', 'Flask', 'Angular', 'Git', 'Linux', 'Docker', 'Kubernetes', 'Microservices', 'Agile', 'CI/CD', 'Code Review'],
    },

    {
        "time": "01 2022 - 03 2022",
        "position": "Web Application Developer @ Ayoka Systems",
        "descriptions": [
            'Leveraged JavaScript, C#, Vue.js, ASP.NET, and Ag-Grid to develop an interactive web application that visualize customer inventory and manufacturing data',
            'Designed, developed, and documented 2 API services: the first to efficiently filter and cleanse data, ensuring quality and accuracy; and the second to dynamically generate table specific to user preferences', 
        ],
        "technologies": ['C#', 'JavaScript', 'Vue', 'ASP.NET', 'AG-Grid'],
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
    <div class="xl:bg-emerald-900 xl:text-gray-100 
                lg:text-slate-400
                md:text-slate-400" >
    <div class="px-6 py-4 mt-10">
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