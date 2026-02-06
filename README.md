# Your Energy

A comprehensive fitness application built with modern web technologies to help users discover exercises, track favorites, and maintain a healthy lifestyle.

## 🚀 Quick Start

1. Клонувати репозиторій:
   ```bash
   git clone https://github.com/Ralitnyi/Your-Energy.git
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:5173](http://localhost:5173)

## 🎯 Features

- **Exercise Discovery**: Browse exercises by muscle groups, body parts, and equipment
- **Search Functionality**: Find specific exercises using keywords
- **Favorites System**: Save and manage favorite exercises
- **Interactive UI**: Modern, responsive design with smooth animations
- **Quote of the Day**: Motivational quotes to keep you inspired
- **Subscription Form**: Stay updated with new exercises and features

## 📁 Project Structure

```
src/
├── index.html                 # Main entry point
├── main.js                    # JavaScript entry point
├── partials/                  # HTML components
│   ├── header.html
│   ├── footer.html
│   ├── hero.html
│   ├── exercises.html
│   ├── filters.html
│   ├── pagination.html
│   ├── quote.html
│   ├── modal-exercise.html
│   └── mobile-menu.html
├── css/                       # Stylesheets
│   ├── styles.css
│   ├── components/
│   ├── layout/
│   └── reset.css
├── js/                        # JavaScript modules
│   ├── main.js
│   ├── ui/                   # UI components
│   ├── api/                  # API calls
│   ├── render/               # Rendering functions
│   ├── utils/                # Utility functions
│   └── state.js              # Application state
├── img/                       # Images and icons
└── fonts/                     # Font files
```

## 🛠️ Technologies Used

- **Vite**: Modern build tool and development server
- **Vanilla JavaScript**: No frameworks, pure ES6+
- **CSS3**: Modern CSS with animations and responsive design
- **HTML5**: Semantic markup
- **ES Modules**: Modular JavaScript architecture

## 📱 Responsive Design

The application is fully responsive and works seamlessly across all devices:

- **Mobile**: Optimized for screens ≤ 767px
- **Tablet**: Optimized for screens 768px - 1439px
- **Desktop**: Optimized for screens ≥ 1440px

## 🎨 Design Features

- **Modern UI**: Clean, intuitive interface
- **Smooth Animations**: CSS transitions and animations
- **Dark Mode Ready**: Theme support built-in
- **Accessibility**: Semantic HTML and ARIA labels
- **Performance Optimized**: Lazy loading and efficient rendering

## 🔧 API Integration

The application integrates with fitness APIs to provide:

- Exercise data with detailed information
- Filtering by muscle groups, body parts, and equipment
- Search functionality
- Pagination for large result sets

## 📦 Dependencies

### Development Dependencies
- Vite: Build tool and dev server
- PostCSS: CSS processing
- Prettier: Code formatting

### Runtime Dependencies
- Vite plugins for HTML injection and file watching

## 📝 Code Organization

The codebase follows a modular architecture:

- **UI Layer**: Handles DOM manipulation and event handling
- **API Layer**: Manages data fetching and API calls
- **Render Layer**: Responsible for rendering components
- **Utils Layer**: Contains helper functions and utilities
- **State Management**: Centralized application state

## 🚀 Deployment

The application is configured for GitHub Pages deployment:

1. Build the project: `npm run build`
2. The build process automatically deploys to GitHub Pages
3. Live version available at: [https://ralitnyi.github.io/Your-Energy/](https://ralitnyi.github.io/Your-Energy/)

## 🔗 Live Demo

Check out the live version: [https://ralitnyi.github.io/Your-Energy/](https://ralitnyi.github.io/Your-Energy/)

## 📋 Requirements

- Node.js LTS version
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection for API calls

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is licensed under the ISC License.

## 👥 Author

Developed by Ralitnyi Ivan as part of the GoIT JavaScript course.
