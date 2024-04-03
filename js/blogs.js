const url = `https://api.github.com/repos/larryydev/larryydev-blogs/contents/`;
const excludedFiles = ['.gitattributes', 'README.md'];

const years = [];
const blogTitles = [];
const blogTitlesMap = new Map();
const blogContentsMap = new Map();


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
            const contentResponse = await fetch(titleurl);
            const contentData = await contentResponse.json();
            const content = contentData['content'];
            blogContentsMap.set(title, content);
        }
    }

    console.log('Data fetched successfully');
    console.log('Years:', years);
    console.log('Blog Titles:', blogTitles);
    console.log('Blog Titles Map:', blogTitlesMap);
    console.log('Blog Contents Map:', blogContentsMap);

    // BUILD HTML
    let bloglink_html = ``;

} catch (error) {
    console.error('Error fetching data:', error);
}
};

fetchData();