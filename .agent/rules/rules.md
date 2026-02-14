# Global Rules

1. **Tech Stack Adherence**:
   - Use Astro for pages and layout.
   - Use React for interactive components (Charts, Tables).
   - Use Tailwind CSS for styling.

2. **Data Handling**:
   - All data must be fetched dynamically from the configured GitHub repositories.
   - Use `src/services/data.ts` for all API calls.

3. **Code Style**:
   - Use TypeScript for all logic.
   - components should be functional and typed.
   - Use `const` over `let/var`.

4. **Git & Deployment**:
   - Commits should be meaningful.
   - Deployment is automated via GitHub Actions to GitHub Pages.
