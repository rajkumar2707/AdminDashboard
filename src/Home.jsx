import { useMemo, useState } from "react";
import { BiSolidShip, BiBorderBottom } from "react-icons/bi";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import { MdPayment } from "react-icons/md";
import { PiSortAscendingLight, PiSortDescendingLight } from "react-icons/pi";
import { FaUser } from "react-icons/fa";
import {
  getCoreRowModel,
  flexRender,
  useReactTable,
  getPaginationRowModel,
  getSortedRowModel,
} from "@tanstack/react-table";
import mData from "./MOCK_DATA.json";
import "./Home.css";

function Home() {
  const [sorting, setSorting] = useState([]);

  const data = useMemo(() => mData, []);

  /** @type import('@tanstack/react-table').ColumnDef<any> */
  const columns = [
    {
      header: "ID",
      accessorKey: "id",
    },
    {
      header: "Name",
      accessorFn: (row) => `${row.first_name} ${row.last_name}`,
    },
    {
      header: "Email",
      accessorKey: "email",
    },
    {
      header: "Gender",
      accessorKey: "gender",
    },
  ];

  const table = useReactTable({
    data,
    columns,
    initialState: { pagination: { pageSize: 5 } },
    state: {
      sorting: sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });
  return (
    <main className="main-container">
      {/* -----***** Cards *****----- */}
      <div className="main-cards">
        <div className="card">
          <BiSolidShip className="card-icon" />
          <span className="card-title">Total shipments</span>
          <span className="card-answer">500</span>
        </div>
        <div className="card">
          <BiBorderBottom className="card-icon" />
          <span className="card-title">Pending orders</span>
          <span className="card-answer">15</span>
        </div>
        <div className="card">
          <MdPayment className="card-icon" />
          <span className="card-title">Revenue</span>
          <span className="card-answer">$50,000</span>
        </div>
      </div>
      {/* -----***** Table *****----- */}
      <div className="table-container">
        <div className="table-title-container">
          <span className="table-title">Client activity</span>
          <div className="table-title-footer">
            <div className="title-footer">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <FaUser className="pagination-icon" />
                <span style={{ marginLeft: "5px" }}>5</span>
              </div>
              <span className="footer-title">New client (this week)</span>
            </div>
            <div className="title-footer">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <FaUser className="pagination-icon" />
                <span style={{ marginLeft: "5px" }}>12</span>
              </div>
              <span className="footer-title">New client (this month)</span>
            </div>
          </div>
        </div>
        <div className="w3-container">
          <table className="w3-table w3-bordered">
            <thead>
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <th
                      key={header.id}
                      className="table-header"
                      onClick={header.column.getToggleSortingHandler()}
                    >
                      {header.isPlaceholder ? null : (
                        <div>
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                          {
                            {
                              asc: (
                                <PiSortAscendingLight className="pagination-icon" />
                              ),
                              desc: (
                                <PiSortDescendingLight className="pagination-icon" />
                              ),
                            }[header.column.getIsSorted() ?? null]
                          }
                        </div>
                      )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>

            <tbody>
              {table.getRowModel().rows.map((row) => (
                <tr key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id} className="table-row">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* -----***** Footer *****----- */}
        <div className="table-footer-container">
          <button
            onClick={() => {
              table.setPageIndex(0);
            }}
            disabled={!table.getCanPreviousPage()}
          >
            First Page
          </button>
          <button
            onClick={() => {
              table.setPageIndex(table.getPageCount() - 1);
            }}
            disabled={!table.getCanNextPage()}
          >
            Last Page
          </button>
          <button
            onClick={() => {
              table.previousPage();
            }}
            disabled={!table.getCanPreviousPage()}
          >
            <GrFormPrevious
              className="pagination-icon"
              opacity={table.getCanPreviousPage() ? 1 : 0.3}
            />
          </button>
          <button
            onClick={() => {
              table.nextPage();
            }}
            disabled={!table.getCanNextPage()}
          >
            <GrFormNext
              className="pagination-icon"
              opacity={table.getCanNextPage() ? 1 : 0.3}
            />
          </button>
          Page Size :{" "}
          <select
            value={table.getState().pagination.pageSize}
            onChange={(e) => {
              table.setPageSize(Number(e.target.value));
            }}
          >
            {[5, 10, 15, 20].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                {pageSize}
              </option>
            ))}
          </select>
        </div>
      </div>
    </main>
  );
}

export default Home;
