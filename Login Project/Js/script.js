document.querySelector('#btn').addEventListener('click', function(event) {
    event.preventDefault();
    let userName = document.querySelector('#username').value;
    let passWord = document.querySelector('#password').value;
    
    function chaekerro() {
        try {
            if (userName.trim().toLowerCase() === 'true' || userName.trim().toLowerCase() === 'false') {
                throw new Error(`Please don't use this word`);
            }
            if (passWord.trim().toLowerCase() === 'true' || passWord.trim().toLowerCase() === 'false') {
                throw new Error(`Please don't use this word`);
            }
            if(userName.trim() === '' || passWord === ''){
                throw new Error('Please do not leave blank');
            } 
            else {
                alert('Your login was successful');
            }
        } catch (error) {
            alert(error.message);
        }
    }

    chaekerro(); 
});
