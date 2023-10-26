import React from 'react';

class RegistroControlLiquidos extends React.Component {
    render() {
        return (
            <div>
                <h1>Registro de Control de Líquidos</h1>
                <form>
                    <label htmlFor="ingesta">Ingesta de Líquidos (ml):</label>
                    <input type="number" id="ingesta" name="ingesta" />

                    <label htmlFor="salida">Salida de Líquidos (ml):</label>
                    <input type="number" id="salida" name="salida" />

                    <label htmlFor="peso">Peso Corporal (kg):</label>
                    <input type="number" id="peso" name="peso" />

                    <label htmlFor="sintomas">Síntomas:</label>
                    <textarea id="sintomas" name="sintomas"></textarea>

                    <button type="submit">Guardar Registro</button>
                </form>
            </div>
        );
    }
}

export default RegistroControlLiquidos;
