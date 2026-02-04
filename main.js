gameState = 0;

fetch("./questions.json")
  .then((response) => response.json())
  .then((json) => {
    for (i in json.Categories) {
      board_div = document.getElementById("board");
      console.log(i);
      current = json["Categories"][i];
      for (j in current) {
        console.log(current[j]);
      }
    }
  });
