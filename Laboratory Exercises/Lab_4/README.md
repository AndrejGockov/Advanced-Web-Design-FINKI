# CryptoTracker

## Contributors
- Angela Bojkova, 216048
- Aleksandar Trkaleski, 216126

## Project Overview
CryptoTracker is a Vue.js and Firebase-based web application that allows users to track real-time cryptocurrency prices, simulate buying and selling, and manage a personalized portfolio with authentication and historical price charts.

## Setup

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Pipzzter/coincap-lab.git
   cd coincap-lab
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Environment Variables
Create a `.env` file in the root directory and add the following variables. This file is ignored by Git for security.

#### CoinCap API Key
1. Visit [CoinCap.io](https://coincap.io/) and sign up for a free account.
2. Log in and go to your dashboard or API settings.
3. Generate a new API key (free tier available with rate limits).
4. Add to `.env`:
   ```
   VITE_COINS_API_KEY=your-coincap-api-key-here
   ```

#### Firebase Configuration
1. Go to the [Firebase Console](https://console.firebase.google.com/).
2. Create a new project (or use an existing one).
3. Enable Authentication:
   - Navigate to Build > Authentication > Sign-in method.
   - Enable "Email/Password" sign-in.
4. Enable Firestore Database:
   - Go to Firestore Database > Create database.
   - Choose "Start in test mode" for development.
5. Get Firebase Config:
   - In Project settings > General > Your apps, click "Add app" and select Web (</>).
   - Register the app (e.g., name it "CryptoTracker Web").
   - Firebase will show a JavaScript config object with your app's credentials.
   - Copy the values from this object and add them to your `.env` file:
     ```
     VITE_FIREBASE_API_KEY=your-api-key
     VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
     VITE_FIREBASE_PROJECT_ID=your-project-id
     VITE_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
     VITE_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
     VITE_FIREBASE_APP_ID=your-app-id
     ```
     (Replace the placeholders with the actual values from the config object.)

### Running the App
```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Documentation
Full project report and technical documentation are available in the GitHub Wiki:  
📄 https://github.com/BojkovaA/CryptoTracker/wiki
