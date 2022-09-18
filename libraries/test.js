//Array Counts

let answer = new Array(PossibleQuestions);
let PossibleQuestions = new Array(18);

let PossibleQuestionsCount = 16;

//Answers to each question held

PossibleQuestions[0] = questions.json(recordset[0]);
PossibleQuestions[1] = questions.json(recordset[1]);
PossibleQuestions[2] = questions.json(recordset[2]);
PossibleQuestions[3] = questions.json(recordset[3]);
PossibleQuestions[4] = questions.json(recordset[4]);
PossibleQuestions[5] = questions.json(recordset[5]);
PossibleQuestions[6] = questions.json(recordset[6]);
PossibleQuestions[7] = questions.json(recordset[7]);
PossibleQuestions[8] = questions.json(recordset[8]);
PossibleQuestions[9] = questions.json(recordset[9]);
PossibleQuestions[10] = questions.json(recordset[10]);
PossibleQuestions[11] = questions.json(recordset[11]);
PossibleQuestions[12] = questions.json(recordset[12]);
PossibleQuestions[13] = questions.json(recordset[13]);
PossibleQuestions[14] = questions.json(recordset[14]);
PossibleQuestions[15] = questions.json(recordset[15]);
PossibleQuestions[16] = questions.json(recordset[16]);
PossibleQuestions[17] = questions.json(recordset[17]);
PossibleQuestions[18] = questions.json(recordset[18]);

answer[0] = "Software", "Paint", "Metal pieces", "Paint", "Electrical components", "Robot structures", "Number of people", "Injuries";
answer[1] = "Personal Protective Equipment", "Purposeful Protective Equipment", "Potentially Protective Equipment", "Personal Protective Essentials", "Potentially Protecive Essentials", "Purposeful Proper Equipment";
answer[2] = "";
answer[3] = "";
answer[4] = "";
answer[5] = "A fire extingisher", "A bag of chips", "Electricity", "";
answer[6] = "Material Safety Data Sheet", "Modem Software Delivery System", "Mechanical System Distribution Safety", "Mostly Simpleminded Derpy Students", "Modified Security Derivitive System", "Mechanized Software Distribution Safety";
answer[7] = "";
answer[8] = "";
answer[9] = "";
answer[10] = "When you are scared", "When it requires electricity", "When it is sharp", "When others aren't using it", "When it is broken";
answer[11] = "";
answer[12] = "";
answer[13] = "";
answer[14] = "";
answer[15] = "";
answer[16] = "";
answer[17] = "";
answer[18] = "";

let score = 0;

//Save Username in index.html
function saveUser() {
    
    var usernameinput = document.getElementById("user").value;

    //Returns error if box is empty
    if(usernameinput == ""){
        document.getElementById("MainHeadingBox").innerHTML = "Please enter a valid username";
        setTimeout(function(){
            document.getElementById("MainHeadingBox").innerHTML = "Enter FULL Name in Input Box";
        }, 3000);

        //Checks if the username contains a space
    }else if(usernameinput.includes(" ") == false) {
        document.getElementById("MainHeadingBox").innerHTML = "Your username MUST contain a space.";
        setTimeout(function(){
            document.getElementById("MainHeadingBox").innerHTML = "Enter FULL Name in Input Box";
        }, 3000);

        //If the username is valid
    }else{
    //Saves user in local storage for test firebase
    username = document.getElementById("user").value;
    localStorage.setItem("username", username);
    window.location = "MainSafetyTest/safetytest.html";
    }
}





//Random Questions Function
function QuestionRan(array) {
        let currentIndex = array.length, randomIndex;
      
        // While there remain elements to shuffle.
        while (currentIndex != 0) {
      
          // Pick a remaining element.
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // And swap it with the current element.
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
      
    return array;
}

//Redeclare function to run
QuestionRan(PossibleQuestions);




//Calculating the total score
function QuestionCor() {

    const AddQuestions = document.getElementById("Questions1");

    //Checks if the answer is correct
    //if (PossibleQuestions.answer = fs.readFileSync("corectans.txt")) {
      //  score = score + 0.25;
    //}

    //Replaces the scoreboard
    if (document.getElementById("scoringdiv")) {
        document.getElementById("scoringdiv").remove();
    }

    //Store in a JSON file

    //Items to store in JSON file
    let jsonname = localStorage.getItem("username");
    
    let namefirst = jsonname.split(" ")[0];
    let namelast = jsonname.split(" ")[1];

    let jsonteam = localStorage.getItem("team");

    //Storing in JSON file
    let overallScore = {
        "name": namelast + ", " + namefirst,
        "team": jsonteam,
        "score": score
    }

    //Amending the JSON file
    let data = JSON.stringify(overallScore);

    if (data.name == overallScore.name) {

    }

    //Username
    var user = localStorage.getItem("username");

    //Score Div
    let scorediv = document.createElement("div");
    scorediv.id = "scoringdiv";
    scorediv.style = "font-size: 20px; color: white; text-align: center; margin-top: 20px;";
    AddQuestions.appendChild(scorediv);
    const scoredivid = document.getElementById(scorediv.id);

    //Username in Test
    const name = document.createElement("h1");
    name.style = "font-size: 40px; color: black; text-align: center; position: absolute; top: 2%; left: 20%;"
    name.innerHTML = user + "'s Score is:";
    scoredivid.appendChild(name);

    //Score H1
    const scoreh1 = document.createElement("h1");
    scoreh1.innerHTML = "Score: " + score;
    scoreh1.style = "font-size: 100px; color: black; text-align: center; position: absolute; top: 30%; left: 5%;"
    scoredivid.appendChild(scoreh1);
}



//Clear all inputs
function Clear() {
    document.querySelectorAll('input[type="checkbox"]').forEach(el => el.checked = false);
}



//Preset Variables
let ArrayCount = 0;
let QuestionCount = 1;
let QuestionArrayAt = 0;

let ArrayAnsRan = Math.floor(Math.random() * 4);



//Question Creation Function
function QuestionCreate() {

    const AddQuestions = document.getElementById("Questions1");

    //for loop to create questions answers
    for (let i = 0; i < PossibleQuestionsCount; i++) {
        var divid = "Question_" + QuestionArrayAt;
        
        //Creates a new div for each question
        let AddQuestionsDiv = document.createElement("div");
        AddQuestionsDiv.className = "form-group col-lg-4 col-md-3 col-sm-4 col-xs-1 q_div";
        AddQuestionsDiv.id = divid;

        AddQuestions.appendChild(AddQuestionsDiv);
        

        //Get the id from "AddQuestionsDiv1"
        let AddQuestionsDiv1 = document.getElementById(AddQuestionsDiv.id);

        //Br tags for spacing
        var br1 = document.createElement("br");
        var br2 = document.createElement("br");
        AddQuestions.appendChild(br1, br2);


        //Creates a new label for each question
        let H1Num = document.createElement("h1");
        H1Num.innerHTML = QuestionCount + ". " + PossibleQuestions[ArrayCount];
        H1Num.style = "color: black; font-size: 20px; font-family: 'Times New Roman', sans-serif; font-weight: 300; text-align: left;";

        if (H1Num.innerHTML == PossibleQuestions) {

        }

        AddQuestionsDiv1.appendChild(H1Num);


        //Creates a new spacing for each question
        const br = document.createElement("br");

        AddQuestionsDiv1.appendChild(br);


        //Updating Variables
        ArrayCount = ArrayCount + 1;
        QuestionCount = QuestionCount + 1;


            //Inputs
            for (let j = 0; j < 4; j++) {

                //Creates a new span for each answer

                let AddSpan = document.createElement("span");
                AddSpan.id = "Answer_" + QuestionArrayAt + "_" + j;

                AddQuestionsDiv1.appendChild(AddSpan);

                AddSpanId = document.getElementById(AddSpan.id);


                //Checkboxes
                let Checkboxes = document.createElement('input');
                Checkboxes.id = "PQ" + QuestionArrayAt + "_" + j;
                Checkboxes.type = "checkbox";
                Checkboxes.style = "float: left;";

                AddSpanId.appendChild(Checkboxes); 

                let h1a = document.createElement("h1");
                h1a.innerHTML = answer[0];
                AddSpanId.appendChild(h1a); 

                
                Checkboxesid = Checkboxes.id;

                //Input Labels

            }
            QuestionArrayAt = QuestionArrayAt + 1;

        }
    }
    