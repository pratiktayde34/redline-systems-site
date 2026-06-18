# Rule: Writing and Formatting MDX Articles

When the user asks to add a new blog post or article and provides content or a topic, follow this streamlined workflow:

1. **Content Generation & Depth**: 
   - Expand the provided content significantly. Aim for extensive, in-depth technical coverage (e.g., explaining underlying architecture, math, bottlenecks).
   - Write in a highly readable, premium blog-post style (short paragraphs, bullet points, structured headers).
   - **Do not use AI language artifacts** (like excessive em-dashes, generic AI intros/outros). Keep it sounding human, professional, and authoritative.

2. **MDX Formatting**:
   - Save the article directly into the `/src/content/resources/` directory.
   - Name the file using a lowercase slug with hyphens (e.g., `topic-name.mdx`).
   - Include the correct YAML frontmatter: `title`, `description`, `date`, `category`, `coverImage` (pointing to `/images/...`), `seoTitle`, and `seoDescription`.

3. **Images & Cover Art**:
   - Always specify the `coverImage` in the YAML frontmatter.
   - Only insert additional images into the body of the article if they are **absolutely necessary** to understand a complex technical topic (e.g., an architecture diagram or complex topology chart). Do not add images just for visual flair or "for the sake of adding images."
   - When inserting a necessary body image, use standard markdown syntax (e.g., `![Description](/images/filename.jpg)`). Do NOT comment out the image tag itself.
   - In the chat, explicitly list all required images (the cover image, plus any strictly necessary diagrams), their exact paths (`public/images/`), and provide a visual recommendation for what they should look like to maximize impact and authority.
