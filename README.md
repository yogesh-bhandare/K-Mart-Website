# K-MART WebApp React.js Installation Guide

This guide provides step-by-step instructions to set up the development environment for the K-MART WebApp project using React.js with Vite and Tailwind CSS.

## Prerequisites

Before proceeding with the installation, ensure that you have the following prerequisites installed on your system:

- Node.js
- npm (Node Package Manager)

## Installation Process

### 1. Node.js Installation and Setup

1. **Download Node.js:**
   - Visit the [official Node.js website](https://nodejs.org/) and download the latest version of Node.js for your operating system.

2. **Install Node.js:**
   - Follow the installation instructions provided on the Node.js website for your specific operating system.

3. **Verify Installation:**
   - After the installation is complete, open a terminal or command prompt.
   - Run the following commands to verify that Node.js and npm are installed correctly:
     ```
     node -v
     npm -v
     ```
   - These commands should display the installed version of Node.js and npm respectively.

### 2. React.js Setup using Vite

1. **Install Vite:**
   - Open a terminal or command prompt.
   - Run the following command to install Vite globally:
     ```
     npm install -g create-vite
     ```

2. **Create React App with Vite:**
   - Navigate to your desired project directory in the terminal.
   - Run the following command to create a new React.js project using Vite:
     ```
     create-vite my-react-app --template react
     ```
   - Replace `my-react-app` with your project name.

### 3. Tailwind Setup for Vite

1. **Install Tailwind CSS:**
   - Inside your project directory, open a terminal or command prompt.
   - Run the following command to install Tailwind CSS and its dependencies:
     ```
     npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
     ```

2. **Create Tailwind CSS Configuration:**
   - Run the following command to generate a Tailwind CSS configuration file:
     ```
     npx tailwindcss init -p
     ```

3. **Configure PostCSS:**
   - Create a `postcss.config.js` file in the root of your project.
   - Add the following content to the `postcss.config.js` file:
     ```javascript
     module.exports = {
       plugins: {
         tailwindcss: {},
         autoprefixer: {},
       },
     }
     ```

4. **Include Tailwind CSS in Your Styles:**
   - In your project's CSS or SCSS file (e.g., `src/index.css`), import Tailwind CSS:
     ```css
     @import 'tailwindcss/base';
     @import 'tailwindcss/components';
     @import 'tailwindcss/utilities';
     ```

### 4. Running WebApp

1. **Start the Development Server:**
   - Navigate to your project directory in the terminal.
   - Run the following command to start the Vite development server:
     ```
     npm run dev
     ```

### 5. All Documentation Links

- [Node.js Official Website](https://nodejs.org/)
- [Vite Documentation](https://vitejs.dev/guide/)
- [Tailwind CSS Guide for Vite](https://tailwindcss.com/docs/guides/vite)

