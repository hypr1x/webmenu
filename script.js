function navigate(sectionId) {
    // Hide all content sections
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
    });

    // Show the selected section
    document.getElementById(sectionId).classList.add('active');
}

// Initial setup to show Aimbot settings by default
document.addEventListener('DOMContentLoaded', () => {
    navigate('aimbot');
});