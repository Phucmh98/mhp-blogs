"use client";

import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
  VisibilityState,
} from "@tanstack/react-table";
import { ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import BlurImage from "@/components/commons/image/blur-image";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../../../../convex/_generated/api";
import { deleteImages } from "@/app/api/cloudinary/cloudinaryApi";
import { toast } from "sonner";
import { useClerk } from "@clerk/nextjs";

export type MemeQueue = {
  createdAt: string;
  email: string;
  idImg: string;
  name: string;
  type: string;
  url: string;
  nameImg: string;
  thumbnail_url: string;
};

const colummsRef: ColumnDef<MemeQueue>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "idImg",
    header: "Id",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("idImg")}</div>
    ),
    enableResizing: true,
  },

  {
    accessorKey: "url",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Image Review
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="max-w-[50px] max-h-[50px]">
        <BlurImage
          src={row.getValue("url")}
          alt={row.getValue("name")}
          width={50}
          height={50}
          className="max-h-[50px]"
          blurDataURL={row.getValue("url")}
        />
      </div>
    ),
    enableResizing: true,
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
        </Button>
      );
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
    enableResizing: true,
  },
  {
    accessorKey: "name",

    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
        </Button>
      );
    },
    cell: ({ row }) => <div className="">{row.getValue("name")}</div>,
    enableResizing: true,
  },
];

export function DataTable() {
  const { user } = useClerk();
  const queueMeme = useQuery(api.galeryMeme.galery.getAllQueueMemes);
  const mutationCorfirm = useMutation(api.galeryMeme.galery.confirmMemes);
  const mutationReject = useMutation(api.galeryMeme.galery.removeMemes);
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data: queueMeme ?? [],
    columns: colummsRef,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,

    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  const handleConfirm = () => {
    const selectRows = table.getFilteredSelectedRowModel().rows.map((row) => {
      const rowData = row.original;
      return {
        idImg: rowData.idImg,
        createdAt: rowData.createdAt,
        email: rowData.email,
        url: rowData.url,
        name: rowData.name,
        type: rowData.type,
        nameImg: rowData.nameImg,
        comfirmAt: new Date().toISOString(),
        thumbnail_url: rowData.thumbnail_url,
      };
    });
    mutationCorfirm({ arrMeme: selectRows });
  };
  const handleReject = async () => {
    try {
      const selectIds = table
        .getFilteredSelectedRowModel()
        .rows.map((row) => row.original.idImg);

      mutationReject({ idImgs: selectIds });

      const result = await deleteImages(selectIds);
      if (result.success) {
        toast.success("Delete successful!");
      }
    } catch {
      toast.error("Delete Failed!");
    }
  };

  return (
    <>
      
      {user?.publicMetadata?.role === "admin" ? (
        <div className="w-full h-full">
          <div className="flex items-center py-4">
            <Input
              placeholder="Filter emails..."
              value={
                (table.getColumn("email")?.getFilterValue() as string) ?? ""
              }
              onChange={(event) =>
                table.getColumn("email")?.setFilterValue(event.target.value)
              }
              className="max-w-sm"
            />
            <div className="ml-auto">
              <Button className="mr-2 cursor-pointer" onClick={handleConfirm}>
                Confirm
              </Button>
              <Button
                variant="destructive"
                className="mr-6 cursor-pointer"
                onClick={handleReject}
              >
                Reject
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="ml-auto">
                    Columns <ChevronDown />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  {table
                    .getAllColumns()
                    .filter((column) => column.getCanHide())
                    .map((column) => {
                      return (
                        <DropdownMenuCheckboxItem
                          key={column.id}
                          className="capitalize"
                          checked={column.getIsVisible()}
                          onCheckedChange={(value) =>
                            column.toggleVisibility(!!value)
                          }
                        >
                          {column.id}
                        </DropdownMenuCheckboxItem>
                      );
                    })}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <div className="rounded-md border h-full">
            <Table>
              <TableHeader>
                {table.getHeaderGroups().map((headerGroup) => (
                  <TableRow key={headerGroup.id}>
                    {headerGroup.headers.map((header) => {
                      return (
                        <TableHead key={header.id}>
                          {header.isPlaceholder
                            ? null
                            : flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                              )}
                        </TableHead>
                      );
                    })}
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
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell
                      colSpan={colummsRef.length}
                      className="h-24 text-center"
                    >
                      No results.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
          <div className="flex items-center justify-end space-x-2 py-4">
            <div className="text-muted-foreground flex-1 text-sm">
              {table.getFilteredSelectedRowModel().rows.length} of{" "}
              {table.getFilteredRowModel().rows.length} row(s) selected.
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
      ) : (
        <div className="flex items-center justify-center h-full">
          <p className="text-gray-500">
            You do not have permission to view this page.
          </p>
        </div>
      )}
      
    </>
  );
}
