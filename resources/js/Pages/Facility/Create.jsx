import { AdminLayout } from "@/Layouts/AdminLayout";
import { Head, useForm } from '@inertiajs/react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Dropdown } from 'primereact/dropdown';
import { InputNumber } from 'primereact/inputnumber';

export default function Addfacility(props) {
  console.log(props);

  const { data, setData, post, processing, errors, reset } = useForm({
    name: '',
    total_amount: 0,
  });

  const handleOnChange = (event) => {
    setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
  };

  const submit = (e) => {
    e.preventDefault();

    post(route('admin.facility.store'));
  };

  return (
    <AdminLayout dataRequestCount={props.dataRequestCount}>
      <Head title="Add facility" />
      <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
        <h2 className="text-2xl font-bold">
          Tambah Fasilitas
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
            <InputLabel htmlFor="Quantity" value="Quantity" />

            <InputNumber showButtons name="total_amount" value={data.total_amount} onValueChange={handleOnChange} />

            <InputError message={errors.total_amount} className="mt-2" />
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
