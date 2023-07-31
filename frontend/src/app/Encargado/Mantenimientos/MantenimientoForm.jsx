import Link from 'next/link';

const MantenimientoForm = ({ mantenimiento, setMantenimiento, handleSubmit, tiposMantenimiento }) => {
  const { fechaMantenimiento, tipoMantenimiento, nombreResponsable, descripcion, estado, observacion } = mantenimiento;

  return (
    <form onSubmit={handleSubmit} className="max-w-sm">
      <div className="mb-4">
        <label htmlFor="fechaMantenimiento" className="block text-sm font-bold mb-2">
          Fecha de Mantenimiento
        </label>
        <textarea
          id="fechaMantenimiento"
          className="shadow appearance-none border rounded w-full py-2 px-3 font-bold text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={fechaMantenimiento}
          onChange={(e) => setMantenimiento({ ...mantenimiento, fechaMantenimiento: e.target.value })}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="tipoMantenimiento" className="block text-sm font-bold mb-2">
          Tipo de Mantenimiento
        </label>
        <select
          id="tipoMantenimiento"
          className="shadow appearance-none border rounded w-full py-2 px-3 font-bold text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={tipoMantenimiento}
          onChange={(e) => setMantenimiento({ ...mantenimiento, tipoMantenimiento: e.target.value })}
        >
          <option value="">Seleciona un Tipo</option>
          {tiposMantenimiento.map((tipoMantOption) => (
            <option key={tipoMantOption._id} value={tipoMantOption._id}>
              {tipoMantOption.nombre}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="nombreResponsable" className="block text-sm font-bold mb-2">
          Nombre del Responsable
        </label>
        <textarea
          id="nombreResponsable"
          className="shadow appearance-none border rounded w-full py-2 px-3 font-bold text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={nombreResponsable}
          onChange={(e) => setMantenimiento({ ...mantenimiento, nombreResponsable: e.target.value })}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="descripcion" className="block text-sm font-bold mb-2">
          Descripción
        </label>
        <textarea
          id="descripcion"
          rows="3"
          className="shadow appearance-none border rounded w-full py-2 px-3 font-bold text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={descripcion}
          onChange={(e) => setMantenimiento({ ...mantenimiento, descripcion: e.target.value })}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="estado" className="block text-sm font-bold mb-2">
          Estado
        </label>
        <select
          id="estado"
          className="shadow appearance-none border rounded w-full py-2 px-3 font-bold text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={estado}
          onChange={(e) => setMantenimiento({ ...mantenimiento, estado: e.target.value })}
        >
          <option value="">Seleciona una Opcion</option>
          <option value="true">true</option>
          <option value="false">false</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="observacion" className="block text-sm font-bold mb-2">
          Observación
        </label>
        <textarea
          id="observacion"
          rows="3"
          className="shadow appearance-none border rounded w-full py-2 px-3 font-bold text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={observacion}
          onChange={(e) => setMantenimiento({ ...mantenimiento, observacion: e.target.value })}
        />
      </div>
      <div className="flex items-center justify-center">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Guardar!
        </button>
        <Link href="/Mantenimientos">
          <button className="inline-block hover:bg-red-500 bg-red-700 text-white font-bold py-2 px-4 rounded">
            Atras
          </button>
        </Link>
      </div>
    </form>
  );
};

export default MantenimientoForm;
