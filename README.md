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

```
- `Tech Stack`
- React
    - React Router DOM
   - Context API
      - TailwindCSS
```
