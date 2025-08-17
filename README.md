# YAML Validator
Fast, offline `YAML` file validation and preview in your browser.

## Features
- Upload `.yaml` or `.yml` files via a file picker.
- Instant syntax validation using `js-yaml`.
- Live preview of parsed YAML content.
- Fast, 100% client-side validation (no server calls).
- Responsive, clean UI powered by Bootstrap.
- Clear error messages for invalid YAML.

## Technologies Used
- **HTML5**, **CSS3**, **Bootstrap** – For responsive layout and design.
- **JavaScript**, [`js-yaml`](https://github.com/nodeca/js-yaml) – For YAML parsing and syntax validation.
- **FileReader API** – To read files directly in the browser.

## How to Use
1. Open `index.html` in your browser.
2. Click the file input to upload a `.yaml` or `.yml` file.
3. Instantly view parsed YAML content below.
4. Any syntax errors will be shown clearly.

## Validation Logic
- **Syntax validation**: Handled by `js-yaml`, catching format and indentation issues.
- **Error highlighting**: Clearly displayed below the file input if parsing fails.

## Demo
![Demo of YAML validation](Validate-YAML.gif)
*A quick preview of how YAML files are validated and displayed.*

## Developer Setup
To run locally:
- Clone the repository:
    - `git clone https://github.com/amitesh786/yaml-validator.git`
    - `cd yaml-validator`
- Open `index.html` in your browser.    # Or double-click it

## Author
- Amitesh Singh – [GitHub](https://github.com/amitesh786/yaml-validator.git)
- Feel free to contribute or suggest improvements!
