document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('themeToggle');
    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-theme');
    });
    const mainForm = document.getElementById('main-form');
    if (mainForm) {
        mainForm.addEventListener('submit', function(e) {
            e.preventDefault();
            userForm();
        });
    }
    const excelForm = document.getElementById('excel-form');
    if (excelForm) {
        excelForm.addEventListener('submit', function(e) {
            e.preventDefault();
            myExcelFuns();
        });
    }
});

function userForm() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const city = document.getElementById('city').value;
    const province = document.getElementById('province').value;
    const membership = document.querySelector('input[name="membership"]:checked').value;
    const output = document.getElementById('output');
    output.innerHTML = `
        <h3>User Information:</h3>
        <p><strong>Full Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>City, Province:</strong> ${city}, ${province}</p>
        <p><strong>Membership:</strong> ${membership}</p>
    `;
}

let result;

function myExcelFuns() {
    const numberStr = document.getElementById('numbers').value;
    if (!numberStr.trim()) {
        alert('Please enter numbers separated by spaces');
        return;
    }
    const numberArr = numberStr.trim().split(' ');
    const finalNumericArray = [];
    for (let num of numberArr) {
        if (num && !isNaN(num)) {
            finalNumericArray.push(Number(num));
        }
    }
    if (document.getElementById('sum').checked) {
        result = finalNumericArray.reduce((a, b) => a + b, 0);
    } else if (document.getElementById('avg').checked) {
        result = finalNumericArray.reduce((a, b) => a + b, 0) / finalNumericArray.length;
    } else if (document.getElementById('max').checked) {
        result = Math.max(...finalNumericArray);
    } else if (document.getElementById('min').checked) {
        result = Math.min(...finalNumericArray);
    }
    document.getElementById('result').innerHTML = `
        <h3>Result:</h3>
        <p>${result}</p>
    `;
}
