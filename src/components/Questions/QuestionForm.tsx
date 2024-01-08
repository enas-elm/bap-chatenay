// components/QuestionForm.tsx

import { QuestionInformationPersonnelles } from "./InformationPersonnelles";
import { QuestionIntro } from "./intro";

type QuestionFormProps = {
    step: number;
    onNextStep: (response: ResponseType) => void;
};

export const QuestionForm = ({ step, onNextStep }: QuestionFormProps) => {
    const renderQuestionComponent = () => {
        switch (step) {
            case 0:
                return <QuestionIntro onNextStep={onNextStep} />;
            case 1:
                return <QuestionInformationPersonnelles onNextStep={onNextStep} />;
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
