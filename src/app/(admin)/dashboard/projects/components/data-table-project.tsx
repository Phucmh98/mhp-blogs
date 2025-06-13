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
import { useMutation, useQuery } from "convex/react";

import { toast } from "sonner";
import { useClerk } from "@clerk/nextjs";
import { api } from "../../../../../../convex/_generated/api";
import Link from "next/link";
import { Id } from "../../../../../../convex/_generated/dataModel";
import { useRouter } from "next/navigation";
import { useProjectStore } from "@/zustand/useProjectStore";

export type Project = {
  id: string;
  name: string;
  description: string;
  content?: string;
  image: string;
  urlGithub?: string;
  urlDemo?: string;
  type?: string; //"web" | "mobile" | "desktop"
  status?: string; //"completed" | "in-progress" | "upcoming"
  backgroundColor: string;
  startDate?: string;
  contentDetail?: ProjectDetail[];
  role?: string;
  client?: string;
  _creationTime?: number; // Optional field for creation time
  _id?: Id<"projectManage">; // Optional field for unique identifier
};
export interface ProjectDetail {
  content?: string;
  typeContent?: string; //"title" | "text" | "image" | "video" | "list";
  contentList?: string[];
}

const colummsRef: ColumnDef<Project>[] = [
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
  },

  {
    accessorKey: "id",
    header: "Id",
    cell: ({ row }) => (
      <Link href={"/dashboard/projects/" + row.getValue("id")}>
        <div className="capitalize">{row.getValue("id")}</div>
      </Link>
    ),
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
    cell: ({ row }) => (
      <div className="max-w-[150px]">{row.getValue("name")}</div>
    ),
    enableResizing: true,
  },

  {
    accessorKey: "description",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Description
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="max-w-[150px] truncate">
        {row.getValue("description")}
      </div>
    ),
    enableResizing: true,
  },
  {
    accessorKey: "content",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Content
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="max-w-[150px] truncate">{row.getValue("content")}</div>
    ),
    enableResizing: true,
  },

  {
    accessorKey: "image",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Image
        </Button>
      );
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue("image")}</div>,
    enableResizing: true,
  },
  {
    accessorKey: "type",
    header: "Type",
    cell: ({ row }) => <div className="capitalize">{row.getValue("type")}</div>,
    enableResizing: true,
  },
  {
    accessorKey: "backgroundColor",
    header: "Background Color",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("backgroundColor")}</div>
    ),
    enableResizing: true,
  },
  {
    accessorKey: "startDate",
    header: "Start Date",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("startDate")}</div>
    ),
    enableResizing: true,
  },
  {
    accessorKey: "role",
    header: "Role",
    cell: ({ row }) => <div className="capitalize">{row.getValue("role")}</div>,
    enableResizing: true,
  },
  {
    accessorKey: "client",
    header: "Client",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("client")}</div>
    ),
    enableResizing: true,
  },
];

export function DataTable() {
  const { user } = useClerk();
  const allProjectRaw = useQuery(
    api.projectManage.projectManage.getAllProjects
  );
  const mutationRemove = useMutation(
    api.projectManage.projectManage.removeProjects
  );
  const router = useRouter();
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});
  const setProjects = useProjectStore((state) => state.setProjects);
  // Map lại dữ liệu cho đúng type Project
  //
  
  // @typescript-eslint/ban-ts-comment
  const allProject: Project[] = React.useMemo(() => {
    if (!allProjectRaw) return [];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const mapped = allProjectRaw.map((item: any) => ({
      ...item,
      contentDetail: item.contentDetail
        ? item.contentDetail
        : undefined,
    }));

    // ✅ Đẩy vào zustand store luôn
    setProjects(mapped);

    return mapped;
  }, [allProjectRaw,setProjects]);

  const table = useReactTable({
    data: allProject ?? [],
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

  const handleRemove = async () => {
    const selectIds = table
      .getFilteredSelectedRowModel()
      .rows.map((row) => row.original._id as Id<"projectManage">);

    mutationRemove({ arr_Id: selectIds })
      .then(() => {
        toast.success("Remove project successfully");
      })
      .catch(() => {
        toast.error("Remove project failed");
      });
  };

  return (
    <>
      {user?.publicMetadata?.role === "admin" ? (
        <div className="w-full h-full">
          <div className="flex items-center py-4">
            <Input
              placeholder="Filter name..."
              value={
                (table.getColumn("name")?.getFilterValue() as string) ?? ""
              }
              onChange={(event) =>
                table.getColumn("name")?.setFilterValue(event.target.value)
              }
              className="max-w-sm"
            />
            <div className="ml-auto">
              <Button
                className="mr-2 cursor-pointer"
                onClick={() => {
                  router.push("/dashboard/projects/new");
                }}
              >
                New
              </Button>

              <Button
                variant="destructive"
                className="mr-6 cursor-pointer"
                onClick={handleRemove}
              >
                Remove
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
