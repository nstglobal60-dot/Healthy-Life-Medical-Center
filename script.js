// Appointment form submission
const form = document.getElementById('appointmentForm');
const message = document.getElementById('formMessage');

form.addEventListener('submit', function(e){
    e.preventDefault();

    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const date = form.date.value;
    const doctor = form.doctor.value;

    if(name && email && phone && date && doctor){
        message.style.color = 'green';
        message.textContent = `Thank you ${name}, your appointment with ${doctor} on ${date} has been booked!`;
        form.reset();
    } else {
        message.style.color = 'red';
        message.textContent = 'Please fill in all required fields.';
    }
});

// WhatsApp Widget Toggle
const whatsappFloat = document.getElementById('whatsapp-float');
const whatsappWidget = document.getElementById('whatsapp-widget');
const whatsappClose = document.getElementById('whatsapp-close');

whatsappFloat.addEventListener('click', () => {
    whatsappWidget.style.display = 'flex';
});

whatsappClose.addEventListener('click', () => {
    whatsappWidget.style.display = 'none';
});



