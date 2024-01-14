-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "nom" TEXT,
    "prenom" TEXT,
    "phone" TEXT,
    "birthdate" TIMESTAMP(3),
    "job" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FormResponse" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "FormResponse_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HorairesDeTravail" (
    "id" SERIAL NOT NULL,
    "heuresSupplementaires" TEXT,
    "heuresTravailSemaine" TEXT,
    "horairesIrreguliers" TEXT,
    "moyenDeTransport" TEXT,
    "tempsTrajet" TEXT,
    "formResponseId" INTEGER NOT NULL,

    CONSTRAINT "HorairesDeTravail_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EffortMental" (
    "id" SERIAL NOT NULL,
    "fatigueMentaleOuStress" TEXT,
    "forteConcentrationRequise" TEXT,
    "impactNegatifSurViePersonnelle" TEXT,
    "formResponseId" INTEGER NOT NULL,

    CONSTRAINT "EffortMental_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EffortPhysique" (
    "id" SERIAL NOT NULL,
    "deplacementsFrequents" TEXT,
    "expositionRisquesPhysiques" TEXT,
    "positionStatique" TEXT,
    "problemesPhysiquesLiesAuTravail" TEXT,
    "travailRepetitif" TEXT,
    "formResponseId" INTEGER NOT NULL,

    CONSTRAINT "EffortPhysique_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Environnement" (
    "id" SERIAL NOT NULL,
    "espaceDeTravailInadapte" TEXT,
    "expositionProduitsToxiques" TEXT,
    "expositionVibrations" TEXT,
    "formResponseId" INTEGER NOT NULL,

    CONSTRAINT "Environnement_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SatisfactionEtEvolutionDeCarriere" (
    "id" SERIAL NOT NULL,
    "motivationPourTachesQuotidiennes" TEXT,
    "optionsReconversion" TEXT,
    "possibiliteEvolutionCarriere" TEXT,
    "satisfactionTravail" TEXT,
    "formResponseId" INTEGER NOT NULL,

    CONSTRAINT "SatisfactionEtEvolutionDeCarriere_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "HorairesDeTravail_formResponseId_key" ON "HorairesDeTravail"("formResponseId");

-- CreateIndex
CREATE UNIQUE INDEX "EffortMental_formResponseId_key" ON "EffortMental"("formResponseId");

-- CreateIndex
CREATE UNIQUE INDEX "EffortPhysique_formResponseId_key" ON "EffortPhysique"("formResponseId");

-- CreateIndex
CREATE UNIQUE INDEX "Environnement_formResponseId_key" ON "Environnement"("formResponseId");

-- CreateIndex
CREATE UNIQUE INDEX "SatisfactionEtEvolutionDeCarriere_formResponseId_key" ON "SatisfactionEtEvolutionDeCarriere"("formResponseId");

-- AddForeignKey
ALTER TABLE "FormResponse" ADD CONSTRAINT "FormResponse_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HorairesDeTravail" ADD CONSTRAINT "HorairesDeTravail_formResponseId_fkey" FOREIGN KEY ("formResponseId") REFERENCES "FormResponse"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EffortMental" ADD CONSTRAINT "EffortMental_formResponseId_fkey" FOREIGN KEY ("formResponseId") REFERENCES "FormResponse"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EffortPhysique" ADD CONSTRAINT "EffortPhysique_formResponseId_fkey" FOREIGN KEY ("formResponseId") REFERENCES "FormResponse"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Environnement" ADD CONSTRAINT "Environnement_formResponseId_fkey" FOREIGN KEY ("formResponseId") REFERENCES "FormResponse"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SatisfactionEtEvolutionDeCarriere" ADD CONSTRAINT "SatisfactionEtEvolutionDeCarriere_formResponseId_fkey" FOREIGN KEY ("formResponseId") REFERENCES "FormResponse"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
