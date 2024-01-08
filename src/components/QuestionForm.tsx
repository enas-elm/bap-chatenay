// components/QuestionForm.tsx
import { QuestionInformationPersonnelles } from "./Questions/InformationPersonnelles.tsx.jsx";
import { QuestionIntro } from "./Questions/Introductions.tsx.jsx";

type QuestionFormProps = {
    step: number;
    onNextStep: () => void;
    onPreviousStep: () => void;
};

export const QuestionForm = ({ step, onNextStep, onPreviousStep }: QuestionFormProps) => {
    const renderQuestionComponent = () => {
        switch (step) {
            case 0:
                return <QuestionIntro onNextStep={onNextStep} />;
            case 1:
                return <QuestionInformationPersonnelles onNextStep={onNextStep} onPreviousStep={onPreviousStep} />;
            default:
                return <div>Fin du formulaire</div>;
        }
    };

    return (
        <div className="h-full px-20 pt-28">
            {renderQuestionComponent()}
        </div>
    );
};
