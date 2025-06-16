/*Envoi mail EmailJS*/

(function(){
    emailjs.init("VS6DdJv61Q6eLXEOY");
})();

document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const messageElement = document.getElementById('affiche');

    const formData = {
        prenom: document.getElementById('prenom').value,
        nom: document.getElementById('nom').value,
        numero: document.getElementById('numero').value,
        sujet: document.getElementById('sujet').value,
        message: document.getElementById('message').value
    };

    emailjs.send("service_lzze88c", "template_h3h34qi", formData)
    .then(function(response) {
        messageElement.textContent = 'Message envoyé avec succès !';
        messageElement.className = 'success-message';

        document.getElementById("prenom").value = "";
        document.getElementById("nom").value = "";
        document.getElementById("numero").value = "";
        document.getElementById("sujet").value = "";
        document.getElementById("message").value = "";

        setTimeout(() => {
            messageElement.textContent = '';
            messageElement.className = '';
        }, 5000);
        
    }, function(error) {
        messageElement.textContent = 'Erreur: Échec de l\'envoi. Veuillez réessayer.';
        messageElement.className = 'error-message';
        setTimeout(() => {
            messageElement.textContent = '';
            messageElement.className = '';
        }, 5000);
    });
});


/*Boutton Scroll*/

const scrollToTopBtn = document.getElementById("scrollToTopBtn");
const footer = document.querySelector("footer");

window.addEventListener('scroll', function() {
    const footerRect = footer.getBoundingClientRect();
    const btnRect = scrollToTopBtn.getBoundingClientRect();

    if (footerRect.top < window.innerHeight) {
        scrollToTopBtn.style.bottom = `${window.innerHeight - footerRect.top + 20}px`;
    } else {
        scrollToTopBtn.style.bottom = '20px';
    }

    if (window.pageYOffset > 300) {
        scrollToTopBtn.classList.add('show');
    } else {
        scrollToTopBtn.classList.remove('show');
    }
});

scrollToTopBtn.addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

        