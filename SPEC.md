# Final Project Specification

## Original User Prompt
Create a fully responsive, modern single-page interactive dashboard application using **React, Tailwind CSS, and Framer Motion** for animations. The UI should look sleek, professional, and polished (similar to a modern SaaS admin dashboard).

### Core Layout & Navigation
*   **Fixed Top Navigation Bar:** 
    *   Stays locked at the top during scrolling with a subtle backdrop blur (`backdrop-blur-md bg-white/8` or dark mode equivalent).
    *   Includes a brand logo, search input field, notification bell icon with an unread badge, and a user profile avatar dropdown.
*   **Main Dashboard Area:**
    *   A clean layout featuring summary metric cards (e.g., Total Users, Active Sessions, Conversion Rate) with smooth entry animations.
    *   A primary data table displaying a list of dummy records (e.g., Users, Projects, or Transactions).

### Table Features & Interactions
*   **Data Table:** Displays columns such as Name, Email, Status (Active/Inactive), Role, and Actions.
*   **Add Data Button:** A prominent primary CTA button in the header section that opens the "Add Data" modal.
*   **Row Actions:** Each row must have an **Edit** button and a **Delete** button.

### Modals & Interactive States (with Framer Motion Animations)
1.  **Add Data Form Modal:**
    *   Smooth scale-up and fade-in entrance animation.
    *   Includes a form with inputs (e.g., Text, Email, Dropdown for Role/Status).
    *   Includes "Cancel" and "Save" buttons with hover/tap micro-interactions.
2.  **Edit Modal Form:**
    *   Pre-populated with the selected row's data when the user clicks "Edit" on any table row.
    *   Allows updating fields and saving changes back to the state with instant UI feedback.
3.  **Confirmation Modal (Delete Action):**
    *   Triggered when the user clicks "Delete" on a row.
    *   Displays a warning message ("Are you sure you want to delete this item? This action cannot be undone.").
    *   Features a destructive red "Confirm Delete" button and a "Cancel" button.

### Styling & Animation Requirements
*   Use **Tailwind CSS** for clean utility-first styling, consistent spacing, and a modern color palette (e.g., slate/zinc neutrals with indigo or emerald accents).
*   Use **Framer Motion** for:
    *   Modal backdrop fades and card spring animations.
    *   Staggered entrance animations for table rows and metric cards as the page loads.
    *   Smooth hover and click feedback on all interactive buttons and inputs.
*   Ensure state management handles adding, editing, and deleting items dynamically in the local React state so the UI updates instantly without page reloads.

## User Selected Choices
- **primary_metric**: Both: summary cards + drill-down tables
- **theme_vibe**: Dark terminal style

### Feature Addition (2026-08-10T15:52:28.039844698Z)
- **User Request**: Create a fully responsive, modern single-page interactive dashboard application using **React, Tailwind CSS, and Framer Motion** for animations. The UI should look sleek, professional, and polished (similar to a modern SaaS admin dashboard).

### Core Layout & Navigation
*   **Fixed Top Navigation Bar:** 
    *   Stays locked at the top during scrolling with a subtle backdrop blur (`backdrop-blur-md bg-white/8` or dark mode equivalent).
    *   Includes a brand logo, search input field, notification bell icon with an unread badge, and a user profile avatar dropdown.
*   **Main Dashboard Area:**
    *   A clean layout featuring summary metric cards (e.g., Total Users, Active Sessions, Conversion Rate) with smooth entry animations.
    *   A primary data table displaying a list of dummy records (e.g., Users, Projects, or Transactions).

### Table Features & Interactions
*   **Data Table:** Displays columns such as Name, Email, Status (Active/Inactive), Role, and Actions.
*   **Add Data Button:** A prominent primary CTA button in the header section that opens the "Add Data" modal.
*   **Row Actions:** Each row must have an **Edit** button and a **Delete** button.

### Modals & Interactive States (with Framer Motion Animations)
1.  **Add Data Form Modal:**
    *   Smooth scale-up and fade-in entrance animation.
    *   Includes a form with inputs (e.g., Text, Email, Dropdown for Role/Status).
    *   Includes "Cancel" and "Save" buttons with hover/tap micro-interactions.
2.  **Edit Modal Form:**
    *   Pre-populated with the selected row's data when the user clicks "Edit" on any table row.
    *   Allows updating fields and saving changes back to the state with instant UI feedback.
3.  **Confirmation Modal (Delete Action):**
    *   Triggered when the user clicks "Delete" on a row.
    *   Displays a warning message ("Are you sure you want to delete this item? This action cannot be undone.").
    *   Features a destructive red "Confirm Delete" button and a "Cancel" button.

### Styling & Animation Requirements
*   Use **Tailwind CSS** for clean utility-first styling, consistent spacing, and a modern color palette (e.g., slate/zinc neutrals with indigo or emerald accents).
*   Use **Framer Motion** for:
    *   Modal backdrop fades and card spring animations.
    *   Staggered entrance animations for table rows and metric cards as the page loads.
    *   Smooth hover and click feedback on all interactive buttons and inputs.
*   Ensure state management handles adding, editing, and deleting items dynamically in the local React state so the UI updates instantly without page reloads.
- **Edit Rule**: Apply this request even when it intentionally changes an existing component, route, or theme; preserve unrelated working behavior.

### Feature Addition (2026-08-10T16:04:10.545988273Z)
- **User Request**: Wire up all the components into App.tsx
- **Edit Rule**: Apply this request even when it intentionally changes an existing component, route, or theme; preserve unrelated working behavior.
