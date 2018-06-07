const Script = (src) => {
    var tag = document.createElement('script');
    tag.async = false;
    tag.src = src;
    document.getElementById('script').appendChild(tag);
}
export default Script;