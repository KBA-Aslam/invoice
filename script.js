// Function to generate the invoice
function generateInvoice(event) {
    event.preventDefault();

    // Get form values
    const customerName = document.getElementById('customerName').value;
    const customerAddress = document.getElementById('customerAddress').value;
    const customerPhone = document.getElementById('customerPhone').value;
    const invoiceNumber = document.getElementById('invoiceNumber').value;
    const date = document.getElementById('date').value;
    const totalRoom = document.getElementById('totalRoom').value;
    const totalNight = document.getElementById('totalNight').value;
    const checkInDate = document.getElementById('checkInDate').value;
    const checkOutDate = document.getElementById('checkOutDate').value;
    const roomType = document.getElementById('roomType').value;
    const meal = document.getElementById('meal').value;
    const rate = document.getElementById('rate').value;
    const totalAmount = document.getElementById('totalAmount').value;
    const payment = document.getElementById('payment').value;

    // Create the invoice content
    const invoiceContent = `
                <div class="page-content container">

                <div class="container px-0">
                    <div class="row mt-4">
                        <div class="col-12 col-lg-12">
                            <div class="row">
                                <div class="col-sm-6">
                                    <div>
                                        <img src="logo.png" class="logo" alt="">
                                    </div>
                                </div>
                                <!-- /.col -->
                    
                                <div class="text-95 col-sm-6 align-self-start d-sm-flex justify-content-end">
                                    <hr class="d-sm-none" />
                                    <div class="text-grey-m2">
                                        <div class="mt-1 mb-2 text-secondary-m1 text-blue text-600 text-125">
                                            Mohammad Khaled
                                        </div>
                    
                                        <div class="my-2 text-600 text-90">Tour Guide</div>
                    
                                        <div class="my-2 text-600 text-90">Madinah, KSA</div>
                    
                                        <div class="my-2 text-600 text-90"> <i class="fa fa-phone fa-flip-horizontal text-secondary"></i> +966577414239</div>
                    
                                        <div class="my-2"> <i class="fa fa-envelope fa-flip-horizontal text-secondary"></i> Md.khaledkhaled123456@gmail.com</span></div>
                                    </div>
                                </div>
                                <!-- /.col -->
                            </div>
                            <!-- .row -->

                            <div class="row bgc-default-l4">
                                <div class="col-sm-6">
                                    <div>
                                        <span class="text-sm text-grey-m2 align-middle">Guest:</span>
                                        <span class="text-600 text-110 text-blue align-middle">${customerName}</span>
                                    </div>
                                    <div class="text-grey-m2">
                                        <div class="my-1">
                                            ${customerAddress}
                                        </div>
                                        <div class="my-1"><i class="fa fa-phone fa-flip-horizontal text-secondary"></i> <b class="text-600">${customerPhone}</b></div>
                                    </div>
                                </div>
                                <!-- /.col -->

                                <div class="text-95 col-sm-6 align-self-start d-sm-flex justify-content-end">
                                    <hr class="d-sm-none" />
                                    <div class="text-grey-m2">

                                        <div class="my-2"><i class="fa fa-circle text-blue-m2 text-xs mr-1"></i> <span class="text-600 text-90">Invoice No:</span> #${invoiceNumber}</div>

                                        <div class="my-2"><i class="fa fa-circle text-blue-m2 text-xs mr-1"></i> <span class="text-600 text-90">Issue Date:</span> ${date}</div>

                                        <div class="my-2"><i class="fa fa-circle text-blue-m2 text-xs mr-1"></i> <span class="text-600 text-90">Status:</span> <span class="badge badge-warning badge-pill px-25">${payment}</span></div>
                                    </div>
                                </div>
                                <!-- /.col -->
                            </div>

                            <div class="mt-4">
                                <div class="row text-600 text-white align-middle bgc-default-tp1 py-25">
                                    <div class="col-2">Room Type</div>
                                    <div class="col-2">Check In</div>
                                    <div class="col-2">Check Out</div>
                                    <div class="col-1">Meal</div>
                                    <div class="col-2">Total Room</div>
                                    <div class="col-2">Total Night</div>
                                    <div class="col-1">Amount</div>
                                </div>

                                <div class="text-95 text-secondary-d3">
                                    <div class="row mb-2 mb-sm-0 py-25 align-middle bgc-default-l4">
                                        <div class="col-2">${roomType}</div>
                                        <div class="col-2">${checkInDate}</div>
                                        <div class="col-2">${checkOutDate}</div>
                                        <div class="col-1">${meal}</div>
                                        <div class="col-2">${totalRoom}</div>
                                        <div class="col-2">${totalNight}</div>
                                        <div class="col-1">${rate}</div>
                                    </div>
                                </div>

                                <div class="row border-b-2 brc-default-l2"></div>

                                <div class="row mt-3">
                                    <div class="col-12 col-sm-7 text-grey-d2 text-95 mt-2 mt-lg-0">
                                    
                                    </div>

                                    <div class="col-12 col-sm-5 text-grey text-90 order-first order-sm-last">
                                        <div class="row my-2 align-items-center bgc-primary-l3 p-2">
                                            <div class="col-7 text-right">
                                                Total Amount:
                                            </div>
                                            <div class="col-5">
                                                <span class="text-150 text-success-d3 opacity-2">${totalAmount}</span> SAR
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div class="mb-3">
                                    <h5>Terms & Conditions</h5>
                                    <p class="terms">The tour guide is solely for the purpose of enhancing your travel experience. While we strive to offer accurate information and guidance, we cannot be held responsible for any unforeseen circumstances such as weather conditions, transportation delays, or changes in itinerary beyond our control. Payment for the tour guide services is non-refundable unless otherwise stated. Any additional expenses incurred during the tour, such as entrance fees or meals, are the responsibility of the traveler. We reserve the right to make changes to the tour itinerary if necessary for the safety and enjoyment of all participants. Thank you for choosing our tour guide services, and we look forward to providing you with an unforgettable experience.</p>
                                </div>
                                
                                <hr />

                                <div class="mb-5">
                                    <span class="text-secondary-d1 text-105 d-flex justify-content-center">Thank you for choosing us to explore the wonders of Madinah. May Allah (SWT) bless you.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            `;

    // Display invoice content
    const printablePage = document.getElementById('printablePage');
    printablePage.innerHTML = invoiceContent;

    // Show the printable page
    printablePage.style.display = 'block';
}

// Function to download PDF
function downloadPDF() {
    const printablePage = document.getElementById('printablePage');

    // Convert the printable page content to PDF
    html2pdf(printablePage, {
        margin: 10,
        filename: 'invoice.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { dpi: 192, letterRendering: true },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    });
}

// Event listener for form submission
document.getElementById('invoiceForm').addEventListener('submit', generateInvoice);

// Event listener for download PDF button
document.getElementById('downloadPDF').addEventListener('click', downloadPDF);
