const { createInvoice } = require("./createInvoice.js");

const invoice = {
  shipping: {
    name: "Juan Manuel Rincon Ortega",
    address: "Puerto Juarez",
    city: "San Felipe",
    state: "Gto",
    country: "Mexico",
    postal_code: 67800
  },
  items: [
    {
      item: "176271-T",
      description: "Contrato en Dolores Hidalgo",
      quantity: 1,
      amount: 10000
    },
    
  ],
  subtotal: 24000,
  paid: 1200,
  invoice_nr: 1234
};

createInvoice(invoice, "contrato.pdf");