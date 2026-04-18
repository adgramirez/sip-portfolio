"use client";
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */

import React, { useEffect } from "react";
import Particles from "@/components/particles";
import { Navigation } from "@/components/nav";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
    // Add the 'no-scroll' class to disable scrolling during intro animation
    document.body.classList.add("no-scroll");

    // After 3 seconds, remove the 'no-scroll' class to enable scrolling
    const timer = setTimeout(() => {
      document.body.classList.remove("no-scroll");
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-start w-screen min-h-screen overflow-x-hidden overflow-y-auto bg-gradient-to-tl from-black via-zinc-600/20 to-black pb-32">
      <Navigation />

      {/* Hero / Intro Section */}
      <section id="home" className="relative flex flex-col items-center justify-center w-screen min-h-screen">
        <div className="text-center animate-fade-in">
          <h2 className="mt-4 text-sm sm:text-base md:text-lg text-zinc-500 animate-fade-in">
            Ateneo de Davao University
          </h2>
        </div>

        <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0 mt-0 p-0" />
        
        <Particles className="absolute inset-0 -z-10 animate-fade-in" quantity={100} />

        <h1 className="px-4 z-10 font-bold text-5xl sm:text-7xl md:text-9xl text-transparent bg-white bg-clip-text cursor-default text-edge-outline animate-title font-display text-center whitespace-nowrap">
          SIP PORTFOLIO
        </h1>

        <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0 mt-0 p-0" />

        <div className="mb-16 text-center animate-fade-in overflow-hidden sm:overflow-visible">
          <h2 className="mx-20 mt-4 text-sm sm:text-base md:text-lg text-zinc-500 animate-fade-in">
            Aaron Daniel Ramirez • BS Computer Science
          </h2>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="w-full flex justify-center mb-16 pt-20">
        <div className="relative bg-gradient-to-br from-zinc-800 via-zinc-700 to-zinc-900 text-white px-8 py-10 md:px-14 md:py-16 rounded-3xl shadow-2xl max-w-5xl w-[90%] md:w-[80%] border border-zinc-700/50">
          <h2 className="text-3xl md:text-5xl font-bold mb-10 tracking-tight text-center md:text-left">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-blue-400 to-indigo-500">About Me</span>
          </h2>
          
          <div className="flex flex-col md:flex-row gap-10 items-center md:items-start">
            
            {/* Portrait Image Container */}
            <div className="w-48 h-48 md:w-64 md:h-80 flex-shrink-0">
              <img 
                src="/assets/AboutMe1.jpg" 
                alt="Aaron Daniel Ramirez Portrait" 
                className="w-full h-full object-cover rounded-2xl shadow-xl border-2 border-zinc-600/50 hover:border-indigo-400/50 transition-colors duration-300"
              />
            </div>

            {/* About Text */}
            <div className="space-y-6 text-zinc-300 text-lg leading-relaxed text-justify flex-1">
              <p>
                Hello! I am <strong className="text-zinc-100 font-display">Aaron Daniel Ramirez</strong>, a passionate 4th-year BS Computer Science student at the Ateneo de Davao University. Originally from the quiet hometown of Bislig City, moving to Davao pushed me out of my comfort zone and shaped me into the independent, resilient developer I am today.
              </p>
              <p>
                My journey into tech started simply: I loved video games and wanted to know what happened behind the screen. Today, that curiosity has evolved into a deep appreciation for software engineering.
              </p>
              <p>
                Guided by the Atenean values of <span className="italic text-indigo-400">Magis</span> and <span className="italic text-indigo-400">Cura Personalis</span>, I believe in creating technology that genuinely serves others, whether that's building systems for clients or volunteering to distribute school supplies to far-flung communities. 
              </p>
            </div>
            
          </div>
        </div>
      </section>

      {/* Journey Map Section */}
      <section id="journey" className="w-full flex justify-center mb-16 pt-20">
        <div className="relative bg-gradient-to-br from-zinc-800/50 via-zinc-700/20 to-zinc-900/50 text-white px-6 py-10 md:px-14 md:py-16 rounded-3xl shadow-2xl max-w-5xl w-[90%] md:w-[80%] border border-zinc-700/50 backdrop-blur-sm">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 tracking-tight text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-400">Journey Map</span>
          </h2>
          
          {/* Timeline Container */}
          <div className="relative border-l-2 border-zinc-700/50 ml-4 md:ml-8 pl-8 md:pl-12 space-y-16">
            
            {/* Year 1 Item */}
            <div className="relative group">
              {/* Timeline Node / Dot */}
              <div className="absolute -left-[41px] md:-left-[57px] top-1.5 w-5 h-5 rounded-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.6)] group-hover:scale-125 group-hover:bg-cyan-400 transition-all duration-300" />
              
              <div className="flex flex-col gap-6">
                <div>
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-white">
                    Year 1: Independence & The First Cannonball
                    <span className="block text-lg font-normal text-cyan-400 mt-1">2022 - 2023</span>
                  </h3>
                </div>
                
                <div className="space-y-4 text-zinc-300 text-lg leading-relaxed text-justify">
                  <p>
                    <strong className="text-zinc-100">The Shift to Davao City.</strong> Moving from my hometown of Bislig City to Davao was my first real test of independence. I wanted to grow into an adult in this new chapter, which meant figuring out how to budget my allowance, cook my own meals, and overcome challenges on my own. I initially braced myself for a culture shock, expecting Ateneo to be filled with intimidating, "high-class" students. To my relief, they were just like me: normal and relatable. Still, my social circle was tiny. Aside from being elected Class President, I mostly kept to myself, relying heavily on two high school friends who happened to be in my block.
                  </p>
                  <p>
                    <strong className="text-zinc-100">Why Computer Science?</strong> My path here started simply: I loved video games and wanted to know what happened behind the screens of apps and websites. I briefly considered medicine, but realized rote memorization wasn't my forte. I liked logic, and I didn't mind math. Programming felt right. I quickly discovered my core drive as a developer: the thrill of the puzzle. Every bug made my mind go crazy, but fixing them felt incredibly rewarding. When coding pushed me to the limit, gaming with my small circle of friends became my ultimate reset button.
                  </p>
                  <p>
                    <strong className="text-zinc-100">The Cannonball Moment & Recovery.</strong> In high school, I never got a grade below 85. So, when I saw a 'D' (just passing) in Philosophy after my first semester, it felt like a disaster. I confessed to my mom, expecting disappointment. Instead, she completely disarmed me, telling me it was fine and that honor rolls were just "extras." This realization lifted a massive weight off my shoulders. Paradoxically, once I stopped over-pressuring myself, I thrived—I secured an 'A' in almost every other subject that year. I quickly got over the Philosophy grade, realizing that one stumble didn't define my capabilities.
                  </p>
                  <p>
                    <strong className="text-zinc-100">Arrupe Social Formation.</strong> My first year wasn't just about code and philosophy; it was also my introduction to the Ateneo mission. Through my <span className="text-cyan-400 font-medium">Arrupe Social Formation 1</span> class, I had the opportunity to visit <span className="font-semibold text-zinc-100">Padre Pio's Home for Children</span>. This experience was eye-opening. Seeing the resilience of the children and the dedication of their caregivers taught me more about genuine giving and empathy than any textbook could.
                  </p>
                </div>

                {/* Horizontal Image Gallery for Year 1 */}
                <div className="flex w-full gap-4 overflow-x-auto pb-4 pt-2 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                  {[
                    "/assets/JourneyMapPics/Year1/year1a.jpg",
                    "/assets/JourneyMapPics/Year1/year1b.jpg",
                    "/assets/JourneyMapPics/Year1/year1c.png",
                    "/assets/JourneyMapPics/Year1/year1d.jpg",
                    "/assets/JourneyMapPics/Year1/year1e.jpg",
                    "/assets/JourneyMapPics/Year1/year1f.jpg",
                    "/assets/JourneyMapPics/Year1/year1g.jpg",
                    "/assets/JourneyMapPics/Year1/year1h.jpg",
                    "/assets/JourneyMapPics/Year1/year1i.jpg",
                    "/assets/JourneyMapPics/Year1/year1j.jpg",
                  ].map((src, index) => (
                    <div key={index} className="relative flex-none w-64 sm:w-72 h-48 rounded-xl overflow-hidden snap-center border border-zinc-700/50 bg-zinc-800">
                      <img
                        src={src}
                        alt={`Year 1 Memory ${String.fromCharCode(97 + index)}`}
                        className="object-cover w-full h-full hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>
                <p className="text-zinc-500 text-sm italic mt-[-10px] ml-2 animate-pulse">
                  Swipe horizontally to see more photos →
                </p>
              </div>
            </div>

            {/* Year 2 Item */}
            <div className="relative group">
              {/* Timeline Node / Dot */}
              <div className="absolute -left-[41px] md:-left-[57px] top-1.5 w-5 h-5 rounded-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.6)] group-hover:scale-125 group-hover:bg-cyan-400 transition-all duration-300" />
              
              <div className="flex flex-col gap-6">
                <div>
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-white">
                    Year 2: The Engineer's Discipline
                    <span className="block text-lg font-normal text-cyan-400 mt-1">2023 - 2024</span>
                  </h3>
                </div>
                
                <div className="space-y-4 text-zinc-300 text-lg leading-relaxed text-justify">
                  <p>
                    <strong className="text-zinc-100">Leveling Up.</strong> This year marked a major shift from "coding as a hobby" to "coding as a discipline." I moved beyond simple calculators and started grasping the real-world complexities of Java OOP, Data Structures, and Software Engineering. This was my introduction to the MERN Stack and version control with Git. Understanding what clients actually need versus just writing lines of code changed how I approached every project.
                  </p>
                  <p>
                    <strong className="text-zinc-100">The "Almost" 4.0.</strong> Despite my focus, Differential Calculus and Basic Electronics became my hurdles. I spent the most time on these, and I truly understood the concepts, but my habit of miscalculating numbers kept me just shy of a flat 4.0 QPI. Thanks to my Year 1 "cannonball" lesson, I didn't let the frustration break me. I learned to accept that mastery is a process and that "I can always try again next sem."
                  </p>
                  <p>
                    <strong className="text-zinc-100">Full Face-to-Face & Independence.</strong> Shifting from modular learning to full face-to-face classes finally allowed me to break out of my shell. I started interacting more with my blockmates, and our gaming resets expanded into a larger group. In the city, Davao finally felt familiar. I stopped getting lost on jeepney routes and spent my free time practicing new recipes—slowly mastering the "adulting" side of college life.
                  </p>
                  <p>
                    <strong className="text-zinc-100">NSTP & Community.</strong> My <span className="text-cyan-400 font-medium">NSTP 2</span> experience brought me back to the community. We helped build a comfort room for a small chapel in our assigned barangay, organized activities for the children, and donated tents for local events. It was a hands-on reminder that our efforts, whether in construction or in code, are meant to build something that lasts for others.
                  </p>
                </div>

                {/* Horizontal Image Gallery for Year 2 */}
                <div className="flex w-full gap-4 overflow-x-auto pb-4 pt-2 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                  {[
                    "/assets/JourneyMapPics/Year2/year2a.jpg",
                    "/assets/JourneyMapPics/Year2/year2b.jpg",
                    "/assets/JourneyMapPics/Year2/year2c.jpg",
                    "/assets/JourneyMapPics/Year2/year2d.jpg",
                    "/assets/JourneyMapPics/Year2/year2e.jpg",
                    "/assets/JourneyMapPics/Year2/year2f.jpg",
                    "/assets/JourneyMapPics/Year2/year2g.jpg",
                    "/assets/JourneyMapPics/Year2/year2h.jpg",
                    "/assets/JourneyMapPics/Year2/year2i.jpg",
                  ].map((src, index) => (
                    <div key={index} className="relative flex-none w-64 sm:w-72 h-48 rounded-xl overflow-hidden snap-center border border-zinc-700/50 bg-zinc-800">
                      <img
                        src={src}
                        alt={`Year 2 Memory ${index + 1}`}
                        className="object-cover w-full h-full hover:scale-110 transition-transform duration-500"
                        // Fallback in case some images are missing
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none';
                        }}
                      />
                    </div>
                  ))}
                </div>
                <p className="text-zinc-500 text-sm italic mt-[-10px] ml-2 animate-pulse">
                  Swipe horizontally to see more photos →
                </p>
              </div>
            </div>

            {/* Year 3 Item */}
            <div className="relative group">
              {/* Timeline Node / Dot */}
              <div className="absolute -left-[41px] md:-left-[57px] top-1.5 w-5 h-5 rounded-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.6)] group-hover:scale-125 group-hover:bg-cyan-400 transition-all duration-300" />
              
              <div className="flex flex-col gap-6">
                <div>
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-white">
                    Year 3: Community & Collaboration
                    <span className="block text-lg font-normal text-cyan-400 mt-1">2024 - 2025</span>
                  </h3>
                </div>
                
                <div className="space-y-4 text-zinc-300 text-lg leading-relaxed text-justify">
                  <p>
                    <strong className="text-zinc-100">The Scholars' Society.</strong> This was the year I finally joined the <span className="text-cyan-400 font-medium">Ateneo de Davao Scholars' Society</span>. Serving in the logistics team for event preparations allowed me to meet a diverse group of people outside my block. One of the most rewarding experiences was volunteering for <span className="italic">Project Envelope</span>. Visiting far-flung communities to donate school materials reminded me why education is such a powerful gift—and how rewarding it is to use our time to support the next generation.
                  </p>
                  <p>
                    <strong className="text-zinc-100">Building for Real Clients.</strong> In Software Engineering 2, my team and I finally brought our SE 1 designs to life. We built a fully functional web application for our chosen client. This wasn't just about the "hard skills" of coding; it was a masterclass in soft skills—negotiating with teammates, managing timelines, and understanding user feedback. It was the first time I felt the weight and the pride of building something that actually served a purpose.
                  </p>
                  <p>
                    <strong className="text-zinc-100">Balance & Badminton.</strong> To stay sane during the heavy academic load, I started playing badminton with my blockmates almost every week. These sessions became my way of letting loose and de-stressing after long hours in the lab. Even though I still fell short of that elusive flat 4.0 QPI by just one subject each semester, I didn't feel the sting of disappointment as much. I’ve learned to value the balance between my studies, my health, and my community.
                  </p>
                </div>

                {/* Horizontal Image Gallery for Year 3 */}
                <div className="flex w-full gap-4 overflow-x-auto pb-4 pt-2 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                  {[
                    "/assets/JourneyMapPics/Year3/year3a.jpg",
                    "/assets/JourneyMapPics/Year3/year3b.jpg",
                    "/assets/JourneyMapPics/Year3/year3c.jpg",
                    "/assets/JourneyMapPics/Year3/year3d.jpg",
                    "/assets/JourneyMapPics/Year3/year3e.jpg",
                    "/assets/JourneyMapPics/Year3/year3f.jpg",
                    "/assets/JourneyMapPics/Year3/year3g.jpg",
                    "/assets/JourneyMapPics/Year3/year3h.jpg",
                    "/assets/JourneyMapPics/Year3/year3i.jpg",
                  ].map((src, index) => (
                    <div key={index} className="relative flex-none w-64 sm:w-72 h-48 rounded-xl overflow-hidden snap-center border border-zinc-700/50 bg-zinc-800">
                      <img
                        src={src}
                        alt={`Year 3 Memory ${index + 1}`}
                        className="object-cover w-full h-full hover:scale-110 transition-transform duration-500"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none';
                        }}
                      />
                    </div>
                  ))}
                </div>
                <p className="text-zinc-500 text-sm italic mt-[-10px] ml-2 animate-pulse">
                  Swipe horizontally to see more photos →
                </p>
              </div>
            </div>

            {/* Year 4 Item */}
            <div className="relative group">
              {/* Timeline Node / Dot */}
              <div className="absolute -left-[41px] md:-left-[57px] top-1.5 w-5 h-5 rounded-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.6)] group-hover:scale-125 group-hover:bg-cyan-400 transition-all duration-300" />
              
              <div className="flex flex-col gap-6">
                <div>
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-white">
                    Year 4: The Final Stretch & The Second Cannonball
                    <span className="block text-lg font-normal text-cyan-400 mt-1">2025 - 2026</span>
                  </h3>
                </div>
                
                <div className="space-y-4 text-zinc-300 text-lg leading-relaxed text-justify">
                  <p>
                    <strong className="text-zinc-100">The ARISEn Internship.</strong> My technical journey culminated in an internship at the <span className="text-cyan-400 font-medium">Ateneo de Davao Research in Information System and Software Engineering (ARISEn) Laboratory</span>. Here, I helped build a portal for the Ateneo Internationalization for Mindanao (AIM) Office to manage their Global Citizenship Fund. Creating a centralized system that allowed students to easily apply online—and gave the AIM Office streamlined access to manage those applications—was incredibly fulfilling. It was proof that my coding skills could now build robust, real-world solutions.
                  </p>
                  <p>
                    <strong className="text-zinc-100">The Second Cannonball.</strong> If freshman year taught me not to artificially pressure myself, senior year delivered a different, much harder lesson: sometimes, maximum effort doesn't yield the perfect outcome. I spent countless sleepless nights pouring my blood, sweat, and tears into my Capstone Thesis. When the final results came out, they fell short of what I had fiercely worked for. Unlike my first "cannonball," this one hurt deeply because I knew exactly how much of myself I had put into the work.
                  </p>
                  <p>
                    <strong className="text-zinc-100">Acceptance & The Final Lap.</strong> It was a bitter pill to swallow, but I eventually realized I had a choice. I could spend my final months in college agonizing over a result I couldn't change, or I could suck it up and actually enjoy my last semester as an Atenean. I chose the latter. I let go of the disappointment and focused on making the most of my remaining time as a senior, surrounded by the friends and the community that had shaped me.
                  </p>
                  <p>
                    <strong className="text-zinc-100">Looking Back.</strong> If the high-school version of me saw my resume today, he honestly might not be overly amazed—because this level of performance is exactly what he expected (maybe more). But if he knew the sheer difficulty of the sleepless nights, the bugs that made my mind go crazy, and the emotional hurdles I had to jump over to get here, I know he would be deeply satisfied and proud of the man I've become.
                  </p>
                  <p>
                    <strong className="text-zinc-100">Counting My Blessings.</strong> When I step back from the grades and the late-night stress, I realize how incredibly blessed I truly am. I've suffered through so many hardships, rigorous deadlines, and moments of self-doubt over these past four years, but the blessings have always outweighed the burdens. Having a supportive family, a loyal circle of friends who kept me grounded, people I care about, and the sheer opportunity to earn a degree from this university are things I will never take for granted. The hardships built my resilience, but the blessings gave me the strength to endure them.
                  </p>
                </div>

                {/* Horizontal Image Gallery for Year 4 */}
                <div className="flex w-full gap-4 overflow-x-auto pb-4 pt-2 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                  {[
                    "/assets/JourneyMapPics/Year4/year4a.jpeg",
                    "/assets/JourneyMapPics/Year4/year4b.jpeg",
                    "/assets/JourneyMapPics/Year4/year4c.jpg",
                    "/assets/JourneyMapPics/Year4/year4d.jpg",
                    "/assets/JourneyMapPics/Year4/year4e.jpg",
                    "/assets/JourneyMapPics/Year4/year4f.jpg",
                    "/assets/JourneyMapPics/Year4/year4g.jpg",
                    "/assets/JourneyMapPics/Year4/year4h.jpg",
                    "/assets/JourneyMapPics/Year4/year4i.jpg",
                    "/assets/JourneyMapPics/Year4/year4j.jpg"
                  ].map((src, index) => (
                    <div key={index} className="relative flex-none w-64 sm:w-72 h-48 rounded-xl overflow-hidden snap-center border border-zinc-700/50 bg-zinc-800">
                      <img
                        src={src}
                        alt={`Year 4 Memory ${index + 1}`}
                        className="object-cover w-full h-full hover:scale-110 transition-transform duration-500"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none';
                        }}
                      />
                    </div>
                  ))}
                </div>
                <p className="text-zinc-500 text-sm italic mt-[-10px] ml-2 animate-pulse">
                  Swipe horizontally to see more photos →
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Reflections and Learnings Section */}
      <section id="reflections" className="w-full flex justify-center pt-20">
        <div className="relative bg-gradient-to-br from-zinc-800 via-zinc-700 to-zinc-900 text-white px-8 py-10 md:px-14 md:py-16 rounded-3xl shadow-2xl max-w-5xl w-[90%] md:w-[80%] border border-zinc-700/50 mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-10 tracking-tight text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-green-500 to-lime-400">Reflections & Learnings</span>
          </h2>
          
          <div className="space-y-6 text-zinc-300 text-lg leading-relaxed text-justify">
            <p>
              <strong className="text-zinc-100 font-display text-xl">Beyond the Screen. </strong> 
              When I first moved from Bislig City to Davao, my understanding of Computer Science was limited to the screen—I loved video games and simply wanted to know how they worked. Four years later, my perspective has completely transformed. Learning Java, the MERN stack, and Git were crucial milestones, but the most profound realization was that technology is fundamentally about people. Whether it was designing a web app for a client in SE 2 or building the Global Citizenship Fund portal for the AIM Office during my ARISEn internship, I learned that my code only holds value when it solves real human problems.
            </p>
            
            <p>
              <strong className="text-zinc-100 font-display text-xl">Redefining Magis through Failure. </strong> 
              As an Atenean, we are constantly challenged to embody <span className="text-emerald-400 font-medium italic">Magis</span>—to do more and be more. For a long time, I mistakenly equated this with perfection: securing an unbroken streak of high school honors or attaining a flat 4.0 QPI. My two "cannonball" moments shattered that illusion. Receiving a 'D' in Philosophy taught me to let go of suffocating, self-imposed pressure, which ironically led to my best academic performances. Years later, pouring my heart into my Capstone Thesis only to receive a 'B' taught me an even harder lesson: maximum effort does not guarantee a perfect outcome. I realized that <span className="italic">Magis</span> isn't about avoiding failure; it's about the resilience to try again next semester, the grit to debug a system at 3 AM, and the grace to accept an imperfect result knowing you gave it your absolute best.
            </p>

            <p>
              <strong className="text-zinc-100 font-display text-xl">Cura Personalis in Action. </strong> 
              The principle of <span className="text-emerald-400 font-medium italic">Cura Personalis</span>—care for the whole person—deeply shaped both my personal life and my outreach. Academically, it meant learning to care for myself: stepping away from the keyboard to play badminton, cooking meals in my dorm, and finding sanity in gaming with my blockmates and friends. Externally, it meant looking beyond my own needs. From visiting Padre Pio's Home for Children in my freshman year, to building a chapel's comfort room in NSTP 2, to distributing school supplies in far-flung areas with the Scholars' Society's Project Envelope, I was consistently reminded that true education is meant to be shared.
            </p>

            <p>
              <strong className="text-zinc-100 font-display text-xl">The Engineer and the Man. </strong> 
              Looking back at my 4-year journey, I see a tapestry woven with rigorous deadlines, frustrating bugs, and moments of intense self-doubt. Yet, when I step back to look at the whole picture, the blessings overwhelmingly outshine the burdens. The unwavering support of my family, the loyalty of my friends, and the privilege of an Ateneo education gave me the strength to endure every hardship. I am walking away from this university not just as a capable Software Engineer, but as a man grounded in gratitude, ready to build solutions that matter.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}