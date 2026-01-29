import { useState } from "react";
import { Bell, CheckCircle, XCircle, Search } from "lucide-react";

export default function Dashboard() {
  const [openNotif, setOpenNotif] = useState(false);

  const vistorias = [
    {
      id: 1,
      cliente: "",
      veiculo: "",
      placa: "",
      data: "",
      valor: "",
      status: "",
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r p-6 flex flex-col justify-between">
        <div>
          <h1 className="text-xl font-bold text-blue-600 mb-8">EPTA</h1>

          <nav className="space-y-3">
            <button className="w-full text-left px-4 py-2 rounded bg-blue-50 text-blue-600">
              Vistorias
            </button>
            <button className="w-full text-left px-4 py-2 rounded hover:bg-gray-100">
              Dashboard
            </button>
            <button className="w-full text-left px-4 py-2 rounded hover:bg-gray-100">
              Motivos Reprovação
            </button>
          </nav>
        </div>

        <div className="border-t pt-4">
          <p className="font-medium">Vistoriador</p>
          <p className="text-sm text-gray-500">Vistoriador</p>

          <button className="text-red-500 mt-3 text-sm">Sair</button>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Minhas Vistorias</h2>

          <button
            onClick={() => setOpenNotif(true)}
            className="relative p-2 rounded hover:bg-gray-100"
          >
            <Bell size={22} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-white p-4 rounded shadow">
            <p className="text-sm text-gray-500">Vistorias Hoje</p>
            <h3 className="text-2xl font-bold">0</h3>
          </div>

          <div className="bg-white p-4 rounded shadow">
            <p className="text-sm text-gray-500">Aguardando Análise</p>
            <h3 className="text-2xl font-bold">0</h3>
          </div>
        </div>

        {/* Filtros */}
        <div className="flex flex-wrap gap-3 mb-6">
          <div className="flex items-center bg-white border rounded px-3 py-2 w-72">
            <Search size={18} className="text-gray-400" />
            <input
              placeholder="Buscar por placa ou cliente"
              className="ml-2 outline-none w-full"
            />
          </div>

          <select className="bg-white border rounded px-3 py-2">
            <option>Todos Status</option>
            <option>Pendente</option>
            <option>Aprovado</option>
          </select>
        </div>

        {/* Tabela */}
        <div className="bg-white rounded shadow overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-gray-100 text-left">
              <tr>
                <th className="p-3">Cliente / Veículo</th>
                <th className="p-3">Placa</th>
                <th className="p-3">Data</th>
                <th className="p-3">Valor</th>
                <th className="p-3">Status</th>
                <th className="p-3">Ações</th>
              </tr>
            </thead>

            <tbody>
              {vistorias.map((item) => (
                <tr key={item.id} className="border-t">
                  <td className="p-3">
                    <p className="font-medium">{item.cliente}</p>
                    <p className="text-gray-500 text-xs">{item.veiculo}</p>
                  </td>

                  <td className="p-3">{item.placa}</td>
                  <td className="p-3">{item.data}</td>
                  <td className="p-3">{item.valor}</td>

                  <td className="p-3">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        item.status === "Aprovado"
                          ? "bg-green-100 text-green-600"
                          : "bg-yellow-100 text-yellow-600"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>

                  <td className="p-3 flex gap-2">
                    <button className="text-green-600 hover:scale-110">
                      <CheckCircle size={18} />
                    </button>
                    <button className="text-red-600 hover:scale-110">
                      <XCircle size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>

      {/* Modal Notificações */}
      {openNotif && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-96 p-6 shadow-lg">
            <h3 className="text-lg font-semibold mb-4">Notificações</h3>

            <p className="text-gray-500 text-sm mb-6">
              Nenhuma notificação no momento.
            </p>

            <button
              onClick={() => setOpenNotif(false)}
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
