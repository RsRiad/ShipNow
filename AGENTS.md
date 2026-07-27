**Please read this Full document , before you begin.**

Every requirement in this document forms part of the evaluation. A number of submissions are declined each cycle not because of coding ability, but because a requirement stated here was overlooked. Attention to detail is a core skill for this role, and this assignment assesses it deliberately.

If you cannot access the Figma file or the submission form, contact us immediately rather than waiting until the deadline.

# 1\. Overview

ShipNow is a logistics and shipment management platform. You have been provided with a complete, high-fidelity Figma design covering seven screens, each designed at three breakpoints. Your task is to implement that design as a responsive frontend application using React or Next.js.

There is no backend component to this assignment. All data is static mock data that you define within the project. You are not required to build, call, or integrate any API.

This is a user interface implementation exercise. We are assessing:

- How accurately you reproduce a design, including its responsive behaviour
- How you structure a React codebase and approach reusable components
- Whether you can follow a written specification end to end

# 2\. Technology Requirements

| **Area**   | **Requirement**                                                                              |
| ---------- | -------------------------------------------------------------------------------------------- |
| Framework  | React / Next.js. **Next.js** with the App Router is preferred.                               |
| ---        | ---                                                                                          |
| Language   | JavaScript or TypeScript. **TypeScript** is preferred.                                       |
| ---        | ---                                                                                          |
| Styling    | Tailwind CSS, CSS Modules, SCSS, or Styled Components. Choose one and apply it consistently. |
| ---        | ---                                                                                          |
| Charts     | Recharts, Chart.js, ApexCharts, or an equivalent library.                                    |
| ---        | ---                                                                                          |
| Backend    | No API calls, server routes, or database.                                                    |
| ---        | ---                                                                                          |
| Data       | Use Local mock data within the project.                                                      |
| ---        | ---                                                                                          |
| Deployment | Vercel, Netlify, or an equivalent free hosting provider.                                     |
| ---        | ---                                                                                          |

**Not permitted:** pre-styled component libraries such as Material UI, Ant Design, Chakra UI or Bootstrap, as they will prevent an accurate implementation of a custom design. Headless, unstyled libraries such as Radix UI or Headless UI are permitted. Purchased or downloaded dashboard templates may not be used.

# 3\. General Requirements

## 3.1 Design Accuracy

The implementation must match the Figma design exactly, including spacing, typography, layout, component styling, and text content. Do not substitute your own copy, reorder sections, or redesign any part of the interface.

Photographic images are the only assets you may substitute. You may source your own, provided they keep the same position, proportion, and role as those in the design. Everything else, including the logo, every icon, the colour palette, and the typography, must match the Figma file.

## 3.2 Responsiveness

The Figma file contains three frames per screen. All three must be implemented.

| **Breakpoint** | **Width** | **Expected behaviour**                                                       |
| -------------- | --------- | ---------------------------------------------------------------------------- |
| Desktop        | 1440 px   | Full expanded sidebar with labels; multi-column layouts                      |
| ---            | ---       | ---                                                                          |
| Tablet         | 768 px    | Sidebar collapses to a narrow icon-only rail; grids reflow to fewer columns  |
| ---            | ---       | ---                                                                          |
| Mobile         | 375 px    | Sidebar becomes a hamburger drawer; sticky top app bar; single-column layout |
| ---            | ---       | ---                                                                          |

Layouts must also behave correctly between these widths, with no horizontal page scrolling, clipped content, or overlapping elements at any viewport width.

## 3.3 Functional Behaviour

Although there is no backend, the application must not be a static mockup. The following must work against your mock data:

- Navigation between screens, including the mobile drawer
- Tabs, filter chips, and search inputs filtering their lists
- Table column sorting, row selection, and pagination
- Charts rendering from mock data
- Form validation, including the error states shown in the design

## 3.4 Accessibility

Accessibility is not the focus of this assignment, but semantic HTML, labelled form inputs, alternative text on images, and visible keyboard focus states are expected.

# 4\. Screens

There are seven screens. The summaries below outline scope only. The Figma file is the definitive reference for all layout, content, and visual detail.

## 4.1 Login

A split-screen authentication page. Implement client-side validation covering required fields, email format, and password length, together with a working show/hide password control. On successful submission, navigate to the dashboard using a simulated session; no real authentication is required.

## 4.2 Dashboard

The dashboard establishes the application shell used by every screen except Login, comprising the sidebar and the page footer. Build this shell once and reuse it.

Its content combines summary metric cards, bar, grouped bar and donut charts, a live tracking panel, an alerts panel, a recent shipments table, and an activity timeline.

Navigation items without a corresponding screen in this assignment (Analytics, Calendar, Tracking, Fleets, Drivers) should still be rendered and styled, and may route to a placeholder page.

The tracking panel may use a static map image; integration with a mapping SDK is not required.

## 4.3 Shipments - Table View

A page header with breadcrumb and primary action, four summary metric cards, and a toolbar containing status tabs, search, filter, and date-range controls.

The table must support column sorting, row selection, and pagination with a page-size selector.

## 4.4 Shipments - Grid View

The same header and breadcrumb, without the metric cards. The toolbar provides status chips, search, filter, and sort controls.

Shipments are presented as a responsive card grid, with the same pagination behaviour as the table view.

## 4.5 Shipments - View Switcher (Required)

**This requirement is not drawn in the Figma file. Please read it carefully.**

The Figma file contains two separate frames for the Shipments screen. In the product these are not two pages; they are two view modes of the same page.

Implement both views on a single /shipments route, with a toggle placed in the breadcrumb row and aligned to the right.

The control is not in the design, so you must design it yourself using the existing design system. It should look native to the product.

Switching must not trigger a full page reload, and the switcher must work at all three breakpoints. Reflecting the active view in the URL is recommended.

## 4.6 Create New Shipment

A multi-section form covering sender, recipient, package, and shipping details, together with additional services and tracking preferences. It exercises a wide range of form controls.

The Figma frame deliberately presents this form in an error state. Reproduce it and implement working validation, so the errors appear on invalid submission and clear once corrected.

## 4.7 Invoices & Billing

A master-detail screen: an invoice list alongside an invoice detail panel.

Selecting a row must update the detail panel with that invoice's data. Provide detail data for at least four invoices, and calculate the totals from the line items rather than hard-coding them.

## 4.8 Warehouse

An analytics screen combining summary statistics, charts, a storage table, a package status list, an interactive warehouse map with floor tabs, and an activity log.

# 5\. Data Handling

- Keep all data in a dedicated directory, separated by domain.
- Seed it with the values shown in the Figma design. Do not use lorem ipsum or generic labels.
- Where the design implies a larger dataset than it displays, you may generate additional records so that pagination is meaningful.
- Component state and React context are sufficient; an external state management library is not required.

# 6\. Code Quality

Your source code is reviewed and forms a significant part of the evaluation.

- Build reusable primitives and reuse them throughout rather than repeating markup.
- Implement the application shell once as a shared layout.
- Keep files small, and decompose screen components that grow too large.
- Apply consistent naming conventions and define design tokens in one place.

## 6.1 Version Control

- Commit incrementally with clear, descriptive messages.
- A repository containing a single commit with the entire project will be marked down. We are interested in how you work, not only in the final result.

# 7\. Assignment Rules

- Read this document in full before beginning.
- The implementation must match the Figma design. Photographic images are the only assets you may substitute.
- All three breakpoints must be implemented.
- Submit original work. Copying another candidate's repository, or submitting a purchased or downloaded template, will result in immediate disqualification.
- AI coding assistants are permitted, but you must fully understand the code you submit. Shortlisted candidates will be asked to walk through their implementation.
- If something in the design is genuinely ambiguous, contact us. If you do not receive a response in time, make a reasonable decision and record the assumption in your README.
- The deadline is firm. Late submissions will not be evaluated; submit what you have completed rather than nothing at all.

# 8\. Partial Submissions

Partial submissions are accepted and encouraged. We would far rather review three screens implemented carefully and accurately than seven implemented hastily.

Suggested order of implementation:

**Login > Dashboard > Shipments (both views ) > Create New Shipment > Invoices & Billing > Warehouse**

State clearly in your README which screens are complete, which are partial, and which were not attempted. Presenting incomplete work as finished is not viewed favourably.

# 9\. Submission Requirements

**Both of the following are mandatory. A submission missing either one is treated as incomplete and will not be evaluated.**

1\. GitHub repository - public, containing the full source code, commit history, and a README. If it must remain private, add our reviewer account and note this on the submission form.

2\. Live deployed link - publicly accessible without a login. Please open it in a private browsing window and confirm it works before submitting.

Submissions are accepted only through the Google Form linked at the top of this document; links sent by email cannot be tracked.

## 9.1 README Requirements

- Setup instructions and the live demo link
- A screen-by-screen status list (complete, partial, or not attempted)
- Known issues and any assumptions you made

# 10\. Evaluation Criteria

| **Criteria**                                                                           | **Weight** |
| -------------------------------------------------------------------------------------- | ---------- |
| Design accuracy against the Figma file                                                 | 30%        |
| ---                                                                                    | ---        |
| Code quality, structure, and readability                                               | 20%        |
| ---                                                                                    | ---        |
| Responsiveness across all three breakpoints                                            | 15%        |
| ---                                                                                    | ---        |
| Functionality: filtering, search, sorting, pagination, view switching, form validation | 15%        |
| ---                                                                                    | ---        |
| Component architecture and state management                                            | 10%        |
| ---                                                                                    | ---        |
| Version control practice, README quality, and working deployment                       | 10%        |
| ---                                                                                    | ---        |

**Considered as a bonus, after the criteria above:** TypeScript, loading and empty states, refined transitions, and keyboard accessibility.

# 11\. Timeline

| **Milestone**                  | **Date**                                                  |
| ------------------------------ | --------------------------------------------------------- |
| Assignment released            | 25 July 2026                                              |
| ---                            | ---                                                       |
| Questions and clarifications   | Any time before the deadline; early contact is encouraged |
| ---                            | ---                                                       |
| Submission deadline            | 30 July 2026, 11:59 PM IST                                |
| ---                            | ---                                                       |
| Shortlist and code walkthrough | Within approximately one week of the deadline             |
| ---                            | ---                                                       |

# 12\. Frequently Asked Questions

**Is Next.js mandatory?**

No. React with Vite is fully acceptable. Next.js is preferred but not required.

**Do I need to integrate a real map?**

No. A static map image with the route indicator, marker, controls, and information card built on top is exactly what is expected.

**Can I use my own assets?**

Photographic images only, keeping the same position, proportion, and role as the design. The logo, icons, colours, and typography must match the Figma file.

**Can I skip a screen?**

Yes. Partial submissions are accepted. Follow the suggested order and record what you completed in your README.

**Do the charts need to be real charts?**

Yes. Charts must be rendered from data using a charting library, not reproduced as static images.
