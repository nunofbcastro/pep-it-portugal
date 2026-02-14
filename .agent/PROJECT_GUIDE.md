# Project Guide: PEP IT Portugal

This document serves as the primary source of truth for the **PEP IT Portugal** project.

## 🎯 Overview
**PEP IT Portugal** is a community-driven platform created by **PorqueEUprogramo** to analyze the IT market in Portugal. It aggregates real data on salaries, companies, technologies, and work modes.

## 🎨 Design System

### Colors
Defined in `tailwind.config.mjs` under `theme.extend.colors.pep`:
- **Red (Primary)**: `#E63946`
- **Dark Blue (Secondary)**: `#1D3557` 
- **Light Blue**: `#457B9D`
- **Cyan**: `#A8DADC`
- **Light**: `#F1FAEE`

### Typography
- **Font Family**: Inter (Google Fonts)
- **Framework**: Tailwind CSS

## 🛠 Tech Stack
- **Framework**: Astro (v5+)
- **UI Library**: React (v19)
- **Styling**: Tailwind CSS
- **Charts**: Recharts
- **Icons**: Lucide React / Heroicons (via Astro)
- **Language**: TypeScript

## 📊 Data Architecture
The project fetches **markdown tables** directly from GitHub repositories maintained by the community.

### Data Sources
All data sources are public repositories under the `porqueeuprogramo` organization.
Base URL: `https://raw.githubusercontent.com/porqueeuprogramo`

| Content Type | Repository | Endpoint (Env Var) |
| :--- | :--- | :--- |
| **Companies** | `pep-it-portugal-companies` | `PUBLIC_URL_COMPANIES` |
| **Courses** | `pep-it-portugal-courses` | `PUBLIC_URL_COURSES` |
| **Salaries** | `pep-it-portugal-salaries` | `PUBLIC_URL_SALARIES` |
| **Frameworks** | `pep-it-portugal-frameworks` | `PUBLIC_URL_FRAMEWORKS` |
| **ChatGPT** | `pep-it-portugal-chatgpt` | `PUBLIC_URL_CHATGPT` |
| **Work Mode** | `pep-it-portugal-work-mode` | `PUBLIC_URL_WORK_MODE` |
| **First Job** | `pep-it-portugal-first-job` | `PUBLIC_URL_FIRST_JOB` |

### Data Parsing
- **Service**: `src/services/data.ts` uses Axios to fetch raw markdown.
- **Utility**: `src/utils/Markdown.ts` parses markdown tables into JSON objects.

## 🌍 Internationalization (i18n)
- **Default Language**: Portuguese (`pt`)
- **Supported Languages**: `pt`, `en`
- **Implementation**: Custom lightweight solution in `src/i18n/`.
- **Usage**:
  ```ts
  import { useTranslations, getLangFromUrl } from '../i18n/utils';
  const t = useTranslations(lang);
  t('key')
  ```

## 🚀 Deployment
- **Platform**: GitHub Pages
- **Workflow**: `.github/workflows/deploy.yml`
- **Node Version**: v20 (defined in `.nvmrc`)

## 🤝 Community
- **Name**: PorqueEUprogramo
- **Twitch**: [pixelperfec](https://twitch.tv/porqueeuprogramo)
- **GitHub**: [porqueeuprogramo](https://github.com/porqueeuprogramo)

## 规则 (Rules)
1. **Always** check `package.json` for dependency versions.
2. **Never** hardcode data; fetch from the services.
3. **Prefer** Tailwind utility classes over custom CSS.
4. **Maintain** the premium aesthetic (dark mode, clean typography).
