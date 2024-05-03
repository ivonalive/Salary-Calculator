// Checking if the js file is connected
console.log('js');

function addEmployee(event){
    // Checking if the button is wokring
    console.log('Does this button/function work?');
    event.preventDefault();

    // Connecting each inout field to table
    let firstName = document.querySelector('[data-testid="firstNameInput"]').value;
    let lastName = document.querySelector('[data-testid="lastNameInput"]').value;
    let idInput = document.querySelector('[data-testid="idInput"]').value;
    let title = document.querySelector('[data-testid="titleInput"]').value;
    let salary = document.querySelector('[data-testid="annualSalaryInput"]').value;
    // Checking if id refrences are working properly
    console.log(firstName);

    // Getting id of table body to append to
    let tBody = document.querySelector('#tbody');
    tBody.innerHTML += `
    <tr>
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${idInput}</td>
        <td>${title}</td>
        <td>${salary}</td>
        <td> <button onCLick="deleteEmployee(event)"> Delete </button></td>
     </tr>

    `;
};

function deleteEmployee(event){
    event.target.parentElement.parentElement.remove();
}

function totalMonthly(){
    
}