"use client"

import { ColumnDef } from "@tanstack/react-table"
import { EffortPhysiqueSchema } from "../data/schema"
import { DataTableColumnHeader } from "./data-table-column-header"

export const EffortPhysiquecolumns: ColumnDef<EffortPhysiqueSchema>[] = [
  {
    accessorKey: "deplacementsFrequents",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Deplacements Frequents" />
    ),
    cell: ({ row }) => <div className="w-[80px]">{row.getValue("deplacementsFrequents")}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "expositionRisquesPhysiques",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Exposition Risques Physiques" />
    ),
    cell: ({ row }) => <div className="w-[80px]">{row.getValue("expositionRisquesPhysiques")}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "positionStatique",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Position Statique" />
    ),
    cell: ({ row }) => <div className="w-[80px]">{row.getValue("positionStatique")}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "problemesPhysiquesLiesAuTravail",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Problemes Physiques Lies Au Travail" />
    ),
    cell: ({ row }) => <div className="w-[80px]">{row.getValue("problemesPhysiquesLiesAuTravail")}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "travailRepetitif",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Travail Repetitif" />
    ),
    cell: ({ row }) => <div className="w-[80px]">{row.getValue("travailRepetitif")}</div>,
    enableSorting: false,
    enableHiding: false,
  },
]
