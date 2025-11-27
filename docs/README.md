# Marketing Site Documentation

Welcome to the CareerLead AI Marketing Site documentation! This folder contains comprehensive guides for creating and maintaining feature landing pages.

## 📚 Documentation Files

### 1. **FEATURE_LANDING_PAGES.md** (Comprehensive Guide)

**500+ lines** of detailed documentation covering:

- Complete architecture explanation
- Interactive carousel system breakdown
- SEO best practices
- Design guidelines and patterns
- Animation techniques
- Code examples and templates
- Testing and maintenance procedures

**Read this when:**

- Learning how the system works
- Understanding carousel patterns
- Implementing complex animations
- Optimizing for SEO
- Troubleshooting issues

### 2. **FEATURE_PAGE_TEMPLATE.md** (Quick-Start Template)

**Copy-paste ready template** for spinning up new feature pages in minutes:

- Complete file structure
- Ready-to-use code templates
- Placeholder markers for easy customization
- Step-by-step setup guide
- Testing checklist

**Use this when:**

- Creating a new feature landing page
- Need a quick starting point
- Want working code immediately

## 🚀 Quick Start

### To Create a New Feature Page:

```bash
# 1. Create the directory
cd marketing-site/app
mkdir [your-feature-name]

# 2. Copy template code from FEATURE_PAGE_TEMPLATE.md
# 3. Replace all [placeholders] with your feature details
# 4. Customize the carousel slides
# 5. Create the Open Graph image (1200x630px)
# 6. Test locally
npm run dev

# 7. Deploy
npm run build
firebase deploy --only hosting:marketing-site
```

## 📖 What's Included

### Current Implementation

**What's New Page** (`/whats-new`)

- ✅ Live and functional
- 📍 Location: `marketing-site/app/whats-new/`
- 🎨 Features: Interactive carousel with 4 demo slides
- 🎯 Showcases: Resume Review feature

### Carousel System Features

The interactive carousel is the centerpiece of feature pages:

1. **Auto-play System** - 6-second intervals with smart pause
2. **4 Slide Types** - Upload → Processing → Results → Action
3. **Interactive Demos** - Mini versions of actual platform UI
4. **Smooth Animations** - 60fps with Framer Motion
5. **Full Controls** - Arrows, dots, keyboard, play/pause
6. **Mobile Optimized** - Responsive and touch-friendly

### Design System

- 🎨 Consistent with main platform UI
- 🌗 Full dark mode support
- 📱 Mobile-first responsive design
- ♿ Accessible with ARIA labels
- ⚡ Performance optimized

## 🎯 Typical Use Cases

### Use Case 1: Major Feature Launch

**Example:** Launching "AI Career Coach"

- Create dedicated landing page
- Build 4-slide carousel demo
- Add to main navigation
- Share on social media

**Time:** 2-3 hours with template

### Use Case 2: Feature Update Announcement

**Example:** Resume Review gets new export formats

- Update existing `/whats-new` page
- Add announcement banner
- Update carousel slide 4 (export)

**Time:** 30 minutes

### Use Case 3: Feature Comparison Page

**Example:** "Premium vs Free"

- Create comparison landing page
- Use card layout instead of carousel
- Highlight premium feature benefits

**Time:** 1-2 hours

## 📊 Page Structure

All feature pages follow this structure:

```
┌─────────────────────────────┐
│     Hero Section            │  ← Badge, headline, CTA buttons
│     (Animated background)    │
├─────────────────────────────┤
│     Feature Demo Section    │  ← Text (left) + Carousel (right)
│     (Split layout)          │
├─────────────────────────────┤
│     Detailed Features       │  ← 3-column grid of feature cards
│     (Card grid)             │
├─────────────────────────────┤
│     Final CTA Section       │  ← Convert visitors to users
│     (Gradient background)   │
└─────────────────────────────┘
```

## 🎨 Carousel Slide Patterns

### Pattern 1: Upload/Input

**When to use:** File uploads, form inputs, data entry
**Example:** Resume upload, profile creation
**Key elements:** Drop zone, file card, success state

### Pattern 2: Processing/Loading

**When to use:** AI processing, analysis, computation
**Example:** Resume analysis, path generation
**Key elements:** Spinner, progress bar, status messages

### Pattern 3: Results/Dashboard

**When to use:** Scores, analytics, insights, reports
**Example:** Resume score, career matches
**Key elements:** Animated counter, mini cards, progress bars

### Pattern 4: Action/Export

**When to use:** Downloads, exports, sharing, copying
**Example:** Download report, copy suggestions
**Key elements:** Action buttons, modal preview, success feedback

## 🔧 Technical Architecture

### Server Component Pattern (page.tsx)

```tsx
// Exports metadata for SEO
// Imports client component
// No interactivity
```

### Client Component Pattern (feature-content.tsx)

```tsx
'use client'
// Contains all UI and animations
// Manages state and interactions
// Includes carousel implementation
```

**Why separated?** Next.js requires metadata in server components, but we need client-side JavaScript for animations.

## 📈 SEO Checklist

Every feature page must have:

- [ ] Optimized title (50-60 chars)
- [ ] Meta description (150-160 chars)
- [ ] Keywords (relevant and specific)
- [ ] Open Graph tags (Facebook/LinkedIn)
- [ ] Twitter Card tags
- [ ] Canonical URL
- [ ] Open Graph image (1200x630px)
- [ ] Proper heading hierarchy (H1 → H6)
- [ ] Alt text for all images
- [ ] Mobile-friendly
- [ ] Fast loading (<3s)

## 🎬 Animation Guidelines

### Timing

- Micro-interactions: 0.15s - 0.3s
- Component transitions: 0.3s - 0.5s
- Slide transitions: 0.5s - 0.7s
- Loading states: 2s - 6s

### Best Practices

- Use `transform` and `opacity` (GPU-accelerated)
- Avoid animating `width` and `height`
- Add stagger delays for multiple elements
- Use spring animations for organic feel
- Test on low-end devices

## 📱 Responsive Breakpoints

```tsx
sm: 640px   // Small tablets
md: 768px   // Tablets
lg: 1024px  // Small desktops
xl: 1280px  // Large desktops
```

**Mobile-first approach:** Start with mobile, add `md:` and `lg:` for larger screens

## 🧪 Testing Workflow

Before deploying any feature page:

1. **Functionality** - All interactions work
2. **Performance** - Lighthouse score > 90
3. **Responsive** - Test on mobile, tablet, desktop
4. **Accessibility** - Keyboard nav, screen readers
5. **SEO** - All metadata present and correct
6. **Cross-browser** - Chrome, Firefox, Safari
7. **Dark mode** - Looks good in both themes

## 🚀 Deployment Process

```bash
# 1. Develop locally
npm run dev
# Test at http://localhost:3001/[your-feature]

# 2. Build for production
npm run build
# Fix any build errors

# 3. Deploy to Firebase
firebase deploy --only hosting:marketing-site
# Or deploy to your hosting platform

# 4. Verify deployment
# Visit https://careerlead.ai/[your-feature]
```

## 📝 Maintenance

### When to Update Pages

- **Feature enhancements** - Update carousel demos
- **UI changes** - Align with platform UI updates
- **Performance issues** - Optimize animations
- **SEO improvements** - Update keywords/descriptions
- **User feedback** - Improve clarity or messaging

### Version Control

Use semantic commit messages:

```
feat(marketing): add [feature-name] landing page
fix(marketing): correct carousel timing
update(marketing): refresh screenshots
refactor(marketing): optimize carousel
```

## 🎓 Learning Path

### Beginner

1. Read `FEATURE_PAGE_TEMPLATE.md`
2. Copy template and customize
3. Focus on content over animations
4. Use simple slide demos

### Intermediate

1. Read `FEATURE_LANDING_PAGES.md` (Carousel section)
2. Understand animation patterns
3. Create custom slide animations
4. Optimize for performance

### Advanced

1. Read full `FEATURE_LANDING_PAGES.md`
2. Create new animation patterns
3. Optimize SEO strategy
4. A/B test landing pages
5. Contribute back to templates

## 🤝 Contributing

When you discover new patterns or improvements:

1. Document in `FEATURE_LANDING_PAGES.md`
2. Add example to `FEATURE_PAGE_TEMPLATE.md`
3. Share insights with team
4. Update this README if needed

## 🆘 Getting Help

**Common Issues:**

| Issue                     | Solution                           | Doc Reference      |
| ------------------------- | ---------------------------------- | ------------------ |
| Carousel not auto-playing | Check `isAutoPlaying` state        | Animation Patterns |
| Animations janky          | Use `transform` not `width/height` | Performance Tips   |
| Dark mode broken          | Use semantic colors                | Design Guidelines  |
| SEO not working           | Verify metadata in `page.tsx`      | SEO Best Practices |
| Build failing             | Check for client/server separation | Architecture       |

**For detailed solutions, see:** `FEATURE_LANDING_PAGES.md` → Maintenance & Updates

## 📞 Contact

For questions about feature landing pages:

- Review documentation first
- Check existing implementations (`/whats-new`)
- Ask in development channel
- Update docs with solutions found

## 🎉 Success Metrics

Track these metrics for each landing page:

- **Page views** - Traffic volume
- **Time on page** - Engagement level
- **Scroll depth** - Content consumption
- **CTA clicks** - Conversion intent
- **Carousel interactions** - Demo engagement
- **Bounce rate** - Page quality
- **Conversion rate** - Ultimate goal

**Set up tracking in Google Analytics 4**

---

## 📂 File Structure

```
marketing-site/
├── app/
│   ├── whats-new/
│   │   ├── page.tsx              # Example implementation
│   │   └── whats-new-content.tsx # Example implementation
│   └── [your-feature]/           # Your new pages go here
├── docs/
│   ├── README.md                 # This file
│   ├── FEATURE_LANDING_PAGES.md  # Comprehensive guide
│   └── FEATURE_PAGE_TEMPLATE.md  # Quick-start template
└── components/
    ├── navbar.tsx                # Add nav links here
    └── ui/                       # Reusable UI components
```

---

**Last Updated:** 2025-11-27
**Version:** 1.2
**Status:** ✅ Production Ready

Happy building! 🚀
