let customers = [];
let isAdmin = false;

function login() {
  const user = document.getElementById('username').value;
  const pass = document.getElementById('password').value;

  if (user === 'admin' && pass === 'admin123') {
    isAdmin = true;
    document.getElementById('loginSection').style.display = 'none';
    document.getElementById('dashboard').style.display = 'block';
    renderCustomers();
  } else {
    alert('Invalid login');
  }
}

function addCustomer() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;

  if (!name || !email || !phone) {
    alert('All fields required');
    return;
  }

  customers.push({ name, email, phone });
  renderCustomers();
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('phone').value = '';
}

function renderCustomers() {
  const list = document.getElementById('customerList');
  list.innerHTML = '';
  customers.forEach((c, index) => {
    const div = document.createElement('div');
    div.className = 'customer';
    div.innerHTML = `<strong>${c.name}</strong><br>${c.email}<br>${c.phone} <br>` +
      (isAdmin ? `<button onclick="deleteCustomer(${index})">Delete</button>` : '');
    list.appendChild(div);
  });
}

function deleteCustomer(index) {
  customers.splice(index, 1);
  renderCustomers();
}
