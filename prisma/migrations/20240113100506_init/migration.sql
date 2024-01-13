-- CreateTable
CREATE TABLE "UserResult" (
    "id" SERIAL NOT NULL,
    "userId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "InformationPersonnelles" JSONB,
    "HorairesDeTravail" JSONB,
    "LEnvironnement" JSONB,
    "LEffortMental" JSONB,
    "SatisfactionEtEvolution" JSONB,
    "ResultatFinal" JSONB,

    CONSTRAINT "UserResult_pkey" PRIMARY KEY ("id")
);
