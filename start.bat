@echo off
REM === OvershareApp Start Script ===

REM Change to the directory of this script
cd /d "%~dp0"

REM Install dependencies if node_modules is missing
if not exist "node_modules" (
    echo Installing dependencies...
    npm install
)

REM Start the development server
echo Starting OvershareApp...
npm run dev

pause
