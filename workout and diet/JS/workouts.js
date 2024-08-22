document.addEventListener('DOMContentLoaded', function() {
    // Function to display the selected day's workouts
    function showWorkout(day) {
        // Hide all workout sections
        const sections = document.querySelectorAll('section[id^="day"]');
        sections.forEach(section => section.style.display = 'none');

        // Show the selected day's workout
        const selectedSection = document.getElementById(day);
        if (selectedSection) {
            selectedSection.style.display = 'block';
        }
    }

    // Add event listeners to the day links in the dropdown
    const dayLinks = document.querySelectorAll('.dropdown-content a');
    dayLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior
            const day = this.getAttribute('onclick').replace("showWorkout('", "").replace("')", ""); // Get day ID from onclick attribute
            showWorkout(day);
        });
    });

   
    showWorkout('day1');
    showWorkout('day2');
    showWorkout('day3');
    showWorkout('day4');
    showWorkout('day5');
    showWorkout('day6');
});

