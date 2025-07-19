import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import Sidebar from './Sidebar';
import Header from './Header';
import '../App.css';

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
    <div className="add-edit-team-container">
      <div className="form-header">
        <h2>ADD/EDIT TEAM</h2>
      </div>
      
      <div className="form-content">
        <div className="form-row">
          <div className="form-group">
            <label className="form-label">Select Action Type</label>
            <div className="dropdown-container">
              <button 
                className="dropdown-button"
                onClick={() => toggleDropdown('actionType')}
              >
                {formData.actionType}
                <ChevronDown size={16} className={`dropdown-icon ${dropdowns.actionType ? 'rotated' : ''}`} />
              </button>
              {dropdowns.actionType && (
                <div className="dropdown-menu">
                  {actionTypes.map((type, index) => (
                    <div 
                      key={index}
                      className="dropdown-item"
                      onClick={() => selectOption('actionType', type)}
                    >
                      {type}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          
          <div className="form-group">
            <label className="form-label">Team ID</label>
            <input
              type="text"
              className="form-input"
              value={formData.teamId}
              onChange={(e) => handleInputChange('teamId', e.target.value)}
              placeholder="STD005"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label className="form-label">Team Leader Name</label>
            <input
              type="text"
              className="form-input"
              value={formData.teamLeaderName}
              onChange={(e) => handleInputChange('teamLeaderName', e.target.value)}
              placeholder="Enter team leader name"
            />
          </div>
          
          <div className="form-group">
            <label className="form-label">Home Branch</label>
            <div className="dropdown-container">
              <button 
                className="dropdown-button"
                onClick={() => toggleDropdown('homeBranch')}
              >
                {formData.homeBranch}
                <ChevronDown size={16} className={`dropdown-icon ${dropdowns.homeBranch ? 'rotated' : ''}`} />
              </button>
              {dropdowns.homeBranch && (
                <div className="dropdown-menu">
                  {branches.map((branch, index) => (
                    <div 
                      key={index}
                      className="dropdown-item"
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

        <div className="form-actions">
          <button className="btn btn-save" onClick={handleSave}>
            Save
          </button>
          <button className="btn btn-cancel" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

const Dashboard = () => {
  const [activeMenu, setActiveMenu] = useState('Search');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest('.sidebar') && !event.target.closest('.menu-toggle')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="app-container">
      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div
          className="mobile-overlay"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      <Sidebar 
        activeMenu={activeMenu} 
        setActiveMenu={setActiveMenu}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
      
      <div className="main-content">
        <Header toggleMobileMenu={toggleMobileMenu} />
        
        <div className="content-area">
          <AddEditTeamForm />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;