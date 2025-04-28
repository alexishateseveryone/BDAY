let step = 0;
let userData = {
    name: '',
    department: '',
    yearLevel: '',
    photo: ''
};

const questions = [
    "What is your name?",
    "What is your department?",
    "What is your year level?"
];

function nextQuestion() {
    const input = document.getElementById('input').value.trim();

    if (input === "" && step !== 1) {  // If step is not department, check for empty input
        alert("Please provide an answer.");
        return;
    }

    // Save the answer in userData object
    if (step === 0) {
        userData.name = input;
    } else if (step === 1) {
        userData.department = document.getElementById('department-select').value; // Save selected department
    } else if (step === 2) {
        userData.yearLevel = input;
    }

    // Clear input and proceed to next step
    document.getElementById('input').value = '';
    step++;

    // Show photo upload after all questions are answered
    if (step === questions.length) {
        document.getElementById('question').textContent = "Upload your profile photo:";
        document.getElementById('upload-photo-container').style.display = 'block'; // Show photo upload
        return;
    }

    // Update the question text
    document.getElementById('question').textContent = questions[step];
}

// Modify the nextQuestion function to check for department step
document.getElementById('department-select').addEventListener('change', function() {
    userData.department = this.value;
});

document.getElementById('photo-upload').addEventListener('change', function(event) {
    const photoInput = event.target.files[0];
    if (photoInput) {
        const reader = new FileReader();
        reader.onload = function(event) {
            // Save the photo in userData
            userData.photo = event.target.result;

            // After photo is uploaded, save everything to localStorage and redirect
            localStorage.setItem('userData', JSON.stringify(userData));
            window.location.href = 'final_design.html'; // Redirect to final design page
        };
        reader.readAsDataURL(photoInput);
    }
});
