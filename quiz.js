var count = 0,currentQ = 0;

// Disabling other checkboxes
var ans1 = document.getElementById('ans1');
var ans2 = document.getElementById('ans2');

document.getElementById('ans1').onclick = function(){
    if(ans1.checked)
        ans2.disabled = true;
    if(!ans1.checked)
        ans2.disabled = false;       
} 


document.getElementById('ans2').onclick = function(){
    if(ans2.checked)
        ans1.disabled = true;
    if(!ans2.checked)                                               
        ans1.disabled = false;
}   

// After Submit
document.getElementById('button').onclick = function(){
    if(ans1.checked == false && ans2.checked == false){
        alert('Please select an option');
        return;
    }

    var answer = QU[currentQ].ans;
    console.log(answer);
    var ans = document.querySelector('input[type=checkbox]:checked');
    if(ans.value == answer){
        // ques.style.display = "none";
        count = count + 1;
    }
    else{
        // ques.style.display = "none";   
    }
    currentQ = currentQ + 1;
    nextquestion(currentQ);
        
}

function nextquestion(currentQ){

    ans1.checked = false;
    ans2.checked = false;
    ans1.disabled = false;
    ans2.disabled = false;

    if(currentQ == QU.length)
    {   
        var A = document.querySelector('#notbutton');
        A.style.display = 'none';
        document.querySelector('#score').textContent = 'Your Score :' + ' ' + count + ' out of ' + QU.length;
        return;
    }
    else{
    var Qno = currentQ + 1;
    document.querySelector('#Q').textContent = 'Q.' + Qno;
    document.querySelector('#QT').textContent = QU[currentQ].question;
    document.querySelector('#option1').textContent = QU[currentQ].option1;
    document.querySelector('#option2').textContent = QU[currentQ].option2;
    answer = QU[currentQ].ans;
    }
}






