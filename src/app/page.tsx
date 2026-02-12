export default function Home() {
  return (
    <div dangerouslySetInnerHTML={{ __html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Alex Chen - Professional Barista</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Georgia', serif;
            line-height: 1.6;
            color: #2c1810;
            background-color: #faf8f5;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }
        
        header {
            background: linear-gradient(135deg, #8b4513, #5d2e0a);
            color: white;
            padding: 60px 0;
            text-align: center;
        }
        
        header h1 {
            font-size: 3em;
            margin-bottom: 10px;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        }
        
        header p {
            font-size: 1.2em;
            opacity: 0.9;
        }
        
        nav {
            background: #2c1810;
            padding: 15px 0;
            position: sticky;
            top: 0;
            z-index: 100;
        }
        
        nav ul {
            list-style: none;
            display: flex;
            justify-content: center;
            gap: 30px;
        }
        
        nav a {
            color: white;
            text-decoration: none;
            font-weight: bold;
            transition: color 0.3s;
        }
        
        nav a:hover {
            color: #d4a574;
        }
        
        section {
            padding: 60px 0;
        }
        
        .section-title {
            text-align: center;
            font-size: 2.5em;
            margin-bottom: 40px;
            color: #8b4513;
            position: relative;
        }
        
        .section-title::after {
            content: '';
            display: block;
            width: 60px;
            height: 3px;
            background: #d4a574;
            margin: 20px auto;
        }
        
        .about-content {
            display: grid;
            grid-template-columns: 1fr 2fr;
            gap: 40px;
            align-items: center;
            margin-bottom: 40px;
        }
        
        .profile-img {
            width: 100%;
            max-width: 300px;
            height: 300px;
            border-radius: 50%;
            background: linear-gradient(45deg, #8b4513, #d4a574);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 4em;
            color: white;
            margin: 0 auto;
        }
        
        .skills-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 30px;
            margin-top: 40px;
        }
        
        .skill-card {
            background: white;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
            text-align: center;
            transition: transform 0.3s;
        }
        
        .skill-card:hover {
            transform: translateY(-5px);
        }
        
        .skill-icon {
            width: 60px;
            height: 60px;
            background: #8b4513;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 20px;
            font-size: 1.5em;
            color: white;
        }
        
        .portfolio-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 30px;
        }
        
        .portfolio-item {
            background: white;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
            transition: transform 0.3s;
        }
        
        .portfolio-item:hover {
            transform: translateY(-5px);
        }
        
        .portfolio-img {
            width: 100%;
            height: 200px;
            background: linear-gradient(45deg, #d4a574, #8b4513);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 3em;
            color: white;
        }
        
        .portfolio-content {
            padding: 20px;
        }
        
        .experience-timeline {
            position: relative;
            max-width: 800px;
            margin: 0 auto;
        }
        
        .timeline-item {
            background: white;
            padding: 30px;
            margin: 20px 0;
            border-radius: 10px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
            border-left: 4px solid #8b4513;
        }
        
        .timeline-date {
            color: #8b4513;
            font-weight: bold;
            font-size: 0.9em;
        }
        
        .timeline-title {
            font-size: 1.3em;
            margin: 10px 0;
            color: #2c1810;
        }
        
        .contact-form {
            max-width: 600px;
            margin: 0 auto;
            background: white;
            padding: 40px;
            border-radius: 10px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }
        
        .form-group {
            margin-bottom: 20px;
        }
        
        .form-group label {
            display: block;
            margin-bottom: 5px;
            color: #2c1810;
            font-weight: bold;
        }
        
        .form-group input,
        .form-group textarea {
            width: 100%;
            padding: 12px;
            border: 2px solid #e0e0e0;
            border-radius: 5px;
            font-size: 16px;
            transition: border-color 0.3s;
        }
        
        .form-group input:focus,
        .form-group textarea:focus {
            outline: none;
            border-color: #8b4513;
        }
        
        .btn {
            background: #8b4513;
            color: white;
            padding: 15px 30px;
            border: none;
            border-radius: 5px;
            font-size: 16px;
            cursor: pointer;
            transition: background 0.3s;
        }
        
        .btn:hover {
            background: #5d2e0a;
        }
        
        footer {
            background: #2c1810;
            color: white;
            text-align: center;
            padding: 40px 0;
        }
        
        @media (max-width: 768px) {
            .about-content {
                grid-template-columns: 1fr;
                text-align: center;
            }
            
            nav ul {
                flex-direction: column;
                gap: 15px;
            }
            
            header h1 {
                font-size: 2em;
            }
        }
    </style>
</head>
<body>
    <header>
        <div class="container">
            <h1>Alex Chen</h1>
            <p>Professional Barista & Coffee Artist</p>
        </div>
    </header>

    <nav>
        <div class="container">
            <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
    </nav>

    <section id="about">
        <div class="container">
            <h2 class="section-title">About Me</h2>
            <div class="about-content">
                <div class="profile-img">☕</div>
                <div>
                    <p>Welcome to my coffee world! I'm Alex, a passionate barista with over 5 years of experience crafting exceptional coffee experiences. My journey began with a simple love for coffee and has evolved into mastering the art and science behind every perfect cup.</p>
                    <br>
                    <p>From intricate latte art to competing in national barista championships, I bring creativity, precision, and genuine passion to every aspect of coffee preparation. I believe that great coffee is more than just a beverage—it's a moment of connection, artistry, and pure enjoyment.</p>
                </div>
            </div>
        </div>
    </section>

    <section id="skills">
        <div class="container">
            <h2 class="section-title">My Expertise</h2>
            <div class="skills-grid">
                <div class="skill-card">
                    <div class="skill-icon">🎨</div>
                    <h3>Latte Art</h3>
                    <p>Master of rosetta, heart, and swan patterns. Specialized in free-pour techniques and creative custom designs that turn every cup into a work of art.</p>
                </div>
                <div class="skill-card">
                    <div class="skill-icon">⚖️</div>
                    <h3>Specialty Coffee</h3>
                    <p>Expert in single-origin beans, pour-over methods, and flavor profiling. Certified in cupping and quality assessment with deep knowledge of coffee origins.</p>
                </div>
                <div class="skill-card">
                    <div class="skill-icon">🏆</div>
                    <h3>Competition Experience</h3>
                    <p>Regional championship finalist with experience in timed competitions. Skilled in signature drink creation and presentation under pressure.</p>
                </div>
                <div class="skill-card">
                    <div class="skill-icon">🔬</div>
                    <h3>Coffee Science</h3>
                    <p>Understanding of extraction theory, grind optimization, water quality, and temperature control. Passionate about the technical side of brewing.</p>
                </div>
            </div>
        </div>
    </section>

    <section id="portfolio">
        <div class="container">
            <h2 class="section-title">My Work</h2>
            <div class="portfolio-grid">
                <div class="portfolio-item">
                    <div class="portfolio-img">🌹</div>
                    <div class="portfolio-content">
                        <h3>Award-Winning Latte Art</h3>
                        <p>First place winner at the 2023 Regional Latte Art Championship. Featured rosetta pattern with over 7 layers of definition.</p>
                    </div>
                </div>
                <div class="portfolio-item">
                    <div class="portfolio-img">🏅</div>
                    <div class="portfolio-content">
                        <h3>Barista Championship</h3>
                        <p>Finalist at National Barista Championships 2023. Signature drink: "Golden Hour" - Ethiopian single origin with honey and cardamom notes.</p>
                    </div>
                </div>
                <div class="portfolio-item">
                    <div class="portfolio-img">📚</div>
                    <div class="portfolio-content">
                        <h3>Coffee Education</h3>
                        <p>Led workshops on pour-over techniques and latte art for over 200 aspiring baristas. Regular contributor to Coffee Professional Magazine.</p>
                    </div>
                </div>
                <div class="portfolio-item">
                    <div class="portfolio-img">🎯</div>
                    <div class="portfolio-content">
                        <h3>Signature Drinks</h3>
                        <p>Created seasonal menu featuring 12 original recipes. Notable: "Autumn Spice Cortado" increased café sales by 23% during fall season.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="experience">
        <div class="container">
            <h2 class="section-title">Experience</h2>
            <div class="experience-timeline">
                <div class="timeline-item">
                    <div class="timeline-date">2023 - Present</div>
                    <div class="timeline-title">Head Barista - Artisan Coffee Co.</div>
                    <p>Lead a team of 8 baristas, developed training programs, and increased customer satisfaction scores by 35%. Responsible for menu development and quality control.</p>
                </div>
                <div class="timeline-item">
                    <div class="timeline-date">2021 - 2023</div>
                    <div class="timeline-title">Senior Barista - The Daily Grind</div>
                    <p>Specialized in specialty coffee preparation and latte art. Trained new staff and maintained consistent quality standards across all beverages.</p>
                </div>
                <div class="timeline-item">
                    <div class="timeline-date">2019 - 2021</div>
                    <div class="timeline-title">Barista - Hometown Coffee</div>
                    <p>Developed foundational skills in espresso preparation and customer service. Consistently recognized for speed and quality of service.</p>
                </div>
                <div class="timeline-item">
                    <div class="timeline-date">2023</div>
                    <div class="timeline-title">SCA Certified</div>
                    <p>Specialty Coffee Association certification in Barista Skills (Intermediate) and Brewing (Foundation). Ongoing education in coffee science and quality assessment.</p>
                </div>
            </div>
        </div>
    </section>

    <section id="contact">
        <div class="container">
            <h2 class="section-title">Let's Connect</h2>
            <form class="contact-form">
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" id="name" name="name" required>
                </div>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" required>
                </div>
                <div class="form-group">
                    <label for="subject">Subject</label>
                    <input type="text" id="subject" name="subject" required>
                </div>
                <div class="form-group">
                    <label for="message">Message</label>
                    <textarea id="message" name="message" rows="6" required></textarea>
                </div>
                <button type="submit" class="btn">Send Message</button>
            </form>
        </div>
    </section>

    <footer>
        <div class="container">
            <p>&copy; 2024 Alex Chen. Crafting perfect coffee experiences, one cup at a time.</p>
        </div>
    </footer>

    <script>
        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Contact form submission
        document.querySelector('.contact-form').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! I\\'ll get back to you soon.');
            this.reset();
        });
    </script>
</body>
</html>` }} />
  );
}