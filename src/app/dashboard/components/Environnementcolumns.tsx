"use client"

import { ColumnDef } from "@tanstack/react-table"
import { EffortMentalSchema } from "../data/schema"
import { DataTableColumnHeader } from "./data-table-column-header"

export const Environnementcolumns: ColumnDef<EffortMentalSchema>[] = [
  {
    accessorKey: "espaceDeTravailInadapte",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="espaceDeTravailInadapte" />
    ),
    cell: ({ row }) => <div className="w-[80px]">{row.getValue("espaceDeTravailInadapte")}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "expositionProduitsToxiques",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="expositionProduitsToxiques" />
    ),
    cell: ({ row }) => <div className="w-[80px]">{row.getValue("expositionProduitsToxiques")}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "expositionVibrations",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="expositionVibrations" />
    ),
    cell: ({ row }) => <div className="w-[80px]">{row.getValue("expositionVibrations")}</div>,
    enableSorting: false,
    enableHiding: false,
  },
]
