import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  price?: string;
  onClick: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  price,
  onClick,
}) => {
  return (
    <div className="bg-white rounded-3xl p-6 mb-4 shadow-sm">
      <div className="flex justify-between">
        <div className="flex-1">
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-gray-500 text-sm">{description}</p>
          
          <button
            onClick={onClick}
            className="mt-4 bg-[#2596be] hover:bg-[#2b7f9e] text-white px-4 py-2 rounded-full flex items-center justify-center text-sm"
          >
            Book | Schedule <ArrowRight size={16} className="ml-1" />
          </button>
        </div>
        <div className="flex items-center justify-center w-20 h-20">
          {icon}
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
