import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import EmiDueReport from "./components/Emiduereport";
import EMIHistory from "./components/EmiHistory";
import ReceiptHistory from "./components/ReceiptHistory";
import LoanLedger from "./components/LoanLedger";
import EmiExpectedReport from "./components/EmiExpected";
import EmiSchedule from "./components/EmiSchedule";
import ChequeReturnReport from "./components/Chq.ReturnReport";
import CustomersWithoutLoans from "./components/CustomerWOloan";
import LoanAccountStatement from "./components/LoanACStatement";
import FirstLastEmiReport from "./components/FirstLastEMIReport";
import LoansGiven from "./components/LoansGiven";
import StatusWiseLoanCount from "./components/LoanStatusReport";
import LccReport from "./components/LccReport";
import BucketList from "./components/BucketList";
import OverdueLoans from "./components/OverdueLoan";
import RecalledLoans from "./components/RecalledLoans";
import VehiclesFinancedReport from "./components/VehiclesDelivered";
import DealerWiseVehiclesReport from "./components/DelearWisevehicle";
import DealerPaymentPending from "./components/DealerPaymentDue";
import DealerWisePaymentReport from "./components/DealerPaymentReport";
import InsuranceReport from "./components/InsuranceDueReport";
import RepossessedVehiclesList from "./components/VehiclesInPessiossion";
import CollectionAgentLoanCount from "./components/CollectionAgentLoanCount";
import CustomersNoCollectionArea from "./components/CustomersNoCollectionAre";
import Customerlist from "./components/CustomerList";
import Dealerlist from "./components/DealerList";


function App() {
  return (
    <Router>
      <div className="flex min-h-screen">
        {/* Left Sidebar */}
        <aside className="w-64  bg-gray-800 text-white p-4">
          <h1 className="text-xl font-bold mb-4">My App</h1>
          <nav className="space-y-2">
            <Link to="/wmiduereport" className="block hover:bg-gray-700 px-2 py-1 rounded">
              EMI Due Report
            </Link>
            <Link to="/emihistory" className="block hover:bg-gray-700 px-2 py-1 rounded">
              EMI History
            </Link>
             <Link to="/receipthistory" className="block hover:bg-gray-700 px-2 py-1 rounded">
             Reciept History
            </Link>
             <Link to="/loanledger" className="block hover:bg-gray-700 px-2 py-1 rounded">
             Loan Ledger
            </Link>
             <Link to="/emiexpectedreport" className="block hover:bg-gray-700 px-2 py-1 rounded">
            Emi expected Report
            </Link>
             <Link to="/emischedule" className="block hover:bg-gray-700 px-2 py-1 rounded">
            Emi Schedule
            </Link>
             <Link to="/chqreturnreport" className="block hover:bg-gray-700 px-2 py-1 rounded">
            Chq. Return Report
            </Link>
            <Link to="/customerloan" className="block hover:bg-gray-700 px-2 py-1 rounded">
            Coustomer Loan
            </Link>
              <Link to="/loanstatement" className="block hover:bg-gray-700 px-2 py-1 rounded">
           Loan AC Statement
            </Link>
                <Link to="/firstlastreport" className="block hover:bg-gray-700 px-2 py-1 rounded">
           First and Last EMI REPORT
            </Link>
                   <Link to="/loangiven" className="block hover:bg-gray-700 px-2 py-1 rounded">
         Loan Given
            </Link>
              <Link to="/loanstatus" className="block hover:bg-gray-700 px-2 py-1 rounded">
         Loan count 
            </Link>
               <Link to="/llcreport" className="block hover:bg-gray-700 px-2 py-1 rounded">
         LLC report
            </Link>
                <Link to="/bucketsize" className="block hover:bg-gray-700 px-2 py-1 rounded">
     Bucket SIze
            </Link>
                  <Link to="/overdueloan" className="block hover:bg-gray-700 px-2 py-1 rounded">
Overgue Loan
            </Link>
            


                  <Link to="/recallloan" className="block hover:bg-gray-700 px-2 py-1 rounded">
Recall Loan
            </Link>
             <Link to="/vehicaldelivered" className="block hover:bg-gray-700 px-2 py-1 rounded">
Vehical delivered            </Link>
 <Link to="/wisevehicle" className="block hover:bg-gray-700 px-2 py-1 rounded">
Wise Vehicle           </Link>
 <Link to="/dealerpayment" className="block hover:bg-gray-700 px-2 py-1 rounded">
Dealer Payment Due      </Link>
 <Link to="/dealerreport" className="block hover:bg-gray-700 px-2 py-1 rounded">
Dealer Payment Report     </Link>
 <Link to="/insurancereport" className="block hover:bg-gray-700 px-2 py-1 rounded">
Insurance Report     </Link>
 <Link to="/repossesvehicle" className="block hover:bg-gray-700 px-2 py-1 rounded">
REpossessed Vehicle    </Link>
 <Link to="/collectionagent" className="block hover:bg-gray-700 px-2 py-1 rounded">
Collection Agent    </Link>
 <Link to="/customercollection" className="block hover:bg-gray-700 px-2 py-1 rounded">
Coustomer Collection   </Link>
 <Link to="/customerlist" className="block hover:bg-gray-700 px-2 py-1 rounded">
Customer list     </Link>
 <Link to="/dealerlist" className="block hover:bg-gray-700 px-2 py-1 rounded">
Dealer List</Link>
            
            


          </nav>
        </aside>

        {/* Main content area */}
        <main className="flex-1 p-6 bg-gray-50">
          <Routes>
            <Route path="/wmiduereport" element={<EmiDueReport />} />
            <Route path="/emihistory" element={<EMIHistory />} />
             <Route path="/receipthistory" element={<ReceiptHistory />} />
            <Route path="/loanledger" element={<LoanLedger />} />
             <Route path="/emiexpectedreport" element={<EmiExpectedReport />} />
                <Route path="/emischedule" element={<EmiSchedule />} />
                      <Route path="/chqreturnreport" element={<ChequeReturnReport/>} />

            <Route path="/customerloan" element={<CustomersWithoutLoans/>} />
             <Route path="/loanstatement" element={<LoanAccountStatement/>} />
             <Route path="/firstlastreport" element={<FirstLastEmiReport/>} />
              <Route path="/loangiven" element={<LoansGiven/>} />
         
            <Route path="/loanstatus" element={<StatusWiseLoanCount/>} />
              <Route path="/llcreport" element={<LccReport/>} />
       <Route path="/bucketsize" element={<BucketList/>} />
        <Route path="/overdueloan" element={<OverdueLoans/>} />
  <Route path="/recallloan" element={<RecalledLoans/>} />
    <Route path="/vehicaldelivered" element={<VehiclesFinancedReport/>} />
     <Route path="/wisevehicle" element={<DealerWiseVehiclesReport/>} />
        <Route path="/dealerpayment" element={<DealerPaymentPending/>} />
        <Route path="/dealerreport" element={<DealerWisePaymentReport/>} />
        <Route path="/insurancereport" element={<InsuranceReport/>} />
        <Route path="/repossesvehicle" element={<RepossessedVehiclesList/>} />
        <Route path="/collectionagent" element={<CollectionAgentLoanCount/>} />
        <Route path="/customercollection" element={<CustomersNoCollectionArea/>} />
         <Route path="/customerlist" element={<Customerlist/>} />
          <Route path="/dealerpayment" element={<DealerPaymentPending/>} />
    
          <Route path="/dealerlist" element={<Dealerlist/>} />
    





          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
