const Timeline = () => {
	const template = `
    <div id="timeline" class="container timeline">
    <h4 class="my-3">Altunagården - tidslinje</h4>
    <div class="row">
        <div class="col-md-12">
            <div class="main-timeline">
                <div class="timeline">
                    <div class="timeline-content">
                        <span class="timeline-year">2020</span>
                        <h3 class="title"></h3>
                        <p class="description">Dalkarlsvandrarna (inställt p.g.a. covid-19). Nytt avlopp grävs 2019-2020. Nytt värmesystem installeras. Luft/vattenvärmepump.</p>
                    </div>
                </div>
                <div class="timeline">
                    <div class="timeline-content">
                        <span class="timeline-year">2019</span>
                        <h3 class="title"></h3>
                        <p class="description">Altunagården 70 år!</p>
                    </div>
                </div>
                <div class="timeline">
                    <div class="timeline-content">
                        <span class="timeline-year">2018</span>
                        <h3 class="title"></h3>
                        <p class="description">Dalkarlsvandrarna. Studiecirkel "Altunagårdens historia" bildas. Distriktsstämma.</p>
                    </div>
                </div>
                <div class="timeline">
                    <div class="timeline-content">
                        <span class="timeline-year">2017</span>
                        <h3 class="title"></h3>
                        <p class="description">Lägenheten renoveras. Vattenbrunn åtgärdas.</p>
                    </div>
                </div>
                <div class="timeline">
                    <div class="timeline-content">
                        <span class="timeline-year">2016</span>
                        <h3 class="title"></h3>
                        <p class="description">Dalkarlsvandrarna</p>
                    </div>
                </div>
                <div class="timeline">
                    <div class="timeline-content">
                        <span class="timeline-year">2015</span>
                        <h3 class="title"></h3>
                        <p class="description"></p>
                    </div>
                </div>
                <div class="timeline">
                    <div class="timeline-content">
                        <span class="timeline-year">2014</span>
                        <h3 class="title"></h3>
                        <p class="description">Dalkarlsvandrarna. Distriktsstämma. Nytt golv i september.</p>
                    </div>
                </div>
                <div class="timeline">
                    <div class="timeline-content">
                        <span class="timeline-year">2013</span>
                        <h3 class="title"></h3>
                        <p class="description"></p>
                    </div>
                </div>
                <div class="timeline">
                    <div class="timeline-content">
                        <span class="timeline-year">2012</span>
                        <h3 class="title"></h3>
                        <p class="description">Dalkarlsvandrarna</p>
                    </div>
                </div>
                <div class="timeline">
                    <div class="timeline-content">
                        <span class="timeline-year">2011</span>
                        <h3 class="title"></h3>
                        <p class="description"></p>
                    </div>
                </div>
                <div class="timeline">
                    <div class="timeline-content">
                        <span class="timeline-year">2010</span>
                        <h3 class="title"></h3>
                        <p class="description">Dalkarlsvandrarna</p>
                    </div>
                </div>
                <div class="timeline">
                    <div class="timeline-content">
                        <span class="timeline-year">2009</span>
                        <h3 class="title"></h3>
                        <p class="description"></p>
                    </div>
                </div>
                <div class="timeline">
                    <div class="timeline-content">
                        <span class="timeline-year">2008</span>
                        <h3 class="title"></h3>
                        <p class="description">Dalkarlsvandrarna</p>
                    </div>
                </div>
                <div class="timeline">
                    <div class="timeline-content">
                        <span class="timeline-year">2007</span>
                        <h3 class="title"></h3>
                        <p class="description"></p>
                    </div>
                </div>
                <div class="timeline">
                    <div class="timeline-content">
                        <span class="timeline-year">2006</span>
                        <h3 class="title"></h3>
                        <p class="description"></p>
                    </div>
                </div>
                <div class="timeline">
                    <div class="timeline-content">
                        <span class="timeline-year">2005</span>
                        <h3 class="title"></h3>
                        <p class="description"></p>
                    </div>
                </div>
                <div class="timeline">
                    <div class="timeline-content">
                        <span class="timeline-year">2004</span>
                        <h3 class="title"></h3>
                        <p class="description"></p>
                    </div>
                </div>
                <div class="timeline">
                    <div class="timeline-content">
                        <span class="timeline-year">2003</span>
                        <h3 class="title"></h3>
                        <p class="description">Dalkarlsvandrarna övernattar i Altunagården.</p>
                    </div>
                </div>
                <div class="timeline">
                    <div class="timeline-content">
                        <span class="timeline-year">2002</span>
                        <h3 class="title"></h3>
                        <p class="description"></p>
                    </div>
                </div>
                <div class="timeline">
                    <div class="timeline-content">
                        <span class="timeline-year">2001</span>
                        <h3 class="title"></h3>
                        <p class="description"></p>
                    </div>
                </div>
                <div class="timeline">
                    <div class="timeline-content">
                        <span class="timeline-year">2000</span>
                        <h3 class="title"></h3>
                        <p class="description"></p>
                    </div>
                </div>
                <div class="timeline">
                    <div class="timeline-content">
                        <span class="timeline-year">1999</span>
                        <h3 class="title"></h3>
                        <p class="description"></p>
                    </div>
                </div>
                <div class="timeline">
                    <div class="timeline-content">
                        <span class="timeline-year">1998</span>
                        <h3 class="title"></h3>
                        <p class="description"></p>
                    </div>
                </div>
                <div class="timeline">
                    <div class="timeline-content">
                        <span class="timeline-year">1997</span>
                        <h3 class="title"></h3>
                        <p class="description"></p>
                    </div>
                </div>
                <div class="timeline">
                    <div class="timeline-content">
                        <span class="timeline-year">1996</span>
                        <h3 class="title"></h3>
                        <p class="description"></p>
                    </div>
                </div>
                <div class="timeline">
                    <div class="timeline-content">
                        <span class="timeline-year">1995</span>
                        <h3 class="title"></h3>
                        <p class="description">Städlag. Altunafesten läggs ner.</p>
                    </div>
                </div>
                <div class="timeline">
                    <div class="timeline-content">
                        <span class="timeline-year">1994</span>
                        <h3 class="title"></h3>
                        <p class="description">Sista vaktmästaren flyttar.</p>
                    </div>
                </div>
                <div class="timeline">
                    <div class="timeline-content">
                        <span class="timeline-year">1993</span>
                        <h3 class="title"></h3>
                        <p class="description"></p>
                    </div>
                </div>
                <div class="timeline">
                    <div class="timeline-content">
                        <span class="timeline-year">1992</span>
                        <h3 class="title"></h3>
                        <p class="description"></p>
                    </div>
                </div>
                <div class="timeline">
                    <div class="timeline-content">
                        <span class="timeline-year">1991</span>
                        <h3 class="title"></h3>
                        <p class="description">Vävstugan öppnas.</p>
                    </div>
                </div>
                <div class="timeline">
                    <div class="timeline-content">
                        <span class="timeline-year">1990</span>
                        <h3 class="title"></h3>
                        <p class="description"></p>
                    </div>
                </div>
                <div class="timeline">
                    <div class="timeline-content">
                        <span class="timeline-year">1989</span>
                        <h3 class="title"></h3>
                        <p class="description"></p>
                    </div>
                </div>
                <div class="timeline">
                    <div class="timeline-content">
                        <span class="timeline-year">1988</span>
                        <h3 class="title"></h3>
                        <p class="description"></p>
                    </div>
                </div>
                <div class="timeline">
                    <div class="timeline-content">
                        <span class="timeline-year">1987</span>
                        <h3 class="title"></h3>
                        <p class="description">Medarrangör till Altunafesten i Flosta Hage.</p>
                    </div>
                </div>
                <div class="timeline">
                    <div class="timeline-content">
                        <span class="timeline-year">1986</span>
                        <h3 class="title"></h3>
                        <p class="description"></p>
                    </div>
                </div>
                <div class="timeline">
                    <div class="timeline-content">
                        <span class="timeline-year">1985</span>
                        <h3 class="title"></h3>
                        <p class="description"></p>
                    </div>
                </div>
                <div class="timeline">
                    <div class="timeline-content">
                        <span class="timeline-year">1984</span>
                        <h3 class="title"></h3>
                        <p class="description"></p>
                    </div>
                </div>
                <div class="timeline">
                    <div class="timeline-content">
                        <span class="timeline-year">1983</span>
                        <h3 class="title"></h3>
                        <p class="description"></p>
                    </div>
                </div>
                <div class="timeline">
                    <div class="timeline-content">
                        <span class="timeline-year">1982</span>
                        <h3 class="title"></h3>
                        <p class="description"></p>
                    </div>
                </div>
                <div class="timeline">
                    <div class="timeline-content">
                        <span class="timeline-year">1981</span>
                        <h3 class="title"></h3>
                        <p class="description">Kyrkans miniorer.</p>
                    </div>
                </div>
                <div class="timeline">
                    <div class="timeline-content">
                        <span class="timeline-year">1980</span>
                        <h3 class="title"></h3>
                        <p class="description">Altuna IF utnyttjar lokalerna för gymnastik, bordtennis och luftgevärsskytte.</p>
                    </div>
                </div>
                <div class="timeline">
                    <div class="timeline-content">
                        <span class="timeline-year">1979</span>
                        <h3 class="title"></h3>
                        <p class="description"></p>
                    </div>
                </div>
                <div class="timeline">
                    <div class="timeline-content">
                        <span class="timeline-year">1978</span>
                        <h3 class="title"></h3>
                        <p class="description">Återinvigning 23 mars efter renoveringen. Luciafest anordnas.</p>
                    </div>
                </div>
                <div class="timeline">
                    <div class="timeline-content">
                        <span class="timeline-year">1977</span>
                        <h3 class="title"></h3>
                        <p class="description">Renovering</p>
                    </div>
                </div>
                <div class="timeline">
                    <div class="timeline-content">
                        <span class="timeline-year">1976</span>
                        <h3 class="title"></h3>
                        <p class="description">Namnbyte från Altuna bygdegårdsförening. Andelsföreningen övergår i ideellförening.</p>
                    </div>
                </div>
                <div class="timeline">
                    <div class="timeline-content">
                        <span class="timeline-year">1975</span>
                        <h3 class="title"></h3>
                        <p class="description"></p>
                    </div>
                </div>
                <div class="timeline">
                    <div class="timeline-content">
                        <span class="timeline-year">1974</span>
                        <h3 class="title"></h3>
                        <p class="description"></p>
                    </div>
                </div>
                <div class="timeline">
                    <div class="timeline-content">
                        <span class="timeline-year">1973</span>
                        <h3 class="title"></h3>
                        <p class="description"></p>
                    </div>
                </div>
                <div class="timeline">
                    <div class="timeline-content">
                        <span class="timeline-year">1972</span>
                        <h3 class="title"></h3>
                        <p class="description"></p>
                    </div>
                </div>
                <div class="timeline">
                    <div class="timeline-content">
                        <span class="timeline-year">1971</span>
                        <h3 class="title"></h3>
                        <p class="description">Kommunhopslagning. Enköpingskommun. Området tillhör nu Uppsla län.</p>
                    </div>
                </div>
                <div class="timeline">
                    <div class="timeline-content">
                        <span class="timeline-year">1970</span>
                        <h3 class="title"></h3>
                        <p class="description"></p>
                    </div>
                </div>
                <div class="timeline">
                    <div class="timeline-content">
                        <span class="timeline-year">1969</span>
                        <h3 class="title"></h3>
                        <p class="description"></p>
                    </div>
                </div>
                <div class="timeline">
                    <div class="timeline-content">
                        <span class="timeline-year">1968</span>
                        <h3 class="title"></h3>
                        <p class="description"></p>
                    </div>
                </div>
                <div class="timeline">
                    <div class="timeline-content">
                        <span class="timeline-year">1967</span>
                        <h3 class="title"></h3>
                        <p class="description"></p>
                    </div>
                </div>
                <div class="timeline">
                    <div class="timeline-content">
                        <span class="timeline-year">1966</span>
                        <h3 class="title"></h3>
                        <p class="description"></p>
                    </div>
                </div>
                <div class="timeline">
                    <div class="timeline-content">
                        <span class="timeline-year">1965</span>
                        <h3 class="title"></h3>
                        <p class="description"></p>
                    </div>
                </div>
                <div class="timeline">
                    <div class="timeline-content">
                        <span class="timeline-year">1964</span>
                        <h3 class="title"></h3>
                        <p class="description">Bingo anordnas.</p>
                    </div>
                </div>
                <div class="timeline">
                    <div class="timeline-content">
                        <span class="timeline-year">1963</span>
                        <h3 class="title"></h3>
                        <p class="description"></p>
                    </div>
                </div>
                <div class="timeline">
                    <div class="timeline-content">
                        <span class="timeline-year">1962</span>
                        <h3 class="title"></h3>
                        <p class="description">Biografen läggs ned.</p>
                    </div>
                </div>
                <div class="timeline">
                    <div class="timeline-content">
                        <span class="timeline-year">1961</span>
                        <h3 class="title"></h3>
                        <p class="description"></p>
                    </div>
                </div>
                <div class="timeline">
                    <div class="timeline-content">
                        <span class="timeline-year">1960</span>
                        <h3 class="title"></h3>
                        <p class="description"></p>
                    </div>
                </div>
                <div class="timeline">
                    <div class="timeline-content">
                        <span class="timeline-year">1959</span>
                        <h3 class="title"></h3>
                        <p class="description">Diskussion om avstyckning av Altunagårdens tomt togs upp vid årsmötet men förslaget avslogs.</p>
                    </div>
                </div>
                <div class="timeline">
                    <div class="timeline-content">
                        <span class="timeline-year">1958</span>
                        <h3 class="title"></h3>
                        <p class="description">Ekonomisk kris! Stödförening bildas i maj för att rädda Altunagården.</p>
                    </div>
                </div>
                <div class="timeline">
                    <div class="timeline-content">
                        <span class="timeline-year">1957</span>
                        <h3 class="title"></h3>
                        <p class="description"></p>
                    </div>
                </div>
                <div class="timeline">
                    <div class="timeline-content">
                        <span class="timeline-year">1956</span>
                        <h3 class="title"></h3>
                        <p class="description"></p>
                    </div>
                </div>
                <div class="timeline">
                    <div class="timeline-content">
                        <span class="timeline-year">1955</span>
                        <h3 class="title"></h3>
                        <p class="description"></p>
                    </div>
                </div>
                <div class="timeline">
                    <div class="timeline-content">
                        <span class="timeline-year">1954</span>
                        <h3 class="title"></h3>
                        <p class="description"></p>
                    </div>
                </div>
                <div class="timeline">
                    <div class="timeline-content">
                        <span class="timeline-year">1953</span>
                        <h3 class="title"></h3>
                        <p class="description"></p>
                    </div>
                </div>
                <div class="timeline">
                    <div class="timeline-content">
                        <span class="timeline-year">1952</span>
                        <h3 class="title"></h3>
                        <p class="description">Försäkringskassa, möteslokal och bastu.</p>
                    </div>
                </div>
                <div class="timeline">
                    <div class="timeline-content">
                        <span class="timeline-year">1951</span>
                        <h3 class="title"></h3>
                        <p class="description">Hopslagning av kommuner, FJÄRDHUNDRA kommun bildas. Bibliotek, studierum och festvåning.</p>
                    </div>
                </div>
                <div class="timeline">
                    <div class="timeline-content">
                        <span class="timeline-year">1950</span>
                        <h3 class="title"></h3>
                        <p class="description">Biograf</p>
                    </div>
                </div>
                <div class="timeline">
                    <div class="timeline-content">
                        <span class="timeline-year">1949</span>
                        <h3 class="title"></h3>
                        <p class="description">Byggmästaren går i konkurs i mars. Invigning 4 december klockan 14.00 förättas av landshövding Conrad "Konke" Jonsson.</p>
                    </div>
                </div>
                <div class="timeline">
                    <div class="timeline-content">
                        <span class="timeline-year">1948</span>
                        <h3 class="title"></h3>
                        <p class="description">Bygglov beviljas 23 september 1948. Andelsförening bildas, "ALTUNA ELEKTRISKA DISTRIBUTIONSFÖRENING".</p>
                    </div>
                </div>
                <div class="timeline">
                    <div class="timeline-content">
                        <span class="timeline-year">1947</span>
                        <h3 class="title"></h3>
                        <p class="description"></p>
                    </div>
                </div>
                <div class="timeline">
                    <div class="timeline-content">
                        <span class="timeline-year">1946</span>
                        <h3 class="title"></h3>
                        <p class="description">Arbetsgrupp bildas för nybyggnation.</p>
                    </div>
                </div>
                <div class="timeline">
                    <div class="timeline-content">
                        <span class="timeline-year">1945</span>
                        <h3 class="title"></h3>
                        <p class="description"></p>
                    </div>
                </div>
                <div class="timeline">
                    <div class="timeline-content">
                        <span class="timeline-year">1944</span>
                        <h3 class="title"></h3>
                        <p class="description"></p>
                    </div>
                </div><div class="timeline">
                    <div class="timeline-content">
                        <span class="timeline-year">1943</span>
                        <h3 class="title"></h3>
                        <p class="description"></p>
                    </div>
                </div>
                <div class="timeline">
                    <div class="timeline-content">
                        <span class="timeline-year">1942</span>
                        <h3 class="title"></h3>
                        <p class="description">Haga tegelbruk skänker mark för att gagna bygden. 10 års respit på marken vid Flosta.</p>
                    </div>
                </div>
                <div class="timeline">
                    <div class="timeline-content">
                        <span class="timeline-year">1941</span>
                        <h3 class="title"></h3>
                        <p class="description">Altuna bygdegårdsförening bildas.</p>
                    </div>
                </div>

            </div>
        </div>
    </div>
</div>
  `;

	return template;
};

export default Timeline;
