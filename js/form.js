function ValidMail() {
    var re = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
    var myMail = document.getElementById('email').value;
    var valid = re.test(myMail);
    if (valid) output = 'На почту было отправлено письмо!';
    else output = 'Адрес электронной почты введен неправильно!';
    alert(output); 
    return valid;
}