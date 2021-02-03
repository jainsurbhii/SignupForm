const form=document.getElementById('form');
const username=document.getElementById('username')
const Email=document.getElementById('Email')
const password=document.getElementById('password')
const password2=document.getElementById('confirm password')
function showError(input,message){
    const formControl=input.parentElement;
    formControl.className='form-control error';
    const small=formControl.querySelector('small');
    small.innerText=message;
}
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

//check required fields
function checkRequired(inputArr){
    inputArr.forEach(function(input){
        if(input.value>trim()===''){
            showError(input,'is required')
        }
        else
        {
            showSuccess(input);
        }
    });
}

//event Listner
form.addEventListener('submit', function (e){
    e.preventDefault();

checkRequired([username, Email, password, password2])
});