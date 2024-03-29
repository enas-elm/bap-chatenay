import { Button } from "@ui/button";
import Link from "next/link";

type QuestionIntroProps = {
    onNextStep: () => void;
};

export const QuestionIntro: React.FC<QuestionIntroProps> = ({ onNextStep }) => {
    const handleStart = () => {
        onNextStep();
    };

    return (
        <div className="flex flex-col justify-between h-full">
            <div className="flex flex-col gap-2">
            <h3 className="text-3xl font-bold text-gray-900 sm:text-3xl">Etes-vous en usure professionnel ?</h3>
                <p>Répondez à ce formulaire</p>

                <p className="pt-28 ">Ce formulaire a été conçu pour vous aider à évaluer votre niveau d'usure professionnelle. Nous comprenons que le travail peut parfois être source de stress et de pression. Ce questionnaire vise à comprendre vos conditions de travail actuelles et à vous offrir des conseils et des solutions si vous ressentez un épuisement professionnel.
                    <br />
                    <br />
                    Vos réponses resteront confidentielles et seront utilisées uniquement dans le cadre de cette évaluation. Merci de répondre avec honnêteté pour obtenir une évaluation précise.
                </p>
            </div>

            <div className="flex justify-between w-full">
                <Link href={"/"}>
                    <Button variant={"secondary"}>Revenir à l’accueil</Button>
                </Link>
                <Button onClick={handleStart}>Commencer</Button>
            </div>
        </div >
    );
};