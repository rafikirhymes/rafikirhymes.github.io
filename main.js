const homeNav = document.getElementById('home-nav')
const aboutMeNav = document.getElementById('about-me-nav')
const projectsNav = document.getElementById('projects-nav')


const homeArticle = document.getElementById('home-article')
const aboutMeArticle = document.getElementById('about-me-article')
const projectsArticle = document.getElementById('projects-article')

homeNav.onclick = () => {
    homeArticle.hidden=false;
    aboutMeArticle.hidden=true;
    projectsArticle.hidden=true;
}

aboutMeNav.onclick = () => {
    homeArticle.hidden=true;
    aboutMeArticle.hidden=false;
    projectsArticle.hidden=true;
}

projectsNav.onclick = () => {
    homeArticle.hidden=true;
    aboutMeArticle.hidden=true;
    projectsArticle.hidden=false;
}