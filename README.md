# Feedback Collector ✨

A minimal, full-stack microapplication for collecting user feedback built with **React (Vite)**, **Tailwind CSS**, and **Netlify Functions** using **JSON-based storage**. This project demonstrates clean code practices, thoughtful UX, and production-ready deployment.

---

## 🚀 Features

- 🌐 Single-page React app (SPA)
- 🎨 Clean, responsive, minimal design
- 📩 Submit feedback with name, email, and message
- 🔐 Basic form validation and loading states
- 👀 Admin view to display all submitted feedbacks
- 💾 Stores feedbacks in a JSON file using Netlify Functions
- 📅 Timestamps for every feedback
- 📱 Mobile-friendly layout
- 🌙 Dark/light mode ready (extendable)
- 📡 Hosted and deployed on Netlify

---

## 🛠 Tech Stack

**Frontend**
- React + Vite
- Tailwind CSS

**Backend**
- Netlify Functions (Serverless)
- JSON-based storage (`storage/feedbacks.json`)

**Deployment**
- Netlify (Frontend + Functions)
  
---

## 📂 Project Structure


---

## 🔧 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/feedback-collector.git
cd feedback-collector

### 2. Install Dependencies
```bash
npm install

### 3. Run the App Locally
```bash
npm run dev
 -Functions may not work locally unless you're using Netlify CLI. To test backend locally:


npm install -g netlify-cli
netlify dev