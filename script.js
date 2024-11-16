document.querySelectorAll('.navbar a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute('href'));
      target.scrollIntoView({
          behavior: 'smooth'
      });
  });
});





function toggleAccordion(element) {
    const item = element.parentElement;
    const content = item.querySelector('.accordion-content');
    const symbol = item.querySelector('.plus-symbol');
  
    if (content.style.display === 'block') {
      content.style.display = 'none';
      symbol.textContent = '+';
    } else {
      document.querySelectorAll('.accordion-content').forEach(content => content.style.display = 'none');
      document.querySelectorAll('.plus-symbol').forEach(symbol => symbol.textContent = '+');
      
      content.style.display = 'block';
      symbol.textContent = '-';
    }
  }
  function toggleAccordion(element) {
    const item = element.parentElement;
    const content = item.querySelector('.accordion-content');
    const symbol = item.querySelector('.plus-symbol');
  
    if (content.style.display === 'block') {
      content.style.display = 'none';
      symbol.textContent = '+';
    } else {
      document.querySelectorAll('.accordion-content').forEach(content => content.style.display = 'none');
      document.querySelectorAll('.plus-symbol').forEach(symbol => symbol.textContent = '+');
      
      content.style.display = 'block';
      symbol.textContent = '-';
    }
  }

  document.getElementById("contactForm").addEventListener("submit", async function (event) {
    event.preventDefault(); // Prevent default form submission
  
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const formFeedback = document.getElementById("formFeedback");
  
    // Basic Validation
    if (!name || !email || !message) {
      formFeedback.textContent = "Please fill in all fields.";
      formFeedback.style.color = "#ffd700";
      return;
    }
  
    // Prepare the data
    const data = {
      name: name,
      email: email,
      message: message
    };
  
    // Send data to the API (replace 'https://api.example.com/contact' with your actual endpoint)
    try {
      const response = await fetch('https://api.example.com/contact', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });
  
      if (response.ok) {
        formFeedback.textContent = "Message sent successfully!";
        formFeedback.style.color = "#ffd700";
        document.getElementById("contactForm").reset(); // Reset form
      } else {
        formFeedback.textContent = "Failed to send message. Please try again.";
        formFeedback.style.color = "#ffd700";
      }
    } catch (error) {
      formFeedback.textContent = "Error: Unable to connect to the server.";
      formFeedback.style.color = "#ffd700";
    }
  });
  
  