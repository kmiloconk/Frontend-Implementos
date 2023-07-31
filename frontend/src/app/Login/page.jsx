'use client';
import React,{ useState  } from "react";
import { Container, Heading, Button, Input, Stack,} from '@chakra-ui/react';
import { getUsuarios } from "../../data/usuarioData"
import { useRouter } from 'next/navigation';



const Login = () => {
	const router = useRouter();


	const [email, setEmail] = useState("");


	const onSubmit = async (e) => {
		e.preventDefault()
		getUsuarios()
      .then((res) => {
        const usuarioEncontrado = res.data.filter((usuario) => usuario.email === email);
        console.log(usuarioEncontrado);
        // Aquí puedes realizar cualquier otra acción necesaria con la información filtrada

        const brigadista = usuarioEncontrado.find((usuario) => usuario.rol.nombre === 'Brigadista');
        const encargado = usuarioEncontrado.find((user) => user.rol.nombre === 'Encargado');
        if (encargado) {
          router.push("/Encargado/Brigadistas");
        }
        if (brigadista) {
          router.push(`/Brigadista/${brigadista._id}`);
        }
      })
      .catch((error) => {
        console.log(error);
        /*return Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Algo salio mal!"
        })*/
      });}

	return (

		<Container maxW="container.md">
			<Heading as="h1" size="2xl" textAlign="center" my={10}>Inicio de sesion</Heading>
			<Stack>
			<label htmlFor="email" className="block text-sm font-bold mb-2">
          	Email
        	</label>
			<input
          	type="text"
          	id="email"
          	className="shadow appearance-none border rounded w-full py-2 px-3 font-bold text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          	onChange={(e) => setEmail(e.target.value)}
        	/>
			</Stack>
			<Button my={10} colorScheme={"blue"} onClick={onSubmit}>Iniciar sesion</Button>
		</Container>

	)
}

export default Login