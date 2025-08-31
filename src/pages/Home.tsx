import { useEffect, useState } from "react"
import dayjs from "dayjs"
import { DialogTransaction } from "@/components/dialog_transaction";
import { usePageTitle } from "@/context/LayoutContext";
import DataTable from "@/components/data-table";
import type { ColumnDef } from "@tanstack/react-table";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";
import type { Transaction } from "@/services/service-transaction";



const columns: ColumnDef<Transaction>[] = [
  
  {
    accessorKey: "id",
    header: "Id",
    cell: ({ getValue }) => <span className="font-medium">{getValue<string>()}</span>,
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "type",
    header: "Type",
    cell: ({ getValue }) => {
      const v = getValue<Transaction["type"]>()
      return <span className={v === "active" ? "text-green-600" : "text-zinc-500"}>{v}</span>
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ getValue }) => {
      const v = getValue<Transaction["status"]>()
      return <span className={v === "active" ? "text-green-600" : "text-zinc-500"}>{v}</span>
    },
  },
  {
    accessorKey: "price",
    header: "Price"
  },
  {
    accessorKey: "createdAt",
    header: "Created At",
    cell: ({ getValue }) => {
      const date: Date = getValue<Date>()
      return <span>{dayjs(date).format("YYYY-MM-DDTHH:mm:ssZ[Z]")}</span>
    },
    sortingFn: "datetime", // let tanstack sort by date
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
        const transaction = row.original
        return (
            <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuItem
                onClick={() => navigator.clipboard.writeText(transaction.id.toString())}
                >
                Copy payment ID
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>View customer</DropdownMenuItem>
                <DropdownMenuItem>View payment details</DropdownMenuItem>
            </DropdownMenuContent>
            </DropdownMenu>
        )
    }
  }
]

export default function Home (){
    const { setTitle } = usePageTitle();
    useEffect(() => {
        setTitle("Home");
    }, [setTitle]);
    const [items,setItems] = useState<Transaction[]>([]);
    const [isDialogOpen,setIsDialogOpen] = useState<boolean>(false);
    const handleFormSubmit = (formData: Transaction) => {
        setItems(prev=>([...prev,formData]));
        setIsDialogOpen(false);
    }
    return (
        <div className="">
            <div className="flex justify-end">
                <DialogTransaction isOpen={isDialogOpen} setIsOpen={setIsDialogOpen} onSubmit={handleFormSubmit}/>
            </div>
            <div>
                <DataTable<Transaction, unknown>
                    data={items}
                    columns={columns}
                    enableRowSelection
                    pageSize={10}
                    onRowSelectionChange={(rows) => {
                        // do something with selected rows
                        // console.log(rows)
                    }}
                />
            </div>
        </div>
    )
}