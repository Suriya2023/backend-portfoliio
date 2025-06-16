✅ MERN Portfolio Deployment Summary (Step-by-Step)
🔹 Project Structure
Frontend: React (Deployed on Vercel)

Backend: Node.js + Express (Deployed on Render)

Database: MongoDB Atlas (Cloud-based NoSQL DB)

🧱 Step-by-Step Development & Deployment
1. Local Setup
Created frontend using React (create-react-app)

Created backend using Node.js + Express

Created MongoDB schema and connected using mongoose

Environment variables stored in .env:

env
Copy
Edit
PORT=4000
MONGO_URI=mongodb+srv://admin:admin@cluster0.mongodb.net/portfolioDB
JWT_SECRET=yourSecret
2. MongoDB Atlas Configuration
Created a free cluster at MongoDB Atlas

Created portfolioDB database

Whitelisted IPs: 0.0.0.0/0 for public access

Created DB user: admin with password and roles

3. Backend Setup (Local)
Installed packages:

bash
Copy
Edit
npm install express mongoose dotenv cors cookie-parser nodemon
Configured routes (/api/send) to accept feedback

Connected MongoDB using mongoose.connect(process.env.MONGO_URI)

Used nodemon to run:

bash
Copy
Edit
npx nodemon app.js
4. Frontend Setup
Feedback form built with fields: name, email, subject, message

Axios instance created:

js
Copy
Edit
const Api = axios.create({ baseURL: 'http://localhost:4000/' })
On form submit:

Send POST request to /api/send

If successful, reset() form and redirect user

5. Backend Deployment (Render)
Pushed backend code to GitHub repo

Logged in to Render

Created New Web Service

Connected GitHub repo

Set environment variables (same as .env)

In Start Command, used:

bash
Copy
Edit
npx nodemon app.js
Got live backend URL like:
https://backend-portfoliio.onrender.com

6. Frontend Deployment (Vercel)
Pushed frontend code to GitHub

Logged in to Vercel

Connected repo and deployed

Updated Axios base URL to:

js
Copy
Edit
const Api = axios.create({ baseURL: 'https://backend-portfoliio.onrender.com/' })
7. Form Reset & Token Storage
After successful feedback submission:

Stored token in localStorage

Cleared form using e.target.reset()

✅ Working Status
🎯 Form submits data to MongoDB successfully

🎯 Backend and frontend both live

❌ No Email Notification Yet (You asked about this next)

✉️ What’s Next? (Email Notification)
If you want to get feedback alerts on Gmail:

Use Nodemailer in backend to send emails

Or use services like:

Formspree

EmailJS

SendGrid