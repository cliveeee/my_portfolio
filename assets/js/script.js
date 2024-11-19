// Handle tab functionality
document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.content-section').forEach(section => {
            section.classList.remove('active');
        });

        tab.classList.add('active');
        const tabId = tab.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('active');
    });
});

// Handle action button functionality
document.querySelectorAll('.action-button').forEach(button => {
    button.addEventListener('click', () => {
        const buttonText = button.textContent.trim();
        if (buttonText === "Email") {
            window.location.href = "mailto:clivechipunzi@gmail.com";
        } else if (buttonText === "Resume") {
            window.open("assets/files/resume.pdf", "_blank");
        } else if (buttonText === "GitHub") {
            window.open("https://github.com/cliveeee", "_blank");
        }
    });
});
