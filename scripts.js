const formData = new FormData(form);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    // Send data to server-side script or email address
    // Example using Fetch API to send data to server-side script
    fetch("submit-form.php", {
        method: "POST",
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        alert("Form submitted successfully!");
        console.log(data);
    })
    .catch(error => {
        console.error("Error:", error);
    });
});