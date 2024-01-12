// components/ProgressBar.tsx
import React from 'react';
import Image from "next/image";

type ProgressBarProps = {
    currentStep: number;
    steps: string[];
};

export const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep, steps }) => {
    return (
        <div className="h-full p-4 overflow-y-auto flex justify-center items-center">
            <div className="flex flex-col space-y-4">
                {steps.map((step, index) => {
                    const isActive = index === currentStep;
                    return (
                        <div key={step} className={`flex items-center ${isActive ? 'text-white' : ' text-gray-400'}`}>
                            <div className={`rounded-full h-8 w-8 flex items-center justify-center ${isActive ? 'bg-green-600' : 'bg-gray-400'}`}>
                                {isActive && <span className="text-white font-bold">{index + 1}</span>}
                            </div>
                            <div className="ml-4">
                                {step}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ProgressBar;
