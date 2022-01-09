async function loadLatestVersion() {
    res = await fetch('https://api.github.com/repos/catarium/catarium.github.io/releases/latest', {method: 'GET'});
    res = await res.json()
    if (Boolean(res)) {
        download_link = document.getElementById('latest_link')
        download_link.href = `https://github.com/catarium/catarium.github.io/releases/latest/download/${res.assets[0].name}`
    }
}


async function loadVersions() {
    res = await fetch('https://api.github.com/repos/catarium/catarium.github.io/releases', {method: 'GET'});
    res = await res.json()
    console.log(res)
    if (Boolean(res.length)) {
        res.forEach(element => {
            let version_item = document.createElement('div')
            version_item.className = 'block versions-block'
            let version_title = document.createElement('span')
            version_title.className = 'version-title'
            version_title.innerHTML = `Версия ${element.tag_name}`
            let version_link = document.createElement('a')
            version_link.className = 'version-download-link'
            version_link.innerHTML = 'Скачать'
            version_link.href = `https://github.com/catarium/catarium.github.io/releases/download/${element.tag_name}/${element.assets[0].name}`

            version_item.appendChild(version_title)
            version_item.appendChild(version_link)
            document.getElementById('versions').appendChild(version_item)
        });
    }
}