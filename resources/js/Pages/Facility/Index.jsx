import { AdminLayout } from "@/Layouts/AdminLayout";
import { Head, useForm } from '@inertiajs/react';
import { FilterMatchMode, FilterOperator } from 'primereact/api';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useState } from "react";
import { Button } from 'primereact/button';
import { Link } from '@inertiajs/react';


export default function facility(props) {
  const [loading, setLoading] = useState(false);
  const [globalFilterValue, setGlobalFilterValue] = useState('');
  const [filters, setFilters] = useState({
    name: { value: null, matchMode: FilterMatchMode.CONTAINS },
    total_amount: { value: null, matchMode: FilterMatchMode.CONTAINS }
  })
  console.log(props);

  const {
    data,
    setData,
    delete: destroy,
    processing,
    reset,
    errors,
  } = useForm({

  });

  const renderHeader = () => {
    return (
      <div className="flex justify-item-end">
        <Link href={props.auth.user.role === 'admin' ? route('admin.facility.create') : route('officeMaid.facility.create')}>
          <Button type="button" label="Tambah" icon="pi pi-plus" severity="success" />
        </Link>

      </div>
    );
  };

  function deletefacility(facility) {
    if (confirm("Are you sure you want to delete this facility?")) {
      if (props.auth.user.role === 'admin'){
        destroy(route("admin.facility.destroy", facility.id));
      } else {
        destroy(route("officeMaid.facility.destroy", facility.id));
      }
    }
  }

  const header = renderHeader();

  const actionTemplate = (rowData, column) => {
    return <div className="grid grid-cols-2 gap-1">
      <Link href={props.auth.user.role === 'admin' ? route('admin.facility.edit', rowData) : route('officeMaid.facility.edit', rowData)}><Button icon="pi pi-pencil" severity="warning" /></Link>
      <Button onClick={() => deletefacility(rowData)} icon="pi pi-trash" severity="danger" />
    </div>;
  }

  return (
    <AdminLayout user={props.auth.user} >
      <Head title="facility" />
      <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
        <h2 className="text-2xl font-bold">
          facility
        </h2>
        <div className="mt-2">
          <DataTable value={props.facilities} paginator rows={10} dataKey="id" filters={filters} filterDisplay="row" loading={loading}
            globalFilterFields={['name', 'email', 'role', 'divisi']} header={header} emptyMessage="No data found."
            paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries" rowsPerPageOptions={[10, 25, 50]}>
            <Column field="name" header="Name" filter filterPlaceholder="Search by name" sortable style={{ minWidth: '12rem' }} />
            <Column field="total_amount" header="Quantity" filter filterPlaceholder="Search by quantity" sortable style={{ minWidth: '12rem' }} />
            <Column field="modifiedTime" header="Action" body={(e) => actionTemplate(e)} style={{ minWidth: '10rem' }} />
          </DataTable>
        </div>
      </div>
    </AdminLayout>
  )
}
