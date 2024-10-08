// Initialize vote counts
let votes = {
    'Option 1': 0,
    'Option 2': 0,
    'Option 3': 0
};

// Function to update the results display
function updateResults() {
    document.getElementById('option1-count').textContent = votes['Option 1'];
    document.getElementById('option2-count').textContent = votes['Option 2'];
    document.getElementById('option3-count').textContent = votes['Option 3'];
}

// Function to handle the vote submission
function submitVote() {
    const options = document.getElementsByName('option');
    let selectedOption = null;
    
    // Get the selected option
    options.forEach(option => {
        if (option.checked) {
            selectedOption = option.value;
        }
    });
    
    // If an option is selected, increment the vote count
    if (selectedOption) {
        votes[selectedOption]++;
        updateResults();
        alert(`You voted for ${selectedOption}!`);
    } else {
        alert('Please select an option to vote.');
    }
}

// Attach the submitVote function to the button click event
document.getElementById('vote-btn').addEventListener('click', submitVote);
