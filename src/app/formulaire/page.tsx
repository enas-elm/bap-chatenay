'use client';

import { useState } from 'react';
import { ProgressBar } from '@/components/ProgressBar';
import { QuestionForm } from '@/components/QuestionForm';
import { ResponseType } from '@/types/Form';
import Image from "next/image";

const FormPage = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [responses, setResponses] = useState<ResponseType>({});
    const onNextStep = (response?: any) => {
        if (response) {
            // Utilisez le nom de l'étape actuelle comme clé pour stocker la réponse
            const stepName = getStepName(currentStep);
            setResponses(prevResponses => ({
                ...prevResponses,
                [stepName]: response
            }));
        }
        setCurrentStep(current => current + 1);
    };

    const onPreviousStep = () => {
        // Assurez-vous de ne pas aller en dessous de 0
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
                return 'LEffortMental';
            case 5:
                return 'SatisfactionEtEvolutionDeCarriere';
            default:
                return 'Resultat';
        }
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
                <QuestionForm step={currentStep} onNextStep={onNextStep} onPreviousStep={onPreviousStep} getResponse={responses} />
            </div>
        </div>
    );
};

export default FormPage;
