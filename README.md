# README <a name="readme-top"></a>

## Table of Contents

- [About Project](#about-project)
- [Built With](#built-with)
- [Tech Stack](#tech-stack)
- [Key Features](#key-features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Setup](#setup)
  - [Install](#install)
- [Usage](#usage)
- [Tests](#tests)
- [Author](#author)
- [Future Features](#future-features)
- [Contributing](#contributing)
- [Show your support](#show-your-support)
- [Acknowledgements](#acknowledgements)
- [License](#license)

## About Project <a name="about-project"></a>

The **rails_react_webpack** app is a web application built with React and Ruby on Rails. This app demonstrates how to fetch data from a Rails API and display it. The main feature is showing a random greeting when thee user refresh the page.

## Built With <a name="built-with"></a>

- Webpack
- Ruby on Rails
- React & Redux

## Tech Stack <a name="tech-stack"></a>

- Webpack
- Ruby on Rails
- React & Redux

## Key Features <a name="key-features"></a>

- Fetches a random greeting from the API.

## Getting Started <a name="getting-started"></a>

### Prerequisites <a name="prerequisites"></a>

- Node.js V18 minimum
- npm or yarn
- Ruby and Rails installed

### Setup <a name="setup"></a>

1. Clone this repository

```bash
git clone https://github.com/lily4178993/my_rails_react_webpack_app.git
cd my_rails_react_webpack_app
```

2. Install dependencies

```bash
bundle install
npm install
```

3. Update your database informations Go to `config/database.yml`. Replace `your_postgres_username` and `your_postgres_password` with your database informations

```bash
  default: &default
    adapter: postgresql
    encoding: unicode
    pool: 5
    username: [your_postgres_username]
    password: [your_postgres_password]
    host: localhost

  development:
    <<: *default
    database: [your_database_for_development]

  test:
    <<: *default
    database: [your_database_for_test]

  production:
    <<: *default
    database: [your_database_for_production]
```

### Install <a name="install"></a>

Populate greetings data in the database by running the following commands:

```bash
rails db:create
rails db:migrate
rails db:seed
```

### Usage <a name="usage"></a>

Start the development server:

```bash
npm run build
rails s
```

Open `http://localhost:3000/` to view it in your browser.

## Author <a name="author"></a>

- Nelly Telli - [@lily4178993](https://github.com/lily4178993/)

## Future Features <a name="future-features"></a>

- Implement additional API calls to the API.
- Enhance UI/UX with animations.

## Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/lily4178993/my_rails_react_webpack_app/issues/).

## Show your support <a name="support"></a>

Give a ⭐️ if this project helped you!

## Acknowledgements <a name="acknowledgements"></a>

- React Documentation
- Rails Documentation
- Microverse

## License <a name="license"></a>

This project is [MIT licensed](./LICENSE).

<p align="right">(<a href="#readme-top">back to top</a>)</p>