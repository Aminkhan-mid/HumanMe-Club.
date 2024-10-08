// Add an event listener for the dropdown selection
document.getElementById('humanType').addEventListener('change', function() {
    const humanTypeValue = this.value; // Get the selected option's value
    const statusElement = document.getElementById('status');

    // Check the selected option and update status accordingly
    if (humanTypeValue === 'weirdHuman') {
        statusElement.textContent = 'Allowed'; // Update status to Allowed for weirdHuman
    } else if (humanTypeValue === 'SHININGS') {
        statusElement.textContent = 'Weird King'; // Update status to King for SHININGS
    } else if (humanTypeValue === 'Human'){
        statusElement.textContent = 'DIE';
    } else {
        statusElement.textContent = ''; // Update status to Not Allowed for any other selection
    }
});

document.getElementById('submitButton').addEventListener('click', function(event){
    event.preventDefault();

    const name = document.getElementById('name').value;
    const humanType = document.getElementById('humanType').value;
    const bio = document.getElementById('bio').value;
    const formStatus = document.getElementById('formStatus').value;

    if (!name || !humanType || bio) {
        formStatus.textContent = "Please fill out all the fields.";
        formStatus.style.color='red';
    } else {
        formStatus.textContent = "Form submitted for review";
        formStatus.style.color = "green";
    }
});


