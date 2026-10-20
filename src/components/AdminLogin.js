import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { KeyRound } from 'lucide-react';

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { KeyRound } from 'lucide-react';

const AdminLogin = () => {
  const history = useHistory();
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [showPasswordModal, setShowPasswordModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if ((formData.username === 'admin' && formData.password === 'admin123') || (formData.username === 'novo_usuario' && formData.password === 'nova_senha')) {
      setShowPasswordModal(true);
    } else {
      const response = await fetch('/api/admin/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      if (data.success) {
        console.log('Login bem-sucedido');
      } else {
        console.log('Usuário ou senha incorretos');
      }
    }
  };

  const handlePasswordChange = async (newPassword) => {
    const response = await fetch('/api/admin/change-password', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: formData.username,
        newPassword
      })
    });
    const data = await response.json();
    if (data.success) {
      setShowPasswordModal(false);
      console.log('Senha alterada com sucesso');
    } else {
      console.log('Erro ao alterar senha');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-900">
      <Card className="w-full max-w-md bg-slate-800 text-slate-100">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <KeyRound className="h-12 w-12 text-slate-400" />
          </div>
          <CardTitle className="text-2xl font-bold">TechFix Manager</CardTitle>
          <CardDescription className="text-slate-400">Acesse sua conta</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <label htmlFor="username" className="text-sm font-medium">E-mail</label>
                <Input
                  type="email"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                  className="bg-slate-700 text-slate-100 border-slate-600 focus:ring-slate-500"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <label htmlFor="password" className="text-sm font-medium">Senha</label>
                <Input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="bg-slate-700 text-slate-100 border-slate-600 focus:ring-slate-500"
                />
              </div>
              <div className="flex justify-center mt-4">
                <Button
                  type="button"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-200 flex items-center justify-center"
                >
                  <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google" className="h-5 w-5 mr-2" />
                  Entrar com o Google
                </Button>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button
            type="submit"
            className="w-full bg-slate-700 hover:bg-slate-600 text-slate-100 transition-colors duration-200"
            onClick={handleSubmit}
          >
            Entrar
          </Button>
        </CardFooter>
      </Card>
      {showPasswordModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <Card className="w-full max-w-md bg-slate-800 text-slate-100">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold">Primeiro Acesso Detectado</CardTitle>
              <CardDescription className="text-slate-400">Defina sua Nova Senha Segura</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={(e) => {
                e.preventDefault();
                handlePasswordChange(e.target.newPassword.value);
              }}>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <label htmlFor="newPassword" className="text-sm font-medium">Nova Senha</label>
                    <Input
                      type="password"
                      id="newPassword"
                      name="newPassword"
                      required
                      className="bg-slate-700 text-slate-100 border-slate-600 focus:ring-slate-500"
                    />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <label htmlFor="confirmPassword" className="text-sm font-medium">Confirmar Senha</label>
                    <Input
                      type="password"
                      id="confirmPassword"
                      name="confirmPassword"
                      required
                      className="bg-slate-700 text-slate-100 border-slate-600 focus:ring-slate-500"
                    />
                  </div>
                </div>
                <CardFooter className="flex justify-center mt-4">
                  <Button
                    type="submit"
                    className="w-full bg-slate-700 hover:bg-slate-600 text-slate-100 transition-colors duration-200"
                  >
                    Definir Senha
                  </Button>
                </CardFooter>
              </form>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if ((formData.username === 'admin' && formData.password === 'admin123') || (formData.username === 'novo_usuario' && formData.password === 'nova_senha')) {
      // Verificar no banco de dados
      const response = await fetch('/api/admin/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      if (data.success) {
        console.log('Login bem-sucedido');
      } else {
        console.log('Usuário ou senha incorretos');
      }
    }
  };
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if ((formData.username === 'admin' && formData.password === 'admin123') || (formData.username === 'novo_usuario' && formData.password === 'nova_senha')) {
      // Verificar no banco de dados
      const response = await fetch('/api/admin/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      if (data.success) {
        console.log('Login bem-sucedido');
      } else {
        console.log('Usuário ou senha incorretos');
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-900">
      <Card className="w-full max-w-md bg-slate-800 text-slate-100">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <KeyRound className="h-12 w-12 text-slate-400" />
          </div>
          <CardTitle className="text-2xl font-bold">TechFix Manager</CardTitle>
          <CardDescription className="text-slate-400">Acesse sua conta</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <label htmlFor="username" className="text-sm font-medium">Usuário</label>
                <Input
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                  className="bg-slate-700 text-slate-100 border-slate-600 focus:ring-slate-500"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <label htmlFor="password" className="text-sm font-medium">Senha</label>
                <Input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="bg-slate-700 text-slate-100 border-slate-600 focus:ring-slate-500"
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button
            type="submit"
            className="w-full bg-slate-700 hover:bg-slate-600 text-slate-100 transition-colors duration-200"
            onClick={handleSubmit}
          >
            Entrar
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if ((formData.username === 'admin' && formData.password === 'admin123') || (formData.username === 'novo_usuario' && formData.password === 'nova_senha')) {
      // Verificar no banco de dados
      const response = await fetch('/api/admin/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      if (data.success) {
      console.log('Login bem-sucedido');
    } else {
      console.log('Usuário ou senha incorretos');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Usuário:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Senha:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default AdminLogin;