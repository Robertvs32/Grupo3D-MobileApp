import { useEffect, useState } from 'react';
import { View } from 'react-native';
import DataFim from './DataFim';
import DataInicio from './DataInicio';
import HoraFim from './HoraFim';
import HoraInicio from './HoraInicio';

export default function DateTime({setDateTimeIni, setDateTimeFim, dateTimeIni, dateTimeFim}){

    const [dateIni, setDateIni] = useState(new Date());
    const [dateFim, setDateFim] = useState(new Date());
    const [timeIni, setTimeIni] = useState(new Date());
    const [timeFim, setTimeFim] = useState(new Date());

    useEffect(() => {

        const horas = timeIni.getHours();
        const minutos = timeIni.getMinutes();
        const dia = dateIni.getDate();
        const mes = dateIni.getMonth();
        const ano = dateIni.getFullYear();

        const novaData = new Date();

        novaData.setHours(horas, minutos);
        novaData.setFullYear(ano, mes, dia);

        setDateTimeIni(novaData);

    },[dateIni, timeFim]);

    useEffect(() => {

        const horas = timeFim.getHours();
        const minutos = timeFim.getMinutes();
        const dia = dateFim.getDate();
        const mes = dateFim.getMonth();
        const ano = dateFim.getFullYear();

        const novaData = new Date();

        novaData.setHours(horas, minutos);
        novaData.setFullYear(ano, mes, dia);

        setDateTimeFim(novaData);

    },[dateFim, timeFim]);

    return(
        <View>
            <DataInicio
                dateIni={dateIni}
                setDateIni={setDateIni}
                dateFim={dateFim}
            />

            <DataFim
                dateFim={dateFim}
                setDateFim={setDateFim}
                dateIni={dateIni}
            />

            <HoraInicio
                timeIni={timeIni}
                setTimeIni={setTimeIni}
                dateIni={dateIni}
                dateFim={dateFim}
                timeFim={timeFim}
            />

            <HoraFim
                timeFim={timeFim}
                setTimeFim={setTimeFim}
                dateIni={dateIni}
                dateFim={dateFim}
                timeIni={timeIni}
            />
        </View>
    );
}
