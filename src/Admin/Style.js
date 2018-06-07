const Style = (href) => {
    var tag = document.createElement('link');
    tag.type = "text/css";
    tag.rel= "stylesheet";
    tag.href = href;
    document.getElementById('style').appendChild(tag);
}
export default Style;