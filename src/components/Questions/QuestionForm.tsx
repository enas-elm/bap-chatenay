// components/QuestionForm.tsx

import { QuestionInformationPersonnelles } from "./InformationPersonnelles";
import { QuestionIntro } from "./intro";

type QuestionFormProps = {
    step: number;
    onNextStep: () => void;
};

export const QuestionForm = ({ step, onNextStep }: QuestionFormProps) => {
    return (
        <div className="h-full px-20 pt-28">
            <QuestionIntro />
            {/* <QuestionInformationPersonnelles /> */}

        </div>
    );
};
