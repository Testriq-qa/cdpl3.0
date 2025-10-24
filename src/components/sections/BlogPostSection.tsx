import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaXTwitter, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa6';

export const BlogPostSection: React.FC = () => {
    return (
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <main className="lg:col-span-2">
                {/* Table of Contents */}
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-700">Table of Contents</h2>
                <ul className="list-decimal pl-4 sm:pl-6 mb-8 sm:mb-12 space-y-2 text-sm sm:text-base text-gray-700">
                    {[
                        { id: 'step1', text: 'Title: Include keyword + SERP research' },
                        { id: 'step2', text: 'Author Bio showing E-E-A-T' },
                        { id: 'step3', text: 'Images: 5+ w/ metadata' },
                        { id: 'step4', text: 'Links: 5+ internal + external' },
                        { id: 'step5', text: '1500+ words/blog post based on SERP' },
                        { id: 'step6', text: 'Table of Contents: Easily jump around!' },
                        { id: 'step7', text: 'E-E-A-T: Show off expertise in the content' },
                        { id: 'step8', text: 'CTAs: In content, sidebar, conclusion' },
                        { id: 'step9', text: 'Social share buttons' },
                        { id: 'step10', text: 'Top notch quality writing' },
                        { id: 'step11', text: 'URL: Short + includes keyword' },
                        { id: 'step12', text: 'Optimize for mobile experience' },
                        { id: 'step13', text: 'Proper spacing: Make it readable' },
                        { id: 'step14', text: 'Sidebar w/ links + clear Call to Action' },
                        { id: 'step15', text: 'Font: readable + popular for blogs' },
                        { id: 'step16', text: 'Color: Easy on the eyes - #333333' },
                        { id: 'step17', text: 'Exit intent pop up to capture leads' },
                        { id: 'step18', text: 'Proper use of headings (H1, H2, etc.)' },
                        { id: 'step19', text: 'Video embed + infographics' },
                        { id: 'step20', text: 'Quotes from SMEs on the topic' },
                    ].map((item) => (
                        <li key={item.id}>
                            <Link href={`#${item.id}`} className="text-blue-600  hover:underline">
                                {item.text}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Step 1 */}
                <h2 id="step1" className="text-2xl sm:text-3xl font-bold mb-4 text-gray-700">1. Title: Include keyword + SERP research</h2>
                <p className="mb-4 text-sm sm:text-base text-gray-700">
                    Your title is the first thing users see in search results, so it must include your primary keyword while being compelling. Start by conducting SERP (Search Engine Results Page) research using tools like Google Keyword Planner or Ahrefs to identify what ranks for your target keyword. Analyze top results for title length (50-60 characters ideal), structure, and emotional hooks. For example, if targeting &quot;SEO blog post checklist,&quot; a title like &quot;The Ultimate 20-Step SEO Blog Post Checklist for 2025&quot; incorporates the keyword naturally and promises value.
                </p>
                <p className="mb-4 text-sm sm:text-base text-gray-700">
                    Avoid clickbait—focus on clarity and relevance to reduce bounce rates. A well-researched title can boost click-through rates by 20-30%. Remember, titles also impact social shares and email opens, so test variations with A/B tools if possible.
                </p>
                <div className="relative w-full h-48 sm:h-64 md:h-72 mb-4">
                    <Image
                        src="/images/automation-testing.webp"
                        alt="SEO Title Optimization Illustration"
                        fill
                        className="rounded-lg shadow-md object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, 50vw"
                    />
                </div>
                
                {/* Step 2 */}
                <h2 id="step2" className="text-2xl sm:text-3xl font-bold mb-4 text-gray-700">2. Author Bio showing E-E-A-T</h2>
                <p className="mb-4 text-sm sm:text-base text-gray-700">
                    Google prioritizes content from credible sources, so include an author bio that highlights experience, expertise, authoritativeness, and trustworthiness (E-E-A-T). Place it at the top or bottom, linking to an author page with credentials, past publications, and social proof like LinkedIn. For instance, mention years in the industry, successful exits, or client results. This builds trust and helps with entity-based SEO.
                </p>
                <p className="mb-4 text-sm sm:text-base text-gray-700">
                    A strong bio can improve dwell time as readers feel the content is reliable. Use structured data (JSON-LD) to mark up the author for rich snippets in search results.
                </p>
                <div className="relative w-full h-48 sm:h-64 md:h-72 mb-4">
                    <Image
                        src="/images/automation-testing.webp"
                        alt="Author Bio Example in Blog Structure"
                        fill
                        className="rounded-lg shadow-md object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, 50vw"
                    />
                </div>


                {/* Step 3 */}
                <h2 id="step3" className="text-2xl sm:text-3xl font-bold mb-4 text-gray-700">3. Images: 5+ w/ metadata</h2>
                <p className="mb-4 text-sm sm:text-base text-gray-700">
                    Images enhance engagement and break up text, but for SEO, use at least 5 per post with optimized metadata. Compress images for speed using tools like TinyPNG, add descriptive alt text with keywords (e.g., &quot;SEO blog post checklist infographic&quot;), and include file names like &quot;seo-blog-checklist.jpg&quot;. This helps with image search traffic and accessibility.
                </p>
                <p className="mb-4 text-sm sm:text-base text-gray-700">
                    Visuals can increase time on page by 100%. Choose relevant, high-quality images or infographics to illustrate points, and ensure they&apos;re responsive for mobile.
                </p>
                <div className="relative w-full h-48 sm:h-64 md:h-72 mb-4">
                    <Image
                        src="/images/automation-testing.webp"
                        alt="Blog Images with Alt Text Optimization"
                        fill
                        className="rounded-lg shadow-md object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, 50vw"
                    />
                </div>


                {/* Step 4 */}
                <h2 id="step4" className="text-2xl sm:text-3xl font-bold mb-4 text-gray-700">4. Links: 5+ internal + external</h2>
                <p className="mb-4 text-sm sm:text-base text-gray-600">
                    Links build authority and keep users on your site longer. Include at least 5 internal links to related content (e.g., link to your &quot;SEO Strategy Guide&quot;) and 3+ external links to high-authority sites like Moz or Search Engine Journal. Use descriptive anchor text with keywords, but keep it natural to avoid penalties.
                </p>
                <p className="mb-4 text-sm sm:text-base text-gray-700">
                    Internal links distribute page authority, while external ones show research depth. Track link performance with Google Analytics to refine your strategy.
                </p>
                <div className="relative w-full h-48 sm:h-64 md:h-72 mb-4">
                    <Image
                        src="/images/automation-testing.webp"
                        alt="Internal and External Links Illustration"
                        fill
                        className="rounded-lg shadow-md object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, 50vw"
                    />
                </div>

                {/* Step 5 */}
                <h2 id="step5" className="text-2xl sm:text-3xl font-bold mb-4 text-gray-700">5. 1500+ words/blog post based on SERP</h2>
                <p className="mb-4 text-sm sm:text-base text-gray-600">
                    Word count should be 1500+ based on what ranks in SERPs for your keyword—check competitors with tools like Surfer SEO. Focus on depth over fluff: cover subtopics, answer user queries, and provide value. Long-form content ranks better for competitive keywords as it signals comprehensiveness to Google.
                </p>
                <p className="mb-4 text-sm sm:text-base text-gray-600">
                    Structure with short paragraphs and lists for readability. This post itself aims for 2000+ words to demonstrate the point.
                </p>

                {/* Step 6 */}
                <h2 id="step6" className="text-2xl sm:text-3xl font-bold mb-4 text-gray-700">6. Table of Contents: Easily Jump Around!</h2>
                <p className="mb-4 text-sm sm:text-base text-gray-600">
                    A table of contents (TOC) is a critical feature for long-form blog posts, especially those exceeding 1500 words like this one. It serves as a navigational roadmap, allowing readers to quickly jump to sections that interest them most, enhancing user experience (UX) and reducing bounce rates. To implement this effectively, place the TOC prominently after the introduction or within the first screen of content, using an HTML element or a styled list with anchor links to each section (e.g., `#step1`, `#step2`). Each entry should mirror the heading structure (H2 for main sections, H3 for subsections) and include concise, keyword-optimized titles that reflect the content below.
                </p>
                <p className="mb-4 text-sm sm:text-base text-gray-600">
                    From an SEO perspective, a TOC improves crawlability by providing internal linking opportunities, signaling to search engines the hierarchical structure of your content. Studies suggest that posts with TOCs can increase average session duration by up to 15-20% as readers explore multiple sections. Use clear, actionable language in the links—e.g., &quot;How to Optimize Titles&quot; instead of just &quot;Titles&quot;—to entice clicks. Additionally, ensure the TOC is sticky or collapsible on larger screens (via CSS or JavaScript) for mobile optimization, keeping it accessible without overwhelming the layout. Test its visibility across devices to confirm it enhances rather than detracts from readability.
                </p>
                <p className="mb-4 text-sm sm:text-base text-gray-600">
                    For design, style the TOC with a distinct background (e.g., light gray or blue) and sufficient padding to stand out, but avoid clutter. Include a &quot;Back to Top&quot; link at the end of each section to encourage continued engagement. This post’s TOC, located earlier, exemplifies this approach with clickable links to all 20 steps, making it a practical model. Regularly update the TOC if you add or revise sections to maintain accuracy and relevance, ensuring it remains a valuable tool for both users and search engines.
                </p>
                <div className="relative w-full h-48 sm:h-64 md:h-72 mb-4">
                    <Image
                        src="/images/automation-testing.webp"
                        alt="Table of Contents Design Example"
                        fill
                        className="rounded-lg shadow-md object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, 50vw"
                    />
                </div>

                {/* Step 7 */}
                <h2 id="step7" className="text-2xl sm:text-3xl font-bold mb-4 text-gray-700">7. E-E-A-T: Show off expertise in the content</h2>
                <p className="mb-4 text-sm sm:text-base text-gray-700">
                    E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) is a cornerstone of Google’s ranking algorithm, especially for YMYL (Your Money or Your Life) topics. Demonstrate expertise by weaving your credentials, case studies, or data-driven insights into the content. For instance, mention specific results—like “increased traffic by 150% for a client using this checklist”—to build trust. Include references to reputable sources or original research to boost authority.
                </p>
                <p className="mb-4 text-sm sm:text-base text-gray-600">
                    Use a professional tone and avoid vague claims. Add a section highlighting your process or methodology, such as how you analyzed SERPs for this post. This not only educates readers but also signals to search engines that the content is reliable. Pair this with the author bio for a cohesive narrative.
                </p>
                <div className="relative w-full h-48 sm:h-64 md:h-72 mb-4">
                    <Image
                        src="/images/automation-testing.webp"
                        alt="E-E-A-T SEO Optimization Example"
                        fill
                        className="rounded-lg shadow-md object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, 50vw"
                    />
                </div>


                {/* Step 8 */}
                <h2 id="step8" className="text-2xl sm:text-3xl font-bold mb-4 text-gray-700">8. CTAs: In content, sidebar, conclusion</h2>
                <p className="mb-4 text-sm sm:text-base text-gray-600">
                    Calls to Action (CTAs) guide readers toward desired actions, such as subscribing, booking a call, or downloading a resource. Include at least three CTAs: one in the content (e.g., “Learn more about SEO tools here”), one in the sidebar (e.g., “Hire us for SEO”), and one in the conclusion (e.g., “Book a free call”). Use action-oriented language like “Get Started” or “Discover Now” and make buttons visually distinct with contrasting colors.
                </p>
                <p className="mb-4 text-sm sm:text-base text-gray-600">
                    Place CTAs strategically—after valuable insights or at natural transition points—to avoid disrupting the flow. Test CTA placement and wording with A/B testing to maximize conversion rates, which can improve by 10-20% with optimization.
                </p>
                <div className="relative w-full h-48 sm:h-64 md:h-72 mb-4">
                    <Image
                        src="/images/automation-testing.webp"
                        alt="Effective CTA Placement Illustration"
                        fill
                        className="rounded-lg shadow-md object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, 50vw"
                    />
                </div>


                {/* Step 9 */}
                <h2 id="step9" className="text-2xl sm:text-3xl font-bold mb-4 text-gray-700">9. Social share buttons</h2>
                <p className="mb-4 text-sm sm:text-base text-gray-600">
                    Social share buttons encourage readers to distribute your content, amplifying reach beyond search. Place them in a visible sidebar or at the end of the post, including icons for Twitter, LinkedIn, and Facebook with pre-filled share links (e.g., `https://twitter.com/intent/tweet?url=your-url`). Ensure they’re styled consistently with your site’s design for a seamless look.
                </p>
                <p className="mb-4 text-sm sm:text-base text-gray-600">
                    Sharing increases referral traffic and backlinks, key for SEO. Add a subtle prompt like “Found this helpful? Share it!” to boost engagement. Track shares with analytics tools to identify popular content.
                </p>
                <div className="relative w-full h-48 sm:h-64 md:h-72 mb-4">
                    <Image
                        src="/images/automation-testing.webp"
                        alt="Social Share Buttons Design"
                        fill
                        className="rounded-lg shadow-md object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, 50vw"
                    />
                </div>


                {/* Step 10 */}
                <h2 id="step10" className="text-2xl sm:text-3xl font-bold mb-4 text-gray-700">10. Top notch quality writing</h2>
                <p className="mb-4 text-sm sm:text-base text-gray-600">
                    Quality writing is the backbone of a successful blog post. Use clear, concise language tailored to your audience, avoiding jargon unless explained. Focus on delivering value—answer questions, solve problems, or entertain—while keeping sentences short (15-20 words) for readability. Edit ruthlessly to eliminate fluff, aiming for a Flesch-Kincaid score of 60-70 for broad accessibility.
                </p>
                <p className="mb-4 text-sm sm:text-base text-gray-600">
                    Incorporate storytelling or real-world examples to engage readers. Use tools like Grammarly or Hemingway to polish grammar and style. High-quality content ranks better and keeps visitors longer, reducing bounce rates by up to 30%.
                </p>
                <div className="relative w-full h-48 sm:h-64 md:h-72 mb-4">
                    <Image
                        src="/images/automation-testing.webp"
                        alt="Quality Writing Infographic"
                        fill
                        className="rounded-lg shadow-md object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, 50vw"
                    />
                </div>


                {/* Step 11 */}
                <h2 id="step11" className="text-2xl sm:text-3xl font-bold mb-4 text-gray-700">11. URL: Short + includes keyword</h2>
                <p className="mb-4 text-sm sm:text-base text-gray-600">
                    A well-optimized URL boosts SEO by including the primary keyword and keeping it short (under 60 characters).
                </p>
                <p className="mb-4 text-sm sm:text-base text-gray-600">
                    Short URLs are easier for users to remember and type, improving click-through rates from search results. Use hyphens to separate words and maintain consistency with your site’s structure. Update old URLs during content refreshes to align with this standard.
                </p>
                <div className="relative w-full h-48 sm:h-64 md:h-72 mb-4">
                    <Image
                        src="/images/automation-testing.webp"
                        alt="SEO URL Structure Example"
                        fill
                        className="rounded-lg shadow-md object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, 50vw"
                    />
                </div>


                {/* Step 12 */}
                <h2 id="step12" className="text-2xl sm:text-3xl font-bold mb-4 text-gray-700">12. Optimize for mobile experience</h2>
                <p className="mb-4 text-sm sm:text-base text-gray-600">
                    With over 60% of web traffic from mobile devices in 2025, optimization is non-negotiable. Use responsive design with flexible images, readable fonts, and touch-friendly buttons. Test on multiple devices (iPhone, Android, tablets) using tools like Google’s Mobile-Friendly Test to ensure no elements are cut off or hard to navigate.
                </p>
                <p className="mb-4 text-sm sm:text-base text-gray-600">
                    Prioritize fast load times with compressed images and lazy loading. Google uses mobile-first indexing, so a seamless mobile experience directly impacts rankings. Avoid pop-ups that block content, opting for exit-intent ones instead.
                </p>
                <div className="relative w-full h-48 sm:h-64 md:h-72 mb-4">
                    <Image
                        src="/images/automation-testing.webp"
                        alt="Mobile Optimization Infographic"
                        fill
                        className="rounded-lg shadow-md object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, 50vw"
                    />
                </div>


                {/* Step 13 */}
                <h2 id="step13" className="text-2xl sm:text-3xl font-bold mb-4 text-gray-700">13. Proper spacing: Make it readable</h2>
                <p className="mb-4 text-sm sm:text-base text-gray-600">
                    Proper spacing enhances readability by breaking content into digestible chunks. Use short paragraphs (3-4 lines), ample line spacing (1.5-2em), and generous margins. Add horizontal rules or dividers between sections to create visual breaks, making the post skimmable for busy readers.
                </p>
                <p className="mb-4 text-sm sm:text-base text-gray-600">
                    This improves user retention—studies show well-spaced content reduces cognitive load by 25%. Pair with bullet points or numbered lists for complex ideas, ensuring the layout feels airy and inviting across all devices.
                </p>
                <div className="relative w-full h-48 sm:h-64 md:h-72 mb-4">
                    <Image
                        src="/images/automation-testing.webp"
                        alt="Readability and Spacing Example"
                        fill
                        className="rounded-lg shadow-md object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, 50vw"
                    />
                </div>

                {/* Step 14 */}
                <h2 id="step14" className="text-2xl sm:text-3xl font-bold mb-4 text-gray-700">14. Sidebar w/ links + clear Call to Action</h2>
                <p className="mb-4 text-sm sm:text-base text-gray-600">
                    A sidebar enhances navigation and engagement. Include 5+ internal links to related posts (e.g., “SEO Tools Guide”) and 3+ external links to authority sites. Pair this with a clear CTA, like “Hire us for SEO,” styled as a button for prominence. Keep the sidebar sticky on desktop for constant visibility.
                </p>
                <p className="mb-4 text-sm sm:text-base text-gray-600">
                    This keeps readers on-site longer and drives conversions. Use contrasting colors (e.g., blue on white) for CTAs to stand out, and ensure links open in new tabs to retain users on the current page.
                </p>
                <div className="relative w-full h-48 sm:h-64 md:h-72 mb-4">
                    <Image
                        src="/images/automation-testing.webp"
                        alt="Sidebar Design with CTA Example"
                        fill
                        className="rounded-lg shadow-md object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, 50vw"
                    />
                </div>

                {/* Step 15 */}
                <h2 id="step15" className="text-2xl sm:text-3xl font-bold mb-4 text-gray-700">15. Font: readable + popular for blogs</h2>
                <p className="mb-4 text-sm sm:text-base text-gray-600">
                    Choose a readable, blog-popular font like Open Sans, Lato, or Roboto, with a size of 16-18px for body text. Ensure high contrast with a dark color (e.g., #333333) against a light background. Use bold or italic sparingly for emphasis, keeping the focus on legibility.
                </p>
                <p className="mb-4 text-sm sm:text-base text-gray-600">
                    Readable fonts reduce eye strain, encouraging longer reads—up to 20% more time on page. Test font pairings with tools like Google Fonts, ensuring compatibility across browsers and devices.
                </p>
                <div className="relative w-full h-48 sm:h-64 md:h-72 mb-4">
                    <Image
                        src="/images/automation-testing.webp"
                        alt="Readable Font Selection Guide"
                        fill
                        className="rounded-lg shadow-md object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, 50vw"
                    />
                </div>


                {/* Step 16 */}
                <h2 id="step16" className="text-2xl sm:text-3xl font-bold mb-4 text-gray-700">16. Color: Easy on the eyes - #333333</h2>
                <p className="mb-4 text-sm sm:text-base text-gray-600">
                    Use a dark gray like #333333 for text to ensure readability without straining eyes, especially on white or light backgrounds. Complement with accent colors (e.g., blue #0066cc) for headings or CTAs, maintaining a clean, professional palette.
                </p>
                <p className="mb-4 text-sm sm:text-base text-gray-600">
                    This color choice aligns with web accessibility standards (WCAG) and reduces fatigue, potentially increasing time on page by 15%. Avoid bright or neon colors for body text to keep the focus on content.
                </p>
                <div className="relative w-full h-48 sm:h-64 md:h-72 mb-4">
                    <Image
                        src="/images/automation-testing.webp"
                        alt="Color Psychology for Web Design"
                        fill
                        className="rounded-lg shadow-md object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, 50vw"
                    />
                </div>


                {/* Step 17 */}
                <h2 id="step17" className="text-2xl sm:text-3xl font-bold mb-4 text-gray-700">17. Exit intent pop up to capture leads</h2>
                <p className="mb-4 text-sm sm:text-base text-gray-600">
                    An exit-intent pop-up triggers when a user is about to leave, offering a last-chance CTA like “Subscribe for SEO tips” or “Get a free audit.” Use a non-intrusive design with a clear close button, ensuring it loads quickly to avoid penalties.
                </p>
                <p className="mb-4 text-sm sm:text-base text-gray-600">
                    This can capture 5-10% more leads, especially with incentives like ebooks. Implement with JavaScript and test timing to balance conversion and user experience—too early or frequent pop-ups can annoy visitors.
                </p>
                <div className="relative w-full h-48 sm:h-64 md:h-72 mb-4">
                    <Image
                        src="/images/automation-testing.webp"
                        alt="Exit Intent Pop-Up Example"
                        fill
                        className="rounded-lg shadow-md object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, 50vw"
                    />
                </div>


                {/* Step 18 */}
                <h2 id="step18" className="text-2xl sm:text-3xl font-bold mb-4 text-gray-700">18. Proper use of headings (H1, H2, etc.)</h2>
                <p className="mb-4 text-sm sm:text-base text-gray-600">
                    Headings structure content for readability and SEO. Use one H1 for the title, H2s for main sections (like this one), and H3s for subsections. Incorporate keywords naturally—e.g., “SEO Headings Best Practices”—and keep them concise (under 70 characters).
                </p>
                <p className="mb-4 text-sm sm:text-base text-gray-600">
                    This helps search engines understand content hierarchy and improves skimmability, reducing bounce rates by 10-15%. Use tools like Yoast SEO to ensure proper nesting and keyword distribution.
                </p>
                <div className="relative w-full h-48 sm:h-64 md:h-72 mb-4">
                    <Image
                        src="/images/automation-testing.webp"
                        alt="Proper Heading Structure Example"
                        fill
                        className="rounded-lg shadow-md object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, 50vw"
                    />
                </div>


                {/* Step 19 */}
                <h2 id="step19" className="text-2xl sm:text-3xl font-bold mb-4 text-gray-700">19. Video embed + infographics</h2>
                <p className="mb-4 text-sm sm:text-base text-gray-600">
                    Embed videos and infographics to boost engagement and time on page. Use YouTube embeds for SEO benefits, as Google owns it. Choose relevant videos, like tutorials, and create or source infographics that visualize data. This multimedia approach caters to different learning styles and can reduce bounce rates by 50%.
                </p>
                <p className="mb-4 text-sm sm:text-base text-gray-600">
                    Ensure videos are optimized with transcripts and keywords in titles. Here’s an embedded video on writing SEO blog posts:
                </p>
                <div className="relative w-full aspect-w-16 aspect-h-9 mb-4">
                    <iframe
                        src="https://www.youtube.com/embed/w7nmPo1O4Dk"
                        title="How To Write Blog Posts – AI + SEO Strategy 2025"
                        allowFullScreen
                        className="w-full h-full rounded-lg"
                    ></iframe>
                </div>
                <div className="relative w-full h-48 sm:h-64 md:h-72 mb-4">
                    <Image
                        src="/images/automation-testing.webp"
                        alt="Video Embed and Infographics Example"
                        fill
                        className="rounded-lg shadow-md object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, 50vw"
                    />
                </div>

                {/* Step 20 */}
                <h2 id="step20" className="text-2xl sm:text-3xl font-bold mb-4 text-gray-700">20. Quotes from SMEs on the topic</h2>
                <p className="mb-4 text-sm sm:text-base text-gray-600">
                    Incorporate quotes from subject matter experts (SMEs) to add credibility and diverse perspectives. Source from interviews, articles, or social media, attributing properly. This enhances E-E-A-T and makes content more authoritative. For example, use quotes in sections to reinforce points, linking to sources for backlinks potential.
                </p>
                <p className="mb-4 text-sm sm:text-base text-gray-600">
                    Quotes break up text and provide social proof. Here’s one: “The best SEO strategy is to focus on the user.” - Marcus Tober. Aim for 2-3 per post.
                </p>
                <div className="relative w-full h-48 sm:h-64 md:h-72 mb-4">
                    <Image
                        src="/images/automation-testing.webp"
                        alt="Expert Quotes Graphic"
                        fill
                        className="rounded-lg shadow-md object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, 50vw"
                    />
                </div>

            </main>

            {/* Sidebar */}
            <aside className="mt-6 lg:mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:flex lg:flex-col md:gap-4 space-y-6 lg:sticky lg:top-8">
                    {/* Newsletter Subscription Form */}
                    <div className="bg-gradient-to-br from-blue-100 to-indigo-100 p-4 sm:p-6 rounded-lg shadow-md">
                        <h3 className="text-lg sm:text-xl font-bold mb-4 text-gray-800">Subscribe to Our Newsletter</h3>
                        <p className="text-xs sm:text-sm text-gray-600 mb-4">Stay updated with the latest SEO tips and tricks!</p>
                        <div className="space-y-4">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full px-3 py-2 border text-gray-800 border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out"
                            />
                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out"
                            >
                                Subscribe
                            </button>
                        </div>
                    </div>

                    {/* Social Share Buttons */}
                    <div className="bg-gray-100 p-4 sm:p-6 rounded-lg shadow-md text-center">
                        <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-700">Share This Post</h3>
                        <div className="flex space-x-4 justify-center">
                            <Link href="https://twitter.com/intent/tweet?url=https://www.testriq.com/blog/post/how-does-validation-optimization-improve-web-application-quality&text=How Does Validation & Optimization Improve Web Application Quality?" aria-label="Share on Twitter">
                                <FaXTwitter className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 hover:text-blue-600" />
                            </Link>
                            <Link href="https://www.linkedin.com/shareArticle?mini=true&url=https://www.testriq.com/blog/post/how-does-validation-optimization-improve-web-application-quality" aria-label="Share on LinkedIn">
                                <FaLinkedin className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 hover:text-blue-600" />
                            </Link>
                            <Link href="https://www.facebook.com/sharer/sharer.php?u=https://www.testriq.com/blog/post/how-does-validation-optimization-improve-web-application-quality" aria-label="Share on Facebook">
                                <FaFacebook className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 hover:text-blue-600" />
                            </Link>
                            <Link href="https://www.instagram.com/sharer/sharer.php?u=https://www.testriq.com/blog/post/how-does-validation-optimization-improve-web-application-quality" aria-label="Share on Instagram">
                                <FaInstagram className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 hover:text-blue-600" />
                            </Link>
                        </div>
                    </div>

                    {/* Related Articles */}
                    <div className="bg-gray-100 p-4 sm:p-6 rounded-lg shadow-md">
                        <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-600">Related Articles</h3>
                        <ul className="space-y-2 text-xs sm:text-sm">
                            {Array(3).fill(null).map((_, index) => (
                                <li key={index}>
                                    <Link href="https://www.testriq.com/blog/post/how-to-test-web-applications" className="flex items-center space-x-3 p-2 hover:bg-gray-200 rounded-lg transition-all duration-200">
                                        <Image
                                            src="/images/automation-testing.webp"
                                            alt="blog-post-image"
                                            width={48}
                                            height={48}
                                            className="rounded-lg object-cover"
                                            sizes="48px"
                                        />
                                        <div>
                                            <p className="font-semibold text-blue-500">What is Software Testing?</p>
                                            <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                                                <span>AI Application Testing</span>
                                                <span>.</span>
                                                <span>3 min read</span>
                                            </div>
                                        </div>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Categories */}
                    <div className="bg-gray-100 p-4 sm:p-6 rounded-lg shadow-md">
                        <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-700">Categories</h3>
                        <ul className="space-y-2 text-xs sm:text-sm">
                            {[
                                { href: "https://www.testriq.com/blog/post/how-to-test-web-applications", text: "AI Application Testing", count: 52 },
                                { href: "https://www.testriq.com/blog/post/what-is-software-testing", text: "Automation Testing Services", count: 80 },
                                { href: "https://www.testriq.com/blog/post/ai-testing-strategies", text: "API Testing", count: 15 },
                                { href: "https://www.testriq.com/blog/post/automation-testing-best-practices", text: "Best Practices", count: 24 },
                                { href: "https://www.testriq.com/blog/post/performance-testing-guide", text: "Career Advice in Software Testing", count: 2 },
                            ].map((category) => (
                                <li key={category.text} className="flex justify-between">
                                    <Link href={category.href} className="text-gray-800 hover:text-blue-600 transition-all duration-150">
                                        {category.text}
                                    </Link>
                                    <span>{category.count}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Popular Tags */}
                    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-bold mb-2 text-gray-700">Popular Tags</h3>
                        <div className="grid grid-cols-2 text-center items-center space-y-2 space-x-2 text-sm">
                            {[
                                "#Automated Testing",
                                "#appium",
                                "#Agile Testing",
                                "#accessibility testing",
                                "#API Testing Tools",
                                "#ai in testing",
                                "#Agile QA",
                                "#API integration testing",
                            ].map((tag) => (
                                <Link
                                    key={tag}
                                    href={`https://www.testriq.com/blog/post/performance-testing-guide`}
                                    className="text-gray-800 bg-gray-200 rounded-full hover:bg-blue-600 hover:text-white hover:rounded-full py-1 transition-all ease-in-out duration-200"
                                >
                                    {tag}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </aside>
        </section>
    );
};