import { Mail, Lock, User } from "lucide-react";
import { api } from "../api/api";
import type { FormEvent } from "react";

export function Login() {
  async function handleLogin(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const email = (e.target as HTMLFormElement).email.value;
    const password = (e.target as HTMLFormElement).password.value;

    try {
      const res = await api.post("/auth/login", {
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);
      window.location.href = "/";
    } catch {
      alert("Email ou senha inválidos");
    }
  }

  function loginTeste(email: string, password: string) {
    api
      .post("/auth/login", { email, password })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        window.location.href = "/";
      })
      .catch(() => alert("Erro ao logar"));
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      {/* Card */}
      <div className="bg-white w-full max-w-md p-8 rounded-xl shadow-lg">
        {/* Logo fake */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-blue-600">EPTA</h1>

          <p className="text-gray-500 text-sm">Tecnologia</p>
        </div>

        {/* Título */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold">Bem-vindo</h2>

          <p className="text-gray-500 text-sm mt-1">
            Insira suas credenciais para acessar o sistema.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          {/* Email */}
          <div>
            <label className="text-sm text-gray-600">E-mail</label>

            <div className="flex items-center border rounded-lg px-3 mt-1">
              <Mail size={18} className="text-gray-400" />

              <input
                name="email"
                type="email"
                placeholder="seu@email.com"
                className="w-full p-2 outline-none"
                required
              />
            </div>
          </div>

          {/* Senha */}
          <div>
            <label className="text-sm text-gray-600">Senha</label>

            <div className="flex items-center border rounded-lg px-3 mt-1">
              <Lock size={18} className="text-gray-400" />

              <input
                name="password"
                type="password"
                placeholder="********"
                className="w-full p-2 outline-none"
                required
              />
            </div>
          </div>

          {/* Botão */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition"
          >
            Entrar →
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-1 h-px bg-gray-300" />

          <span className="px-3 text-xs text-gray-400">OU TESTE COM</span>

          <div className="flex-1 h-px bg-gray-300" />
        </div>

        {/* Botões teste */}
        <div className="space-y-3">
          {/* Vendedor */}
          <button
            onClick={() => loginTeste("vendedor@teste.com", "123456")}
            className="w-full border rounded-lg p-3 flex items-center gap-3 hover:bg-gray-50 transition"
          >
            <User className="text-gray-500" />

            <div className="text-left">
              <p className="font-medium">Vendedor</p>

              <p className="text-xs text-gray-500">vendedor@teste.com</p>
            </div>
          </button>

          {/* Vistoriador */}
          <button
            onClick={() => loginTeste("admin@teste.com", "123456")}
            className="w-full border rounded-lg p-3 flex items-center gap-3 hover:bg-gray-50 transition"
          >
            <User className="text-gray-500" />

            <div className="text-left">
              <p className="font-medium">Vistoriador</p>

              <p className="text-xs text-gray-500">admin@teste.com</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
