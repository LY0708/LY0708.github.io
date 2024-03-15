blogs = [
    {
        "title": "blog1",
        "description": "this is for testing.",
        "content": "dhsfadjfskdf;os"
    },

    {
        "title": "blog2",
        "content": "dhsfdfsafjdiosajfoadjfos"
    }
]


let blogs_html = ``;

for(const blog of blogs){
    
}





function parser(text) {

}


function word_count(text) {
  text = text.trim();
  const words = text.split(/\s+/);
  return words.length;
}

function read_time_in_minutes(word_count) {
    // assume reading 150 word/min
    return word_count/150
}