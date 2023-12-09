


async function fetchProfileData(){
    const url = 'https://raw.githubusercontent.com/alxndd-s/js-developer-repository/main/data/profile.json'
    const fetching = await fetch(url)

    return fetching.json()
}


