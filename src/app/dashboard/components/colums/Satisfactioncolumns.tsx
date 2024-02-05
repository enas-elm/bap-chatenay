"use client"

import { ColumnDef } from "@tanstack/react-table"
import { EffortMentalSchema } from "../../data/schema"
import { DataTableColumnHeader } from "../data-tables/data-table-column-header"

export const Satisfactioncolumns: ColumnDef<EffortMentalSchema>[] = [
  {
    accessorKey: "motivationPourTachesQuotidiennes",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="motivationPourTachesQuotidiennes" />
    ),
    cell: ({ row }) => <div className="w-[80px]">{row.getValue("motivationPourTachesQuotidiennes")}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "optionsReconversion",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="optionsReconversion" />
    ),
    cell: ({ row }) => <div className="w-[80px]">{row.getValue("optionsReconversion")}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "possibiliteEvolutionCarriere",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="possibiliteEvolutionCarriere" />
    ),
    cell: ({ row }) => <div className="w-[80px]">{row.getValue("possibiliteEvolutionCarriere")}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "satisfactionTravail",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="satisfactionTravail" />
    ),
    cell: ({ row }) => <div className="w-[80px]">{row.getValue("satisfactionTravail")}</div>,
    enableSorting: false,
    enableHiding: false,
  },
]
