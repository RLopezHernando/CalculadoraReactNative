import { useRef, useState } from "react";

enum Operadores {
    sumar, restar, multiplicar, dividir
}

export const useCalculadora = () => {


    //Si estamos pensando en cambiar algo por pantalla esto se debe de hacer con el State (useState)
    const [numeroAnterior, setNumeroAnterior] = useState('0');
    const [numero, setNumero] = useState('0');

    const ultimaOperacion = useRef<Operadores>();

    //Funcion Poner El Numero a 0
    const limpiar = () => {
        setNumero('0');
        setNumeroAnterior('0');
    };

    //Funcion ir enganchando los numeros
    const armarNumero = (numeroTexto: string) => {

        // No aceptar doble punto
        if (numero.includes('.') && numeroTexto === '.') return;

        if (numero.startsWith('0') || numero.startsWith('-0')) {

            // Punto decimal
            if (numeroTexto === '.') {
                setNumero(numero + numeroTexto);

                // Evaluar si es otro cero, y hay un punto
            } else if (numeroTexto === '0' && numero.includes('.')) {
                setNumero(numero + numeroTexto);

                // Evaluar si es diferente de cero y no tiene un punto
            } else if (numeroTexto !== '0' && !numero.includes('.')) {
                setNumero(numeroTexto);

                // Evitar 0000.0
            } else if (numeroTexto === '0' && !numero.includes('.')) {
                setNumero(numero);
            } else {
                setNumero(numero + numeroTexto);
            }

        } else {
            setNumero(numero + numeroTexto);
        }
    }

    //Funcion para poner numero positivo o negativo
    const positivoNegativo = () => {
        //Pasamos a Positivo : Reemplazamos el simbolo negativo por un string vacio
        if (numero.includes('-')) {
            setNumero(numero.replace('-', ''));
            //Pasar a Negativo : le pongo al numero el simbolo negativo
        } else {
            setNumero('-' + numero);
        }

    }

    const btnDelete = () => {
        let negativo = '';
        let numeroTemp = numero;

        if (numero.includes('-')) {
            negativo = '-';
            numeroTemp = numero.substring(1);
        }
        if (numeroTemp.length > 1) {
            setNumero(numeroTemp.slice(0, -1));
        } else {
            setNumero('0');
        }


    }

    const cambiarNumPorAnterior = () => {
        if (numero.endsWith('.')) {
            setNumeroAnterior(numero.slice(0, -1))
        } else {
            setNumeroAnterior(numero);
        }
        setNumero('0');
    }

    const botonDividir = () => {
        cambiarNumPorAnterior();
        // 'UltimaOperacion' es el enum que contiene las operaciones aritmeticas 'sumar, restar, multiplicar y dividir'
        ultimaOperacion.current = Operadores.dividir;
    };

    const botonMultiplicar = () => {
        cambiarNumPorAnterior();
        // 'UltimaOperacion' es el enum que contiene las operaciones aritmeticas 'sumar, restar, multiplicar y dividir'
        ultimaOperacion.current = Operadores.multiplicar;
    };

    const botonRestar = () => {
        cambiarNumPorAnterior();
        // 'UltimaOperacion' es el enum que contiene las operaciones aritmeticas 'sumar, restar, multiplicar y dividir'
        ultimaOperacion.current = Operadores.restar;
    };

    const botonSumar = () => {
        cambiarNumPorAnterior();
        // 'UltimaOperacion' es el enum que contiene las operaciones aritmeticas 'sumar, restar, multiplicar y dividir'
        ultimaOperacion.current = Operadores.sumar;
    };

    const calcular = () => {
        const num1 = Number(numero);
        const num2 = Number(numeroAnterior);

        switch (ultimaOperacion.current) {

            case Operadores.sumar:
                setNumero(`${num1 + num2}`);
                break;

            case Operadores.restar:
                setNumero(`${num2 - num1}`);
                break;

            case Operadores.multiplicar:
                setNumero(`${num1 * num2}`);
                break;

            case Operadores.dividir:
                setNumero(`${num2 / num1}`);
                break;

        }

        setNumeroAnterior('0');
    }

    return{
        numeroAnterior,
        numero,
        limpiar,
        positivoNegativo,
        btnDelete,
        botonDividir,
        botonMultiplicar,
        botonRestar,
        botonSumar,
        armarNumero,
        calcular
    }
};


