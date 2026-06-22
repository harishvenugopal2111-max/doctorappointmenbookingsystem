🏥 Doctor Appointment Booking System
📖 Overview

The Doctor Appointment Booking System is a web-based application that enables patients to book, manage, and track appointments with doctors efficiently. The system provides a user-friendly interface for appointment scheduling, doctor management, and patient record handling, reducing manual effort and improving healthcare service accessibility.

This project demonstrates full-stack web development concepts using modern technologies and CRUD operations for real-world healthcare management.

🎯 Objectives
Simplify appointment booking process
Manage patient and doctor records
Reduce manual scheduling errors
Provide efficient healthcare management
Enable easy appointment tracking
✨ Features
👨‍⚕️ Doctor Management
👤 Patient Management
📅 Appointment Booking
✏️ Update Appointments
❌ Cancel Appointments
🔍 Search Patients & Doctors
📊 Admin Dashboard
📱 Responsive Design
🔐 User Authentication
🗄️ Database Integration
🏗️ Tech Stack
Frontend
HTML5
CSS3
JavaScript
Backend
Python
Flask
Database
MySQL / SQLite
Tools
VS Code
XAMPP (MySQL)
Git & GitHub
🏛️ System Architecture
Patient
   │
   ▼
Frontend (HTML/CSS/JS)
   │
   ▼
Flask Backend
   │
   ▼
MySQL Database
   │
 ┌─┴──────────┐
 ▼            ▼
Doctors   Appointments
📂 Project Structure
doctor-appointment-system/
│
├── app.py
├── database.db
├── requirements.txt
│
├── static/
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── script.js
│
├── templates/
│   ├── index.html
│   ├── add_patient.html
│   ├── add_doctor.html
│   ├── appointments.html
│   ├── edit_appointment.html
│   └── dashboard.html
│
└── README.md
⚙️ Installation
Clone Repository
git clone https://github.com/your-username/doctor-appointment-system.git

cd doctor-appointment-system
Install Dependencies
pip install -r requirements.txt
Run Application
python app.py

Application will run on:

http://127.0.0.1:5000
🗄️ Database Tables
Patients
Field	Type
id	INT
name	VARCHAR
age	INT
gender	VARCHAR
phone	VARCHAR
Doctors
Field	Type
id	INT
name	VARCHAR
specialization	VARCHAR
experience	INT
Appointments
Field	Type
id	INT
patient_name	VARCHAR
doctor_name	VARCHAR
appointment_date	DATE
appointment_time	TIME
🔄 Workflow
Patient enters details.
Doctor records are stored.
Patient selects doctor.
Appointment is booked.
Appointment details are saved in database.
Admin can view, edit, or delete appointments.
Patient receives appointment confirmation.
📊 Dashboard Features
Admin Dashboard
Total Patients
Total Doctors
Total Appointments
Today's Appointments
Appointment Management
Create Appointment
Update Appointment
Cancel Appointment
Search Appointment
🔒 Security Features
User Login Authentication
Secure Database Connection
Input Validation
Error Handling
🚀 Future Enhancements
Online Video Consultation
Email Notifications
SMS Appointment Reminders
Doctor Availability Tracking
Payment Gateway Integration
Prescription Management
Medical History Tracking
🎓 Academic Relevance

This project demonstrates concepts in:

Python Programming
Flask Framework
Database Management System
CRUD Operations
Web Development
Healthcare Management Systems
👨‍💻 Developer

Harish Venugopal
B.Tech Artificial Intelligence & Data Science

Connect With Me
LinkedIn: www.linkedin.com/in/harish-venugopal-4a06b1272
GitHub: github.com/harishvenugopal
⭐ Support

If you found this project useful, consider giving it a ⭐ on GitHub.

"Making Healthcare Appointments Faster and Smarter." 🏥✨
