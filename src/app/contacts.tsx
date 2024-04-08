import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Contacts() {
    return (
        <footer className="relative mb-4">
        <div className="flex justify-center space-x-4">
          <a href="https://github.com/skarokin" target="_blank" rel="noreferrer" tabIndex={-1}>
            <button 
              tabIndex={-1}
              className={"px-2 py-2 w-12 h-12 transition-colors duration-300 ease-in-out fill-current text-white hover:fill-mainColor"}
            >
              <svg className="mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"/>
              </svg>
            </button>
          </a>
          <a href="mailto:taemin.kim0327@gmail.com" target="_blank" rel="noreferrer" tabIndex={-1}>
            <button 
              tabIndex={-1}
              className={"px-2 py-2 w-12 h-12 transition-colors duration-300 ease-in-out fill-current text-white hover:text-emerald-500"}
            >
              <FontAwesomeIcon icon={faEnvelope} size="2x" className="mt-1"/>
            </button>
          </a>
          <a href="https://www.linkedin.com/in/sean-kim-959174238/" target="_blank" rel="noreferrer" tabIndex={-1}>
            <button 
              tabIndex={-1}
              className={"px-2 py-2 w-12 h-12 transition-colors duration-300 ease-in-out fill-current text-white hover:text-blue-500"}
            >
              <svg className="mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                <path d="M 8 3.0097656 C 4.53 3.0097656 2.0097656 5.0892187 2.0097656 7.9492188 C 2.0097656 10.819219 4.59 12.990234 8 12.990234 C 11.47 12.990234 13.990234 10.870625 13.990234 7.890625 C 13.830234 5.020625 11.36 3.0097656 8 3.0097656 z M 3 15 C 2.45 15 2 15.45 2 16 L 2 45 C 2 45.55 2.45 46 3 46 L 13 46 C 13.55 46 14 45.55 14 45 L 14 16 C 14 15.45 13.55 15 13 15 L 3 15 z M 18 15 C 17.45 15 17 15.45 17 16 L 17 45 C 17 45.55 17.45 46 18 46 L 27 46 C 27.552 46 28 45.552 28 45 L 28 30 L 28 29.75 L 28 29.5 C 28 27.13 29.820625 25.199531 32.140625 25.019531 C 32.260625 24.999531 32.38 25 32.5 25 C 32.62 25 32.739375 24.999531 32.859375 25.019531 C 35.179375 25.199531 37 27.13 37 29.5 L 37 45 C 37 45.552 37.448 46 38 46 L 47 46 C 47.55 46 48 45.55 48 45 L 48 28 C 48 21.53 44.529063 15 36.789062 15 C 33.269062 15 30.61 16.360234 29 17.490234 L 29 16 C 29 15.45 28.55 15 28 15 L 18 15 z"/>  
              </svg>
            </button>
          </a>
        </div>
      </footer>
    )
}