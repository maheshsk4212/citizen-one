import React, { createContext, useContext, useState, useEffect } from 'react';

const RoleContext = createContext();

export const ROLES = {
    CUSTOMER: 'Customer',
    AGENT: 'Agent',
    FARMER: 'Farmer',
};

export const RoleProvider = ({ children }) => {
    const [activeRole, setActiveRole] = useState(ROLES.CUSTOMER);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const switchRole = (newRole) => {
        if (Object.values(ROLES).includes(newRole) && newRole !== activeRole) {
            setIsTransitioning(true);
            // Simulate a "re-configuring" delay for the premium feel
            setTimeout(() => {
                setActiveRole(newRole);
                setIsTransitioning(false);
            }, 600);
        }
    };

    return (
        <RoleContext.Provider value={{ activeRole, switchRole, isTransitioning, ROLES }}>
            {children}
        </RoleContext.Provider>
    );
};

export const useRole = () => useContext(RoleContext);
