async function loadStars() {
    els = [].slice.call(document.getElementsByClassName('project-stars-count'))
    console.log(els)
    for (var el in els) {
        res = await fetch(`https://api.github.com/repos/catarium/${els[el].dataset.repo}`, {'method': "GET"});
        els[el].innerHTML =  '✩ ' + (await res.json()).stargazers_count;
    };
}