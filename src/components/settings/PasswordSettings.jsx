import React, { useState } from 'react';
import useChangePassword from './useChangePassword';

const ChangePasswordForm = () => {
    const [formData, setFormData] = useState({
        currentPassword: '',
        newPassword: '',
    });

    const { loading, error, success } = useChangePassword(formData);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div>
            <h2>Cambiar Contraseña</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="currentPassword">Contraseña Actual:</label>
                <input
                    type="password"
                    id="currentPassword"
                    name="currentPassword"
                    value={formData.currentPassword}
                    onChange={handleChange}
                />

                <label htmlFor="newPassword">Nueva Contraseña:</label>
                <input
                    type="password"
                    id="newPassword"
                    name="newPassword"
                    value={formData.newPassword}
                    onChange={handleChange}
                />

                <button type="submit" disabled={loading}>
                    {loading ? 'Cargando...' : 'Cambiar Contraseña'}
                </button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {success && <p style={{ color: 'green' }}>¡Contraseña cambiada exitosamente!</p>}
        </div>
    );
};

export default ChangePasswordForm;
