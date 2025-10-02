@echo off
echo === Installing dependencies ===
call npm install

echo === Setting environment variables ===
set MONGO_URI=your-mongodb-uri
set SESSION_SECRET=your-secret-key
set PORT=3000

echo === Starting Overshare App ===
call npm start

pause
