import React from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Resize,
  Sort,
  Filter,
  Page,
  PdfExport,
  Edit,
  Inject,
} from "@syncfusion/ej2-react-grids";

import { employeesData, employeesGrid } from "../data/grid";
import { Header } from "../components";

const Employees = () => {
  const editing = { allowDeleting: true, allowEditing: true };
  return (
    <div className=" m-2 bg-white rounded-3xl">
      <Header category="Page" title="Orders" />
      <div className="w-full mt-6">
        <GridComponent
          id="gridcomp"
          dataSource={employeesData}
          allowPaging
          allowSorting
          allowExcelExport
          allowPdfExport
          editSettings={editing}
        >
          <ColumnsDirective>
            {/*eslint-disable-next-linereact/jsx-props-no-spreading */}

            {employeesGrid.map((item, index) => (
              <ColumnDirective key={index} {...item} />
            ))}
          </ColumnsDirective>

          <Inject services={[Resize, Sort, Filter, Page, Edit, PdfExport]} />
        </GridComponent>
      </div>
    </div>
  );
};
export default Employees;
