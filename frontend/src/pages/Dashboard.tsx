import { BarChart3, TrendingUp, Clock, AlertTriangle, PieChart } from "lucide-react";

export default function Dashboard() {
  const vendedores = [
    {
      id: 1,
      nome: "Carlos Vendedor",
      total: 2,
      aprovadas: 1,
      reprovadas: 0,
      eficacia: 50,
    },
  ];

  const marcas = [
    { nome: "Honda", total: 1 },
    { nome: "Toyota", total: 1 },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r p-6 flex flex-col justify-between">
        <div>
          <h1 className="text-xl font-bold text-blue-600 mb-8">EPTA</h1>

          <nav className="space-y-3">
            <button className="w-full text-left px-4 py-2 rounded hover:bg-gray-100">
              Vistorias
            </button>
            <button className="w-full text-left px-4 py-2 rounded bg-blue-50 text-blue-600">
              Dashboard
            </button>
            <button className="w-full text-left px-4 py-2 rounded hover:bg-gray-100">
              Motivos Reprovação
            </button>
          </nav>
        </div>

        <div className="border-t pt-4">
          <p className="font-medium">Ana Vistoriadora</p>
          <p className="text-sm text-gray-500">Vistoriador</p>

          <button className="text-red-500 mt-3 text-sm">Sair</button>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 p-8">
        {/* Header */}
        <h2 className="text-2xl font-semibold mb-6">
          Dashboard de Performance
        </h2>

        {/* Visão Geral */}
        <section className="mb-8">
          <h3 className="text-sm font-semibold text-gray-500 mb-4">
            VISÃO GERAL
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {/* Card Principal */}
            <div className="md:col-span-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white p-5 rounded-xl shadow">
              <p className="text-sm opacity-90">Valor Total Vistoriado</p>
              <h3 className="text-3xl font-bold my-2">R$ 195.000</h3>

              <div className="flex justify-between text-sm mt-4">
                <span>Ticket Médio</span>
                <span className="font-semibold">R$ 97.500</span>
              </div>
            </div>

            {/* Cards Menores */}
            <InfoCard title="Total" value="2" icon={<BarChart3 />} />
            <InfoCard title="Aprovadas" value="50%" subtitle="Taxa de conversão" icon={<TrendingUp />} />
            <InfoCard title="Pendentes" value="1" icon={<Clock />} />
            <InfoCard title="Reprovadas" value="0" icon={<AlertTriangle />} />
          </div>
        </section>

        {/* Performance */}
        <section className="mb-8">
          <h3 className="text-sm font-semibold text-gray-500 mb-4">
            PERFORMANCE DA EQUIPE
          </h3>

          <div className="bg-white rounded-xl shadow overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-3 text-left">Vendedor</th>
                  <th className="p-3">Volume Total</th>
                  <th className="p-3 text-green-600">Aprovadas</th>
                  <th className="p-3 text-red-600">Reprovadas</th>
                  <th className="p-3">Eficácia</th>
                </tr>
              </thead>

              <tbody>
                {vendedores.map((v) => (
                  <tr key={v.id} className="border-t">
                    <td className="p-3 flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">
                        {v.nome.charAt(0)}
                      </div>
                      {v.nome}
                    </td>

                    <td className="p-3 text-center">{v.total}</td>

                    <td className="p-3 text-center">
                      <span className="bg-green-100 text-green-600 px-2 py-1 rounded text-xs">
                        {v.aprovadas}
                      </span>
                    </td>

                    <td className="p-3 text-center">
                      <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-xs">
                        {v.reprovadas}
                      </span>
                    </td>

                    <td className="p-3">
                      <div className="flex items-center gap-2">
                        <div className="w-full h-2 bg-gray-200 rounded">
                          <div
                            className="h-2 bg-yellow-400 rounded"
                            style={{ width: `${v.eficacia}%` }}
                          />
                        </div>
                        <span className="text-xs font-medium">
                          {v.eficacia}%
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Insights */}
        <section>
          <h3 className="text-sm font-semibold text-gray-500 mb-4">
            INSIGHTS DE VEÍCULOS
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Top Marcas */}
            <div className="bg-white rounded-xl shadow p-5">
              <div className="flex items-center gap-2 mb-4">
                <PieChart className="text-blue-600" size={20} />
                <h4 className="font-semibold">Top Marcas</h4>
              </div>

              <div className="space-y-3">
                {marcas.map((m) => (
                  <div key={m.nome}>
                    <div className="flex justify-between text-sm mb-1">
                      <span>{m.nome}</span>
                      <span>{m.total}</span>
                    </div>

                    <div className="h-2 bg-gray-200 rounded">
                      <div
                        className="h-2 bg-blue-500 rounded"
                        style={{ width: `${m.total * 50}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Motivos Reprovação */}
            <div className="bg-white rounded-xl shadow p-5 flex flex-col items-center justify-center text-center">
              <AlertTriangle className="text-green-400 mb-3" size={36} />

              <h4 className="font-semibold mb-1">Motivos de Reprovação</h4>

              <p className="text-gray-500 text-sm">Tudo certo por aqui!</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

/* Card Component */
function InfoCard({ title, value, subtitle, icon }: { title: string; value: string; subtitle?: string; icon: React.ReactNode }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow flex flex-col justify-between">
      <div className="flex justify-between items-center mb-2">
        <p className="text-xs text-gray-500 uppercase font-medium">{title}</p>
        <div className="text-blue-600">{icon}</div>
      </div>

      <div>
        <h3 className="text-2xl font-bold">{value}</h3>
        {subtitle && (
          <p className="text-xs text-gray-400 mt-1">{subtitle}</p>
        )}
      </div>
    </div>
  );
}
