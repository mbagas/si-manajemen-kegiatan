import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { AdminLayout } from "@/Layouts/AdminLayout";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { FilterMatchMode, FilterOperator } from 'primereact/api';
import { useState } from "react";
import { Head, useForm } from '@inertiajs/react';

export default function Dashboard(props) {
  const [loading, setLoading] = useState(false);
  const [globalFilterValue, setGlobalFilterValue] = useState('');
  const [filters, setFilters] = useState({
    name: { value: null, matchMode: FilterMatchMode.CONTAINS },
    date_time_start: { value: null, matchMode: FilterMatchMode.CONTAINS },
    date_time_end: { value: null, matchMode: FilterMatchMode.CONTAINS }
  })
  const dateNow = new Date()
  const dateData = new Date(props.events[0].date_time_start)
  console.log('date', dateNow.toString(), dateData.toString());
  if (props.auth.user.role === 'staff') {
    eventList = props.event.map(data => {
      return data.event;
    })
    console.log(eventList);
  }

  const statusTemplate = (rowData, index) => {
    let status = 'Upcoming'
    let dateStart = new Date(rowData.date_time_start)
    let dateEnd = new Date(rowData.date_time_end)
    if (dateNow < dateStart && dateNow < dateEnd) {
      status = 'Upcoming'
    } else if (dateNow > dateStart && dateNow < dateEnd) {
      status = 'Ongoing'
    } else if (dateNow > dateStart && dateNow > dateEnd) {
      status = 'Completed'
    }
    return <div className="flex justify-item-end">
      <span className={`${status === 'Upcoming' ? 'bg-sky-500' : status === 'Ongoing' ? 'bg-amber-500' : 'bg-lime-500'} text-white p-1 rounded`}>{status} </span> 
    </div>
  }
    return (
      <AdminLayout user={props.auth.user}>
        <Head title="User" />
        <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
          <h2 className="text-2xl font-bold">
            SISTEM INFORMASI PENGELOLAAN KEGIATAN RADAR LAMPUNG
          </h2>
          <div className="mt-2">
            <h2 className="text-xl font-bold mb-4">
              Event List
            </h2>
            <div>
              <DataTable value={props.auth.user.role === 'staff' ? eventList : props.events} paginator rows={10} dataKey="id" filters={filters} filterDisplay="row" loading={loading}
                globalFilterFields={['name', 'date_time_start', 'date_time_end']} emptyMessage="No data found."
                paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries" rowsPerPageOptions={[10, 25, 50]}>
                <Column field="name" header="Name" filter filterPlaceholder="Search by name" sortable style={{ minWidth: '12rem' }} />
                <Column field="date_time_start" header="Date Start" filter filterPlaceholder="Search by date" sortable style={{ minWidth: '12rem' }} />
                <Column field="date_time_end" header="Date End" filter filterPlaceholder="Search by date" sortable style={{ minWidth: '12rem' }} />
                <Column field="modifiedTime" header="Status" body={(e) => statusTemplate(e)} style={{ minWidth: '10rem' }} />
              </DataTable>
            </div>

            {/* {
              props.auth.user.role === 'staff' ? 
              eventList.map(event => {
                let status = 'Upcoming'
                let dateStart = new Date(event.date_time_start)
                let dateEnd = new Date(event.date_time_end)
                if (dateNow < dateStart && dateNow < dateEnd) {
                  status = 'Upcoming'
                } else if (dateNow > dateStart && dateNow < dateEnd) {
                  status = 'Ongoing'
                } else if (dateNow > dateStart && dateNow > dateEnd) {
                  status = 'Completed'
                }
                return (
                  <li className='mb-2'> 
                    <b className='mr-3'>{event.name}</b>  <span className={`${status === 'Upcoming' ? 'bg-sky-500' : status === 'Ongoing' ? 'bg-amber-500' : 'bg-lime-500'} text-white p-1 rounded`}>{status} </span> 
                    <br />
                      {event.date_time_start} - {event.date_time_end}
                  </li>
                )
              })
              : 
                props.events.map(event => {
                  let status = 'Upcoming'
                  let dateStart = new Date(event.date_time_start)
                  let dateEnd = new Date(event.date_time_end)
                  if (dateNow < dateStart && dateNow < dateEnd) {
                    status = 'Upcoming'
                  } else if (dateNow > dateStart && dateNow < dateEnd) {
                    status = 'Ongoing'
                  } else if (dateNow > dateStart && dateNow > dateEnd) {
                    status = 'Completed'
                  }
                  return (
                    <li className='mb-2'>
                      <b className='mr-3'>{event.name}</b>  <span className={`${status === 'Upcoming' ? 'bg-sky-500' : status === 'Ongoing' ? 'bg-amber-500' : 'bg-lime-500'} text-white p-1 rounded`}>{status} </span>
                      <br /> 
                      <span className='pt-1'>{event.date_time_start} - {event.date_time_end}</span>
                    </li>
                  )
                })
            } */}
          </div>
        </div>
      </AdminLayout>
    );
}
