# Marketing Site Branching Strategy

## Overview

This document defines the branching strategy, git workflow, and development practices for the CareerLead AI Marketing Site.

**Repository:** https://github.com/GodfredApps/CareerLeadAI3.0-site

---

## Current State

**Active Branches:**
- `main` ✅ (production)

**Status:** Simplified single-branch workflow
**Team Size:** Solo developer / Small team
**Recommended for:** Fast iteration, small changes

---

## Branch Structure

### Primary Branches

| Branch | Purpose | Protection | Auto-Deploy | Lifetime |
|--------|---------|------------|-------------|----------|
| `main` | Production-ready code | Protected | Yes → Firebase Hosting Live | Permanent |
| `develop` | Staging/integration branch | Optional | Yes → Firebase Hosting Staging | Permanent (create when needed) |

### Supporting Branches

| Branch Pattern | Purpose | Created From | Merged To | Lifetime | Deployment |
|----------------|---------|--------------|-----------|----------|------------|
| `feature/*` | New features | `main` or `develop` | `main` or `develop` | Temporary | Preview channel (PR only) |
| `fix/*` | Bug fixes | `main` | `main` | Temporary | Preview channel (PR only) |
| `hotfix/*` | Urgent production fixes | `main` | `main` | Temporary | Preview channel (PR only) |
| `docs/*` | Documentation updates | `main` | `main` | Temporary | Preview channel (PR only) |

---

## Branch to Environment Mapping

```
┌─────────────────────────────────────────────────────────┐
│                  Branch → Environment                    │
└─────────────────────────────────────────────────────────┘

main
  └─> https://careerlead.ai (Production)
      https://careercompass-ai-6ci2q.web.app

develop (optional)
  └─> https://careercompass-ai-6ci2q--staging.web.app (Staging)

feature/*, fix/*, hotfix/* (via Pull Request)
  └─> https://careercompass-ai-6ci2q--pr-{number}.web.app (Preview)
      Expires: 7 days
```

---

## Workflow Options

### Option 1: Simplified (Current ✅)

**Best for:** Solo developers, small teams, fast iteration

```
feature/* ──PR──> main (production)
```

**Workflow:**
1. Create feature branch from `main`
2. Develop and commit changes
3. Open PR to `main`
4. Review preview deployment
5. Merge to `main` → Auto-deploy to production

**Pros:**
- Fast and simple
- Minimal overhead
- Direct to production

**Cons:**
- No staging environment
- Higher risk for production

---

### Option 2: Staging + Production (Recommended for Growth)

**Best for:** Growing teams, need for pre-production testing

```
feature/* ──PR──> develop (staging) ──PR──> main (production)
```

**Setup:**
```bash
# One-time setup: Create develop branch
git checkout main
git pull origin main
git checkout -b develop
git push -u origin develop
```

**Workflow:**
1. Create feature branch from `develop`
2. Open PR to `develop`
3. Merge to `develop` → Auto-deploy to staging
4. Test on staging environment
5. Open PR from `develop` to `main`
6. Merge to `main` → Auto-deploy to production

**Pros:**
- Staging environment for testing
- Lower risk for production
- Better for teams

**Cons:**
- Extra step in workflow
- Slightly slower

---

### Option 3: Full Git Flow (For Large Teams)

**Best for:** Large teams, multiple releases, strict processes

```
feature/* ──> develop ──> release/* ──> main
                            └──────> develop
hotfix/* ──────────────────────────> main
                                      └──> develop
```

**Not recommended for current team size.**

---

## Branch Naming Conventions

### Format

```
<type>/<description>
```

### Types

| Type | Purpose | Example |
|------|---------|---------|
| `feature/` | New features or enhancements | `feature/pricing-page` |
| `fix/` | Bug fixes | `fix/mobile-nav-overflow` |
| `hotfix/` | Urgent production fixes | `hotfix/broken-cta-link` |
| `docs/` | Documentation only | `docs/update-readme` |
| `refactor/` | Code refactoring | `refactor/component-structure` |
| `perf/` | Performance improvements | `perf/optimize-images` |

### Description Guidelines

- Use kebab-case (lowercase with hyphens)
- Be descriptive but concise
- Max 50 characters
- No ticket/issue numbers in branch name

**Good Examples:**
```
feature/blog-landing-page
fix/footer-responsive-layout
hotfix/broken-signup-link
docs/add-contributing-guide
```

**Bad Examples:**
```
feature/BLOG-123  ❌ (no ticket numbers)
new-feature       ❌ (missing type)
feature/Blog_Page ❌ (wrong case)
fix/fix           ❌ (not descriptive)
```

---

## Commit Message Conventions

### Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

| Type | Description | Example |
|------|-------------|---------|
| `feat` | New feature | `feat(landing): add pricing section` |
| `fix` | Bug fix | `fix(nav): resolve mobile menu overflow` |
| `docs` | Documentation | `docs(readme): update setup instructions` |
| `style` | Code style (formatting, no logic change) | `style(components): fix indentation` |
| `refactor` | Code refactoring | `refactor(utils): simplify validation logic` |
| `perf` | Performance improvement | `perf(images): add lazy loading` |
| `test` | Adding tests | `test(components): add navbar tests` |
| `chore` | Build/tooling changes | `chore(deps): update dependencies` |
| `ci` | CI/CD changes | `ci(workflow): add caching` |

### Scope (Optional)

Indicate which part of the codebase changed:
- `landing`, `nav`, `footer`, `ci`, `deps`, `auth`, `api`

### Subject

- Use imperative mood: "add" not "added" or "adds"
- No period at the end
- Max 50 characters
- Start with lowercase

### Body (Optional)

- Explain what and why, not how
- Wrap at 72 characters
- Separate from subject with blank line

### Footer (Optional)

- Breaking changes: `BREAKING CHANGE: description`
- Issue references: `Closes #123`
- Co-authorship: `Co-Authored-By: Name <email>`

### Examples

**Simple:**
```bash
git commit -m "fix(nav): resolve mobile menu overflow"
```

**With Body:**
```bash
git commit -m "feat(landing): add testimonials section

Added 3 testimonials from Ghana, Nigeria, and Kenya users.
Includes profile images, names, and quotes.

Closes #45"
```

**Auto-generated (via CI/CD):**
```bash
docs: add comprehensive CI/CD pipeline documentation

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>
```

---

## Pull Request Workflow

### Creating a Pull Request

1. **Ensure branch is up to date:**
   ```bash
   git checkout main
   git pull origin main
   git checkout your-feature-branch
   git merge main  # or git rebase main
   ```

2. **Push to remote:**
   ```bash
   git push origin your-feature-branch
   ```

3. **Open PR on GitHub**
   - Go to: https://github.com/GodfredApps/CareerLeadAI3.0-site/pulls
   - Click "New pull request"
   - Select base branch (`main` or `develop`)
   - Select compare branch (your feature branch)
   - Fill out PR template

### PR Title Format

```
<type>: <description>
```

**Examples:**
- `feat: add blog landing page`
- `fix: resolve mobile navigation overflow`
- `docs: update branching strategy guide`

### PR Description Template

```markdown
## Summary
Brief description of what this PR does (1-2 sentences).

## Changes
- Added testimonials section to landing page
- Updated navbar to include blog link
- Fixed responsive layout for mobile

## Testing
- [ ] Tested on desktop (Chrome, Firefox, Safari)
- [ ] Tested on mobile (iOS, Android)
- [ ] Lighthouse score > 90
- [ ] All links working

## Screenshots
[If applicable, add screenshots of UI changes]

## Deployment
Preview URL: [auto-generated by CI]
```

### PR Review Checklist

**Reviewer responsibilities:**
- [ ] Code follows project conventions
- [ ] No hardcoded values (use env vars)
- [ ] Responsive design works on all devices
- [ ] Preview deployment looks correct
- [ ] No console errors
- [ ] Lighthouse score acceptable
- [ ] SEO metadata present (if applicable)

---

## Protected Branch Rules

### Current Configuration

**Branch:** `main`

**Protection Rules:**
- ✅ Require pull request reviews before merging
- ✅ Require status checks to pass before merging
  - Required checks:
    - Quality Checks (ESLint + Build)
- ✅ Require branches to be up to date before merging
- ✅ Include administrators

**How to Update:**
1. Go to: https://github.com/GodfredApps/CareerLeadAI3.0-site/settings/branches
2. Click "Edit" on `main` branch rule
3. Modify settings
4. Save changes

---

## Deployment Process

### Automatic Deployments

| Trigger | Environment | URL | Status Check |
|---------|-------------|-----|--------------|
| Merge to `main` | Production | https://careerlead.ai | Required ✅ |
| Merge to `develop` | Staging | staging-*.web.app | Optional |
| Open PR to `main` or `develop` | Preview | pr-{number}-*.web.app | Required ✅ |

### Manual Deployment (Emergency Only)

**Local build and deploy:**
```bash
# Build locally
npm run export

# Deploy to Firebase
firebase deploy --only hosting
```

**Note:** Prefer using GitHub Actions for all deployments.

---

## Rollback Procedures

### Using Deployment Tags

Every production deployment creates a git tag: `marketing-v{YYYYMMDD-HHMMSS}`

**List all deployment tags:**
```bash
git tag -l "marketing-v*"
```

**Rollback to specific version:**
```bash
# Method 1: Revert via new commit (recommended)
git revert <commit-hash>
git push origin main
# CI will auto-deploy

# Method 2: Reset to tag (use with caution)
git checkout marketing-v20251127-191500
npm run export
firebase deploy --only hosting

# Method 3: Firebase Console
# Go to Firebase Console → Hosting → Click "Rollback"
```

### Rollback Checklist

1. **Identify issue:**
   - What broke?
   - When did it break?
   - Which deployment introduced it?

2. **Choose rollback method:**
   - Quick fix: Hotfix branch
   - Critical: Rollback via Firebase Console
   - Severe: Git revert + redeploy

3. **Execute rollback:**
   - Follow chosen method above
   - Verify rollback successful

4. **Post-mortem:**
   - Document what happened
   - Update tests to prevent recurrence

---

## Code Review Guidelines

### For Authors

**Before opening PR:**
- [ ] Run linter: `npm run lint`
- [ ] Run build: `npm run export`
- [ ] Test locally on multiple devices
- [ ] Write clear PR description
- [ ] Add screenshots for UI changes
- [ ] Link related issues

**During review:**
- [ ] Respond to all comments
- [ ] Make requested changes promptly
- [ ] Re-request review after changes

### For Reviewers

**What to review:**
- [ ] Code quality and conventions
- [ ] No hardcoded values
- [ ] Responsive design
- [ ] SEO metadata
- [ ] Performance (Lighthouse)
- [ ] No console errors

**Review timeline:**
- Within 24 hours for normal PRs
- Within 2 hours for hotfixes

**Approval process:**
- 1 approval required for merge
- Author cannot approve their own PR

---

## Git Commands Cheatsheet

### Daily Workflow

```bash
# Start new feature
git checkout main
git pull origin main
git checkout -b feature/new-landing-page

# Make changes
git add .
git commit -m "feat(landing): add hero section"

# Push to remote
git push origin feature/new-landing-page

# Keep branch updated with main
git checkout main
git pull origin main
git checkout feature/new-landing-page
git merge main

# Delete branch after merge
git branch -d feature/new-landing-page
git push origin --delete feature/new-landing-page
```

### Useful Commands

```bash
# View all branches
git branch -a

# View recent commits
git log --oneline -10

# View deployment tags
git tag -l "marketing-v*"

# Undo last commit (keep changes)
git reset --soft HEAD~1

# Undo last commit (discard changes)
git reset --hard HEAD~1

# Stash changes temporarily
git stash
git stash pop

# View diff before commit
git diff

# View staged changes
git diff --staged
```

---

## Migration Path

### Current: Simplified (main-only)

**You are here:**
```
feature/* ──PR──> main
```

**When to evolve:** When team grows or deployment issues increase

---

### Next: Add Staging

**Setup Instructions:**

1. **Create develop branch:**
   ```bash
   git checkout main
   git pull origin main
   git checkout -b develop
   git push -u origin develop
   ```

2. **Update team workflow:**
   - New feature branches created from `develop`
   - PRs go to `develop` first
   - Test on staging
   - Then PR from `develop` to `main`

3. **Add branch protection:**
   - Protect `develop` branch
   - Require status checks

4. **Update documentation:**
   - Update this guide
   - Communicate to team

---

## FAQs

### Q: Do I need a develop branch?
**A:** Not immediately. Start with main-only. Add develop when:
- Team has 3+ developers
- You need a staging environment
- Production bugs becoming frequent

### Q: How do I name my branches?
**A:** Use `<type>/<description>`:
- `feature/pricing-page`
- `fix/mobile-nav`
- `docs/update-readme`

### Q: Can I push directly to main?
**A:** No. Main is protected. All changes must go through Pull Requests.

### Q: What if CI fails on my PR?
**A:**
1. Check GitHub Actions logs
2. Fix the issue locally
3. Push new commit to same branch
4. CI will re-run automatically

### Q: How do I rollback a bad deployment?
**A:** See "Rollback Procedures" section above. Quickest method is Firebase Console rollback.

### Q: Should I squash commits before merging?
**A:** GitHub will offer squash merge option. Use it if you have many small commits. Keep meaningful commits separate.

### Q: Can I merge my own PR?
**A:** Technically yes (you're admin), but best practice is to get review from another developer or wait 24h for self-review.

---

## Best Practices

### Do's ✅

- ✅ Always create a feature branch for new work
- ✅ Write clear, descriptive commit messages
- ✅ Test locally before pushing
- ✅ Keep branches up to date with main
- ✅ Delete branches after merging
- ✅ Use meaningful branch names
- ✅ Review your own code before requesting review
- ✅ Respond to PR comments promptly

### Don'ts ❌

- ❌ Push directly to main
- ❌ Commit generated files (.next/, out/, node_modules/)
- ❌ Use vague commit messages ("fix stuff", "update")
- ❌ Leave stale branches unmerged for weeks
- ❌ Force push to shared branches
- ❌ Commit sensitive data (.env with real secrets)
- ❌ Ignore CI failures

---

## Team Communication

### When to notify team:

**Slack/Discord (if applicable):**
- Starting work on major feature
- Hotfix deployed to production
- Breaking changes in PR
- CI/CD issues affecting everyone

**GitHub:**
- Tag relevant people in PR for review
- Comment on issues when starting work
- Update issue status

---

## Resources

- **Repository:** https://github.com/GodfredApps/CareerLeadAI3.0-site
- **CI/CD Docs:** `/docs/CI_CD_PIPELINE.md`
- **Deployment Logs:** GitHub Actions tab
- **Firebase Console:** https://console.firebase.google.com/project/careercompass-ai-6ci2q

---

**Last Updated:** 2025-11-27
**Current Strategy:** Simplified (main-only)
**Next Review:** When team grows or issues arise
