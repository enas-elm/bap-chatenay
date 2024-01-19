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
            <div className="flex flex-col space-y-8">
                {steps.map((step, index) => {
                    const isActive = index === currentStep;
                    return (
                        <div key={step} className={`flex items-center ${isActive ? 'text-white font-semibold' : ' text-[#A1B9B5]'}`}>
                            <div className={`rounded-full h-7 w-7 flex items-center justify-center ${isActive ? 'bg-primary' : ' bg-[#A1B9B5]'}`}>
                                {isActive && <span className="text-white font-semibold">{index + 1}</span>}
                            </div>
                            <div className="ml-8">
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
