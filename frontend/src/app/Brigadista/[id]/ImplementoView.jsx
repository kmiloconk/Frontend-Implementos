'use client';
import { useEffect, useState } from 'react';
import { getUsuarioById} from '@/data/usuarioData';
import {  useParams, useRouter } from 'next/navigation';

const SoliButton = ({ id }) => {
  const { push } = useRouter();
  return (
    <button
      onClick={() => push(`/Brigadista/${id}/solicitar`)}
      className="m-1 inline-block hover:bg-blue-500 bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Crear solicitud
    </button>
  );
};


export const Implementosvista = () => {
  const [usuario, setUsuario] = useState([]);
  const [implementos, setImplementos] = useState([]);
  const [capacitaciones, setCapacitaciones] = useState([]);
  const params = useParams();
  useEffect(() => {
    getUsuarioById(params.id).then((res) => {
      setUsuario(res.data);
      setImplementos(res.data.implemento);
      setCapacitaciones(res.data.capacitacion);
    });
  }, []);

  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center", // Center horizontally
        justifyContent: "center", // Center vertically
        minHeight: "100vh", // Optional: This will make sure the div takes at least the full viewport height.
      }}
    >
      <div
        style={{
          border: "2px solid white", // Add a white border around the content
          borderRadius: "10px", // Optional: Add border radius to make the corners rounded
          padding: "20px", // Optional: Add some padding around the content
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)", // Optional: Add a subtle box shadow for a 3D effect
        }}
      >
        <div>
          <div>
            <h1 className="text-2xl font-bold mb-4">Implementos de {usuario.nombre}</h1>
          </div>
          <div>
            <ul>
              {implementos.map((implemento) => (
                <li key={implemento._id}>
                  <p>-{implemento.tipo?.nombre}</p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-bold mb-2">Capacitaciones de {usuario.nombre}</h2>
            <ul>
              {capacitaciones.map((capacitacion) => (
                <li key={capacitacion._id}>-{capacitacion.nombre}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
        }}
        className="space-x-2 mt-4"
      >
        <SoliButton id={usuario._id} />
      </div>
    </div>
  );
};