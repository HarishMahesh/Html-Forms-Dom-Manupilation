var count = 1;

function getDatafromFields()
{
   
    const firstName = document.getElementById('firstname');
    const lasttName = document.getElementById('lastname');
    const genderArr = document.getElementsByName('gender')
    const favFoodArr = document.getElementsByName('favFood')
    const addressElem = document.getElementById('address');
    const stateElem = document.getElementById('state');
    const countryElem = document.getElementById('country');
    const pincodeElem = document.getElementById('Pincode');

   const fName = firstName.value;
   const lName = lasttName.value;

    let gender = '';
    let checkedGender = '';
    for (i in genderArr)
    {
       
        if(genderArr[i].checked)
        {
            gender = genderArr[i].value;
            checkedGender = genderArr[i];
        }
    }

    let favFood = [];
    let favFoodLi = ''
    for (i in favFoodArr)
    {
        if(favFoodArr[i].checked)
        {
            favFood.push(favFoodArr[i].value);
            favFoodLi = favFoodLi + `<li>${favFoodArr[i].value}</li>`;
        }
    }
   
    const address = addressElem.value;
    const state = stateElem.value;
    const country = countryElem.value;
    const pincode = pincodeElem.value;
    
    if (!(fName && lName && gender && (favFood.length > 0) && address && state && country && pincode) )
    {
        alert('All fields are mandatory');
        return;
    }

    if(favFood.length < 2)
    {
        alert('Select atleast 2 Favorite foods');
        return;
    }

    const tableBody = document.getElementById('table-body');

    const newTableRow = document.createElement('tr');
    newTableRow.innerHTML = `
    <th scope = 'row'>${count}</th>
    <td>${fName}</td>
    <td>${lName}</td>
    <td>${gender}</td>
    <td>
        <ol>
            ${favFoodLi}
        </ol>
    </td>
    <td>
        ${address}
    </td>
    <td>
        ${state}
    </td>
    <td>${country}</td>
    <td>${pincode}</td>
    `

    tableBody.append(newTableRow);
    ++count;
    firstName.value = '';
    lasttName.value = '';
    addressElem.value = '';
    stateElem.value = '';
    countryElem.value = '';
    pincodeElem.value = '';
    checkedGender.checked = false;
    for (i in favFoodArr)
    {
        if(favFoodArr[i].checked)
        {
            favFoodArr[i].checked = false;
        }
    }
}