import React from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';

const chequeData = [
  {
    no: 1,
    name: 'DEBU NASKAR',
    phone: 'Ph- 8587835725',
    loanAcNo: 'RAM-18M1763-000497',
    ledgerNo: 'RA-484',
    regnNo: '',
    chqNo: '079708 AB',
    rcpt: 'Rcpt No - 101-7D6-004847',
    dt: 'Dt - 24-10-18',
    returnDate: '15-11-2018',
    amount: '81,000.00',
    type: 'EMI',
  },
  {
    no: 2,
    name: 'MINTU PRASAD',
    phone: 'Ph- 8800375236, 9891373733',
    loanAcNo: 'RAM-18S1D8B-000639',
    ledgerNo: 'RA-622',
    regnNo: '',
    chqNo: '047759 BANK',
    rcpt: 'Rcpt No - 101-A96-005177',
    dt: 'Dt - 16-11-18',
    returnDate: '06-12-2018',
    amount: '10,600.00',
    type: 'EMI',
  },
  {
    no: 3,
    name: 'LAXMAN SINGH',
    phone: 'Ph- 7065488439,',
    loanAcNo: 'RAM-18S1E5B-000624',
    ledgerNo: 'RA-612',
    regnNo: 'HR55AD8858',
    chqNo: '051278',
    rcpt: 'Rcpt No - 101-A64-006722',
    dt: 'Dt - 29-01-19',
    returnDate: '31-01-2019',
    amount: '21,200.00',
    type: 'EMI',
  },
  {
    no: 4,
    name: 'LAXMAN SINGH',
    phone: 'Ph- 7065488439,',
    loanAcNo: 'RAM-18A22A2-000608',
    ledgerNo: 'Rb-25',
    regnNo: 'HR55Y4019',
    chqNo: '051278 THE',
    rcpt: 'Rcpt No - 101-1C3-006723',
    dt: 'Dt - 29-01-19',
    returnDate: '31-01-2019',
    amount: '21,640.00',
    type: 'EMI',
  },
  {
    no: 5,
    name: 'AJAY',
    phone: 'Ph- 9999764616,',
    loanAcNo: 'RAM-18D1270-000861',
    ledgerNo: 'RA-835',
    regnNo: 'HR55AE0447',
    chqNo: '000183 ICIC',
    rcpt: 'Rcpt No - 101-AAA-008816',
    dt: 'Dt - 19-04-19',
    returnDate: '23-04-2019',
    amount: '20,000.00',
    type: 'EMI',
  },
  {
    no: 6,
    name: 'AMIT',
    phone: 'Ph- 9466660104,',
    loanAcNo: 'RAM-17O1CFB-000245',
    ledgerNo: 'RA-259',
    regnNo: '',
    chqNo: '390465 SBI',
    rcpt: 'Rcpt No - 101-6F8-009584',
    dt: 'Dt - 20-05-19',
    returnDate: '23-05-2019',
    amount: '60,000.00',
    type: 'EMI',
  },
  {
    no: 7,
    name: 'AMIT',
    phone: 'Ph- 9466660104,',
    loanAcNo: 'RAM-17O1CFB-000245',
    ledgerNo: 'RA-259',
    regnNo: 'HR55Y4019',
    chqNo: '390465 SBI',
    rcpt: 'Rcpt No - 101-6F8-009584',
    dt: 'Dt - 20-05-19',
    returnDate: '23-05-2019',
    amount: '60,000.00',
    type: 'EMI',
  },
  {
    no: 8,
    name: 'HIMANSHU RAGHAV',
    phone: 'Ph- 9810689495,',
    loanAcNo: 'RAM-17J2AB3-000082',
    ledgerNo: 'RA-88',
    regnNo: '',
    chqNo: '933243 SBI',
    rcpt: 'Rcpt No - 101-5D3-009945',
    dt: 'Dt - 01-06-19',
    returnDate: '03-06-2019',
    amount: '81,100.00',
    type: 'EMI',
  },
  // ... (add the rest in the same format up to no: 15)
];

const ChequeReturnReport = () => {
 return (
  <DashboardLayout>
    <main className="flex-1 flex flex-col bg-gray-100 min-h-screen">
      {/* Blue header */}
      <div className="bg-blue-800 text-white p-4">
        <h2 className="text-xl text-center font-bold">Cheque Return Report</h2>
      </div>

      {/* White card */}
      <div className="flex justify-center p-6">
        <div className="w-full max-w-6xl bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Report Date: 12-Jun-2025</h3>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded">
              Export to Excel
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-300">
                  <th className="py-2">No.</th>
                  <th className="py-2">Customer Name</th>
                  <th className="py-2">Loan Ac No.</th>
                  <th className="py-2">Ledger No.</th>
                  <th className="py-2">Regn No.</th>
                  <th className="py-2">Chq No.</th>
                  <th className="py-2">Return Date</th>
                  <th className="py-2 text-right">Chq Amt.</th>
                </tr>
              </thead>
              <tbody>
                {chequeData.map((item, index) => (
                  <tr
                    key={item.no}
                    className={index % 2 === 0 ? 'bg-white' : 'bg-gray-100'}
                  >
                    <td className="py-2 align-top">{item.no}</td>
                    <td className="py-2 align-top">
                      <div className="font-bold">{item.name}</div>
                      <div className="text-xs text-gray-600">{item.phone}</div>
                    </td>
                    <td className="py-2 align-top">{item.loanAcNo}</td>
                    <td className="py-2 align-top">{item.ledgerNo}</td>
                    <td className="py-2 align-top">{item.regnNo}</td>
                    <td className="py-2 align-top">
                      <div className="font-bold">{item.chqNo}</div>
                      <div className="text-xs text-gray-600">{item.rcpt}</div>
                      <div className="text-xs text-gray-600">{item.dt}</div>
                    </td>
                    <td className="py-2 align-top">{item.returnDate}</td>
                    <td className="py-2 align-top text-right">
                      <div className="font-bold">{item.amount}</div>
                      <div className="text-xs text-gray-600">{item.type}</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 flex justify-end gap-3">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded">
              Get Report
            </button>
            <button className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-6 rounded">
              Clear All
            </button>
          </div>
        </div>
      </div>
    </main>
    </DashboardLayout>
  );
}

export default ChequeReturnReport;
