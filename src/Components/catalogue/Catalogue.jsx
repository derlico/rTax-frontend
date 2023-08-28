import { useEffect, useState } from 'react';
import '../../App.css';
import { Pencil } from 'phosphor-react';
import Product from './Product';
import NewProduct from '../modals/NewProduct';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

export function Catalogue (){

  const [prods, setProds] = useState([])

 useEffect(() => {
  const storedProds = localStorage.getItem('products')
  if (storedProds) {
    setProds(JSON.parse(storedProds));
  }
  fetchProducts()
  
 }, [])

 const fetchProducts = () => {
  fetch(process.env.REACT_APP_PRODUCTS,{
    method: "GET",

  })
  .then(response => response.json())
  .then(data =>{
    const products = data.map(product => ({
      ...product,
      profit: product.price - product.cost,
      margin: ((((product.price - product.cost) / product.cost) * 100)).toFixed(2) + '%',
    }));
    setProds(products);

    localStorage.setItem('products', JSON.stringify(data));
  });
 }

 //Modal state

    const [newProd, setNewProd] = useState(false)

    function handleNewProduct(){
        setNewProd(!newProd);
        fetchProducts();
       }

//Export PDF PRODUCT LIST
const generateProductList = (prods) => {
  const columns = [
    { header: 'ProductName', dataKey: 'name' },
    { header: 'Barcode', dataKey: 'barcode' },
    { header: 'Cost(Ksh)', dataKey: 'cost' },
    { header: 'Price(Ksh)', dataKey: 'price' },
    { header: 'Tax', dataKey: 'tax' },
  ];

  const doc = new jsPDF();
  doc.setFontSize(14); // Set font size for the document
  doc.text('PRODUCT LIST', 80, 20);
  
  // Use the autoTable plugin to generate the table
  doc.autoTable({
    head: [columns.map(column => column.header)], // Header row
    body: prods.map(prod => columns.map(column => prod[column.dataKey])), // Data rows
    startY: 30, // Starting position from top of the page
    styles: {
      fontSize: 12, // Font size for the table
      cellPadding: 4, // Cell padding
    },
    headStyles: {
      fillColor: [0, 128, 0], // Green color for header background
      textColor: 255, // White text color for headers
      fontSize: 14, // Font size for headers
      fontStyle: 'bold', // Bold font style for headers
    },
  });

  return doc;
};

 function exportProductList(){
  const content = generateProductList(prods);
  content.save('product_list.pdf');
 }

 
 //Export PDF PRICE LIST
 const generatePriceList = (prods) => {
  const columns = [
    { header: 'ProductName', dataKey: 'name' },
    { header: 'Price(Ksh)', dataKey: 'price' }, 
  ];

  const doc = new jsPDF();
  doc.setFontSize(14); // Set font size for the document
  doc.text('PRICE LIST', 80, 20);
  
  // Use the autoTable plugin to generate the table
  doc.autoTable({
    head: [columns.map(column => column.header)], // Header row
    body: prods.map(prod => columns.map(column => prod[column.dataKey])), // Data rows
    startY: 30, // Starting position from top of the page
    styles: {
      fontSize: 12, // Font size for the table
      cellPadding: 4, // Cell padding
    },
    headStyles: {
      fillColor: [0, 128, 0], // Green color for header background
      textColor: 255, // White text color for headers
      fontSize: 14, // Font size for headers
      fontStyle: 'bold', // Bold font style for headers
    },
  });

  return doc;
};

 function exportPriceList(){
  const content = generatePriceList(prods);
  content.save('price_list.pdf');
 }

//Export COST vs PRICE Report

const generatePriceCostReport = (prods) => {
  const columns = [
    { header: 'Product', dataKey: 'name' },
    { header: 'Cost(Ksh)', dataKey: 'cost' },
    { header: 'Price(Ksh)', dataKey: 'price' }, 
    { header: 'Profit(Ksh)', dataKey: 'profit' },
    { header: 'Margin (%)', dataKey: 'margin' },
  ];

  const doc = new jsPDF();
  doc.setFontSize(14); // Set font size for the document
  doc.text('PRICE vs COST REPORT', 80, 20);
  
  // Use the autoTable plugin to generate the table
  doc.autoTable({
    head: [columns.map(column => column.header)], // Header row
    body: prods.map(prod => columns.map(column => prod[column.dataKey])), // Data rows
    startY: 30, // Starting position from top of the page
    styles: {
      fontSize: 12, // Font size for the table
      cellPadding: 4, // Cell padding
      border: 2
    },
    headStyles: {
      fillColor: [0, 128, 0], // Green color for header background
      textColor: 255, // White text color for headers
      fontSize: 14, // Font size for headers
      fontStyle: 'bold', // Bold font style for headers
    },
  });

  return doc;
};

 function exportPriceCost(){
  const content = generatePriceCostReport(prods);
  content.save('price_cost_report.pdf');
 }
       
    return (
      <>
        <div className="container">
          <Product />
          <hr />
          <hr />         
          <div className='container-fluid row'>
          <div className="col-lg-3 col-md-6">
            <div className="card h-100 min-vh-60 container">
              <div className='scrollable-area mx-auto'>
              <button className='btn btn-success w-75' onClick={handleNewProduct}><b>Add Product</b></button>
                <NewProduct 
                open={newProd}
                onChanges={open=> handleNewProduct(open)}
              />
              <button className='btn btn-success w-75' onClick={(e) => exportPriceList()}><b>Price List PDF</b></button>
              <button className='btn btn-success w-75' onClick={(e) => exportPriceCost()}><b>Price vs Cost PDF</b></button>
              <button className='btn btn-success w-75' onClick={(e) => exportProductList()}><b>Product List PDF</b></button>
              
              </div>
                
            </div>
          </div>

          <div className="col-lg-9 col-md-6 mb-md-0 mb-4">
          <div className="card-header pb-0">
        <div className="row my-2">  
          <h2>Product List</h2>
        </div>
      </div>
        <div className='scrollable-area'>
          <table className="table table-bordered scrollable-table">
            <thead>
              <tr className="table-primary">
                <th className="text-uppercase font-weight-bolder">Product Name</th>
                <th className="text-uppercase font-weight-bolder">Barcode</th>
                <th className="text-uppercase font-weight-bolder">Cost</th>
                <th className="text-uppercase font-weight-bolder">Price</th>
                <th className="text-uppercase font-weight-bolder">Taxes</th>
                <th></th>
              </tr>
            </thead>
            <tbody className='text'>

             {prods.map(prod =>
                <tr key={prod.id}>
                  <td>{prod.name}</td>
                  <td >{prod.barcode}</td>
                  <td>{prod.cost}</td>
                  <td>{prod.price}</td>
                  <td>{prod.tax}</td>
                  <td className='d-flex justify-content-center mx-0'>
                  <button className='addBtn'>
                    <Pencil size={30} weight="bold" />
                  </button></td>
              </tr>
              )}
                
            </tbody>
          </table>
        </div>
          </div>
          </div>
        </div>
      </>
    );
} 