import {
  flexRender,
  getCoreRowModel,
  createSolidTable,
  getSortedRowModel,
} from "@tanstack/solid-table";
import { createSignal, For } from "solid-js";

const defaultData = [
  {
    firstName: "tanner",
    lastName: "linsley",
    age: 24,
    visits: 100,
    status: "In Relationship",
    progress: 50,
  },
  {
    firstName: "tandy",
    lastName: "miller",
    age: 40,
    visits: 40,
    status: "Single",
    progress: 80,
  },
  {
    firstName: "joe",
    lastName: "dirte",
    age: 45,
    visits: 20,
    status: "Complicated",
    progress: 10,
  },
];

const defaultColumns = [
  {
    accessorKey: "firstName",
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  },
  {
    accessorFn: (row) => row.lastName,
    id: "lastName",
    cell: (info) => <i>{info.getValue()}</i>,
    header: () => <span>Last Name</span>,
    footer: (info) => info.column.id,
  },
  {
    accessorKey: "age",
    header: () => "Age",
    footer: (info) => info.column.id,
  },
  {
    accessorKey: "visits",
    header: () => <span>Visits</span>,
    footer: (info) => info.column.id,
  },
  {
    accessorKey: "status",
    header: "Status",
    footer: (info) => info.column.id,
  },
  {
    accessorKey: "progress",
    header: "Profile Progress",
    footer: (info) => info.column.id,
  },
];
const DataTable = () => {
  const [data, setData] = createSignal(defaultData);
  const [sorting, setSorting] = createSignal([]);
  const rerender = () => setData(defaultData);

  const table = createSolidTable({
    get data() {
      return data();
    },
    columns: defaultColumns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <>
      <div>
        <div class="p-2">
          <table class="table table-">
            <thead>
              <For each={table.getHeaderGroups()}>
                {(headerGroup) => (
                  <tr>
                    <For each={headerGroup.headers}>
                      {(header) => (
                        <th>
                          {header.isPlaceholder
                            ? null
                            : flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                              )}
                        </th>
                      )}
                    </For>
                  </tr>
                )}
              </For>
            </thead>
            <tbody>
              <For each={table.getRowModel().rows}>
                {(row) => (
                  <tr>
                    <For each={row.getVisibleCells()}>
                      {(cell) => (
                        <td>
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </td>
                      )}
                    </For>
                  </tr>
                )}
              </For>
            </tbody>
            <tfoot>
              <For each={table.getFooterGroups()}>
                {(footerGroup) => (
                  <tr>
                    <For each={footerGroup.headers}>
                      {(header) => (
                        <th>
                          {header.isPlaceholder
                            ? null
                            : flexRender(
                                header.column.columnDef.footer,
                                header.getContext()
                              )}
                        </th>
                      )}
                    </For>
                  </tr>
                )}
              </For>
            </tfoot>
          </table>
          <div class="h-4" />
          <button onClick={() => rerender()} class="border p-2">
            Rerender
          </button>
        </div>
      </div>
    </>
  );
};

export default DataTable;
