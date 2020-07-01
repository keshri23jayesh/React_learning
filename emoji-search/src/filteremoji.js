import emojiList from "./emojilist.json";

const filteremoji = (term, maxResults) => {
    return emojiList.filter((eachElement) => {
        if(eachElement.title.toLowerCase().includes(term.toLowerCase())){
            return true;
        }
        if(eachElement.keywords.toLowerCase().includes(term.toLowerCase())){
            return true;
        }
        return false;
    }).slice(0, maxResults);
}

export default filteremoji;