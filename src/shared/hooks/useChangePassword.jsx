import React, { useState, useEffect } from 'react';
import { changePassword } from '../api';

const useChangePassword = (passwordData) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        const handleChangePassword = async () => {
            setLoading(true);
            setError(null);
            setSuccess(false);

            const result = await changePassword(passwordData);

            if (result.error) {
                setError(result.message || 'Hubo un error al cambiar la contraseña.');
            } else {
                setSuccess(true);
            }

            setLoading(false);
        };

        if (passwordData) {
            handleChangePassword();
        }
    }, [passwordData]);

    return { loading, error, success };
};

export default useChangePassword;