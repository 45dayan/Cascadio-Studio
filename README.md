Cascadio Studio 💇‍♀️✨
Cascadio Studio is a premium, responsive landing page designed for a high-end luxury salon. The project focuses on a sophisticated visual identity, smooth user interactions, and a streamlined appointment inquiry system.
🚀 Features
Luxury Aesthetic: A modern, high-contrast UI designed with elegant typography and a "Premium Minimalist" feel.

Dynamic Hero Section: Custom JavaScript-driven text rotation logic that cycles through key salon specialties (Style, Grace, Beauty).

Serverless Appointment Flow: Integrated with the Formspree API, allowing clients to send booking inquiries directly to the salon's email without needing a backend server or database.

Service Showcase: Dedicated sections to highlight premium salon offerings with a focus on readability and layout balance.

Visual Gallery: A curated portfolio grid showcasing the salon’s best work using a Responsive CSS Grid layout.

Mobile-Optimized Navigation: A custom-built hamburger menu toggle ensuring a seamless experience on all devices, including older smartphones.
🛠️ Tech Stack
Frontend: HTML5, CSS3 (Custom Layouts & Typography)

Interactivity: Vanilla JavaScript (ES6+)

Form Handling: Formspree API (Serverless Email Integration)

Design Principles: Flexbox, CSS Grid, and Mobile-First Responsive Design.
📂 Project Structure
├── assets/
│   ├── components/      # UI sections (Hero, Services, Gallery)
│   ├── css/             # Custom styling (Layout & Branding)
│   └── img/             # High-resolution salon and portfolio images
├── scripts/
│   └── main.js          # Mobile menu, text switcher, and form logic
└── index.html           # Main landing page
⚙️ Setup & Installation
1.Clone the repository:
git clone https://github.com/yourusername/cascadio-studio.git
2. Configure Formspree:
   Go to https://formspree.io/forms and create a new form.

Copy your unique Endpoint URL (it will look like https://formspree.io/f/xrgnpvgq).

Find the <form> tag in your index.html and update the action attribute:
<form action="https://formspree.io/f/your_unique_id" method="POST">
 3. Run Locally:
 Open index.html in any modern browser.
