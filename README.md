# Dashboard React App

This repository contains the source code for a responsive dashboard React app. The app is made to display various components, including charts, tables, and cards, to provide a comprehensive overview of different metrics. I did this to practice using a modular component library.

## Table of Contents

-   [Installation](#installation)
-   [Components](#components)
    -   [App](#app)
    -   [WebAnalytics](#webanalytics)
    -   [Topbar](#topbar)
    -   [TableItem](#tableitem)
    -   [Sidebar](#sidebar)
    -   [ScoreList](#scorelist)
    -   [SalesItem](#salesitem)
    -   [RightColumn](#rightcolumn)
    -   [LeftColumn](#leftcolumn)
    -   [ChartItem](#chartitem)
    -   [CardItem](#carditem)

## Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/dashboard-react-app.git
    ```

2. **Change into the project directory:**

    ```bash
    cd dashboard-react-app
    ```

3. **Install dependencies:**

    ```bash
    npm install
    ```

4. **Run the app:**
    ```bash
    npm start
    ```

## Components

### App

The `App` component serves as the main container for the entire application. It includes a layout with a sidebar, top bar, and two main columns for content.

### WebAnalytics

The `WebAnalytics` component displays website analytics data using a bar chart. It uses components from the `@tremor/react` library.

### Topbar

The `Topbar` component represents the top navigation bar with a title and a search input field. It uses components from the `@tremor/react` library.

### TableItem

The `TableItem` component renders a table displaying information. It uses components from the `@tremor/react` library.

### Sidebar

The `Sidebar` component represents the sidebar navigation with icons for different sections.

### ScoreList

The `ScoreList` component displays a list. It uses components from the `@tremor/react` library.

### SalesItem

The `SalesItem` component shows an overview of data. It uses components from the `@tremor/react` library.

### RightColumn

The `RightColumn` component includes `SalesItem`, `WebAnalytics`, and `ScoreList` components. It represents the right column of the main layout.

### LeftColumn

The `LeftColumn` component includes `CardItem`, `CardItem`, `CardItem`, `ChartItem`, and `TableItem` components. It represents the left column of the main layout.

### ChartItem

The `ChartItem` component displays a line chart. It uses components from the `@tremor/react` library.

### CardItem

The `CardItem` component represents a card displaying information. It uses components from the `@tremor/react` library.
