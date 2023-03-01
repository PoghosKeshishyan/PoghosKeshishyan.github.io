//selectors
const timeGame = document.getElementById('timeGame');
let minuteTime = document.getElementById('minuteTime');
let secondTime = document.getElementById('secondTime');
const startGame = document.getElementById('startGame');
const newGame = document.getElementById('newGame');
const helpsTableCall = document.getElementById('helps_table_call');
const helpTableAudience = document.getElementById('helps_table_audience');
const helpsTableAudiencePercent = document.querySelectorAll('#helps_table_audience .percent'); 
const helpsTableAudienceDiagram = document.querySelectorAll('#helps_table_audience .diagram'); 
const endGame = document.getElementById('endGame');
const divHelp = document.getElementById('help');
const divHelps = document.querySelectorAll("#help div");
const divQuestion = document.getElementById("question");
const divAnswers = document.querySelectorAll("#answers div");
const divRight = document.getElementById("right");
const menuBar = document.querySelector(".menuBar");
const levelDiv = document.querySelector(".levelDiv");
const levelForMobile = document.querySelector('.levelForMobile');

//audios
const backSoundTo5 = document.getElementById('backSoundTo5');
const backSoundFrom6 = document.getElementById('backSoundFrom6');
const backSoundFrom15 = document.getElementById('backSoundFrom15');

//variables
let level = 0;
let interval;
let currentQuestion;

//helps variables
let isFiftyUsed = false;
let isCalled = false;
let isAudience = false;
let isChanged = false;

//events
startGame.addEventListener('click', ()=>{
    playSound('intro');

    setTimeout(()=>{
        startGame.style.pointerEvents = 'none';
    }, 1);

    setTimeout(()=>{
        levelForMobile.style.display = 'block';
        fillQuestion();        
        startGame.style.display = 'none';
        timeGame.style.display = 'block';
        newGame.style.display = 'block';

        //time
        interval = setInterval(() => {
            secondTime.innerText--;

            if(secondTime.innerText == '0') {
                if(minuteTime.innerText == '0') {
                    divAnswers.forEach(div => div.style.pointerEvents = 'none');
                    divHelp.style.display = 'none';
                    endGame.style.display = 'flex';

                    pauseBackgrSounds();
                    playSound('pauseGame');

                    divAnswers.forEach(div => {
                        if(div.getAttribute("data-answer") == currentQuestion.answers[0]){                          
                            setTimeout(()=>{
                                div.style.background = 'rgb(50 160 51)';
                            }, 180)
                            
                            setTimeout(()=>{
                                div.style.background = 'black';
                            }, 450)
                        
                            setTimeout(()=>{
                                div.style.background = 'rgb(50 160 51)';
                            }, 760)
            
                            setTimeout(()=>{
                                div.style.background = 'black';
                            }, 1100)
                        
                            setTimeout(()=>{
                                div.style.background = 'rgb(50 160 51)';
                            }, 1500)
            
                            setTimeout(()=>{
                                div.style.background = 'black';
                            }, 1900)
                        
                            setTimeout(()=>{
                                div.style.background = 'rgb(50 160 51)';
                            }, 2300)
                        }
                    })

                    clearInterval(interval);
                } else {
                    minuteTime.innerText--;
                    secondTime.innerText = '59';
                }
            }
        }, 1000)
    }, 4000);

    setInterval(() => {
        if(level >= 5) backSoundTo5.pause();
    }, 100);
})

//answer click
for (let div of divAnswers) {
    div.addEventListener("click", e => {
        if (!e.target.innerText) return;

        if (level > 4) pauseBackgrSounds();

        divAnswers.forEach(div => div.style.pointerEvents = 'none');
        divHelps.forEach(div => div.style.pointerEvents = 'none');

        if (e.target.getAttribute("data-answer") == currentQuestion.answers[0]) {
            if (level < 14) {
                if(level < 4){
                    e.target.style.background = '#FF4500';

                    setTimeout(()=>{
                        playSound('1-4questionsAnswer');
                        answerEyelash(e);
                    }, 1600)

                    // playSound("correct-answer");
                    setTimeout(()=>{
                        level++;
                        e.target.style.color = 'white';
                        e.target.style.background = 'black';
                        fillQuestion();
                    }, 3000)
                
                } else if(level == 4) {
                    e.target.style.background = '#FF4500';

                    setTimeout(()=>{
                        level++;
                        playSound('untouchableAmountMusic');
                        answerEyelash(e);
                    }, 1600)

                    setTimeout(()=>playSound("6-15newQuestion"), 9900);
                    
                    setTimeout(()=>{
                        e.target.style.color = 'white';
                        e.target.style.background = 'black';
                        fillQuestion();
                    }, 10000)

                } else if(level >= 4 && level < 9){
                    playSound('6-15questionsTheAnswerIsAccepted');
                    e.target.style.background = '#FF4500';

                    setTimeout(()=>{
                        playSound('6-15correctAnswer');
                        answerEyelash(e);
                    }, 2500)

                    setTimeout(()=>playSound("6-15newQuestion"), 8000);
                    
                    setTimeout(()=>{
                        level++;
                        e.target.style.color = 'white';
                        e.target.style.background = 'black';
                        fillQuestion();
                    }, 8000)

                } else if(level == 9){
                    playSound('6-15questionsTheAnswerIsAccepted');
                    e.target.style.background = '#FF4500';

                    setTimeout(()=>{
                        playSound('untouchableAmountMusic');
                        answerEyelash(e);
                    }, 1600)

                    setTimeout(()=>playSound("6-15newQuestion"), 9900);

                    setTimeout(()=>{
                        level++;
                        e.target.style.color = 'white';
                        e.target.style.background = 'black';
                        fillQuestion();
                    }, 10000)

                } else if(level > 9){
                    playSound('6-15questionsTheAnswerIsAccepted');
                    e.target.style.background = '#FF4500';

                    setTimeout(()=>{
                        playSound('6-15correctAnswer');
                        answerEyelash(e);
                    }, 2500)

                    setTimeout(()=>playSound("6-15newQuestion"), 8000);
                    
                    setTimeout(()=>{
                        level++;
                        e.target.style.color = 'white';
                        e.target.style.background = 'black';
                        fillQuestion();
                    }, 8000)
                }
            } else {
                playSound('6-15questionsTheAnswerIsAccepted');
                clearInterval(interval);
                e.target.style.background = '#FF4500';

                setTimeout(()=>{
                    playSound('endGame');
                    answerEyelash(e);
                }, 2500);
                
                setTimeout(() => {
                    divQuestion.innerHTML = '';
                    
                    divAnswers.forEach(div => {
                        div.innerHTML = ''
                        div.style.background = 'black';
                    });

                    helpTableAudience.style.display = 'none';
                    helpsTableCall.style.display = 'none';
                }, 10000)
            }
        } else {
            if(level <= 4){
                e.target.style.background = '#FF4500';

                setTimeout(()=>{
                    playSound('wrongAnswer');
                    clearInterval(interval);

                    divAnswers.forEach(div => {
                        if(div.getAttribute("data-answer") == currentQuestion.answers[0]){                          
                            setTimeout(()=>{
                                pauseBackgrSounds();
                                div.style.background = 'rgb(50 160 51)';
                            }, 180)
                            
                            setTimeout(()=>{
                                div.style.background = 'black';
                            }, 450)
                        
                            setTimeout(()=>{
                                div.style.background = 'rgb(50 160 51)';
                            }, 760)
                        }
                    })
                }, 2500)
            }
            
            if(level > 4){
                playSound('6-15questionsTheAnswerIsAccepted');
                e.target.style.background = '#FF4500';

                setTimeout(()=>{
                    playSound('wrongAnswer');
                    clearInterval(interval);

                    divAnswers.forEach(div => {
                        if(div.getAttribute("data-answer") == currentQuestion.answers[0]){                          
                            setTimeout(()=>{
                                div.style.background = 'rgb(50 160 51)';
                            }, 180)
                            
                            setTimeout(()=>{
                                div.style.background = 'black';
                            }, 450)
                        
                            setTimeout(()=>{
                                div.style.background = 'rgb(50 160 51)';
                            }, 760)
                        }
                    })
                }, 2500)
            }
        }
    });
}

//helps
let helps = {
    "fifty": () => {
        let wrongAnswers = currentQuestion.answers.slice(1);
        playSound('helps-5050');

        while (wrongAnswers.length > 1) {
            let index = getRandomInt(wrongAnswers.length);

            let wrongAnswer = wrongAnswers.splice(index, 1)[0];
            for (let div of divAnswers) {
                if (div.getAttribute("data-answer") == wrongAnswer) {
                    div.innerText = '';
                    break;
                }
            }
        }
        
        setTimeout(() => {
            playBackgrSounds();
            divAnswers.forEach(div => div.style.pointerEvents = 'auto');
            divHelps.forEach(div => div.style.pointerEvents = 'auto');
        }, 500)
    },

    "call": () => {
        playSound('helps-call');
        
        setTimeout(() => {
            if(isAudience) helpTableAudience.style.display = 'none';
            helpsTableCall.style.display = 'block';
            helpsTableCall.innerText += currentQuestion.answers[0];
            isCalled = true;
        }, 8000);

        setTimeout(() => {
            playBackgrSounds();
            divAnswers.forEach(div => div.style.pointerEvents = 'auto');
            divHelps.forEach(div => div.style.pointerEvents = 'auto');
        }, 9000);

        isCalled = true;
    },

    "audience": () => {
        helpTableAudience.style.display = 'flex';
        if(isCalled) helpsTableCall.style.display = 'none';

        playSound('helps-audience');

        setTimeout(() => {
            let correctPercent = getRandomInt(84 - 6 * level, 100 - 6 * level + 1);
            let correctAnswerDiv = document.querySelector(`#answers > div[data-answer='${currentQuestion.answers[0]}']`);
            let rem = 100 - correctPercent;

            for (let i = 0; i < 4; i++) {
                if (divAnswers[i] == correctAnswerDiv) {
                    helpsTableAudiencePercent[i].innerText = `${correctPercent}%`;
                    helpsTableAudienceDiagram[i].style.height = `${correctPercent}%`;
                } else {
                    let percent = getRandomInt(rem + 1);

                    helpsTableAudiencePercent[i].innerText = `${percent}%`;
                    helpsTableAudienceDiagram[i].style.height = `${percent}%`;

                    rem -= percent;
                }
            }

        }, 7000);

        setTimeout(() => {
            playBackgrSounds();
            divAnswers.forEach(div => div.style.pointerEvents = 'auto');
            divHelps.forEach(div => div.style.pointerEvents = 'auto');
        }, 8000);

        isAudience = true;
    },

    "change": () => {
        playSound('helps-change');

        divAnswers.forEach(div => {
            if(div.getAttribute("data-answer") == currentQuestion.answers[0]){                          
                setTimeout(()=>{
                    div.style.background = 'rgb(50 160 51)';
                }, 180)
                
                setTimeout(()=>{
                    div.style.background = 'black';
                }, 450)
            
                setTimeout(()=>{
                    div.style.background = 'rgb(50 160 51)';
                }, 760)

                setTimeout(()=>{
                    div.style.background = 'black';
                }, 1100)
            
                setTimeout(()=>{
                    div.style.background = 'rgb(50 160 51)';
                }, 1500)

                setTimeout(()=>{
                    div.style.background = 'black';
                }, 1900)
            
                setTimeout(()=>{
                    div.style.background = 'rgb(50 160 51)';
                }, 2300)
            }
        })

        setTimeout(() => playBackgrSounds(), 500);

        setTimeout(() => {
            if(isAudience) helpTableAudience.style.display = 'none';
            if(isCalled) helpsTableCall.style.display = 'none';
            
            divAnswers.forEach(div => div.style.pointerEvents = 'auto');
            divHelps.forEach(div => div.style.pointerEvents = 'auto');

            fillQuestion();
        }, 9000); 
    }
};

//help click
for (let div of divHelps) {
    div.addEventListener("click", e => {
        if (currentQuestion) {
            if (e.target.parentElement.classList.contains("used")) return;

            e.target.parentElement.classList.add("used");
            let type = e.target.parentElement.getAttribute("data-type");

            divAnswers.forEach(div => div.style.pointerEvents = 'none');
            divHelps.forEach(div => div.style.pointerEvents = 'none');
            
            pauseBackgrSounds();
            helps[type]();  
        }   
    });
}

//functions
function fillQuestion() {
    levelForMobile.innerText = level == 0 ? `${level+1}-ին հարց` : `${level+1}-րդ հարց`;

    if(level <= 5) setTimeout(() => backSoundTo5.play(), 800);
    if(level >= 5 && level <= 9) setTimeout(() => backSoundFrom6.play(), 3500);
    if(level >= 10) setTimeout(() => backSoundFrom15.play(), 3500);

    if(isCalled) helpsTableCall.style.display = 'none';
    if(isAudience) helpTableAudience.style.display = 'none';

    divAnswers.forEach(div => div.style.background = 'black');
    setTimeout(() => divHelps.forEach(div => div.style.pointerEvents = 'auto'), 1000);
    setTimeout(() => divAnswers.forEach(div => div.style.pointerEvents = 'auto'), 1000);

    let levelQuestions;

    if(level < 5) {
        levelQuestions = questions[0];
    } else if(level >= 5 && level <= 9) {
        levelQuestions = questions[1];
    } else if(level > 9) {
        levelQuestions = questions[2];
    }

    //set question
    let index = getRandomInt(levelQuestions.length);
    currentQuestion = levelQuestions[index];

    levelQuestions.splice(index, 1);
    
    //set text
    divQuestion.innerHTML = currentQuestion.text;

    //set level
    let current = divRight.querySelector(".active");
    current && current.classList.remove("active");
    divRight.querySelectorAll("div")[14 - level].classList.add("active");

    //set answers
    let answers = [...currentQuestion.answers];
    for (let i = 0; i < 4; i++) {
        index = getRandomInt(answers.length);

        divAnswers[i].innerText = answers[index];
        divAnswers[i].setAttribute("data-answer", answers[index]);

        answers.splice(index, 1);
    }
}

function playSound(source) {
    const audio = document.createElement('audio');
    audio.src = `./sounds/${source}.mp3`;
    audio.autoplay = true; 
}

function pauseBackgrSounds() {
    if(backSoundTo5.play()) backSoundTo5.pause();
    if(backSoundFrom6.play()) backSoundFrom6.pause();
    if(backSoundFrom15.play()) backSoundFrom15.pause();
}   

function playBackgrSounds() {
    if(level < 5) backSoundTo5.play();
    if(level >= 5 && level <= 9) backSoundFrom6.play();
    if(level > 9) backSoundFrom15.play();
}

function answerEyelash(e){
    setTimeout(()=>{
        e.target.style.background = 'rgb(50 160 51)';
    }, 100)

    setTimeout(()=>{
        e.target.style.background = '#FF4500';
        e.target.style.color = 'white';
    }, 180)
    
    setTimeout(()=>{
        e.target.style.background = 'rgb(50 160 51);';
    }, 260)

    setTimeout(()=>{
        e.target.style.background = '#FF4500';
        e.target.style.color = 'white';
    }, 340)

    setTimeout(()=>{
        e.target.style.background = 'rgb(50 160 51)';
    }, 400)
}

menuBar.addEventListener("click", function() {
    levelDiv.classList.toggle("actRig");
    document.querySelector('.fa-bars').classList.toggle('fa-times');
})

