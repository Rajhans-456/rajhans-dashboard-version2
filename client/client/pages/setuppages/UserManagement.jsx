import React, { useState } from 'react';
import { Search, ChevronDown } from 'lucide-react';
import DashboardLayout from '../../components/layout/DashboardLayout';

const UserManagement = () => {
  const [actionType, setActionType] = useState('Manage User');
  const [formData, setFormData] = useState({
    userId: '',
    userName: '',
    loginId: '',
    mobileNumber: '',
    emailAddress: '',
    department: '',
    userRole: 'Executive',
    branch: '',
    status: 'Active'
  });
  const [searchTerm, setSearchTerm] = useState('');

  const actionTypes = ['Manage User', 'Add User', 'Edit User'];
  const userRoles = ['Executive', 'Manager', 'Admin', 'User'];
  const statuses = ['Active', 'Inactive'];

  const users = [
    {
      id: 1,
      userId: 'RM1003AU',
      loginId: 'ranjeet.singh',
      name: 'Ranjeet Kaur',
      role: 'Executive',
      status: 'ACTIVE',
      phone: '9877719700',
      email: 'ranjeetkaur@gmail.com',
      branch: 'Data Inc/Marketing Bajaj Gurgaon'
    },
    {
      id: 2,
      userId: 'RM1005U',
      loginId: 'deepshikha.s',
      name: 'Deepshikha Singh',
      role: 'Executive',
      status: 'INACTIVE',
      phone: '8569706238',
      email: 'singhdeepshikha395@gmail.com',
      branch: 'Main Branch'
    },
    {
      id: 3,
      userId: 'RM1005U',
      loginId: 'vikram.k',
      name: 'Vikram Kumar',
      role: 'Executive',
      status: 'ACTIVE',
      phone: '9770519000',
      email: '-',
      branch: 'Raiaud'
    },
    {
      id: 4,
      userId: 'RM1901U',
      loginId: 'jitendra.t',
      name: 'Jitendra Tripathi',
      role: 'Executive',
      status: 'INACTIVE',
      phone: '7833868805',
      email: '-',
      branch: 'Main Branch'
    },
    {
      id: 5,
      userId: 'RM1905U',
      loginId: 'lokesh.k',
      name: 'Lokesh Kumar',
      role: 'Executive',
      status: 'INACTIVE',
      phone: '9999482467',
      email: 'RAJUHANISSOHNIA.BANKYRGMAIL.COM',
      branch: 'Royal Motors- Faridabad'
    },
    {
      id: 6,
      userId: 'RM1904U',
      loginId: 'rahul',
      name: 'Rahul',
      role: 'Executive',
      status: 'ACTIVE',
      phone: '9560473071',
      email: '-',
      branch: 'Main Branch'
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSaveUser = () => {
    console.log('Saving user:', formData);
  };

  const handleClearForm = () => {
    setFormData({
      userId: '',
      userName: '',
      loginId: '',
      mobileNumber: '',
      emailAddress: '',
      department: '',
      userRole: 'Executive',
      branch: '',
      status: 'Active'
    });
  };

  const handleResetPassword = () => {
    console.log('Resetting password');
  };

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.userId.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
     <DashboardLayout>
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-[#004099] text-white px-6 py-8">
        <h1 className="text-4xl font-bold mb-2">User Management</h1>
        <p className="text-blue-100 text-2xl">Manage users, roles, and permissions efficiently</p>
      </div>

      <div className="max-w-7xl mx-auto p-6">
        {/* User Actions Form */}
        <div className="bg-white rounded-lg shadow-lg border border-gray-200 mb-8">
          <div className="p-8">
            <div className="flex items-center mb-8">
              <span className="w-[15px] h-[14px] text-[14.4px] font-bold leading-[17px] flex items-center text-[#1E293B] mr-3" style={{ fontFamily: 'Inter, sans-serif' }}>
                👤
              </span>
              <h2 className="text-xl font-bold text-gray-700">User Actions</h2>
            </div>

            {/* Updated User Form Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {/* Row 1 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Action Type</label>
                <select
                  value={actionType}
                  onChange={(e) => setActionType(e.target.value)}
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  {actionTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">User ID</label>
                <input
                  type="text"
                  name="userId"
                  value={formData.userId}
                  onChange={handleInputChange}
                  placeholder="Enter user ID"
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">User Name</label>
                <input
                  type="text"
                  name="userName"
                  value={formData.userName}
                  onChange={handleInputChange}
                  placeholder="Enter full name"
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Login ID</label>
                <input
                  type="text"
                  name="loginId"
                  value={formData.loginId}
                  onChange={handleInputChange}
                  placeholder="Enter login ID"
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>

              {/* Row 2 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">User Role</label>
                <select
                  name="userRole"
                  value={formData.userRole}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  {userRoles.map(role => (
                    <option key={role} value={role}>{role}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Mobile Number</label>
                <input
                  type="tel"
                  name="mobileNumber"
                  value={formData.mobileNumber}
                  onChange={handleInputChange}
                  placeholder="Enter mobile number"
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  name="emailAddress"
                  value={formData.emailAddress}
                  onChange={handleInputChange}
                  placeholder="Enter email address"
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Department</label>
                <input
                  type="text"
                  name="department"
                  value={formData.department}
                  onChange={handleInputChange}
                  placeholder="Enter department"
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>

              {/* Row 3 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Branch</label>
                <input
                  type="text"
                  name="branch"
                  value={formData.branch}
                  onChange={handleInputChange}
                  placeholder="Enter branch"
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  {statuses.map(status => (
                    <option key={status} value={status}>{status}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-8">
              <button
                onClick={handleSaveUser}
                className="bg-blue-600 text-white px-6 py-2.5 rounded-md hover:bg-blue-700 transition-colors duration-200 font-medium"
              >
                Save User
              </button>
              <button
                onClick={handleClearForm}
                className="bg-gray-600 text-white px-6 py-2.5 rounded-md hover:bg-gray-700 transition-colors duration-200 font-medium"
              >
                Clear Form
              </button>
              <button
                onClick={handleResetPassword}
                className="bg-red-600 text-white px-6 py-2.5 rounded-md hover:bg-red-700 transition-colors duration-200 font-medium"
              >
                Reset Password
              </button>
            </div>
          </div>
        </div>

        {/* Current Users Table */}
        <div className="bg-white rounded-lg shadow-lg border border-gray-200">
          {/* Table Header with Search */}
          <div className="bg-gray-800 text-white px-6 py-4 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center">
              <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
              <h2 className="text-lg font-semibold">Current Users</h2>
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Search users..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-64 pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
              />
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
              <span className="absolute right-3 top-2.5 text-gray-400 text-sm">🔍</span>
            </div>
          </div>

          {/* Table Content */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">SR.</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">USER ID</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">LOGIN ID</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">NAME</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">ROLE</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">STATUS</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">PHONE</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">EMAIL</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">BRANCH</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-100">
                {filteredUsers.map((user, index) => (
                  <tr key={user.id} className="hover:bg-gray-50 transition-colors duration-150">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">{index + 1}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">{user.userId}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{user.loginId}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{user.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                        {user.role}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${user.status === 'ACTIVE'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-red-100 text-red-800'
                        }`}>
                        {user.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{user.phone}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 max-w-xs truncate">{user.email}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 max-w-xs truncate">{user.branch}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    </DashboardLayout>
  );
};

export default UserManagement;