import React from 'react';
import { Text, View } from 'react-native';
import { useCalculadora } from '../../hooks/useCalculadora';
import { styles } from '../../theme/appTheme';
import { BotonCalculadora } from '../BotonCalculadora';


export const CalculadoraScreen = () => {

    const {
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
    } = useCalculadora();



    return (
        <View style={styles.calculadoraContainer}>
            {
                (numeroAnterior !== '0') && (
                    <Text style={styles.resultadoPequeno}>{numeroAnterior}</Text>
                )
            }

            <Text style={styles.resultado}
                numberOfLines={1}
                adjustsFontSizeToFit>{numero}</Text>

            {/* Fila de Botones */}
            <View style={styles.fila}>
                <BotonCalculadora texto="C" color="#9B9B9B" action={limpiar} />
                <BotonCalculadora texto="+/-" color="#9B9B9B" action={positivoNegativo} />
                <BotonCalculadora texto="del" color="#9B9B9B" action={btnDelete} />
                <BotonCalculadora texto="/" color="#FF9427" action={botonDividir} />
            </View>
            {/* Fila de Botones */}
            <View style={styles.fila}>
                <BotonCalculadora texto="7" action={armarNumero} />
                <BotonCalculadora texto="8" action={armarNumero} />
                <BotonCalculadora texto="9" action={armarNumero} />
                <BotonCalculadora texto="X" color="#FF9427" action={botonMultiplicar} />

            </View>
            {/* Fila de Botones */}
            <View style={styles.fila}>
                <BotonCalculadora texto="4" action={armarNumero} />
                <BotonCalculadora texto="5" action={armarNumero} />
                <BotonCalculadora texto="6" action={armarNumero} />
                <BotonCalculadora texto="-" color="#FF9427" action={botonRestar} />

            </View>
            {/* Fila de Botones */}
            <View style={styles.fila}>
                <BotonCalculadora texto="1" action={armarNumero} />
                <BotonCalculadora texto="2" action={armarNumero} />
                <BotonCalculadora texto="3" action={armarNumero} />
                <BotonCalculadora texto="+" color="#FF9427" action={botonSumar} />

            </View>
            {/* Fila de Botones */}
            <View style={styles.fila}>
                <BotonCalculadora texto="0" ancho action={armarNumero} />
                <BotonCalculadora texto="." action={armarNumero} />
                <BotonCalculadora texto="=" color="#FF9427" action={calcular} />

            </View>
        </View>
    );
};
