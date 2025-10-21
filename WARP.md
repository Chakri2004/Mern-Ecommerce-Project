# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is a full-stack MERN e-commerce application with the following key features:
- User authentication with JWT and OTP login
- Product catalog with categories, reviews, and ratings
- Shopping cart and wishlist functionality
- Order management and payment processing (Stripe)
- Admin dashboard for managing products, orders, and users
- Image upload via Cloudinary
- Email notifications and password reset

## Development Commands

### Backend Development
```powershell
# Start backend server in development mode
npm run dev

# Start backend in production mode
npm start

# Create admin user (run once)
node backend/createAdmin.js

# Seed database with sample data
node backend/seeder.js

# Test database connection
node backend/testConnection.js
```

### Frontend Development
```powershell
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start frontend development server
npm start

# Build for production
npm run build

# Run tests
npm test
```

### Full Application
```powershell
# Install all dependencies (from root)
npm install
cd frontend && npm install

# For production deployment (Heroku)
npm run heroku-postbuild
```

## Environment Configuration

### Backend Configuration
Create `backend/config/config.env` with:
- `PORT` - Server port (default: 5000)
- `DB_URI` - MongoDB connection string
- `JWT_SECRET` - JWT signing secret
- `JWT_EXPIRE` - JWT expiration time
- `COOKIE_EXPIRE` - Cookie expiration time
- `STRIPE_API_KEY` & `STRIPE_SECRET_KEY` - Stripe payment integration
- `SMPT_*` variables - Email service configuration
- `CLOUDINARY_*` variables - Image upload service

### Frontend Configuration
Create `frontend/.env` with necessary environment variables for React app.

## Architecture Overview

### Backend Structure (`backend/`)
- **Entry Point**: `server.js` → `app.js` (Express app configuration)
- **Models** (`models/`): Mongoose schemas for User, Product, Order
- **Controllers** (`controllers/`): Business logic for API endpoints
- **Routes** (`routes/`): API route definitions with middleware
- **Middleware** (`middleware/`): Authentication, error handling, async error catching
- **Utils** (`utils/`): Reusable utilities (JWT, email, API features, error handling)

### Frontend Structure (`frontend/src/`)
- **Redux Architecture**: 
  - Store configuration in `store.js`
  - Actions in `actions/` (async thunks for API calls)
  - Reducers in `reducers/` (state management)
  - Constants in `constants/` (action type definitions)
- **Components** (`component/`):
  - `Admin/` - Admin dashboard and management features
  - `User/` - User profile, authentication, password management
  - `Product/` - Product listing, details, search functionality
  - `Cart/` - Shopping cart, wishlist, checkout process
  - `Order/` - Order history and details
  - `layout/` - Header, footer, and shared layout components
- **Routing**: React Router with protected routes for authenticated content

### Key Architectural Patterns

1. **Authentication Flow**: JWT-based with cookies, includes OTP login option
2. **State Management**: Redux with localStorage persistence for cart/shipping
3. **API Integration**: Centralized actions with async thunks
4. **File Upload**: Cloudinary integration for product and avatar images
5. **Error Handling**: Centralized error middleware and user-friendly messages
6. **Admin Features**: Role-based access control with separate admin routes

### Database Models
- **User**: Authentication, profile data, role-based permissions
- **Product**: Catalog with images, reviews, stock management
- **Order**: Complete order lifecycle with payment tracking

### Payment Integration
- Stripe for payment processing
- Order confirmation and success handling
- Payment intent creation and confirmation flow

### Development Notes
- Backend serves frontend static files in production
- Proxy configuration for development (frontend port 3000 → backend port 5000)
- Legacy OpenSSL provider used for React build compatibility
- Cloudinary handles all image storage and transformations
- Email functionality via Nodemailer for password resets and notifications

## Testing & Debugging
- No automated tests currently configured
- Use browser dev tools and Redux DevTools for frontend debugging
- Backend logs to console with detailed error information
- Database connection testing utility available