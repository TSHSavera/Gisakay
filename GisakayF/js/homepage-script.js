//Navigate Thru - add all go-dashboard class to the dashboard page;
var goDashboard = document.querySelectorAll(".go-dashboard");
goDashboard.forEach(function(element) {
    element.addEventListener("click", function() {
        window.location.href = "dashboard.php";
    });
});

var goSchedule = document.querySelectorAll(".go-schedules");
goSchedule.forEach(function(element) {
    element.addEventListener("click", function() {
        window.location.href = "schedule.php";
    });
});

//Generate barangay limits and Trip Schedules on load
window.addEventListener("load", function() {
    generateBarangayList();
    generateTripSchedules();
});

function generateBarangayList() {
    //Clear the table before re-adding - without removing headers
    var table = document.querySelector("#barangayList");
    table.innerHTML = "<tr><th>Barangay Name</th><th>Number of Students</th></tr>";

    getBarangayList().then(res => res.json())
        .then(data => {
            //Save result data to array
            var barangayList = data.data;
            //For each barangay, add a row to the table
            for (var i = 0; i < barangayList.length; i++) {
                var table = document.querySelector("#barangayList");
                var row = table.insertRow(-1);
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                cell1.innerHTML = barangayList[i].BarangayName;
                cell2.innerHTML = barangayList[i].BarangayLimits;
            }
        });
}

//Fetch for getting barangay list
function getBarangayList() {
    return fetch("http://localhost:3000/admin/getBarangayList", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
        },
        mode: "cors",
    });
}

//Fetch for getting trip schedules
function generateTripSchedules() {
    //Clear the table before re-adding - without removing headers
    var table = document.querySelector("#tripSchedules");
    table.innerHTML = "<tr><th>Day</th><th>Departure Time</th><th>Arrival Time</th></tr>";

    getTripSchedules().then(res => res.json())
        .then(data => {
            //Save result data to array
            var tripSchedules = data.data;
            //For each trip schedule, add a row to the table
            for (var i = 0; i < tripSchedules.length; i++) {
                var table = document.querySelector("#tripSchedules");
                var row = table.insertRow(-1);
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                var cell3 = row.insertCell(2);
                //Convert scheduleDay to string
                switch (tripSchedules[i].scheduleDay) {
                    case 1:
                        tripSchedules[i].scheduleDay = "Monday";
                        break;
                    case 2:
                        tripSchedules[i].scheduleDay = "Tuesday";
                        break;
                    case 3:
                        tripSchedules[i].scheduleDay = "Wednesday";
                        break;
                    case 4:
                        tripSchedules[i].scheduleDay = "Thursday";
                        break;
                    case 5:
                        tripSchedules[i].scheduleDay = "Friday";
                        break;
                    case 6:
                        tripSchedules[i].scheduleDay = "Saturday";
                        break;
                    case 7:
                        tripSchedules[i].scheduleDay = "Sunday";
                        break;
                }
                //Convert time to 12-hour format
                var a = tripSchedules[i].scheduleTime;
                var b = tripSchedules[i].scheduleTimeBack;
                var time = a.split(':');
                var timeBack = b.split(':');
                var hours = time[0];
                var hoursBack = timeBack[0];
                var minutes = time[1];
                var minutesBack = timeBack[1];
                var ampm = hours >= 12 ? 'pm' : 'am';
                var ampmBack = hoursBack >= 12 ? 'pm' : 'am';
                hours = hours % 12;
                hours = hours ? hours : 12;
                hoursBack = hoursBack % 12;
                hoursBack = hoursBack ? hoursBack : 12;
                a = hours + ':' + minutes + ' ' + ampm;
                b = hoursBack + ':' + minutesBack + ' ' + ampmBack;

                console.log("Time: " + a + " TimeBack: " + b);
                cell1.innerHTML = tripSchedules[i].scheduleDay;
                cell2.innerHTML = a;
                cell3.innerHTML = b;
            }
        });
}

//Fetch for getting trip schedules
function getTripSchedules() {
    return fetch("http://localhost:3000/admin/getTripSchedules", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
        },
        mode: "cors",
    });
}