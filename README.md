# Connect the Backend

Configure your backend to run on a specific IP and populate the .ENV files appropriately

### .env example:
REACT_APP_PRODUCTS = http://127.0.0.1:8000/api/products/

REACT_APP_STOCKS = http://127.0.0.1:8000/api/stocks/

REACT_APP_CUSTOMERS = http://127.0.0.1:8000/api/customers/

REACT_APP_SALES = http://127.0.0.1:8000/api/sales/

REACT_APP_PAYMENTS = http://127.0.0.1:8000/api/payments/

## Run Scripts
Make sure to install all the requisites of the project including Node

Once installed in the project directory, you need to run:

### `npm install`

installs all the dependencies on the package.json
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.


# System Structure

POS: - Customer, Checkout, Stocks

Catalogue: - Product List, Price List, Profit Margin Report

Reports: - Sales Report, Tax Reports
