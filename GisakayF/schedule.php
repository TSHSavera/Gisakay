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
                <!--List of days-->
                <div class=" option-menu body-left">
                    <div class="card surface-container-high">
                        <h1>Menu</h1>
                        <p>Please select a day to view</p>
                        <div class="menu-list">
                            <button class="button primary day-filter" data-int-day="7">Sunday</button>
                            <button class="button primary day-filter" data-int-day="1">Monday</button>
                            <button class="button primary day-filter" data-int-day="2">Tuesday</button>
                            <button class="button primary day-filter" data-int-day="3">Wednesday</button>
                            <button class="button primary day-filter" data-int-day="4">Thursday</button>
                            <button class="button primary day-filter" data-int-day="5">Friday</button>
                            <button class="button primary day-filter" data-int-day="6">Saturday</button>
                            <button class="button primary day-filter" data-int-day="0">View All</button>
                        </div>
                    </div>
                </div>

                <!--Schedule-->
                <div class="scheduleContainer body-right">
                        <div class="card surface-container-high">
                            <h1 id="scheduleDisplayDay">Monday</h1>
                            <p>Here is the schedule for the day</p>
                            <table id="scheduleTable">
                                <tr>
                                    <th>Passenger Name</th>
                                    <th>Email</th>
                                    <th>Contact Number</th>
                                    <th>Day</th>
                                </tr>
                                <tr>
                                    <td>John Doe</td>
                                    <td>johndoe@gmail.com</td>
                                    <td>09123456789</td>
                                    <td>Monday</td>
                                </tr>
                            </table>
                        </div>
                </div>

                <!--Welcome Message-->
                <div class="welcome body-right">
                    <h1>Welcome to Admin Dashboard</h1>
                    <p>Click on the menu to get started</p>
                </div>
            </div>


        <script src="js/nav.js"></script>
        <script src="js/schedule-script.js"></script>
    </body>
</html>