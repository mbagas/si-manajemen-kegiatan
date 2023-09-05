import { AdminLayout } from "@/Layouts/AdminLayout";
import { Head, Link, useForm } from '@inertiajs/react';
import { Image } from 'primereact/image';
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useState, useCallback, useEffect } from "react";
import InputLabel from '@/Components/InputLabel';
import { FilterMatchMode, FilterOperator } from 'primereact/api';
import PrimaryButton from '@/Components/PrimaryButton';

export default function DetailEvent(props) {
  console.log(props);
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState({
    name: { value: null, matchMode: FilterMatchMode.CONTAINS },
  })

  const eventPresence = props.event.event_participant.filter(data => {
    return data.user_id == props.auth.user.id
  })
  console.log(eventPresence);
  const { data, setData, post, delete: destroy, processing, errors, patch, transform } = useForm({
    _method: 'patch',
    id: props.auth.user.role === 'staff' ? eventPresence[0].id : '',
    availability: props.auth.user.role === 'staff' ? eventPresence[0].availability : '',
    presence: props.auth.user.role === 'staff' ? eventPresence[0].presence : '',
    image: '',
    name: props.auth.user.role === 'staff' ? eventPresence[0].name : '',
    email: props.auth.user.role === 'staff' ? eventPresence[0].email : '',
    user_id: props.auth.user.role === 'staff' ? eventPresence[0].user_id : '',
    event_id: props.auth.user.role === 'staff' ? eventPresence[0].event_id : '',
  });
  
  const onSubmitAvailable = (e) => {
    e.preventDefault();
    setData('availability', 'Dapat Hadir');
    console.log(data);
    patch(route('staff.event-participant.update', data.id))
  }

  const onSubmitUnavailable = (e) => {
    e.preventDefault();
    setData('availability', 'Tidak Dapat Hadir');
    patch(route('staff.event-participant.update', data.id))
  }

  const onSubmitPresence = (e) => {
    e.preventDefault();
    setData('presence', 'Hadir');
    console.log(data);
    post(route('staff.event-participant.update', data.id, {
      _method: 'PATCH',
      image: data.image,
    }));
  }



  const actionTemplate = (rowData, column) => {
    return <div className="grid grid-cols-2 gap-1">
      <Button icon="pi pi-pencil" severity="warning" />
      <Button icon="pi pi-trash" severity="danger" />
    </div>;
  }

  const imageBodyTemplate = (rowData, column) => {
    return <Image src={rowData.image[0]} onError={(e) => e.target.src = "https://webcolours.ca/wp-content/uploads/2020/10/webcolours-unknown.png"} alt="Image" width="100" preview />
  }

  return (
    <AdminLayout>
      <Head title="Detail Event" />
      <div className="grid grid-cols-1 gap-6 md:gap-4">
        <div className={`grid grid-cols-1 ${props.auth.user.role === 'staff' ? "md:grid-cols-2" : "grid-cols-1"} gap-6 md:gap-4`}>
          <div className="grid grid-cols-1 gap-y-2 px-4 py-5 bg-white rounded-lg shadow">
            <h2 className="text-2xl font-bold">
              Detail Event
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-6 gap-x-2">
              <div>
                <label className="font-medium text-sm text-gray-700">
                  Nama :
                </label>
              </div>
              <div className="md:col-span-5">
                <label className="font-medium text-sm text-gray-700">
                  {props.event.name}
                </label>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-x-2">
              <div>
                <label className="font-medium text-sm text-gray-700">
                  Waktu :
                </label>
              </div>
              <div className="md:col-span-5">
                <label className="font-medium text-sm text-gray-700">
                  {props.event.date_time_start} - {props.event.date_time_end}
                </label>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-x-2">
              <div>
                <label className="font-medium text-sm text-gray-700">
                  Lokasi :
                </label>
              </div>
              <div className="md:col-span-5">
                <label className="font-medium text-sm text-gray-700">
                  {props.event.location}
                </label>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-x-2">
              <div>
                <label className="font-medium text-sm text-gray-700">
                  Fasilitas :
                </label>
              </div>
              <div className="md:col-span-5">
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
          {
            props.auth.user.role === 'staff' &&
            <div className="grid grid-cols-1 gap-y-2 px-4 py-5 bg-white rounded-lg shadow">
              
              <h2 className="text-2xl font-bold mb-2">
                Konfirmasi Kehadiran
              </h2>
              <form>
                  <div className="grid md:grid-cols-2 gap-2 justify-items-center mb-4">
                  <Button icon="pi pi-check" label="Dapat Hadir" severity="success" onClick={onSubmitAvailable}/>
                  <Button icon="pi pi-times" label="Tidak Dapat Hadir" severity="danger" onClick={onSubmitUnavailable}/>
                </div>
              </form>
              {
                data.availability === 'Dapat Hadir' &&
                <>
                    <h2 className="text-2xl font-bold mb-2">
                      Isi Presensi
                    </h2>
                    <form onSubmit={onSubmitPresence}>
                      <div className="grid grid-cols-2 grid-cols-6 gap-2">
                        <div>
                          <label className="font-medium text-sm text-gray-700">
                            Photo :
                          </label>
                        </div>
                        <div className="col-span-5">
                          <input
                            className="block w-full text-sm text-slate-500
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-full file:border-0
                  file:text-sm file:font-semibold
                  file:bg-violet-50 file:text-violet-700
                  hover:file:bg-violet-100"
                            type="file"
                            name="image"
                            accept="image/*"
                            capture="user"
                            onChange={(e) => {
                              setData("image", e.target.files[0]);
                            }
                            } />
                        </div>
                      </div>
                      <div className="mt-4">
                        <PrimaryButton className="ml-4" disabled={processing}>
                          Submit
                        </PrimaryButton>
                      </div>
                    </form></>
              }
              {/* <h2 className="text-2xl font-bold">
                Isi Presensi
              </h2>
                <form onSubmit={onSubmitPresence}>
                <div className="grid grid-cols-2 md:grid-cols-6 gap-2">
                  <div>
                    <label className="font-medium text-sm text-gray-700">
                      Photo :
                    </label>
                  </div>
                  <div className="md:col-span-5">
                    <input
                      className="block w-full text-sm text-slate-500
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-full file:border-0
                  file:text-sm file:font-semibold
                  file:bg-violet-50 file:text-violet-700
                  hover:file:bg-violet-100"
                      type="file"
                      name="image"
                      accept="image/*"
                      capture="user"
                      onChange={(e) => {
                        setData("image", e.target.files[0]);
                      }
                      } />
                  </div>
                </div>
                <div>
                    <PrimaryButton className="ml-4" disabled={processing}>
                      Submit
                    </PrimaryButton>
                </div>
              </form> */}
            </div>
          }

        </div>

        <div className="px-4 py-5 bg-white rounded-lg shadow">
          <h4 className="text-xl font-bold">
            Daftar Peserta
          </h4>
          <div className="mt-2">
            <DataTable value={props.event.event_participant} paginator rows={10} dataKey="id" filters={filters} filterDisplay="row" loading={loading}
              globalFilterFields={['name', 'availablelity', 'status']} emptyMessage="No data found."
              paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
              currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries" rowsPerPageOptions={[10, 25, 50]}>
              <Column field="name" header="Name" filter filterPlaceholder="Search by Name" sortable style={{ minWidth: '12rem' }} />
              <Column field="availability" header="Ketersediaan Hadir" sortable style={{ minWidth: '12rem' }} />
              <Column field="presence" header="Status Hadir" sortable style={{ minWidth: '12rem' }} />
              
              {
                props.auth.user.role === 'admin' && 
                <Column header="Image" body={imageBodyTemplate} />
              }
              {
                props.auth.user.role === 'admin' && 
                  <Column field="modifiedTime" header="Action" body={(e) => actionTemplate(e)} style={{ minWidth: '9rem' }} />
              }

            </DataTable>
          </div>
        </div>
      </div>
    </AdminLayout>
  )

}
