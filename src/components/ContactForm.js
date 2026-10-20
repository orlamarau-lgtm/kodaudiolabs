import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    deviceType: '',
    defect: '',
    name: '',
    email: '',
    phone: '',
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar os dados do formulário
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="deviceType">Tipo de Aparelho:</label>
        <input
          type="text"
          id="deviceType"
          name="deviceType"
          value={formData.deviceType}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="defect">Defeito:</label>
        <textarea
          id="defect"
          name="defect"
          value={formData.defect}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="name">Nome:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="phone">Telefone:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>
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
      <button type="submit">Solicitar Orçamento</button>
    </form>
  );
};

export default ContactForm;