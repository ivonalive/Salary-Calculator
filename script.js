// Checking if the js file is connected
console.log('js');
let monthlySalary = totalMonthly();

function addEmployee(event){
    // Checking if the button is wokring
    // console.log('Does this button/function work?');
    event.preventDefault();

    // Connecting each inout field to table
    let firstName = document.querySelector('[data-testid="firstNameInput"]').value;
    let lastName = document.querySelector('[data-testid="lastNameInput"]').value;
    let idInput = document.querySelector('[data-testid="idInput"]').value;
    let title = document.querySelector('[data-testid="titleInput"]').value;
    let salary = document.querySelector('[data-testid="annualSalaryInput"]').value;
    // Checking if id refrences are working properly
    // console.log(firstName);

    // Getting id of table body to append to
    let tBody = document.querySelector('#tbody');
    tBody.innerHTML += `
    <tr>
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${idInput}</td>
        <td>${title}</td>
        <td class="salary">${salary}</td>
        <td> <button onCLick="deleteEmployee(event)"> Delete </button></td>
    </tr>

    `;
    totalMonthly();
};

function deleteEmployee(event){
    event.target.parentElement.parentElement.remove();
}

function totalMonthly(){
    
    let sum = 0;
    let salaries = document.querySelectorAll('.salary');
    for (let i = 0; i < salaries.length; i++){
        sum += Number(salaries[i].textContent);
    }
    //cheking is sum is being calculated correctly
   console.log(sum);

   monthlySum = Math.floor(sum / 12);
   let monthly = document.querySelector('.totalMonthly');
   monthly.innerHTML += `
    ${monthlySum}
   `;
   if ( monthlySum > 20000){
    monthly.style.backgroundColor = 'red';
    alert("Warning: Monthly budget is over $20,000!");
}

}
////// total monthly showing each time function is called instead of recplacing ///

