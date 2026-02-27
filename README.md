# MEVN Auth App

Full-stack authentication solution featuring modern security standards including WebAuthn (Passkeys), multi-factor authentication flows and detailed account management.


## Features

### Authentication & Authorization
- **Multi-Method Login**: Support for traditional Password login and modern **WebAuthn (Biometrics/Security Keys)**.
- **Secure Registration**: Multi-step registration flow with validation.
- **Session Management**: Secure, database-backed session handling.
- **Account Recovery**: Password reset flows.

### Account Management
- **Dashboard**: User profile and status overview.
- **Security Settings**: Manage passwords and security preferences.
- **Device Management**: View and manage active sessions/devices.
- **WebAuthn Management**: Add or remove passkeys/security authenticators.
- **Profile Updates**: Update personal details and contact information.

## Tech Stack

### Frontend
- **Framework**: [Vue 3](https://vuejs.org/)
- **Build Tool**: Vue CLI
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Routing**: Vue Router
- **Security**: `@simplewebauthn/browser` for client-side WebAuthn operations.

### Backend
- **Runtime**: [Node.js](https://nodejs.org/)
- **Framework**: [Express.js](https://expressjs.com/)
- **Database**: [MongoDB](https://www.mongodb.com/) (Native Driver)
- **Validation**: [Joi](https://joi.dev/)
- **Security**: 
  - `bcryptjs` for password hashing
  - `@simplewebauthn/server` for server-side WebAuthn verification
  - `crypto` for secure token generation

## Project Structure

```bash
├── backend/                # Node.js/Express Server
│   ├── database/           # MongoDB connection logic
│   ├── methods/            # Helper methods (encryption, etc.)
│   ├── routes/             # API Route definitions
│   │   ├── manage/         # Account management routes
│   │   ├── signin/         # Login strategies (Password, WebAuthn)
│   │   └── signup/         # Registration flow
│   └── server.js           # Entry point
│
└── frontend/               # Vue 3 Client
    ├── src/
    │   ├── components/     # Reusable UI components
    │   ├── router/         # Frontend route definitions
    │   │   ├── loginMethods.js
    │   │   ├── manageAcc.js
    │   │   └── ...
    │   ├── views/          # Page components
    │   │   ├── Login/      # Login flows
    │   │   ├── Register/   # Registration flows
    │   │   └── ManageAccount/
    │   │   └── ...
    │   └── main.js
```

## API Endpoints

### Base URL: `/v2`

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| **POST** | `/v2/signin/withemailandpassword` | Authenticate using email & password |
| **POST** | `/v2/signin/webauthn` | Authenticate using WebAuthn |
| **POST** | `/v2/signup/createaccount` | Register a new user account |
| **POST** | `/v2/signout` | Destroy current session |
| **GET** | `/v2/manage` | Account management routes |
| **GET** | `/manageaccountpage` | Fetch authenticated user profile |

## Getting Started

### Prerequisites
- **Node.js** (v14+ recommended)
- **MongoDB** instance running locally on port `27017` with Replica Set `rs`.

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/azurrk/mevn-auth-app.git
   cd auth-v1
   ```

2. **Setup Backend**
   ```bash
   cd backend
   npm install
   # Start the server on port 8000
   npm start
   ```

3. **Setup Frontend**
   ```bash
   cd frontend
   npm install
   # Compiles and hot-reloads for development (default port 8080)
   npm run serve
   ```

## Environment

The project currently uses the following default configurations (ensure these match your environment or update accordingly):

- **Backend Port**: `8000`
- **MongoDB URI**: `mongodb://localhost:27017/?replicaSet=rs`
- **Database Name**: `auth`

