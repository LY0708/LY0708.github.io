var works = 
[
    {
        "time": "01 2024 - CURRENT",
        "position": "Founder @ Lumina Magic",
        "technologies": [],
    },

    {
        "time": "08 2022 - 08 2023",
        "position": "Software Engineer @ Intel",
        "technologies": [ 'Python', 'TypeScript', 'Flask', 'Angular', 'Git', 'Linux', 'Docker', 'Kubernetes', 'Microservices', 'Agile', 'CI/CD', 'Code Review', 'Test Driven Development', 'JEST Framework', 'Unit Test', 'Functional Test'],
    },

    {
        "time": "01 2022 - 03 2022",
        "position": "Web Application Developer @ Ayoka Systems",
        "technologies": ['C#', 'JavaScript', 'Vue', 'ASP.NET', 'AG-Grid'],
    },

    {
        "time": "05 2021 - 08 2021",
        "position": "Software Developer @ Tyler Technologies",
        "technologies": ['C#', 'WPF', 'ASP.NET'],
    },

    {
        "time": "11 2020 - 03 2023",
        "position": "Software Developer @ Dynotify",
        "technologies": ['Python', 'Flask', 'FastAPI'],
    },

]

let positions = document.querySelector('#positions');


let html = ``;

for (let work of works) {


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
        <div class="font-bold mb-2 text-xl">${work["position"]} </div>` 
            
    + 

    ` 
    </div>

    <div class="px-6 pb-2 lg:pb-5">
    `
    + 

    technologies_html

    +
    `
    </div>

    </div>`;


};

positions.innerHTML = html;