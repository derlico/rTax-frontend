import { useEffect, useState } from 'react';
//import '../../../App.css';
import { Pencil } from 'phosphor-react';

import jsPDF from 'jspdf';
import 'jspdf-autotable';

export function SalesReport (){

  const [sales, setSales] = useState([])

 useEffect(() => {
    fetch(process.env.REACT_APP_SALES,{
      method: "GET",

    })
    .then(response => response.json())
    .then(data =>{
      setSales(data);
    });
 }, []);


 function getSalesTotal(){
  const total = sales.reduce((acc, current) => Number(acc) + Number(current.sale_total), 0)

  return total
 }

const generateReportContent = (sales) => {
  const columns = [
    { header: 'SaleRef', dataKey: 'sale_ref' },
    { header: 'Customer', dataKey: 'customer' },
    { header: 'Amount (Ksh)', dataKey: 'sale_total' },
    { header: 'Tax', dataKey: 'sale_tax' },
  ];

  const doc = new jsPDF();
  doc.setFontSize(14); // Set font size for the document
  const totalAmount = sales.reduce((sum, sale) => sum + sale.sale_total, 0).toFixed(2);
  const totalTax = sales.reduce((sum, sale) => sum + sale.sale_tax, 0).toFixed(2);


  // Use the autoTable plugin to generate the table
  doc.autoTable({
    head: [columns.map(column => column.header)], // Header row
    body: sales.map(sale => columns.map(column => sale[column.dataKey])), // Data rows
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
    // Calculate totals
  
  // Add a new page for the totals row
  
  doc.setFontSize(12);
  doc.text('Sales Total:', 20, 10);
  doc.text(totalAmount, 60, 10);
  doc.text('Total Taxes:', 20, 20);
  doc.text(totalTax, 60, 20);

  return doc;
};


 
 function exportPDF(){
  const content = generateReportContent(sales);
  content.save('sales_report.pdf');
 }

    return (
      <>
        <div className="container">
        
        <div class="row">
  <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
    <div class="card">
      <div class="card-body p-3">
        <div class="row">
          <div class="col-8">
            <div class="numbers">
              <p class="text-sm mb-0 text-capitalize font-weight-bold">Today's Sales</p>
              <h5 class="font-weight-bolder mb-0">
                <hidden>
                Ksh {" "+ getSalesTotal()}
                </hidden>
                <span class="text-success text-sm font-weight-bolder">+5%</span>
              </h5>
            </div>
          </div>
          <div class="col-4 text-end">
            <div class="icon icon-shape bg-gradient-success shadow text-center border-radius-md">
              <i class="ni ni-money-coins text-lg opacity-10" aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
    <div class="card">
      <div class="card-body p-3">
        <div class="row">
          <div class="col-8">
            <div class="numbers">
              <p class="text-sm mb-0 text-capitalize font-weight-bold">New Clients</p>
              <h5 class="font-weight-bolder mb-0">
                21
                <span class="text-danger text-sm font-weight-bolder">+5</span>
              </h5>
            </div>
          </div>
          <div class="col-4 text-end">
            <div class="icon icon-shape bg-gradient-success shadow text-center border-radius-md">
              <i class="ni ni-paper-diploma text-lg opacity-10" aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
    <div class="card">
      <div class="card-body p-3">
        <div class="row">
          <div class="col-8">
            <div class="numbers">
              <p class="text-sm mb-0 text-capitalize font-weight-bold">Monthly Expense</p>
              <h5 class="font-weight-bolder mb-0">
                Ksh 2,300
              </h5>
            </div>
          </div>
          <div class="col-4 text-end">
            <div class="icon icon-shape bg-gradient-success shadow text-center border-radius-md">
              <i class="ni ni-world text-lg opacity-10" aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="col-xl-3 col-sm-6">
    <div class="card">
      <div class="card-body p-3">
        <div class="row">
          <div class="col-8">
            <div class="numbers">
              <p class="text-sm mb-0 text-capitalize font-weight-bold">Monthly Sales</p>
              <h5 class="font-weight-bolder mb-0">
              Ksh {" "+ getSalesTotal()}
              </h5>
            </div>
          </div>
          <div class="col-4 text-end">
            <div class="icon icon-shape bg-gradient-success shadow text-center border-radius-md">
              <i class="ni ni-cart text-lg opacity-10" aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
          <hr />
          
          <div className='container-fluid row'>
          <div className="col-lg-3 col-md-6">
            <div className="card h-100 min-vh-60 container">
              <div className='scrollable-area'>
              <button className='btn btn-success w-75' onClick={(e) => exportPDF()}><b>Sales Report PDF</b></button>
              <button className='btn btn-success w-75'><b>Drafts Sales</b></button>
              <button className='btn btn-success w-75'><b>Business Analytics</b></button>
              <button className='btn btn-success w-75'><b>Other Reports</b></button>
              
              </div>
                
            </div>
          </div>

          <div className="col-lg-9 col-md-6 mb-md-0 mb-4">
          <div class="card-header pb-0">
        <div class="row my-2">  
          <h2>All Sales</h2>
        </div>
      </div>
          <table className="table table-bordered">
            <thead>
              <tr className='table-dark'>
                <th className="text-uppercase font-weight-bolder">Sale Ref</th>
                <th className="text-uppercase font-weight-bolder">Customer</th>
                <th className="text-uppercase font-weight-bolder">Sales Total</th>
                <th className="text-uppercase font-weight-bolder">Taxes</th>
                <th></th>
              </tr>
            </thead>
            <tbody>

             {sales.map(sale =>
                <tr key={sale.sale_ref}>
                  <td> Sale {sale.sale_ref}</td>
                  <td>{sale.customer}</td>
                  <td >{sale.sale_total}</td>
                  <td>{sale.sale_tax}</td>
                  
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
      </>
    );
} 