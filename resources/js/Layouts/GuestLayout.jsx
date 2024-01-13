import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function Guest({ children }) {
  return (
    <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
      <div>
        <h2 className="text-center text-2xl font-bold">
          Selamat Datang Di
        </h2>
        <h2 className="text-2xl font-bold">
          Sistem Informasi Manajemen Pengelolaan Kegiatan
        </h2>
      </div>

      <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
        {children}
      </div>
    </div>
  );
}
