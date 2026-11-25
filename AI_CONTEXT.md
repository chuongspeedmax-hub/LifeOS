# LifeOS – AI Development Context

> This document is the primary context file for AI coding assistants working on LifeOS.
> Read this file before inspecting, modifying or creating project code.

## 1. Project Overview

- Project name: LifeOS
- Description: Personal Life Management & Knowledge System
- Current version: 0.1.0
- Current phase: GĐ1 – UI Shell
- Primary language: Vietnamese
- Repository: https://github.com/chuongspeedmax-hub/LifeOS
- Repository visibility: Private
- Main branch: main

LifeOS is a modular personal life management platform. It helps users organize personal information, learning, knowledge, family, relationships, finances, plans and work in one system.

## 2. Product Vision

Build a flexible and extensible system where users can:

- Manage their personal life in one place.
- Create and participate in multiple workspaces.
- Keep private information separate from shared information.
- Organize information using modules, folders, pages and tables.
- Create custom fields, categories, forms and views.
- Connect related information through bidirectional links.
- Explore relationships through knowledge graphs and mindmaps.
- Use AI assistance without losing control over important data.

## 3. Main Modules

Initial modules:

1. Dashboard and overview.
2. Personal information and habits.
3. Health and personal goals.
4. Learning and knowledge.
5. Notes and mindmaps.
6. Family and shared activities.
7. Friends and relationships.
8. Finance, expenses and assets.
9. Work, projects and tasks.
10. Calendar and plans.

Users should eventually be able to create their own modules and customize their structure.

## 4. Workspace Model

LifeOS combines two workspace types:

### Personal Workspace
- Belongs to an individual user.
- Contains private personal information.
- Must not expose private data to other workspaces without permission.

### Shared Workspace
- Supports multiple members.
- Examples: family, friends and organizations.
- Members can view and edit shared content according to workspace permissions.
- Private information must remain protected.

## 5. UX and Design Decisions

- Vietnamese-first interface.
- Desktop-first, responsive across screen sizes.
- Compact interface by default.
- Sidebar style: Style 3 – auto-expand.
- Sidebar starts collapsed and expands on hover.
- User can pin the sidebar open.
- Clicking a category expands or collapses its subitems.
- Dashboard is the central starting point.
- Utilities and secondary actions should appear when needed.
- Avoid unnecessary visual complexity.

The user has approved the current initial interface. Do not redesign it without explicit approval.

## 6. Technology Stack

Confirmed:

- Next.js 16.4.6
- React (version managed by package dependencies)
- TypeScript
- Tailwind CSS
- ESLint
- Next.js App Router
- npm
- Git and GitHub

Development environment:

- macOS Sonoma 14.8.4
- Git 2.39.5
- Node.js 26.13.1
- npm 11.20.0

Not configured yet:

- Database
- Supabase
- Authentication
- Vercel deployment
- Production storage

Do not assume these services are already configured.

## 7. Current Repository Structure

Confirmed application files:

- src/app/page.tsx – main LifeOS interface and dashboard.
- src/app/layout.tsx – root layout, metadata and Vietnamese document language.
- src/app/globals.css – global styles.
- src/app/page.backup.tsx – local backup of the original starter page; excluded from Git.
- public/ – static assets.
- package.json – project scripts and dependencies.
- package-lock.json – dependency lockfile.
- .gitignore – excluded files and folders.

Other directories and architecture proposals must be inspected before assuming they exist.

## 8. Current Implementation Status

Implemented:

- Initial Next.js application.
- Initial LifeOS dashboard.
- Auto-expanding sidebar.
- Expandable sidebar categories.
- Main module cards.
- Vietnamese document language.
- Application metadata.
- Local Git repository and private GitHub repository.
- Initial ESLint check.
- Successful production build.

Partially implemented or placeholders:

- Global search field exists but does not filter content.
- Create action is a placeholder.
- Settings action is a placeholder.
- Module cards and sidebar navigation are not yet backed by complete data pages.

Not implemented:

- Database integration.
- Authentication.
- Real user accounts.
- Personal and shared workspace data operations.
- CRUD functionality.
- Custom modules and fields.
- Complete search.
- Finance data management.
- Knowledge graph and mindmap.
- AI assistant.
- Production deployment.

## 9. Development Roadmap

- GĐ0: Product definition, architecture planning, documentation and development environment.
- GĐ1: UI shell, sidebar, dashboard, theme and core interface.
- GĐ2: Database, CRUD, pages, folders, custom fields, links and search.
- GĐ3: Authentication, personal/shared workspaces, members and permissions.
- GĐ4: Finance and asset management.
- GĐ5: Knowledge management, graph and mindmap.
- GĐ6: AI assistant and automation.
- GĐ7: Testing, security, responsive validation, performance and deployment.

Current work remains in GĐ1. Do not skip technical validation before beginning database and authentication work.

## 10. Git and GitHub Rules

- Main branch: main.
- Remote name: origin.
- GitHub repository is private.
- Commit messages should describe the actual changes.
- Never commit passwords, API keys, tokens or environment secrets.
- Inspect git status before committing.
- Review changes before pushing.
- Keep the local repository synchronized with GitHub.

The local backup file src/app/page.backup.tsx is excluded through .gitignore.

## 11. Mandatory AI Working Rules

1. Read this file before starting work.
2. Inspect the existing code before modifying it.
3. Understand the current implementation before proposing changes.
4. Never overwrite or delete existing code without explicit user confirmation.
5. Do not invent files, directories, dependencies or implemented features.
6. Explain technical decisions in beginner-friendly Vietnamese.
7. Work in small, verifiable steps.
8. Give exact Terminal commands when the user needs to execute them.
9. Wait for user output before proceeding when a step requires verification.
10. Test changes before declaring them complete.
11. Do not introduce unnecessary dependencies.
12. Preserve the approved UI direction unless the user requests a redesign.
13. Ask for confirmation before important architectural changes.
14. Never claim that an operation succeeded before verifying its result.

## 12. Documentation Maintenance

After meaningful development work, review and update:

- PROGRESS.md – current project status.
- TASKS.md – completed, active and pending tasks.
- CHANGELOG.md – meaningful project changes.
- AI_CONTEXT.md – architecture, decisions and current implementation context.

Keep all documentation consistent with the actual repository.

All Markdown files must be saved as plain-text UTF-8 Markdown, not RTF.

## 13. Current Next Step

Finish validating and correcting project documentation.

Then:

1. Inspect the repository state.
2. Verify Markdown files are plain text.
3. Run appropriate lint and production build checks.
4. Commit and push verified documentation changes.
5. Continue GĐ1 without unnecessary UI redesign.

## 14. Important Principle

LifeOS should be developed as a long-term, modular and maintainable product.

Prioritize data integrity, privacy, security, clear architecture and usability over adding features quickly.
