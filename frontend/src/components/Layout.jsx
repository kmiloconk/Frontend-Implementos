import Link from 'next/link';

const Layout = () => {
  return (
    <nav className="bg-black-800">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
            </div>
            <div className="">
              <div className="ml-10 flex items-baseline space-x-4">
                <div className="flex items-center">
                  <div className="border border-white rounded-lg px-4 py-2">
                    <Link
                      href="/Encargado/Brigadistas"
                      className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Brigadistas
                    </Link>
                    <Link
                      href="/Encargado/Implementos"
                      className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Implementos
                    </Link>
                    <Link
                      href="/Encargado/Mantenimientos"
                      className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Mantenimientos
                    </Link>
                    <Link
                      href="/Encargado/Solicitudes"
                      className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Solicitudes
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Layout;
