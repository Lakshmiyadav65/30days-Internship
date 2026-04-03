/**
 * Day Resources Configuration
 * 30 Days to Crack Your Dream Internship
 */

export const dayResources = {
  1: { title: "LinkedIn Profile Picture & Banner Setup" },
  2: { title: "LinkedIn Headline & About Section" },
  3: { title: "LinkedIn Profile Setup from Scratch" },
  4: { title: "Crafting the Perfect LinkedIn Headline" },
  5: { title: "Writing a LinkedIn About Section That Sells" },
  6: { title: "LinkedIn Banner & Profile Photo Tips" },
  7: { title: "Building Your LinkedIn Network Strategically" },
  8: { title: "How to Send Connection Requests That Get Accepted" },
  9: { title: "Engaging with Content on LinkedIn" },
  10: { title: "Writing Your First LinkedIn Post" },
  11: { title: "LinkedIn Content Strategy for Interns" },
  12: { title: "Resume Fundamentals — What Recruiters Look For" },
  13: { title: "Building a One-Page Resume That Stands Out" },
  14: { title: "Tailoring Your Resume for Each Role" },
  15: { title: "Resume Keywords & ATS Optimization" },
  16: { title: "Portfolio — Why You Need One" },
  17: { title: "Choosing a Portfolio Platform & Setup" },
  18: { title: "Showcasing Projects in Your Portfolio" },
  19: { title: "Writing Case Studies for Your Work" },
  20: { title: "Cold Emailing Founders & Hiring Managers" },
  21: { title: "Cold DMs on LinkedIn That Actually Work" },
  22: { title: "How to Find Startup Founders to Reach Out To" },
  23: { title: "Follow-Up Strategy Without Being Annoying" },
  24: { title: "Preparing for Internship Interviews" },
  25: { title: "Common Interview Questions & How to Answer" },
  26: { title: "Building Proof of Work Before Applying" },
  27: { title: "Freelancing & Micro-Internships as Stepping Stones" },
  28: { title: "Personal Branding Beyond LinkedIn" },
  29: { title: "Tracking Applications & Staying Organized" },
  30: { title: "Final Gameplan — Land That Internship" }
}

/**
 * Day Details with actual content, problems, and resources
 */
export const dayDetails = {
  1: {
    sections: [
      {
        title: "Why Your Profile Picture & Banner Matter",
        description: "Your LinkedIn profile picture is the first thing recruiters and founders see. A professional, high-quality photo increases your profile views by up to 14x. Your banner (cover photo) is prime real estate — use it to communicate what you do, your personal brand, or your value proposition."
      },
      {
        title: "Option 1 — Use Your Own Photo",
        description: "If you have a good quality photo, use it! Make sure it's well-lit, has a clean background, and shows your face clearly. Dress professionally but naturally. Smile. Crop it to a headshot. Avoid group photos, selfies, or overly filtered images."
      },
      {
        title: "AI Profile Photo Prompts — For Men",
        description: "No professional photo? No problem. Use Google Gemini to generate a realistic professional headshot. Copy any of these prompts, paste into Gemini, and download your new profile picture.",
        problems: [
          {
            title: "Prompt 1 — Business Suit (Upload Your Photo)",
            code: `Create a professional portrait of the person in the uploaded image for a LinkedIn profile photo. The person should have a subtle smile, conveying a professional and confident demeanor. The personal should be dressed in a black business suit, with sharp, realistic features and an authentic touch. The background should be gray, with a well-lit environment. The image must be extremely detailed, rendered in 4K 360 HD resolution`,
            explanation: "Upload your own photo along with this prompt. Gemini will transform it into a professional headshot while keeping your face."
          },
          {
            title: "Prompt 2 — Business Formal (No Photo Needed)",
            code: `Create a high-quality, professional LinkedIn headshot of a confident working professional. The person is wearing business formal attire with a blazer and a neutral-colored shirt. Facial expression is calm, friendly, and confident with a slight smile. Use soft studio lighting, sharp focus, and realistic skin tones. Background should be clean, minimal, and slightly blurred in light grey. The image should look like it was taken with a DSLR camera, suitable for a LinkedIn profile photo`,
            explanation: "No photo needed — Gemini will generate a completely new professional headshot for you."
          },
          {
            title: "Prompt 3 — Software Developer / Tech",
            code: `Generate a professional LinkedIn headshot of a software developer wearing smart casual attire. Neutral background, soft lighting, confident expression, modern professional look, high-resolution image`,
            explanation: "Great for tech roles. Short and effective — Gemini fills in the details."
          },
          {
            title: "Prompt 4 — Creative Freelancer",
            code: `Create a professional LinkedIn profile photo of a creative freelancer. Clean background, natural lighting, friendly smile, modern outfit, realistic and polished appearance`,
            explanation: "Perfect for designers, content creators, and freelancers who want a modern but professional look."
          }
        ]
      },
      {
        title: "AI Profile Photo Prompts — For Women",
        description: "Same process — copy the prompt, paste into Google Gemini, and download your professional headshot.",
        problems: [
          {
            title: "Prompt 1 — Corporate Professional (Upload Your Photo)",
            code: `Create a realistic, professional LinkedIn headshot of a confident female professional. She is well-groomed, wearing formal business attire such as a blazer or professional dress. Neutral background, soft studio lighting, natural skin tones, sharp facial details, minimal makeup, professional hairstyle, and a friendly confident expression. Corporate style, high resolution, DSLR-quality photo, suitable for LinkedIn profile`,
            explanation: "Upload your own photo for best results. Gemini will enhance it into a polished corporate headshot."
          },
          {
            title: "Prompt 2 — Corporate Executive",
            code: `Professional LinkedIn headshot of a corporate female executive wearing a navy or black blazer, neutral background, confident posture, subtle makeup, soft lighting, realistic skin texture, business formal look, high-resolution professional photography`,
            explanation: "Ideal for leadership, management, or corporate roles. Clean and powerful."
          },
          {
            title: "Prompt 3 — Female Software Engineer / Tech",
            code: `Realistic LinkedIn profile photo of a female software engineer wearing smart casual professional clothing, clean background, confident expression, modern tech professional style, natural lighting, sharp focus`,
            explanation: "Perfect for women in tech — software engineers, data scientists, product managers."
          }
        ]
      },
      {
        title: "Generate Your LinkedIn Banner with AI",
        description: "Your banner is the first thing people see when they visit your profile. Follow these 5 steps to create a stunning one with AI:",
        topics: [
          { name: "Go to Gemini & paste the prompt below" },
          { name: "Answer the 6 quick questions it asks" },
          { name: "Upload a reference photo of yourself" },
          { name: "Make edits in the same chat" },
          { name: "Download & upload to LinkedIn" }
        ],
        problems: [
          {
            title: "The Ultimate LinkedIn Banner Prompt",
            code: `Act as a professional LinkedIn Banner Designer.

Your goal is to generate a high-converting, visually vibrant, and professional LinkedIn banner that fits the 1584 x 396 pixel dimension perfectly. The design should be dynamic and stand out.

Because you cannot generate this exact aspect ratio, you must generate a Wide (16:9) image, but you must concentrate the design into a thin horizontal strip in the absolute vertical center of the canvas.

To ensure the user can crop this correctly:
1. The top 35% of the image must be empty background color.
2. The bottom 35% of the image must be empty background color.
3. All content (Text, CTA, Face) must be squeezed into the middle 30% strip.

Before generating the image, please ask me for the following details so you can customize the design. Stop and wait for my response after asking:

1. What is the Primary Headline?
2. What is the Secondary Tagline?
3. What is the Call to Action (CTA) text?
4. What Social Proof, stats, or client logos should be included?
5. What are your Brand Colours (Hex codes)?
6. Please upload the realistic photo of yourself. Additionally, specify any REALISTIC professional changes you want made to your appearance (e.g., "Change my polo to a dark suit").

Once I provide these details, generate the banner adhering strictly to these layout rules within the central middle strip:

Layout Rules (Applied ONLY to the middle 30% of the image):

1. CTA Placement (Strict): The CTA button must be anchored precisely in the top-left corner of the central strip. It should be positioned high up, above the level of the subject's shoulder.

2. Subject Appearance (Realistic & Professional): Place the modified user photo in the center-left of the strip. Apply the requested changes but maintain a high-quality, realistic photographic style. Do NOT apply cartoon filters.

3. Headline and Tagline: Place the Headline on the right side of the strip, with the Tagline directly below it. Keep the text compact.

4. Social Proof: Place logos or stats in a small, clean row at the bottom-right of the strip.

5. Background (Vibrant & Geometric): Do not use a plain, flat background. Create a dynamic and modern background using your brand colors. Incorporate subtle geometric shapes, abstract lines, or a professional gradient pattern to add depth, energy, and a high-end feel. Ensure these background elements are subtle enough behind the text to maintain perfect legibility.

Please start by asking me the questions.`,
            explanation: "This is an interactive prompt — Gemini will ask you 6 questions before generating your banner. Just answer them and it will create a custom banner with your photo, brand colors, and headline."
          }
        ]
      },
      {
        title: "Study These LinkedIn Profiles for Inspiration",
        description: "Look at how these professionals have set up their profile photos and banners. Notice how they present themselves — the lighting, background, and overall vibe of their photos, and how their banners reinforce their personal brand.",
        resources: [
          { title: "Lakshmi (Your Guide) — @glny", link: "https://www.linkedin.com/in/glny/" },
          { title: "Charlie Hills — Clean personal branding", link: "https://www.linkedin.com/in/charlie-hills/" },
          { title: "Anudeep — Strong tech profile", link: "https://www.linkedin.com/in/anudeep108/" },
          { title: "Shanica Roy — Great professional presence", link: "https://www.linkedin.com/in/shanica-roy/" },
          { title: "Punit — Web dev personal brand", link: "https://www.linkedin.com/in/punitweb/" },
          { title: "Saptarshi — Clean & minimal approach", link: "https://www.linkedin.com/in/saptarshipr/" },
          { title: "Felix Haas — Founder-level branding", link: "https://www.linkedin.com/in/felixhhaas/" }
        ]
      }
    ]
  },
  2: {
    sections: [
      {
        title: "Why Your Headline & About Section Matter",
        description: "Your headline is the first text anyone reads after your name — it shows up in search results, connection requests, and comments. A strong headline tells recruiters exactly who you are and what you're looking for. Your About section is where you tell your complete story — it's the place where a recruiter decides if you're a serious candidate. Together, they decide whether someone clicks 'Connect' or scrolls past you."
      },
      {
        title: "Crafting the Perfect LinkedIn Headline",
        description: "Your headline has a 220-character limit. Use every word wisely. Follow these 3 simple rules:",
        topics: [
          { name: "Rule 1 — Who You Are", count: "Identity" },
          { name: "Rule 2 — Your Skills", count: "Value" },
          { name: "Rule 3 — What You Want", count: "Intent" }
        ],
        problems: [
          {
            title: "Step 1 — Start with Who You Are",
            approach: "Lead with your current role or aspiration. This instantly tells people what you do.",
            code: `"Aspiring Software Engineer"
"Final Year CSE Student"`,
            explanation: "Pick the one that best describes your current situation. Be honest — 'Aspiring' is perfectly fine if you're still learning."
          },
          {
            title: "Step 2 — Add Your Key Skills",
            approach: "List 2-3 of your strongest or most relevant skills separated by pipes ( | ).",
            code: `"Python | Java | React"
"UI/UX Design | Figma | User Research"
"Content Writing | SEO | Social Media"
"Data Analysis | SQL | Power BI"`,
            explanation: "Only list skills you can actually talk about in an interview. Quality over quantity."
          },
          {
            title: "Step 3 — State What You Want",
            approach: "End with a clear call to action so recruiters know you're actively looking.",
            code: `"Open to Internships 2025"
"Seeking SDE Internship Opportunities"
"Looking for Marketing Internship Roles"
"Open to Freelance & Internship Opportunities"`,
            explanation: "This is the hook — recruiters literally search for keywords like 'open to internships'. Make it easy for them to find you."
          },
          {
            title: "Full Headline Examples",
            approach: "Combine all 3 rules into one powerful headline. Here are some examples you can directly copy and customize:",
            code: `"Aspiring Software Engineer | Python | Java | Open to Internships 2025"

"Final Year CSE Student | React | Node.js | Seeking SDE Internship"

"UI/UX Designer | Figma | User Research | Open to Design Internships"

"B.Tech CSE '25 | Data Science | Python | SQL | Actively Seeking Internships"`,
            explanation: "The format is simple: [Who You Are] | [Skills] | [What You Want]. Copy any of these and replace with your own details."
          }
        ]
      },
      {
        title: "Writing Your About Section",
        description: "Your About section is your complete story — the place where a recruiter reads and decides if you're a serious candidate. Write it in 4 clear parts:",
        topics: [
          { name: "Part 1 — Who You Are (in one line)" },
          { name: "Part 2 — What You Do (skills & projects)" },
          { name: "Part 3 — What You Achieved (certifications, hackathons)" },
          { name: "Part 4 — Call to Action (open to internships — connect!)" }
        ],
        problems: [
          {
            title: "Part 1 — Who You Are (1 line)",
            approach: "Open with a single line that introduces you. Keep it confident and clear.",
            code: `"I'm a final year Computer Science student at XYZ University, passionate about building software that solves real problems."

"I'm an aspiring data analyst with a strong foundation in Python, SQL, and data visualization."`,
            explanation: "This first line is what people see before clicking 'See more' — make it count."
          },
          {
            title: "Part 2 — What You Do (Skills & Projects)",
            approach: "Talk about what you've built, what tools you use, and what excites you technically.",
            code: `"I work with Python, Java, and React to build web applications. My recent projects include a task management app and an AI-powered resume screener."

"I specialize in UI/UX design using Figma and have designed interfaces for 3 startup MVPs."`,
            explanation: "Be specific — mention actual projects, tools, and technologies. Generic statements like 'I'm a hard worker' add zero value."
          },
          {
            title: "Part 3 — What You've Achieved",
            approach: "Highlight anything that proves you've done real work — hackathons, certifications, competitions, open-source contributions, or even personal milestones.",
            code: `"I was a finalist at XYZ Hackathon and have contributed to 2 open-source projects on GitHub."

"I participated in Smart India Hackathon and built a working prototype in 36 hours."

"I completed Google Data Analytics Certification and earned HackerRank Gold Badge in Python."

"I've solved 200+ DSA problems on LeetCode and published 10+ technical articles on Medium."`,
            explanation: "Don't overthink it — even small achievements count. Participated in a hackathon? Mention it. Completed a certification? Add it. Built something on your own? That's proof of work."
          },
          {
            title: "Part 4 — Call to Action",
            approach: "End with what you're looking for and invite people to connect.",
            code: `"I'm currently open to internship opportunities in software development. If you're hiring or know someone who is — I'd love to connect!"

"Open to internships in data science and analytics. Feel free to reach out — I'm always happy to chat about tech and career growth!"`,
            explanation: "This is your CTA — tell them exactly what to do next. When a recruiter reads this, they should know you're actively looking and easy to reach."
          }
        ]
      },
      {
        title: "AI Prompt — Auto-Generate Your Headline & About Section",
        description: "Not confident about writing it yourself? No worries! Just fill in your details in this prompt and paste it into ChatGPT or Gemini — it will automatically generate a personalized LinkedIn headline and about section for you.",
        problems: [
          {
            title: "Copy This Prompt & Fill Your Details",
            code: `You are a LinkedIn profile expert. Based on my details, generate a professional LinkedIn Headline and About Section.

My Details:
- Name: [Your Name]
- Degree: [Your Degree & Branch]
- Year: [Current Year of Study]
- Skills: [List your skills]
- Projects: [Mention 1-2 projects]
- Certifications: [Any certifications]
- Goal: [What internship are you looking for]
- Achievements: [Any achievements or hackathons]

Generate:
1. Strong LinkedIn Headline (under 220 characters)
2. Professional About Section (under 2000 characters)
   - Who I am
   - What I do
   - What I achieved
   - Call to action
Keep tone professional yet approachable.`,
            explanation: "Replace the [placeholders] with your actual details. The AI will generate a tailored headline and about section — then tweak it to sound like you. It's that simple!"
          }
        ]
      }
    ]
  }
}
