import { AdminLayout } from "@/Layouts/AdminLayout";
import { Head, Link, useForm } from '@inertiajs/react';
import { Image } from 'primereact/image';
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useState, useCallback, useEffect } from "react";
import InputLabel from '@/Components/InputLabel';
import { FilterMatchMode, FilterOperator } from 'primereact/api';

export default function DetailEvent(props) {
  console.log(props);
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState({
    name: { value: null, matchMode: FilterMatchMode.CONTAINS },
  })

  const { data, setData, patch, delete: destroy, processing, errors, reset } = useForm({
    id: '',
    availablelity: '',
    status: '',
  });

  const renderHeader = () => {
    return (
      <div className="flex justify-item-end">
        <Button type="button" icon="pi pi-plus" label="Tambah" severity="success" />

      </div>
    );
  };

  const header = renderHeader();

  const actionTemplate = (rowData, column) => {
    return <div className="grid grid-cols-2 gap-1">
      <Button icon="pi pi-pencil"  severity="warning" />
      <Button  icon="pi pi-trash" severity="danger" />
    </div>;
  }

  return (
    <AdminLayout>
      <Head title="Detail Event" />
      <div className="grid grid-cols-1 gap-6 md:gap-4">
        <div className="grid grid-cols-1 gap-y-2 px-4 py-5 bg-white rounded-lg shadow">
          <h2 className="text-2xl font-bold">
            Detail Event
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-12 gap-x-2">
            <div>
              <label className="font-medium text-sm text-gray-700">
                Nama :
              </label>
            </div>
            <div className="md:col-span-11">
              <label className="font-medium text-sm text-gray-700">
                {props.event.name}
              </label>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-12 gap-x-2">
            <div>
              <label className="font-medium text-sm text-gray-700">
                Waktu :
              </label>
            </div>
            <div className="md:col-span-11">
              <label className="font-medium text-sm text-gray-700">
                {props.event.date_time_start} - {props.event.date_time_end}
              </label>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-12 gap-x-2">
            <div>
              <label className="font-medium text-sm text-gray-700">
                Lokasi :
              </label>
            </div>
            <div className="md:col-span-11">
              <label className="font-medium text-sm text-gray-700">
                {props.event.location}
              </label>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-12 gap-x-2">
            <div>
              <label className="font-medium text-sm text-gray-700">
                Fasilitas :
              </label>
            </div>
            <div className="md:col-span-11">
              <ul className="list-disc">
                {
                  props.event.event_facility.map(data => {
                    return (
                      <li>
                        {data.facility.name} - {data.quantity} <b>({data.status})</b>
                      </li>
                    )
                  })
                }
              </ul>
            </div>
          </div>
        </div>

        <div className="px-4 py-5 bg-white rounded-lg shadow">
          <h4 className="text-xl font-bold">
            Daftar Peserta
          </h4>
          <div className="mt-2">
            <DataTable value={props.event.event_participant} paginator rows={10} dataKey="id" filters={filters} filterDisplay="row" loading={loading}
              globalFilterFields={['name', 'availablelity', 'status']} header={header} emptyMessage="No data found."
              paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
              currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries" rowsPerPageOptions={[10, 25, 50]}>
              <Column field="name" header="Name" filter filterPlaceholder="Search by Name" sortable style={{ minWidth: '12rem' }} />
              <Column field="availability" header="Ketersediaan Hadir" sortable style={{ minWidth: '12rem' }} />
              <Column field="status" header="Status Hadir" sortable style={{ minWidth: '12rem' }} />
              <Column field="modifiedTime" header="Action" body={(e) => actionTemplate(e)} style={{ minWidth: '9rem' }} />
            </DataTable>
          </div>
        </div>
      </div>
    </AdminLayout>
  )

}
