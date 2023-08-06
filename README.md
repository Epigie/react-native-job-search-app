# React Native Job Search App

This is a React Native job search app built using Expo. The app utilizes various technologies and libraries to provide a seamless job search experience.

## Features

- Expo Router for navigation
- Axios for making API calls
- React Native for UI components
- Expo Fonts for custom fonts
- Expo Linking for deep linking
- Rapid API for job data
- CSS-in-JS styling for UI

## Getting Started

To run the app locally, follow these steps:

1. Clone this repository: `git clone https://github.com/ElJefe111944/react-native-job-search-app.git`
2. Navigate to the project directory: `cd react-native-job-search-app`
3. Install dependencies: `npm install`
4. Start the development server: `expo start`

Make sure you have Expo CLI installed globally: `npm install -g expo-cli`

## App Structure

The app is organized into the following pages:

- **Index**: The main entry point of the app.
- **Job Details**: Displays detailed information about a specific job.
- **Search**: Allows users to search for jobs.

### Components

There are several components used throughout the app:

- **Welcome**: A component welcoming users to the app.
- **Nearby**: Displays nearby job options.
- **Popular**: Shows popular job listings.
- **ScreenHeaderBtn**: A shared component for header buttons.
- **Card**: A shared component for rendering job listings in a card format.

## API Integration

The app fetches job data using the `useFetch` custom hook. It makes API calls to the Rapid API to render current job listings. The search functionality is also powered by the same API.

## Styling

The app utilizes CSS-in-JS styling for consistent and responsive UI design.


