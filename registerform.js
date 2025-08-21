let form = document.createElement("form");
        form.classList.add("form_container");

        let username = document.createElement("input");
        username.setAttribute("placeholder", "Username");
        username.setAttribute("type", "text");
        username.setAttribute("name", "username");
        username.setAttribute("required", "true");

        let email = document.createElement("input");
        email.setAttribute("placeholder", "Email");
        email.setAttribute("type", "email");
        email.setAttribute("name", "email");
        email.setAttribute("required", "true");

        let password = document.createElement("input");
        password.setAttribute("placeholder", "Password");
        password.setAttribute("type", "password");
        password.setAttribute("name", "password");
        password.setAttribute("required", "true");

        let btn = document.createElement("button");
        btn.innerText = "Submit Data!";
        btn.setAttribute("type", "submit");
        btn.setAttribute("id", "button");

        // Append inputs to form
        form.appendChild(username);
        form.appendChild(email);
        form.appendChild(password);
        form.appendChild(btn);

        // Insert form at the beginning of the container
        document.querySelector(".container").appendChild(form);

        // Create output div
        let outputdiv = document.createElement("div");
        outputdiv.classList.add("outputdiv");
        outputdiv.innerHTML = "<h2>Submitted Data</h2>";
        document.querySelector(".container").appendChild(outputdiv);

        // Add image at the end
        let div = document.createElement("div");
        let img = document.createElement("img");
        div.append(img);
        // Using a placeholder image since the original image path may not work
        img.src = "image/ahmad.png";
        img.alt = "Sample Image";
        div.classList.add("div");
        img.classList.add("img");
        document.querySelector('body').appendChild(div);

        // Form submission handler
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            
            let formData = new FormData(form);
            let data = {
                username: formData.get("username"),
                email: formData.get("email"),
                password: formData.get("password")
            };
            
            // Create output item
            createOutputItem(data);
            
            // Reset form
            form.reset();
        });

        // Function to create output item with edit and delete buttons
        function createOutputItem(data) {
            let outputItem = document.createElement("div");
            outputItem.classList.add("output-item");
            outputItem.dataset.username = data.username;
            outputItem.dataset.email = data.email;
            outputItem.dataset.password = data.password;
            
            // Create content
            let content = document.createElement("div");
            content.innerHTML = `
                <p><strong>Username:</strong> <span class="username">${data.username || "Not provided"}</span></p>
                <p><strong>Email:</strong> <span class="email">${data.email || "Not provided"}</span></p>
                <p><strong>Password:</strong> <span class="password">${data.password ? "••••••••" : "Not provided"}</span></p>
            `;
            
            // Create button container
            let btnContainer = document.createElement("div");
            btnContainer.classList.add("btn-container");
            
            // Create edit button
            let editBtn = document.createElement("button");
            editBtn.innerText = "Edit";
            editBtn.classList.add("edit-btn");
            
            // Create delete button
            let deleteBtn = document.createElement("button");
            deleteBtn.innerText = "Delete";
            deleteBtn.classList.add("delete-btn");
            
            // Add event listener to delete button
            deleteBtn.addEventListener("click", function() {
                outputdiv.removeChild(outputItem);
            });
            
            // Add event listener to edit button
            editBtn.addEventListener("click", function() {
                enableEditMode(outputItem);
            });
            
            // Append buttons to container
            btnContainer.appendChild(editBtn);
            btnContainer.appendChild(deleteBtn);
            
            // Append content and button container to output item
            outputItem.appendChild(content);
            outputItem.appendChild(btnContainer);
            
            // Add output item to output div
            outputdiv.appendChild(outputItem);
        }

        // Function to enable edit mode for an output item
        function enableEditMode(outputItem) {
            // Get current values
            let username = outputItem.dataset.username;
            let email = outputItem.dataset.email;
            let password = outputItem.dataset.password;
            
            // Create edit form
            let editForm = document.createElement("div");
            editForm.classList.add("edit-form");
            editForm.innerHTML = `
                <input type="text" class="edit-username" value="${username}" placeholder="Username">
                <input type="email" class="edit-email" value="${email}" placeholder="Email">
                <input type="password" class="edit-password" value="${password}" placeholder="Password">
                <div class="btn-container">
                    <button type="button" class="save-btn">Save</button>
                    <button type="button" class="cancel-btn">Cancel</button>
                </div>
            `;
            
            // Replace content with edit form
            outputItem.querySelector('div').style.display = 'none';
            outputItem.querySelector('.btn-container').style.display = 'none';
            outputItem.appendChild(editForm);
            
            // Add event listener to save button
            editForm.querySelector('.save-btn').addEventListener('click', function() {
                // Get updated values
                let newUsername = editForm.querySelector('.edit-username').value;
                let newEmail = editForm.querySelector('.edit-email').value;
                let newPassword = editForm.querySelector('.edit-password').value;
                
                // Update dataset
                outputItem.dataset.username = newUsername;
                outputItem.dataset.email = newEmail;
                outputItem.dataset.password = newPassword;
                
                // Update displayed values
                outputItem.querySelector('.username').textContent = newUsername || "Not provided";
                outputItem.querySelector('.email').textContent = newEmail || "Not provided";
                outputItem.querySelector('.password').textContent = newPassword ? "••••••••" : "Not provided";
                
                // Remove edit form and show content again
                outputItem.removeChild(editForm);
                outputItem.querySelector('div').style.display = 'block';
                outputItem.querySelector('.btn-container').style.display = 'flex';
            });
            
            // Add event listener to cancel button
            editForm.querySelector('.cancel-btn').addEventListener('click', function() {
                // Remove edit form and show content again
                outputItem.removeChild(editForm);
                outputItem.querySelector('div').style.display = 'block';
                outputItem.querySelector('.btn-container').style.display = 'flex';
            });
        }