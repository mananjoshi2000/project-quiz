var count = 0,currentQ = 0;
var S = 0,N = 0;

// Disabling other checkboxes
var ans1 = document.getElementById('ans1');
var ans2 = document.getElementById('ans2');

// document.getElementById('ans1').addEventListener('mouseenter',(e)=>{
//     e.target.checked = true;
// });

// document.getElementById('ans1').addEventListener('mouseleave',(e)=>{
//     e.target.checked = false;
// });

// document.getElementById('ans2').addEventListener('mouseenter',(e)=>{
//     e.target.checked = true;
// });

// document.getElementById('ans2').addEventListener('mouseleave',(e)=>{
//     e.target.checked = false;
// });

document.getElementById('playagainbutton').onclick = function(){
    currentQ = 0;
    document.getElementById('score').style.display = 'none';
    document.querySelector('#ques').style.display = 'block';
    document.getElementById('playagainbutton').style.display = 'none';
    document.getElementById('nextbutton').textContent = 'Next Question';
    nextquestion(currentQ);
    count = 0;
}  



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
document.getElementById('submitbutton').onclick = function(){
            
        if(S===N)
        {
            if(ans1.checked == false && ans2.checked == false){
                alert('Please select an option');
                return;
            }

            var answer = QU[currentQ].ans;
            //console.log(answer);
            var ans = document.querySelector('input[type=checkbox]:checked');
            if(ans.value == answer){
                document.getElementById('check').textContent = "CORRECT";  
                count = count + 1;
            }
            else{
                document.getElementById('check').textContent = "WRONG";
                // ques.style.display = "none";   
            }
            ans1.disabled = true;
            ans2.disabled = true;

            currentQ = currentQ + 1;
            S++;
        }
        else
        {
            alert("Please move to next question");
        }    
}        

// After Submit
document.getElementById('nextbutton').onclick = function(){
   
    if(S===N+1)
    {
        document.getElementById('check').textContent = "";
        N++; 
        nextquestion(currentQ);
    }
    else
    {
        alert("Please submit the answer");
    }        
}

function nextquestion(currentQ){

    ans1.checked = false;
    ans2.checked = false;
    ans1.disabled = false;
    ans2.disabled = false;

    if(currentQ == QU.length)
    {   
        document.querySelector('#ques').style.display = 'none';
        document.querySelector('#score').textContent = 'Your Score :' + ' ' + count + ' out of ' + QU.length;
        document.querySelector('#score').style.display = 'block';
        document.getElementById('playagainbutton').style.display = 'block';
    }
    else
    {
        var Qno = currentQ + 1;
        document.querySelector('#Q').textContent = 'Q.' + Qno +'.';
        document.querySelector('#QT').textContent = QU[currentQ].question;
        document.querySelector('#option1').textContent = QU[currentQ].option1;
        document.querySelector('#option2').textContent = QU[currentQ].option2;
        answer = QU[currentQ].ans;
    }
if(currentQ == QU.length - 1)
{
    document.getElementById('nextbutton').textContent = 'Finish';
}

}

window.addEventListener('mousemove',(e)=>{

    var X=Math.floor(e.offsetX/15);
   var Y=Math.floor(e.offsetY/7);
  // e.offsetT
//    var A=e.offsetX/3080 + 0.3;
//    var B=e.offsetY/1460 + 0.3;
   //console.log(X);
   document.querySelector('.image').style.backgroundImage =  `linear-gradient(to right,rgba(${X}, 20, ${Y}, 0.5),rgba(${X}, 20, ${Y}, 0.5)),url("image.jpg")`;
//    document.querySelector('.image').style.backgroundImage.transitionDelay = '0.6s'; 
    //document.querySelector('h1').textContent = e.offsetX + '&&' + e.offsetY;

});



