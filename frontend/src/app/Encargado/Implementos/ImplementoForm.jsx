import Link from 'next/link';

const ImplementosForm = ({ implemento, setImplemento, handleSubmit, tipos, estados, categorias }) => {
  const { tipo, estado, fechaVencimiento, categoria, solicitadoPorBrigadista } = implemento;

  return (
    <form onSubmit={handleSubmit} className="max-w-sm">
      <div className="mb-4">
        <label htmlFor="tipo" className="block text-sm font-bold mb-2">
          Tipo
        </label>
        <select
          id="tipo"
          className="shadow appearance-none border rounded w-full py-2 px-3 font-bold text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={tipo}
          onChange={(e) => setImplemento({ ...implemento, tipo: e.target.value })}
        >
          <option value="">Seleciona un Tipo</option>
          {tipos.map((tipo) => (
            <option key={tipo._id} value={tipo._id}>
              {tipo.nombre}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="estado" className="block text-sm font-bold mb-2">
          Estado
        </label>
        <select
          id="estado"
          className="shadow appearance-none border rounded w-full py-2 px-3 font-bold text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={estado}
          onChange={(e) => setImplemento({ ...implemento, estado: e.target.value })}
        >
          <option value="">Seleciona un Estado</option>
          {estados.map((estado) => (
            <option key={estado._id} value={estado._id}>
              {estado.nombre}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="fechaVencimiento" className="block text-sm font-bold mb-2">
          Fecha de Vencimiento
        </label>
        <input
          type="date"
          id="fechaVencimiento"
          className="shadow appearance-none border rounded w-full py-2 px-3 font-bold text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={fechaVencimiento}
          onChange={(e) => setImplemento({ ...implemento, fechaVencimiento: e.target.value })}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="categoria" className="block text-sm font-bold mb-2">
          Categoría
        </label>
        <select
          id="categoria"
          className="shadow appearance-none border rounded w-full py-2 px-3 font-bold text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={categoria}
          onChange={(e) => setImplemento({ ...implemento, categoria: e.target.value })}
        >
          <option value="">Seleciona una categoria</option>
          {categorias.map((categoria) => (
            <option key={categoria._id} value={categoria._id}>
              {categoria.nombre}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="solicitadoPorBrigadista" className="block text-sm font-bold mb-2">
          Solicitado por Brigadista
        </label>
        <input
          type="checkbox"
          id="solicitadoPorBrigadista"
          className="form-checkbox h-5 w-5 text-blue-600"
          checked={solicitadoPorBrigadista}
          onChange={(e) => setImplemento({ ...implemento, solicitadoPorBrigadista: e.target.checked })}
        />
      </div>
      <div className="flex items-center justify-center">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Guardar!
        </button>
        <Link href="/Encargado/Implementos">
          <button className="inline-block hover:bg-red-500 bg-red-700 text-white font-bold py-2 px-4 rounded">
            Atras
          </button>
        </Link>
      </div>
    </form>
  );
};

export default ImplementosForm;
