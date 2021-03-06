import React from 'react'
import { useTable, useSortBy, usePagination, useFilters, useGlobalFilter } from 'react-table'
import '../css/style.css';
import pages from "../data/pages";
import TableFilter from "./TableFilter.jsx";
import ShowEntries from "./ShowEntries";

/**
 * display table employee list
 * @param {String} columns - name of columns 
 * @param {String} data - datas of table
 * @returns table of employee list
 */
export default function TableEmployee({ columns, data }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    nextPage,
    previousPage,
    setPageSize,
    state,
    state: { pageIndex, pageSize},
    preGlobalFilteredRows,
    setGlobalFilter,
  } = useTable({
    columns,
    data,
    initialState: { pageIndex: 0 },
    },
    useFilters, 
    useGlobalFilter,
    useSortBy, 
    usePagination,
  )
  // Displays list employee on UI
  return (
    <div className="employeeList-table">
      <TableFilter pages={pages} pageSize={pageSize} 
      preGlobalFilteredRows={preGlobalFilteredRows} 
      state={state} setGlobalFilter={setGlobalFilter} 
      setPageSize={setPageSize}/>
        <table {...getTableProps()}>
          {/* header of the table */}
          <thead>
            {<tr {...headerGroups[1].getHeaderGroupProps()}>
              {headerGroups[1].headers.map(column => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}
                    <span>
                      {column.isSorted ? column.isSortedDesc ? " 🔽" : " 🔼" : "" }  
                    </span>  
                </th>
              ))}
            </tr>}
          </thead>
          {/* body of the table */}
          <tbody {...getTableBodyProps()}>
            {page.map((row, i) => {
              prepareRow(row)
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map(cell => {
                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  })}
                </tr>
                  )
                })}
          </tbody>
        </table>
        <br />
        <ShowEntries 
        pageIndex={pageIndex} 
        rows={rows} 
        canPreviousPage={canPreviousPage} 
        canNextPage={canNextPage} 
        previousPage={previousPage}
        nextPage={nextPage}/>
    </div>
  )
}