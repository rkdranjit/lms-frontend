# LEARNING MANAGEMENT SYSTEM FRONTEND

### Setup Instruction

1. Clone the project

```
 git clone https://github.com/rkdranjit/lms-frontend.git
```
2. Move into the directory
```
    cd learning_management_system
```
3. Install dependency
```
    npm i
```
4. Run server
```
    npm run dev
```
### Setup tailwind in project [Link](https://tailwindcss.com/docs/guides/vite)
1. Install tailwind and other dependencies
```
    npm install -D tailwindcss postcss autoprefixer
```
2. Create `tailwind.config.js` file
```
    npx tailwindcss init -p
```
3. Add the file and extension to tailwind config in the content property
```
      content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
       ],
```
4. Add the tailwind directives on the top of  index.css file
```
        @tailwind base;
        @tailwind components;
        @tailwind utilities;
```
5. Then run the server ,tailwind should be integrated

### Adding plugins and dependencies
```
    npm i @reduxjs/toolkit react-redux react-router-dom react-icons react-chartjs-2 chart.js daisyui axios react-hot-toast @tailwindcss/line-clamp
```
### Adding auto import sort for eslint
1. Install the plugin
```
    npm i eslint-plugin-simple-import-sort
```
2. Add rule in `.eslintrc.cjs`
```
    'simple-import-sort/imports' : 'error'
```
3. Add simple-import-sort  in the plugin array of `.eslintrc.cjs` file
```
    plugins:[...,'simple-import-sort']
```
4. Open setting.json in vscode configuration settings
5. Add the following line
```
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true 
    }
```