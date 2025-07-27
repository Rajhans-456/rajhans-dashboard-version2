import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import EmiDueReport from "../../motors-20/client/pages/reportpages/Emiduereport";
import EMIHistory from "../../motors-20/client/pages/reportpages/EmiHistory";
import ReceiptHistory from "../../motors-20/client/pages/reportpages/ReceiptHistory";
import LoanLedger from "../../motors-20/client/pages/reportpages/LoanLedger";
import EmiExpectedReport from "../../motors-20/client/pages/reportpages/EmiExpected";
import EmiSchedule from "../../motors-20/client/pages/reportpages/EmiSchedule";
import ChequeReturnReport from "../../motors-20/client/pages/reportpages/Chq.ReturnReport";
import CustomersWithoutLoans from "../../motors-20/client/pages/reportpages/CustomerWOloan";
import LoanAccountStatement from "../../motors-20/client/pages/reportpages/LoanACStatement";
import FirstLastEmiReport from "../../motors-20/client/pages/reportpages/FirstLastEMIReport";
import LoansGiven from "../../motors-20/client/pages/reportpages/LoansGiven";
import StatusWiseLoanCount from "../../motors-20/client/pages/reportpages/LoanStatusReport";
import LccReport from "../../motors-20/client/pages/reportpages/LccReport";
import BucketList from "../../motors-20/client/pages/reportpages/BucketList";
import OverdueLoans from "../../motors-20/client/pages/reportpages/OverdueLoan";
import RecalledLoans from "../../motors-20/client/pages/reportpages/RecalledLoans";
import VehiclesFinancedReport from "../../motors-20/client/pages/reportpages/VehiclesDelivered";
import DealerWiseVehiclesReport from "../../motors-20/client/pages/reportpages/DelearWisevehicle";
import DealerPaymentPending from "../../motors-20/client/pages/reportpages/DealerPaymentDue";
import DealerWisePaymentReport from "../../motors-20/client/pages/reportpages/DealerPaymentReport";
import InsuranceReport from "../../motors-20/client/pages/reportpages/InsuranceDueReport";
import RepossessedVehiclesList from "../../motors-20/client/pages/reportpages/VehiclesInPessiossion";
import CollectionAgentLoanCount from "../../motors-20/client/pages/reportpages/CollectionAgentLoanCount";
import CustomersNoCollectionArea from "../../motors-20/client/pages/reportpages/CustomersNoCollectionAre";
import Customerlist from "../../motors-20/client/pages/reportpages/CustomerList";
import Dealerlist from "../../motors-20/client/pages/reportpages/DealerList";

function App() {
  return (
    <Router>
      <div className="flex min-h-screen">
        {/* Left Sidebar */}
        <aside className="w-64  bg-gray-800 text-white p-4">
          <h1 className="text-xl font-bold mb-4">My App</h1>
          <nav className="space-y-2">
            <Link
              to="/wmiduereport"
              className="block hover:bg-gray-700 px-2 py-1 rounded"
            >
              EMI Due Report
            </Link>
            <Link
              to="/emihistory"
              className="block hover:bg-gray-700 px-2 py-1 rounded"
            >
              EMI History
            </Link>
            <Link
              to="/receipthistory"
              className="block hover:bg-gray-700 px-2 py-1 rounded"
            >
              Reciept History
            </Link>
            <Link
              to="/loanledger"
              className="block hover:bg-gray-700 px-2 py-1 rounded"
            >
              Loan Ledger
            </Link>
            <Link
              to="/emiexpectedreport"
              className="block hover:bg-gray-700 px-2 py-1 rounded"
            >
              Emi expected Report
            </Link>
            <Link
              to="/emischedule"
              className="block hover:bg-gray-700 px-2 py-1 rounded"
            >
              Emi Schedule
            </Link>
            <Link
              to="/chqreturnreport"
              className="block hover:bg-gray-700 px-2 py-1 rounded"
            >
              Chq. Return Report
            </Link>
            <Link
              to="/customerloan"
              className="block hover:bg-gray-700 px-2 py-1 rounded"
            >
              Coustomer Loan
            </Link>
            <Link
              to="/loanstatement"
              className="block hover:bg-gray-700 px-2 py-1 rounded"
            >
              Loan AC Statement
            </Link>
            <Link
              to="/firstlastreport"
              className="block hover:bg-gray-700 px-2 py-1 rounded"
            >
              First and Last EMI REPORT
            </Link>
            <Link
              to="/loangiven"
              className="block hover:bg-gray-700 px-2 py-1 rounded"
            >
              Loan Given
            </Link>
            <Link
              to="/loanstatus"
              className="block hover:bg-gray-700 px-2 py-1 rounded"
            >
              Loan count
            </Link>
            <Link
              to="/llcreport"
              className="block hover:bg-gray-700 px-2 py-1 rounded"
            >
              LLC report
            </Link>
            <Link
              to="/bucketsize"
              className="block hover:bg-gray-700 px-2 py-1 rounded"
            >
              Bucket SIze
            </Link>
            <Link
              to="/overdueloan"
              className="block hover:bg-gray-700 px-2 py-1 rounded"
            >
              Overgue Loan
            </Link>

            <Link
              to="/recallloan"
              className="block hover:bg-gray-700 px-2 py-1 rounded"
            >
              Recall Loan
            </Link>
            <Link
              to="/vehicaldelivered"
              className="block hover:bg-gray-700 px-2 py-1 rounded"
            >
              Vehical delivered{" "}
            </Link>
            <Link
              to="/wisevehicle"
              className="block hover:bg-gray-700 px-2 py-1 rounded"
            >
              Wise Vehicle{" "}
            </Link>
            <Link
              to="/dealerpayment"
              className="block hover:bg-gray-700 px-2 py-1 rounded"
            >
              Dealer Payment Due{" "}
            </Link>
            <Link
              to="/dealerreport"
              className="block hover:bg-gray-700 px-2 py-1 rounded"
            >
              Dealer Payment Report{" "}
            </Link>
            <Link
              to="/insurancereport"
              className="block hover:bg-gray-700 px-2 py-1 rounded"
            >
              Insurance Report{" "}
            </Link>
            <Link
              to="/repossesvehicle"
              className="block hover:bg-gray-700 px-2 py-1 rounded"
            >
              REpossessed Vehicle{" "}
            </Link>
            <Link
              to="/collectionagent"
              className="block hover:bg-gray-700 px-2 py-1 rounded"
            >
              Collection Agent{" "}
            </Link>
            <Link
              to="/customercollection"
              className="block hover:bg-gray-700 px-2 py-1 rounded"
            >
              Coustomer Collection{" "}
            </Link>
            <Link
              to="/customerlist"
              className="block hover:bg-gray-700 px-2 py-1 rounded"
            >
              Customer list{" "}
            </Link>
            <Link
              to="/dealerlist"
              className="block hover:bg-gray-700 px-2 py-1 rounded"
            >
              Dealer List
            </Link>
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
            <Route path="/chqreturnreport" element={<ChequeReturnReport />} />

            <Route path="/customerloan" element={<CustomersWithoutLoans />} />
            <Route path="/loanstatement" element={<LoanAccountStatement />} />
            <Route path="/firstlastreport" element={<FirstLastEmiReport />} />
            <Route path="/loangiven" element={<LoansGiven />} />

            <Route path="/loanstatus" element={<StatusWiseLoanCount />} />
            <Route path="/llcreport" element={<LccReport />} />
            <Route path="/bucketsize" element={<BucketList />} />
            <Route path="/overdueloan" element={<OverdueLoans />} />
            <Route path="/recallloan" element={<RecalledLoans />} />
            <Route
              path="/vehicaldelivered"
              element={<VehiclesFinancedReport />}
            />
            <Route path="/wisevehicle" element={<DealerWiseVehiclesReport />} />
            <Route path="/dealerpayment" element={<DealerPaymentPending />} />
            <Route path="/dealerreport" element={<DealerWisePaymentReport />} />
            <Route path="/insurancereport" element={<InsuranceReport />} />
            <Route
              path="/repossesvehicle"
              element={<RepossessedVehiclesList />}
            />
            <Route
              path="/collectionagent"
              element={<CollectionAgentLoanCount />}
            />
            <Route
              path="/customercollection"
              element={<CustomersNoCollectionArea />}
            />
            <Route path="/customerlist" element={<Customerlist />} />
            <Route path="/dealerpayment" element={<DealerPaymentPending />} />

            <Route path="/dealerlist" element={<Dealerlist />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
