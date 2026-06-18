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

3. **Image Placeholders & Instructions**:
   - Insert placeholders for 2-3 images directly inside the MDX code using valid JSX comments (e.g., `{/* ![Description](/images/filename.jpg) */}`). **Do not use HTML comments (`<!-- -->`) as they will break the MDX compiler.**
   - In the chat, explicitly tell the user exactly what images to add, the exact paths and filenames to use (saved in `public/images/`), and provide visual recommendations for what the image should look like to maximize impact and authority.
