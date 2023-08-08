<script>
    document,addEventlistener('DOMContent', function(){
        const form =document.getElementById('registration-form');
        const tableBody = document.querySelector('#user-table tbody');
        const nameInput = document,getElementById('name');
        const emailInput = document.getElementById('email');
        const passwordInput = document.getElementById('password');
        const dobInput = document.getElementById('dob');
        const acceptTermsInput = document.getElementById('accept-terms');

        form.addEventlistener('submit', function(event) {
            event.preventDefault

            const newRow = document.createElement('tr');
            newRow.innerHTML = '
            <td>${nameInput.value}</td>
            <td>${emailInput.value}</td>
            <td>${passwordInput.value}</td>
            <td>${dobInput.value}</td>
            <td>${acceptTermsInput.checked ? 'Yes' : 'No' }</td>
            ';

            tableBody.appendchild(newRow);

            nameInput.value = '';
            emailInput.value= '';
            passwordInput.value = '';
            dobInput.value = '';
            acceptTermsInput.checked = false;
        })
    })
</script>