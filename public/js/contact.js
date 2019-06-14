$(document).ready(function() {

var nameInput = $("#name");
var emailInput = $("#email");
var messageInput = $("#message");
var contactForm = $("#contact_info")

$(contactForm).on("submit", function handleFormSubmit(event) {
    event.preventDefault();

    if (!nameInput.val().trim() || !emailInput.val().trim() || !messageInput.val().trim()) {
        return;
    }

var newContact = {
    name: nameInput.val().trim(),
    email: emailInput.val().trim(),
    message: messageInput.val().trim()
};

console.log(newContact);

submitContact(newContact);


});

function submitContact(Contact) {
    $.post("/api/contacts", Contact, function() {
        window.location.href = "/contact";
    });
}

});
