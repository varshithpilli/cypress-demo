// Sample restaurant data
const restaurants = [
    { id: 1, name: "Pizza Palace", cuisine: "Italian", rating: 4.5, deliveryTime: "25-30", image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80", description: "Authentic Italian pizzas baked to perfection." },
    { id: 2, name: "Burger Barn", cuisine: "American", rating: 4.2, deliveryTime: "20-25", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80", description: "Juicy burgers with fresh ingredients." },
    { id: 3, name: "Sushi Sensation", cuisine: "Japanese", rating: 4.7, deliveryTime: "30-35", image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80", description: "Fresh sushi and Japanese delicacies." },
    { id: 4, name: "Taco Town", cuisine: "Mexican", rating: 4.3, deliveryTime: "15-20", image: "https://images.unsplash.com/photo-1599971378216-0a8484903b57?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80", description: "Authentic Mexican tacos and more." },
    { id: 5, name: "Curry Corner", cuisine: "Indian", rating: 4.6, deliveryTime: "35-40", image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80", description: "Spicy and flavorful Indian curries." },
    { id: 6, name: "Noodle Nirvana", cuisine: "Chinese", rating: 4.4, deliveryTime: "20-25", image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80", description: "Delicious Chinese noodles and stir-fries." }
];

// Sample menu items data
const menuItems = [
    { id: 1, restaurantId: 1, name: "Margherita Pizza", price: 299.99, category: "Main Course", image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80", description: "Classic pizza with tomato sauce and mozzarella." },
    { id: 2, restaurantId: 1, name: "Pepperoni Pizza", price: 349.99, category: "Main Course", image: "https://images.unsplash.com/photo-1620374645498-af63097091d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80", description: "Pizza topped with pepperoni slices." },
    { id: 3, restaurantId: 1, name: "Garlic Bread", price: 99.99, category: "Appetizers", image: "https://images.unsplash.com/photo-1606914498644-738b7c1c5c9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80", description: "Crispy bread with garlic butter." },
    { id: 4, restaurantId: 2, name: "Classic Burger", price: 199.99, category: "Main Course", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80", description: "Beef patty with lettuce, tomato, and special sauce." },
    { id: 5, restaurantId: 2, name: "Cheese Fries", price: 149.99, category: "Appetizers", image: "https://images.unsplash.com/photo-1620422715044-0b7695a0bddd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80", description: "Crispy fries topped with melted cheese." },
    { id: 6, restaurantId: 3, name: "Salmon Sashimi", price: 399.99, category: "Main Course", image: "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80", description: "Fresh salmon slices served with soy sauce." },
    { id: 7, restaurantId: 3, name: "Miso Soup", price: 79.99, category: "Appetizers", image: "https://images.unsplash.com/photo-1617196035154-1e7e6e28b0db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80", description: "Traditional Japanese soup with tofu and seaweed." },
    { id: 8, restaurantId: 4, name: "Chicken Tacos", price: 179.99, category: "Main Course", image: "https://images.unsplash.com/photo-1599971378216-0a8484903b57?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80", description: "Soft tacos filled with seasoned chicken." },
    { id: 9, restaurantId: 4, name: "Guacamole", price: 99.99, category: "Appetizers", image: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80", description: "Fresh avocado dip with lime and cilantro." },
    { id: 10, restaurantId: 5, name: "Butter Chicken", price: 299.99, category: "Main Course", image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80", description: "Creamy tomato-based curry with tender chicken." },
    { id: 11, restaurantId: 5, name: "Garlic Naan", price: 49.99, category: "Appetizers", image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80", description: "Soft bread baked with garlic and butter." },
    { id: 12, restaurantId: 6, name: "Vegetable Chow Mein", price: 199.99, category: "Main Course", image: "https://images.unsplash.com/photo-1606914498644-738b7c1c5c9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80", description: "Stir-fried noodles with fresh vegetables." },
    { id: 13, restaurantId: 6, name: "Spring Rolls", price: 129.99, category: "Appetizers", image: "https://images.unsplash.com/photo-1620422715044-0b7695a0bddd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80", description: "Crispy rolls filled with vegetables." }
];

// User data
let users = JSON.parse(localStorage.getItem('users')) || [
    { id: 1, name: "John Doe", email: "john@example.com", password: "password123" }
];

// Current user
let currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;

// Initialize cart from localStorage or create empty cart
let cart = currentUser ? 
    JSON.parse(localStorage.getItem(`cart_${currentUser.id}`)) || [] : 
    [];

// Function to save users to localStorage
function saveUsers() {
    localStorage.setItem('users', JSON.stringify(users));
}

// Function to save current user to localStorage
function saveCurrentUser() {
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
}

// Function to save cart to localStorage
function saveCart() {
    if (currentUser) {
        localStorage.setItem(`cart_${currentUser.id}`, JSON.stringify(cart));
    }
}

// Function to check if user is logged in
function isLoggedIn() {
    return currentUser !== null;
}

// Function to require authentication
function requireAuth() {
    if (!isLoggedIn()) {
        alert("Please log in to perform this action.");
        window.location.href = 'login.html';
        return false;
    }
    return true;
}

// Function to add item to cart (only if logged in)
function addToCart(menuItemId) {
    if (!requireAuth()) return;
    
    const menuItem = menuItems.find(item => item.id === menuItemId);
    if (menuItem) {
        // Check if item is already in cart
        const existingItem = cart.find(item => item.id === menuItemId);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ ...menuItem, quantity: 1 });
        }
        // Save to localStorage
        saveCart();
        updateCartCount();
        showAlert(`${menuItem.name} added to cart!`, 'success');
    }
}

// Function to remove item from cart
function removeFromCart(menuItemId) {
    cart = cart.filter(item => item.id !== menuItemId);
    saveCart();
    updateCartCount();
    loadCart();
}

// Function to update item quantity
function updateQuantity(menuItemId, newQuantity) {
    if (newQuantity <= 0) {
        removeFromCart(menuItemId);
        return;
    }
    
    const item = cart.find(item => item.id === menuItemId);
    if (item) {
        item.quantity = parseInt(newQuantity);
        saveCart();
        updateCartCount();
        loadCart();
        updateCartTotals();
    }
}

// Function to update cart count in header
function updateCartCount() {
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    const cartCountElements = document.querySelectorAll('.cart-count');
    cartCountElements.forEach(element => {
        element.textContent = count;
    });
}

// Function to show alert messages
function showAlert(message, type) {
    // Remove any existing alerts
    const existingAlert = document.querySelector('.alert');
    if (existingAlert) {
        existingAlert.remove();
    }
    
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${type}`;
    alertDiv.textContent = message;
    
    const container = document.querySelector('.container') || document.body;
    container.insertBefore(alertDiv, container.firstChild);
    
    // Remove alert after 3 seconds
    setTimeout(() => {
        if (alertDiv.parentNode) {
            alertDiv.remove();
        }
    }, 3000);
}

// Function to load and display cart items
function loadCart() {
    if (!requireAuth()) return;
    
    updateCartCount();
    
    const cartTableBody = document.getElementById('cart-table-body');
    const emptyCartMessage = document.getElementById('empty-cart-message');
    const cartContent = document.getElementById('cart-content');
    
    if (!cartTableBody || !emptyCartMessage || !cartContent) return;
    
    if (cart.length === 0) {
        emptyCartMessage.style.display = 'block';
        cartContent.style.display = 'none';
        updateCartTotals();
        return;
    }
    
    emptyCartMessage.style.display = 'none';
    cartContent.style.display = 'block';
    
    // Clear existing cart items
    cartTableBody.innerHTML = '';
    
    // Add cart items to table
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <img src="${item.image}" alt="${item.name}" style="width: 50px; height: 50px; object-fit: cover; border-radius: 5px;">
                ${item.name}
            </td>
            <td>₹${item.price.toFixed(2)}</td>
            <td>
                <div class="quantity-control">
                    <button onclick="updateQuantity(${item.id}, ${item.quantity - 1})">-</button>
                    <input type="number" min="1" value="${item.quantity}" 
                           onchange="updateQuantity(${item.id}, this.value)" style="width: 60px;">
                    <button onclick="updateQuantity(${item.id}, ${item.quantity + 1})">+</button>
                </div>
            </td>
            <td>₹${itemTotal.toFixed(2)}</td>
            <td>
                <button class="remove-btn" onclick="removeFromCart(${item.id})">Remove</button>
            </td>
        `;
        cartTableBody.appendChild(row);
    });
    
    // Update totals
    updateCartTotals();
}

// Function to update cart totals
function updateCartTotals() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const deliveryFee = subtotal > 0 ? 49.99 : 0;
    const tax = subtotal * 0.05; // 5% tax
    const total = subtotal + deliveryFee + tax;
    
    const subtotalElement = document.getElementById('cart-subtotal');
    const deliveryFeeElement = document.getElementById('delivery-fee');
    const taxElement = document.getElementById('tax-amount');
    const totalElement = document.getElementById('cart-total');
    
    if (subtotalElement) subtotalElement.textContent = subtotal.toFixed(2);
    if (deliveryFeeElement) deliveryFeeElement.textContent = deliveryFee.toFixed(2);
    if (taxElement) taxElement.textContent = tax.toFixed(2);
    if (totalElement) totalElement.textContent = total.toFixed(2);
    
    // Also update order summary if on checkout page
    updateOrderSummary();
}

// Function to update order summary
function updateOrderSummary() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const deliveryFee = subtotal > 0 ? 49.99 : 0;
    const tax = subtotal * 0.05; // 5% tax
    const total = subtotal + deliveryFee + tax;
    
    const subtotalElement = document.getElementById('order-subtotal');
    const deliveryFeeElement = document.getElementById('order-delivery-fee');
    const taxElement = document.getElementById('order-tax');
    const totalElement = document.getElementById('order-total');
    
    if (subtotalElement) subtotalElement.textContent = subtotal.toFixed(2);
    if (deliveryFeeElement) deliveryFeeElement.textContent = deliveryFee.toFixed(2);
    if (taxElement) taxElement.textContent = tax.toFixed(2);
    if (totalElement) totalElement.textContent = total.toFixed(2);
    
    // Also update confirmed order summary if on order confirmation page
    updateConfirmedOrderSummary();
}

// Function to update confirmed order summary
function updateConfirmedOrderSummary() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const deliveryFee = subtotal > 0 ? 49.99 : 0;
    const tax = subtotal * 0.05; // 5% tax
    const total = subtotal + deliveryFee + tax;
    
    const subtotalElement = document.getElementById('confirmed-order-subtotal');
    const deliveryFeeElement = document.getElementById('confirmed-order-delivery-fee');
    const taxElement = document.getElementById('confirmed-order-tax');
    const totalElement = document.getElementById('confirmed-order-total');
    
    if (subtotalElement) subtotalElement.textContent = subtotal.toFixed(2);
    if (deliveryFeeElement) deliveryFeeElement.textContent = deliveryFee.toFixed(2);
    if (taxElement) taxElement.textContent = tax.toFixed(2);
    if (totalElement) totalElement.textContent = total.toFixed(2);
}

// Function to filter restaurants
function filterRestaurants() {
    const searchTerm = document.getElementById('search')?.value.toLowerCase() || '';
    const cuisine = document.getElementById('cuisine')?.value || '';
    
    const restaurantCards = document.querySelectorAll('.restaurant-card');
    
    restaurantCards.forEach(card => {
        const restaurantName = card.querySelector('h3')?.textContent.toLowerCase() || '';
        const restaurantCuisine = card.getAttribute('data-cuisine') || '';
        
        // Check if restaurant matches search term
        const matchesSearch = searchTerm === '' || restaurantName.includes(searchTerm);
        
        // Check if restaurant matches cuisine
        const matchesCuisine = cuisine === '' || restaurantCuisine === cuisine;
        
        // Show/hide based on both filters
        if (matchesSearch && matchesCuisine) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Function to load restaurants on restaurants page
function loadRestaurants() {
    const restaurantGrid = document.getElementById('restaurant-grid');
    if (!restaurantGrid) return;
    
    restaurantGrid.innerHTML = '';
    
    restaurants.forEach(restaurant => {
        const restaurantCard = document.createElement('div');
        restaurantCard.className = 'restaurant-card';
        restaurantCard.setAttribute('data-cuisine', restaurant.cuisine);
        restaurantCard.innerHTML = `
            <img src="${restaurant.image}" alt="${restaurant.name}" class="restaurant-image">
            <div class="restaurant-info">
                <h3>${restaurant.name}</h3>
                <p class="restaurant-cuisine">${restaurant.cuisine}</p>
                <p class="restaurant-rating">★ ${restaurant.rating} (${restaurant.deliveryTime} mins)</p>
                <button class="btn" onclick="viewRestaurant(${restaurant.id})">View Menu</button>
            </div>
        `;
        restaurantGrid.appendChild(restaurantCard);
    });
    
    // Apply any existing filters after loading restaurants
    // Use setTimeout to ensure DOM is fully updated
    setTimeout(filterRestaurants, 0);
    
    // Make sure event listeners are added after restaurants are loaded
    setTimeout(addRestaurantFilterEventListeners, 0);
}

// Function to add restaurant filter event listeners
function addRestaurantFilterEventListeners() {
    // Add event listener for search input
    const searchInput = document.getElementById('search');
    if (searchInput) {
        // Remove existing listener if any to avoid duplicates
        searchInput.removeEventListener('input', filterRestaurants);
        searchInput.removeEventListener('keyup', filterRestaurants);
        searchInput.addEventListener('input', filterRestaurants);
        searchInput.addEventListener('keyup', filterRestaurants);
    }
    
    // Add event listener for cuisine select
    const cuisineSelect = document.getElementById('cuisine');
    if (cuisineSelect) {
        // Remove existing listener if any to avoid duplicates
        cuisineSelect.removeEventListener('change', filterRestaurants);
        cuisineSelect.addEventListener('change', filterRestaurants);
    }
}

// Function to view restaurant menu
function viewRestaurant(restaurantId) {
    const restaurant = restaurants.find(r => r.id === restaurantId);
    if (restaurant) {
        localStorage.setItem('currentRestaurant', JSON.stringify(restaurant));
        window.location.href = 'restaurant-detail.html';
    }
}

// Function to load restaurant detail
function loadRestaurantDetail() {
    const restaurant = JSON.parse(localStorage.getItem('currentRestaurant'));
    if (!restaurant) {
        window.location.href = 'restaurants.html';
        return;
    }
    
    const restaurantHeader = document.getElementById('restaurant-header');
    if (!restaurantHeader) return;
    
    restaurantHeader.innerHTML = `
        <img src="${restaurant.image}" alt="${restaurant.name}" class="restaurant-header-image">
        <div class="restaurant-header-info">
            <h1>${restaurant.name}</h1>
            <p>${restaurant.description}</p>
            <p class="restaurant-header-rating">★ ${restaurant.rating} (${restaurant.deliveryTime} mins delivery)</p>
            <p>${restaurant.cuisine} cuisine</p>
        </div>
    `;
    
    // Load menu items for this restaurant
    loadMenuItems(restaurant.id);
}

// Function to filter menu items
function filterMenuItems() {
    const category = document.getElementById('category')?.value || '';
    
    const menuCards = document.querySelectorAll('.menu-item-card');
    
    menuCards.forEach(card => {
        const itemCategory = card.getAttribute('data-category') || '';
        
        // Show/hide based on category filter
        if (category === '' || itemCategory === category) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Function to load menu items for a restaurant
function loadMenuItems(restaurantId) {
    const menuGrid = document.getElementById('menu-grid');
    if (!menuGrid) return;
    
    // Filter menu items for this restaurant
    const restaurantMenuItems = menuItems.filter(item => item.restaurantId === restaurantId);
    
    menuGrid.innerHTML = '';
    
    restaurantMenuItems.forEach(item => {
        const menuItemCard = document.createElement('div');
        menuItemCard.className = 'menu-item-card';
        menuItemCard.setAttribute('data-category', item.category);
        menuItemCard.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="menu-image">
            <div class="menu-info">
                <h3>${item.name}</h3>
                <p class="menu-category">${item.category}</p>
                <p>${item.description}</p>
                <div class="menu-price">₹${item.price.toFixed(2)}</div>
                <button class="btn" onclick="addToCart(${item.id})">Add to Cart</button>
            </div>
        `;
        menuGrid.appendChild(menuItemCard);
    });
    
    // Apply any existing filters after loading menu items
    setTimeout(filterMenuItems, 0);
    
    // Add event listener for category filter
    setTimeout(addMenuFilterEventListener, 0);
}

// Function to add menu filter event listener
function addMenuFilterEventListener() {
    const categorySelect = document.getElementById('category');
    if (categorySelect) {
        // Remove existing listener if any to avoid duplicates
        categorySelect.removeEventListener('change', filterMenuItems);
        categorySelect.addEventListener('change', filterMenuItems);
    }
}

// Function to load order summary
function loadOrderSummary() {
    if (!requireAuth()) return;
    
    updateCartCount();
    
    const orderItemsElement = document.getElementById('order-items');
    
    if (!orderItemsElement) return;
    
    if (cart.length === 0) {
        orderItemsElement.innerHTML = '<p>Your cart is empty.</p>';
        updateOrderSummary();
        return;
    }
    
    // Display order items
    let orderHTML = '<ul style="list-style: none; padding: 0;">';
    
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        
        orderHTML += `
            <li style="display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid #eee;">
                <div>
                    <strong>${item.name}</strong> x ${item.quantity}
                </div>
                <div>₹${itemTotal.toFixed(2)}</div>
            </li>
        `;
    });
    
    orderHTML += '</ul>';
    orderItemsElement.innerHTML = orderHTML;
    
    // Update totals
    updateOrderSummary();
}

// Function to load confirmed order details
function loadConfirmedOrder() {
    if (!requireAuth()) return;
    
    updateCartCount();
    
    const orderItemsElement = document.getElementById('confirmed-order-items');
    
    if (!orderItemsElement) return;
    
    if (cart.length === 0) {
        orderItemsElement.innerHTML = '<p>No order details available.</p>';
        updateConfirmedOrderSummary();
        return;
    }
    
    // Display order items
    let orderHTML = '<ul style="list-style: none; padding: 0;">';
    
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        
        orderHTML += `
            <li style="display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid #eee;">
                <div>
                    <strong>${item.name}</strong> x ${item.quantity}
                </div>
                <div>₹${itemTotal.toFixed(2)}</div>
            </li>
        `;
    });
    
    orderHTML += '</ul>';
    orderItemsElement.innerHTML = orderHTML;
    
    // Update totals
    updateConfirmedOrderSummary();
    
    // Clear cart after order confirmation
    cart = [];
    saveCart();
    updateCartCount();
}

// Function to load user profile
function loadUserProfile() {
    if (!requireAuth()) return;
    
    const profileInfo = document.getElementById('profile-info');
    if (!profileInfo) return;
    
    profileInfo.innerHTML = `
        <div class="profile-header">
            <div class="profile-avatar">${currentUser.name.charAt(0)}</div>
            <div>
                <h2>${currentUser.name}</h2>
                <p>${currentUser.email}</p>
            </div>
        </div>
    `;
}

// User registration
function registerUser() {
    const name = document.getElementById('reg-name')?.value;
    const email = document.getElementById('reg-email')?.value;
    const password = document.getElementById('reg-password')?.value;
    const confirmPassword = document.getElementById('confirm-password')?.value;
    
    if (!name || !email || !password || !confirmPassword) {
        showAlert('Please fill in all fields.', 'error');
        return;
    }
    
    if (password !== confirmPassword) {
        showAlert('Passwords do not match!', 'error');
        return;
    }
    
    // Check if user already exists
    if (users.find(user => user.email === email)) {
        showAlert('User with this email already exists!', 'error');
        return;
    }
    
    // Create new user
    const newUser = {
        id: users.length + 1,
        name: name,
        email: email,
        password: password
    };
    
    users.push(newUser);
    saveUsers();
    
    showAlert('Registration successful! Please login.', 'success');
    
    // Clear form
    if (document.getElementById('reg-name')) document.getElementById('reg-name').value = '';
    if (document.getElementById('reg-email')) document.getElementById('reg-email').value = '';
    if (document.getElementById('reg-password')) document.getElementById('reg-password').value = '';
    if (document.getElementById('confirm-password')) document.getElementById('confirm-password').value = '';
    
    // Redirect to login after short delay
    setTimeout(() => {
        window.location.href = 'login.html';
    }, 2000);
}

// User login
function loginUser() {
    const email = document.getElementById('login-email')?.value;
    const password = document.getElementById('login-password')?.value;
    
    if (!email || !password) {
        showAlert('Please enter both email and password.', 'error');
        return;
    }
    
    // Find user
    const user = users.find(user => user.email === email && user.password === password);
    
    if (user) {
        currentUser = user;
        saveCurrentUser();
        
        // Load user's cart
        cart = JSON.parse(localStorage.getItem(`cart_${user.id}`)) || [];
        updateCartCount();
        
        showAlert('Login successful!', 'success');
        
        // Redirect to home page after short delay
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 1500);
    } else {
        showAlert('Invalid email or password. Please try again.', 'error');
    }
}

// User logout
function logoutUser() {
    console.log('Logout function called');
    currentUser = null;
    cart = [];
    saveCurrentUser();
    updateCartCount();
    showAlert('You have been logged out.', 'success');
    console.log('Logout alert shown');
    
    // Redirect to home page after longer delay to allow test to detect alert
    setTimeout(() => {
        console.log('Redirecting to index.html');
        window.location.href = 'index.html';
    }, 3000); // Increased from 1500ms to 3000ms
}

// Function to place order
function placeOrder() {
    if (!requireAuth()) return;
    
    // Get delivery information
    const fullname = document.getElementById('fullname')?.value;
    const address = document.getElementById('address')?.value;
    const phone = document.getElementById('phone')?.value;
    
    if (!fullname || !address || !phone) {
        showAlert('Please fill in all delivery information.', 'error');
        return;
    }
    
    // In a real application, this would send the order to a server
    // For this demo, we'll just show a success message and redirect
    
    showAlert('Order placed successfully!', 'success');
    
    // Redirect to order confirmation page after short delay
    setTimeout(() => {
        window.location.href = 'order-confirmation.html';
    }, 2000);
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Check if we need to protect the page
    const protectedPages = ['cart.html', 'checkout.html', 'order-confirmation.html', 'profile.html'];
    const currentPage = window.location.pathname.split('/').pop();
    
    if (protectedPages.includes(currentPage) && !isLoggedIn()) {
        window.location.href = 'login.html';
        return;
    }
    
    // Update cart count
    updateCartCount();
    
    // Load restaurants if on restaurants page
    if (currentPage === 'restaurants.html') {
        loadRestaurants();
    }
    
    // Load restaurant detail if on restaurant detail page
    if (currentPage === 'restaurant-detail.html') {
        loadRestaurantDetail();
    }
    
    // Load cart if on cart page
    if (currentPage === 'cart.html') {
        loadCart();
    }
    
    // Load order summary if on checkout page
    if (currentPage === 'checkout.html') {
        loadOrderSummary();
    }
    
    // Load confirmed order if on order confirmation page
    if (currentPage === 'order-confirmation.html') {
        loadConfirmedOrder();
    }
    
    // Load user profile if on profile page
    if (currentPage === 'profile.html') {
        loadUserProfile();
        
        // Add event listener for logout button on profile page
        // Use a more robust approach to ensure the button exists
        const attachLogoutListener = () => {
            const logoutBtn = document.getElementById('logout-btn');
            if (logoutBtn) {
                console.log('Logout button found, attaching event listener');
                // Remove any existing event listeners to prevent duplicates
                logoutBtn.removeEventListener('click', handleLogout);
                logoutBtn.addEventListener('click', handleLogout);
            } else {
                console.log('Logout button not found, retrying in 100ms');
                // If button not found yet, try again after a short delay
                setTimeout(attachLogoutListener, 100);
            }
        };
        
        // Handle logout click
        const handleLogout = function(e) {
            console.log('Logout button clicked');
            e.preventDefault();
            logoutUser();
        };
        
        // Start attaching the listener
        attachLogoutListener();
    }
    
    // Add event listener for login form
    if (currentPage === 'login.html') {
        const loginForm = document.getElementById('login-form');
        if (loginForm) {
            loginForm.addEventListener('submit', function(e) {
                e.preventDefault(); // Prevent normal form submission
                loginUser(); // Call the login function
            });
        }
    }
    
    // Add event listener for registration form
    if (currentPage === 'register.html') {
        const registerForm = document.getElementById('register-form');
        if (registerForm) {
            registerForm.addEventListener('submit', function(e) {
                e.preventDefault(); // Prevent normal form submission
                registerUser(); // Call the registration function
            });
        }
    }
});