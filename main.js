var questions = {
    politics: {
        question1: {
            question: "Who is the president of Nigeria",
            answer: {
                answer1: "Buhari",
                answer2: "Tinubu",
                answer3: "GoodLuck Jonathan",
                answer4: "Shehu Shagari"
            }
        },
        question2: {
            question: "Who is the president of America.",
            answer: {
                answer1: "Donald Trump",
                answer2: "Ernest Rutherford",
                answer3: "Joe Biden",
                answer4: "Obama"
            }
        },
        question3: {
            question: "When did Nigeria gain independence.",
            answer: {
                answer1: "1960",
                answer2: "1963",
                answer3: "1966",
                answer4: "1970"
            }
        },
        question4: {
            question: "When did queen Elizabeth die.",
            answer: {
                answer1: "2020",
                answer2: "2021",
                answer3: "2022",
                answer4: "2023"
            }
        }
    },
    sports: {
        question1: {
            question: "Who is the current WWE undisputed champion",
            answer: {
                answer1: "Solo Sikoa",
                answer2: "Cody Rhodes",
                answer3: "Roman Reigns",
                answer4: "The Rock"
            }
        },
        question2: {
            question: "Which country won the first ever Cricket World Cup in 1975?",
            answer: {
                answer1: "West Indies",
                answer2: "Australia",
                answer3: "England",
                answer4: "Pakistan"
            }
        },
        question3: {
            question: "Who is the all-time leading scorer in the history of the NBA?",
            answer: {
                answer1: "Kareem Abdul-Jabbar – 38,387 points",
                answer2: "Karl Malone – 36,928 points",
                answer3: "LeBron James – 35,367 points",
                answer4: "Kobe Bryant – 33,643 points"
            }
        },
        question4: {
            question: "Who won the Ballon d’Or award for men’s football in 2021?",
            answer: {
                answer1: "Lionel Messi",
                answer2: "Cristiano Ronaldo",
                answer3: "Robert Lewandowski",
                answer4: "Mohamed Salah"
            }
        }
    },
    education: {
        question1: {
            question: "Where were fortune cookies invented?",
            answer: {
                answer1: "China",
                answer2: "Japan",
                answer3: "USA",
                answer4: "France"
            }
        },
        question2: {
            question: "What is the fear of fun called?",
            answer: {
                answer1: "Phobophobia",
                answer2: "Cherophobia",
                answer3: "Hilarophobia",
                answer4: "Funophobia"
            }
        },
        question3: {
            question: "Which country invented ice cream?",
            answer: {
                answer1: "USA",
                answer2: "Italy",
                answer3: "France",
                answer4: "China"
            }
        },
        question4: {
            question: "Which ancient people invented the toothbrush?",
            answer: {
                answer1: "Romans",
                answer2: "Egyptians",
                answer3: "Greeks",
                answer4: "Africans"
            }
        }
    },
    lifestyle: {
        question1: {
            question: "",
            answer: {
                answer1: "",
                answer2: "",
                answer3: "",
                answer4: ""
            }
        },
        question2: {
            question: "",
            answer: {
                answer1: "",
                answer2: "",
                answer3: "",
                answer4: ""
            }
        },
        question3: {
            question: "",
            answer: {
                answer1: "",
                answer2: "",
                answer3: "",
                answer4: ""
            }
        },
        question4: {
            question: "",
            answer: {
                answer1: "",
                answer2: "",
                answer3: "",
                answer4: ""
            }
        }
    }
}

var answers = {
    politics: {
        question1: {
            response:"",
            answer:"Tinubu"
        },
        question2: {
            response:"",
            answer:"Joe Biden"
        },
        question3: {
            response:"",
            answer:"1960"
        },
        question4: {
            response:"",
            answer:"2022"
        }
    },
    sports: {
        question1: {
            response:"",
            answer:"Cody Rhodes"
        },
        question2: {
            response:"",
            answer:"West Indies"
        },
        question3: {
            response:"",
            answer:"Kareem Abdul-Jabbar – 38,387 points"
        },
        question4: {
            response:"",
            answer:"Lionel Messi"
        }
    },
    education: {
        question1: {
            response:"",
            answer:"Japan"
        },
        question2: {
            response:"",
            answer:"Cherophobia"
        },
        question3: {
            response:"",
            answer:"China"
        },
        question4: {
            response:"",
            answer:"Egyptians"
        }
    },
    lifestyle: {
        question1: {
            response:"",
            answer:""
        },
        question2: {
            response:"",
            answer:""
        },
        question3: {
            response:"",
            answer:""
        },
        question4: {
            response:"",
            answer:""
        }
    }
}

var results_menu = document.querySelector(".result_display");
var submit_btn = document.querySelector(".submit");
var categories_btn = document.querySelector(".categories");
var start_menu = document.querySelector(".start_display");
var questions_menu = document.querySelector(".question_display");
var question = document.querySelector(".question_section");
var answer_section = document.querySelector(".answer_section");
var prev_btn = document.querySelector(".previous");
var next_btn = document.querySelector(".next");
var question_tracker = document.querySelector(".question_count");
var questionSection;
var current_category = "";


let x = 0;
let questionCount = 0;
let iteration = 0;
let rightAnswer = 0;



for (let i = 1; i < answer_section.childElementCount+1; i++) {
    let answer_btn = document.getElementById("answer"+i);
    answer_btn.addEventListener("click", () => {
        
        for (let x = 1; x < answer_section.childElementCount+1; x++) {
            document.getElementById("answer"+x).style.backgroundColor = "#142c5e";
            
        }
        
        answers[current_category.toLowerCase()]["question"+questionCount].response = document.getElementById("answer"+i).textContent.toLowerCase();
        answer_btn.style.backgroundColor = "rgb(221, 38, 221)";
    });
}

for (let i = 0; i < categories_btn.childElementCount*2; i++) {
    
    categories_btn.childNodes[i].addEventListener("click", () => {
        document.querySelector(".question_category").textContent = categories_btn.childNodes[i].textContent;
        current_category = categories_btn.childNodes[i].textContent;
        questions_menu.style.display = "block";
        start_menu.style.display = "none";
        iteration = i;
        questionCount++;
        Questions.GetQuestion(iteration);
    })
    
}

prev_btn.addEventListener("click", () => {
    if(questionCount > 1) {
        Questions.PreviousQuestion(iteration);
        
    }
});


next_btn.addEventListener("click", () => {
    if(questionCount < categories_btn.childElementCount){
        
        Questions.NextQuestion(iteration);
    } 
   
});

document.addEventListener("keydown", (e) => {
    if(current_category != ""){
        if(e.key == "ArrowRight"){
            Questions.NextQuestion();
        }if(e.key == "ArrowLeft"){
            Questions.PreviousQuestion();
        }
    }
})

class Questions{
    
    static GetQuestion(i) {
        if(questionCount == answer_section.childElementCount){
            document.querySelector(".submit").style.display = "block";
        }
        questionSection = questions[categories_btn.childNodes[i].textContent.toLowerCase()];
        question.textContent = questionSection["question"+questionCount].question;
        question_tracker.textContent = "Question " + questionCount + " of " + categories_btn.childElementCount;
        for (let x = 1; x < answer_section.childElementCount+1; x++) {
            document.querySelector("#answer"+x).textContent = questionSection["question"+questionCount].answer["answer"+x];
            document.querySelector("#answer"+x).style.backgroundColor = "#142c5e";
        }
        
    }

    static NextQuestion(){
        
        questionCount++;
        this.GetQuestion(iteration);
        this.SeeTickedQuestion();
    }

    static PreviousQuestion(){
        
        questionCount--;
        this.GetQuestion(iteration);
        this.SeeTickedQuestion();
    }
    

    static SeeTickedQuestion(){
        for (let x = 1; x < answer_section.childElementCount+1; x++) {
            if(questions[current_category.toLowerCase()]["question"+questionCount].answer["answer"+x].toLowerCase()==answers[current_category.toLowerCase()]["question"+questionCount].response){
                document.querySelector("#answer"+x).style.backgroundColor = "rgb(221, 38, 221)";
            }
        }
    }
}

const ShowResults = () => {
    questions_menu.style.display = "none";
    results_menu.style.display = "block";
    for (let i = 1; i <= answer_section.childElementCount; i++) {
        if(answers[current_category.toLowerCase()]["question"+i].answer.toLowerCase() == answers[current_category.toLowerCase()]["question"+i].response.toLowerCase()){
            rightAnswer++;
            document.querySelector("#score_display").textContent = rightAnswer + "/" + answer_section.childElementCount;
            document.querySelector("#percentage").textContent = (rightAnswer/answer_section.childElementCount)*100 + "%";
        }
    }
    
}

submit_btn.addEventListener("click", ShowResults)
document.addEventListener("keydown", (e) => {
    if(e.key == "Enter" && questionCount == answer_section.childElementCount){
        ShowResults;
    }
})


