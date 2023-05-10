// Get references to DOM elements
const form = document.querySelector("form");
const gstAmountElement = document.querySelector("#gstAmount");
const totalAmountElement = document.querySelector("#totalAmount");

// Add submit event listener to form
form.addEventListener("submit", function (event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the price and GST values from the form
  const price = Number(document.querySelector("#price").value);
  const gst = Number(document.querySelector("#gst").value);

  // Calculate the GST payable
  const gstAmount = (price * gst) / 100;
  const totalAmount = price + gstAmount;

  // Display the result
  gstAmountElement.textContent = gstAmount.toFixed(2);
  totalAmountElement.textContent = totalAmount.toFixed(2);
  document.querySelector("#result").style.display = "block";
});
