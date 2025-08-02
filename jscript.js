
// Show popup on Page 2 load
window.addEventListener('load', () => {
  if (window.location.pathname.includes("page2.html")) {
    alert("You're on the second page! Welcome to more insights.");
  }
});

// Signup Popup functions (for index.html)
function openSignup() {
  document.getElementById("popupForm").style.display = "flex";
}

function closeSignup() {
  document.getElementById("popupForm").style.display = "none";
}

function submitSignup() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  alert(`Signed up with:\nEmail: ${email}\nPassword: ${password}`);
  closeSignup();
}

//  New: Feedback submission function for Page 2
function submitFeedback() {
  const feedback = document.getElementById("strategyFeedback").value;
  if (feedback.trim() === "") {
    alert("Please enter some feedback.");
  } else {
    alert("Thank you for your feedback: " + feedback);
  }
}

