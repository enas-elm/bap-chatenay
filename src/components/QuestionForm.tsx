// components/QuestionForm.tsx
import { QuestionHorairesDeTravail } from "./Questions/HorairesDeTravail";
import { QuestionInformationPersonnelles } from "./Questions/InformationPersonnelles";
import { QuestionIntro } from "./Questions/Introductions";
import { QuestionLEffortMental } from "./Questions/LEffortMental";
import { QuestionLEnvironnement } from "./Questions/LEnvironnement";
import { Resultat } from "./Resultat";
import { QuestionSatisfactionEtEvolutionDeCarriere } from "./Questions/SatisfactionEtEvolutionDeCarriere";
import { QuestionLEffortPhysique } from "./Questions/LEffortPhysique";
import { ResponseType } from "@/types/Form";
import { useMemo } from 'react';

type QuestionFormProps = {
    step: number;
    onNextStep: () => void;
    onPreviousStep: () => void;
    dataFormResponse: ResponseType;
};

export const QuestionForm = ({ step, onNextStep, onPreviousStep, dataFormResponse }: QuestionFormProps) => {
    const renderQuestionComponent = useMemo(() => {
        switch (step) {
            case 0:
                return <QuestionIntro onNextStep={onNextStep} />;
            case 1:
                return <QuestionInformationPersonnelles onNextStep={onNextStep} onPreviousStep={onPreviousStep} />;
            case 2:
                // return <Resultat dataFormResponse={dataFormResponse} />
                return <QuestionHorairesDeTravail onNextStep={onNextStep} onPreviousStep={onPreviousStep} />;
            case 3:
                return <QuestionLEnvironnement onNextStep={onNextStep} onPreviousStep={onPreviousStep} />;
            case 4:
                return <QuestionLEffortPhysique onNextStep={onNextStep} onPreviousStep={onPreviousStep} />;
            case 5:
                return <QuestionLEffortMental onNextStep={onNextStep} onPreviousStep={onPreviousStep} />;
            case 6:
                return <QuestionSatisfactionEtEvolutionDeCarriere onNextStep={onNextStep} onPreviousStep={onPreviousStep} />;
            default:
                return <Resultat dataFormResponse={dataFormResponse} />
        }
    }, [step, onNextStep, onPreviousStep, dataFormResponse]);

    return (
        <div className="h-full px-20 py-20">
            {renderQuestionComponent}
        </div>
    );
};
