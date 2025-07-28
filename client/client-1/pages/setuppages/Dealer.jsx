import React, { useState } from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';

const Dealers = () => {
  const [dealerData, setDealerData] = useState({
    dealerId: 'ST0005',
    dealerName: '',
    dealerType: 'Select Dealer',
    dealerFor: '',
    state: 'Select',
    contactPerson: '',
    email: '',
    phone1: '',
    phone2: '',
    city: '',
    subventionAmt: ''
  });

  const handleInputChange = (field, value) => {
    setDealerData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = () => {
    console.log('Saving dealer data:', dealerData);
    // Add your save logic here
  };

  const handleCancel = () => {
    setDealerData({
      dealerId: 'ST0005',
      dealerName: '',
      dealerType: 'Select Dealer',
      dealerFor: '',
      state: 'Select',
      contactPerson: '',
      email: '',
      phone1: '',
      phone2: '',
      city: '',
      subventionAmt: ''
    });
  };

  return (
    <DashboardLayout>
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Page Header */}
      <div className="text-center bg-gray-600 text-white p-6 rounded-lg mb-8">
        <h1 className="text-2xl font-semibold">ADD /EDIT DEALER</h1>
      </div>

      {/* Dealer Form Container */}
      <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
        <h2 className="text-xl font-semibold text-gray-800 mb-6 pb-3 border-b-2 border-gray-100">
          Dealer Details
        </h2>

        {/* Basic Information Grid */}
        <div className="border-2 border-cyan-400 rounded-lg p-8 mb-6 bg-white">
          <div className="space-y-6">
            {/* Row 1: Dealer ID and Select Dealer Type */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label className="block mb-2 font-medium text-gray-600 text-sm">
                  Dealer ID
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                  value={dealerData.dealerId}
                  onChange={(e) => handleInputChange('dealerId', e.target.value)}
                />
              </div>

              <div className="flex flex-col">
                <label className="block mb-2 font-medium text-gray-600 text-sm">
                  Select Dealer Type
                </label>
                <select
                  className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 appearance-none cursor-pointer"
                  value={dealerData.dealerType}
                  onChange={(e) => handleInputChange('dealerType', e.target.value)}
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
                    backgroundPosition: 'right 12px center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '16px',
                    paddingRight: '40px'
                  }}
                >
                  <option>Select Dealer</option>
                  <option>Authorized Dealer</option>
                  <option>Franchise Dealer</option>
                  <option>Independent Dealer</option>
                </select>
              </div>
            </div>

            {/* Row 2: Dealer Name and Dealer For */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label className="block mb-2 font-medium text-gray-600 text-sm">
                  Dealer Name
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                  value={dealerData.dealerName}
                  onChange={(e) => handleInputChange('dealerName', e.target.value)}
                />
              </div>

              <div className="flex flex-col">
                <label className="block mb-2 font-medium text-gray-600 text-sm">
                  Dealer For
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                  value={dealerData.dealerFor}
                  onChange={(e) => handleInputChange('dealerFor', e.target.value)}
                />
              </div>
            </div>

            {/* Row 3: STATE only (left column) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label className="block mb-2 font-medium text-gray-600 text-sm">
                  STATE
                </label>
                <select
                  className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 appearance-none cursor-pointer"
                  value={dealerData.state}
                  onChange={(e) => handleInputChange('state', e.target.value)}
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
                    backgroundPosition: 'right 12px center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '16px',
                    paddingRight: '40px'
                  }}
                >
                  <option>Select</option>
                  <option>Andhra Pradesh</option>
                  <option>Arunachal Pradesh</option>
                  <option>Assam</option>
                  <option>Bihar</option>
                  <option>Chhattisgarh</option>
                  <option>Goa</option>
                  <option>Gujarat</option>
                  <option>Haryana</option>
                  <option>Himachal Pradesh</option>
                  <option>Jharkhand</option>
                  <option>Karnataka</option>
                  <option>Kerala</option>
                  <option>Madhya Pradesh</option>
                  <option>Maharashtra</option>
                  <option>Manipur</option>
                  <option>Meghalaya</option>
                  <option>Mizoram</option>
                  <option>Nagaland</option>
                  <option>Odisha</option>
                  <option>Punjab</option>
                  <option>Rajasthan</option>
                  <option>Sikkim</option>
                  <option>Tamil Nadu</option>
                  <option>Telangana</option>
                  <option>Tripura</option>
                  <option>Uttar Pradesh</option>
                  <option>Uttarakhand</option>
                  <option>West Bengal</option>
                  <option>Andaman and Nicobar Islands</option>
                  <option>Chandigarh</option>
                  <option>Dadra and Nagar Haveli and Daman and Diu</option>
                  <option>Delhi</option>
                  <option>Jammu and Kashmir</option>
                  <option>Ladakh</option>
                  <option>Lakshadweep</option>
                  <option>Puducherry</option>
                </select>
              </div>
              {/* Empty right column */}
              <div></div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="border-2 border-cyan-400 rounded-lg p-8 mb-6 bg-white">
          <div className="space-y-6">
            {/* Row 1: Contact Person and Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label className="block mb-2 font-medium text-gray-600 text-sm">
                  Contact Person
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                  value={dealerData.contactPerson}
                  onChange={(e) => handleInputChange('contactPerson', e.target.value)}
                />
              </div>

              <div className="flex flex-col">
                <label className="block mb-2 font-medium text-gray-600 text-sm">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                  value={dealerData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                />
              </div>
            </div>

            {/* Row 2: Phone 1 and Phone 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label className="block mb-2 font-medium text-gray-600 text-sm">
                  Phone 1
                </label>
                <input
                  type="tel"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                  value={dealerData.phone1}
                  onChange={(e) => handleInputChange('phone1', e.target.value)}
                />
              </div>

              <div className="flex flex-col">
                <label className="block mb-2 font-medium text-gray-600 text-sm">
                  Phone 2
                </label>
                <input
                  type="tel"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                  value={dealerData.phone2}
                  onChange={(e) => handleInputChange('phone2', e.target.value)}
                />
              </div>
            </div>

            {/* Row 3: City and Subvention Amt */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label className="block mb-2 font-medium text-gray-600 text-sm">
                  City
                </label>
                <select
                  className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 appearance-none cursor-pointer"
                  value={dealerData.city}
                  onChange={(e) => handleInputChange('city', e.target.value)}
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
                    backgroundPosition: 'right 12px center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '16px',
                    paddingRight: '40px'
                  }}
                >
                  <option value="">Select City</option>
                  <option value="Mumbai">Mumbai</option>
                  <option value="Pune">Pune</option>
                  <option value="Bangalore">Bangalore</option>
                  <option value="Chennai">Chennai</option>
                  <option value="Delhi">Delhi</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label className="block mb-2 font-medium text-gray-600 text-sm">
                  Subvention Amt.
                </label>
                <input
                  type="number"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                  value={dealerData.subventionAmt}
                  onChange={(e) => handleInputChange('subventionAmt', e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Form Actions */}
        <div className="flex gap-4 flex-wrap">
          <button
            className="px-8 py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition-colors duration-200 min-w-24"
            onClick={handleSave}
          >
            Save
          </button>
          <button
            className="px-8 py-3 bg-gray-500 text-white font-semibold rounded-md hover:bg-gray-600 transition-colors duration-200 min-w-24"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
    </DashboardLayout>
  );
};

export default Dealers;