// components/QuestionForm.tsx
import { QuestionHorairesDeTravail } from "./Questions/HorairesDeTravail";
import { QuestionInformationPersonnelles } from "./Questions/InformationPersonnelles";
import { QuestionIntro } from "./Questions/Introductions";
import { QuestionLEffortMental } from "./Questions/LEffortMental";
import { QuestionLEnvironnement } from "./Questions/LEnvironnement";
import { Resultat } from "./Resultat";
import { QuestionSatisfactionEtEvolutionDeCarriere } from "./Questions/SatisfactionEtEvolutionDeCarriere";
import { QuestionLEffortPhysique } from "./Questions/LEffortPhysique";

type QuestionFormProps = {
    step: number;
    onNextStep: () => void;
    onPreviousStep: () => void;
    getResponse: object;
};

export const QuestionForm = ({ step, onNextStep, onPreviousStep, getResponse }: QuestionFormProps) => {
    const renderQuestionComponent = () => {
        switch (step) {
            case 0:
                return <QuestionIntro onNextStep={onNextStep} />;
            case 1:
                return <QuestionInformationPersonnelles onNextStep={onNextStep} onPreviousStep={onPreviousStep} />;
            case 2:
                // return <Resultat getResponse={getResponse} />
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
                return <Resultat getResponse={getResponse} />
        }
    };

    return (
        <div className="h-full px-20 pt-28">
            {renderQuestionComponent()}
        </div>
    );
};
