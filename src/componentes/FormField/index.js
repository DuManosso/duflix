import React from 'react';

function FormField({ label, value, type, name, onChange, style }) {
    return (
        <div>
            <label>
              {label}:
              <input
                type={type}
                value={value}
                name={name} 
                onChange={onChange}
              />
            </label>
          </div>
    )
}

export default FormField;