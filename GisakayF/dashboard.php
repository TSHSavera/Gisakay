<?php
    session_start();
    if(!isset($_SESSION['token'])){
        //Alert not logged in
        header("Location: index.php");
    }
?>
<!DOCTYPE html>
<html>
    <head>
        <title>GFTSS</title>
        <link rel="stylesheet" type="text/css" href="css/styles.css">
        <!-- <link rel="stylesheet" type="text/css" href="css/color.css"> -->
    </head>
    <body class="background">
        <div class="main-grid">
            <nav class="topnav surface-container-highest">
                <div class="topnav-left">
                    <h1>Gisakay</h1>
                </div>
                <div class="topnav-right">
                    <button class="button primary nav-home">Home</button>
                    <button class="button primary nav-schedules">Schedules</button>
                    <button class="button primary nav-dashboard">Dashboard</button>
                    <button class="button error nav-logout">Logout</button>
                </div>
            </nav>

            <div class="body">
                <!--Menu Left-->
                <div class=" option-menu body-left">
                    <div class="card surface-container-high">
                        <h1>Menu</h1>
                        <p>Please select an operation</p>
                        <div class="menu-list">
                            <button class="button primary switchSchedule">Schedule a Passenger</button>
                            <button class="button primary switchBarangay">Edit List of Barangays</button>
                            <button class="button primary switchTrip">Edit Scheduled Trip</button>
                            <button class="button primary viewAdmin">View Admins</button>
                            <button class="button primary generateReport">Report</button>
                        </div>
                    </div>
                </div>
                <div class="scheduleStudent body-right">
                    <div class="card surface-container-high">
                        <div class="bl-options">
                            <h1>Schedule a Passenger</h1>
                            <button class="button primary viewStudentBtn">View Passenger List</button>
                            <button class="button primary editStudentScheduleBtn">Edit Passenger Schedule</button>
                            <button class="button primary editStudentBtn">Edit Passenger Data</button>
                            <button class="button primary deleteStudentBtn">Delete Passenger</button>
                        </div>
                        <form id="addStudentForm" action="javascript:void(0)">
                            <div class="form-element firstNameContainer">
                                <label for="firstName">First Name</label>
                                <input type="text" id="firstName" name="firstName" placeholder="Enter first name">
                            </div>
                            <div class="form-element middleNameContainer">
                                <label for="middleName">Middle Name</label>
                                <input type="text" id="middleName" name="middleName" placeholder="Enter middle name">
                            </div>
                            <div class="form-element lastNameContainer">
                                <label for="lastName">Last Name</label>
                                <input type="text" id="lastName" name="lastName" placeholder="Enter last name">
                            </div>
                            <div class="form-element addressContainer">
                                <label for="address">Address</label>
                                <input type="text" id="address" name="address" placeholder="Enter address">
                            </div>
                            <div class="form-element emailContainer">
                                <label for="email">Email</label>
                                <input type="text" id="email" name="email" placeholder="Enter email">
                            </div>
                            <div class="form-element contactNumberContainer">
                                <label for="contactNumber">Contact Number</label>
                                <input type="number" id="contactNumber" name="contactNumber" placeholder="Enter contact number">
                            </div>
                            <div class="form-element collegeNameContainer">
                                <label for="collegeName">College Name</label>
                                <input type="text" id="collegeName" name="collegeName" placeholder="Enter college name">
                            </div>
                            <div class="form-element barangayContainer">
                                <label for="barangay">Barangay</label>
                                <select class="barangay" name="barangay" id="barangay">
                                </select>
                            </div>
                            <div class="form-element dayContainer">
                                <label for="day">Day</label>
                                <select id="ScheduleDay" name="day">
                                    <option value="1">Monday</option>
                                    <option value="2">Tuesday</option>
                                    <option value="3">Wednesday</option>
                                    <option value="4">Thursday</option>
                                    <option value="5">Friday</option>
                                    <option value="6">Saturday</option>
                                    <option value="7">Sunday</option>
                                </select>
                            </div>
                            <div class="form-element submitContainer">
                                <button class="button primary createStudent">Submit</button>
                                <button class="button primary clearForm" onclick="document.getElementById('addStudentForm').reset()">Clear</button>
                            </div>

                        </form>
                    </div>
                </div>

                <div class="barangayDetails body-right">
                    <div class="card surface-container-high">
                        <div class="bl-options">
                            <h1>Barangay List</h1>
                            <button class="button primary addBarangayBtn">Add Barangay</button>
                            <button class="button primary editBarangayBtn">Edit Barangay</button>
                            <button class="button primary deleteBarangayBtn">Delete Barangay</button>
                        </div>
                        <table id="barangayList">
                            <tr>
                                <th>Barangay</th>
                                <th>Number of Students</th>
                            </tr>
                        </table>
                    </div>
                </div>

                <div class="editScheduledTrip body-right">
                    <div class="card surface-container-high">
                        <h1>Edit Scheduled Trip</h1>
                        <form action="javascript:void(0)">
                            <div class="form-element dayContainer">
                                <label for="day">Day</label>
                                <select id="day" name="day">
                                    <option value="1">Monday</option>
                                    <option value="2">Tuesday</option>
                                    <option value="3">Wednesday</option>
                                    <option value="4">Thursday</option>
                                    <option value="5">Friday</option>
                                    <option value="6">Saturday</option>
                                    <option value="7">Sunday</option>
                                </select>
                            </div>
                            <div class="form-element timeContainer">
                                <label for="deptTime">Departure</label>
                                <!--Custom Time Input-->
                                <input type="number" id="deptTimeHour" name="deptTime" placeholder="Enter Hour" max="12" min="1">
                                <input type="number" id="deptTimeMinute" name="deptTime" placeholder="Enter Minute" max="59" min="0">
                                <select id="deptTimePeriod" name="deptTimePeriod">
                                    <option value="AM">AM</option>
                                    <option value="PM">PM</option>
                                </select>
                            </div>
                            <div class="form-element timeBackContainer">
                                <label for="timeBack">Arrival</label>
                                <!--Custom Time Input-->
                                <input type="number" id="timeBackHour" name="timeBack" placeholder="Enter Hour" max="12" min="1">
                                <input type="number" id="timeBackMinute" name="timeBack" placeholder="Enter Minute" max="59" min="0">
                                <select id="timeBackPeriod" name="timeBackPeriod">
                                    <option value="AM">AM</option>
                                    <option value="PM">PM</option>
                                </select>
                            </div>
                            <div class="form-element submitContainer">
                                <button class="button primary updateTripSchedule">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>

                <div class="welcome body-right">
                    <h1>Welcome to Admin Dashboard</h1>
                    <p>Click on the menu to get started</p>
                </div>

                <div class="viewAdminList body-right">
                    <div class="card surface-container-high">
                        <div class="bl-options">
                            <h1>Admin List</h1>
                            <button class="button primary addAdminBtn">Add Admin</button>
                            <button class="button primary editAdminBtn">Edit Admin</button>
                            <button class="button primary deleteAdminBtn">Delete Admin</button>
                        </div>
                        <table id="adminList">
                            <tr>
                                <th>Admin</th>
                            </tr>
                        </table>
                    </div>
                </div>

                <!--Generate Report-->
                <div class="viewGenerateReport body-right">
                    <div class="card surface-container-high">
                        <h1>Report Generator</h1>
                        <form action="javascript:void(0)">
                            <div class="form-element reportTypeContainer">
                                <label for="scheduleIdReport">Enter Serial Code or Passenger Number</label>
                                <input type="text" id="scheduleIdReport" name="scheduleIdReport" placeholder="Enter serial code or passenger number">
                            </div>
                            <div class="form-element submitContainer">
                                <button class="button primary showSchedule">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
    

            <!--Modals-->
            <!--Add Barangay Modal Form-->
            <div class="modal" id="addBarangayModal">
                <div class="modal-content card surface-container">
                    <h1>Add Barangay</h1>
                    <form action="javascript:void(0)">
                        <div class="form-element barangayNameContainer">
                            <label for="barangayName">Barangay Name</label>
                            <input type="text" id="barangayName" name="barangayName" placeholder="Enter barangay name">
                        </div>
                        <div class="form-element barangayPopulationContainer">
                            <label for="barangayPopulation">Passenger Per Barangay</label>
                            <input type="number" id="barangayPopulation" name="barangayPopulation" placeholder="Enter a number">
                        </div>
                        <div class="form-element submitContainer">
                            <button class="button primary createBarangay">Submit</button>
                            <button class="button primary closeAddBarangay">Cancel</button>
                        </div>
                    </form>
                </div>
            </div>

            <!--Edit Barangay Modal Form-->
            <div class="modal" id="editBarangayModal">
                <div class="modal-content card surface-container">
                    <h1>Edit Barangay</h1>
                    <form action="javascript:void(0)">
                        <label for="editBarangay">Choose a Barangay to Edit</label>
                        <select id="barangayToEdit" name="editBarangay" class="barangay">
                        </select>
                        <div class="form-element editBarangayNameContainer">
                            <label for="editBarangayName">Barangay Name</label>
                            <input type="text" id="editBarangayName" name="editBarangayName" placeholder="Enter barangay name">
                        </div>
                        <div class="form-element editBarangayLimitContainer">
                            <label for="editBarangayLimit">Passenger Per Barangay</label>
                            <input type="number" id="editBarangayLimit" name="editBarangayLimit" placeholder="Enter a number">
                        </div>
                        <div class="form-element submitContainer">
                            <button class="button primary editBarangay">Submit</button>
                            <button class="button primary closeEditBarangay">Cancel</button>
                        </div>
                    </form>
                </div>
            </div>

            <!--Delete Barangay Modal Form-->
            <div class="modal" id="deleteBarangayModal">
                <div class="modal-content card surface-container">
                    <h1>Delete Barangay</h1>
                    <form action="javascript:void(0)">
                        <label for="deleteBarangay">Choose a Barangay to Delete</label>
                        <select id="deleteBarangay" name="deleteBarangay" class="barangay">
                        </select>
                        <div class="form-element submitContainer">
                            <button class="button primary deleteBarangay">Submit</button>
                            <button class="button primary closeDeleteBarangay">Cancel</button>
                        </div>
                    </form>
                </div>
            </div>

            <!--Add Admin Modal Form-->
            <div class="modal" id="addAdminModal">
                <div class="modal-content card surface-container">
                    <h1>Add Admin</h1>
                    <form action="javascript:void(0)">
                        <div class="form-element adminNameContainer">
                            <label for="adminName">Admin Username</label>
                            <input type="text" id="AdminUsername" name="userName" placeholder="Enter admin username">
                        </div>
                        <div class="form-element adminPasswordContainer">
                            <label for="adminPassword">Admin Password</label>
                            <input type="password" id="AdminPassword" name="adminPassword" placeholder="Enter admin password">
                        </div>
                        <div class="form-element submitContainer">
                            <button class="button primary createAdmin">Submit</button>
                            <button class="button primary closeAddAdmin">Cancel</button>
                        </div>

                    </form>
                </div>
            </div>

            <!--Edit Admin Modal Form-->
            <div class="modal" id="editAdminModal">
                <div class="modal-content card surface-container">
                    <h1>Edit Admin</h1>
                    <form action="javascript:void(0)">
                        <label for="editAdmin">Choose an Admin to Edit</label>
                        <select id="adminToEdit" name="editAdmin" class="admin">
                        </select>
                        <div class="form-element editAdminNameContainer">
                            <label for="editAdminUsername">Admin Username</label>
                            <input type="text" id="editAdminUsername" name="editAdminUsername" placeholder="Enter admin username">
                        </div>
                        <div class="form-element editAdminPasswordContainer">
                            <label for="editAdminPassword">Admin Password</label>
                            <input type="password" id="editAdminPassword" name="editAdminPassword" placeholder="Enter admin password">
                        </div>
                        <div class="form-element submitContainer">
                            <button class="button primary editAdmin">Submit</button>
                            <button class="button primary closeEditAdmin">Cancel</button>
                        </div>
                    </form>
                </div>
            </div>

            <!--Delete Admin Modal Form-->
            <div class="modal" id="deleteAdminModal">
                <div class="modal-content card surface-container">
                    <h1>Delete Admin</h1>
                    <form action="javascript:void(0)">
                        <label for="deleteAdmin">Choose an Admin to Delete</label>
                        <select id="deleteAdmin" name="deleteAdmin" class="admin">
                        </select>
                        <div class="form-element submitContainer">
                            <button class="button primary deleteAdmin">Submit</button>
                            <button class="button primary closeDeleteAdmin">Cancel</button>
                        </div>
                    </form>
                </div>
            </div>

            <!--View Student List Modal Form-->
            <div class="modal" id="viewStudentListModal">
                <div class="modal-content card surface-container">
                    <div class="bl-options">
                        <h1>Passenger List</h1>
                        <button class="button primary closeStudentList">Close</button>
                    </div>
                    <table id="studentList">
                        <tr>
                            <th>Passenger Number</th>
                            <th>First Name</th>
                            <th>Middle Name</th>
                            <th>Last Name</th>
                            <th>Address</th>
                            <th>Email</th>
                            <th>Contact Number</th>
                            <th>College Name</th>
                            <th>Barangay</th>
                        </tr>
                    </table>
                </div>
            </div>

            <!--Edit Student Schedule Modal Form-->
            <div class="modal" id="editStudentScheduleModal">
                <div class="modal-content card surface-container">
                    <h1>Edit Passenger Schedule</h1>
                    <form action="javascript:void(0)">
                        <label for="editStudentSchedule">Choose a Passenger to Edit</label>
                        <select id="studentToEditSchedule" name="editStudentSchedule" class="student">
                        </select>
                        <div class="form-element editStudentDayContainer">
                            <label for="editStudentDay">Day</label>
                            <select id="editStudentScheduleDay" name="editStudentDay">
                                <option value="1">Monday</option>
                                <option value="2">Tuesday</option>
                                <option value="3">Wednesday</option>
                                <option value="4">Thursday</option>
                                <option value="5">Friday</option>
                                <option value="6">Saturday</option>
                                <option value="7">Sunday</option>
                            </select>
                        </div>
                        <div class="form-element submitContainer">
                            <button class="button primary editStudentSchedule">Submit</button>
                            <button class="button primary closeEditStudentSchedule">Cancel</button>
                        </div>
                    </form>
                </div>
            </div>

            <!--Delete Student Modal Form-->
            <div class="modal" id="deleteStudentModal">
                <div class="modal-content card surface-container">
                    <h1>Delete Passenger</h1>
                    <form action="javascript:void(0)">
                        <label for="studentToDelete">Choose a Passenger to Delete</label>
                        <select id="studentToDelete" name="studentToDelete" class="student">
                        </select>
                        <div class="form-element submitContainer">
                            <button class="button primary deleteStudent">Submit</button>
                            <button class="button primary closeDeleteStudent">Cancel</button>
                        </div>
                    </form>
                </div>
            </div>

            <!--Edit Student Modal Form-->
            <div class="modal" id="editStudentModal">
                <div class="modal-content card surface-container">
                    <h1>Edit Passenger</h1>
                    <form action="javascript:void(0)">
                        <label for="studentToEdit">Choose a Passenger to Edit</label>
                        <select id="studentToEdit" name="studentToEdit" class="student">
                        </select>
                        <div class="form-element editStudentFirstNameContainer">
                            <label for="editStudentFirstName">First Name</label>
                            <input type="text" id="editStudentFirstName" name="editStudentFirstName" placeholder="Enter first name">
                        </div>
                        <div class="form-element editStudentMiddleNameContainer">
                            <label for="editStudentMiddleName">Middle Name</label>
                            <input type="text" id="editStudentMiddleName" name="editStudentMiddleName" placeholder="Enter middle name">
                        </div>
                        <div class="form-element editStudentLastNameContainer">
                            <label for="editStudentLastName">Last Name</label>
                            <input type="text" id="editStudentLastName" name="editStudentLastName" placeholder="Enter last name">
                        </div>
                        <div class="form-element editStudentAddressContainer">
                            <label for="editStudentAddress">Address</label>
                            <input type="text" id="editStudentAddress" name="editStudentAddress" placeholder="Enter address">
                        </div>
                        <div class="form-element editStudentEmailContainer">
                            <label for="editStudentEmail">Email</label>
                            <input type="text" id="editStudentEmail" name="editStudentEmail" placeholder="Enter email">
                        </div>
                        <div class="form-element editStudentContactNumberContainer">
                            <label for="editStudentContactNumber">Contact Number</label>
                            <input type="number" id="editStudentContactNumber" name="editStudentContactNumber" placeholder="Enter contact number">
                        </div>
                        <div class="form-element editStudentCollegeNameContainer">
                            <label for="editStudentCollegeName">College Name</label>
                            <input type="text" id="editStudentCollegeName" name="editStudentCollegeName" placeholder="Enter college name">
                        </div>
                        <div class="form-element editStudentBarangayContainer">
                            <label for="editStudentBarangay">Barangay</label>
                            <select id="editStudentBarangay" name="edit
                            StudentBarangay" class="barangay">
                            </select>
                        </div>
                        <div class="form-element submitContainer">
                            <button class="button primary editStudent">Submit</button>
                            <button class="button primary closeEditStudent">Cancel</button>
                        </div>
                    </form>
                </div>
            </div>


            <footer>
                <center>
                    <p>&copy; 2024 Gisakay</p>
                </center>
            </footer>
        </div>

        <!--Student Modal-->
        <div class="modal" id="studentModal">
                <div class="modal-content card surface-container-high" style="overflow: hidden;">
                    <h1>Schedule Information</h1>
                    <p>Here's your ticket</p>

                    <div class="ticket" id="printTicket">
                        <div class="ticket-info">
                            <div class="ticket-header">
                                <p>Giporlosanon Free Transportation Scheduling System</p>
                            </div>
                            <div class="ticket-body">
                                <div class="ticket-info-left">
                                    <p>Passenger Number</p>
                                    <p>Day</p>
                                    <p>Time of Departure</p>
                                    <p>Time of Arrival</p>
                                </div>
                                <div class="ticket-info-right">
                                    <p id="passengerNumber">2019101234</p>
                                    <p id="studentDay">Monday</p>
                                    <p id="studentDeparture">7:00 AM</p>
                                    <p id="studentArrival">10:00 PM</p>
                                </div>
                                <div class="ticket-info-boarding-pass">

                                </div>
                            </div>
                        </div>
                        <div class="ticket-boarding-pass">
                            <div class="ticket-header">
                                <p>Boarding Pass</p>
                            </div>
                            <div class="ticket-boarding-pass-info">
                                <p id="serialCode">GFTSS-2019101234</p>
                            </div>
                        </div>
                    </div>
                    <br>
                    <button class="button primary print-ticket" onclick="window.print()">Print Ticket</button>
                    <button class="button primary close-student-modal">Close</button>
                </div>
            </div>

        <script src="js/dashboard-script.js"></script>
        <script src="js/dashboard-processing.js"></script>
        <script src="js/nav.js"></script>
    </body>
</html>