# YAML Validator
A lightweight, client-side web tool to upload, view, and validate YAML files directly in the browser using `js-yaml` and a responsive Bootstrap-based UI.

## Features
- Upload `.yaml` or `.yml` files via a file picker.
- Instant syntax validation using `js-yaml`.
- Live preview of parsed YAML content.
- Fast, 100% client-side validation (no server calls).
- Responsive, clean UI powered by Bootstrap.
- Clear error messages for invalid YAML.

## File Structure
- yaml-validator/
- ├── index.html           # Main HTML page with UI
- ├── index.js             # JavaScript for file reading and YAML validation
- ├── style.css            # Custom styles (optional)
- ├── favicon.gif          # (Optional) Favicon for tab
- └── README.md            # Documentation

## Technologies Used
- `HTML5`, `CSS3`, `Bootstrap` – For layout and styling.
- JavaScript (`js-yaml`) – To parse and validate YAML.
- FileReader API – To read uploaded files client-side.

## How to Use
- Open `index.html` in your browser.
- Upload a `.yaml` or `.yml` file.
- View parsed `YAML` content and see validation result instantly.
- Errors (if any) are displayed clearly below the file input.

## Validation Logic
- Syntax Validation: Uses `js-yaml` to detect formatting or indentation issues.

## Demo
![Validate Demo YAML](Validate-YAML.gif)

## Developer Setup
- Clone the repository:
    - `git clone https://github.com/amitesh786/yaml-validator.git`
    - `cd yaml-validator`
- Open `index.html` in your browser.

## Author
- Amitesh Singh – [GitHub](https://github.com/amitesh786/yaml-validator.git)
- Feel free to contribute or suggest improvements!
