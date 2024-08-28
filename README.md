# Streamify Analytics Dashboard

![Streamify Preview](./src/assets/streamify-preview.png)

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Folder Structure](#folder-structure)
- [Setup](#setup)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Project](#running-the-project)
  - [Running Tests](#running-tests)
- [Usage](#usage)
  - [Development Server](#development-server)
  - [Building for Production](#building-for-production)
- [Testing](#testing)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Introduction

Streamify is a comprehensive analytics dashboard designed to provide insightful views on user metrics and content performance. It offers detailed data visualizations that help users track growth, revenue, and streaming metrics effortlessly.

## Features

- **User Growth Metrics:** Track growth and engagement with total and active user metrics over time.
- **Revenue Distribution:** Detailed view of revenue streams from subscriptions and ads.
- **Top Streamed Songs:** Insights into the most streamed songs over a specific period.
- **Responsive Design:** A seamless experience across all devices.
- **Skeleton Loading:** Smooth transitions with skeleton loaders while data is being fetched.
- **Context API with Memoization:** Efficient state management using React's Context API and memoization techniques.
- **Custom Hooks:** Simplified data fetching and state management.

## Folder Structure

```plaintext
src/
├── assets              # Static assets like images and fonts
├── components          # Reusable components
│   ├── charts          # Chart-specific components
│   │   ├── UserActivityChart.tsx
│   │   ├── TopStreamedSongsBarChart.tsx
│   │   ├── RevenueDistributionChart.tsx
│   ├── dataTable       # Table-specific components
│   │   ├── DataTable.tsx
│   │   ├── columns.ts
│   ├── ui              # General UI components
│   │   ├── Skeleton.tsx
│   │   ├── MetricCard.tsx
│   │   ├── Toggle.tsx
│   ├── hoc             # Higher-Order Components
│   │   ├── withSkeletonLoading.tsx
│   ├── KeyMetrics.tsx
├── context             # Context providers for global states
│   ├── AnalyticsDataContext.tsx
├── data                # Data files and mock data
│   ├── data.ts
├── hooks               # Custom hooks
│   ├── useFetchData.ts
├── theme               # Theming and styles
│   ├── index.css
├── App.tsx             # Root component of the app
├── main.tsx            # Entry point of the application
├── vite-env.d.ts       # TypeScript environment declaration for Vite
```
