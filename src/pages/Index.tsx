
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
              <title>Simple Contact Form</title>
              <style>
                  * {
                      margin: 0;
                      padding: 0;
                      box-sizing: border-box;
                  }

                  body {
                      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                      min-height: 100vh;
                      display: flex;
                      align-items: center;
                      justify-content: center;
                      padding: 20px;
                  }

                  .form-container {
                      background: white;
                      padding: 40px;
                      border-radius: 20px;
                      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
                      width: 100%;
                      max-width: 450px;
                      transform: translateY(0);
                      transition: transform 0.3s ease;
                  }

                  .form-container:hover {
                      transform: translateY(-5px);
                  }

                  .form-title {
                      text-align: center;
                      margin-bottom: 30px;
                      color: #333;
                      font-size: 28px;
                      font-weight: 600;
                  }

                  .form-group {
                      margin-bottom: 25px;
                      position: relative;
                  }

                  .form-label {
                      display: block;
                      margin-bottom: 8px;
                      color: #555;
                      font-weight: 500;
                      font-size: 14px;
                      text-transform: uppercase;
                      letter-spacing: 0.5px;
                  }

                  .form-input {
                      width: 100%;
                      padding: 15px 20px;
                      border: 2px solid #e1e5e9;
                      border-radius: 12px;
                      font-size: 16px;
                      transition: all 0.3s ease;
                      background: #f8f9fa;
                  }

                  .form-input:focus {
                      outline: none;
                      border-color: #667eea;
                      background: white;
                      box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
                      transform: translateY(-2px);
                  }

                  .form-input.error {
                      border-color: #e74c3c;
                      background: #ffeaea;
                  }

                  .error-message {
                      color: #e74c3c;
                      font-size: 12px;
                      margin-top: 5px;
                      display: none;
                  }

                  .submit-btn {
                      width: 100%;
                      padding: 18px;
                      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                      color: white;
                      border: none;
                      border-radius: 12px;
                      font-size: 16px;
                      font-weight: 600;
                      cursor: pointer;
                      transition: all 0.3s ease;
                      text-transform: uppercase;
                      letter-spacing: 1px;
                  }

                  .submit-btn:hover {
                      transform: translateY(-2px);
                      box-shadow: 0 10px 25px rgba(102, 126, 234, 0.3);
                  }

                  .submit-btn:active {
                      transform: translateY(0);
                  }

                  .success-message {
                      background: #d4edda;
                      color: #155724;
                      padding: 15px;
                      border-radius: 12px;
                      margin-top: 20px;
                      text-align: center;
                      display: none;
                      border: 1px solid #c3e6cb;
                  }

                  @media (max-width: 480px) {
                      .form-container {
                          padding: 30px 20px;
                      }
                      
                      .form-title {
                          font-size: 24px;
                      }
                  }

                  .input-icon {
                      position: absolute;
                      right: 15px;
                      top: 50%;
                      transform: translateY(-50%);
                      color: #ccc;
                      pointer-events: none;
                  }
              </style>
          </head>
          <body>
              <div class="form-container">
                  <h1 class="form-title">Contact Form</h1>
                  <form id="contactForm">
                      <div class="form-group">
                          <label for="fullName" class="form-label">Full Name</label>
                          <input 
                              type="text" 
                              id="fullName" 
                              name="fullName" 
                              class="form-input" 
                              placeholder="Enter your full name"
                              required
                          >
                          <div class="error-message" id="fullNameError">Please enter your full name</div>
                      </div>

                      <div class="form-group">
                          <label for="email" class="form-label">Email Address</label>
                          <input 
                              type="email" 
                              id="email" 
                              name="email" 
                              class="form-input" 
                              placeholder="Enter your email address"
                              required
                          >
                          <div class="error-message" id="emailError">Please enter a valid email address</div>
                      </div>

                      <div class="form-group">
                          <label for="city" class="form-label">City</label>
                          <input 
                              type="text" 
                              id="city" 
                              name="city" 
                              class="form-input" 
                              placeholder="Enter your city"
                              required
                          >
                          <div class="error-message" id="cityError">Please enter your city</div>
                      </div>

                      <button type="submit" class="submit-btn">Submit Form</button>
                  </form>
                  
                  <div class="success-message" id="successMessage">
                      ✅ Form submitted successfully! Thank you for your information.
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
                      
                      // Real-time validation
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
                              
                              // Show success message
                              successMessage.style.display = 'block';
                              
                              // Reset form
                              form.reset();
                              
                              // Hide success message after 5 seconds
                              setTimeout(function() {
                                  successMessage.style.display = 'none';
                              }, 5000);
                          }
                      });
                      
                      // Add smooth animations
                      const inputs = document.querySelectorAll('.form-input');
                      inputs.forEach(input => {
                          input.addEventListener('focus', function() {
                              this.parentElement.style.transform = 'scale(1.02)';
                          });
                          
                          input.addEventListener('blur', function() {
                              this.parentElement.style.transform = 'scale(1)';
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
