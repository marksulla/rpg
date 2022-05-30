const buttonPlay = document.getElementById('button-play');
const buttonLearnmore = document.getElementById('button-learnmore');
const faders = document.querySelectorAll('.fade-in');


buttonPlay.addEventListener('click', function(e) {
    
    const audio = document.querySelector('.buttonplay__sound');
    if(!audio) return; //stop function from running all together
    console.log(audio);
    
    audio.play();
    audio.currentTime = 0;


});


buttonPlay.addEventListener('mouseenter', function(e) {
    
    const audio = document.querySelector('.buttonplay__hover');
    if(!audio) return; //stop function from running all together
    console.log(audio);
    
    audio.play();
    audio.currentTime = 0;


});

buttonLearnmore.addEventListener('click', function(e) {
    
    const audio = document.querySelector('.buttonLearnmore__sound');
    if(!audio) return; //stop function from running all together
    console.log(audio);
    
    audio.play();
    audio.currentTime = 0;


});
buttonLearnmore.addEventListener('mouseenter', function(e) {
    
    const audio = document.querySelector('.buttonLearnmore__hover');
    if(!audio) return; //stop function from running all together
    console.log(audio);
    
    audio.play();
    audio.currentTime = 0;


});




const appearOptions = {
    threshold: 1,
    rootMargin: "0px 0px -100px 0px"

};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }

    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});