// JavaScript Document

// Author: Trevor Smith


// Function to handle recalculations on resize
function handleResize() {
   // Recalculate and redraw the chart
   calculateMedSupp();
}

// Add resize event listener
window.addEventListener("resize", handleResize);


// Function to update slider values
function updateSliderValue(sliderId) {
   const value = document.getElementById(sliderId).value;
   let displayValue = value;

   if (
      sliderId === "avgContract"
      || sliderId === "avgPersistency"
      || sliderId === "avgGrowth"
   ) {
      displayValue += "%";
   } else if (sliderId === "avgPremium") {
      displayValue = "$" + parseFloat(value.replace(/[^0-9.]/g, '') || 0).toLocaleString();
   }

   document.getElementById(sliderId + "Value").innerText = displayValue;
}

let compChartInstance;

// Main calculation function
function calculateMedSupp() {
   const avgPremium = parseFloat(
      document.getElementById("avgPremium").value.replace(/[^0-9.]/g, "")
   ) || 0;
   const avgContract = parseFloat(
      document.getElementById("avgContract").value.replace(/[^0-9.]/g, "")
   ) || 0;
   const appsPerMonth = parseFloat(
      document.getElementById("appsPerMonth").value.replace(/[^0-9.]/g, "")
   ) || 0;
   const monthsOfProduction = parseFloat(
      document.getElementById("monthsOfProduction").value.replace(/[^0-9.]/g, "")
   ) || 0;
   const avgPersistency = parseFloat(
      document.getElementById("avgPersistency").value.replace(/[^0-9.]/g, "")
   ) || 0;
   const avgGrowth = parseFloat(
      document.getElementById("avgGrowth").value.replace(/[^0-9.]/g, "")
   ) || 0;
   const years = parseInt(
      document.getElementById("yearsSlider").value.replace(/[^0-9]/g, "")
   ) || 0;

   document.getElementById("yearOutputs").innerHTML = "";

   const yearLabels = [];
   const yearData = [];
   const table = document.createElement("table");
   table.classList.add("output-table");
   table.innerHTML = "<tr><th>Year</th><th>Total Compensation</th></tr>";

   for (let i = 1; i <= years; i++) {
      const yearRev = computeYearRev(
         i,
         avgPremium,
         appsPerMonth,
         monthsOfProduction,
         avgGrowth,
         avgPersistency,
         avgContract
      );

      yearLabels.push("Year " + i);
      yearData.push(parseFloat(yearRev.replace(/,/g, "")));

      const row = document.createElement("tr");
      row.innerHTML = `<td>${i}</td><td>$${yearRev}</td>`;
      table.appendChild(row);
   }

   document.getElementById("yearOutputs").appendChild(table);

   if (compChartInstance) {
      compChartInstance.destroy();
   }

   const ctx = document.getElementById("compChart").getContext("2d");
   compChartInstance = new Chart(ctx, {
      type: "bar",
      data: {
         labels: yearLabels,
         datasets: [{
            label: "$ USD",
            data: yearData,
            backgroundColor: ['#e3f2fd'],
            borderColor: ['#2196f3'],
            borderWidth: 1,
         }, ],
      },
      options: {
         responsive: true,
         aspectRatio: 1,
         scales: {
            y: {
               beginAtZero: true,
            },
         },
      },
   });
}

// Attach event listeners to inputs
function initializeInputs() {
   const inputIds = [
      "avgPremium",
      "avgContract",
      "appsPerMonth",
      "monthsOfProduction",
      "avgPersistency",
      "avgGrowth",
      "yearsSlider",
   ];

   inputIds.forEach((id) => {
      const input = document.getElementById(id);
      input.addEventListener("input", () => {
         calculateMedSupp();
         if (id === "avgPremium") {
            updateSliderValue("avgPremium");
         }
      });
   });
}

// Format revenue with commas and decimals
function computeYearRev(
   year,
   avgPremium,
   appsPerMonth,
   monthsOfProduction,
   avgGrowth,
   avgPersistency,
   avgContract
) {
   let rev =
      appsPerMonth * monthsOfProduction * (avgPremium * (avgContract / 100));

   for (let i = 2; i <= year; i++) {
      rev +=
         Math.floor(
            appsPerMonth
            * monthsOfProduction
            * (1 + (avgGrowth / 100) * (i - 1))
         )
         * (avgPremium * (avgContract / 100))
         + appsPerMonth
         * monthsOfProduction
         * (avgPremium * (avgContract / 100))
         * (avgPersistency / 100);
   }

   return rev.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
   });
}

// Initialize event listeners on DOM load
document.addEventListener("DOMContentLoaded", function () {
   initializeInputs();
   calculateMedSupp(); // Calculate immediately on page load
});
