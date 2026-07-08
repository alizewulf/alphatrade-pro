# AlphaTrade Pro

AlphaTrade Pro is a modern trading platform interface for managing digital assets, monitoring portfolios and simulating trading operations.

The project provides a dashboard experience with portfolio analytics, market overview, watchlist tracking and buy/sell operations.

## Preview

Demo link will be added soon.

## Features

* User authentication flow
* Trading interface
* Buy and sell operations
* Portfolio analytics
* Asset allocation visualization
* Holdings tracking
* Transaction history
* Market watchlist
* Interactive charts

## Technologies

* React 19
* TypeScript
* Tailwind CSS 4
* Vite
* Axios
* React Router
* Formik
* Zod
* Motion
* Recharts
* React Loading Skeleton (being fully integrated)
* JSON Server

## Installation

Clone the repository:

```bash
git clone https://github.com/username/alphatrade-pro.git
```

Install dependencies:

```bash
npm install
```

## Running the project

Start the mock API server:

```bash
json-server --watch db.json
```

Start the development server:

```bash
npm run dev
```

The application uses JSON Server as a mock backend for user data, portfolio information, transactions and watchlist data.

## Project Architecture

The project follows Feature-Sliced Design (FSD) methodology.

```text
src/
├── app/
├── pages/
├── widgets/
├── features/
├── entities/
└── shared/
```

### App

Application initialization layer.

Contains:

* Application routing
* Global providers
* Layout configuration
* Context providers

### Pages

Application screens built from widgets and features.

Current pages:

* Welcome page
* Dashboard page
* Portfolio page
* Login page
* Sign up page
* Demo page

### Widgets

Large independent interface blocks.

Examples:

* Dashboard sections
* Portfolio sections
* Header
* Footer
* Sidebar
* Quick Trade panel
* Market overview
* Watchlist table


### Features

User actions and business operations.

Current features:

* Authentication

  * Login
  * Registration

* Trading

  * Buy order (In Progress)
  * Sell order (In Progress)

Features contain user interactions, validation and related logic.

### Entities

Business entities and application data models.

Current entities:

* User
* Portfolio
* Watchlist

### Shared

Reusable project resources.

Contains:

* UI components
* Axios configuration
* API settings
* Icons
* Common inputs
* Reusable containers

## Mock API

The project uses JSON Server for local API simulation.

Available resources:

* Users
* Portfolio
* Holdings
* Transactions
* Watchlist

Mock data is stored in:

```text
db.json
```

* Mockdata Example

```json
{
  "users": [
    {
      "id": "user-demo-1",
      "login": "demo",
      "name": "Demo",
      "surname": "User",
      "password": "123456",
      "onBalance": 15420.5,
      "cardData": "**** 4242",
      "img": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80",
      "isVip": true
    }
  ],
  "portfolio": {
    "allocation": [
      { "name": "Stocks", "value": 58 }
    ],
    "holdings": [
      {
        "id": "holding-1",
        "symbol": "AAPL",
        "shares": 18,
        "avgPrice": 182.34,
        "currentPrice": 198.42,
        "value": 3571.56,
        "changePercent": 8.8
      }
    ],
    "transactions": [
      {
        "id": "tx-1",
        "type": "Buy",
        "symbol": "AAPL",
        "amount": 1200,
        "date": "2026-07-01",
        "status": "Completed"
      }
    ]
  },
  "watchlist": [
    {
      "id": "watch-1",
      "symbol": "MSFT",
      "company": "Microsoft",
      "price": 437.18,
      "change": 5.36,
      "changePercent": 1.24,
      "marketCap": "3.25T",
      "profile": "Cloud and AI infrastructure"
    }
  ]
}

```
## Scripts

Development:

```bash
npm run dev
```

Production build:

```bash
npm run build
```

## Author

Mikheil Gloveli