const TableUser = () => {
  return (
    <div>
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="p-4"></th>
            <th scope="col" class="px-6 py-3">
              User
            </th>
            <th scope="col" class="px-6 py-3">
              Email
            </th>
            <th scope="col" class="px-6 py-3">
              Imagen
            </th>
            <th scope="col" class="px-6 py-3">
              Estatus
            </th>
            <th scope="col" class="px-6 py-3">
              Rol
            </th>
            <th scope="col" class="px-6 py-4">
              Modificaciones
            </th>

            <th scope="col" class="px-6 py-3">
              Accion
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td class="w-4 p-4"></td>
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Departamento de difusion
            </th>
            <td class="px-6 py-4">l19482922@nuevoleon.tecnm.mx</td>
            <td class="px-6 py-4">
              http://localhost:5000/upload/yopli-3a92yopli.jpg
            </td>
            <td class="px-6 py-4">true</td>
            <td class="px-6 py-4">user</td>
            <td class="px-6 py-4">6</td>
            <td class="flex items-center px-6 py-4 space-x-3">
              <a
                href="#"
                class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                Editar
              </a>
              <a
                href="#"
                class="font-medium text-red-600 dark:text-red-500 hover:underline"
              >
                Eliminar
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableUser;
