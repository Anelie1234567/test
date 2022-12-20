let question_arr = ["«Самостійники» були ініціаторами","Однією з характерних рис соціально-економічного розвитку УРСР на початку 1980-х рр. було", "Походи на Константинополь у 907 р. та 911 р. здійснив київський князь", "Яке удільне князівство у XII–XIII ст. політично цілком залежало від Києва?", "На який регіон України в 1783 р. було поширено кріпосне право?"]
let a1_arr = ["виступу «полуботківців»","скорочення соціальних видатків","Олег","Галицьке","Лівобережжя"]
let a2_arr = ["гетьманського перевороту","впровадження фермерських господарств на селі","Ігор","Новгород-Сіверське","Галичину"]
let a3_arr = ["створення Української Центральної Ради","зростання дефіциту товарів широкого вжитку","Святослав","Чернігівське","Поділля"]
let a4_arr = ["скликання Всеукраїнського національного конгресу","згортання ринкових механізмів управління економікою","Ярослав Мудрий","Переяславське","Волинь"]
let answer_arr = ["виступу «полуботківців»","зростання дефіциту товарів широкого вжитку","Олег","Переяславське","Лівобережжя"]
let n_right_answer_arr = [2,2,1,1,2]
// let n_right_answer = 1;
let right_answers = 0;
let n_answer = 4;

question.innerHTML=question_arr[n_question.value];
a1.innerHTML = a1_arr[n_question.value];
a2.innerHTML = a2_arr[n_question.value];
a3.innerHTML = a3_arr[n_question.value];
a4.innerHTML = a4_arr[n_question.value];
answer.innerHTML = answer_arr[n_question.value];

n_right_answer = n_right_answer_arr[n_question.value];
console.log(n_question.value)
btn.addEventListener("click", f_out);
btn1.addEventListener("click", f_out1);
btn2.addEventListener("click", f_out2);
  function f_out (){
        console.log(y1.checked);
        console.log(y2.checked);
        console.log(y3.checked);
        console.log(y4.checked);

        if (y1.checked){ n_a = 1;}
        if (y2.checked){ n_a = 2;}
        if (y3.checked){ n_a = 3;}
        if (y4.checked){ n_a = 4;}
        console.log(n_a);
        
        if (n_a == n_right_answer){
        right_answers += 1;
        right_div.classList.remove("hidden");
        wrong_div.classList.add("hidden");
        console.log("n_question.value = "+n_question.value);
        console.log("n_answer = "+n_answer);
        if (n_question.value == n_answer){
            btn2.classList.add("hidden");
            let el1 = document.createElement("p");
            el1.innerHTML = "<b>"+right_answers+"</b>";
            right_div.appendChild(el1);
        }
        }
        else{
        right_answers-=1;
        right_div.classList.add("hidden");
        wrong_div.classList.remove("hidden");
        }
  }
  function f_out1 (){
    answer.classList.toggle("hidden");
    btn1.classList.toggle("opend");
  }
  function f_out2 (){
    right_div.classList.add("hidden");
    k = Number(n_question.value);
    k+=1;
    n_question.value = k;
    console.log(n_question)
    question.innerHTML=question_arr[n_question.value];
    a1.innerHTML = a1_arr[n_question.value];
    a2.innerHTML = a2_arr[n_question.value];
    a3.innerHTML = a3_arr[n_question.value];
    a4.innerHTML = a4_arr[n_question.value];
    answer.innerHTML = answer_arr[n_question.value];
    
    n_right_answer =n_right_answer_arr[n_question.value];
    
  }
