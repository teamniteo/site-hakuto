---
title: "GitHub Newbies"
description: "A plain-English guide to Git and GitHub for non-developers using Hakuto with Claude Code."
category: "tips"
order: 4
---

# GitHub Newbies

You don't need to know Git to use Hakuto. Claude Code handles all the version control for you — just describe what you want in plain English.

## Key concepts

### Commits

A commit is a saved snapshot of your changes. Think of it like hitting "Save" in a document, but with a short note describing what changed. Every commit is permanent and can be revisited or undone later.

### Branches

A branch is a separate copy of your site where you can make changes without affecting the live version. Your main branch (`main`) is what's published. When you create a new branch, you can experiment freely — nothing goes live until you merge it back.

### Pull Requests (PRs)

A Pull Request is how you propose merging a branch into `main`. When you open a PR, Cloudflare automatically creates a preview URL so you can see exactly what the site will look like before it goes live. If everything looks good, you merge. If not, you keep working on the branch.

## Common tasks

### Save your changes

```
Commit my changes with a descriptive message.
```

### Push to GitHub

```
Push my changes to GitHub.
```

### Open a Pull Request

```
Open a PR for these changes.
```

Cloudflare will automatically create a preview URL on the PR so you can see your changes live before merging.

### See what changed recently

```
What changed in the last 3 commits?
```

### Undo the last commit

```
Undo my last commit but keep the files.
```

### Undo a commit that's already live

```
Revert the commit that broke the footer.
```

Claude will create a new commit that undoes the changes — safe for shared branches.

### Work on a separate branch

```
Create a new branch called "redesign" and switch to it.
```

When you're done, ask Claude to open a PR to merge it back.

## GitHub settings to know about

### Protect your main branch

Go to your repository on GitHub → **Settings** → **Branches** → **Add branch protection rule**. Set the branch name to `main` and enable:

- **Require a pull request before merging** — prevents accidental direct pushes
- **Require status checks** — ensures Cloudflare builds pass before merging

This means all changes go through PRs, giving you a preview URL to check before anything goes live.

### Share access with collaborators

Go to **Settings** → **Collaborators** → **Add people**. Give them "Write" access so they can push branches and create PRs.
