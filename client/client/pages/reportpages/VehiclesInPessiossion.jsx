import React from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';

const RepossessedVehiclesList = () => {
  return (
    <DashboardLayout>
    <main className="flex-1 flex flex-col bg-gray-100 min-h-screen">
      {/* Blue header */}
      <div className="bg-blue-800 text-white p-4">
        <h2 className="text-xl text-center font-bold">Re-Possessed Vehicles List</h2>
      </div>

      {/* White card */}
      <div className="flex justify-center p-6">
        <div className="w-full max-w-5xl bg-white rounded-lg shadow-md p-6 space-y-6">

          {/* Top section: title and date */}
          <div className="flex justify-between items-center border-b pb-4">
            <h1 className="text-2xl font-bold text-gray-800">Re-Possessed Vehicles List</h1>
            <p className="text-gray-600">12-Jun-2025</p>
          </div>

          {/* Vehicle entry */}
          <div className="space-y-4">
            {/* Vehicle number */}
            <div className="flex items-start space-x-6">
              <div className="w-8 text-lg font-semibold text-gray-700">1</div>
              <div className="flex-1 border-b pb-8">
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-2 text-sm">
                  <div className="flex"><p className="font-bold w-28">Del. Date:</p><p>16-07-2017</p></div>
                  <div className="flex"><p className="font-bold w-28">Cust Name:</p><p>VIKRAM</p></div>
                  <div className="flex"><p className="font-bold w-28">Loan Ac No:</p><p>RAM-17A21DC-000165</p></div>
                  <div className="flex"><p className="font-bold w-28">Regn. No:</p><p>HR55AB2452</p></div>
                  <div className="flex"><p className="font-bold w-28">Ch. No.:</p><p>MCS3E8P25JAG087</p></div>
                  <div className="flex"><p className="font-bold w-28">En. No.:</p><p>A7F1103716</p></div>
                  <div className="flex"><p className="font-bold w-28">Model/Color:</p><p>7-2017, Green / Yellow</p></div>
                  <div className="flex"><p className="font-bold w-28">Veh Make:</p><p>Baxy Express G Cng</p></div>
                  <div className="col-span-1 md:col-span-2 lg:col-span-3 flex"><p className="font-bold w-28">Resi Add:</p><p>H.NO-383-K VILL SIKOHPUR, TEH SOHNA GURGAON, Gurugram, Haryana [HR]</p></div>
                  <div className="flex"><p className="font-bold w-28">Ph. No.:</p><p>9015715346,</p></div>
                  <div className="flex"><p className="font-bold w-28">Loan Amt.:</p><p>1,90,000.00</p></div>
                  <div className="flex"><p className="font-bold w-28">OverDue Amt.:</p><p>2,25,720.00</p></div>
                  <div className="flex"><p className="font-bold w-28">Total Due Amt.:</p><p>2,25,720.00</p></div>
                  <div className="flex"><p className="font-bold w-28">Seized On:</p><p>21-03-2018</p></div>
                  <div className="col-span-1 md:col-span-2 lg:col-span-4 flex"><p className="font-bold w-28">Remarks:</p><p>SALE TO PRIYANKA W/O MANOJ YADAV RB--18</p></div>
                </div>

                {/* Action buttons */}
                <div className="mt-4 flex space-x-8 text-blue-600 font-semibold">
                  <button className="hover:underline">Re-Print Notice</button>
                  <button className="hover:underline">Outright Sale</button>
                  <button className="hover:underline">Loan Transfer</button>
                  <button className="hover:underline">Loan Settlement</button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
    </DashboardLayout>
  );
};

export default RepossessedVehiclesList;
