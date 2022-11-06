const login = document.querySelector('.login-input');
const password = document.querySelector('.password-input');
const button = document.querySelector('.button');
const success = document.querySelector('.content-success');

const content = document.querySelector('.content');


button.addEventListener("click", function (event) {
    if (login.value !== '' && password.value !== '') {
        request({
            onSuccess: (data) => {
                content.style.display = 'none';
                success.style.display = 'flex';
            },
            onError: () => {
                content.textContent = 'Ошибка';
            }
        })
    } else {
        login.classList.add('error');
        password.classList.add('error');

    }
});

