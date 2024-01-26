"use client"

import { ColumnDef } from "@tanstack/react-table"
import { EffortMentalSchema } from "../data/schema"
import { DataTableColumnHeader } from "./data-table-column-header"

export const HorairesDeTravailcolumns: ColumnDef<EffortMentalSchema>[] = [
  {
    accessorKey: "heuresSupplementaires",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="heuresSupplementaires" />
    ),
    cell: ({ row }) => <div className="w-[80px]">{row.getValue("heuresSupplementaires")}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "heuresTravailSemaine",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="heuresTravailSemaine" />
    ),
    cell: ({ row }) => <div className="w-[80px]">{row.getValue("heuresTravailSemaine")}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "horairesIrreguliers",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="horairesIrreguliers" />
    ),
    cell: ({ row }) => <div className="w-[80px]">{row.getValue("horairesIrreguliers")}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "moyenDeTransport",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="moyenDeTransport" />
    ),
    cell: ({ row }) => <div className="w-[80px]">{row.getValue("moyenDeTransport")}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "tempsTrajet",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="tempsTrajet" />
    ),
    cell: ({ row }) => <div className="w-[80px]">{row.getValue("tempsTrajet")}</div>,
    enableSorting: false,
    enableHiding: false,
  },
]
