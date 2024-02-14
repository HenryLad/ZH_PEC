function Header() {
   var header = document.getElementById("Header");
   var HeaderInput = document.getElementById("HeaderInput");
   
   if (HeaderInput.value == "") {
      alert("Please enter a header");
      return;
   }
   
   var validEvents = ["100m Sprint", "Weitsprung", "Kugelstoßen", "Hochsprung", "400m Sprint", "110m Hürden", "Diskus", "Stabhochsprung", "Speerwurf", "1500m Lauf"];
   
   if (!validEvents.includes(HeaderInput.value)) {
      alert("Please enter a valid event");
      return;
   }
   header.innerHTML = `
   <h1>${HeaderInput.value}</h1>
   `;
}
function CalPoints100() {
   var pointList = document.getElementById("pointList");
   var calInput = document.getElementById("calInput");
   var headerinput = document.getElementById("HeaderInput");

   if (calInput.value == "") {
      alert("Please enter a time");
      return;
   }
   switch(headerinput.value) {
      case"100m Sprint":
      pointList.innerHTML = `
      <li>The Athlete achvied a total of ${calculatePointsForRunning(25.4347, 18.0, 1.81, calInput.value)}</li>
      `;
      break;
      case"Weitsprung":
      pointList.innerHTML = `
      <li>The Athlete achvied a total of ${calculatePointsForJumpThrow(0.14354, 220, 1.40, calInput.value)}</li>
      `;
      break;
      case"Kugelstoßen":
      pointList.innerHTML = `
      <li>The Athlete achvied a total of ${calculatePointsForJumpThrow(51.39, 1.5, 1.05, calInput.value)}</li>
      `;
      break;
      case"Hochsprung":
      pointList.innerHTML = `
      <li>The Athlete achvied a total of ${calculatePointsForJumpThrow(0.8465, 75, 1.42, calInput.value)}</li>
      `;
      break;
      case"400m Sprint":
      pointList.innerHTML = `
      <li>The Athlete achvied a total of ${calculatePointsForRunning(1.53775, 82, 1.81, calInput.value)}</li>
      `;
      break;
      case"110m Hürden":
      pointList.innerHTML = `
      <li>The Athlete achvied a total of ${calculatePointsForRunning(5.74352, 28.5, 1.92, calInput.value)}</li>
      `;
      break;
      case"Diskus":
      pointList.innerHTML = `
      <li>The Athlete achvied a total of ${calculatePointsForJumpThrow(12.91, 4.0, 1.1, calInput.value)}</li>
      `;
      break;
      case"Stabhochsprung":
      pointList.innerHTML = `
      <li>The Athlete achvied a total of ${calculatePointsForJumpThrow(0.2797, 100, 1.35, calInput.value)}</li>
      `;
      break;
      case"Speerwurf":
      pointList.innerHTML = `
      <li>The Athlete achvied a total of ${calculatePointsForJumpThrow(10.14, 7.0, 1.08, calInput.value)}</li>
      `;
      break;
      case"1500m":
      pointList.innerHTML = `
      <li>The Athlete achvied a total of ${calculatePointsForRunning(0.03768, 480, 1.85, calInput.value)}</li>
      `;
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
