# Medicare Premium & Commission Calculator

## Overview
The Medicare Premium & Commission Calculator is a web-based application designed to help insurance agents calculate their premiums, commissions, and production metrics. It offers interactive features to adjust inputs such as the average annualized premium, contract level, and months of production, and it visualizes the results in easy-to-understand graphs.

## Features

- **Responsive Design**: The calculator is optimized for both desktop and mobile screens.
- **Dynamic Calculation**: The app calculates premiums, commissions, and other related metrics based on user input.
- **Interactive Graphs**: The results are displayed in an interactive chart using Chart.js.
- **Dark Mode**: The app supports dark mode and automatically switches based on the user's system preferences.
- **Tooltips**: Provides informative tooltips for each input field.
- **Mobile-Friendly**: Optimized layout for small screens with CSS media queries.

## Installation

1. Clone this repository to your local machine:
    ```bash
    git clone https://github.com/smit7488/medicare-calculator.git
    ```

2. Navigate to the project folder:
    ```bash
    cd medicare-calculator
    ```

3. Open the `index.html` file in a web browser:
    ```bash
    open index.html
    ```

    This will open the calculator interface where you can start using the app.

## Usage

### Input Fields
The app requires the following inputs to perform the calculation:
- **Avg Annualized Premium ($)**: Enter the average annual premium per policyholder.
- **Avg Contract Level (%)**: The contract percentage value based on the contract terms.
- **Issued Apps Per Month**: The average number of applications issued per month.
- **Months of Production**: Select the number of months of production using the range slider.
- **Avg Persistency (%)**: The percentage of policyholders who continue to pay their renewal premiums.
- **Avg Annual Growth (%)**: Set an estimated annual growth percentage using the slider.
- **Years to Calculate**: Select how many years you wish to project your compensation over.

### Output
Once the necessary values are entered, the app will calculate:
- The estimated premiums and commissions.
- A graph will display the results based on the provided data.

### Reset Form
To reset the inputs and start fresh, simply click the "Reset" button at the bottom of the form.

## Technologies Used

- **HTML5**: Markup for the structure of the application.
- **CSS3**: Styling and layout, with media queries to ensure responsive design.
- **JavaScript (jQuery)**: Dynamic interaction and calculation logic.
- **Chart.js**: To render interactive graphs for visualizing the results.
- **Dark Mode**: Automatic switching between light and dark modes based on system preference.

## Contributions

We welcome contributions! Feel free to fork this repository, submit issues, and create pull requests with your changes. Ensure to follow proper coding standards and write unit tests for new features.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- **Chart.js** for providing an easy-to-use graphing library.
- **jQuery** for simplifying JavaScript DOM manipulation.
- **CSS Media Queries** for responsive design.
- **Trevor Smith** - Author and Developer of the project.

## Contact

For questions or support, please contact [your-email@example.com](mailto:your-email@example.com).
