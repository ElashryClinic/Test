Email.send({
    Host : "smtp.elasticemail.com",
    Username : "elashryclinic@gmail.com",
    Password : "elashryclinic@@..ElManial",
    To : 'hmztalshry98@gmail.com',
    From : "elashryclinic@gmail.com",
    Subject : "This is the subject",
    Body : "And this is the body"
}).then(
  message => alert(message)
);