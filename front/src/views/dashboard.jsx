import React from 'react';

const Dashboard = props => {
    return (
        <div className="dashteiner">
            <h1>Dashboard</h1>
            <h3>***RECORDAR QUE ESTO ES UN BETA POR LO QUE ESTA EN "VEREMOS" QUE COSAS PUEDE HACER CADA PERFIL</h3>
            <p>Este dashboard es fundamental por que viene absolutamente todo con renderizado condicional. Los condicionales son para los siguientes tipos de usuarios <strong>(ojo que unos pueden ver mas que otros, lo que puede ver el "cliente" es el base y el resto tiene mas atribuciones para poder ver)</strong>:</p>
            <ul>
                <li>Admin: Es el usuario que ve todos los el render de dashboard</li>
                <li>Finanzas: Es el usuario que esta a cargo de revisar la plata de las entradas. Por lo tanto, solo puede ver su cuadro de dashboard y el de cliente. Principalmente lo que puede ver en su cuadro especifico es:</li>
                <ul>
                    <li>Gestionar clientes pagados</li>
                    <li>Ver estado de clientes</li>
                </ul>
                <li>Comercial: Este usuario ademas de lo que puede ver cada cliente comun y corriente, tiene un cuadro en donde podra ver:</li>
                <ul>
                    <li>Concentración General</li>
                    <li>Generador de Ofertas</li>
                </ul>
                <li>Staff General: Además de ver lo que ve un cliente comun y corriente, tiene un cuadro donde podrá ver <strong>(Esto lo puede ver admin, finanzas, comercial, staff general y seguridad, este ultimo es el que se encarga de hacerlo funcionar)</strong>:</li>
                <ul>
                    <li>Acciones a realizar: Aqui llegan acciones concretas definidas por los usuarios mas grandes y con mayores atribuciones administrativas.</li>
                    <li>Noticias Generales: Este es un sector donde el usuario puede encontrar informacion de lo que esta pasando en general en el evento.</li>
                </ul>
                <li>Alimentación: Esto, ademas de su perfil como cliente comun, verá la información de modificacion de precios generada por el perfil comercial, de manera que este al tanto de sus modificaciones.</li>
                <li>Seguridad: Ademas del perfil general como usuario, puede ver su propio cuadro de mando que corresponde a:</li>
                <ul>
                    <li>Entradas: para poder escanear codigos QR y obtener informacion de cada persona adentro del lugar del evento.</li>
                    <li>Avisos de Emergencia: Generar información sobre emergencias (niño perdido, robo, accidente, etc). Estos tienen resultados de "ACTIVO", "FINALIZADO" y "OCULTO" (<strong>NO SE BORRAN</strong>, solo se ocultan para que no se sigan mostrando pero quede el registro de ellos)</li>
                </ul>
                <li>Protagonista: Aparece la información general que debe saber el protagonista, donde ir y que hacer durante el evento (escenario x, ir a la cancha, ir a zona de periodistas, hacer no se que cosa)</li>
                <li>Cliente Comun: lo que puede hacer cualquier usuario del sistema, cambair clave, actualizar datos, informacion general (ejemplo mapa del evento, avisos generales), avisos de ofertas, y todos los gets que sean necesarios para una mejor experiencia de usuario como "esta comenzando tal artista", "el partido comenzo", etc. <br /><br />Se podria hacer una zona de gamificacion. Por ejemplo, si estamos en Lollapalooza si vas al stand no se cuanto y subes una foto obtienes 10 puntos, si muestras que estas botando tu basura en un punto verde donde corresponde obten 20 puntos, si hay un artista con poco publico "quedate 15min con este artista y obten 50puntos", y cada ciertos puntos obtienes beneficios como "1 vaso de cocacola por 200puntos"<br /><br />Recordar de que cada entrada tiene un codigo qr y un codigo de sku de entrada por lo que se pueden filtrar los envios de informacion dependiendo de quienes estan en que parte. La gran gracia del sistema es el funcionamiento del posicionamiento global y de esta forma ntregar informacion a quien la necesite</li>
            </ul>
        </div>
    );
}

export default Dashboard