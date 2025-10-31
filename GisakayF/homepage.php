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
                <div class="body-top">
                    <div class="card surface-container-high">
                        <div class="body-top-left">
                            <h1>Welcome to Gisakay, Admin.</h1>
                            <p>Here are some statistics about the students and their schedules.</p>
                        </div>
                        
                        <div class="body-top-right">
                            <p>Here's what you can do:</p>
                            <div class="option-list">
                                <button class="button primary go-dashboard">Schedule A Trip</button>
                                <button class="button primary go-schedules">View Trip Schedule</button>
                                <button class="button primary go-dashboard">Edit List of Barangays</button>
                                <button class="button primary go-dashboard">Edit Scheduled Trip</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="body-left">
                    <div class="card surface-container-high">
                        <h1>Number of College Students (Per Barangay)</h1>
                        <table id="barangayList">
                            <tr>
                                <th>Barangay</th>
                                <th>Number of College Students</th>
                            </tr>
                        </table>
                    </div>
                </div>
                <div class="body-right">
                    <div class="card surface-container-high">
                        <h1>Trip Schedules</h1>
                        <table id="tripSchedules">
                            <tr>
                                <th>Day</th>
                                <th>Time</th>
                            </tr>
                            <tr>
                                <td>Monday</td>
                                <td>7:00 AM - 5:00 PM</td>
                            </tr>
                            <tr>
                                <td>Tuesday</td>
                                <td>7:00 AM - 5:00 PM</td>
                            </tr>
                            <tr>
                                <td>Wednesday</td>
                                <td>7:00 AM - 5:00 PM</td>
                            </tr>
                            <tr>
                                <td>Thursday</td>
                                <td>7:00 AM - 5:00 PM</td>
                            </tr>
                            <tr>
                                <td>Friday</td>
                                <td>7:00 AM - 5:00 PM</td>
                            </tr>
                            <tr>
                                <td>Saturday</td>
                                <td>7:00 AM - 5:00 PM</td>
                            </tr>
                            <tr>
                                <td>Sunday</td>
                                <td>7:00 AM - 5:00 PM</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            <footer>
                <center>
                    <p>© 2024 Gisakay</p>
                </center>
            </footer>
        </div>

        <script src="js/nav.js"></script>
        <script src="js/homepage-script.js"></script>
    </body>
</html>