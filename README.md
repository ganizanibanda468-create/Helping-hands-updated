# Helping hands updated
NPO organization
# Helping Hands Foundation Website

## 1. Project Overview

This project is a complete, responsive, multi-page static website for the **Helping Hands Foundation**, a Non-Profit Organization (NPO) focused on empowering and supporting marginalized groups in South Africa. The site's primary goal is to inform the public about the organization's mission, showcase its impact, and facilitate donations and volunteer sign-ups.

**Mission:** To encourage and assist marginalized groups by means of outreach initiatives and long-term sponsorships.
**Vision:** A South Africa where all families are able to obtain dignity and the necessities of life.

## 2. Technology Stack

* **HTML5:** Used for the semantic structure of all six pages.
* **CSS3:** Used for all styling, layout, and responsiveness, defined in a single external stylesheet (`style.css`).

## 3. Project Structure

The project is organized into seven core files, providing six distinct web pages:

| File Name | Description | Key Sections / Purpose |
| :--- | :--- | :--- |
| `index.html` | **Homepage** | Mission/Vision, Impact Stats (5,000+ Families Fed), Program Previews, Newsletter sign-up. |
| `programs.html` | **Our Programs** | Detailed descriptions of **Food Outreach**, **Clothing Drives**, and **Education Support**. |
| `Events.html` | **Our Events** | Lists **Upcoming Events** (e.g., Annual Gala on Nov 20, 2025) and a Past Events Gallery. |
| `Get-involved.html` | **Get Involved** | Outlines opportunities for **Volunteering**, **Fundraising**, and **Corporate Partnerships**. |
| `donate.html` | **Donate** | Donation form with suggested amounts in **ZAR** and payment gateway placeholders. |
| `contact.html` | **Contact Us** | Form for inquiries and official contact details (Address: Johannesburg, Email, Phone). |
| `style.css` | **Styling** | Global styles, Flexbox/Grid layouts, and Mobile-First responsive design. |

## 4. Technical Highlights & Responsive Design

### 4.1. Semantic HTML & Accessibility
* **Semantic Tags:** Extensive use of `<header>`, `<nav>`, `<section>`, and `<footer>`.
* **Accessibility:** All forms (`contact.html`, `donate.html`) use correctly paired `<label>` and `for`/`id` attributes. The `required` attribute is used for mandatory input fields.

### 4.2. Layout Techniques
* The layout relies on **Flexbox** (for navigation and simple alignments) and **CSS Grid** (for complex, multi-column sections like Impact Stats and Event Galleries).
* Relative units (`rem` and `em`) are used across the board for scalable typography and spacing.

### 4.3. Mobile Responsiveness
* The project implements a **Mobile-First** approach.
* A key media query at **`@media (max-width: 768px)`** ensures:
    * The **Navigation Bar** collapses from horizontal to a vertical, stacked list.
    * All multi-column layouts (Hero, Stats, Programs) stack into a **single column** for optimal mobile readability.

## 5. Getting Started

1.  Clone or download the project files.
2.  Open **`index.html`** in any web browser to view the homepage and navigate the site.
3.  Ensure the **`style.css`** file is linked and accessible for proper rendering.
### 3.4. Responsive Design Screenshots

To demonstrate the responsive design achieved with CSS Media Queries, here are comparative views of the homepage.

#### Desktop View (Computer)

![![Alt text](<images/desktop view.PNG>)](desktop%20view.jpg)

#### Mobile View (Tablet/Phone)

![![Alt text](<images/mobile view png.PNG>).](mobile%20view%20png.PNG)