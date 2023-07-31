// Function to handle form submission
function submitForm(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get form values
    const customerName = document.getElementById('customerName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const deliveryDate = document.getElementById('deliveryDate').value;
    const deliveryAddress = document.getElementById('deliveryAddress').value;
    const deliveryInstructions = document.getElementById('deliveryInstructions').value;
  
    // Create an object to store the form details
    const orderDetails = {
      customerName,
      email,
      phone,
      deliveryDate,
      deliveryAddress,
      deliveryInstructions,
    };
  
    // Store the form details in sessionStorage
    sessionStorage.setItem('orderDetails', JSON.stringify(orderDetails));
  
    // Clear the form fields after submission
    document.getElementById('cakeDeliveryForm').reset();
  
    // Redirect to the order confirmed page
    window.location.href = 'order_confirmed.html';
  }
  document.addEventListener('DOMContentLoaded', function() {
    // Get the div element where the order details will be displayed
    const orderDetailsDiv = document.getElementById('orderDetails');
  
    // Retrieve the order details from sessionStorage
    const orderDetails = JSON.parse(sessionStorage.getItem('orderDetails'));
  
    if (orderDetails) {
      // Display the order details
      const html = `
        <p><strong>Name:</strong> ${orderDetails.customerName}</p>
        <p><strong>Email:</strong> ${orderDetails.email}</p>
        <p><strong>Phone:</strong> ${orderDetails.phone}</p>
        <p><strong>Delivery Date:</strong> ${orderDetails.deliveryDate}</p>
        <p><strong>Delivery Address:</strong> ${orderDetails.deliveryAddress}</p>
        <p><strong>Delivery Instructions:</strong> ${orderDetails.deliveryInstructions}</p>
      `;
      orderDetailsDiv.innerHTML = html;
  
      // Clear the stored order details from sessionStorage (optional)
      sessionStorage.removeItem('orderDetails');
    } else {
      // If there are no order details, display a message
      orderDetailsDiv.textContent = 'No order details found.';
    }
  });
  