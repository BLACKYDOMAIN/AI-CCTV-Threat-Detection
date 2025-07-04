# AI-Based Real-Time CCTV Threat Detection System

An AI-powered surveillance dashboard that detects and alerts for suspicious activities such as intrusion, loitering, unusual motion, and weapon detection. Built using React (frontend), FastAPI (backend), and Azure SQL (cloud database).

---

## 🔥 Features

- 📡 **Live Feed Monitoring**: Connect mobile cameras or upload video for analysis
- 🧠 **Real-Time Threat Detection** using AI/ML
- 📸 **Snapshot Gallery** of detected threats (download/share)
- 📊 **Risk Analytics Dashboard** (Pie, Bar, Heatmaps)
- 🚨 **Real-Time Notifications** (pop-ups, sounds, email/SMS)
- 📜 **Alert Logs** with filtering
- 🕵️‍♂️ **Behavior History Tracking** (loitering paths)
- 🔐 **Admin Login System** (role-based access)
- ⚙️ **System Settings Page** (sensitivity, zones, API keys)
- 🗃️ **Data Export** as CSV/PDF
- 📱 **Fully Responsive UI**

---

## 🧰 Tech Stack

| Layer        | Tech                         |
|--------------|------------------------------|
| Frontend     | React, Tailwind CSS, Vite    |
| Backend      | FastAPI                      |
| Database     | Azure SQL (Student Tier)     |
| AI Model     | YOLO / Custom Trained Model  |
| Notifications| Twilio (SMS), Telegram Bot   |

---

## 🚀 Local Setup Instructions

```bash
# Clone the repo
git clone https://github.com/your-username/ai-cctv.git
cd ai-cctv/FrontEnd

# Install dependencies
npm install

# Start dev server
npm run dev
