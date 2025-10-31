//Transition from get started to login form
//Add Listener to get started button
document.querySelector(".get-started").addEventListener("click", getStarted);

function getStarted() {
    var x = document.querySelector(".login-card-content-a");
    var y = document.querySelector(".login-card-content-b");
    //Add switching views containers
    var a = document.querySelector(".switch-stud");
    var b = document.querySelector(".switch-admin");

    x.style.display = "none";
    y.style.display = "grid";
    a.style.display = "flex";
    b.style.display = "none";
}

//Transition from Admin to Student
//Add Listener to Switch to Passenger
document.querySelector(".switch-stud-btn").addEventListener("click", switchToStudent);

function switchToStudent() {
    var x = document.querySelector(".admin-form");
    var y = document.querySelector(".student-form");
    //Add switching views containers
    var a = document.querySelector(".switch-admin");
    var b = document.querySelector(".switch-stud");


    x.style.display = "none";
    y.style.display = "flex";
    a.style.display = "flex";
    b.style.display = "none";
}

//Transition from Student to Admin
//Add Listener to switch to admin
document.querySelector(".switch-admin-btn").addEventListener("click", switchToAdmin);

function switchToAdmin() {
    var x = document.querySelector(".admin-form");
    var y = document.querySelector(".student-form");
    //Add switching views containers
    var a = document.querySelector(".switch-admin");
    var b = document.querySelector(".switch-stud");

    x.style.display = "flex";
    y.style.display = "none";
    a.style.display = "none";
    b.style.display = "flex";
}

//Show Schedule Information
//Add Listener to show schedule information
document.querySelector(".showSchedule").addEventListener("click", function() {
    var x = document.querySelector("#studentModal");
    x.style.display = "flex";
});
document.querySelector(".close-student-modal").addEventListener("click", function() {
    var x = document.querySelector("#studentModal");
    x.style.display = "none";

    //Reload page
    location.reload();
});

//Show Admin Schedule Information
//Add Listener to show admin schedule information
document.querySelector(".showSchedule").addEventListener("click", function() {
    //Get the specific student schedule data
    getStudentSchedule().then(res => res.json())
        .then(data => {
            //Save result data to array
            var schedules = [];
            //Input
            var input = document.querySelector("#studentNumber");
            //Filter what to save in the array - only the data that matches the studentNumber
            data.data.forEach(function(element) {
                if (element.studentID == input.value) {
                    schedules.push(element);
                }
            });

            //Query the time
            getTripSchedules().then(res => res.json())
                .then(data => {
                    //Save result data to array
                    var tripSchedules = [];
                    //Filter what to save in the array - only the data that matches the day
                    data.data.forEach(function(element) {
                        tripSchedules.push(element);
                    });
                    console.log(tripSchedules);
                    console.log(schedules);
                    //Display the schedule information
                    document.querySelector("#passengerNumber").innerHTML = schedules[0].studentID;
                    var convertedDay = "";
                    //Convert studentScheduleDay to string
                    switch (schedules[0].studentScheduleDay) {
                        case 1:
                            convertedDay = "Monday";
                            break;
                        case 2:
                            convertedDay = "Tuesday";
                            break;
                        case 3:
                            convertedDay = "Wednesday";
                            break;
                        case 4:
                            convertedDay = "Thursday";
                            break;
                        case 5:
                            convertedDay = "Friday";
                            break;
                        case 6:
                            convertedDay = "Saturday";
                            break;
                        case 7:
                            convertedDay = "Sunday";
                            break;
                    }
                    document.querySelector("#studentDay").innerHTML = convertedDay;
                    document.querySelector("#studentDeparture").innerHTML = tripSchedules[0].scheduleTime;
                    document.querySelector("#studentArrival").innerHTML = tripSchedules[0].scheduleTimeBack;
                    document.querySelector("#serialCode").innerHTML = schedules[0].SerialCode;
                });
        });


});


//Fetch for getting schedule information
function getStudentSchedule() {
    return fetch("http://localhost:3000/admin/getStudentSchedule", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
        },
        mode: "cors",
    });
}
//Fetch for getting schedule information
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