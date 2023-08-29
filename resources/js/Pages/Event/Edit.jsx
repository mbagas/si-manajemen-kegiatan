import { AdminLayout } from "@/Layouts/AdminLayout";
import { Head, Link, useForm } from '@inertiajs/react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';
import { InputNumber } from 'primereact/inputnumber';
import { MultiSelect } from 'primereact/multiselect';

export default function AddEvent(props) {

  console.log('props', props);
  const { data, setData, patch, processing, errors, reset } = useForm({
    name: props.event.name,
    date_time_start: new Date(props.event.date_time_start),
    date_time_end: new Date(props.event.date_time_end),
    participants: props.event.event_participant.map((participant) => participant.user),
    location: props.event.location,
    facilities: props.event.event_facility.map((facility) => {
      let data = facility.facility;
      data.quantity = facility.quantity;
      return data;
    }),
  });
  console.log('data', data);


  const handleOnChange = (event) => {
    setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
  };

  const submit = (e) => {
    e.preventDefault();

    patch(route('admin.event.update'));
  };

  return (
    <AdminLayout dataRequestCount={props.dataRequestCount}>
      <Head title="Add event" />
      <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
        <h2 className="text-2xl font-bold">
          Tambah event
        </h2>
        <form onSubmit={submit}>
          <div>
            <InputLabel htmlFor="name" value="Name" />

            <TextInput
              id="name"
              name="name"
              value={data.name}
              className="mt-1 block w-full"
              autoComplete="name"
              isFocused={true}
              onChange={handleOnChange}
              required
            />

            <InputError message={errors.name} className="mt-2" />
          </div>

          <div className="mt-4">
            <InputLabel htmlFor="date_time_start" value="Tanggal Kegiatan Dimulai" />

            {/* <Calendar value={data.plantingDate} onChange={(e) => setData('plantingDate', new Date('Y-m-d H:i:s',e.value))} dateFormat="yy-mm-dd" /> */}
            <Calendar value={new Date(data.date_time_start)} onChange={(e) => setData('date_time_start', e.value)} showTime hourFormat="24" dateFormat="yy-mm-dd" />

            <InputError message={errors.date_time_start} className="mt-2" />
          </div>

          <div className="mt-4">
            <InputLabel htmlFor="date_time_end" value="Tanggal Kegiatan Selesai" />

            {/* <Calendar value={data.plantingDate} onChange={(e) => setData('plantingDate', new Date('Y-m-d H:i:s',e.value))} dateFormat="yy-mm-dd" /> */}
            <Calendar value={new Date(data.date_time_end)} onChange={(e) => setData('date_time_end', e.value)} showTime hourFormat="24" dateFormat="yy-mm-dd" />

            <InputError message={errors.date_time_end} className="mt-2" />
          </div>

          <div className="mt-4">
            <InputLabel htmlFor="password" value="Staff" />

            <MultiSelect value={data.participants} onChange={(e) => setData('participants', e.value)} options={props.users} optionLabel="name"
              placeholder="Select Staff" className="mt-2 block w-full" />

            <InputError message={errors.participants} className="mt-2" />
          </div>

          <div className="mt-4">
            <ul>
              {
                data.participants.map((staff) => {
                  return <li>{staff.name}</li>
                })
              }
            </ul>
          </div>

          <div className="mt-4">
            <InputLabel htmlFor="password_confirmation" value="Location" />

            <TextInput
              id="location"
              name="location"
              value={data.location}
              className="mt-1 block w-full"
              onChange={handleOnChange}
              required
            />

            <InputError message={errors.password_confirmation} className="mt-2" />
          </div>

          <div className="mt-4">
            <InputLabel htmlFor="password" value="Facilities" />

            <MultiSelect value={data.facilities} onChange={(e) => setData('facilities', e.value)} options={props.facilities} optionLabel="name"
              placeholder="Select Facilities" className="mt-2 block w-full" />

            <InputError message={errors.facilities} className="mt-2" />

          </div>

          <div className="mt-4">
            <ul>
              {
                data.facilities.map((facility, index) => {

                  return (
                    <li>

                      {facility.name} <InputNumber showButtons name={`facilities`} value={facility.quantity}
                        onChange={(e) => {
                          console.log('e', e)
                          let newFacilities = data.facilities
                          newFacilities[index].quantity = e.value

                          console.log('facilities', newFacilities[index].quantity)
                          setData(`facilities`, newFacilities)
                        }} />
                    </li>)
                })
              }
            </ul>
          </div>


          <div className="flex items-center justify-end mt-4">

            <PrimaryButton className="ml-4" disabled={processing}>
              Save
            </PrimaryButton>
          </div>
        </form>
      </div>
    </AdminLayout>
  )
}
