var books = 
[
    {
        "name": "Web Scalability for Startup Engineers",
        "author": "Artur Ejsmont",
        "link": "https://www.amazon.com/Scalability-Startup-Engineers-Artur-Ejsmont/dp/0071843655"
    },

    {
        "name": "C Programming Language, 2nd Edition",
        "author": "Brian W. Kernighan, Dennis M. Ritchie",
        "link": "https://www.amazon.com/Programming-Language-2nd-Brian-Kernighan/dp/0131103628/ref=sr_1_1?keywords=the+c+programming+language+2nd+edition&qid=1657040339&s=books&sprefix=the+c+pro%2Cstripbooks%2C103&sr=1-1"
    },

    {
        "name": "Operating Systems: Three Easy Pieces",
        "author": "Remzi H Arpaci-Dusseau, Andrea C Arpaci-Dusseau",
        "link": "https://www.amazon.com/Operating-Systems-Three-Easy-Pieces/dp/198508659X/ref=sr_1_1?keywords=operating+systems+three+easy+pieces&qid=1657040396&s=books&sprefix=operating+sys%2Cstripbooks%2C91&sr=1-1"
    },

    {
        "name": "Test Driven Development by Example",
        "author": "Kent Beck",
        "link": "https://www.amazon.com/Test-Driven-Development-Kent-Beck/dp/0321146530/ref=sr_1_1?keywords=test+driven+development+by+example&qid=1657040439&s=books&sprefix=test+d%2Cstripbooks%2C115&sr=1-1"
    },

    {
        "name": "Competitive Strategy: Techniques for Analyzing Industries and Competitors",
        "author": "Michael E. Porter",
        "link": "https://www.amazon.com/Competitive-Strategy-Techniques-Industries-Competitors/dp/0684841487/ref=sr_1_1?keywords=competitive+strategy&qid=1657040500&s=books&sprefix=competitive+%2Cstripbooks%2C94&sr=1-1"
    },

    {
        "name": "Zero to One: Notes on Startups, or How to Build the Future",
        "author": "Peter Thiel, Blake Masters",
        "link": "https://www.amazon.com/Zero-One-Notes-Startups-Future/dp/0804139296/ref=tmm_hrd_swatch_0?_encoding=UTF8&qid=1657040657&sr=8-1"
    },

    {
        "name": "The Model Thinker: What You Need to Know to Make Data Work for You",
        "author": "Scott E. Page",
        "link": "https://www.amazon.com/Model-Thinker-What-Need-Know/dp/0465094627/ref=tmm_hrd_swatch_0?_encoding=UTF8&qid=1657040761&sr=8-1"
    },
];

let recommendations = document.querySelector('#recommandations');

let recommendations_html = `<ol class="list-decimal space-y-5">`;

for (let book of books) {
    let temp_html = 
    `
    <li class="text-emerald-400">  
    <a href="${book["link"]}">${book["name"]}</a>
    <div class="text-slate-400"> by ${book["author"]}</div> 
    </li>

    `;

    recommendations_html += temp_html;
}

recommendations_html += `</ol>`;

recommendations.innerHTML = recommendations_html;