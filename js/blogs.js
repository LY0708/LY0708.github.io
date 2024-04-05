const url = `https://api.github.com/repos/larryydev/larryydev-blogs/contents/`;
const excludedFiles = ['.gitattributes', 'README.md'];

const years = [];
const blogTitles = [];
const blogTitlesMap = new Map();
const blogContentsMap = new Map();


function storeBlog(path) {
    localStorage.setItem("blogPath", path)
    window.open("./pages/blog.html", "_blank");
}


const fetchData = async () => {
    try {
        // fetch years (first layer of the folders)
        const yearsResponse = await fetch(url);
        const yearsData = await yearsResponse.json();

    for (const path of yearsData) {
        if (!excludedFiles.includes(path['name'])) {
            years.push(path['name']);
        }
    }

    // go in each years folder (second layer)
    for (const year of years) {
        const yearurl = `${url}${year}/`;
        const titlesResponse = await fetch(yearurl);
        const titlesData = await titlesResponse.json();

        for (const title of titlesData) {
            blogTitles.push(title['name']);

            if (!blogTitlesMap.has(year)) {
                blogTitlesMap.set(year, [title['name']]);
            } else {
                const existingTitles = blogTitlesMap.get(year);
                existingTitles.push(title['name']);
                blogTitlesMap.set(year, existingTitles);
            }
        }
    }

    // final layer
    for (const [year, titles] of blogTitlesMap.entries()) {
        for (const title of titles) {
            const titleurl = `${url}${year}/${title}/${title}.md`;
            blogContentsMap.set(title, titleurl);
            // const contentResponse = await fetch(titleurl);
            // const contentData = await contentResponse.json();
            // const content = contentData['content'];
        }
    }

    // BUILD HTML
    let blogTable_html = 
    `
    <table border="0" cellpadding="0" cellspacing="0" style="border-collapse: collapse; width: auto;">
    <tbody>
    `
    let seenYears = new Set([]);

    const entriesArr = Array.from(blogTitlesMap.entries());
    entriesArr.sort((a, b) => b[0].localeCompare(a[0]));
    const sortedBlogTitlesMap = new Map(entriesArr);

    for(const [year, titles] of sortedBlogTitlesMap.entries()) {

        for (const title of titles) {

            blogTable_html += `<tr style="border-bottom: 1px solid #ccc; line-height: 3em;">`;

            if (seenYears.has(year)) {
                blogTable_html += `<td class="title" style="width: 5%; font-weight: bold;"></td>`;
            } else {
                blogTable_html += `<td class="title" style="width: 5%; font-weight: bold;">${year}</td>`;
                seenYears.add(year);
            }


            blogTable_html += 
            `
            <td class="content div-link" style="width: 70%; text-align: center;" onclick="storeBlog('${url}${year}/${title}/${title}.md', '_blank')">
            ${title}
            </td>
            `
        }
    }

    blogTable_html += `</tbody></table>`

    let blogs = document.querySelector('#blogs');
    blogs.innerHTML = blogTable_html;

} catch (error) {
    console.error('Error fetching data:', error);
}
};

fetchData();