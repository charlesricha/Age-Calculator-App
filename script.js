function ageCalculation(){


// Get user inputs
let dayInput = parseInt(document.getElementById("Day").value, 10);
let monthInput = parseInt(document.getElementById("Month").value, 10) - 1; // Month is zero-based
let yearInput = parseInt(document.getElementById("Year").value, 10);

// Create date objects
let dateInput = new Date(yearInput, monthInput, dayInput);
let todayDate = new Date();

//output components
let yrs = document.getElementById("Years");
let mnths = document.getElementById("Months");
let dys = document.getElementById("Days");
// clear previous data
yrs.textContent = "--";  
mnths.textContent = "--"; 
dys.textContent = "--"; 


if (dateInput > todayDate) {
    let error = document.getElementById("year-error");
    error.textContent = "Invalid birth date!";

    setTimeout(function() {
        error.textContent = ""; // Clear the error message
      }, 5000);
} else {
    // Calculate years
    let years = todayDate.getFullYear() - dateInput.getFullYear();

    // Calculate months
    let months = todayDate.getMonth() - dateInput.getMonth();
    if (months < 0) {
        years -= 1;
        months += 12;
    }

    // Calculate days
    let days = todayDate.getDate() - dateInput.getDate();
    if (days < 0) {
        months -= 1;
        let lastMonth = new Date(todayDate.getFullYear(), todayDate.getMonth(), 0); // Last day of the previous month
        days += lastMonth.getDate();
    }

    // Display results in HTML elements
    let yrs = document.getElementById("Years");
    let mnths = document.getElementById("Months");
    let dys = document.getElementById("Days");

    yrs.textContent = `${years}`;  // Update years
    mnths.textContent = `${months}`; // Update months
    dys.textContent = `${days}`;  // Update days
}
// Clear input fields after calculation
  document.getElementById("Day").value = "";
  document.getElementById("Month").value = "";
  document.getElementById("Year").value = "";
}
