document.addEventListener('DOMContentLoaded', function() {
    const termsLink = document.getElementById('termsLink');
    const termsPopup = document.getElementById('termsPopup');
    const closePopup = document.getElementById('closePopup');

    termsLink.addEventListener('click', function(e) {
        e.preventDefault();
        termsPopup.style.display = 'block';
    });

    closePopup.addEventListener('click', function() {
        termsPopup.style.display = 'none';
    });

    const promoForm = document.getElementById('promoForm');
    const resultContainer = document.getElementById('resultContainer');

    promoForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const email = document.getElementById('email').value;
        const carType = document.getElementById('carType').value;
        const carAge = parseInt(document.getElementById('carAge').value, 10);

        let discount = 0;

        if (carAge < 6) {
            discount = 50; // Menos de 6 años, 50% de descuento
        } else if (carAge >= 6 && carAge < 12) {
            discount = 15; // De 6 a 11 años, 15% de descuento
        } else {
            discount = 0; // 12 años o más, sin descuento
        }

        const resultElement = document.createElement('p');
        resultElement.textContent = `Al tener un auto ${carType} de ${carAge} años, tenés un descuento del ${discount}%.`;

        resultContainer.innerHTML = '';
        resultContainer.appendChild(resultElement);
    });
});
