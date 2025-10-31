<?php
    //Check if the user is logged in - match key on the database
    session_start();
    if(isset($_SESSION['username'])){
        header("Location: homepage.php");
    }

    //Include the database connection
    include("connect.php");

    //Declare variables
    $username = $password = "";
    $usernameErr = $passwordErr = "";

    //Process data on form submission
    if($_SERVER["REQUEST_METHOD"] == "POST"){
        //Check if the username is empty
        if(empty($_POST["username"])){
            $usernameErr = "Username is required";
        } else {
            $username = $_POST["username"];
        }

        //Check if the password is empty
        if(empty($_POST["password"])){
            $passwordErr = "Password is required";
        } else {
            $password = $_POST["password"];
        }

        //Validate Credentials
        if(!empty($username) && !empty($password)){
            //Prepare the SQL statement
            $sql = "SELECT * FROM `admin` WHERE `AdminUsername` = '$username' AND `AdminPassword` = '$password'";
            
            //Execute the SQL statement
            $result = $conn->query($sql);

            //Check if the result is not empty
            if($result->num_rows > 0){
                //Generate a token
                $token = md5(uniqid($username, true));
                //Put the token in the database
                $sql = "UPDATE `admin` SET `SessionToken` = '$token' WHERE `AdminUsername` = '$username'";
                $conn->query($sql);

                //Fetch the result
                while($row = $result->fetch_assoc()){
                    //Set the session
                    $_SESSION['token'] = $token;
                    $_SESSION['username'] = $row['AdminUsername'];
                }

                //Redirect to the homepage
                header("Location: homepage.php");
            } else {
                //Set the error message
                $usernameErr = "Invalid username or password";
                $passwordErr = "Invalid username or password";
                //Alert the user
                echo "<script>alert('Invalid username or password');</script>";
            }
        }
    }
?>
<!DOCTYPE html>
<html>
    <head>
        <title>GFTSS</title>
        <link rel="stylesheet" type="text/css" href="css/styles.css">
        <!-- <link rel="stylesheet" type="text/css" href="css/color.css"> -->
    </head>
    <body class="background bg-img">
        <div class="content-vertical-center">
            <div class="login-card card surface-container-high content-vertical-center">
                <div class="content login-card-content-a">
                    <h1>Giporlosanon Free Transportation Scheduling System</h1>
                    <p>Click the button below to get started!</p>
                    <button class="button primary get-started">Get Started</button>
                </div>
                <div class="content login-card-content-b">
                    <div class="content content-title">
                        <h1>Giporlosanon Free Transportation Scheduling System</h1>
                        <p>To get started, please enter your credentials.</p>
                    </div>
                    <form class="content content-action admin-form" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"])?>" method="POST">
                        <div class="form-input">
                            <label for="email">Email</label>
                            <input type="text" id="username" name="username" placeholder="Enter your username">
                            <label for="password">Password</label>
                            <input type="password" id="password" name="password" placeholder="Enter your password">
                        </div>
                        <button class="button login primary">Login</button>
                    </form>

                    <div class="content content-action student-form">
                        <div class="form-input">
                            <label for="studentNumber">Passenger Number</label>
                            <input type="number" id="studentNumber" name="studentNumber" placeholder="Enter your Passenger Number">
                        </div>
                        <button class="button proceed primary showSchedule">Proceed</button>
                    </div>

                    <!--Add Switch to Passenger-->
                    <div class="content content-action switch-stud">
                        <button class="button switch-stud-btn primary">Switch to Passenger</button>
                    </div>
                    <!--Add Switch to Admin-->
                    <div class="content content-action switch-admin">
                        <button class="button switch-admin-btn primary">Switch to Admin</button>
                    </div>

                    
            </div>
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
                    <button class="button primary close-student-modal">Close</button>
                </div>
            </div>

        <script src="js/index-script.js"></script>
    </body>
</html>