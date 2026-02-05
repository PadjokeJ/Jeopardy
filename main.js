gameState = 0;

fetch("./questions.json")
  .then((response) => response.json())
  .then((json) => {
    for (i in json.Categories) {
      console.log(i);
      board_div = document.getElementById("board");
      
      col = document.createElement("div");
      col.id = i;
      col.classList.add("category");

      p = document.createElement("p");
      p.id = i + "_p";
      p.classList.add("category_header");
      p.innerText = i;

      col.append(p);
      board_div.append(col);

      current = json["Categories"][i];
      console.log(current);
      for (j in current) {
        question = document.createElement("button");
        question.id = i + "_" + j;
        question.classList.add("questbutton");
        question.innerText = j;

        text = document.createElement("p");
        text.style.display = "none";
        text.id = i + "_" + j + "_q";
        text.innerText = current[j]["question"];

        ans = document.createElement("p");
        ans.style.display = "none";
        ans.id = i + "_" + j + "_a";
        ans.innerText = current[j]["answer"];

        question.append(text);
        question.append(ans);
        col.append(question);

        question.addEventListener("click", (event) => {
          id = event.target.id;
          document.getElementById(id).classList.add("complete");
          document.getElementById(id).disabled = true;
          qval = document.getElementById(id + "_q").innerText;
          aval = document.getElementById(id + "_a").innerText;

          document.getElementById("question").innerText = qval;
          document.getElementById("answer").innerText = aval;

          document.getElementById("question").classList.toggle("show");
        });
      }
    }
  });

document.getElementById("question").addEventListener("click", (event) => {
  ques = document.getElementById("question");
  if (ques.classList.contains("show")) {
    ques.classList.toggle("show");
    document.getElementById("answer").classList.toggle("show");
  }
});

document.getElementById("answer").addEventListener("click", (event) => {
  document.getElementById("answer").classList.toggle("show");
});

