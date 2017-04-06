var rez=0,
    count=0;
function stopTest(){
    var i=0;
    for(i=0; i<document.getElementsByName("link").length; i++){
        if(document.getElementsByName("link")[i].checked) {
            if(i==0){
                rez+=2;
                count++;
            }
        }
    }
    for(i=0; i<document.getElementsByName("list").length; i++){
        if(document.getElementsByName("list")[i].checked) {
            if(i==2){
                rez+=2;
                count++;
            }
        }
    }
    for(i=0; i<document.getElementsByName("info").length; i++){
        if(document.getElementsByName("info")[i].checked) {
            if(i==2){
                rez+=2;
                count++;
            }
        }
    }
    for(i=0; i<document.getElementsByName("table").length; i++){
        if(document.getElementsByName("table")[i].checked) {
            if(i==1){
                rez+=1;
                count+=0.5;
            }
            else if(i==2){
                rez+=1;
                count+=0.5;
            }
        }
    }
    for(i=0; i<document.getElementsByName("form").length; i++){
        if(document.getElementsByName("form")[i].checked) {
            if(i==0){
                rez+=1;
                count+=0.5;
            }
            else if(i==1){
                rez+=1;
                count+=0.5;
            }
        }
    }
    alert('Правельных ответов '+(count/5)*100+' %. Вы набрали '+rez+' баллов!' );

}






