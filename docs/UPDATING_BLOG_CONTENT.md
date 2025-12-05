# Updating Blog Content - Guide

## Overview

The marketing site uses **static site generation** with Sanity CMS as the content source. This means:
- ✅ Blog content is managed in Sanity Studio
- ✅ Changes require rebuilding the site to appear live
- ✅ Automatic deployments happen on every push to `main` branch

---

## How to Update Blog Content

### Option 1: Edit in Sanity Studio (Recommended)

1. **Access Sanity Studio**
   - URL: https://careerlead-cms.sanity.studio/
   - Navigate to: Blog Posts

2. **Edit Content**
   - Click on the blog post you want to edit
   - Make your changes in the rich text editor
   - Click "Publish" when done

3. **Trigger Deployment**
   Since the site is statically generated, you need to rebuild it:

   **Method A: Empty Commit (Fastest)**
   ```bash
   git commit --allow-empty -m "chore: trigger rebuild for blog updates"
   git push origin main
   ```

   **Method B: Update a Timestamp File**
   ```bash
   echo "$(date)" > .last-build
   git add .last-build
   git commit -m "chore: trigger rebuild for blog updates"
   git push origin main
   ```

4. **Wait for Deployment**
   - GitHub Actions will automatically build and deploy
   - Takes ~3-5 minutes
   - Check: https://github.com/GodfredApps/CareerLeadAI3.0-site/actions

5. **Verify Changes**
   - Visit: https://careerlead.ai/blog/
   - Your changes should now be live!

---

### Option 2: Re-import from Markdown Files

If you need to make major changes or re-import all posts:

1. **Edit Markdown Files**
   - Location: `content/blog-articles/*.md`
   - Make your changes

2. **Run Import Script**
   ```bash
   NEXT_PUBLIC_SANITY_PROJECT_ID=7tw53zjn \
   NEXT_PUBLIC_SANITY_DATASET=production \
   SANITY_API_TOKEN=sk8pK6zg1K7Pk0ujBMJbRYNqi43PiH0GEAB0kbXhZcDGL2iJTfeVJxCEUMbFPdKGF6tfDxTB2i9EHju6e66YQg89JnG5dZDV3YgHpy7f4uTOvoA74F11l1sZAfXrkYfUmaKjfTDQiPTYLp5izG5toXK9LkOqjCOYVlUmzn39S6EwVnRP4bW9 \
   npm run import-blog
   ```

3. **Commit and Deploy**
   ```bash
   git add .
   git commit -m "content: update blog posts"
   git push origin main
   ```

---

## Why Changes Don't Appear Immediately

**Static Site Generation (SSG)** means:
- The site is built once and served as static HTML
- Content is fetched from Sanity during build time
- Changes in Sanity are NOT reflected until a rebuild

**Benefits:**
- ⚡ Extremely fast page loads
- 💰 Lower hosting costs
- 🔒 Better security (no database queries at runtime)
- 📈 Better SEO (fully pre-rendered pages)

**Trade-off:**
- Content updates require a rebuild
- Takes 3-5 minutes to go live

---

## Troubleshooting

### "My changes aren't showing up"

1. **Check Sanity Studio**
   - Did you click "Publish" (not just Save Draft)?
   - Verify the content shows correctly in Studio

2. **Check GitHub Actions**
   - Go to: https://github.com/GodfredApps/CareerLeadAI3.0-site/actions
   - Is the latest workflow running/completed?
   - Any errors?

3. **Clear Browser Cache**
   - Hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
   - Try incognito/private mode

4. **Verify Deployment**
   - Latest commit on main should trigger deployment
   - Check Firebase Hosting: https://careerlead.ai/blog/

### "Import script failed"

Common issues:

1. **Environment variables missing**
   ```bash
   # Make sure these are set:
   echo $NEXT_PUBLIC_SANITY_PROJECT_ID  # Should be: 7tw53zjn
   echo $NEXT_PUBLIC_SANITY_DATASET     # Should be: production
   echo $SANITY_API_TOKEN               # Should be: sk8pK6zg...
   ```

2. **Markdown file not found**
   - Check file exists in `content/blog-articles/`
   - Verify filename matches in `scripts/import-blog-posts-final.ts`

3. **Sanity API error**
   - Check API token is valid
   - Verify project ID and dataset are correct

---

## Best Practices

### When to Use Sanity Studio
- ✅ Small text edits
- ✅ Typo fixes
- ✅ Updating statistics or numbers
- ✅ Adding/removing paragraphs
- ✅ Changing headings

### When to Use Markdown Re-import
- ✅ Major content rewrites
- ✅ Adding new blog posts
- ✅ Restructuring entire articles
- ✅ Batch updates to multiple posts

### Content Update Workflow

1. **Make changes in Sanity Studio**
2. **Trigger rebuild via empty commit**
3. **Wait 3-5 minutes**
4. **Verify on production site**

---

## Automated Deployments (Future Enhancement)

To make updates instant without manual rebuilds, you could set up:

### Option A: Sanity Webhook → GitHub Actions
1. Create webhook in Sanity Studio
2. Configure to trigger GitHub workflow on publish
3. Automatic rebuild when content changes

### Option B: Incremental Static Regeneration (ISR)
1. Remove `output: 'export'` from `next.config.mjs`
2. Add `revalidate` to page queries
3. Deploy to Vercel or similar platform

### Option C: Preview Mode
1. Add draft/preview functionality
2. See changes before publishing
3. Publish triggers rebuild

**Note:** These require infrastructure changes and are not currently implemented.

---

## Quick Reference

### Update Blog Post
1. Edit in Sanity Studio → Publish
2. `git commit --allow-empty -m "trigger rebuild"`
3. `git push origin main`
4. Wait 3-5 minutes
5. Check https://careerlead.ai/blog/

### Add New Blog Post
1. Add markdown to `content/blog-articles/new-post.md`
2. Update `scripts/import-blog-posts-final.ts` with metadata
3. Run `npm run import-blog`
4. Commit and push
5. Wait for deployment

### Emergency Rollback
If something goes wrong:
```bash
git revert HEAD
git push origin main
```

---

## Contact

For issues or questions:
- Check GitHub Actions logs
- Review Sanity Studio publish history
- Contact: [Your team contact info]

**Last Updated:** December 5, 2025
