const Timeline = () => {
	const template = `
    <div id="timeline" class="container timeline">
    <h4 class="my-3">Altunagården - tidslinje</h4>
    <div class="row">
        <div class="col-md-12">
            <div class="main-timeline">
                <div class="timeline">
                    <div class="timeline-content">
                        <span class="timeline-year">2021</span>
                        <h3 class="title"></h3>
                        <p class="description"></p>
                    </div>
                </div>
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
                        <p class="description">Altunagården 70 år! Firades med besök av landshövding Göran Enander, Uppsala län, samt luciatåg. Föreningen Fjärdhundraland får stora turismpriset, föreningen Altunagården är en del av Fjärdhundraland. Bygdegården får en upprustning interiört.</p>
                    </div>
                </div>
                <div class="timeline">
                    <div class="timeline-content">
                        <span class="timeline-year">2018</span>
                        <h3 class="title"></h3>
                        <p class="description">Bygdegården blir utnämnd till årets bygdegård i Uppsala läns bygdegårdsdistrikt. Dalkarlsvandrarna. Studiecirkel "Altunagårdens historia" bildas. Distriktsstämma.</p>
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
                        <a href="javascript:void(0)" class="show_hide" data-content="toggle-text">Läs mer...</a>
                        <div class="content">
                            <strong>Berättat av Sven-Olov Lundqvist:</strong>
                            Vid renoveringen 1978 blev all inredning i bastun utbytt, så efter det finns det duschar.
                            Tiden för bastun var varje fredag kl 18 -19.30 för herrar och därefter för damer.
                            Flitiga besökare var Anders Mårts, Bertil och Ture Pettersson, Dragmansbo, Stig och Gunnar
                            Blomkvist, Nyskottet.
                            Det fanns tidigare en bastu i Hårsbäck, men den var till åren kommen redan då. Den lades ner i
                            slutet av 70-talet, och de som badade där besökte istället Altunagården.
                            Bastubadet fortsätter även idag, efter 70 år, men just nu med ganska få badare.
                            <br><br>
                            Efter renoveringen 1978 måste verksamheten öka, bl.a. med ett luciafirande. Kyrkans miniorer hade
                            lucia som avslutning på sin verksamhet varje år. Nu tog Altunagården över med Britta Johansson
                            och Sonja Lundqvist som ansvariga. Luciatablån blev snabbt populär bland barnen, och det kunde
                            vara upp till 25 barn i tåget, som Lucia, tärnor och tomtar.
                            För att få in pengar till Altunagården ordnades en paketauktion. Varje paket som skänktes fick ett
                            nummer, och motsvarande nummer lades i en skål. Numren auktionerades sen ut.
                            Vi hade många duktiga konstnärer i bygden som skänkte tavlor, porslin och t.ex. fågelbord. En av
                            dem skänkte ett alster varje år till auktionen.
                            Efter något tiotal år var alla konstnärer ”avverkade” så vi fick leta andra vinster.
                            Jag skänkte en slaktad gris, och för att visa upp något för barnen tog jag också med en liten levande
                            gris. Jag hade hållit den i handen varje dag så att den inte skulle vara rädd, och det gick mycket bra.
                            Men när jag kom in med den i lokalen skrek alla barnen högt när de såg den levande grisen. Då blev
                            den så rädd att jag nästan tappade den, men allt slutade bra.
                            Paketauktionen var alltid ett välkommet tillskott till föreningens ekonomi, och brukade ge 3 – 4000
                            kr varje gång.
                            I slutet av 90-talet tog Eva Blomqvist över ansvaret, men några år in på 2000-talet minskade
                            intresset att delta i tåget. Verksamheten lades ner kring 2006 (?).
                        </div>
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
                        <a href="javascript:void(0)" class="show_hide" data-content="toggle-text">Läs mer...</a>
                        <div class="content">
                            <table class="table">
                                <tbody>
                                    <tr>
                                        <td>Ordförande:</td><td>Bertil Andersson, Högsberga </td>
                                    </tr>
                                    <tr>
                                        <td>Vice ordförande:</td><td>Artur Wallén</td>
                                    </tr>
                                    <tr>
                                        <td>Kassör:</td><td>Birgit Larsson</td>
                                    </tr>
                                    <tr>
                                        <td>Sekreterare:</td><td>Sven Olof Lundkvist</td>
                                    </tr>
                                    <tr>
                                        <td>Ledamöter:</td><td>Börje Grahn</td>
                                    </tr>
                                    <tr>
                                        <td>Suppleanter:</td><td>Valter Johansson & Roland Stråhle</td>
                                    </tr>
                                    <tr>
                                        <td>Revisor:</td><td>Sven Lundkvist</td>
                                    </tr>
                                    <tr>
                                        <td>Revisorsuppleant:</td><td>Erik Nyman</td>
                                    </tr>
                                </tbody>
                            </table>
                            <p>Ekonomiska resultatet mycket dåligt med en förlust på 5 529:61 kr. Ett lån har tagits i
                            Wästmanlands Sparbank för att förskottera Hans Johansson för förlusten i driften. Lånet skall
                            amorteras med 250 kr/kvartal plus gällande ränta.
                            Föreningen har varit uthyrd 85 gånger och 14 föreningar har nyttjat den.</p>
                        </div>
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
                        <a href="javascript:void(0)" class="show_hide" data-content="toggle-text">Läs mer...</a>
                        <div class="content">
                            <table class="table">
                                <tbody>
                                    <tr>
                                        <td>Ordförande:</td><td>Bertil Andersson, Högsberga </td>
                                    </tr>
                                    <tr>
                                        <td>Vice ordförande:</td><td>Evald Eriksson, Högsberga</td>
                                    </tr>
                                    <tr>
                                        <td>Kassör:</td><td>Nils Ramsell</td>
                                    </tr>
                                    <tr>
                                        <td>Sekreterare:</td><td>Sven Olof Lundkvist</td>
                                    </tr>
                                    <tr>
                                        <td>Ledamöter:</td><td>Börje Grahn & Artur Wallén</td>
                                    </tr>
                                    <tr>
                                        <td>Suppleanter:</td><td>Valter Johansson & Roland Stråhle</td>
                                    </tr>
                                    <tr>
                                        <td>Revisor:</td><td>Sven Lundkvist</td>
                                    </tr>
                                    <tr>
                                        <td>Revisorsuppleant:</td><td>Erik Nyman</td>
                                    </tr>
                                </tbody>
                            </table>
                            <p>Lokalen har under året varit uthyrd 125 gånger. Beslöts att till kommunalfullmäktige begära
                            tilläggsanslag om 2000 kr för amorteringskostnader. Det diskuterades att söka ett
                            rekonstruktionsbidrag där stat och kommun skall satsa varder 50%. Lokalen skall därför värderas.</p>
                        </div>
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
                        <a href="javascript:void(0)" class="show_hide" data-content="toggle-text">Läs mer...</a>
                        <div class="content">
                            <table class="table">
                                <tbody>
                                    <tr>
                                        <td>Ordförande:</td><td>Bertil Andersson, Högsberga </td>
                                    </tr>
                                    <tr>
                                        <td>Vice ordförande:</td><td>Evald Eriksson, Högsberga</td>
                                    </tr>
                                    <tr>
                                        <td>Kassör:</td><td>Hans Johansson, Nötbacken</td>
                                    </tr>
                                    <tr>
                                        <td>Sekreterare:</td><td>Sven Olof Lundkvist</td>
                                    </tr>
                                    <tr>
                                        <td>Ledamöter:</td><td>Börje Grahn & Artur Wallén</td>
                                    </tr>
                                    <tr>
                                        <td>Suppleanter:</td><td>Valter Johansson & Roland Stråhle</td>
                                    </tr>
                                    <tr>
                                        <td>Revisor:</td><td>Sven Lundkvist</td>
                                    </tr>
                                    <tr>
                                        <td>Revisorsuppleant:</td><td>Erik Nyman</td>
                                    </tr>
                                </tbody>
                            </table>
                            <p>Lokalen har under året varit uthyrd 102 gånger. Beslutades att ny flaggstång på 10m skall inköpas.
                            Lottaföreningen har skänkt nya askfat (!).</p>
                        </div>
                    </div>
                </div>
                <div class="timeline">
                    <div class="timeline-content">
                        <span class="timeline-year">1963</span>
                        <h3 class="title"></h3>
                        <p class="description"></p>
                        <a href="javascript:void(0)" class="show_hide" data-content="toggle-text">Läs mer...</a>
                        <div class="content">
                            <table class="table">
                                <tbody>
                                    <tr>
                                        <td>Ordförande:</td><td>Bertil Andersson, Högsberga </td>
                                    </tr>
                                    <tr>
                                        <td>Vice ordförande:</td><td>Evald Eriksson, Högsberga</td>
                                    </tr>
                                    <tr>
                                        <td>Kassör:</td><td>Hans Johansson, Nötbacken</td>
                                    </tr>
                                    <tr>
                                        <td>Sekreterare:</td><td>Sven Olof Lundkvist</td>
                                    </tr>
                                    <tr>
                                        <td>Ledamöter:</td><td>Börje Grahn & Artur Wallén</td>
                                    </tr>
                                    <tr>
                                        <td>Suppleanter:</td><td>Gunnar Eriksson & Roland Stråhle</td>
                                    </tr>
                                    <tr>
                                        <td>Revisor:</td><td>Sven Lundkvist</td>
                                    </tr>
                                    <tr>
                                        <td>Revisorsuppleant:</td><td>Erik Nyman</td>
                                    </tr>
                                </tbody>
                            </table>
                            <p>Ekonomin har nu vänt uppåt, och ett årsresultat på 1 389:03 kr redovisades. En byggnadskommitté
                            utsågs att ansvara för rappning kring fönster, målning av allt yttre trä och grusning av hela planen.</p>
                        </div>
                    </div>
                </div>
                <div class="timeline">
                    <div class="timeline-content">
                        <span class="timeline-year">1962</span>
                        <h3 class="title"></h3>
                        <p class="description">Biografen läggs ned.</p>
                        <a href="javascript:void(0)" class="show_hide" data-content="toggle-text">Läs mer...</a>
                        <div class="content">
                            <table class="table">
                                <tbody>
                                    <tr>
                                        <td>Ordförande:</td><td>Bertil Andersson, Högsberga </td>
                                    </tr>
                                    <tr>
                                        <td>Vice ordförande:</td><td>Evald Eriksson, Högsberga</td>
                                    </tr>
                                    <tr>
                                        <td>Kassör:</td><td>Hans Johansson, Nötbacken</td>
                                    </tr>
                                    <tr>
                                        <td>Sekreterare:</td><td>Sven Olof Lundkvist</td>
                                    </tr>
                                    <tr>
                                        <td>Ledamöter:</td><td>Börje Grahn & Artur Wallén</td>
                                    </tr>
                                    <tr>
                                        <td>Suppleanter:</td><td>Valter Johansson & Roland Stråhle</td>
                                    </tr>
                                    <tr>
                                        <td>Revisor:</td><td>Sven Lundkvist</td>
                                    </tr>
                                    <tr>
                                        <td>Revisorsuppleant:</td><td>Erik Nyman</td>
                                    </tr>
                                </tbody>
                            </table>
                            <p>Biografen diskuterades livligt, och beslut togs om nedläggning vid säsongens slut. Istället skall
                            badet köras varje vecka fr.o.m. skolans början. Beslut togs om golvslipning i lilla och stora salen.
                            En tio år gammal räkning på grus, från bröderna Almblad, skall betalas med 50%.</p>
                        </div>
                    </div>
                </div>
                <div class="timeline">
                    <div class="timeline-content">
                        <span class="timeline-year">1961</span>
                        <h3 class="title"></h3>
                        <p class="description"></p>
                        <a href="javascript:void(0)" class="show_hide" data-content="toggle-text">Läs mer...</a>
                        <div class="content">
                            <table class="table">
                                <tbody>
                                    <tr>
                                        <td>Ordförande:</td><td>Bertil Andersson, Högsberga </td>
                                    </tr>
                                    <tr>
                                        <td>Vice ordförande:</td><td>Evald Eriksson, Högsberga</td>
                                    </tr>
                                    <tr>
                                        <td>Kassör:</td><td>Hans Johansson, Nötbacken</td>
                                    </tr>
                                    <tr>
                                        <td>Sekreterare:</td><td>Sven Olof Lundkvist</td>
                                    </tr>
                                    <tr>
                                        <td>Ledamöter:</td><td>Nils Ramsell & Evald Eriksson</td>
                                    </tr>
                                    <tr>
                                        <td>Suppleanter:</td><td>Gunnar Eriksson & Roland Stråhle</td>
                                    </tr>
                                    <tr>
                                        <td>Revisor:</td><td>Sven Lundkvist</td>
                                    </tr>
                                    <tr>
                                        <td>Revisorsuppleant:</td><td>Erik Nyman</td>
                                    </tr>
                                </tbody>
                            </table>
                            <p>Här beslöts att stödföreningen skulle återupptagas med en avgift om 5 kr per medlem.</p>
                        </div>
                    </div>
                </div>
                <div class="timeline">
                    <div class="timeline-content">
                        <span class="timeline-year">1960</span>
                        <h3 class="title"></h3>
                        <p class="description"></p>
                        <a href="javascript:void(0)" class="show_hide" data-content="toggle-text">Läs mer...</a>
                        <div class="content">
                            <table class="table">
                                <tbody>
                                    <tr>
                                        <td>Ordförande:</td><td>Bertil Andersson, Högsberga </td>
                                    </tr>
                                    <tr>
                                        <td>Vice ordförande:</td><td>Evald Eriksson, Högsberga</td>
                                    </tr>
                                    <tr>
                                        <td>Kassör:</td><td>Hans Johansson, Nötbacken</td>
                                    </tr>
                                    <tr>
                                        <td>Sekreterare:</td><td>Artur Andersson, Ådalen</td>
                                    </tr>
                                    <tr>
                                        <td>Ledamöter:</td><td>Valter Johansson & Börje Grahn</td>
                                    </tr>
                                    <tr>
                                        <td>Suppleanter:</td><td>Sven Olof Lundkvist & H Olsson</td>
                                    </tr>
                                    <tr>
                                        <td>Revisor:</td><td>Sven Lundkvist</td>
                                    </tr>
                                    <tr>
                                        <td>Revisorsuppleant:</td><td>Erik Nyman</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="timeline">
                    <div class="timeline-content">
                        <span class="timeline-year">1959</span>
                        <h3 class="title"></h3>
                        <p class="description">Diskussion om avstyckning av Altunagårdens tomt togs upp vid årsmötet men förslaget avslogs.</p>
                        <a href="javascript:void(0)" class="show_hide" data-content="toggle-text">Läs mer...</a>
                        <div class="content">
                            <table class="table">
                                <tbody>
                                    <tr>
                                        <td>Ordförande:</td><td>Bertil Andersson, Högsberga </td>
                                    </tr>
                                    <tr>
                                        <td>Vice ordförande:</td><td>Evert Eriksson, Högsberga</td>
                                    </tr>
                                    <tr>
                                        <td>Kassör:</td><td>Hans Johansson, Nötbacken</td>
                                    </tr>
                                    <tr>
                                        <td>Sekreterare:</td><td>Artur Andersson, Ådalen</td>
                                    </tr>
                                    <tr>
                                        <td>Ledamöter:</td><td>Nils Ramsell</td>
                                    </tr>
                                    <tr>
                                        <td>Suppleanter:</td><td>Sven Olof Lundkvist, H Olsson</td>
                                    </tr>
                                    <tr>
                                        <td>Revisor:</td><td>Sven Lundkvist</td>
                                    </tr>
                                    <tr>
                                        <td>Revisorsuppleant:</td><td>Roland Stråhle, Flosta</td>
                                    </tr>
                                </tbody>
                            </table>
                            <p>På det årsmötet diskuterades bl.a. att stycka av Altunagårdens tomt, som ett sätt att få in pengar,
                            men förslaget avslogs. Nytt lagfartsbevis och begäran att söka statligt bidrag bifölls.
                            Beslöts att Altuna Bygdegård ska utträda ur Bygdegårdarnas Riksförbund.</p>
                        </div>
                    </div>
                </div>
                <div class="timeline">
                    <div class="timeline-content">
                        <span class="timeline-year">1958</span>
                        <h3 class="title"></h3>
                        <p class="description">Ekonomisk kris! Stödförening bildas i maj för att rädda Altunagården.</p>
                        <a href="javascript:void(0)" class="show_hide" data-content="toggle-text">Läs mer...</a>
                        <div class="content">
                            Stödföreningen för att rädda Altunagården bildas 28:e maj 1958. Ekonomin var hårt ansträngd och
                            ca 5000 kr saknades.
                            Pastor Geite frågade vad som skulle hända om inte pengarna kunde anskaffas, och på detta svarade
                            Sven Lundkvist att det blir utmätning och eventuellt konkurs.
                            Många förslag diskuterades, bl.a.:
                            Tore Ramsell: ”Att alla föreningar i socknen gemensamt skulle förbinda sig att stödja och hyra
                            Altunagården.”
                            Bertil Andersson: ”Att skicka en insamlingslista till alla innevånare.”
                            Sigvard Alm: ”Att kommunen bör bestrida de pengar föreningen inte själva kan få fram, annars bör
                            Altunagården utbjudas till kommunen.”
                            Stödföreningen fanns till och från kvar de närmaste åren.
                        </div>
                    </div>
                </div>
                <div class="timeline">
                    <div class="timeline-content">
                        <span class="timeline-year">1957</span>
                        <h3 class="title"></h3>
                        <p class="description"></p>
                        <a href="javascript:void(0)" class="show_hide" data-content="toggle-text">Läs mer...</a>
                        <div class="content">
                            <table class="table">
                                <tbody>
                                    <tr>
                                        <td>Ordförande:</td><td>Erik Nyman, Flosta</td>
                                    </tr>
                                    <tr>
                                        <td>Vice ordförande:</td><td>Evald Eriksson, Högsberga</td>
                                    </tr>
                                    <tr>
                                        <td>Kassör:</td><td>Hans Johansson, Nötbacken</td>
                                    </tr>
                                    <tr>
                                        <td>Sekreterare:</td><td>Artur Andersson, Ådalen</td>
                                    </tr>
                                    <tr>
                                        <td>Ledamöter:</td><td>Nils Ramsell</td>
                                    </tr>
                                    <tr>
                                        <td>Suppleanter:</td><td>Sven Wallén</td>
                                    </tr>
                                    <tr>
                                        <td>Revisor:</td><td>Sven Lundkvist</td>
                                    </tr>
                                    <tr>
                                        <td>Revisorsuppleant:</td><td>Bertil Andersson, Högsberga</td>
                                    </tr>
                                </tbody>
                            </table>
                            <p>Budgetförslaget för året balanserade på 11 203 kr</p>
                           <p> Hyrorna för gården beslutades under året bli:</p>
                           <ul>
                            <li>Dans: 100 kr</li>
                            <li>Kalas: 75 kr</li>
                            <li>Föreningsafton: 50 kr</li>
                            <li>Sammanträden: 30 kr</li>
                            <li>Begravningar med mat: 50 kr</li>
                            <li>Begravningar med kaffe: 30 kr</li>
                            <li>Föreläsningar: 15 kr</li>
                            <li>Lilla salen med kök: 10 kr</li>
                            <li>Lilla salen eller studierum: 5 kr</li>
                            </ul>
                            <p>Vaktmästartjänsten ledigförklaras i april 1957, och i augusti utsågs Börje Grahn, Flosta, till
                            vaktmästare.</p>
                        </div>
                    </div>
                </div>
                <div class="timeline">
                    <div class="timeline-content">
                        <span class="timeline-year">1956</span>
                        <h3 class="title"></h3>
                        <p class="description"></p>
                        <a href="javascript:void(0)" class="show_hide" data-content="toggle-text">Läs mer...</a>
                        <div class="content">
                            <table class="table">
                                <tbody>
                                    <tr>
                                        <td>Ordförande:</td><td>Tore Ramsell</td>
                                    </tr>
                                    <tr>
                                        <td>Vice ordförande:</td><td>Evald Eriksson</td>
                                    </tr>
                                    <tr>
                                        <td>Kassör:</td><td>Hans Johansson</td>
                                    </tr>
                                    <tr>
                                        <td>Sekreterare:</td><td>Hans Johansson</td>
                                    </tr>
                                    <tr>
                                        <td>Ledamöter:</td><td>Nils Ramsell, Walter Johansson, Sigvard Bertil Andersson &  Erik Nyman</td>
                                    </tr>
                                    <tr>
                                        <td>Suppleanter:</td><td>Sven-Olof Lundkvist</td>
                                    </tr>
                                    <tr>
                                        <td>Revisor:</td><td>?</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="timeline">
                    <div class="timeline-content">
                        <span class="timeline-year">1955</span>
                        <h3 class="title"></h3>
                        <p class="description"></p>
                        <a href="javascript:void(0)" class="show_hide" data-content="toggle-text">Läs mer...</a>
                        <div class="content">
                            <table class="table">
                                <tbody>
                                    <tr>
                                        <td>Ordförande:</td><td>Tore Ramsell</td>
                                    </tr>
                                    <tr>
                                        <td>Vice ordförande:</td><td>Evert Eriksson</td>
                                    </tr>
                                    <tr>
                                        <td>Kassör:</td><td>Hans Johansson</td>
                                    </tr>
                                    <tr>
                                        <td>Sekreterare:</td><td>Hans Johansson</td>
                                    </tr>
                                    <tr>
                                        <td>Ledamöter:</td><td>Nils Ramsell, Walter Johansson, Sigvard Ahlm &  Erik Nyman</td>
                                    </tr>
                                    <tr>
                                        <td>Suppleanter:</td><td>Sven Wallén</td>
                                    </tr>
                                    <tr>
                                        <td>Revisor:</td><td>?</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="timeline">
                    <div class="timeline-content">
                        <span class="timeline-year">1954</span>
                        <h3 class="title"></h3>
                        <p class="description"></p>
                        <a href="javascript:void(0)" class="show_hide" data-content="toggle-text">Läs mer...</a>
                        <div class="content">
                            <table class="table">
                                <tbody>
                                    <tr>
                                        <td>Ordförande:</td><td>Tore Ramsell</td>
                                    </tr>
                                    <tr>
                                        <td>Vice ordförande:</td><td>Evald Eriksson</td>
                                    </tr>
                                    <tr>
                                        <td>Kassör:</td><td>Tore Ramsell</td>
                                    </tr>
                                    <tr>
                                        <td>Sekreterare:</td><td>Hans Johansson</td>
                                    </tr>
                                    <tr>
                                        <td>Ledamöter:</td><td>Walter Johansson</td>
                                    </tr>
                                    <tr>
                                        <td>Suppleanter:</td><td>Algot Cohlin</td>
                                    </tr>
                                    <tr>
                                        <td>Revisor:</td><td>E. Liljestrand</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
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
                        <a href="javascript:void(0)" class="show_hide" data-content="toggle-text">Läs mer...</a>
                        <div class="content">
                            <table class="table">
                                <tbody>
                                    <tr>
                                        <td>Ordförande:</td><td>Axel Andersson</td>
                                    </tr>
                                    <tr>
                                        <td>Vice ordförande:</td><td>Arvid Hemlin</td>
                                    </tr>
                                    <tr>
                                        <td>Kassör:</td><td>Sigvard Ahlm</td>
                                    </tr>
                                    <tr>
                                        <td>Sekreterare:</td><td>Hans Johansson</td>
                                    </tr>
                                    <tr>
                                        <td>Ledamöter:</td><td>Tore Ramsell & Walter Johansson</td>
                                    </tr>
                                    <tr>
                                        <td>Suppleanter:</td><td>Börje Berg & Evert Eriksson</td>
                                    </tr>
                                    <tr>
                                        <td>Revisor:</td><td>E. Liljestrand</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="timeline">
                    <div class="timeline-content">
                        <span class="timeline-year">1951</span>
                        <h3 class="title"></h3>
                        <p class="description">Hopslagning av kommuner, FJÄRDHUNDRA kommun bildas. Bibliotek, studierum och festvåning.</p>
                        <a href="javascript:void(0)" class="show_hide" data-content="toggle-text">Läs mer...</a>
                        <div class="content">
                            <table class="table">
                                <tbody>
                                    <tr>
                                        <td>Ordförande:</td><td>Axel Andersson</td>
                                    </tr>
                                    <tr>
                                        <td>Vice ordförande:</td><td>Arvid Hemlin</td>
                                    </tr>
                                    <tr>
                                        <td>Kassör:</td><td>Sigvard Ahlm</td>
                                    </tr>
                                    <tr>
                                        <td>Sekreterare:</td><td>Hans Johansson</td>
                                    </tr>
                                    <tr>
                                        <td>Ledamöter:</td><td>Nils Ramsell & Gunnar Lindberg</td>
                                    </tr>
                                    <tr>
                                        <td>Revisor:</td><td>E. Liljestrand</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="timeline">
                    <div class="timeline-content">
                        <span class="timeline-year">1950</span>
                        <h3 class="title"></h3>
                        <p class="description">Biograf</p>
                        <a href="javascript:void(0)" class="show_hide" data-content="toggle-text">Läs mer...</a>
                        <div class="content">
                            <strong>Berättat av Sven-Olov Lundqvist:</strong>   
                            Jag tror att det var hösten 1950 som bion startade. Jag var med på allra första föreställningen. Det
                            var vaktmästaren Tore Ramsell som var biografföreståndare, och han hade hjälp av Nils Ramsell.
                            Det gick inte alls bra för de fick inte igång filmapparaten. De försökte i en halvtimme, sen ringde de
                            efter Helge Lindholm, som körde film i Godtemplarlokalen i Fjärdhundra.
                            Han kom så småningom, men inte ens han lyckades. Efter flera försök fick vi åka hem utan att ha
                            fått se filmen, men med löftet att nästa onsdag skulle vi få se filmen gratis. Den gången gick det
                            bättre. Helge Lindholm var med och allt fungerade bra.
                            Bion gick bra och det blev cirka 25 föreställningar per år. Varje onsdag kl. 19.00 från september till
                            april. Ansvariga för bion var alltid vaktmästaren. 1950-57 var det Tore Ramsell, 1957-61 var det Margit
                            och Tore Gran och 1961-62 var det jag själv, Sven-Olov Lundqvist.                         
                            Jag blev vaktmästare hösten 1961 och fick ansvaret att köra filmapparaten. Det var ett komplicerat
                            uppdrag. Det började med att Högsberg Buss hämtade en trälåda någonstans i Enköping. De körde
                            ju linjen Enköping – Ådalen flera gånger i veckan.
                            De lade lådan i diket vid parkeringen och vid 18-tide tar jag lådan till biorummet. I lådan ligger fem
                            rullar film. En var reklamfilmerna, och övriga fyra var själva filmen, uppdelad i fyra akter.
                            Det var två stora rullar på filmapparaten, och dit spolade jag först akt 2, sedan akt 1 och sist
                            reklamrullen. På den andra rullen spolades akt 4 och sen akt 3.
                            När detta var klart kollade jag hur många besökare som kommit. Det var Thea och Roland Stråle
                            som var ansvariga för biljettförsäljningen. Kl 19.00 kördes filmen igång. Filmapparaten var av äldre modell med kolstavar som ljus. Efter ca
                            50 minuter var första rullen slut, så då gjordes en paus på tio minuter.
                            Jag bytte rulle, och efter paus kördes resten. En hel föreställning tog cirka två timmar. Sen var det
                            bara att spola alla akter bakåt till originalrullarna, packa lådan och åka med den till Högsbergs
                            garage. När TV:n började komma in i alla hem i början på sextiotalet blev det snabbt färre biobesökare.
                            Styrelsen beslöt att sluta med bioföreställningar våren 1962.
                            <br>
                            <table class="table">
                                <tbody>
                                    <tr>
                                        <td>Ordförande:</td><td>Axel Andersson</td>
                                    </tr>
                                    <tr>
                                        <td>Vice ordförande:</td><td>Arvid Hemlin</td>
                                    </tr>
                                    <tr>
                                        <td>Kassör:</td><td>Oskar Ramsell</td>
                                    </tr>
                                    <tr>
                                        <td>Sekreterare:</td><td>Hans Johansson</td>
                                    </tr>
                                    <tr>
                                        <td>Ledamöter:</td><td>O.H. Olsson & Gunnar Lindberg</td>
                                    </tr>
                                    <tr>
                                        <td>Revisor:</td><td>E. Liljestrand</td>
                                    </tr>
                                </tbody>
                            </table>
                            <br>
                            <p><i>Ur protokollet 1950:</i>
                            Hr Hallgren opponerade sig mot att hyrorna äro för billiga, vilket föranledde mötet uppdraga åt
                            styrelsen att ytterligare utreda hyresfrågan.
                            En opposition från Hr Alm över garderoben, vilken är liten och opraktiskt inrättad, föranledde mötet
                            tillsätta en komitté bestående av Valter Johansson. Artur Andersson, Nils Gran och Tore Ramsell,
                            vilka har till uppgift att på lämpligaste sätt omändra garderoben.
                            Beslöts uppdraga åt sekreteraren att framlägga ett principuttalande till ordningsvakterna
                            innehållande regler och anvisningar rörande vakthållningen i lokalen vid offentliga
                            danstillställningar.</p>
                        </div>
                    </div>
                </div>
                <div class="timeline">
                    <div class="timeline-content">
                        <span class="timeline-year">1949</span>
                        <h3 class="title"></h3>
                        <p class="description">Byggmästaren går i konkurs i mars. Invigning 4 december klockan 14.00 förättas av landshövding Conrad "Konke" Jonsson.</p>
                        <a href="javascript:void(0)" class="show_hide" data-content="toggle-text">Läs mer...</a>
                        <div class="content">
                            <table class="table">
                                <tbody>
                                    <tr>
                                        <td>Ordförande:</td><td>Axel Andersson</td>
                                    </tr>
                                    <tr>
                                        <td>Vice ordförande:</td><td>Arvid Hemlin</td>
                                    </tr>
                                    <tr>
                                        <td>Kassör:</td><td>Tore Ramsell</td>
                                    </tr>
                                    <tr>
                                        <td>Sekreterare:</td><td>Hans Johansson</td>
                                    </tr>
                                    <tr>
                                        <td>Ledamöter:</td><td>O.H. Olsson & Gunnar Lindberg</td>
                                    </tr>
                                    <tr>
                                        <td>Revisor:</td><td>E. Liljestrand</td>
                                    </tr>
                                </tbody>
                            </table>
                            <br>
                            <p><i>Ur protokollet 1949:</i>
                            Vid granskning av byggnadsritningen framkom att ett rum i källarvåningen saknade ingång. Mötet
                            beslöt att hos arkitekten framföra en önskan om upptagandet av en dörr.</p>
                            <br>
                            <p><i>Från ett styrelsemöte 1949:</i>
                            Styrelsen hade besök av ombudsmannen för Svenska Folkbiograferna, som efter att ha besett
                            bygdegården lämnade en del intressanta upplysningar, samt lovade översända en beskrivning med
                            prisuppgift å en begagnad, men genomgången och i gott skick varande, biografmaskin.</p>
                        </div>
                    </div>
                </div>
                <div class="timeline">
                    <div class="timeline-content">
                        <span class="timeline-year">1948</span>
                        <h3 class="title"></h3>
                        <p class="description">Bygglov beviljas 23 september 1948. Andelsförening bildas, "ALTUNA ELEKTRISKA DISTRIBUTIONSFÖRENING".</p>
                        <a href="javascript:void(0)" class="show_hide" data-content="toggle-text">Läs mer...</a>
                        <div class="content">
                            Styrelsen för föreningen Altuna Bygdegård ber att till kompletering av vår ansökan få meddela följande.
                            Annandag jul 1939 nedbrann ett i socknen befintligt ordenshus, varvid lokalens
                            vaktmästare innebrändes. Utom Godtemplarlogen använde sig ortens andra föreningar av
                            detsamma, och en tillbyggnad var planerad. Verksamheten ansågs även långt utanför vår
                            egen ort vara av föredömligt slag vilket bl.a. dåvarande ledaren för
                            folkbildningsverksamheten i länet, rektor Andrén, säkert gärna intygar.
                            Efter detta har ortens föreningar varit hemlösa och levat endast med svagt liv. En
                            kulturell utarmning kan konstateras och tråkighet på landsbygden har blivit till något mera
                            än ett slagord.Vi har exempel på ungdom som flyttat härifrån av denna orsak. T.o.m. Från
                            arbetsförmedling de nekats taga plats hit av samma skäl. År 1942 uppkom ett förslag om en
                            bygdegård vari alla ortens föreningar jämte Altuna kommun skulle vara delägare. Detta
                            förutsatte ett rätt stort företag och det har tagit tid att få ihop tillräckligt stort grundkapital
                            för att företaget skulle kunna startas på sund finansiell basis.
                            Numera har vi dock kommit så långt, att förutsatt att vi får lån och anslag ur statens nämnd
                            för samlingslokaler med halva summan är den andra hälften i det närmaste säkrad utan
                            ytterligare skuldsättning. En rymlig tomt har skänkts till föreningen på central plats.
                            Det skulle vara av värde för oss om vi kunde få byggnadstillstånd för innevarande år
                            för att kunna utföra en del arbete på tomten och göra grunden i ordning, skaffa en del
                            material e.t.c. För att kunna starta i god tid nästa år och bli färdiga innan senhösten kommer
                            med fukt och otjänlig väderlek. Arbetskraft finnes inom orten.<br>
                            <i>Altuna den 23:e maj 1948</i>
                            <br>
                            <table class="table">
                                <tbody>
                                    <tr>
                                        <td>Ordförande:</td><td>Axel Andersson</td>
                                    </tr>
                                    <tr>
                                        <td>Vice ordförande:</td><td>Arvid Hemlin</td>
                                    </tr>
                                    <tr>
                                        <td>Kassör:</td><td>Tore Ramsell</td>
                                    </tr>
                                    <tr>
                                        <td>Sekreterare:</td><td>Hans Johansson</td>
                                    </tr>
                                    <tr>
                                        <td>Ledamöter:</td><td>O.H. Olsson & Gunnar Lindberg</td>
                                    </tr>
                                    <tr>
                                        <td>Revisor:</td><td>E. Liljestrand</td>
                                    </tr>
                                </tbody>
                            </table>
                            <br>
                            Ur protokollet:<br>
                            Ordförande Axel Andersson meddelade att byggnadstillstånd beviljats, samt uppläste meddelandet
                            därom, varav framkom att om byggnationen icke skulle igångsättas med det snaraste finnes risk för
                            byggnadstillståndets indragande.
                            Tidpunkten för byggnationens igångsättande diskuterades, och beslutades enhälligt att
                            byggnadsigångsättandetillstånd skulle sökas för arbetets igångsättande redan i höst.
                            På samma möte beslutades att teckna andelar i Altuna Elektriska Distributionsförening.
                        </div>
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
                        <a href="javascript:void(0)" class="show_hide" data-content="toggle-text">Läs mer...</a>
                        <div class="content"> 
                            <table class="table">
                                <tbody>
                                    <tr>
                                        <td>Ordförande:</td><td>Greve Stefan Benzelstierna von Engeström</td>
                                    </tr>
                                    <tr>
                                        <td>Vice ordförande:</td><td>Arvid Hemlin</td>
                                    </tr>
                                    <tr>
                                        <td>Kassör:</td><td>Tore Ramsell</td>
                                    </tr>
                                    <tr>
                                        <td>Sekreterare:</td><td>Axel Andersson</td>
                                    </tr>
                                    <tr>
                                        <td>Ledamöter:</td><td>O.H. Olsson & Sivert Liljestrand</td>
                                    </tr>
                                    <tr>
                                        <td>Revisor:</td><td>E. Liljestrand</td>
                                    </tr>
                                </tbody>
                            </table>
                            <br>
                            <p>Ur föreningens första protokoll:
                            Där upplästes en skrivelse från ordförande i statens nämnd för samlingslokaler, riksdagsman Ernst
                            Eriksson, vari han meddelade att han meddelade att han tillställt byggnadsrådet G. Wejke
                            handlingarna angående Altuna Bygdegård, och att denne gjort erinringar mot byggnadens såväl inre
                            som yttre utformning och även byggkostnaderna.
                            En av honom utarbetad skiss för en bygdegård visades, som av mötet godkändes att ligga till grund
                            för en ny ritning.
                            Förslag gjordes att stora salen borde göras någon meter kortare och istället något bredare än enligt
                            skissen. Dessutom föreslogs att takkonstruktionen skulle bli i vinkel å ena delen av byggnaden. Det
                            senare förslaget godkändes av mötet.
                            Vidare uttalade sig majoriteten för 200 platser i stora salen istället för föreslagna 175.
                            Angående slopandet av läktare, anordnande av studie- eller klubbrum beslöts i enlighet med
                            förslagsskissen.</p>
                        </div>
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
                        <p class="description">Heby tegelbruk skänker mark för att gagna bygden. 10 års respit på marken vid Flosta.</p>
                        <a href="javascript:void(0)" class="show_hide" data-content="toggle-text">Läs mer...</a>
                        <div class="content">
                            <strong>Berättat av Sven-Olov Lundqvist:</strong>   
                            Gräva grund och parkering.<br>
                            Efter branden 1939 i Godtemplarlokalen i Fröslunda stod Altuna socken utan samlingslokal. Efter
                            några år bildades föreningen Altuna Bygdegård U.P.A. Styrelsen tog hjälp av ett bolag som hette
                            LTK, som länsstyrelsen startat, och som hade till uppgift att utveckla länet. De hade olika experter,
                            bl.a. en för bostäder och samlingslokaler.
                            Den mannen hjälpte till med projekteringen. Heby Tegelverk, som ägde Flosta gård, skänkte den
                            13:e januari 1944 tomtmarken till föreningen, för att den skulle kunna bygga en samlingslokal.
                            När projekteringen var klar skulle grunden grävas. Heby Tegelverk, som hade lertag på andra sidan
                            vägen, åtog sig grävningen, men de ville ha hjälp av frivilliga. Det var många starka karlar som
                            anmälde sig att gräva gratis.
                            Ytan som skulle grävas var ca 500 kvadratmeter, och det skulle grävas till 2 m djup, så det blev
                            kring 1000 kubikmeter jord.
                            De började gräva i mitten till fullt djup och lade jorden på plankor. När lastbilen kom skottade man
                            upp jorden från plankorna till lastbilen, så man lyfte alltså all jord två gånger. Man jobbade hela
                            tiden i två arbetslag.
                            <br>
                            När lokalen var färdigbyggd skulle parkeringen göras i ordning. All matjord skulle bort och grus
                            fyllas på. All jord tömdes i backen framför lokalen.
                            Gunnar Andersson och Gustav Almblad åtog sig att göra jobbet. De fick låna häst, plog och en
                            tippbar vinkelaxelkärra i Flosta. Lönen var 2:50 kr i timmen.
                            Gruset hämtades i Vilstena och kördes av Nils Ramsell och Herman Nilsson.
                            <br>
                            När man projekterade Altunagården skulle där finnas en bastu med särskilt rum för badkar. På den
                            tiden var man inte så noga med hygienen. Ett talesätt var ”Man badar en gång om året – till Jul, vare
                            sig det behövs eller inte”. Men nu skulle hygienen bli bättre bland Altunaborna.
                            Bastubadet gick till så här: Man tvättade sig i plåtbalja och sköljde sig genom att hälla vattnet över
                            huvudet. Sen in i bastun ungefär 15 minuter, så ut igen för att fylla baljan och hälla den över
                            huvudet.
                        </div>
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
