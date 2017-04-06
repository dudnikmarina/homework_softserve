var ball=0,
    answer=0;
function stopTest(){
    var i=0;
    for(i=0; i<document.getElementsByName("link").length; i++){
        if(document.getElementsByName("link")[i].checked) {
            if(i==0){
                ball+=2;
                answer++;
            }
        }
    }
    for(i=0; i<document.getElementsByName("list").length; i++){
        if(document.getElementsByName("list")[i].checked) {
            if(i==2){
                ball+=2;
                answer++;
            }
        }
    }
    for(i=0; i<document.getElementsByName("info").length; i++){
        if(document.getElementsByName("info")[i].checked) {
            if(i==2){
                ball+=2;
                answer++;
            }
        }
    }
    for(i=0; i<document.getElementsByName("table").length; i++){
        if(document.getElementsByName("table")[i].checked) {
            if(i==1){
            }
            else if(i==2){
            }
        }
        ball+=2;
        answer++;
    }

    for(i=0; i<document.getElementsByName("form").length; i++){
        if(document.getElementsByName("form")[i].checked) {
            if(i==0) {
            }
            else if(i==1){

            }
        }
        ball+=2;
        answer++;
    }
    alert('Правельных ответов '+(answer/5)*100+' %. Вы набрали '+ ball+' баллов!' );

}






