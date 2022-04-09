
function ValidMail() {
    let re = (/^\w+@[a-z]+\.[a-z]+$/);
    let myMail = document.getElementById('email').value;
    let valid1 = re.test(myMail);
    if (valid1 ===true) alert( 'Адрес эл. почты введен правильно!');
    else alert( 'Адрес электронной почты введен неправильно!');
}

function ValidPhone() {
    let re = (/^\d[\d() -]{4,14}\d$/);
    let myPhone = document.getElementById('phone').value;
    let valid = re.test(myPhone);
    if (valid===true) alert('Номер телефона введен правильно!');
    else alert('Номер телефона введен неправильно!');

}


