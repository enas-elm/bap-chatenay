export const QuestionInformationPersonnelles = () => {
    return (
        <div>
            <h3>Information personnelles</h3>
            <p>Quel est votre âge ?</p>
            <div>
                <input type="radio" id="moins de 25 ans" name="age" value="moins de 25 ans" />
                <label htmlFor="moins de 25 ans">moins de 25 ans</label>
            </div>
            <div>
                <input type="radio" id="entre 25 et 35 ans" name="age" value="entre 25 et 35 ans" />
                <label htmlFor="entre 25 et 35 ans">entre 25 et 35 ans</label>
            </div>
            <div>
                <input type="radio" id="entre 35 et 45 ans" name="age" value="entre 35 et 45 ans" />
                <label htmlFor="entre 35 et 45 ans">entre 35 et 45 ans</label>
            </div>
            <div>
                <input type="radio" id="entre 45 et 55 ans" name="age" value="entre 45 et 55 ans" />
                <label htmlFor="entre 45 et 55 ans">entre 45 et 55 ans</label>
            </div>
            <div>
                <input type="radio" id="plus de 55 ans" name="age" value="plus de 55 ans" />
                <label htmlFor="plus de 55 ans">plus de 55 ans</label>
            </div>
            <p>Quel est votre sexe ?</p>
            <div>
                <input type="radio" id="homme" name="sexe" value="homme" />
                <label htmlFor="homme">homme</label>
            </div>
            <div>
                <input type="radio" id="femme" name="sexe" value="femme" />
                <label htmlFor="femme">femme</label>
            </div>
            <div>
                <input type="radio" id="autre" name="sexe" value="autre" />
                <label htmlFor="autre">autre</label>
            </div>
            <p>Quel est votre situation familiale ?</p>

        </div>
    );
}