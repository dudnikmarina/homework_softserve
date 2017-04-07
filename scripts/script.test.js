var answer = 0,
    ball=0,
    button = document.getElementById("input"),
    questionsQuantity = document.getElementsByClassName("question").length,
    q1 = document.getElementsByName("link"),
    q2 = document.getElementsByName("list"),
    q3 = document.getElementsByName("info"),
    q4 = document.getElementsByName("table"),
    q5 = document.getElementsByName("form");
button.onclick = function() {
    if (q1[0].checked) {
        answer++;
        ball+=2;
    }
    if (q2[2].checked) {
        answer++;
        ball+=2;
    }
    if (q3[3].checked) {
        answer++;
        ball+=2;
    }
    if (q4[1].checked && q4[2].checked && !q4[0].checked && !q4[3].checked) {
        answer++;
        ball+=2;
    }
    if (q5[0].checked && q5[1].checked && !q5[2].checked && !q5[3].checked) {
        answer++;
        ball+=2;
    }
    alert("Вы набрали " + ball +
    " балл. Процент правильных ответов - " + ((answer/5)*100+"%"));
    answer = 0;
    ball=0;
}






