"use client"

import { ColumnDef } from "@tanstack/react-table"
import { EffortPhysiqueSchema } from "../data/schema"
import { DataTableColumnHeader } from "./data-table-column-header"

export const EffortPhysiquecolumns: ColumnDef<EffortPhysiqueSchema>[] = [
  {
    accessorKey: "deplacementsFrequents",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="deplacementsFrequents" />
    ),
    cell: ({ row }) => <div className="w-[80px]">{row.getValue("deplacementsFrequents")}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "expositionRisquesPhysiques",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="expositionRisquesPhysiques" />
    ),
    cell: ({ row }) => <div className="w-[80px]">{row.getValue("expositionRisquesPhysiques")}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "positionStatique",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="positionStatique" />
    ),
    cell: ({ row }) => <div className="w-[80px]">{row.getValue("positionStatique")}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "problemesPhysiquesLiesAuTravail",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="problemesPhysiquesLiesAuTravail" />
    ),
    cell: ({ row }) => <div className="w-[80px]">{row.getValue("problemesPhysiquesLiesAuTravail")}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "travailRepetitif",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="travailRepetitif" />
    ),
    cell: ({ row }) => <div className="w-[80px]">{row.getValue("travailRepetitif")}</div>,
    enableSorting: false,
    enableHiding: false,
  },
]
