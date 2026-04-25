document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault(); 

    // HTML dagi IDlar bilan bir xil bo'lishi shart
    const name = document.getElementById('full-name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value || "Xabar yo'q";

    const telegramMessage = `Salom! Ismim: ${name}.%0A` + 
                            `Mavzu: ${subject}%0A` +
                            `Tel: ${phone}%0A` +
                            `Email: ${email}%0A` +
                            `Xabar: ${message}`;

    const telegramUsername = "Ka1dox"; 
    
    window.open(`https://t.me/${telegramUsername}?text=${telegramMessage}`, '_blank');
});
const typed = new Typed('.multiple-text', {
    strings: ['Web Developer', 'Frontend Developer', 'Graphic Designer'], // Shu yerga o'zingiz xohlagan so'zlarni yozing
    typeSpeed: 100,      // Yozilish tezligi
    backSpeed: 100,      // O'chirilish tezligi
    backDelay: 1000,     // To'xtab turish vaqti (ms)
    loop: true           // Doimiy takrorlanishi
});