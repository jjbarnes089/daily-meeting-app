// let incButton = document.getElementById("increment-btn");
// let saveButton = document.getElementById("save-btn");
// let entries = document.querySelector(".entries");
// let countEL = document.getElementById("count-el");
// let count = 0;
// //let save = 0;

// incButton.addEventListener("click", function () {
//   document.getElementById("count-el").innerText = ++count;
// });

// // saveButton.addEventListener("click", function () {
// //   let countStr = count + " - ";
// //   entries.textContent += countStr;
// //   countEL.textContent = 0;
// //   count = 0;
// //   //   document.getElementById("count-el");
// //});
// saveButton.addEventListener("click", function () {
//   if (count > 0) {
//     // Optionally check to avoid saving zero counts
//     let countStr = document.createElement("span");
//     countStr.textContent = count + " - "; // Appending count with dash
//     entries.appendChild(countStr); // Append the span to entries
//   }
//   countEL.innerText = 0; // Reset display count
//   count = 0; // Reset count
// });

// let resetButton = document.getElementById("reset-btn");
// resetButton.addEventListener("click", function () {
//   entries.textContent = ""; // Clear saved entries
//   count = 0; // Reset count
//   countEL.innerText = 0; // Reset displayed count
// });
let incButton = document.getElementById("increment-btn");
let saveButton = document.getElementById("save-btn");
let entryContainer = document.getElementById("entry-container"); // Updated to use new container
let countEL = document.getElementById("count-el");
let count = 0;

incButton.addEventListener("click", function () {
  countEL.innerText = ++count;
});

saveButton.addEventListener("click", function () {
  if (count > 0) {
    // Optionally check to avoid saving zero counts
    // Get the current date
    let currentDate = new Date().toLocaleString(); // Format: mm/dd/yyyy, hh:mm:ss AM/PM format
    let entry = document.createElement("div"); // Create a new div for each entry

    // Create a span for count
    let countSpan = document.createElement("span");
    countSpan.textContent = "Entries: " + count + " - "; // Prepend "Entries" to the count
    countSpan.className = "count-entry"; // Add a class for styling

    // Create a span for date
    let dateSpan = document.createElement("span");
    dateSpan.textContent = currentDate; // Save date
    dateSpan.className = "date-entry"; // Add a class for styling

    entry.appendChild(countSpan); // Append count to entry
    entry.appendChild(dateSpan); // Append date to entry

    entryContainer.appendChild(entry); // Append to the new container
  }
  countEL.innerText = 0; // Reset display count
  count = 0; // Reset count
});

document.getElementById("reset-btn").addEventListener("click", function () {
  entryContainer.innerHTML = ""; // Clear saved entries
  count = 0; // Reset count
  countEL.innerText = 0; // Reset displayed count
});
