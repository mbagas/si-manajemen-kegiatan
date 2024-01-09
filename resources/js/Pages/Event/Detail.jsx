import { AdminLayout } from "@/Layouts/AdminLayout";
import { Head, Link, useForm} from '@inertiajs/react';
import { Image } from 'primereact/image';
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import InputLabel from '@/Components/InputLabel';
import { FilterMatchMode, FilterOperator } from 'primereact/api';
import PrimaryButton from '@/Components/PrimaryButton';
import { useMemo } from "react";
import { Dialog } from 'primereact/dialog';
import React, { useState, useRef, useCallback } from "react";
import { useReactToPrint } from 'react-to-print';

export default function DetailEvent(props) {
  console.log(props);
  const [exportVisible, setExportVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  let eventFacility = props.event.event_facility.map(data => ({
    id: data.id,
    name: data.facility.name,
    quantity: data.quantity,
    status: data.status
  }))
  const [filters, setFilters] = useState({
    name: { value: null, matchMode: FilterMatchMode.CONTAINS },
  })

  const eventPresence = props.event.event_participant.filter(data => {
    return data.user_id == props.auth.user.id
  })
  console.log(eventPresence);
  const { data, setData, post, delete: destroy, processing, errors, patch, put, transform } = useForm({
    _method: 'patch',
    id: props.auth.user.role === 'staff' ? eventPresence[0].id : '',
    availability: props.auth.user.role === 'staff' ? eventPresence[0].availability : '',
    presence: props.auth.user.role === 'staff' ? eventPresence[0].presence : '',
    image: '',
    name: props.auth.user.role === 'staff' ? eventPresence[0].name : '',
    email: props.auth.user.role === 'staff' ? eventPresence[0].email : '',
    user_id: props.auth.user.role === 'staff' ? eventPresence[0].user_id : '',
    event_id: props.auth.user.role === 'staff' ? eventPresence[0].event_id : '',
    status: '',
    notulensi: '',
  });

  const componentRef = useRef(null);
  const handlePrint = useReactToPrint({
    removeAfterPrint: true,
    content: () => componentRef.current,
    documentTitle: "AwesomeFileName",
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
  
  const onSubmitFacilityAvailable = async (rowData) => {
    setData({
      id:rowData.id,
      status: 'Tersedia'
    })
  }

  const onSubmitFacilityUnavailable = async (rowData) => {
    setData({
      id: rowData.id,
      status: 'Tidak Tersedia'
    })
  }

  useMemo(() => {
    if(data.id && data.status) {
      patch(route('officeMaid.event-facility.update', data.id))
    }
  }, [data.status])

  const onSubmitNotulensi = (e) => {
    e.preventDefault();
    post(route('admin.event.updateNotulensi', props.event.id, {
      _method: 'PATCH',
      notulensi: data.notulensi,
    }));
  }

  const actionTemplate = (rowData, column) => {
    return <div className="grid grid-cols-2 gap-2">
      <Button icon="pi pi-pencil" severity="warning" />
      <Button icon="pi pi-trash" severity="danger" />
    </div>;
  }

  const actionFacilityTemplate = (rowData, column) => {
    return <div className="grid grid-cols-2 gap-2">
      <Button icon="pi pi-times" severity="danger" label="Tidak Tersedia" onClick={() => onSubmitFacilityUnavailable(rowData)} />
      <Button icon="pi pi-check" severity="success" label="Tersedia" onClick={() => onSubmitFacilityAvailable(rowData)} />
    </div>;
  }

  const imageBodyTemplate = (rowData, column) => {
    return <Image src={rowData.image[0]} onError={(e) => e.target.src = "https://webcolours.ca/wp-content/uploads/2020/10/webcolours-unknown.png"} alt="Image" width="100" preview />
  }

  const renderHeader = () => {
    return (
      <div className="flex justify-item-end">
        <div className="ml-4">
          <Button onClick={() => setExportVisible(true)} icon="pi pi-file-pdf" label="Export PDF" />
        </div>

      </div>
    );
  };

  const header = renderHeader();

  return (
    <AdminLayout user={props.auth.user}>
      <Head title="Detail Event" />
      <div className="grid grid-cols-1 gap-6 md:gap-4">
        <div className={`grid grid-cols-1 ${props.auth.user.role === 'office_maid' ? "md:grid-cols-1" : "md:grid-cols-2"} gap-6 md:gap-4`}>
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
            {
              props.auth.user.role === 'staff' && 
              <div className="grid grid-cols-2 md:grid-cols-6 gap-x-2">
                <div>
                  <label className="font-medium text-sm text-gray-700">
                    Notulensi :
                  </label>
                </div>
                <div className="md:col-span-5">
                  <label className="font-medium text-sm text-gray-700">
                    {props.event.notulensi ? <a className="text-blue-600" href={props.event.notulensi[0]} target="_blank">Dokumen Notulensi</a> : <label>Tidak ada notulensi</label>}
                  </label>
                </div>
              </div>
            }
            
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
                  (data.availability === 'Dapat Hadir' && Date.now() >= new Date(props.event.date_time_start).getTime()) &&
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
            </div>
          }
          {
            props.auth.user.role === 'admin' &&
            <div className="grid grid-cols-1 gap-y-2 px-4 py-5 bg-white rounded-lg shadow">
                <h2 className="text-2xl font-bold mb-2">
                  Notulensi
                </h2>
                <form onSubmit={onSubmitNotulensi}>
                  <div className="grid mb-2">
                    <div>
                      <label className="font-medium text-sm text-gray-700">
                        Notulensi : {props.event.notulensi ? <a className="text-blue-600" href={props.event.notulensi[0]} target="_blank">Dokumen Notulensi</a> : <label>Tidak ada notulensi</label>}
                      </label>
                    </div>
                  </div>
                  <div>
                    <input
                      className="block w-full text-sm text-slate-500
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-full file:border-0
                  file:text-sm file:font-semibold
                  file:bg-violet-50 file:text-violet-700
                  hover:file:bg-violet-100"
                      type="file"
                      name="notulensi"
                      accept=".doc,.docx,.pdf"
                      onChange={(e) => {
                        setData("notulensi", e.target.files[0]);
                      }
                      } />
                  </div>
                  <div className="mt-4">
                    <PrimaryButton className="ml-4" disabled={processing}>
                      Submit
                    </PrimaryButton>
                  </div>
                </form>
            </div>
          }

        </div>

        {
          props.auth.user.role === 'office_maid' ? <div className="px-4 py-5 bg-white rounded-lg shadow">
            <h4 className="text-xl font-bold">
              Daftar Fasilitas
            </h4>
            <div className="mt-2">
              <DataTable value={eventFacility} paginator rows={10} dataKey="id" filters={filters} filterDisplay="row" loading={loading}
                globalFilterFields={['name', 'quantity', 'status']} emptyMessage="No data found."
                paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries" rowsPerPageOptions={[10, 25, 50]}>
                <Column field="name" header="Name" filter filterPlaceholder="Search by Name" sortable style={{ minWidth: '12rem' }} />
                <Column field="quantity" header="Jumlah Fasilitas" sortable style={{ minWidth: '12rem' }} />
                <Column field="status" header="Status Fasilitas" sortable style={{ minWidth: '12rem' }} />
                <Column field="modifiedTime" header="Action" body={(e) => actionFacilityTemplate(e)} style={{ minWidth: '9rem' }} />
              </DataTable>
            </div>
          </div> :
            <div className="px-4 py-5 bg-white rounded-lg shadow">
              <h4 className="text-xl font-bold">
                Daftar Peserta
              </h4>
              <div className="mt-2">
                <DataTable value={props.event.event_participant} paginator rows={10} dataKey="id" filters={filters} header={props.auth.user.role === 'admin' && header} filterDisplay="row" loading={loading}
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

                </DataTable>
              </div>
            </div>
        }
        
      </div>

      <Dialog header={'Export Data Kehadiran'} visible={exportVisible} style={{ maxWidth: '90vw', minWidth: '50vw' }} onHide={() => setExportVisible(false)}>
        <div className="mt-4 text-right">
          <Button icon="pi pi-check" label="Cetak" severity="success" onClick={handlePrint} />
        </div>
        <div className="border border-black mt-4">
          <div ref={componentRef}>
            <style type="text/css" media="print">
              {" \@page {\ size: landscape;\ }\ "}
            </style>

            <div className="flex flex-col gap-3 md:gap-1 m-10">
              <div className="grid grid-rows-2 gap-1 h-auto mb-4">
                <div className="flex justify-center">
                  <h4 className="text-2xl font-bold justify-self-center">DAFTAR KEHADIRAN PEGAWAI</h4>
                </div>
                <div className="flex justify-center">
                  <h4 className="text-2xl font-bold justify-self-center">KEGIATAN : {props.event.name}</h4>
                </div>

              </div>

              <div>
                <table className="border-collapse border border-black w-full">
                  <thead>
                    <tr>
                      <th className="border border-black">Nama</th>
                      <th className="border border-black">Status</th>
                      <th className="border border-black">Gambar</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      props.event.event_participant.map((data, index) => {
                        return (
                          <>
                            <tr>
                              <td className="border border-black p-1 text-center"> {data.name} </td>
                              <td className="border border-black p-1 text-center"> {data.presence} </td>
                              <td className="border border-black p-1 text-center"><Image src={data.image[0]} onError={(e) => e.target.src = "https://webcolours.ca/wp-content/uploads/2020/10/webcolours-unknown.png"} alt="Image" width="100" preview /></td>
                            </tr>
                          </>
                        )
                      })
                    }
                  </tbody>
                </table>

              </div>

            </div>

          </div>
        </div>

      </Dialog>
    </AdminLayout>
  )

}
