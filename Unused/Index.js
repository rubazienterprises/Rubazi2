const divmodulesname = [
  {
    text: "Advanced Auto Backup Module.",
    link: "https://youtu.be/uYif3rTdUs8",
  },
  {
    text: "Auto Population of Pincode and distance for e-Way bill Module.",
    link: "#",
  },
  { text: "Campaign Controlling Module.", link: "#" },
  { text: "Customers Bank Details Updation Module.", link: "#" },
  { text: "Customised Reports Module.", link: "#" },
  { text: "Dashboard Module.", link: "#" },
  { text: "Depreciation Chart/Fixed Assets Schedule.", link: "#" },
  { text: "Excel to Tally Integration Module.", link: "#" },
  { text: "Fast Moving Stock Items Module.", link: "#" },
  { text: "GST Controlling Module.", link: "#" },
  { text: "GST Number updation in Tally from Excel Module.", link: "#" },
  { text: "GSTR-2A Reconciliation Module with Json zip file.", link: "#" },
  { text: "Invoice Customization.", link: "#" },
  { text: "Invoice Emailing Module.", link: "#" },
  {
    text: "Last rate of the items to the Party on Invoiceing Screen Module.",
    link: "#",
  },
  { text: "Ledger Master Updation Module.", link: "#" },
  { text: "Ledgers Emailing Module.", link: "#" },
  {
    text: "List of Motor Vehicle Number on Invoicing Screen Module for e-Waybill.",
    link: "#",
  },
  { text: "List of Terms of Delivery on Invoicing Screen Module.", link: "#" },
  { text: "List of Terms of Payment Module.", link: "#" },
  {
    text: "Lock Vouchers of Voucher Type Module, from date to date.",
    link: "#",
  },
  { text: "Maker & Checker/Park & Post/Approval System Module.", link: "#" },
  {
    text: "Membership Register/ Subscription/Agreement Register Module.",
    link: "#",
  },
  { text: "Payment Sheet Module.", link: "#" },
  { text: "Reminder Module.", link: "#" },
  { text: "Smart Signature on Sales Invoice Module.", link: "#" },
  { text: "Stock Item description module.", link: "#" },
  { text: "Stock Master Updation Module.", link: "#" },
  { text: "TDS Controlling Module.", link: "#" },
  { text: "T-View of Ledger with Summary at bottom Module.", link: "#" },
  { text: "Vouchers supporting/documents management Module.", link: "#" },
  { text: "Web to Tally Integration Module.", link: "#" },
  { text: "WhatsApp Invoice Module.", link: "#" },
  { text: "Recycle bin Module.", link: "#" },
  { text: "Delivery Challan Module.", link: "#" },
  { text: "Auto Emailing Module.", link: "#" },
  { text: "Outstanding Reminder Module.", link: "#" },
  { text: "Negative Stock Items Module.", link: "#" },
  { text: "Add-On Configuration Module", link: "#" },
  { text: "Business Analysis Module", link: "#" },
  { text: "PDF Password Security Module", link: "#" },
  { text: "Agewise Payable/Receivable Module", link: "#" },
  { text: "Text Watermark Module", link: "#" },
  { text: "Image Watermark Module", link: "#" },
  { text: "Digital Signature Module", link: "#" },
  { text: "Interest Calculation Module", link: "#" },
  { text: "Purchase Invoice Entry Controlling Module", link: "#" },
  { text: "ReOrder Status Auto Email", link: "#" },
  { text: "Stock Item Image of Invoice Printing", link: "#" },
  { text: "FSSAI License Module", link: "#" },
  { text: "Barcode Module", link: "#" },
  { text: "Narration Prompt Module", link: "#" },
  { text: "QRCode Module", link: "#" },
  { text: "Ignore Credit Limit Module", link: "#" },
  { text: "Update Stock Item Details Module", link: "#" },
  { text: "Expiry Date Modules", link: "#" },
  { text: "Advanced Auto Email Modules", link: "#" },
  { text: "Sales Analysis Module", link: "#" },
  { text: "Display Instrument Nos in Bank Ledgers", link: "#" },
  { text: "Display Eway Bill No. in Sales Ledgers", link: "#" },
  { text: "Price List Updation Module", link: "#" },
  { text: "Billwise Tracking in Foreign Currencty", link: "#" },
  { text: "Contact Sales Register", link: "#" },
  { text: "Stock Group wise Sales Analysis", link: "#" },
  { text: "Auto Multi Payment Voucher Entry Module", link: "#" },
  {
    text: "Auto Multi Sales Voucher Entry Module",
    link: "https://youtu.be/uYif3rTdUs8",
  },
  { text: "Odd Balance Module", link: "#" },
  { text: "Update HSN Code Module", link: "https://youtu.be/FDnuvFZxbeg" },
  { text: "Customer Address on Voucher Entry Screen", link: "#" },
  { text: "Salesman Module", link: "#" },
  { text: "Commission Agent Module", link: "#" },
];

//to populate
let mLen = divmodulesname.length;
let text = "";
// let tgt = "_target=blank";
for (let i = 0; i < mLen; i++) {
  text +=
    '<div class="product-card"><a href=' +
    divmodulesname[i].link +
    ' target="_blank">' +
    divmodulesname[i].text +
    "</a><p>Click to watch video</p></div>" +
    "";
}
text += "";
document.getElementById("divmodulelist").innerHTML = text;

//Search in module list
function divsearchModule() {
  // Declare variables
  var input, filter, ml, div, a, i, txtValue;
  input = document.getElementById("divsearchinput");
  filter = input.value.toUpperCase();
  ml = document.getElementById("divmodulelist");
  div = ml.getElementsByTagName("div");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < div.length; i++) {
    a = div[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      div[i].style.display = "";
    } else {
      div[i].style.display = "none";
    }
  }
}
