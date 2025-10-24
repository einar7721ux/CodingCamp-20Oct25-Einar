// Welcome Speech Function - Otomatis dijalankan saat halaman dimuat
function welcomeSpeech() {
    // Cek apakah nama sudah tersimpan di session
    let userName = localStorage.getItem('userName');
    
    // Jika belum ada nama, tanya ke user
    if (!userName) {
        userName = prompt("Welcome! Please enter your name:");
        
        // Jika user memasukkan nama, simpan ke session
        if (userName && userName.trim() !== "") {
            localStorage.setItem('userName', userName);
        } else {
            // Jika user cancel atau kosong, set default
            userName = "Guest";
            localStorage.setItem('userName', userName);
        }
    }
    
    // Tampilkan greeting text
    const welcomeTextElement = document.getElementById('welcome-text');
    if (welcomeTextElement) {
        welcomeTextElement.textContent = `Hi ${userName}, Welcome to My Website`;
    }
}

// Function to validate form inputs
function validateForm() {
    // Get form input values
    const name = document.getElementById('name-input').value;
    const email = document.getElementById('email-input').value;
    const message = document.getElementById('message-input').value;

    // Check if any field is empty
    if (name === "" || email === "" || message === "") {
        // Show alert if any field is empty
        alert("All fields are required!");
    } else {
        // Show success message
        alert(`Thank you ${name}, your message has been submitted successfully!`);
        
        // Optional: Clear form after submission
        document.getElementById('name-input').value = '';
        document.getElementById('email-input').value = '';
        document.getElementById('message-input').value = '';
    }
}

// Jalankan welcomeSpeech saat halaman selesai dimuat
window.addEventListener('load', welcomeSpeech);