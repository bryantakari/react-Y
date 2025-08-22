import { ChevronDown } from "lucide-react";
import { Table,TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import { Button } from "./ui/button";
import React from "react";
import {
  type ColumnDef,
  type ColumnFiltersState,
  type SortingState,
  type VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { Input } from "./ui/input";
import clsx from "clsx";


export type DataTableProps<TData, TValue> = {
  data: TData[]
  columns: ColumnDef<TData, TValue>[]
  /** id of the column to bind the search box to (e.g. "email"). If omitted, search is hidden. */
  filterColumnId?: string
  searchPlaceholder?: string
  /** Initial page size (default 10) */
  pageSize?: number
  /** Show row selection UI (default false) */
  enableRowSelection?: boolean
  /** Optional className for the outer wrapper */
  className?: string
  /** Optional custom toolbar renderer (receives table instance) */
  renderToolbar?: (table: ReturnType<typeof useReactTable<TData>>) => React.ReactNode
  /** Controlled callbacks (optional) */
  onRowSelectionChange?: (rows: TData[]) => void
}

export default function DataTable<TData,TValue>({
  data,
  columns,
  filterColumnId,
  searchPlaceholder = "Search...",
  pageSize = 10,
  enableRowSelection = false,
  className,
  renderToolbar,
  onRowSelectionChange,
}: DataTableProps<TData, TValue>){
    const [sorting, setSorting] = React.useState<SortingState>([])
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
        []
    )
    const [columnVisibility, setColumnVisibility] =
        React.useState<VisibilityState>({})
    const [rowSelection, setRowSelection] = React.useState({})
    const table = useReactTable({
        data,
        columns,
        state: {
        sorting,
        columnFilters,
        columnVisibility,
        rowSelection,
        },
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: (updater) => {
        setRowSelection(updater)
        },
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        initialState: {
        pagination: { pageSize },
        },
        enableRowSelection, // enables selection APIs (checkbox columns, etc., if you add them)
  })
    // Notify parent when selection changes (if requested)
    React.useEffect(() => {
        if (!onRowSelectionChange) return
        const selectedRows = table.getSelectedRowModel().rows.map(r => r.original as TData)
        onRowSelectionChange(selectedRows)
    }, [rowSelection]) // eslint-disable-line react-hooks/exhaustive-deps

    const filterCol = filterColumnId ? table.getColumn(filterColumnId) : undefined

    return (
        <div className={clsx("w-full", className)}>
            {/* <div className="flex items-center gap-2 py-4">
                {filterCol && (
                <Input
                    className="max-w-sm"
                    placeholder={searchPlaceholder}
                    value={(filterCol.getFilterValue() as string) ?? ""}
                    onChange={(e) => filterCol.setFilterValue(e.target.value)}
                />
                )}

                {renderToolbar ? (
                <div className="ml-auto">{renderToolbar(table)}</div>
                ) : (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="ml-auto">
                        Columns <ChevronDown className="ml-1 h-4 w-4" />
                    </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                    {table
                        .getAllLeafColumns()
                        .filter((column) => column.getCanHide())
                        .map((column) => (
                        <DropdownMenuCheckboxItem
                            key={column.id}
                            className="capitalize"
                            checked={column.getIsVisible()}
                            onCheckedChange={(value) => column.toggleVisibility(!!value)}
                        >
                            {column.id}
                        </DropdownMenuCheckboxItem>
                        ))}
                    </DropdownMenuContent>
                </DropdownMenu>
                )}
            </div> */}

            <div className="overflow-hidden rounded-md border">
                <Table>
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                        <TableRow key={headerGroup.id}>
                            {headerGroup.headers.map((header) => (
                            <TableHead key={header.id}>
                                {header.isPlaceholder
                                ? null
                                : flexRender(header.column.columnDef.header, header.getContext())}
                            </TableHead>
                            ))}
                        </TableRow>
                        ))}
                    </TableHeader>

                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                        table.getRowModel().rows.map((row) => (
                            <TableRow
                            key={row.id}
                            data-state={row.getIsSelected() && "selected"}
                            >
                            {row.getVisibleCells().map((cell) => (
                                <TableCell key={cell.id}>
                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </TableCell>
                            ))}
                            </TableRow>
                        ))
                        ) : (
                        <TableRow>
                            <TableCell
                            colSpan={table.getAllLeafColumns().length}
                            className="h-24 text-center"
                            >
                            No results.
                            </TableCell>
                        </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>

            <div className="flex items-center justify-end gap-2 py-4">
                <div className="flex-1 text-sm text-muted-foreground">
                {enableRowSelection && (
                    <>
                    {table.getFilteredSelectedRowModel().rows.length} of{" "}
                    {table.getFilteredRowModel().rows.length} row(s) selected.
                    </>
                )}
                </div>
                <div className="space-x-2">
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => table.previousPage()}
                        disabled={!table.getCanPreviousPage()}
                    >
                        Previous
                    </Button>
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => table.nextPage()}
                        disabled={!table.getCanNextPage()}
                    >
                        Next
                    </Button>
                </div>
            </div>
        </div>
    )
}