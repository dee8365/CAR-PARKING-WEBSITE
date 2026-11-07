const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{6,}$/;
const passwordInput = document.getElementById("password");
if (passwordRegex.test(passwordInput)) {
} else {
  console.log("Password does not meet the rules.");
}
const form = document.getElementById('parkForm');
const tableBody = document.getElementById('carTableBody');

let parkedCars = [];

document.querySelector(".btn").addEventListener('click', () => {
    
    const carNumber = document.getElementById('carnumber').value;
    const ownerName = document.getElementById('ownername').value;

    if (parkedCars.length >= 10) {
        alert("Parking lot is full!");
        return;
    }

    const newCar = {
        carNumber: carNumber,
        ownerName: ownerName,
        entryTime: new Date().toLocaleTimeString()
    };
    parkedCars.push(newCar);

    tableBody.innerHTML = '';

    parkedCars.forEach((car, index) => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${car.carNumber}</td>
            <td>${car.ownerName}</td>
            <td>${car.entryTime}</td>
            
        `;

        tableBody.appendChild(row);
    });

    form.reset();
});