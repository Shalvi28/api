fetch('https://randomuser.me/api/?results=15')
.then(res=>res.json())
    .then(info => {
        let results = info.results;
       
        for (let i = 0; i < results.length; i++){
           
            let First_Name = results[i].name.first;
            let Last_Name = results[i].name.last;
            let city = results[i].location.city;
            let country = results[i].location.country;
            let Email = results[i].email;
            let dob = results[i].dob.date;
            let phone = results[i].phone;
            let table = document.querySelector('table');
            let tableRow = document.createElement('tr');
            tableRow.innerHTML = '<td>' + First_Name + '</td>' + '<td>' + Last_Name + '</td>'+ '<td>' + city + '</td>' +'<td>' + country + '</td>' + '<td>' + Email + '</td>'  + '<td>' + dob + '</td>' + '<td>' + phone + '</td>';
            table.appendChild(tableRow);
        }
})