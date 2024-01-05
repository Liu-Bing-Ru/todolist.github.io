let button = document.querySelector("form button");
let section = document.querySelector("section");
button.addEventListener("click", (e) => {
  //先讓東西不要被提交
  e.preventDefault();
  //console.log(e);
  //console.log(e.target.parentElement); //form
  let information = e.target.parentElement;
  let text = information.children[0].value;
  let hour = information.children[1].value;
  let min = information.children[2].value;
  //console.log(text, hour, min);
  //創造新的東西 按下去當下
  //document
  let todo = document.createElement("div");
  //classList 記得+add
  todo.classList.add("Todo");
  //todo text
  let todo_text = document.createElement("p");
  todo_text.classList.add("Text");
  //innerText
  todo_text.innerText = text;
  //to do time
  let todo_time = document.createElement("p");
  todo_time.classList.add("Time");
  todo_time.innerText = hour + "/" + min;
  //把他們倆個放在todo裡面
  todo.appendChild(todo_text);
  todo.appendChild(todo_time);
  //加入check
  let check = document.createElement("button");
  check.classList.add("Check");
  check.innerHTML = '<i class="fa-solid fa-check"></i>';
  todo.appendChild(check);
  //加入garbage can
  let trash = document.createElement("button");
  trash.classList.add("Trash");
  trash.innerHTML = '<i class="fa-sharp fa-solid fa-trash"></i>';
  todo.appendChild(trash);
  //記得加入搜尋section的define
  check.addEventListener("click", (e) => {
    //console.log(e.target.parentElement); //todo
    let wanted = e.target.parentElement;
    wanted.classList.toggle("done");
    //先寫add 變成不同的class
  });
  trash.addEventListener("click", (e) => {
    let wanted = e.target.parentElement;
    wanted.addEventListener("animationend", () => {
      wanted.remove();
    });
    todo.style.animation = "showdown 0.2s forwards";
  });
  //動畫在style裡面
  todo.style.animation = "showup 1s forwards"; //向前
  section.appendChild(todo);
});
//這邊寫check
//section這個標籤
//嘗試寫在外面 =>錯誤的 放在外面，所有的代辦清單的button都會享有同一套規則
// 當嘗試刪除一個代辦清單 就會全部刪掉
//如果放在裡面就等於 每一個object都是獨立的
/*
當我按下button => 創在一個獨立的 todo list 然後就會開始監聽

*/
/*let check = section.querySelector(".Check");
check.addEventListener("click", (e) => {
  console.log(e);
});*/
