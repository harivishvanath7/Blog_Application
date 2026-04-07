export const generateEmailTemplate = (title, content, slug, token) => {
  const previewText = content.replace(/<[^>]+>/g, "").slice(0, 200);

  const words = previewText.split(" ").length;
  const readingTime = Math.ceil(words / 200);

  return `
    <div style="font-family: Arial, sans-serif; background:#f4f4f4; padding:20px;">
      
      <div style="max-width:600px; margin:auto; background:white; padding:20px; border-radius:10px;">
        
        <!-- Header -->
        <h2 style="text-align:center; color:#1A3D64;">
          DevBlog
        </h2>

        <!-- Title -->
        <h1 style="font-size:24px; color:#0C2B4E;">
          ${title}
        </h1>

        <!-- Preview -->
        <p style="color:#555; line-height:1.6;">
          ${previewText}...
        </p>

        <!-- Button -->
        <div style="text-align:center; margin:30px 0;">
          <a href="http://localhost:5173/blog/${slug}" 
             style="
               background:#1A3D64;
               color:white;
               padding:12px 20px;
               text-decoration:none;
               border-radius:5px;
               display:inline-block;
             ">
            Read Full Article
          </a>
        </div>

        <p style="color:#888; font-size:14px;">
            ${readingTime} min read
        </p>

        <!-- Footer -->
        <hr style="border:none; border-top:1px solid #eee;" />

        <p style="font-size:12px; color:#999; text-align:center;">
          You received this email because you subscribed to DevBlog.
        </p>

        <p style="font-size:12px; color:#999; text-align:center;">
          If you no longer want to receive these emails,
          <a href="http://localhost:5000/api/newsletter/unsubscribe/${token}">
            unsubscribe here
          </a>
        </p>

      </div>
    </div>
  `;
};
