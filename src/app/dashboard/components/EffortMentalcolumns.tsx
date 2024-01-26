"use client"

import { ColumnDef } from "@tanstack/react-table"
import { EffortMentalSchema } from "../data/schema"
import { DataTableColumnHeader } from "./data-table-column-header"

export const EffortMentalcolumns: ColumnDef<EffortMentalSchema>[] = [
  {
    accessorKey: "fatigueMentaleOuStress",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Fatigue Mentale Ou Stress" />
    ),
    cell: ({ row }) => <div className="w-[80px]">{row.getValue("fatigueMentaleOuStress")}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "forteConcentrationRequise",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Forte Concentration Requise" />
    ),
    cell: ({ row }) => <div className="w-[80px]">{row.getValue("forteConcentrationRequise")}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "impactNegatifSurViePersonnelle",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Impact Negatif Sur Vie Personnelle" />
    ),
    cell: ({ row }) => <div className="w-[80px]">{row.getValue("impactNegatifSurViePersonnelle")}</div>,
    enableSorting: false,
    enableHiding: false,
  },
]
