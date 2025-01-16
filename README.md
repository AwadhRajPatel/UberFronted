# Uber Clone Frontend Documentation

A React-based frontend application that implements user and captain authentication flows.

## Endpoints

### Home Page
**Path:** `/`  
**Component:** [`Home`](src/Pages/Home.jsx)  
**Description:** Landing page with a hero image and "Get Started" button that redirects to login.

### User Authentication

#### User Login
**Path:** `/login`  
**Component:** [`UserLogin`](src/Pages/UserLogin.jsx)  
**Description:** Handles user login with email and password  
**Form Fields:**
- Email (required)
- Password (required)

**Status Codes:**
- Form validation: Client-side validation for required fields
- Success: Clears form and updates [`UserContext`](src/context/UserContext.jsx)

#### User Signup
**Path:** `/signup`  
**Component:** [`UserSignup`](src/Pages/UserSignup.jsx)  
**Description:** Handles new user registration  
**Form Fields:**
- First Name (required)
- Last Name
- Email (required)
- Password (required)

**Status Codes:**
- Form validation: Client-side validation for required fields
- Success: Clears form and stores user data

### Captain Authentication

#### Captain Login
**Path:** `/captain-login`  
**Component:** [`Captainlogin`](src/Pages/Captainlogin.jsx)  
**Description:** Handles captain/driver login  
**Form Fields:**
- Email (required)
- Password (required)

**Status Codes:**
- Form validation: Client-side validation for required fields
- Success: Clears form and stores captain data

#### Captain Signup
**Path:** `/captain-signup`  
**Component:** [`CaptainSignup`](src/Pages/CaptainSignup.jsx)  
**Description:** Handles new captain/driver registration  
**Form Fields:**
- First Name (required)
- Last Name
- Email (required)
- Password (required)

**Status Codes:**
- Form validation: Client-side validation for required fields
- Success: Clears form and stores captain data

### Protected Routes & Authentication

#### User Logout
**Path:** `/userlogout`  
**Component:** [`UserLogout`](src/Pages/UserLogout.jsx)  
**Description:** Handles user logout and token cleanup
- Makes authenticated request to logout endpoint
- Clears token from localStorage
- Redirects to login page

**Headers Required:**
- `Authorization: Bearer <token>`

#### Protection Wrappers

##### User Protection
**Component:** [`UserProtectWrapper`](src/Pages/UserProtectWrapper.jsx)  
**Description:** HOC that protects user-only routes
- Verifies user authentication token
- Fetches and stores user profile data
- Redirects to login if unauthorized
- Shows loading state during verification

**Protected Routes:**
- `/home` - User homepage
- `/userlogout` - User logout page

##### Captain Protection  
**Component:** [`CaptainProtectWrapper`](src/Pages/CaptainProtectWrapper.jsx)  
**Description:** HOC that protects captain-only routes
- Verifies captain authentication token  
- Fetches and stores captain profile data
- Redirects to captain login if unauthorized
- Shows loading state during verification

**Protected Routes:**
- `/captain-home` - Captain dashboard

**Usage Example:**
```jsx
<Route path="/home" element={
  <UserProtectWrapper>
    <Home/>
  </UserProtectWrapper>
}/>
```

### Context Provider

#### User Context
**Component:** [`UserContext`](src/context/UserContext.jsx)  
**Description:** Global state management for user data  
**State Structure:**
```javascript
{
  email: string,
  fullname: {
    firstname: string,
    lastname: string
  }
}
```

## Components Documentation

### Location Search Panel
**Component:** [`LocationSearchPanel`](src/components/LocationSearchPanel.jsx)  
**Description:** Displays a list of selectable location suggestions for pickup/destination.

**Props:**
- `setPanelOpen(boolean)` - Controls visibility of location panel
- `setVehiclePanel(boolean)` - Controls visibility of vehicle selection panel

**Usage Example:**
```jsx
<LocationSearchPanel 
  setPanelOpen={setPanelOpen}
  setVehiclePanel={setVehiclePanel} 
/>
```
## Vehicle Selection Panel
- `Component: `
   ### VehiclePanel
## Description: 
- Shows available vehicle options with pricing and details.

# Props:

- setConfirmRidePanel(boolean) - Controls visibility of ride confirmation panel
- setVehiclePanel(boolean) - Controls own visibility

## Features:
 - Shows vehicle types (UberGo, Moto, UberAuto)
- Displays pricing, ETA and capacity for each option
 - Active state styling on selection
 - Confirm Ride Panel
 - Component: ConfirmRide
## Description: 
- Final confirmation screen showing ride details before booking.

# Props:

- setVehiclePanel(boolean) - Controls visibility of vehicle panel
- setVehicleFound(boolean) - Controls visibility of driver search panel
## Features:

- Shows pickup and destination locations
- Displays final fare
- Confirm button to initiate booking
- Looking For Driver Panel
- Component: LookingForDriver
## Description: 
 - Loading screen while searching for available drivers.

# Props:

- setVehicleFound(boolean) - Controls own visibility

### Features:

- Shows ride details
- Location and fare information
- Loading state while matching driver
- Waiting For Driver Panel
- Component: WaitingForDriver

## Description: 
- Shows matched driver details and ride information.

# Props:

- setWaitingForDriver(boolean) - Controls own visibility

## Features:
- Driver name and vehicle details
- Pickup and destination locations
- Final fare confirmation

## Component Flow
- Location Search → Vehicle Selection → Confirm Ride → Looking For Driver → Waiting For Driver


- `Tech Stack`
- React
    - React Router DOM
   - Context API
      - TailwindCSS

- `Required Dependencies`
      - React Router DOM - For navigation
      - TailwindCSS - For styling
- Remix Icon - For icons (ri- classes)
  - GSAP - For animations
- Context API - For state management
