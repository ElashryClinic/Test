function sendEmail()
{
Email.send({
    Host: "smtp.elasticemail.com",
    Username: "elashryclinic@gmail.com",
    Password: "719D95FB23012B20FE8CFA4667E8C3369096",
    To: "elashryclinic@gmail.com",
    From: "elashryclinic@gmail.com",
    Subject: "رسالة جديدة",
    Body: `توجد رسالة جديدة بالتفاصيل التالية:<br>الاسم: ${document.getElementById('name').value}<br>الرسالة: ${document.getElementById('msg').value}`
}).then(message => alert(message));
}