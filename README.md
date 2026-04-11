# Prompt Length Experiment
An Experiment to Determine if Prompt Length Matters for AI Chatbots
# 🧪 Prompt Length Experiment: Does Size Matter for Code Generation?

## 📌 Overview
This repository contains the results of an experiment designed to test a common assumption in AI: **Does a longer, more detailed prompt always generate better code?**

I used four popular AI models (ChatGPT, Deepseek, Gemini, and Grok) to generate the HTML, CSS, and JavaScript for a specific web design task using three distinct prompt lengths (Short, Medium, and Long). 

The goal was to see if increasing the level of detail, context, and constraints linearly improves the quality of the output.

## 🎯 The Task
The objective for the AI was to create a "hero page" for a website selling premium chocolates. The requirements included:
* Good animations
* Placeholders for high-quality images
* Good typography

## 📝 The Prompts

Here are the three prompts used in the experiment:

### 1. Short Prompt (The Baseline)
> "Write the HTML, CSS, and JavaScript to build a hero section for a website selling chocolates. The design must include placeholders for high-quality images, modern typography, and smooth entrance animations."

### 2. Medium Prompt (Adding Context & Structure)
> "Act as an expert frontend developer and web designer. Your task is to write the HTML, CSS, and JavaScript for the hero section of a boutique chocolate brand's website.
> 
> **Context:** The brand sells luxury, handcrafted chocolates. The vibe should be elegant, mouth-watering, and high-end.
> 
> **Instructions:**
> - Use sophisticated typography (e.g., serif fonts for the main headings, clean sans-serif for the body).
> - Include CSS animations for a smooth fade-in effect when the page loads.
> - Create a distinct layout with a call-to-action button and placeholders for high-quality chocolate hero images.
> 
> **Output format:** Please provide the complete, structured code blocks for HTML, CSS, and JavaScript in separate sections."

### 3. Long Prompt (Detailed Specifications)
> "**Role:** Act as a Senior UI/UX Designer and Expert Frontend Developer.
> 
> **Context:** We are launching a premium artisan chocolate brand called 'Velvet Cocoa'. We need an eye-catching, luxurious hero section for our home page that immediately captures attention and drives conversions.
> 
> **Target Audience:** High-income individuals looking for luxury gifts, premium sweets, and elegant unboxing experiences.
> 
> **Task:** Write the HTML, CSS, and JavaScript for the hero section following these strict guidelines:
> 
> **Step 1 - Structure (HTML):** Create a semantic HTML layout with a clear top navigation bar, a compelling main headline, a descriptive sub-headline, a primary CTA ('Shop Now' button), and an engaging placeholder for a large hero image of melting chocolate.
> **Step 2 - Styling (CSS):** Use a dark, luxurious color palette (deep brown, gold, and cream). Import and use Google Fonts ('Playfair Display' for typography and 'Lato' for body text). Ensure the design is fully responsive using a mobile-first approach.
> **Step 3 - Animations (JS/CSS):** Implement a subtle 'Glassmorphism' effect for the navigation bar background. Add a smooth hover animation on the CTA button (e.g., a slight scale-up with a golden glow). Create a staggered, elegant fade-in entrance animation for the headline and button on page load.
> 
> **Restrictions & Scope:**
> - Do not use any external CSS frameworks (like Bootstrap or Tailwind); write pure, custom CSS.
> - Ensure all code is thoroughly commented so a beginner can understand it.
> 
> **Output Template:**
> Please format your exact response using these placeholders..."

## 📊 The Results & Insights

The results were surprising and challenged the "longer is always better" myth.

* **ChatGPT:** Thrived on detail. The **Long Prompt** produced the most structured, elegant, and complete result, following the strict styling guidelines well.
* **Deepseek & Gemini:** Found their sweet spot with the **Medium Prompt**. Both models generated very clean, professional, and modern layouts when given moderate context. However, when presented with the Long Prompt, both models struggled, resulting in broken layouts (Deepseek) or completely unstyled text (Gemini).
* **Grok:** The absolute outlier. The **Short Prompt** produced an incredibly complex, styled, and highly interactive result (including functioning modals and cart notifications). Conversely, the Medium and Long prompts resulted in basic, broken, or unstyled layouts.

**Conclusion:** The idea that a massive, highly detailed prompt is always the best approach is a **myth**. While some models (like ChatGPT) benefit from strict guardrails, over-prompting can actually confuse or break the output of other models (like Deepseek and Gemini). Sometimes, allowing the model more creative freedom with a shorter prompt (as seen with Grok) yields the most impressive results.

*Check the folders in this repo to view the live HTML outputs from each model.*

---

### ⚠️ Disclaimer
This is an independent experiment conducted for educational and observational purposes. The results are based on the specific prompts used at the time of testing and may not reflect the overall capabilities or future performance of these AI models. This repository is not meant to mock, endorse, or disparage any specific AI model or company. AI models are constantly updated, and their behavior can vary significantly based on minor nuances in prompting.