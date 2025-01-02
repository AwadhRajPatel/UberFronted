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

### Context Provider

#### User Context
**Component:** [`UserContext`](src/context/UserContext.jsx)  
**Description:** Global state management for user data  
**State Structure:**
```javascript
{
  email: string,
  fullName: {
    firstName: string,
    lastName: string
  }
}

- `Tech Stack`
- React
    - React Router DOM
   - Context API
      - TailwindCSS