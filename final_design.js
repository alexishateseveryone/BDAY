// Retrieve user data from localStorage
const userData = JSON.parse(localStorage.getItem('userData'));

// Display the user data
document.getElementById('user-name').textContent = userData.name;
document.getElementById('user-department').textContent = userData.department;
document.getElementById('user-year').textContent = userData.yearLevel;
document.getElementById('profile-photo').src = userData.photo;
document.getElementById('pc-container').src = userData.photo;

