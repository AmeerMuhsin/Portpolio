    const form = document.getElementById('form'); 
    const name1 = document.getElementById('name1');
    const email = document.getElementById('email');
    const phonenumber = document.getElementById('phonenumber');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        validateInputs();
    });

    const setError = (element, message) => {
        const inputControl = element.parentElement;
        const errorDisplay = inputControl.querySelector('.error');

        errorDisplay.innerText = message;
        inputControl.classList.add('error');
        inputControl.classList.remove('success')
    }

    const setSuccess = element =>{
        const inputControl = element.parentElement;
        const errorDisplay = inputControl.querySelector('.error');

        errorDisplay.innerText = '';
        inputControl.classList.add('success');
        inputControl.classList.remove('error')
    }


    const isValidEmail = email => {
        const re = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/
        return re.test(String(email).toLowerCase())
    };
       
    const validateInputs = () =>{
        const nameValue = name1.value.trim();
        const emailValue = email.value.trim();
        const phonenumberValue = phonenumber.value.trim();        

        if(nameValue === '' || nameValue == null){
            setError(name1,'Username is required');
        } else{
            setSuccess(name1)
        }

        if(emailValue === ''){
            setError(email,'Email is required');}
            else if(!isValidEmail(emailValue)){
                setError(email,'Proper email is required');}
            else{
                setSuccess(email);}

        if(phonenumberValue === ''){
            setError(phonenumber,'Phone Number is required')}
        else if(phonenumberValue.length < 10){ 
            setError(phonenumber,'Phone Number must be 10 character')}
        else{
            setSuccess(phonenumber);}
    };
