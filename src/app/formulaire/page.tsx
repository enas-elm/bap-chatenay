'use client';

import { useState, useCallback } from 'react';
import { ProgressBar } from '@/components/ProgressBar';
import { QuestionForm } from '@/components/QuestionForm';
import { ResponseType } from '@/types/Form';
import Image from "next/image";

const FormPage = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [dataFormResponse, setDataFormResponse] = useState<ResponseType>({});

    const onNextStep = useCallback((response?: any) => {
        if (response) {
            const stepName = getStepName(currentStep);
            setDataFormResponse(prevResponses => ({
                ...prevResponses,
                [stepName]: response
            }));
        }
        setCurrentStep(current => current + 1);
    }, [currentStep]);

    const onPreviousStep = () => {
        setCurrentStep(current => current > 0 ? current - 1 : 0);
    };

    const getStepName = (stepIndex: number): string => {
        switch (stepIndex) {
            case 0:
                return 'Introduction';
            case 1:
                return 'InformationPersonnelles';
            case 2:
                return 'HorairesDeTravail';
            case 3:
                return 'LEnvironnement';
            case 4:
                return 'LEffortPhysique';
            case 5:
                return 'LEffortMental';
            case 6:
                return 'SatisfactionEtEvolutionDeCarriere';
            default:
                return '';
        }
    };

    return (
        <div className='form flex h-screen relative'>
            <div className='form-image absolute z-0'>
                <Image className='object-cover'
                    src="/images/bg.jpg"
                    alt="background for form page"
                    width={1440}
                    height={1080}
                    style={{
                        objectFit: 'cover',
                    }}
                />
            </div>
            <div className=' w-1/2 flex flex-col h-full relative z-10'>
                <ProgressBar currentStep={currentStep} steps={['Introductions', 'Information personnelles', 'Horaires de travail', 'L’environnement', 'L’effort physique ', 'L’effort mental', 'Satisfaction et évolution de carrière', 'Résultat']} />
            </div>
            <div className='w-3/4 flex flex-col h-full bg-white z-10'>
                <QuestionForm step={currentStep} onNextStep={onNextStep} onPreviousStep={onPreviousStep} dataFormResponse={dataFormResponse} />
            </div>
        </div>
    );
};

export default FormPage;
