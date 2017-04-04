var  rez=0,
    q1=document.getElementsByName('link')[0],
    q2=document.getElementsByName('list')[2],
    q3=document.getElementsByName('info')[2];
q1.addEventListener('click', questions);
q2.addEventListener('click', questions);
q3.addEventListener('click', questions);
function questions(){
    if(rez==0){
        rez+=2;
    }
    console.log('клик по кнопки'+rez);

}


