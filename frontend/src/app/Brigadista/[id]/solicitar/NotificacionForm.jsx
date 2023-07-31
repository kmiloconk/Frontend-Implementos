
const NotificacionForm = ({ notificacion, setNotificacion, handleSubmit, implementos }) => {
  const { implemento, descripcion } = notificacion;

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
    <form onSubmit={handleSubmit} className="max-w-sm">
      <div className="mb-4">
        <label htmlFor="implemento" className="block text-sm font-bold mb-2">
          Implemento
        </label>
        <select
          id="implemento"
          className="shadow appearance-none border rounded w-full py-2 px-3 font-bold text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={implemento}
          onChange={(e) => setNotificacion({ ...notificacion, implemento: e.target.value })}
        >
          <option value="">Seleciona un Implemento</option>
          {implementos.map((implementoOption) => (
            <option key={implementoOption._id} value={implementoOption._id}>
              {implementoOption.tipo.nombre}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="descripcion" className="block text-sm font-bold mb-2">
          Descripción
        </label>
        <textarea
          id="descripcion"
          className="shadow appearance-none border rounded w-full py-2 px-3 font-bold text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={descripcion}
          onChange={(e) => setNotificacion({ ...notificacion, descripcion: e.target.value })}
        />
      </div>
      <div className="flex items-center justify-center">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Enviar!
        </button>
      </div>
    </form>
    </div>
  );
};

export default NotificacionForm;