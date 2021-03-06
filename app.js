// English Story
/*^*^*^*^*^*^*^*
app.js
The main code for English Story.
*^*^*^*^*^*^*^*/

// Variables
let currentScene = "Tyler's Room";
let inventory = [];

// Update the scene
function updateScene(scene) {
  let sceneData = data[scene];

  // Create the description
  let description = document.getElementById("description");
  description.innerText = sceneData.description;

  // Wipe the options
  document.getElementById("option1").style.display = "none";
  document.getElementById("option2").style.display = "none";
  document.getElementById("option3").style.display = "none";
  document.getElementById("option4").style.display = "none";

  // Add the options
  for (var i = 0; i < sceneData.options.length; i++) {
    if (sceneData.options[i].hasOwnProperty("item")) {
      if (inventory.includes(sceneData.options[i].item)) {
        let option = document.getElementById(`option${i + 1}`);
        option.style.display = "block";
        option.innerText = sceneData.options[i].name;
        option.sceneId = i;
        option.onclick = () => {
          updateScene(sceneData.options[option.sceneId].location);
        }
      }
    } else {
      let option = document.getElementById(`option${i + 1}`);
      option.style.display = "block";
      option.innerText = sceneData.options[i].name;
      option.sceneId = i;
      option.onclick = () => {
        updateScene(sceneData.options[option.sceneId].location);
      }
    }
  }

  // Collect the item if there is one
  if (sceneData.hasOwnProperty("item")) {
    alert(`You now have a ${sceneData.item}!`);
    inventory.push(sceneData.item);
    console.log(inventory);
  }
}
updateScene(currentScene);
