'use client';

import { useState } from 'react';
import { ProgressBar } from '@/components/ProgressBar';
import { QuestionForm } from '@/components/Questions/QuestionForm';
import Image from "next/image";

const FormPage = () => {
    const [currentStep, setCurrentStep] = useState(0);

    const onNextStep = () => {
        setCurrentStep((prevStep) => prevStep + 1);
    };

    return (
        <div className='form flex h-screen relative'>
            <div className='form-image absolute z-0'>
                <Image
                    src="/images/bg.jpg"
                    alt="Caesia Logo"
                    width={1440}
                    height={1080}
                    objectFit='cover'
                />
            </div>
            <div className=' w-1/2 flex flex-col h-full relative z-10'>
                <ProgressBar currentStep={currentStep} steps={['Introductions', 'Information personnelles', 'Horaires de travail', 'L’environnement', 'L’effort mental', 'Satisfaction et évolution de carrière', 'Résultat']} />
            </div>
            <div className='w-3/4 flex flex-col h-full bg-white z-10'>
                <QuestionForm step={currentStep} onNextStep={onNextStep} />
            </div>
        </div>
    );
};

export default FormPage;
