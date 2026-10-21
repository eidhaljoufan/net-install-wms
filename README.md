# Network Installation WMS

**Network Installation Warehouse & Field Operations Management System** is an application designed to help manage warehouse materials, project material requirements, and fiber-optic field operations.

> **Project status:** initial setup stage. The frontend still uses the Vite + React starter. Tailwind CSS v4 is listed as a dependency, but the Vite plugin configuration and Tailwind CSS import still need to be applied. The backend currently has only its base dependencies; the API and database schemas have not yet been implemented.

## Goals

- Record warehouse materials and stock movements in a structured way.
- Compare project material usage with the Bill of Quantities (BoQ) limits.
- Manage work orders and field work reports.
- Provide a web dashboard for warehouse administrators and operations managers.
- Provide an API for the web dashboard and, in a later phase, the Android application.

## Project specifications

| Area | Plan |
| --- | --- |
| Name | FO-WMS (Network Installation Warehouse & Field Operations Management System) |
| Web frontend | React 19, Vite 8, Tailwind CSS 4 |
| Backend API | Node.js, Express 5 |
| Database | MongoDB Atlas with Mongoose |
| Authentication | JWT; endpoint access is restricted by role |
| Frontend state and data | React Query is planned for server data fetching, caching, and synchronization |
| Mobile client | Native Android (Java), planned for work orders and field reporting |
| API documentation | Postman and/or Swagger/OpenAPI |
| Hosting target | Vercel for the frontend; Render or Railway for the API; MongoDB Atlas for the database |
| Hosting cost target | Prefer free tiers; availability, limits, and actual costs must be verified before deployment |
| Staging domain target | A subdomain on a `.my.id` domain, connected to Vercel through DNS |
| Target duration | 4 weeks, 20 working days, estimated at 3–4 hours per day |

The stack above is the target. The versions actually installed can be found in `frontend/package.json` and `backend/package.json`.

## MVP scope

### Core features

1. **Authentication and access**
   - Login with JWT.
   - Suggested initial roles: warehouse administrator, project manager, and field worker.
   - Authorization must be validated by the API, not only by hiding controls in the UI.

2. **Warehouses and materials**
   - Manage warehouse and material catalog data.
   - Record stock-in and stock-out transactions.
   - Keep transaction history for auditing and traceability.
   - Reject transactions that would result in negative stock.

3. **Projects and BoQ**
   - Manage projects and their planned material lists.
   - Compare material usage or issued quantities against BoQ limits.
   - Define behavior when a BoQ limit is reached or exceeded.

4. **Work orders and field reports**
   - Create work orders and assign them to field workers.
   - Define statuses and status transition rules.
   - Record work completion reports and materials used.

5. **Dashboard and reports**
   - Show summaries of stock, transactions, projects, and work orders.
   - Provide search, filtering, and table views for data management.
   - Prioritize the export format most needed for the MVP. The second format can be added in a later iteration.

### Outside the MVP priorities

- A complete native Android application. If Android integration must be included within four weeks, limit the initial phase to login, viewing work orders, and submitting reports.
- Both Excel and PDF exports at the same time. Choose one based on user needs.
- Advanced features such as offline synchronization, push notifications, multi-organization support, or complex analytics; evaluate these after the core workflows are stable.

## Data and workflow rules to decide

Before implementing endpoints, agree on the following rules and document them alongside the schemas:

- Whether a stock transaction can contain multiple material items.
- Whether stock is tracked per warehouse, per location/bin, or both.
- When stock-out is recorded: when material is handed over, used, or when a work order is closed.
- Whether a posted transaction can be edited, or must instead be corrected with a reversing transaction.
- Material units and conversion rules.
- Whether BoQ limits apply per project, per work order, or both.
- Work order statuses, who can change them, and which transitions are allowed.
- Required field report fields, including photo evidence if needed.
- The time zone and date format used in the UI and reports.

MVP recommendation: record every stock change as a transaction with a reference, item, quantity, timestamp, user, and reason. Do not only update the stock quantity without keeping a transaction history.

## Work plan

This schedule is a target, not a guarantee that the full scope can be completed in 20 days. The web MVP is the priority; Android and export scope can be reduced if time is limited.

### Sprint 1 — System design and setup (Week 1, days 1–5)

| Day | Work | Completion criteria |
| --- | --- | --- |
| 1 | Initialize the repository, set up Tailwind v4, define the MVP and roles, and create initial screen designs | The frontend runs; the initial scope and roles are documented |
| 2 | Design the ERD and initial schemas for User, Warehouse, Material, Project, BoQ, Stock Movement, Work Order, and Field Report | Relationships, key fields, and data rules are reviewed |
| 3 | Create the Express foundation, configure environment variables, connect to MongoDB, and add a health check and error-handling pattern | The API runs locally and the health check responds |
| 4 | Implement registration/login as needed, JWT, authentication/authorization middleware, and input validation | Basic authentication scenarios work |
| 5 | Add basic tests and the initial endpoint contract | Auth and role access endpoints are tested; an initial Postman collection is available |

### Sprint 2 — Core backend (Week 2, days 6–10)

| Day | Work | Completion criteria |
| --- | --- | --- |
| 6 | Warehouse and material CRUD | Endpoints include validation and authorization |
| 7 | Stock-in/stock-out transactions and history | Stock changes are recorded and negative stock is rejected |
| 8 | Project CRUD and BoQ limits | Project material requirements can be read and managed |
| 9 | Work orders, assignments, statuses, and basic field reports | Status workflows and change permissions are enforced |
| 10 | API integration tests, failure handling, and endpoint documentation | Core API workflows are tested; Postman/OpenAPI documentation is updated |

### Sprint 3 — Web frontend (Week 3, days 11–15)

| Day | Work | Completion criteria |
| --- | --- | --- |
| 11 | Routing, dashboard layout, login page, and API client foundation | Basic navigation is available and the API can be reached |
| 12 | Dashboard and operational metric summaries | Loading, empty, and error states are available |
| 13 | Warehouse, material, and stock transaction tables/forms | Core stock workflows can be performed through the UI |
| 14 | Project and BoQ pages | Project data and material requirements are displayed and manageable |
| 15 | Work order list/details and statuses | Work orders can be reviewed and updated according to role |

React Query is planned for managing server state. Local UI state can continue to use React state where appropriate.

### Sprint 4 — Integration, reporting, and deployment (Week 4, days 16–20)

| Day | Work | Completion criteria |
| --- | --- | --- |
| 16 | Reports and one prioritized export format | Reports respect filters and can be exported |
| 17 | Limited Android integration **or** web MVP improvements | If Android is developed, focus on login, work orders, and reports |
| 18 | UI–API integration tests, input validation, access permissions, and bug fixes | Main scenarios pass the available manual/automated tests |
| 19 | Deploy the frontend/API to staging and verify configuration | The application is deployed; database connectivity and environment configuration are verified |
| 20 | README, user guide, API documentation, and demo | The project can be run and understood by others |

## Getting started

### Prerequisites

- Git.
- An LTS version of Node.js compatible with the Vite version in `frontend/package.json`.
- npm.
- A MongoDB Atlas account to run the API with a cloud database, or a local MongoDB installation for development.

Check the available versions:

```bash
node --version
npm --version
git --version
```

### Current structure

```text
net-install-wms/
├── backend/
│   ├── package.json
│   └── package-lock.json
├── frontend/
│   ├── src/
│   ├── package.json
│   ├── package-lock.json
│   └── vite.config.js
├── (mockup) warehouse-admin-report.html
└── README.md
```

### 1. Install frontend dependencies

From Git Bash:

```bash
cd /d/Difal/App_Projects/net-install-wms/frontend
npm ci
```

### 2. Configure Tailwind CSS v4 with Vite

The project uses Tailwind CSS v4. **Do not use `npx tailwindcss init -p`**, as that follows the Tailwind v3 workflow. The `tailwindcss` and `@tailwindcss/vite` dependencies are already listed in the frontend manifest.

Add the plugin to `frontend/vite.config.js`:

```js
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

Add the following import to the very top of `frontend/src/index.css`:

```css
@import "tailwindcss";
```

You do not need to create `tailwind.config.js` or `postcss.config.js` just to enable Tailwind v4. Theme configuration can be added later using CSS-first configuration, for example with `@theme`.

Test it by adding a utility class to a React element, for example:

```jsx
<h1 className="text-3xl font-bold text-blue-700">FO-WMS</h1>
```

Run the frontend:

```bash
npm run dev
```

Run frontend checks:

```bash
npm run lint
npm run build
```

Note: `src/App.jsx`, `src/App.css`, and `src/index.css` still contain the Vite starter UI. Replace or simplify the starter styles when building the dashboard layout so that demo rules such as the `#root` width and centered text do not constrain the UI.

### 3. Install backend dependencies

Open a new terminal:

```bash
cd /d/Difal/App_Projects/net-install-wms/backend
npm ci
```

The backend does not yet have a server entry point or `dev`/`start` scripts. Add an entry point, environment configuration, database connection, and npm scripts before running the API. Once they are created, document their filenames and run commands here.

Do not commit the `.env` file. Create an `.env.example` containing variable names without secret values, for example:

```dotenv
PORT=5000
MONGODB_URI=
JWT_SECRET=
CLIENT_ORIGIN=http://localhost:5173
```

The variable names above are an initial proposal; align them with the backend implementation when it is created. Use a strong secret in local and hosting environments.

### 4. Git

Initialize Git and run Git commands from this project folder:

```bash
cd /d/Difal/App_Projects/net-install-wms
git rev-parse --show-toplevel
git status --short
```

The printed root should end with `net-install-wms`. Before committing, make sure secret files and installed dependencies are not tracked. `package-lock.json` should be committed.

## Environment and security

- Store the database URI, JWT secret, and other credentials in environment variables, not in source code.
- Apply input validation and authorization checks to every endpoint that requires authentication.
- Restrict CORS to the required frontend origin; do not rely on CORS as an authentication mechanism.
- Do not expose passwords, JWTs, or secrets in logs or documentation.
- Use dummy data in screenshots, demos, and the public repository.
- Verify hosting limits, idle policies, and costs before deployment. Free tiers can change.

## Testing and quality

Minimum targets before considering the MVP ready:

- The frontend passes `npm run lint` and `npm run build`.
- The backend has tests for authentication, roles, validation, stock transactions, BoQ, and work order status transitions.
- Verify that stock cannot become negative and every stock mutation has a transaction record.
- Test the main UI-to-API workflows, including loading, empty data, validation failures, and server errors.
- No secrets or `.env` files are included in commits.

The backend `test` script is currently still a placeholder; a test runner and test cases need to be added as part of the backend work.

## Release and deployment

Deployment targets:

1. Deploy the frontend to Vercel.
2. Deploy the API to Render or Railway.
3. Use MongoDB Atlas for the database.
4. Store environment variables in the hosting service settings.
5. Restrict API CORS to the frontend domain.
6. Connect the subdomain to Vercel through DNS/CNAME according to the provider's instructions.
7. Verify the health check, login, database connectivity, and stock/work order workflows after deployment.

Deployment has not been configured yet. Service choices and free-tier availability must be checked again during implementation.

## Documentation and deliverables

- A GitHub repository for the source code.
- A README explaining setup and how to run the application.
- Endpoint documentation through a Postman collection and/or Swagger/OpenAPI.
- An ERD or database schema documentation.
- Demo data that does not contain sensitive information.
- A staging URL and usage instructions once available.

## License

Not yet determined.
