function bootstrap(){
    window.location.href="index-bootstrap.html";
};
function materialize(){
    window.location.href="index-materialize.html";
}

function goToGithub(){
    window.location.href="https://github.com/Brianmahlatse";
}
function goToLinkedIn(){
    window.location.href="https://www.linkedin.com/in/brian-mahlatse-malau/";
}

// JavaScript to hide loading page and show content after a delay
setTimeout(function() {
document.getElementById('loading-page').style.display = 'none';
document.getElementById('content').style.display = 'block';
}, 1800); // delay time (in milliseconds)