import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { AdminLayout } from "@/Layouts/AdminLayout";

export default function Dashboard(props) {

  const dateNow = new Date()
  const dateData = new Date(props.events[0].date_time_start)
  console.log('date', dateNow.toString(), dateData.toString());
  if (props.auth.user.role === 'staff') {
    eventList = props.event.map(data => {
      return data.event;
    })
    console.log(eventList);
  }
    return (
      <AdminLayout user={props.auth.user}>
        <Head title="User" />
        <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
          <h2 className="text-2xl font-bold">
            Dashboard
          </h2>
          <div className="mt-2">
            <h2 className="text-xl font-bold mb-4">
              Event List
            </h2>
            {
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
            }
          </div>
        </div>
      </AdminLayout>
    );
}
