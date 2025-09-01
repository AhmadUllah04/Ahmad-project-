 // Registration form functionality
        document.getElementById('registerBtn').addEventListener('click', function() {
            document.getElementById('registrationForm').style.display = 'block';
            document.getElementById('overlay').style.display = 'block';
        });
        
        document.getElementById('closeForm').addEventListener('click', function() {
            document.getElementById('registrationForm').style.display = 'none';
            document.getElementById('overlay').style.display = 'none';
        });
        
        document.getElementById('overlay').addEventListener('click', function() {
            document.getElementById('registrationForm').style.display = 'none';
            this.style.display = 'none';
        });
        
        function showSection(sectionId) {
            // Hide all sections
            document.querySelectorAll('.page-section').forEach(section => {
                section.style.display = 'none';
            });
            
            // Hide main content
            document.getElementById('main-content').style.display = 'none';
            
            // Show the selected section
            document.getElementById(sectionId).style.display = 'block';
            
            // Close the sidebar
            document.getElementById('check').checked = false;
        }
        
        function showMainContent() {
            // Hide all sections
            document.querySelectorAll('.page-section').forEach(section => {
                section.style.display = 'none';
            });
            
            // Show main content
            document.getElementById('main-content').style.display = 'block';
        }
        
        // Close sidebar when clicking on a link
        document.querySelectorAll('.sidebar_menu a').forEach(link => {
            link.addEventListener('click', function() {
                document.getElementById('check').checked = false;
            });
        });x