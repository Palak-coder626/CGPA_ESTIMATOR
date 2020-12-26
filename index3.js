const currentCGPA=document.getElementById('current_cg');
const totalPastCredits=document.getElementById('tpastcredits');
const noOfSubjects=document.getElementById('noOfSubjects');
const table=document.getElementById('grades&Credits');
const submitBtn=document.getElementById('submit');
function makeSubjectFields(){
    table.classList.remove("hidden");
    for(let i=1;i<=noOfSubjects.value;i++){
        const newRow=document.createElement('tr');
       const subjectLabel= document.createElement('td');
       subjectLabel.innerText=`SUBJECT ${i}`;
       const subjectGrade= document.createElement('td');
       const inputForGrade=document.createElement('input');
       inputForGrade.type="number";
       inputForGrade.name=`sub${i}grade`;
       inputForGrade.id=`sub${i}grade`;
       inputForGrade.value=`0`;
       subjectGrade.appendChild(inputForGrade);
       const subjectCredit=document.createElement('td');
       const inputForCredits=document.createElement('input');
       inputForCredits.type="number";
       inputForCredits.name=`sub${i}credits`;
       inputForCredits.id=`sub${i}credits`;
       inputForCredits.value=`0`;
       subjectCredit.appendChild(inputForCredits);
       newRow.appendChild(subjectLabel);
       newRow.appendChild(subjectGrade);
       newRow.appendChild(subjectCredit); 
       table.appendChild(newRow);
    }
   
}


function cg() {
    // for current cgpa and total credits cleared in past
    let currentCG = currentCGPA.value;
    let tcredits =  totalPastCredits.value;
    let noOfFields = noOfSubjects.value;

    //    object for subjectwise grade points
let subjectsGrades={};
    //    object for subjectwise credits
let subjectsCredits={};

for(let i=1;i<=noOfFields;i++){
subjectsGrades[`sub${i}grade`]=document.getElementById(`sub${i}grade`).value;
}

for(let i=1;i<=noOfFields;i++){
    subjectsCredits[`sub${i}credits`]=document.getElementById(`sub${i}credits`).value;
 }
    
let totalcred=Number(tcredits);
let weightedcredits= (currentCG*tcredits);
for(let i=1;i<=noOfFields;i++){
    totalcred+= Number(subjectsCredits[`sub${i}credits`]);
    weightedcredits+=(Number(subjectsGrades[`sub${i}grade`])*(subjectsCredits[`sub${i}credits`]));
}

 let expected_cg = weightedcredits/totalcred;
 alert('Your Expected CGPA is ' + expected_cg.toFixed(2));
}

// event Listener
noOfSubjects.addEventListener('input',makeSubjectFields);
submitBtn.addEventListener('click',cg);