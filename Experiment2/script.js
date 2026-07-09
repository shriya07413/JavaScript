/* =========================================================
SIT Nagpur - CSE Department Website
Stylesheet: style.css
Vibrant Blue / Indigo / Cyan professional palette
========================================================= */

/* ---------- CSS Variables for easy theme management ---------- */
:root {
--primary-blue: #2563eb;
--deep-blue: #10265e;
--indigo: #4f46e5;
--cyan: #06b6d4;
--sky-blue: #eef4ff;
--gray-text: #46516b;
--light-gray: #f4f7fc;
--white: #ffffff;

--glass-bg: rgba(255, 255, 255, 0.6);
--glass-border: rgba(255, 255, 255, 0.45);
--shadow: 0 10px 34px rgba(16, 38, 94, 0.13);
--shadow-lg: 0 22px 55px rgba(16, 38, 94, 0.22);
--radius: 18px;
--transition: all 0.35s cubic-bezier(0.25, 0.8, 0.25, 1);

--grad-main: linear-gradient(135deg, #10265e 0%, #2563eb 45%, #06b6d4 100%);
--grad-btn: linear-gradient(135deg, #2563eb 0%, #4f46e5 100%);
--grad-btn-hover: linear-gradient(135deg, #1d4ed8 0%, #4338ca 100%);
}

/* ---------- Reset ---------- */
* {
margin: 0;
padding: 0;
box-sizing: border-box;
}

html {
scroll-behavior: smooth;
}

body {
font-family: 'Poppins', sans-serif;
color: var(--gray-text);
background:
radial-gradient(circle at 8% 15%, rgba(37, 99, 235, 0.07), transparent 40%),
radial-gradient(circle at 92% 25%, rgba(6, 182, 212, 0.08), transparent 45%),
linear-gradient(180deg, var(--sky-blue) 0%, var(--light-gray) 100%);
line-height: 1.65;
transition: background-color 0.5s ease;
overflow-x: hidden;
}

::selection {
background: var(--primary-blue);
color: var(--white);
}

/* Custom scrollbar for a polished feel */
::-webkit-scrollbar { width: 10px; }
::-webkit-scrollbar-track { background: var(--light-gray); }
::-webkit-scrollbar-thumb {
background: linear-gradient(180deg, var(--primary-blue), var(--indigo));
border-radius: 10px;
}

/* ---------- Utility ---------- */
.section {
padding: 90px 8% 70px;
position: relative;
}

.section-title {
text-align: center;
font-size: 2.3rem;
font-weight: 700;
background: var(--grad-main);
-webkit-background-clip: text;
background-clip: text;
color: transparent;
margin-bottom: 45px;
position: relative;
letter-spacing: 0.3px;
}

.section-title::after {
content: "";
display: block;
width: 90px;
height: 5px;
background: linear-gradient(90deg, var(--primary-blue), var(--cyan));
margin: 14px auto 0;
border-radius: 10px;
}

/* ---------- Scroll Reveal (JS toggles .revealed) ---------- */
.reveal {
opacity: 0;
transform: translateY(35px);
transition: opacity 0.7s ease, transform 0.7s ease;
}
.reveal.revealed {
opacity: 1;
transform: translateY(0);
}

/* ---------- Glassmorphism Card ---------- */
.glass-card {
background: var(--glass-bg);
border: 1px solid var(--glass-border);
border-radius: var(--radius);
backdrop-filter: blur(14px);
-webkit-backdrop-filter: blur(14px);
box-shadow: var(--shadow);
padding: 32px;
transition: var(--transition);
position: relative;
}

.glass-card::before {
content: "";
position: absolute;
inset: 0;
border-radius: var(--radius);
padding: 1px;
background: linear-gradient(135deg, rgba(37, 99, 235, 0.35), rgba(6, 182, 212, 0.25));
-webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
-webkit-mask-composite: xor;
mask-composite: exclude;
pointer-events: none;
opacity: 0;
transition: var(--transition);
}

.glass-card:hover {
transform: translateY(-8px);
box-shadow: var(--shadow-lg);
}

.glass-card:hover::before {
opacity: 1;
}

/* ---------- Buttons ---------- */
.btn {
border: none;
outline: none;
cursor: pointer;
padding: 13px 30px;
border-radius: 30px;
font-size: 0.95rem;
font-weight: 600;
letter-spacing: 0.3px;
transition: var(--transition);
margin-top: 15px;
font-family: inherit;
}

.btn-primary {
background: var(--grad-btn);
color: var(--white);
box-shadow: 0 8px 22px rgba(37, 99, 235, 0.35);
}

.btn-primary:hover {
background: var(--grad-btn-hover);
transform: translateY(-3px) scale(1.04);
box-shadow: 0 14px 30px rgba(37, 99, 235, 0.45);
}

.btn-secondary {
background: var(--white);
color: var(--primary-blue);
border: 2px solid var(--primary-blue);
}

.btn-secondary:hover {
background: var(--grad-btn);
color: var(--white);
border-color: transparent;
transform: translateY(-3px) scale(1.04);
box-shadow: 0 14px 30px rgba(37, 99, 235, 0.35);
}

/* ---------- Navigation Bar ---------- */
.navbar {
display: flex;
align-items: center;
justify-content: space-between;
padding: 16px 6%;
background: rgba(255, 255, 255, 0.85);
backdrop-filter: blur(10px);
box-shadow: 0 2px 20px rgba(16, 38, 94, 0.08);
position: sticky;
top: 0;
z-index: 1000;
}

.nav-logo {
display: flex;
align-items: center;
gap: 10px;
font-weight: 700;
font-size: 1.25rem;
background: var(--grad-main);
-webkit-background-clip: text;
background-clip: text;
color: transparent;
}

.logo-icon {
font-size: 1.6rem;
filter: drop-shadow(0 2px 4px rgba(37, 99, 235, 0.3));
}

.nav-links {
display: flex;
list-style: none;
gap: 38px;
}

.nav-links a {
text-decoration: none;
color: var(--gray-text);
font-weight: 500;
position: relative;
transition: var(--transition);
padding: 6px 2px;
}

.nav-links a::after {
content: "";
position: absolute;
left: 0;
bottom: -4px;
width: 0%;
height: 3px;
background: linear-gradient(90deg, var(--primary-blue), var(--cyan));
border-radius: 4px;
transition: var(--transition);
}

.nav-links a:hover {
color: var(--primary-blue);
}

.nav-links a:hover::after {
width: 100%;
}

.hamburger {
display: none;
flex-direction: column;
gap: 5px;
cursor: pointer;
}

.hamburger span {
width: 26px;
height: 3px;
background: var(--deep-blue);
border-radius: 5px;
transition: var(--transition);
}

.hamburger.active span:nth-child(1) { transform: translateY(8px) rotate(45deg); }
.hamburger.active span:nth-child(2) { opacity: 0; }
.hamburger.active span:nth-child(3) { transform: translateY(-8px) rotate(-45deg); }

/* ---------- Hero Section ---------- */
.hero {
min-height: 90vh;
display: flex;
align-items: center;
justify-content: center;
text-align: center;
padding: 60px 8%;
background: var(--grad-main);
background-size: 200% 200%;
animation: gradientShift 12s ease infinite;
color: var(--white);
position: relative;
overflow: hidden;
}

@keyframes gradientShift {
0% { background-position: 0% 50%; }
50% { background-position: 100% 50%; }
100% { background-position: 0% 50%; }
}

/* Floating decorative blobs for visual richness */
.hero .blob {
position: absolute;
border-radius: 50%;
filter: blur(4px);
opacity: 0.35;
animation: floatBlob 10s ease-in-out infinite;
}

.blob-1 {
width: 260px; height: 260px;
background: radial-gradient(circle, #06b6d4, transparent 70%);
top: -60px; right: 8%;
animation-delay: 0s;
}
.blob-2 {
width: 340px; height: 340px;
background: radial-gradient(circle, #818cf8, transparent 70%);
bottom: -100px; left: 4%;
animation-delay: 2s;
}
.blob-3 {
width: 180px; height: 180px;
background: radial-gradient(circle, #38bdf8, transparent 70%);
top: 30%; left: 45%;
animation-delay: 4s;
}

@keyframes floatBlob {
0%, 100% { transform: translateY(0) translateX(0) scale(1); }
50% { transform: translateY(-25px) translateX(15px) scale(1.08); }
}

.hero-content {
max-width: 820px;
animation: fadeInUp 1s ease;
position: relative;
z-index: 2;
}

.hero-badge {
display: inline-block;
background: rgba(255, 255, 255, 0.18);
border: 1px solid rgba(255, 255, 255, 0.35);
padding: 7px 18px;
border-radius: 30px;
font-size: 0.8rem;
font-weight: 600;
letter-spacing: 0.5px;
margin-bottom: 20px;
backdrop-filter: blur(6px);
}

.hero h1 {
font-size: 2.5rem;
margin-bottom: 15px;
font-weight: 700;
text-shadow: 0 4px 18px rgba(0, 0, 0, 0.15);
}

.hero-subtitle {
font-size: 1.35rem;
font-weight: 500;
background: linear-gradient(90deg, #7dd3fc, #e0e7ff);
-webkit-background-clip: text;
background-clip: text;
color: transparent;
margin-bottom: 18px;
}

.hero-desc {
font-size: 1rem;
color: #dce7fb;
margin-bottom: 25px;
}

.js-welcome-box {
background: rgba(255, 255, 255, 0.15);
border: 1px solid rgba(255, 255, 255, 0.35);
border-radius: 30px;
padding: 10px 22px;
display: inline-block;
margin-bottom: 20px;
font-weight: 600;
min-height: 20px;
box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
}

@keyframes fadeInUp {
from { opacity: 0; transform: translateY(30px); }
to { opacity: 1; transform: translateY(0); }
}

/* ---------- Department Section ---------- */
.department-card p {
font-size: 1rem;
color: var(--gray-text);
margin-bottom: 30px;
}

.dept-highlights {
display: grid;
grid-template-columns: repeat(4, 1fr);
gap: 22px;
}

.highlight-box {
text-align: center;
background: var(--white);
border-radius: var(--radius);
padding: 26px 12px;
box-shadow: 0 6px 18px rgba(16, 38, 94, 0.07);
transition: var(--transition);
}

.highlight-box:hover {
transform: translateY(-8px) scale(1.03);
box-shadow: 0 16px 32px rgba(16, 38, 94, 0.18);
}

.highlight-box .icon-badge {
width: 60px;
height: 60px;
margin: 0 auto 14px;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
font-size: 1.6rem;
color: var(--white);
}

.highlight-box:nth-child(1) .icon-badge { background: linear-gradient(135deg, #2563eb, #60a5fa); }
.highlight-box:nth-child(2) .icon-badge { background: linear-gradient(135deg, #4f46e5, #a78bfa); }
.highlight-box:nth-child(3) .icon-badge { background: linear-gradient(135deg, #06b6d4, #22d3ee); }
.highlight-box:nth-child(4) .icon-badge { background: linear-gradient(135deg, #0891b2, #34d399); }

.highlight-box p {
font-weight: 600;
color: var(--deep-blue);
}

/* ---------- Student Information Section ---------- */
.student-card {
max-width: 820px;
margin: 0 auto;
}

.student-card-top {
display: flex;
align-items: center;
gap: 25px;
margin-bottom: 30px;
flex-wrap: wrap;
}

.profile-pic {
width: 115px;
height: 115px;
border-radius: 50%;
background: var(--white);
border: 3px dashed var(--primary-blue);
display: flex;
align-items: center;
justify-content: center;
text-align: center;
font-size: 0.75rem;
font-weight: 600;
color: var(--primary-blue);
padding: 10px;
flex-shrink: 0;
box-shadow: 0 8px 22px rgba(37, 99, 235, 0.18);
}

.student-name-block h3 {
font-size: 1.6rem;
background: var(--grad-main);
-webkit-background-clip: text;
background-clip: text;
color: transparent;
}

.student-role {
color: var(--primary-blue);
font-weight: 500;
margin-top: 4px;
}

.student-details-grid {
display: grid;
grid-template-columns: repeat(2, 1fr);
gap: 18px;
margin-bottom: 30px;
}

.detail-item {
background: var(--white);
border-radius: 12px;
padding: 13px 18px;
box-shadow: 0 4px 14px rgba(16, 38, 94, 0.06);
border-left: 4px solid var(--primary-blue);
transition: var(--transition);
}

.detail-item:hover {
transform: translateX(4px);
box-shadow: 0 8px 20px rgba(16, 38, 94, 0.14);
border-left-color: var(--cyan);
}

.detail-label {
display: block;
font-size: 0.75rem;
text-transform: uppercase;
letter-spacing: 0.6px;
color: var(--indigo);
font-weight: 600;
margin-bottom: 4px;
}

.detail-value {
font-size: 0.95rem;
color: var(--gray-text);
font-weight: 500;
word-break: break-word;
}

.skills-hobbies-wrap {
display: grid;
grid-template-columns: repeat(2, 1fr);
gap: 22px;
margin-bottom: 28px;
}

.skills-box h4,
.hobbies-box h4 {
color: var(--deep-blue);
margin-bottom: 12px;
font-size: 1.05rem;
}

.tag-list {
display: flex;
flex-wrap: wrap;
gap: 9px;
}

.tag {
color: var(--white);
padding: 7px 16px;
border-radius: 20px;
font-size: 0.8rem;
font-weight: 600;
transition: var(--transition);
box-shadow: 0 4px 12px rgba(16, 38, 94, 0.15);
}

.tag:hover {
transform: translateY(-3px) scale(1.07);
}

/* Distinct color for every skill chip */
.tag:nth-child(6n+1) { background: linear-gradient(135deg, #2563eb, #3b82f6); }
.tag:nth-child(6n+2) { background: linear-gradient(135deg, #4f46e5, #6366f1); }
.tag:nth-child(6n+3) { background: linear-gradient(135deg, #06b6d4, #22d3ee); }
.tag:nth-child(6n+4) { background: linear-gradient(135deg, #7c3aed, #a78bfa); }
.tag:nth-child(6n+5) { background: linear-gradient(135deg, #0891b2, #14b8a6); }
.tag:nth-child(6n+6) { background: linear-gradient(135deg, #1d4ed8, #4f46e5); }

/* Hobby chips use a warmer complementary accent set */
.tag-alt:nth-child(4n+1) { background: linear-gradient(135deg, #f59e0b, #fbbf24); }
.tag-alt:nth-child(4n+2) { background: linear-gradient(135deg, #ec4899, #f472b6); }
.tag-alt:nth-child(4n+3) { background: linear-gradient(135deg, #10b981, #34d399); }
.tag-alt:nth-child(4n+4) { background: linear-gradient(135deg, #6366f1, #818cf8); }

.js-output-box {
margin-top: 15px;
background: var(--white);
border-left: 4px solid var(--cyan);
border-radius: 10px;
padding: 14px 18px;
font-size: 0.9rem;
display: none;
white-space: pre-line;
box-shadow: 0 6px 18px rgba(16, 38, 94, 0.08);
}

/* ---------- JavaScript Practical Section ---------- */
.js-features-grid {
display: grid;
grid-template-columns: repeat(4, 1fr);
gap: 26px;
}

.feature-card {
text-align: center;
}

.feature-card .icon-badge {
width: 56px;
height: 56px;
margin: 0 auto 14px;
border-radius: 16px;
display: flex;
align-items: center;
justify-content: center;
font-size: 1.5rem;
color: var(--white);
}

.feature-card:nth-child(1) .icon-badge { background: linear-gradient(135deg, #2563eb, #60a5fa); }
.feature-card:nth-child(2) .icon-badge { background: linear-gradient(135deg, #f59e0b, #fbbf24); }
.feature-card:nth-child(3) .icon-badge { background: linear-gradient(135deg, #06b6d4, #22d3ee); }
.feature-card:nth-child(4) .icon-badge { background: linear-gradient(135deg, #ec4899, #f472b6); }

.feature-card h3 {
color: var(--deep-blue);
margin-bottom: 12px;
font-size: 1.05rem;
}

.feature-card p {
font-size: 0.9rem;
margin-bottom: 10px;
}

.clock-text {
font-size: 1.9rem;
font-weight: 700;
background: var(--grad-main);
-webkit-background-clip: text;
background-clip: text;
color: transparent;
letter-spacing: 1px;
}

.date-text {
font-size: 0.85rem;
color: var(--gray-text);
}

.greeting-text {
font-size: 1.25rem;
font-weight: 700;
color: var(--primary-blue);
}

/* ---------- Contact Section ---------- */
.contact-card {
max-width: 620px;
margin: 0 auto;
text-align: center;
}

.contact-card p {
margin-bottom: 12px;
}

.contact-card a {
color: var(--primary-blue);
text-decoration: none;
font-weight: 600;
}

.contact-card a:hover {
text-decoration: underline;
}

/* ---------- Footer ---------- */
.footer {
background: var(--grad-main);
color: var(--white);
text-align: center;
padding: 30px 8%;
margin-top: 30px;
}

.footer-sub {
font-size: 0.8rem;
color: #cfe0fb;
margin-top: 6px;
}

/* =========================================================
RESPONSIVE DESIGN
========================================================= */
@media (max-width: 992px) {
.dept-highlights { grid-template-columns: repeat(2, 1fr); }
.js-features-grid { grid-template-columns: repeat(2, 1fr); }
.student-details-grid { grid-template-columns: 1fr; }
.skills-hobbies-wrap { grid-template-columns: 1fr; }
}

@media (max-width: 768px) {
.nav-links {
position: absolute;
top: 68px;
left: 0;
width: 100%;
background: var(--white);
flex-direction: column;
align-items: center;
gap: 0;
max-height: 0;
overflow: hidden;
transition: max-height 0.4s ease;
}
.nav-links.active { max-height: 300px; }
.nav-links li { width: 100%; text-align: center; padding: 15px 0; border-top: 1px solid #eee; }
.hamburger { display: flex; }
.hero h1 { font-size: 1.9rem; }
.hero-subtitle { font-size: 1.1rem; }
.dept-highlights { grid-template-columns: 1fr 1fr; }
.js-features-grid { grid-template-columns: 1fr; }
.student-card-top { flex-direction: column; text-align: center; }
}

@media (max-width: 480px) {
.section { padding: 60px 5% 50px; }
.hero h1 { font-size: 1.6rem; }
.dept-highlights { grid-template-columns: 1fr; }
}
