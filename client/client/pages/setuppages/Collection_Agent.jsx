import React, { useState, useEffect } from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';


const CollectionAgents = () => {
  const [activeMenu, setActiveMenu] = useState('Search');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu when clicking outside
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

  // Prevent body scroll when mobile menu is open
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
    <DashboardLayout>
    <div className="flex min-h-screen bg-gray-50">
      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-[998] lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

     
      
      <div className="flex-1 ml-0 lg:ml-60 flex flex-col min-h-screen">
   
        
        <div className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
          <div className="flex flex-col items-center justify-center min-h-[60vh] text-center p-8 lg:p-10">
            <div className="mb-8 animate-pulse">
              <svg 
                width="60" 
                height="60" 
                viewBox="0 0 24 24" 
                fill="none"
                className="mx-auto"
              >
                <path 
                  d="M12 2L2 7V10C2 16 6 20.5 12 22C18 20.5 22 16 22 10V7L12 2Z" 
                  fill="#dc3545"
                />
                <path 
                  d="M12 8V12M12 16H12.01" 
                  stroke="white" 
                  strokeWidth="2" 
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <h2 className="text-lg sm:text-xl font-semibold text-red-600 tracking-wide max-w-md">
              YOU DO NOT HAVE ACCESS TO THIS PAGE
            </h2>
          </div>
        </div>
      </div>
    </div>
    </DashboardLayout>
  );
};

export default CollectionAgents;