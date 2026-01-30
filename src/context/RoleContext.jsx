import React, { createContext, useContext, useState } from 'react';

const RoleContext = createContext();

export const ROLES = {
    CUSTOMER: 'Customer',
    AGENT: 'Agent',
    FARMER: 'Farmer',
};

export const CONTEXTS = {
    PARTNER: 'Partner_Mode',
    CITIZEN: 'CitizenOne_Mode',
};

export const PARTNER_TYPES = {
    BANK: 'Bank',
    INSURANCE: 'Insurance',
    MNO: 'MNO',
};

export const RoleProvider = ({ children }) => {
    const [activeRole, setActiveRole] = useState(ROLES.CUSTOMER);
    const [isTransitioning, setIsTransitioning] = useState(false);

    // Agent specific state
    const [workContext, setWorkContext] = useState(null); // null, 'Partner_Mode', 'CitizenOne_Mode'
    const [selectedPartnerType, setSelectedPartnerType] = useState(null);
    const [selectedPartner, setSelectedPartner] = useState(null);

    const switchRole = (newRole) => {
        if (Object.values(ROLES).includes(newRole) && newRole !== activeRole) {
            setIsTransitioning(true);
            // Simulate a "re-configuring" delay for the premium feel
            setTimeout(() => {
                setActiveRole(newRole);
                // Reset agent state if not switched to Agent
                if (newRole !== ROLES.AGENT) {
                    setWorkContext(null);
                    setSelectedPartner(null);
                    setSelectedPartnerType(null);
                }
                setIsTransitioning(false);
            }, 600);
        }
    };

    const switchWorkContext = (context) => {
        setIsTransitioning(true);
        setTimeout(() => {
            setWorkContext(context);
            if (context === CONTEXTS.CITIZEN) {
                setSelectedPartner(null);
                setSelectedPartnerType(null);
            }
            setIsTransitioning(false);
        }, 500);
    };

    return (
        <RoleContext.Provider value={{
            activeRole,
            switchRole,
            isTransitioning,
            ROLES,
            workContext,
            setWorkContext: switchWorkContext, // Wrapped for transition effect
            selectedPartnerType,
            setSelectedPartnerType,
            selectedPartner,
            setSelectedPartner,
            CONTEXTS,
            PARTNER_TYPES
        }}>
            {children}
        </RoleContext.Provider>
    );
};

export const useRole = () => useContext(RoleContext);
