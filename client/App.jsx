import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Search from "./pages/Search";
import SearchCustomer from "./pages/SearchCustomer";
import SearchGuarantor from "./pages/SearchGuarantor";
import SearchReceipts from "./pages/SearchReceipts";
import EMICalculator from "./pages/EMICalculator";
import Entries from "./pages/Entries";
import Edits from "./pages/Edits";
import EditCustomer from "./pages/EditCustomer";
import EditCoBorrower from "./pages/EditCoBorrower";
import EditGuarantor from "./pages/EditGuarantor";
import EditVehicle from "./pages/EditVehicle";
import ChangeGuarantor from "./pages/ChangeGuarantor";
import ChangeEMIDate from "./pages/ChangeEMIDate";
import ChangeHP from "./pages/ChangeHP";
import EditExtAcNo from "./pages/EditExtAcNo";
import RestructureLoan from "./pages/RestructureLoan";
import SelectLoan from "./pages/SelectLoan";
import NotFound from "./pages/NotFound";
import EmiDueReport from "./pages/reportpages/EmiDueReport";
import EmiHistory from "./pages/reportpages/EmiHistory";
import ReceiptHistory from "./pages/reportpages/ReceiptHistory";
import LoanLedger from "./pages/reportpages/LoanLedger";
import EmiExpected from "./pages/reportpages/EmiExpected";
import EmiSchedule from "./pages/reportpages/EmiSchedule";
import ChqReturnReport from "./pages/reportpages/ChqReturnReport";

import CustomerWithoutLoan from "./pages/reportpages/CustomerWOLoan";
import LoanAcStatement from "./pages/reportpages/LoanAcStatement";
import FirstLastEmi from "./pages/reportpages/FirstLastEMIReport";
import LoansGiven from "./pages/reportpages/LoansGiven";
import LoanStatusReport from "./pages/reportpages/LoanStatusReport";
import LccReport from "./pages/reportpages/LccReport";
import BucketList from "./pages/reportpages/BucketList";
import OverdueLoans from "./pages/reportpages/OverdueLoan";
import RecalledLoans from "./pages/reportpages/RecalledLoans";

import VehiclesDelivered from "./pages/reportpages/VehiclesDelivered";
import DealerWiseVehicle from "./pages/reportpages/DealerWiseVehicle";
import DealerPaymentDue from "./pages/reportpages/DealerPaymentDue";
import DealerPaymentReport from "./pages/reportpages/DealerPaymentReport";
import InsuranceDueReport from "./pages/reportpages/InsuranceDueReport";
import VehiclesInPossession from "./pages/reportpages/VehiclesInPessiossion";

import CollectionAgentLoanCount from "./pages/reportpages/CollectionAgentLoanCount";
import CustomerWithoutCollArea from "./pages/reportpages/CustomersNoCollectionAre";
import CustomerList from "./pages/reportpages/CustomerList";
import DealerList from "./pages/reportpages/DealerList";
import CustomersNoCollectionArea from "./pages/reportpages/CustomersNoCollectionAre";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/search" element={<Search />} />
          <Route path="/search/customer" element={<SearchCustomer />} />
          <Route path="/search/guarantor" element={<SearchGuarantor />} />
          <Route path="/search/receipts" element={<SearchReceipts />} />
          <Route path="/emi-calculator" element={<EMICalculator />} />
          <Route path="/entries" element={<Entries />} />
          <Route path="/transactions" element={<NotFound />} />
          <Route path="/updates" element={<NotFound />} />
          <Route path="/edits" element={<Edits />} />
          <Route path="/edits/customer" element={<EditCustomer />} />
          <Route path="/edits/co-borrower" element={<EditCoBorrower />} />
          <Route path="/edits/guarantor" element={<EditGuarantor />} />
          <Route path="/edits/loan" element={<SelectLoan />} />
          <Route path="/edits/restructure-loan" element={<RestructureLoan />} />
          <Route path="/edits/vehicle" element={<EditVehicle />} />
          <Route path="/edits/change-guarantor" element={<ChangeGuarantor />} />
          <Route path="/edits/change-hp" element={<ChangeHP />} />
          <Route path="/edits/change-emi-date" element={<ChangeEMIDate />} />
          <Route path="/edits/edit-ext-ac-no" element={<EditExtAcNo />} />
          <Route path="/reports/emidue" element={<EmiDueReport />} />
<Route path="/reports/emihistory" element={<EmiHistory />} />
<Route path="/reports/receipthistory" element={<ReceiptHistory />} />
<Route path="/reports/loanledger" element={<LoanLedger />} />
<Route path="/reports/emiexpected" element={<EmiExpected />} />
<Route path="/reports/emischedule" element={<EmiSchedule />} />
<Route path="/reports/chequereturn" element={<ChqReturnReport />} />

<Route path="/reports/customerwithoutloan" element={<CustomerWithoutLoan />} />
<Route path="/reports/loanacstatement" element={<LoanAcStatement />} />
<Route path="/reports/firstlastemi" element={<FirstLastEmi />} />
<Route path="/reports/loansgiven" element={<LoansGiven />} />
<Route path="/reports/loanstatus" element={<LoanStatusReport />} />
<Route path="/reports/lccreport" element={<LccReport />} />
<Route path="/reports/bucketlist" element={<BucketList />} />
<Route path="/reports/overdueloans" element={<OverdueLoans />} />
<Route path="/reports/recalledloans" element={<RecalledLoans />} />

<Route path="/reports/vehiclesdelivered" element={<VehiclesDelivered />} />
<Route path="/reports/dealerwisevehicle" element={<DealerWiseVehicle />} />
<Route path="/reports/dealerpaymentdue" element={<DealerPaymentDue />} />
<Route path="/reports/dealerpaymentreport" element={<DealerPaymentReport />} />
<Route path="/reports/insurancedue" element={<InsuranceDueReport />} />
<Route path="/reports/vehiclesinpossession" element={<VehiclesInPossession />} />

<Route path="/reports/collectionagentloancount" element={<CollectionAgentLoanCount />} />
<Route path="/reports/customernocollectionarea" element={<CustomersNoCollectionArea />} />
<Route path="/reports/customerlist" element={<CustomerList />} />
<Route path="/reports/dealerlist" element={<DealerList />} />

          <Route path="/setup" element={<NotFound />} />
          <Route path="/accounts" element={<NotFound />} />
          <Route path="/settings" element={<NotFound />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")).render(<App />);
