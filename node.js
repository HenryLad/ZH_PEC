function Header() {
   var header = document.getElementById("Header");
   var HeaderInput = document.getElementById("HeaderInput");
   var selcetion = document.getElementById("Selection");
   
   if (selcetion.value == "") {
      alert("Please enter a header");
      return;
   }
   
   var validEvents = ["100m Sprint (Sekunden)", "Weitsprung (Zentimeter)", "Kugelstoßen (Meter)", "Hochsprung (Zentimeter)", "400m Sprint (Sekunden)", "110m Hürden (Sekunden)", "Diskus (Meter)", "Stabhochsprung (Zentimeter)", "Speerwurf (Meter)", "1500m Lauf (Sekunden)"];
   
   if (!validEvents.includes(selcetion.value)) {
      alert("Please enter a valid event");
      return;
   }
   header.innerHTML = `
   <h1>${selcetion.value}</h1>
   `;
   selcetion.value = " ";

   
}
function selectAsHeaderInput(element) {
   var HeaderInput = document.getElementById("HeaderInput");
   var selcetion = document.getElementById("Selection");
   selcetion.value = element.innerText;
   
 }
function CalPoints100() {
   var pointList = document.getElementById("pointList");
   var calInput = document.getElementById("calInput");
   var headerinput = document.getElementById("Selection");

   if (calInput.value == "") {
      alert("Please enter a time");
      return;
   }
   switch(headerinput.value) {
      case"100m Sprint (Sekunden)":
      pointList.innerHTML = `
      <li>The Athlete achvied a total of ${calculatePointsForRunning(25.4347, 18.0, 1.81, calInput.value)}</li>
      `;
      Points += calculatePointsForRunning(25.4347, 18.0, 1.81, calInput.value);
      break;
      case"Weitsprung (Zentimeter)":
      pointList.innerHTML = `
      <li>The Athlete achvied a total of ${calculatePointsForJumpThrow(0.14354, 220, 1.40, calInput.value)}</li>
      `;
      Points += calculatePointsForJumpThrow(0.14354, 220, 1.40, calInput.value);
      break;
      case"Kugelstoßen (Meter)":
      pointList.innerHTML = `
      <li>The Athlete achvied a total of ${calculatePointsForJumpThrow(51.39, 1.5, 1.05, calInput.value)}</li>
      `;
      Points += calculatePointsForJumpThrow(51.39, 1.5, 1.05, calInput.value);
      break;
      case"Hochsprung (Zentimeter)":
      pointList.innerHTML = `
      <li>The Athlete achvied a total of ${calculatePointsForJumpThrow(0.8465, 75, 1.42, calInput.value)}</li>
      `;
      Points += calculatePointsForJumpThrow(0.8465, 75, 1.42, calInput.value);
      break;
      case"400m Sprint (Sekunden)":
      pointList.innerHTML = `
      <li>The Athlete achvied a total of ${calculatePointsForRunning(1.53775, 82, 1.81, calInput.value)}</li>
      `;
      Points += calculatePointsForRunning(1.53775, 82, 1.81, calInput.value);
      break;
      case"110m Hürden (Sekunden)":
      pointList.innerHTML = `
      <li>The Athlete achvied a total of ${calculatePointsForRunning(5.74352, 28.5, 1.92, calInput.value)}</li>
      `;
      Points += calculatePointsForRunning(5.74352, 28.5, 1.92, calInput.value);
      break;
      case"Diskus (Meter)":
      pointList.innerHTML = `
      <li>The Athlete achvied a total of ${calculatePointsForJumpThrow(12.91, 4.0, 1.1, calInput.value)}</li>
      `;
      Points += calculatePointsForJumpThrow(12.91, 4.0, 1.1, calInput.value);
      break;
      case"Stabhochsprung (Zentimeter)":
      pointList.innerHTML = `
      <li>The Athlete achvied a total of ${calculatePointsForJumpThrow(0.2797, 100, 1.35, calInput.value)}</li>
      `;
      Points += calculatePointsForJumpThrow(0.2797, 100, 1.35, calInput.value);
      break;
      case"Speerwurf (Meter)":
      pointList.innerHTML = `
      <li>The Athlete achvied a total of ${calculatePointsForJumpThrow(10.14, 7.0, 1.08, calInput.value)}</li>
      `;
      Points += calculatePointsForJumpThrow(10.14, 7.0, 1.08, calInput.value);
      break;
      case"1500m Lauf (Sekunden)":
      pointList.innerHTML = `
      <li>The Athlete achvied a total of ${calculatePointsForRunning(0.03768, 480, 1.85, calInput.value)}</li>
      `;
      Points += calculatePointsForRunning(0.03768, 480, 1.85, calInput.value);
      break;
      
   }
}
function calculatePointsForRunning(A, B, C, x) {
   return A * Math.pow((B - x), C);
}

// Funktion zur Berechnung von Punkten für Wurf- und Sprungwettbewerbe
function calculatePointsForJumpThrow(A, B, C, x) {
   return A * Math.pow((x - B), C);
}
var Points = 0;
let AlrPlayer = [];
let i = 0;
function Ath() {
   var ath = document.getElementById("Ath");
   var athInput = document.getElementById("AthInput");
   var Ranking = document.getElementById("Ranking");
   var Points = 100; // Example value, replace it with your actual points
   if (ath.value == " ") {
       alert("Please enter a name");
       return;
   }   
   athInput.innerHTML   = `
<li> 
   <div class="card text-bg mb-3" style="max-width: 18rem;">
       <div class="card-header">Athlete</div>
       <div class="card-body">
           <h5 class="card-title">${ath.value}</h5>
           <p class="card-text">${ath.value} achieved a total of ${Points} Points</p>
       </div>
   </div>
</li>
   `;
   
   if(AlrPlayer.includes(ath.value)){alert("You can't add a Player twice");}
   else{ AlrPlayer.push(ath.value); i++;
   Ranking.innerHTML += `
   <td>${ath.value}</td> <td>${Points} Points</td>
   `;
   ath.value = " ";
}
}

function writeJson(){
   alert("Not yet implemented");
}
function readJson(){
   alert("Not yet implemented");
}