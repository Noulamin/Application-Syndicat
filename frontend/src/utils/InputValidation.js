function inputValidation(values) {
    let error = {};
    const regexEmail =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(!values.first_Name){
        error.first_Name = 'Please enter your Name'
    }else if(!values.first_Name < 5){
        error.first_Name = 'Name must be mor than 5 characters'
    }

    if(!values.last_Name){
        error.last_Name = 'Please enter your Name'
    }else if(!values.last_Name < 5){
        error.last_Name = 'Name must be mor than 5 characters'
    }

    if(!values.email){
        error.email = 'Please enter your Email'
    }else if(!regexEmail.test(String(values.email).toLowerCase())){
        error.email = 'please enter a valid email adress'
    }

    if(!values.password){
        error.password = 'Please enter your Password'
    }else if(!values.password < 8){
        error.password = 'Name must be mor than 8 characters'
    }

    if(!values.phone_Number){
        error.phone_Number = 'Please enter your phone Number'
    }

    if(!values.city){
        error.city = 'Please enter your city'
    }

    if(!values.adress){
        error.adress = 'Please enter your Adresse'
    }

   
}

export default inputValidation;