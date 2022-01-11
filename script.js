async function loadStars() {
    els = [].slice.call(document.getElementsByClassName('project-stars-count'))
    console.log(els)
    for (var el in els) {
        res = await fetch(`https://api.github.com/repos/catarium/${els[el].dataset.repo}`, {'method': "GET"});
        res = await res.json()
        if (res.stargazers_count != undefined) {
            els[el].innerHTML =  '✩ ' + res.stargazers_count;
        }

    };
}