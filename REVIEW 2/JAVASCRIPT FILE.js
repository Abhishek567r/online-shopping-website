<!-- 1. User Login Page -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User Login - E-Commerce</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="styles.css">
    <style>
        body {
            background: linear-gradient(to right, #aea9a2, #1d1b1b);
        }
        .auth-container {
            max-width: 400px;
            margin-top: 100px;
        }
        .logo {
            display: block;
            margin: 0 auto 20px;
            max-width: 150px;
        }
    </style>
    <script>
        function validateLoginForm(event) {
            event.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            if (username.trim() === '' || password.trim() === '') {
                alert('Username and password cannot be empty.');
            } else {
                alert('Login successful!');
                window.location.href = 'dashboard.html';
            }
        }
    </script>
</head>
<body>
    <div class="container auth-container">
        <img src="https://s3.amazonaws.com/logosnap/logos/2024/Dec/small-1586-6773c8fb37e57.png" alt="E-Commerce Logo" class="logo" style="width:150px;height:150px;">
        <div class="card p-4 shadow-lg">
            <h2 class="text-center text-primary">Login to Your Account</h2>
            <form onsubmit="validateLoginForm(event)">
                <div class="mb-3">
                    <label for="username" class="form-label">Username:</label>
                    <input type="text" id="username" name="username" class="form-control" required>
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">Password:</label>
                    <input type="password" id="password" name="password" class="form-control" required>
                </div>
                <button type="submit" class="btn btn-primary w-100">Login</button>
            </form>
        </div>
    </div>
</body>
</html>

<!-- 2. User Registration Page -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User Registration - E-Commerce</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="styles.css">
    <style>
        body {
            background: linear-gradient(to right, #a1c4fd, #c2e9fb);
        }
        .logo {
            display: block;
            margin: 0 auto 20px;
            max-width: 150px;
        }
    </style>
    <script>
        function validateRegistrationForm(event) {
            event.preventDefault();
            const fullname = document.getElementById('fullname').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            if (fullname.trim() === '' || email.trim() === '' || password.trim() === '') {
                alert('All fields are required.');
            } else {
                alert('Registration successful!');
                window.location.href = 'login.html';
            }
        }
    </script>
</head>
<body>
    <div class="container auth-container">
        <img src="https://s3.amazonaws.com/logosnap/logos/2024/Dec/small-1586-6773c8fb37e57.png" alt="E-Commerce Logo" class="logo" style="width:150px;height:150px;">
        <div class="card p-4 shadow-lg">
            <h2 class="text-center text-success">Create Your Account</h2>
            <form onsubmit="validateRegistrationForm(event)">
                <div class="mb-3">
                    <label for="fullname" class="form-label">Full Name:</label>
                    <input type="text" id="fullname" name="fullname" class="form-control" required>
                </div>
                <div class="mb-3">
                    <label for="email" class="form-label">Email:</label>
                    <input type="email" id="email" name="email" class="form-control" required>
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">Password:</label>
                    <input type="password" id="password" name="password" class="form-control" required>
                </div>
                <button type="submit" class="btn btn-success w-100">Register</button>
            </form>
        </div>
    </div>
</body>
</html>

<!-- 3. User Dashboard -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User Dashboard - E-Commerce</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="styles.css">
    <style>
        body {
            background: linear-gradient(to right, #a39696, #1d1b1b);
        }
        .logo {
            display: block;
            margin: 0 auto 20px;
            max-width: 150px;
        }
    </style>
    <script>
        function handleLogout() {
            alert('You have been logged out.');
            window.location.href = 'login.html';
        }
    </script>
</head>
<body>
    <div class="container mt-5">
        <img src="https://s3.amazonaws.com/logosnap/logos/2024/Dec/small-1586-6773c8fb37e57.png" alt="E-Commerce Logo" class="logo" style="width:150px;height:150px;">
        <div class="card p-4 shadow-lg">
            <h2 class="text-center">Welcome to Your Dashboard</h2>
            <p class="text-center">Manage your account and view your orders here.</p>
            <button onclick="handleLogout()" class="btn btn-danger w-100">Logout</button>
        </div>
    </div>
</body>
</html>