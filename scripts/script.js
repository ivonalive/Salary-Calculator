function addEmployee(event){
    event.preventDefault();

    let firstName = document.querySelector('[data-testid="firstNameInput"]').value;
    
    let tBody = document.querySelector('#tbody');
    tBody.innerHTML += `
    <tr>
        <td>${firstName}</td>
        <td>$()
    </tr>
    `
}