//Add Admin
//Add Listener to add admin button
document.querySelector(".createAdmin").addEventListener("click", createAdmin);
//Get inputs
var adminUsername = document.querySelector("#AdminUsername");
var adminPassword = document.querySelector("#AdminPassword");

//Function to process adding admin
function createAdmin() {
    var a = adminUsername.value;
    var b = adminPassword.value;

    var payload = {};

    if (a == "" || b == "") {
        alert("Please fill up all fields");
    } else {
        payload = {
            "username": adminUsername.value,
            "password": adminPassword.value
        };
        //Pass to server fetch
        addAdmin(payload).then(res => res.json())
            .then(data => {
                if (data.status == 201) {
                    alert("Admin added successfully");
                    //Clear inputs
                    adminUsername.value = "";
                    adminPassword.value = "";
                } else {
                    alert("Admin not added: " + data.message);
                }
            });;
    }
}

//Add Barangay
//Add Listener to add barangay button
document.querySelector(".createBarangay").addEventListener("click", createBarangay);

//Get inputs
var barangayName = document.querySelector("#barangayName");
var barangayLimits = document.querySelector("#barangayPopulation");

function createBarangay() {
    var a = barangayName.value;
    var b = barangayLimits.value;

    var payload = {};

    if (a == "" || b == "") {
        alert("Please fill up all fields");
    } else {
        payload = {
            "barangayName": barangayName.value,
            "barangayLimits": barangayLimits.value
        };
        //Pass to server fetch
        addBarangay(payload).then(res => res.json())
            .then(data => {
                if (data.status == 201) {
                    alert("Barangay added successfully");
                    //Clear inputs
                    barangayName.value = "";
                    barangayLimits.value = "";
                } else {
                    alert("Barangay not added: " + data.message);
                }
            });
    }

    //Regenerate Barangay List and Selects - with delay
    setTimeout(() => {
        generateBarangayList();
        loadBarangayList();
    }, 1000);

}


//Generate Barangay List
//Add on load function
window.addEventListener("load", generateBarangayList);

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

//Load Barangay List on Selects
window.addEventListener("load", loadBarangayList);

function loadBarangayList() {
    //Remove all options first before reloading
    var selects = document.querySelectorAll(".barangay");
    for (var i = 0; i < selects.length; i++) {
        selects[i].innerHTML = "";
    }
    console.log("Loading barangay list for every selects...");
    getBarangayList().then(res => res.json())
        .then(data => {
            //Save result data to array
            var barangayList = data.data;
            var selects = document.querySelectorAll(".barangay");
            //For each select, add options
            for (var i = 0; i < selects.length; i++) {
                for (var j = 0; j < barangayList.length; j++) {
                    var option = document.createElement("option");
                    option.text = barangayList[j].BarangayName;
                    option.value = barangayList[j].BarangayName;
                    selects[i].add(option);
                }
            }
        });
}

//Edit Barangay
//Add listener to edit barangay button
document.querySelector(".editBarangay").addEventListener("click", editBarangay);

function editBarangay() {
    var barangayToEdit = document.querySelector("#barangayToEdit").value;
    var barangayName = document.querySelector("#editBarangayName").value;
    var barangayLimits = document.querySelector("#editBarangayLimit").value;

    var payload = {
        "barangayToEdit": barangayToEdit,
        "barangayName": barangayName,
        "barangayLimits": barangayLimits
    };

    console.log(payload);

    if (barangayToEdit == "" || barangayName == "" || barangayLimits == "") {
        alert("Please fill up all fields");
    } else {
        //Pass to server fetch
        editBarangayFetch(payload).then(res => res.json())
            .then(data => {
                if (data.status == 200) {
                    alert("Barangay edited successfully");
                    //Clear inputs
                    document.querySelector("#editBarangayName").value = "";
                    document.querySelector("#editBarangayLimit").value = "";
                    //Regenerate Barangay List and Selects - with delay
                    setTimeout(() => {
                        generateBarangayList();
                        loadBarangayList();
                    }, 1000);
                } else {
                    alert("Barangay not edited: " + data.message);
                }
            });
    }
}



//Add an function to add the name automatically on choosing the select
document.querySelector("#barangayToEdit").addEventListener("change", function() {
    var barangayToEdit = document.querySelector("#barangayToEdit").value;
    getBarangayList().then(res => res.json())
        .then(data => {
            var barangayList = data.data;
            for (var i = 0; i < barangayList.length; i++) {
                if (barangayList[i].BarangayName == barangayToEdit) {
                    document.querySelector("#editBarangayName").value = barangayList[i].BarangayName;
                }
            }
        });
});

//Delete Barangay
//Add listener to delete barangay button
document.querySelector(".deleteBarangay").addEventListener("click", deleteBarangay);

function deleteBarangay() {
    var barangayToDelete = document.querySelector("#deleteBarangay").value;
    var payload = {
        "barangayToDelete": barangayToDelete
    };

    if (barangayToDelete == "") {
        alert("Please fill up all fields");
    } else {
        //Pass to server fetch
        deleteBarangayFetch(payload).then(res => res.json())
            .then(data => {
                if (data.status == 200) {
                    alert("Barangay deleted successfully");
                    //Regenerate Barangay List and Selects - with delay
                    setTimeout(() => {
                        generateBarangayList();
                        loadBarangayList();
                    }, 1000);
                } else {
                    alert("Barangay not deleted: " + data.message);
                }
            });
    }


}



//Generate Admin List
//Add on load function
window.addEventListener("load", generateAdminList);

function generateAdminList() {
    //Clear the table before re-adding - without removing headers
    var table = document.querySelector("#adminList");
    table.innerHTML = "<tr><th>Username</th></tr>";

    getAdminList().then(res => res.json())
        .then(data => {
            //Save result data to array
            var adminList = data.data;
            //For each admin, add a row to the table
            for (var i = 0; i < adminList.length; i++) {
                var table = document.querySelector("#adminList");
                var row = table.insertRow(-1);
                var cell1 = row.insertCell(0);
                cell1.innerHTML = adminList[i].AdminUsername;
            }
        });
}

//Load Admin List on Selects
window.addEventListener("load", loadAdminList);

function loadAdminList() {
    //Remove all options first before reloading
    var selects = document.querySelectorAll(".admin");
    for (var i = 0; i < selects.length; i++) {
        selects[i].innerHTML = "";
    }
    console.log("Loading admin list for every selects...");
    getAdminList().then(res => res.json())
        .then(data => {
            //Save result data to array
            var adminList = data.data;
            var selects = document.querySelectorAll(".admin");
            //For each select, add options
            for (var i = 0; i < selects.length; i++) {
                for (var j = 0; j < adminList.length; j++) {
                    var option = document.createElement("option");
                    option.text = adminList[j].AdminUsername;
                    option.value = adminList[j].AdminUsername;
                    selects[i].add(option);
                }
            }
        });
}

//Edit Admin
//Add listener to edit admin button
document.querySelector(".editAdmin").addEventListener("click", editAdmin);

function editAdmin() {
    var adminToEdit = document.querySelector("#adminToEdit").value;
    var adminUsername = document.querySelector("#editAdminUsername").value;
    var adminPassword = document.querySelector("#editAdminPassword").value;

    var payload = {
        "adminToEdit": adminToEdit,
        "username": adminUsername,
        "password": adminPassword
    };

    console.log(payload);

    if (adminToEdit == "" || adminUsername == "" || adminPassword == "") {
        alert("Please fill up all fields");
    } else {
        //Pass to server fetch
        editAdminFetch(payload).then(res => res.json())
            .then(data => {
                if (data.status == 200) {
                    alert("Admin edited successfully");
                    //Clear inputs
                    document.querySelector("#editAdminUsername").value = "";
                    document.querySelector("#editAdminPassword").value = "";
                    //Regenerate Admin List and Selects - with delay
                    setTimeout(() => {
                        generateAdminList();
                        loadAdminList();
                    }, 1000);
                } else {
                    alert("Admin not edited: " + data.message);
                }
            });
    }
}

//Add an function to add the admin username automatically on choosing the select
document.querySelector("#adminToEdit").addEventListener("change", function() {
    var adminToEdit = document.querySelector("#adminToEdit").value;
    getAdminList().then(res => res.json())
        .then(data => {
            var adminList = data.data;
            for (var i = 0; i < adminList.length; i++) {
                if (adminList[i].AdminUsername == adminToEdit) {
                    document.querySelector("#editAdminUsername").value = adminList[i].AdminUsername;
                }
            }
        });
});

//Delete Admin
//Add listener to delete admin button
document.querySelector(".deleteAdmin").addEventListener("click", deleteAdmin);

function deleteAdmin() {
    var adminToDelete = document.querySelector("#deleteAdmin").value;
    var payload = {
        "adminToDelete": adminToDelete
    };

    if (adminToDelete == "") {
        alert("Please fill up all fields");
    } else {
        //Pass to server fetch
        deleteAdminFetch(payload).then(res => res.json())
            .then(data => {
                if (data.status == 200) {
                    alert("Admin deleted successfully");
                    //Regenerate Admin List and Selects - with delay
                    setTimeout(() => {
                        generateAdminList();
                        loadAdminList();
                    }, 1000);
                } else {
                    alert("Admin not deleted: " + data.message);
                }
            });
    }
}

//Add student
//Add listener to add student button
document.querySelector(".createStudent").addEventListener("click", createStudent);

function createStudent() {
    var studentFirstName = document.querySelector("#firstName").value;
    var studentMiddleName = document.querySelector("#middleName").value;
    var studentLastName = document.querySelector("#lastName").value;
    var studentAddress = document.querySelector("#address").value;
    var studentEmail = document.querySelector("#email").value;
    var studentContactNumber = document.querySelector("#contactNumber").value;
    var studentCollege = document.querySelector("#collegeName").value;
    var studentBarangay = document.querySelector("#barangay").value;
    var studentSchedule = document.querySelector("#ScheduleDay").value;


    var payload = {
        "studentID": Math.floor(Math.random() * 1000000),
        "studentFirstName": studentFirstName,
        "studentMiddleName": studentMiddleName,
        "studentLastName": studentLastName,
        "studentAddress": studentAddress,
        "studentEmail": studentEmail,
        "studentContactNumber": studentContactNumber,
        "studentCollege": studentCollege,
        "studentBarangay": studentBarangay
    };

    addStudent(payload).then(res => res.json())
        .then(data => {
            if (data.status == 201) {
                alert("Student added successfully");
                //Clear inputs
                document.querySelector("#firstName").value = "";
                document.querySelector("#middleName").value = "";
                document.querySelector("#lastName").value = "";
                document.querySelector("#address").value = "";
                document.querySelector("#email").value = "";
                document.querySelector("#contactNumber").value = "";
                document.querySelector("#collegeName").value = "";
                document.querySelector("#barangay").value = "";

                //Add schedule for student
                var schedulePayload = {
                    "studentID": payload.studentID,
                    "scheduleDay": studentSchedule
                };

                setSchedule(schedulePayload).then(res => res.json())
                    .then(data => {
                        if (data.status == 201) {
                            alert("Schedule added successfully");

                            //Clear inputs
                            document.querySelector("#ScheduleDay").value = "";

                            //Regenerate Student List - with delay
                            setTimeout(() => {
                                generateStudentList();
                            }, 1000);
                        } else {
                            alert("Schedule not added: " + data.message);
                        }
                    });
            } else {
                alert("Student not added: " + data.message);
            }
        });

    //After adding student, create a schedule for the student
}

//Get student list
//Add click listener to view student list
document.querySelector(".viewStudentBtn").addEventListener("click", getStudentList);

function getStudentList() {
    getStudentListFetch().then(res => res.json())
        .then(data => {
            var studentList = data.data;
            var table = document.querySelector("#studentList");
            table.innerHTML = "<tr><th>Passenger Number</th><th>First Name</th><th>Middle Name</th><th>Last Name</th><th>Address</th><th>Email</th><th>Contact Number</th><th>College</th><th>Barangay</th></tr>";
            for (var i = 0; i < studentList.length; i++) {
                var row = table.insertRow(-1);
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                var cell3 = row.insertCell(2);
                var cell4 = row.insertCell(3);
                var cell5 = row.insertCell(4);
                var cell6 = row.insertCell(5);
                var cell7 = row.insertCell(6);
                var cell8 = row.insertCell(7);
                var cell9 = row.insertCell(8);
                cell1.innerHTML = studentList[i].StudentID;
                cell2.innerHTML = studentList[i].StudentFirstName;
                cell3.innerHTML = studentList[i].StudentMiddleName;
                cell4.innerHTML = studentList[i].StudentLastName;
                cell5.innerHTML = studentList[i].StudentAddress;
                cell6.innerHTML = studentList[i].StudentEmail;
                cell7.innerHTML = studentList[i].StudentContactNumber;
                cell8.innerHTML = studentList[i].StudentCollegeName;
                cell9.innerHTML = studentList[i].StudentBarangay;
            }
        });
}

//Generate Student List for selects
window.addEventListener("load", generateStudentList);

function generateStudentList() {
    getStudentListFetch().then(res => res.json())
        .then(data => {
            //Remove all options first before reloading
            var studentList = data.data;
            var selects = document.querySelectorAll(".student");
            for (var i = 0; i < selects.length; i++) {
                selects[i].innerHTML = "";
            }
            for (var i = 0; i < selects.length; i++) {
                for (var j = 0; j < studentList.length; j++) {
                    var option = document.createElement("option");
                    option.text = studentList[j].StudentFirstName + " " + studentList[j].StudentMiddleName + " " + studentList[j].StudentLastName;
                    option.value = studentList[j].StudentID;
                    selects[i].add(option);
                }
            }
        });
}

//Edit Student Schedule
//Add listener to edit student schedule button
document.querySelector(".editStudentSchedule").addEventListener("click", editStudentSchedule);

function editStudentSchedule() {
    var studentID = document.querySelector("#studentToEditSchedule").value;
    var studentSchedule = document.querySelector("#editStudentScheduleDay").value;

    var payload = {
        "studentID": studentID,
        "scheduleDay": studentSchedule
    };

    if (studentID == "" || studentSchedule == "") {
        alert("Please fill up all fields");
    } else {
        //Pass to server fetch
        setSchedule(payload).then(res => res.json())
            .then(data => {
                if (data.status == 201 || data.status == 200) {
                    alert(data.message);
                } else {
                    alert("Schedule not edited: " + data.message);
                }
            });
    }
}

//Delete Student
//Add listener to delete student button
document.querySelector(".deleteStudent").addEventListener("click", deleteStudent);

function deleteStudent() {
    var studentID = document.querySelector("#studentToDelete").value;
    var payload = {
        "studentToDelete": studentID
    };

    if (studentID == "") {
        alert("Please fill up all fields");
    } else {
        //Pass to server fetch
        deleteStudentFetch(payload).then(res => res.json())
            .then(data => {
                if (data.status == 200) {
                    alert("Student deleted successfully");
                    //Regenerate Student List - with delay
                    setTimeout(() => {
                        generateStudentList();
                    }, 1000);
                } else {
                    alert("Student not deleted: " + data.message);
                }
            });
    }
}

//Edit Student
//Add listener to edit student button
document.querySelector(".editStudent").addEventListener("click", editStudent);

function editStudent() {
    var studentID = document.querySelector("#studentToEdit").value;
    var studentFirstName = document.querySelector("#editStudentFirstName").value;
    var studentMiddleName = document.querySelector("#editStudentMiddleName").value;
    var studentLastName = document.querySelector("#editStudentLastName").value;
    var studentAddress = document.querySelector("#editStudentAddress").value;
    var studentEmail = document.querySelector("#editStudentEmail").value;
    var studentContactNumber = document.querySelector("#editStudentContactNumber").value;
    var studentCollege = document.querySelector("#editStudentCollegeName").value;
    var studentBarangay = document.querySelector("#editStudentBarangay").value;

    var payload = {
        "studentToEdit": studentID,
        "studentFirstName": studentFirstName,
        "studentMiddleName": studentMiddleName,
        "studentLastName": studentLastName,
        "studentAddress": studentAddress,
        "studentEmail": studentEmail,
        "studentContactNumber": studentContactNumber,
        "studentCollege": studentCollege,
        "studentBarangay": studentBarangay
    };

    if (studentID == "" || studentFirstName == "" || studentMiddleName == "" || studentLastName == "" || studentAddress == "" || studentEmail == "" || studentContactNumber == "" || studentCollege == "" || studentBarangay == "") {
        alert("Please fill up all fields");
    } else {
        //Pass to server fetch
        editStudentFetch(payload).then(res => res.json())
            .then(data => {
                if (data.status == 200) {
                    alert("Student edited successfully");
                    //Regenerate Student List - with delay
                    setTimeout(() => {
                        generateStudentList();
                    }, 1000);
                } else {
                    alert("Student not edited: " + data.message);
                }
            });
    }
}

//Add an function to add the student data on the fields automatically on choosing the select
document.querySelector("#studentToEdit").addEventListener("change", function() {
    var studentID = document.querySelector("#studentToEdit").value;
    getStudentListFetch().then(res => res.json())
        .then(data => {
            var studentList = data.data;
            for (var i = 0; i < studentList.length; i++) {
                if (studentList[i].StudentID == studentID) {
                    document.querySelector("#editStudentFirstName").value = studentList[i].StudentFirstName;
                    document.querySelector("#editStudentMiddleName").value = studentList[i].StudentMiddleName;
                    document.querySelector("#editStudentLastName").value = studentList[i].StudentLastName;
                    document.querySelector("#editStudentAddress").value = studentList[i].StudentAddress;
                    document.querySelector("#editStudentEmail").value = studentList[i].StudentEmail;
                    document.querySelector("#editStudentContactNumber").value = studentList[i].StudentContactNumber;
                    document.querySelector("#editStudentCollegeName").value = studentList[i].StudentCollegeName;
                    document.querySelector("#editStudentBarangay").value = studentList[i].StudentBarangay;
                }
            }
        });
});

//Update Trip Schedule
//Add listener to update trip schedule button
document.querySelector(".updateTripSchedule").addEventListener("click", updateTripScheduleBtn);

function updateTripScheduleBtn() {
    var schdueleDay = document.querySelector("#day").value;
    //Get the time from three different inputs - hour, minute, and AM/PM
    var scheduleTime = document.querySelector("#deptTimeHour").value + ":" + document.querySelector("#deptTimeMinute").value + " " + document.querySelector("#deptTimePeriod").value;
    var schdueleTimeBack = document.querySelector("#timeBackHour").value + ":" + document.querySelector("#timeBackMinute").value + " " + document.querySelector("#timeBackPeriod").value;
    //Convert to 24-hour format since the server uses 24-hour format
    var time = scheduleTime.split(':');
    var timeBack = schdueleTimeBack.split(':');
    var hours = time[0];
    var hoursBack = timeBack[0];
    //Remove AM PM in minutes
    var minutes = time[1].split(' ')[0];
    var minutesBack = timeBack[1].split(' ')[0];
    var ampm = scheduleTime.split(' ')[1];
    var ampmBack = schdueleTimeBack.split(' ')[1];
    if (ampm == "PM") {
        hours = parseInt(hours) + 12;
    }
    if (ampmBack == "PM") {
        hoursBack = parseInt(hoursBack) + 12;
    }

    console.log(ampm + " " + ampmBack);

    var a = hours + ":" + minutes;
    var b = hoursBack + ":" + minutesBack;

    console.log("Time: " + a + " TimeBack: " + b);
    var payload = {
        "scheduleDay": schdueleDay,
        "scheduleTime": a,
        "scheduleTimeBack": b
    };

    if (schdueleDay == "" || scheduleTime == "" || schdueleTimeBack == "") {
        alert("Please fill up all fields");
    } else {
        //Pass to server fetch
        updateTripSchedule(payload).then(res => res.json())
            .then(data => {
                if (data.status == 200) {
                    alert("Trip schedule \rupdated successfully");
                } else {
                    alert("Trip schedule not updated: " + data.message);
                }
            });
    }
}

//Show Admin Schedule Information
//Add Listener to show admin schedule information
document.querySelector(".showSchedule").addEventListener("click", function() {
    //Get the specific student schedule data
    getStudentSchedule().then(res => res.json())
        .then(data => {
            //Save result data to array
            var schedules = [];
            //Input
            var input = document.querySelector("#scheduleIdReport");
            console.log(input.value);
            //Filter what to save in the array - only the data that matches the studentNumber
            data.data.forEach(function(element) {
                if (element.studentID == input.value) {
                    schedules.push(element);
                }
            });
            //Also try to filter using the Serial Code
            if (schedules.length == 0) {
                data.data.forEach(function(element) {
                    if (element.SerialCode == input.value) {
                        schedules.push(element);
                    }
                });
            }

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
    document.querySelector("#studentModal").style.display = "flex";
});


//=====Fetch Functions=====//

//Fetch for adding admin
function addAdmin(payload) {
    return fetch("http://localhost:3000/admin/addAdmin", {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
        },
        mode: "cors",
    })
}

//Fetch for adding barangay
function addBarangay(payload) {
    console.log(payload);
    return fetch("http://localhost:3000/admin/addBarangay", {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
        },
        mode: "cors",
    })
};

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

//Fetch for editing barangay
function editBarangayFetch(payload) {
    console.log(payload);
    return fetch("http://localhost:3000/admin/editBarangay", {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
        },
        mode: "cors",
    });
}

//Fetch for deleting barangay
function deleteBarangayFetch(payload) {
    return fetch("http://localhost:3000/admin/deleteBarangay", {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
        },
        mode: "cors",
    });
}
//Fetch for getting admin list
function getAdminList() {
    return fetch("http://localhost:3000/admin/getAdminList", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
        },
        mode: "cors",
    });
}

//Fetch for editing admin
function editAdminFetch(payload) {
    return fetch("http://localhost:3000/admin/editAdmin", {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
        },
        mode: "cors",
    });
}

//Fetch for deleting admin
function deleteAdminFetch(payload) {
    return fetch("http://localhost:3000/admin/deleteAdmin", {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
        },
        mode: "cors",
    });
}

//Fetch for adding student
function addStudent(payload) {
    console.log(payload);
    return fetch("http://localhost:3000/admin/addStudent", {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
        },
        mode: "cors",
    });
}

//Fetch for getting student list
function getStudentListFetch() {
    return fetch("http://localhost:3000/admin/getStudentList", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
        },
        mode: "cors",
    });
}

//Fetch for adding schedule
function setSchedule(payload) {
    return fetch("http://localhost:3000/admin/setSchedule", {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
        },
        mode: "cors",
    });
}

//Fetch for deleting student
function deleteStudentFetch(payload) {
    return fetch("http://localhost:3000/admin/deleteStudent", {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
        },
        mode: "cors",
    });
}

//Fetch for editing student
function editStudentFetch(payload) {
    return fetch("http://localhost:3000/admin/editStudent", {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
        },
        mode: "cors",
    });
}

//Fetch update trip schedule
function updateTripSchedule(payload) {
    return fetch("http://localhost:3000/admin/updateTripSchedules", {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
        },
        mode: "cors",
    });
}
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