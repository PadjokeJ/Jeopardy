gameState = 0;

fetch("./questions.json")
  .then((response) => response.json())
  .then((json) => {
    for (i in json.Categories) {
      board_div = document.getElementById("board");
      console.log(i);
      
      col = document.createElement("div");
      col.id = i;
      col.classList.add("category");

      board_div.append(col);

      current = json["Categories"][i];
      for (j in current) {
        console.log(current[j]);

        question = document.createElement("button");
        question.id = i + "_" + j;
        question.classList.add("questbutton");
        question.value = j;

        text = document.createElement("p");
        text.style.display = "none";
        text.id = i + "_" + j + "_q";
        text.innerText = current[j];

        ans = document.createElement("p");
        ans.style.display = "none";
        ans.id = i + "_" + j + "_a";

        question.append(text);
        question.append(ans);
        col.append(question);

        question.addEventListener("click", (event) => {
          id = event.target.id;
          qval = document.getElementById(id + "_q").innerText;
          aval = document.getElementById(id + "_a").innerText;

          document.getElementById(question).innerText = qval;
          document.getElementById(answer).innerText = aval;
        });
      }
    }
  });
