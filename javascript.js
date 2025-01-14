function handleBugsSelection(selection) {
    const responseContainer = document.getElementById("response-container");
    const responseLabel = document.getElementById("response-label");
    const responseInput = document.getElementById("response-input");

    if (selection === "yes") {
        responseContainer.style.display = "block";
        responseLabel.textContent = "Could you please describe them briefly?";
        responseInput.style.display = "block";
    } else if (selection === "no") {
        responseContainer.style.display = "block";
        responseLabel.textContent = "Thank you for your feedback.";
        responseInput.style.display = "none";
    }
}
function handleBugsSelection(selection) {
    const responseContainer = document.getElementById('response-container');
    const responseLabel = document.getElementById('response-label');
    const responseInput = document.getElementById('response-input');

    if (selection === 'yes') {
        responseContainer.style.display = 'block';
        responseLabel.innerText = 'Could you please describe them briefly?';
        responseInput.style.display = 'block';
    } else if (selection === 'no') {
        responseContainer.style.display = 'block';
        responseLabel.innerText = 'Thank you for your feedback!';
        responseInput.style.display = 'none';
    }
}
function saveToFile() {
    const form = document.querySelector('form');
    const formData = new FormData(form);
    const businessName = formData.get('business-name') || 'Not provided';
    const firstName = formData.get('first-name') || 'Not provided';
    const lastName = formData.get('last-name') || 'Not provided';
    const address = formData.get('address') || 'Not provided';
    const cityTown = formData.get('city-town') || 'Not provided';
    const country = formData.get('country') || 'Not provided';
    const email = formData.get('email') || 'Not provided';
    const bugs = formData.get('bugs') || 'Not answered';
    const bugDescription =
        bugs === 'yes' ? document.getElementById('response-input').value || 'No description provided' : '';


    let fileContent = `Customer Feedback Survey\n\n`;
    fileContent += `Business Name: ${businessName}\n`;
    fileContent += `Name: ${firstName} ${lastName}\n`;
    fileContent += `Address: ${address}, ${cityTown}, ${country}\n`;
    fileContent += `Email: ${email}\n\n`;

    fileContent += `Did you encounter any bugs or technical issues? ${bugs}\n`;
    if (bugs === 'yes') {
        fileContent += `Description of issues: ${bugDescription}\n\n`;
    }

    fileContent += `Modules frequently used: `;
    const modules = Array.from(form.querySelectorAll('input[type="checkbox"]:checked')).map(
        (checkbox) => checkbox.parentNode.textContent.trim()
    );
    fileContent += modules.length > 0 ? modules.join(', ') : 'None';
    fileContent += `\n`;
    fileContent += `Marketing Communication Opt-in: ${
        formData.get('marketing') || 'Not answered'
    }\n`; 
    const blob = new Blob([fileContent], { type: 'text/plain' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'survey_feedback.txt';
    a.click();
}
