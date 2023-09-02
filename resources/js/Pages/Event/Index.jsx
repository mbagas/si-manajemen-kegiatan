import { AdminLayout } from "@/Layouts/AdminLayout";
import { Head, useForm } from '@inertiajs/react';
import { FilterMatchMode} from 'primereact/api';
import { DataTable } from 'primereact/datatable';
import { Button } from 'primereact/button';
import { Link } from '@inertiajs/react';
import { Column } from 'primereact/column';
import { useState } from "react";


export default function Event(props) {
  const [loading, setLoading] = useState(false);
  const [globalFilterValue, setGlobalFilterValue] = useState('');
  const [filters, setFilters] = useState({
    name: { value: null, matchMode: FilterMatchMode.CONTAINS },
    date_time_start: { value: null, matchMode: FilterMatchMode.CONTAINS }
  })
  console.log(props);
  let eventList = [];
  if(props.auth.user.role === 'staff'){
    eventList = props.event.map(data => {
      return data.event;
    })
    console.log(eventList);
  }

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
        <Link href={route('admin.event.create')}>
          <Button type="button" label="Tambah" icon="pi pi-plus" severity="success" />
        </Link>

      </div>
    );
  };

  function deleteevent(event) {
    if (confirm("Are you sure you want to delete this event?")) {
      destroy(route("admin.event.destroy", event.id));
    }
  }

  const header = renderHeader();

  const actionTemplate = (rowData, column) => {
    return <div className="grid grid-cols-2 gap-1">
      <Link href={props.auth.user.role === 'admin' ? route('admin.event.show', rowData) : props.auth.user.role === 'staff' ? route('staff.event.show', rowData) : route('officeMain.event.show', rowData)}><Button icon="pi pi-eye" severity="success" /></Link>
      <Link href={route('admin.event.edit', rowData)}><Button icon="pi pi-pencil" severity="warning" /></Link>
      <Button onClick={() => deleteevent(rowData)} icon="pi pi-trash" severity="danger" />
    </div>;
  }

  return (
    <AdminLayout dataRequestCount={props.dataRequestCount}>
      <Head title="event" />
      <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
        <h2 className="text-2xl font-bold">
          Event
        </h2>
        <div className="mt-2">
          <DataTable value={props.auth.user.role === 'staff'? eventList : props.events} paginator rows={10} dataKey="id" filters={filters} filterDisplay="row" loading={loading}
            globalFilterFields={['name', 'date_time_start']} header={header} emptyMessage="No data found."
            paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries" rowsPerPageOptions={[10, 25, 50]}>
            <Column field="name" header="Name" filter filterPlaceholder="Search by name" sortable style={{ minWidth: '12rem' }} />
            <Column field="date_time_start" header="Date" filter filterPlaceholder="Search by date" sortable style={{ minWidth: '12rem' }} />
            <Column field="modifiedTime" header="Action" body={(e) => actionTemplate(e)} style={{ minWidth: '10rem' }} />
          </DataTable>
        </div>
      </div>
    </AdminLayout>
  )
}
