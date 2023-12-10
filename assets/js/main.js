
function updateProfileInfo(profileData){

    const profile = profileData
    setInterval(() => {
        const photo = document.getElementById('profile.photo')
        photo.src = profile.photo
        photo.alt = "Foto de " + profile.name
    
        const name = document.getElementById('profile.name')
        name.textContent = profile.name
    
        const job = document.getElementById('profile.job')
        job.textContent = profile.job
    
        
        const location = document.getElementById('profile.location')
        location.textContent = profile.location
    
        const phone = document.getElementById('profile.phone')
        phone.textContent = profile.phone
    
        const email = document.getElementById('profile.email')
        email.textContent = profile.email
    },300)


}

function updateHardSkills(profileData){
    const hardSkills = document.getElementById("profile.skills.hardSkills")
    hardSkills.innerHTML = profileData.skills.hardSkills.map(skill => `<li>
    <img src="${skill.logo}" alt="${skill.name}" title="${skill.name}">
    </li>`).join('')
}

function updateHardSkills(profileData){
    const hardSkills = document.getElementById("profile.skills.hardSkills")
    hardSkills.innerHTML = profileData.skills.hardSkills.map(skill => `<li>
    <img src="${skill.logo}" alt="${skill.name}" title="${skill.name}">
    </li>`).join('')
}

function uptdatePortfolio(profileData){
    const portfolio = document.getElementById("profile.portfolio")
    portfolio.innerHTML = profileData.portfolio.map(portfolio => `<li>
    <span class="title github">${portfolio.name}</span>
    <a href="${portfolio.url}" target="_blank">${portfolio.url}</a>
    </li>`).join('')
}






function updateSoftSkills(profileData){
    const softSkills = document.getElementById("profile.skills.softSkills")
    softSkills.innerHTML = profileData.skills.softSkills.map(skill => `<li>${skill}</li>`).join('')
   

}






(async () => {
    const profileData = await fetchProfileData()
    updateProfileInfo(profileData)
    updateSoftSkills(profileData)
    updateHardSkills(profileData)
    uptdatePortfolio(profileData)
})()