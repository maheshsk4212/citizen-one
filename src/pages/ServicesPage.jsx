import React from 'react';
import { ServiceGrid } from '../components/ServiceGrid';

const ServicesPage = () => {
    return (
        <div className="py-2">
            {/* 
               Reusing the ServiceGrid. 
               Note: ServiceGrid includes its own header with 'View All'. 
               In a production app, we might make that header conditional via props.
            */}
            <ServiceGrid />
        </div>
    );
};

export default ServicesPage;
