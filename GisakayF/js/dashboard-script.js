//Add listners for swtich events
document.querySelector(".switchSchedule").addEventListener("click", switchToScheduleStudentView);

//Switch to ScheduleStudent View
function switchToScheduleStudentView() {
    let a = document.querySelector(".scheduleStudent");
    let b = document.querySelector(".editScheduledTrip");
    let c = document.querySelector(".barangayDetails");
    let d = document.querySelector(".welcome");
    let e = document.querySelector(".viewAdminList");
    let f = document.querySelector(".viewGenerateReport");

    a.style.display = "flex";
    b.style.display = "none";
    c.style.display = "none";
    d.style.display = "none";
    e.style.display = "none";
    f.style.display = "none";
}
//Switch to BarangayDetails View
document.querySelector(".switchBarangay").addEventListener("click", switchToBarangayDetailsView);

function switchToBarangayDetailsView() {
    let a = document.querySelector(".scheduleStudent");
    let b = document.querySelector(".editScheduledTrip");
    let c = document.querySelector(".barangayDetails");
    let d = document.querySelector(".welcome");
    let e = document.querySelector(".viewAdminList");
    let f = document.querySelector(".viewGenerateReport");

    a.style.display = "none";
    b.style.display = "none";
    c.style.display = "flex";
    d.style.display = "none";
    e.style.display = "none";
    f.style.display = "none";
}
//Switch to EditScheduledTrip View
document.querySelector(".switchTrip").addEventListener("click", switchToEditScheduledTripView);

function switchToEditScheduledTripView() {
    let a = document.querySelector(".scheduleStudent");
    let b = document.querySelector(".editScheduledTrip");
    let c = document.querySelector(".barangayDetails");
    let d = document.querySelector(".welcome");
    let e = document.querySelector(".viewAdminList");
    let f = document.querySelector(".viewGenerateReport");

    a.style.display = "none";
    b.style.display = "block";
    c.style.display = "none";
    d.style.display = "none";
    e.style.display = "none";
    f.style.display = "none";
}

//Switch to Admin View
document.querySelector(".viewAdmin").addEventListener("click", switchToAdminView);

function switchToAdminView() {
    let a = document.querySelector(".viewAdminList");
    let b = document.querySelector(".barangayDetails");
    let c = document.querySelector(".scheduleStudent");
    let d = document.querySelector(".welcome");
    let e = document.querySelector(".editScheduledTrip");
    let f = document.querySelector(".viewGenerateReport");

    a.style.display = "flex";
    b.style.display = "none";
    c.style.display = "none";
    d.style.display = "none";
    e.style.display = "none";
    f.style.display = "none";
}

//Switch to Report View
document.querySelector(".generateReport").addEventListener("click", switchToReportView);

function switchToReportView() {
    let a = document.querySelector(".viewAdminList");
    let b = document.querySelector(".barangayDetails");
    let c = document.querySelector(".scheduleStudent");
    let d = document.querySelector(".welcome");
    let e = document.querySelector(".editScheduledTrip");
    let f = document.querySelector(".viewGenerateReport");


    a.style.display = "none";
    b.style.display = "none";
    c.style.display = "none";
    d.style.display = "none";
    e.style.display = "none";
    f.style.display = "block";
}

//View barangay modals
document.querySelector(".addBarangayBtn").addEventListener("click", addBarangayModal);
document.querySelector(".editBarangayBtn").addEventListener("click", editBarangayModal);
document.querySelector(".deleteBarangayBtn").addEventListener("click", deleteBarangayModal);

function addBarangayModal() {
    let a = document.querySelector("#addBarangayModal");
    a.style.display = "flex";
}

function editBarangayModal() {
    let a = document.querySelector("#editBarangayModal");
    a.style.display = "flex";
}

function deleteBarangayModal() {
    let a = document.querySelector("#deleteBarangayModal");
    a.style.display = "flex";
}

//Close barangay modals
document.querySelector(".closeAddBarangay").addEventListener("click", closeAddBarangayModal);
document.querySelector(".closeEditBarangay").addEventListener("click", closeEditBarangayModal);
document.querySelector(".closeDeleteBarangay").addEventListener("click", closeDeleteBarangayModal);

function closeAddBarangayModal() {
    let a = document.querySelector("#addBarangayModal");
    a.style.display = "none";
}

function closeEditBarangayModal() {
    let a = document.querySelector("#editBarangayModal");
    a.style.display = "none";
}

function closeDeleteBarangayModal() {
    let a = document.querySelector("#deleteBarangayModal");
    a.style.display = "none";
}

//View admin modals
document.querySelector(".addAdminBtn").addEventListener("click", addAdminModal);
document.querySelector(".editAdminBtn").addEventListener("click", editAdminModal);
document.querySelector(".deleteAdminBtn").addEventListener("click", deleteAdminModal);

function addAdminModal() {
    let a = document.querySelector("#addAdminModal");
    a.style.display = "flex";
}

function editAdminModal() {
    let a = document.querySelector("#editAdminModal");
    a.style.display = "flex";
}

function deleteAdminModal() {
    let a = document.querySelector("#deleteAdminModal");
    a.style.display = "flex";
}

//Close admin modals
document.querySelector(".closeAddAdmin").addEventListener("click", closeAddAdminModal);
document.querySelector(".closeEditAdmin").addEventListener("click", closeEditAdminModal);
document.querySelector(".closeDeleteAdmin").addEventListener("click", closeDeleteAdminModal);

function closeAddAdminModal() {
    let a = document.querySelector("#addAdminModal");
    a.style.display = "none";
}

function closeEditAdminModal() {
    let a = document.querySelector("#editAdminModal");
    a.style.display = "none";
}

function closeDeleteAdminModal() {
    let a = document.querySelector("#deleteAdminModal");
    a.style.display = "none";
}

//View student modals
document.querySelector(".viewStudentBtn").addEventListener("click", viewStudentList);
//document.querySelector(".editStudentBtn").addEventListener("click", editStudentModal);
document.querySelector(".closeStudentList").addEventListener("click", closeStudentList);

//View student list
function viewStudentList() {
    let a = document.querySelector("#viewStudentListModal");
    a.style.display = "flex";
}

//Close student list
function closeStudentList() {
    let a = document.querySelector("#viewStudentListModal");
    a.style.display = "none";
}

//Open edit student schedule modal
document.querySelector(".editStudentScheduleBtn").addEventListener("click", editStudentScheduleModal);
document.querySelector(".closeEditStudentSchedule").addEventListener("click", closeEditStudentScheduleModal);

function editStudentScheduleModal() {
    let a = document.querySelector("#editStudentScheduleModal");
    a.style.display = "flex";
}

function closeEditStudentScheduleModal() {
    let a = document.querySelector("#editStudentScheduleModal");
    a.style.display = "none";
}

//Open delete student modal
document.querySelector(".deleteStudentBtn").addEventListener("click", deleteStudentModal);
document.querySelector(".closeDeleteStudent").addEventListener("click", closeDeleteStudentModal);

function deleteStudentModal() {
    let a = document.querySelector("#deleteStudentModal");
    a.style.display = "flex";
}

function closeDeleteStudentModal() {
    let a = document.querySelector("#deleteStudentModal");
    a.style.display = "none";
}

//Open edit student modal
document.querySelector(".editStudentBtn").addEventListener("click", editStudentModal);
document.querySelector(".closeEditStudent").addEventListener("click", closeEditStudentModal);

function editStudentModal() {
    let a = document.querySelector("#editStudentModal");
    a.style.display = "flex";
}

function closeEditStudentModal() {
    let a = document.querySelector("#editStudentModal");
    a.style.display = "none";
}

//Close student modals
document.querySelector(".close-student-modal").addEventListener("click", closeStudentModal);

function closeStudentModal() {
    let a = document.querySelector("#studentModal");
    a.style.display = "none";

    //Clear the form
    document.querySelector("#scheduleIdReport").value = "";
}