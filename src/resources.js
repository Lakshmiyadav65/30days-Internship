/**
 * Day Resources Configuration
 * 30 Days to Crack Your Dream Internship
 */

export const dayResources = {
  1: { title: "LinkedIn Profile Picture & Banner Setup" },
  2: { title: "Identify Your Niche & Target Roles" },
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
        title: "Option 2 — Generate a Profile Photo with AI (Gemini)",
        description: "No professional photo? No problem. Use Google Gemini to generate a realistic professional headshot. Here are ready-to-use prompts:",
        problems: [
          {
            title: "Prompt for Men",
            code: `Generate a professional LinkedIn headshot of a young Indian man in his early 20s. He is wearing a smart casual outfit (plain shirt or blazer). The background is soft and neutral (light gray or blurred office). The lighting is natural and warm. The expression is confident and approachable with a slight smile. The image should look realistic, high-resolution, and suitable for a LinkedIn profile photo.`,
            explanation: "Paste this into Gemini (Image Generation). Download the result and upload it as your LinkedIn profile picture."
          },
          {
            title: "Prompt for Women",
            code: `Generate a professional LinkedIn headshot of a young Indian woman in her early 20s. She is wearing a smart casual outfit (plain blouse or blazer). The background is soft and neutral (light gray or blurred office). The lighting is natural and warm. The expression is confident and approachable with a slight smile. The image should look realistic, high-resolution, and suitable for a LinkedIn profile photo.`,
            explanation: "Paste this into Gemini (Image Generation). Download the result and upload it as your LinkedIn profile picture."
          }
        ]
      },
      {
        title: "Generate Your LinkedIn Banner / Cover Photo",
        description: "Your banner should tell people what you do at a glance. Use these prompts to generate a professional cover photo:",
        problems: [
          {
            title: "Prompt — Personal Brand Banner",
            code: `Generate a professional LinkedIn banner (1584x396 pixels) with a modern, minimal dark theme. Include the text "[Your Name]" on the left side in a clean bold font, and a short tagline like "Aspiring [Your Role] | Building in Public" on the right. Use subtle geometric patterns or gradients in the background. Keep it clean, professional, and easy to read. Colors: dark navy or black background with white and gold/yellow accents.`,
            explanation: "Replace [Your Name] and [Your Role] with your actual details. You can also create banners using Canva with free LinkedIn banner templates."
          },
          {
            title: "Prompt — Skills-Focused Banner",
            code: `Generate a professional LinkedIn banner (1584x396 pixels) with a clean modern design. On the left, show a professional workspace illustration. On the right side, display 3-4 skill keywords like "UI/UX Design | Web Development | Content Creation" in a clean, modern font. Use a dark gradient background with subtle tech-inspired elements. The overall feel should be minimal and professional.`,
            explanation: "Customize the skills to match your target role. This works great for tech, design, and marketing profiles."
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
  }
}
