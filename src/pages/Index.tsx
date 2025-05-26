
const Index = () => {
  return (
    <div 
      id="form-container" 
      dangerouslySetInnerHTML={{
        __html: `
          <!DOCTYPE html>
          <html lang="en">
          <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>AI Weather Reporter</title>
              <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
              <style>
                  * {
                      margin: 0;
                      padding: 0;
                      box-sizing: border-box;
                  }

                  body {
                      font-family: 'Poppins', sans-serif;
                      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                      background-attachment: fixed;
                      min-height: 100vh;
                      display: flex;
                      align-items: center;
                      justify-content: center;
                      padding: 20px;
                      position: relative;
                      overflow-x: hidden;
                  }

                  /* Cute floating shapes */
                  body::before,
                  body::after {
                      content: '';
                      position: fixed;
                      width: 100px;
                      height: 100px;
                      border-radius: 50%;
                      opacity: 0.1;
                      animation: float 6s ease-in-out infinite;
                  }

                  body::before {
                      background: #fff;
                      top: 10%;
                      left: 10%;
                      animation-delay: 0s;
                  }

                  body::after {
                      background: #fff;
                      bottom: 10%;
                      right: 10%;
                      animation-delay: 3s;
                  }

                  @keyframes float {
                      0%, 100% { transform: translateY(0px) rotate(0deg); }
                      50% { transform: translateY(-20px) rotate(180deg); }
                  }

                  .form-container {
                      background: rgba(255, 255, 255, 0.95);
                      backdrop-filter: blur(10px);
                      padding: 50px 40px;
                      border-radius: 30px;
                      box-shadow: 
                          0 25px 50px rgba(0, 0, 0, 0.1),
                          0 0 0 1px rgba(255, 255, 255, 0.2);
                      width: 100%;
                      max-width: 480px;
                      transform: translateY(0);
                      transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                      position: relative;
                      overflow: hidden;
                  }

                  .form-container::before {
                      content: '';
                      position: absolute;
                      top: -50%;
                      left: -50%;
                      width: 200%;
                      height: 200%;
                      background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent);
                      transform: rotate(45deg);
                      transition: transform 0.6s;
                  }

                  .form-container:hover {
                      transform: translateY(-10px);
                      box-shadow: 
                          0 35px 70px rgba(0, 0, 0, 0.15),
                          0 0 0 1px rgba(255, 255, 255, 0.3);
                  }

                  .form-container:hover::before {
                      transform: rotate(45deg) translate(50%, 50%);
                  }

                  .form-title {
                      text-align: center;
                      margin-bottom: 40px;
                      color: #4a5568;
                      font-size: 32px;
                      font-weight: 700;
                      position: relative;
                      display: flex;
                      align-items: center;
                      justify-content: center;
                      gap: 12px;
                  }

                  .form-title::before {
                      content: '🌤️';
                      font-size: 36px;
                      animation: bounce 2s infinite;
                  }

                  .form-title::after {
                      content: '🤖';
                      font-size: 28px;
                      animation: bounce 2s infinite 0.5s;
                  }

                  @keyframes bounce {
                      0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
                      40% { transform: translateY(-10px); }
                      60% { transform: translateY(-5px); }
                  }

                  .form-group {
                      margin-bottom: 30px;
                      position: relative;
                  }

                  .form-label {
                      display: block;
                      margin-bottom: 10px;
                      color: #4a5568;
                      font-weight: 600;
                      font-size: 14px;
                      text-transform: uppercase;
                      letter-spacing: 1px;
                      position: relative;
                      display: flex;
                      align-items: center;
                      gap: 8px;
                  }

                  .form-label::before {
                      content: '';
                      width: 4px;
                      height: 4px;
                      background: linear-gradient(135deg, #667eea, #764ba2);
                      border-radius: 50%;
                      animation: pulse 2s infinite;
                  }

                  @keyframes pulse {
                      0%, 100% { transform: scale(1); opacity: 1; }
                      50% { transform: scale(1.5); opacity: 0.7; }
                  }

                  .form-input {
                      width: 100%;
                      padding: 18px 25px;
                      border: 3px solid #e2e8f0;
                      border-radius: 20px;
                      font-size: 16px;
                      font-weight: 400;
                      transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                      background: linear-gradient(145deg, #f8fafc, #f1f5f9);
                      position: relative;
                      z-index: 1;
                  }

                  .form-input:focus {
                      outline: none;
                      border-color: #667eea;
                      background: #ffffff;
                      box-shadow: 
                          0 0 0 4px rgba(102, 126, 234, 0.1),
                          0 10px 25px rgba(102, 126, 234, 0.1);
                      transform: translateY(-3px) scale(1.02);
                  }

                  .form-input::placeholder {
                      color: #a0aec0;
                      font-style: italic;
                  }

                  .form-input.error {
                      border-color: #f56565;
                      background: #fed7d7;
                      animation: shake 0.5s ease-in-out;
                  }

                  @keyframes shake {
                      0%, 100% { transform: translateX(0); }
                      25% { transform: translateX(-5px); }
                      75% { transform: translateX(5px); }
                  }

                  .error-message {
                      color: #f56565;
                      font-size: 12px;
                      margin-top: 8px;
                      display: none;
                      font-weight: 500;
                      position: relative;
                      padding-left: 20px;
                  }

                  .error-message::before {
                      content: '⚠️';
                      position: absolute;
                      left: 0;
                      top: 0;
                  }

                  .submit-btn {
                      width: 100%;
                      padding: 20px;
                      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                      color: white;
                      border: none;
                      border-radius: 20px;
                      font-size: 16px;
                      font-weight: 600;
                      cursor: pointer;
                      transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                      text-transform: uppercase;
                      letter-spacing: 1px;
                      position: relative;
                      overflow: hidden;
                      font-family: 'Poppins', sans-serif;
                  }

                  .submit-btn::before {
                      content: '';
                      position: absolute;
                      top: 0;
                      left: -100%;
                      width: 100%;
                      height: 100%;
                      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
                      transition: left 0.5s;
                  }

                  .submit-btn:hover {
                      transform: translateY(-3px);
                      box-shadow: 0 15px 35px rgba(102, 126, 234, 0.4);
                      background: linear-gradient(135deg, #5a67d8 0%, #6b46c1 100%);
                  }

                  .submit-btn:hover::before {
                      left: 100%;
                  }

                  .submit-btn:active {
                      transform: translateY(-1px);
                  }

                  .success-message {
                      background: linear-gradient(135deg, #68d391, #38a169);
                      color: white;
                      padding: 20px;
                      border-radius: 20px;
                      margin-top: 25px;
                      text-align: center;
                      display: none;
                      font-weight: 600;
                      position: relative;
                      overflow: hidden;
                      animation: slideInUp 0.5s ease-out;
                  }

                  .success-message::before {
                      content: '✨';
                      margin-right: 10px;
                      font-size: 18px;
                  }

                  .success-message::after {
                      content: '✨';
                      margin-left: 10px;
                      font-size: 18px;
                  }

                  @keyframes slideInUp {
                      from {
                          opacity: 0;
                          transform: translateY(30px);
                      }
                      to {
                          opacity: 1;
                          transform: translateY(0);
                      }
                  }

                  @media (max-width: 480px) {
                      .form-container {
                          padding: 40px 25px;
                          margin: 10px;
                      }
                      
                      .form-title {
                          font-size: 26px;
                      }

                      .form-input {
                          padding: 16px 20px;
                      }
                  }

                  /* Input icons */
                  .input-wrapper {
                      position: relative;
                  }

                  .input-icon {
                      position: absolute;
                      right: 20px;
                      top: 50%;
                      transform: translateY(-50%);
                      font-size: 18px;
                      color: #a0aec0;
                      pointer-events: none;
                      transition: color 0.3s ease;
                  }

                  .form-input:focus + .input-icon {
                      color: #667eea;
                  }
              </style>
          </head>
          <body>
              <div class="form-container">
                  <h1 class="form-title">AI Weather Reporter</h1>
                  <form id="contactForm">
                      <div class="form-group">
                          <label for="fullName" class="form-label">Full Name</label>
                          <div class="input-wrapper">
                              <input 
                                  type="text" 
                                  id="fullName" 
                                  name="fullName" 
                                  class="form-input" 
                                  placeholder="What should we call you? ✨"
                                  required
                              >
                              <span class="input-icon">👤</span>
                          </div>
                          <div class="error-message" id="fullNameError">Please enter your full name</div>
                      </div>

                      <div class="form-group">
                          <label for="email" class="form-label">Email Address</label>
                          <div class="input-wrapper">
                              <input 
                                  type="email" 
                                  id="email" 
                                  name="email" 
                                  class="form-input" 
                                  placeholder="your.email@example.com 💌"
                                  required
                              >
                              <span class="input-icon">📧</span>
                          </div>
                          <div class="error-message" id="emailError">Please enter a valid email address</div>
                      </div>

                      <div class="form-group">
                          <label for="city" class="form-label">City</label>
                          <div class="input-wrapper">
                              <input 
                                  type="text" 
                                  id="city" 
                                  name="city" 
                                  class="form-input" 
                                  placeholder="Which city needs weather updates? 🏙️"
                                  required
                              >
                              <span class="input-icon">🌍</span>
                          </div>
                          <div class="error-message" id="cityError">Please enter your city</div>
                      </div>

                      <button type="submit" class="submit-btn">Get Weather Updates ☀️</button>
                  </form>
                  
                  <div class="success-message" id="successMessage">
                      Form submitted successfully! We'll keep you updated with the weather.
                  </div>
              </div>

              <script>
                  document.addEventListener('DOMContentLoaded', function() {
                      const form = document.getElementById('contactForm');
                      const successMessage = document.getElementById('successMessage');
                      
                      // Form validation
                      function validateField(fieldId, errorId, validationFn) {
                          const field = document.getElementById(fieldId);
                          const error = document.getElementById(errorId);
                          
                          if (validationFn(field.value)) {
                              field.classList.remove('error');
                              error.style.display = 'none';
                              return true;
                          } else {
                              field.classList.add('error');
                              error.style.display = 'block';
                              return false;
                          }
                      }
                      
                      // Validation functions
                      function validateName(name) {
                          return name.trim().length >= 2;
                      }
                      
                      function validateEmail(email) {
                          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                          return emailRegex.test(email);
                      }
                      
                      function validateCity(city) {
                          return city.trim().length >= 2;
                      }
                      
                      // Real-time validation with cute animations
                      document.getElementById('fullName').addEventListener('blur', function() {
                          validateField('fullName', 'fullNameError', validateName);
                      });
                      
                      document.getElementById('email').addEventListener('blur', function() {
                          validateField('email', 'emailError', validateEmail);
                      });
                      
                      document.getElementById('city').addEventListener('blur', function() {
                          validateField('city', 'cityError', validateCity);
                      });
                      
                      // Form submission
                      form.addEventListener('submit', function(e) {
                          e.preventDefault();
                          
                          // Validate all fields
                          const isNameValid = validateField('fullName', 'fullNameError', validateName);
                          const isEmailValid = validateField('email', 'emailError', validateEmail);
                          const isCityValid = validateField('city', 'cityError', validateCity);
                          
                          if (isNameValid && isEmailValid && isCityValid) {
                              // Get form data
                              const formData = {
                                  fullName: document.getElementById('fullName').value,
                                  email: document.getElementById('email').value,
                                  city: document.getElementById('city').value
                              };
                              
                              // Log the data (in real app, you'd send to server)
                              console.log('Form Data Submitted:', formData);
                              
                              // Show success message with animation
                              successMessage.style.display = 'block';
                              
                              // Reset form
                              form.reset();
                              
                              // Hide success message after 5 seconds
                              setTimeout(function() {
                                  successMessage.style.display = 'none';
                              }, 5000);
                          }
                      });
                      
                      // Add cute focus animations
                      const inputs = document.querySelectorAll('.form-input');
                      inputs.forEach(input => {
                          input.addEventListener('focus', function() {
                              this.parentElement.parentElement.style.transform = 'scale(1.02)';
                          });
                          
                          input.addEventListener('blur', function() {
                              this.parentElement.parentElement.style.transform = 'scale(1)';
                          });
                      });
                  });
              </script>
          </body>
          </html>
        `
      }}
    />
  );
};

export default Index;
