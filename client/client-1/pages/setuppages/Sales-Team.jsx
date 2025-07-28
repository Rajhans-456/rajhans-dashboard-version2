import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import DashboardLayout from '../../components/layout/DashboardLayout';

const AddEditTeamForm = () => {
  const [formData, setFormData] = useState({
    actionType: 'Add New Team',
    teamId: 'STD005',
    teamLeaderName: '',
    homeBranch: 'SELECT'
  });

  const [dropdowns, setDropdowns] = useState({
    actionType: false,
    homeBranch: false
  });

  const actionTypes = ['Add New Team', 'Edit Team'];
  const branches = ['SELECT', 'Branch A', 'Branch B'];

  const toggleDropdown = (dropdown) => {
    setDropdowns(prev => ({
      ...prev,
      [dropdown]: !prev[dropdown]
    }));
  };

  const selectOption = (dropdown, value) => {
    setFormData(prev => ({
      ...prev,
      [dropdown]: value
    }));
    setDropdowns(prev => ({
      ...prev,
      [dropdown]: false
    }));
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = () => {
    console.log('Form data:', formData);
    alert('Team saved successfully!');
  };

  const handleCancel = () => {
    setFormData({
      actionType: 'Add New Team',
      teamId: 'STD005',
      teamLeaderName: '',
      homeBranch: 'SELECT'
    });
  };

  return (
    <DashboardLayout>
    <div className="min-h-screen bg-[#f5f7fa] flex-1 p-8 overflow-y-auto lg:p-5 md:p-4 sm:p-3">
      <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
        {/* Form Header */}
        <div className="bg-gray-600 text-white p-5 text-center lg:p-4 md:p-4 sm:p-4">
          <h2 className="text-lg font-semibold m-0 tracking-wider lg:text-base md:text-base sm:text-sm">
            ADD/EDIT TEAM
          </h2>
        </div>
        
        {/* Form Content */}
        <div className="p-10 lg:p-5 md:p-4 sm:p-3">
          {/* First Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 lg:gap-5 lg:mb-5 md:gap-5 md:mb-5 sm:gap-5 sm:mb-5">
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 mb-2">
                Select Action Type
              </label>
              <div className="relative">
                <button 
                  className="w-full p-3 border border-gray-300 rounded-md bg-white text-left cursor-pointer flex justify-between items-center text-sm transition-colors hover:border-gray-400 focus:outline-none focus:border-blue-500 focus:shadow-[0_0_0_3px_rgba(52,152,219,0.1)]"
                  onClick={() => toggleDropdown('actionType')}
                >
                  {formData.actionType}
                  <ChevronDown 
                    size={16} 
                    className={`transition-transform duration-200 ${dropdowns.actionType ? 'rotate-180' : ''}`} 
                  />
                </button>
                {dropdowns.actionType && (
                  <div className="absolute top-full left-0 right-0 bg-white border border-gray-300 rounded-md shadow-md z-[1000] mt-0.5">
                    {actionTypes.map((type, index) => (
                      <div 
                        key={index}
                        className="p-3 cursor-pointer text-sm transition-colors border-b border-gray-100 last:border-b-0 hover:bg-gray-50"
                        onClick={() => selectOption('actionType', type)}
                      >
                        {type}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
            
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 mb-2">
                Team ID
              </label>
              <input
                type="text"
                className="p-3 border border-gray-300 rounded-md text-sm transition-colors bg-white focus:outline-none focus:border-blue-500 focus:shadow-[0_0_0_3px_rgba(52,152,219,0.1)]"
                value={formData.teamId}
                onChange={(e) => handleInputChange('teamId', e.target.value)}
                placeholder="STD005"
              />
            </div>
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 lg:gap-5 lg:mb-5 md:gap-5 md:mb-5 sm:gap-5 sm:mb-5">
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 mb-2">
                Team Leader Name
              </label>
              <input
                type="text"
                className="p-3 border border-gray-300 rounded-md text-sm transition-colors bg-white focus:outline-none focus:border-blue-500 focus:shadow-[0_0_0_3px_rgba(52,152,219,0.1)]"
                value={formData.teamLeaderName}
                onChange={(e) => handleInputChange('teamLeaderName', e.target.value)}
                placeholder="Enter team leader name"
              />
            </div>
            
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 mb-2">
                Home Branch
              </label>
              <div className="relative">
                <button 
                  className="w-full p-3 border border-gray-300 rounded-md bg-white text-left cursor-pointer flex justify-between items-center text-sm transition-colors hover:border-gray-400 focus:outline-none focus:border-blue-500 focus:shadow-[0_0_0_3px_rgba(52,152,219,0.1)]"
                  onClick={() => toggleDropdown('homeBranch')}
                >
                  {formData.homeBranch}
                  <ChevronDown 
                    size={16} 
                    className={`transition-transform duration-200 ${dropdowns.homeBranch ? 'rotate-180' : ''}`} 
                  />
                </button>
                {dropdowns.homeBranch && (
                  <div className="absolute top-full left-0 right-0 bg-white border border-gray-300 rounded-md shadow-md z-[1000] mt-0.5">
                    {branches.map((branch, index) => (
                      <div 
                        key={index}
                        className="p-3 cursor-pointer text-sm transition-colors border-b border-gray-100 last:border-b-0 hover:bg-gray-50"
                        onClick={() => selectOption('homeBranch', branch)}
                      >
                        {branch}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Form Actions */}
          <div className="flex gap-4 justify-start mt-10 lg:mt-8 md:mt-6 sm:mt-5">
            <button 
              className="py-3 px-6 border-none rounded-md text-sm font-medium cursor-pointer transition-all min-w-[80px] bg-blue-500 text-white hover:bg-blue-600"
              onClick={handleSave}
            >
              Save
            </button>
            <button 
              className="py-3 px-6 border border-gray-300 rounded-md text-sm font-medium cursor-pointer transition-all min-w-[80px] bg-white text-gray-500 hover:bg-gray-50"
              onClick={handleCancel}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
    </DashboardLayout>
  );
};

const SalesTeam = () => {
  return (
    <AddEditTeamForm />
  );
};

export default SalesTeam;