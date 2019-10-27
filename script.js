//* define navlinks
let aboutLink = document.getElementById('aboutLink')
let skillsLink = document.getElementById('skillsLink')
let contactLink = document.getElementById('contactLink')

//* add scrolls to navlinks

aboutLink.addEventListener("click",()=>{
    document.body.querySelector("#about").scrollIntoView({behavior:"smooth"})
})

skillsLink.addEventListener("click",()=>{
    document.body.querySelector("#skills").scrollIntoView({behavior:"smooth"})
})

contactLink.addEventListener("click",()=>{
    document.body.querySelector("#contact").scrollIntoView({behavior:"smooth"})
})