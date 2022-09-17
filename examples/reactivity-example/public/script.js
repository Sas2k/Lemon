//from the input field take the value and replace the text in text-output with it
let changetext = () => {
    data.message = document.getElementById("text").value;
}

function updateText() {
  document.getElementById("text-output").innerText = data.message;
}

watcher(updateText)