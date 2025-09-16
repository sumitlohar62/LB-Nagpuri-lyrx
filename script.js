function login() {
  const email = document.getElementById('gmailLogin').value;
  if (email.includes('@gmail.com')) {
    alert("Logged in as " + email);
  } else {
    alert("Please enter a valid Gmail ID");
  }
}

document.getElementById('darkModeToggle').addEventListener('change', function() {
  document.body.classList.toggle('dark-mode', this.checked);
});