# Weather-app

Create un repository nou pe github pentru a include tema in portofoliul vostru.
Hint: folositi pentru mesajele comiturilor urmatoarele conventii:

https://www.conventionalcommits.org/en/v1.0.0/

Creati o pagina html, in care sa includeti elemente de javascript si css(fisiere separate), care sa implementeze funcionalitatile necesare unei aplicatii de tipul prognoza meteo, folosind tehnica AJAX:
1.Vremea acum:

Creati un div pentru functionalitatea "vremea acum", ce afiseaza urmatoarele informatii:Descriere, Umiditate, Presiune, Temperatura curenta, Minima zilei, Maxima zilei, Prognoza meteo

Afisati si o imagine ce reprezinta o ilustratie grafica a descrierii din campul de mai sus

Optional, inserati harta orasului din Google Maps,(cautati cum se foloseste api-ul de google maps)

2.Prognoza meteo:

Creati un div pentru functionalitatea "afisaza prognoza", ce afiseaza urmatorele informatii: ora, temperatura si descrierea vremii.

Afisati prognoza meteo pentru urmatoarele 6 zile, pentru fiecare zi, prognoza va fi afisata din 3 in 3 ore

Pentru fiecare prognoza afisata, afisati si o imagine ce reprezinta interpretarea prognozei pentru fiecare interval orar

Pentru a prelua datele necesare pentru fiecare oras in parte, puteti folosi url-urile de mai jos:

var URL_CURRENT_WEATHER = "https://api.openweathermap.org/data/2.5/weather?appid=69518b1f8f16c35f8705550dc4161056&units=metric&q=";

var URL_FORECAST_WEATHER = "https://api.openweathermap.org/data/2.5/forecast?appid=69518b1f8f16c35f8705550dc4161056&units=metric&q=";

var URL_WEATHER_ICON_PREFIX = "http://openweathermap.org/img/w/"; // sufix .png

pentru a putea folosi cu succes url-urile pentru api-ul de weather, adaugati la sfarsitul fiecarui url, numele orasului pentru care doriti sa interogati serverul
