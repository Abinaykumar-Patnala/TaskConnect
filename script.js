// Function to switch between Job Seeker and Hiring Login Forms
function switchTab(tab) {
    document.querySelectorAll(".tab-btn").forEach(btn => btn.classList.remove("active"));
    document.querySelectorAll(".login-form").forEach(form => form.classList.remove("active-form"));

    if (tab === "jobseeker") {
        document.getElementById("jobseeker-form").classList.add("active-form");
        document.querySelector(".tab-btn:nth-child(1)").classList.add("active");
    } else {
        document.getElementById("hiring-form").classList.add("active-form");
        document.querySelector(".tab-btn:nth-child(2)").classList.add("active");
    }
}

// Default: Show Job Seeker form
switchTab("jobseeker");

// Handle Job Seeker Login
document.getElementById("jobseeker-form").addEventListener("submit", function(event) {
    event.preventDefault();
    let email = document.getElementById("jobseeker-email").value;
    let password = document.getElementById("jobseeker-password").value;
    
    console.log("Job Seeker Login:", email, password);

    // Redirect to job seeker dashboard
    window.location.href = "jobseeker-dashboard.html";
});

// Handle Hiring Login
document.getElementById("hiring-form").addEventListener("submit", function(event) {
    event.preventDefault();
    let email = document.getElementById("hiring-email").value;
    let password = document.getElementById("hiring-password").value;
    
    console.log("Hiring Login:", email, password);

    // Redirect to hiring dashboard
    window.location.href = "hiring-dashboard.html";
});
