function submitForm() {
    validateAskedForm();
    return false;
}

function makeXMLFile() {
    let xmlStr = '<ЗАПРОС_СВЕДЕНИЙ_О_СТРАХОВОМ_СТАЖЕ>\n' +
            '<Фамилия>' + document.askedForm.lastname.value + '</Фамилия>\n' +
            '<Имя>' + document.askedForm.firstname.value + '</Имя>\n' +
            '<Отчество>' + document.askedForm.middlename.value + '</Отчество>\n' +
            '<СНИЛС>' + document.askedForm.snils.value + '</СНИЛС>\n' +
            '<Дата_Рождения>' + document.askedForm.dateofbirth.value + '</Дата_Рождения>\n' +
            '<Наличие_Данных>' + document.askedForm.availabilityofdata.value + '</Наличие_Данных>\n' +
            '<Лет>' + document.askedForm.years.value + '</Лет>\n' +
            '<Месяцев>' + document.askedForm.months.value + '</Месяцев>\n' +
            '<Дней>' + document.askedForm.days.value + '</Дней>\n' +
        '</ЗАПРОС_СВЕДЕНИЙ_О_СТРАХОВОМ_СТАЖЕ>';
    document.askedForm.request.value = xmlStr;
}

function validateAskedForm() {
    var lastname = document.askedForm.lastname.value;
    var firstname = document.askedForm.firstname.value;
    var middlename = document.askedForm.middlename.value;
    var snils = document.askedForm.snils.value;
    var datebirth = document.askedForm.dateofbirth.value;
    var data = document.askedForm.availabilityofdata.value;

    var years = document.askedForm.years.value;
    var months = document.askedForm.months.value;
    var days = document.askedForm.days.value;

    var snilsRegex = /\d{3}-\d{3}-\d{3} \d{2}/;
    var dataRegex = /\d{2}.\d{2}.\d{4}/;

    var lastnameErr = firstnameErr = middlenameErr = snilsErr = datebirthErr = true;
    var yearsErr = monthsErr = daysErr = true;

    if(lastname.length < 1 || lastname.length > 40){
        printError("lastnameErr", "Пожалуйста, введите корректную фамилию!");
    } else{
        printError("lastnameErr", "");
        lastnameErr = false;
    }

    if (firstname.length < 1 || firstname.length > 40){
        printError("firstnameErr", "Пожалуйста, введите корректное имя!");
    } else {
        printError("firstnameErr", "");
        firstnameErr = false;
    }

    if (middlename.length > 40){
        printError("middlenameErr", "Пожалуйста, введите корректное отчество!");
    } else {
        printError("middlenameErr", "");
        middlenameErr = false;
    }

    if(!snilsRegex.test(snils)){
        printError("snilsErr", "Пожалуйста, введите корректный СНИЛС!");
    } else{
        printError("snilsErr", "");
        snilsErr = false;
    }

    if(!dataRegex.test(datebirth)){
        printError("datebirthErr", "Пожалуйста, введите корректную дату рождения!");
    } else{
        printError("datebirthErr", "")
        datebirthErr = false;
    }

    if(years < 0 || years > 999){
        printError("yearsErr", "Пожалуйста, введите корректные годы!");
    } else {
        printError("yearsErr", "");
        yearsErr = false;
    }


    if(months < 0 || months > 99){
        printError("monthsErr", "Пожалуйста, введите корректные месяца!");
    } else {
        printError("monthsErr", "");
        monthsErr = false;
    }

    if(days > 99 || days < 0){
        printError("daysErr", "Пожалуйста, введите корректные дни!");
    } else {
        printError("daysErr", "");
        daysErr = false;
    }

    if(yearsErr || monthsErr || daysErr || lastnameErr || firstnameErr || middlenameErr || snilsErr || datebirthErr){
        document.askedForm.request.value = "";
        return false;
    } else{
        makeXMLFile();
    }


}

function printError(elemId, errorMessage) {
    document.getElementById(elemId).innerHTML = errorMessage;
}