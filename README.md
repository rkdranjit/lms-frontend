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