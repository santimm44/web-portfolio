let ctiadBtn = document.getElementById("ctiad");
let interestsBtn = document.getElementById("interestsBtn");
let githubBtn = document.getElementById("githubBtn");
let socialsBtn = document.getElementById("socialsBtn");
let wainBtn = document.getElementById("wainBtn");

let ctiadArticle = document.getElementById("ctiadArticle");
let githubArticle = document.getElementById("githubArticle");
let interestsArticle = document.getElementById("interestsArticle");
let socialsArticle = document.getElementById("socialsArticle");
let wainArticle = document.getElementById("wainArticle");

ctiadBtn.addEventListener("click", function(){
    ctiadBtn.classList.add("homepage-buttons__active-colors");
    ctiadBtn.classList.remove("homepage-buttons__regular-colors", "hide-content");

    interestsBtn.classList.remove("homepage-buttons__active-colors");
    githubBtn.classList.remove("homepage-buttons__active-colors");
    socialsBtn.classList.remove("homepage-buttons__active-colors");
    wainBtn.classList.remove("homepage-buttons__active-colors");

    wainBtn.classList.add("homepage-buttons__regular-colors");
    githubBtn.classList.add("homepage-buttons__regular-colors");
    socialsBtn.classList.add("homepage-buttons__regular-colors");
    interestsBtn.classList.add("homepage-buttons__regular-colors");

    ctiadArticle.classList.remove("hide-content")
    
    interestsArticle.classList.add("hide-content");
    githubArticle.classList.add("hide-content");
    socialsArticle.classList.add("hide-content");
    wainArticle.classList.add("hide-content");
})
interestsBtn.addEventListener("click", function(){
    interestsBtn.classList.add("homepage-buttons__active-colors");
    interestsBtn.classList.remove("homepage-buttons__regular-colors");

    ctiadBtn.classList.remove("homepage-buttons__active-colors");
    githubBtn.classList.remove("homepage-buttons__active-colors");
    socialsBtn.classList.remove("homepage-buttons__active-colors");
    wainBtn.classList.remove("homepage-buttons__active-colors");

    wainBtn.classList.add("homepage-buttons__regular-colors");
    githubBtn.classList.add("homepage-buttons__regular-colors");
    socialsBtn.classList.add("homepage-buttons__regular-colors");
    ctiadBtn.classList.add("homepage-buttons__regular-colors");

    interestsArticle.classList.remove("hide-content")

    ctiadArticle.classList.add("hide-content");
    githubArticle.classList.add("hide-content");
    socialsArticle.classList.add("hide-content");
    wainArticle.classList.add("hide-content");
})
githubBtn.addEventListener("click", function(){
    githubBtn.classList.add("homepage-buttons__active-colors");
    githubBtn.classList.remove("homepage-buttons__regular-colors");

    ctiadBtn.classList.remove("homepage-buttons__active-colors");
    interestsBtn.classList.remove("homepage-buttons__active-colors");
    socialsBtn.classList.remove("homepage-buttons__active-colors");
    wainBtn.classList.remove("homepage-buttons__active-colors");

    wainBtn.classList.add("homepage-buttons__regular-colors");
    interestsBtn.classList.add("homepage-buttons__regular-colors");
    socialsBtn.classList.add("homepage-buttons__regular-colors");
    ctiadBtn.classList.add("homepage-buttons__regular-colors");

    githubArticle.classList.remove("hide-content")

    ctiadArticle.classList.add("hide-content");
    interestsArticle.classList.add("hide-content");
    socialsArticle.classList.add("hide-content");
    wainArticle.classList.add("hide-content");
})
socialsBtn.addEventListener("click", function(){
    socialsBtn.classList.add("homepage-buttons__active-colors");
    socialsBtn.classList.remove("homepage-buttons__regular-colors");

    ctiadBtn.classList.remove("homepage-buttons__active-colors");
    interestsBtn.classList.remove("homepage-buttons__active-colors");
    githubBtn.classList.remove("homepage-buttons__active-colors");
    wainBtn.classList.remove("homepage-buttons__active-colors");

    wainBtn.classList.add("homepage-buttons__regular-colors");
    interestsBtn.classList.add("homepage-buttons__regular-colors");
    githubBtn.classList.add("homepage-buttons__regular-colors");
    ctiadBtn.classList.add("homepage-buttons__regular-colors");

    socialsArticle.classList.remove("hide-content")

    ctiadArticle.classList.add("hide-content");
    githubArticle.classList.add("hide-content");
    interestsArticle.classList.add("hide-content");
    wainArticle.classList.add("hide-content");
})
wainBtn.addEventListener("click", function(){
    wainBtn.classList.add("homepage-buttons__active-colors");
    wainBtn.classList.remove("homepage-buttons__regular-colors");

    ctiadBtn.classList.remove("homepage-buttons__active-colors");
    interestsBtn.classList.remove("homepage-buttons__active-colors");
    githubBtn.classList.remove("homepage-buttons__active-colors");
    socialsBtn.classList.remove("homepage-buttons__active-colors");

    socialsBtn.classList.add("homepage-buttons__regular-colors");
    interestsBtn.classList.add("homepage-buttons__regular-colors");
    githubBtn.classList.add("homepage-buttons__regular-colors");
    ctiadBtn.classList.add("homepage-buttons__regular-colors");

    wainArticle.classList.remove("hide-content")

    ctiadArticle.classList.add("hide-content");
    githubArticle.classList.add("hide-content");
    socialsArticle.classList.add("hide-content");
    interestsArticle.classList.add("hide-content");
})