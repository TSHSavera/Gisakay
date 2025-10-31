//Add event listner to each day filter
let filterDay = document.querySelectorAll(".day-filter");
filterDay.forEach(function(element) {
    element.addEventListener("click", function() {
        //Get the day from the data-int-day attribute
        let day = element.getAttribute("data-int-day");
        filterTableByDay(day);
        //Hide welcome message
        let welcome = document.querySelector(".welcome");
        welcome.style.display = "none";
        //Show the schedule table
        let scheduleTable = document.querySelector(".scheduleContainer");
        scheduleTable.style.display = "flex";
        //Set title based on button
        let title = document.querySelector("#scheduleDisplayDay");
        //Convert day to string
        switch (day) {
            case "0":
                day = "All";
                break;
            case "1":
                day = "Monday";
                break;
            case "2":
                day = "Tuesday";
                break;
            case "3":
                day = "Wednesday";
                break;
            case "4":
                day = "Thursday";
                break;
            case "5":
                day = "Friday";
                break;
            case "6":
                day = "Saturday";
                break;
            case "7":
                day = "Sunday";
                break;
        }
        title.innerHTML = "Schedules for " + day;
    });
});

//Filter table by their day
function filterTableByDay(day) {
    //Fetch data from the server
    getStudentSchedules().then(res => res.json())
        .then(data => {
            //Save result data to array
            var schedules = [];
            //Filter what to save in the array - only the data that matches the day
            //If day is 0, save all data
            if (day == 0) {
                data.data.forEach(function(element) {
                    schedules.push(element);
                });
            } else {
                data.data.forEach(function(element) {
                    if (element.studentScheduleDay == day) {
                        schedules.push(element);
                    }
                });
            }

            //Query users
            getStudentList().then(res => res.json())
                .then(data => {
                    //Save result data to array
                    var students = [];
                    //Filter what to save in the array - only the data that matches the studentID in schedules
                    for (var i = 0; i < schedules.length; i++) {
                        for (var j = 0; j < data.data.length; j++) {
                            if (schedules[i].studentID == data.data[j].StudentID) {
                                students.push(data.data[j]);
                            }
                        }
                    }
                    console.log(schedules);
                    console.log(data);
                    console.log(students);
                    //Clear the table before re-adding - without removing headers
                    var table = document.querySelector("#scheduleTable");
                    table.innerHTML = "<tr><th>Passenger Number</th><th>Passenger Name</th><th>Email</th><th>Contact Number</th><th>Day</th></tr>";
                    //For each data in students, add a row to the table
                    for (var i = 0; i < students.length; i++) {
                        var table = document.querySelector("#scheduleTable");
                        var row = table.insertRow(-1);
                        var cell1 = row.insertCell(0);
                        var cell2 = row.insertCell(1);
                        var cell3 = row.insertCell(2);
                        var cell4 = row.insertCell(3);
                        var cell5 = row.insertCell(4);
                        cell1.innerHTML = students[i].StudentID;
                        cell2.innerHTML = students[i].StudentFirstName + " " + students[i].StudentLastName;
                        cell3.innerHTML = students[i].StudentEmail;
                        cell4.innerHTML = students[i].StudentContactNumber;
                        //Convert scheduleDay to string
                        switch (schedules[i].studentScheduleDay) {
                            case 1:
                                schedules[i].studentScheduleDay = "Monday";
                                break;
                            case 2:
                                schedules[i].studentScheduleDay = "Tuesday";
                                break;
                            case 3:
                                schedules[i].studentScheduleDay = "Wednesday";
                                break;
                            case 4:
                                schedules[i].studentScheduleDay = "Thursday";
                                break;
                            case 5:
                                schedules[i].studentScheduleDay = "Friday";
                                break;
                            case 6:
                                schedules[i].studentScheduleDay = "Saturday";
                                break;
                            case 7:
                                schedules[i].studentScheduleDay = "Sunday";
                                break;
                        }
                        cell5.innerHTML = schedules[i].studentScheduleDay;
                    }
                });

        });

}

//Fetch student schedules
function getStudentSchedules() {
    return fetch("http://localhost:3000/admin/getStudentSchedule", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
        },
        mode: "cors",
    });
}
//Fetch for getting student list
function getStudentList() {
    return fetch("http://localhost:3000/admin/getStudentList", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
        },
        mode: "cors",
    });
}