import React from 'react';

const Food = () => (
  <div className="Food">
    <h1>Táplálkozás futóknak</h1>
    <h3>
      A követendő táplálkozás elemei és arányai általánosságban. Tehát amire szükséged van az:
    </h3>
    <ul className="foodlist">
      <li>zöldségek,</li>
      <li>teljes kiőrlésű gabonák,</li>
      <li>gyümölcsök,</li>
      <li>magvak,</li>
      <li>sovány húsok,</li>
      <li>halak</li>
      <li>tejtermékek</li>
    </ul>
    <h3>
      Mindez a megfelelő arányban, azaz:
    </h3>
    <ul className="foodlist">
      <li>50-60% szénhidrát (edzős napokon a tartomány felső részére törekedj),</li>
      <li>20-25% fehérje,</li>
      <li>15-25% zsír.</li>
    </ul>
    <p>Az energiaszükségletünk egy-egy közepes intenzitású, mondjuk 6 km-es futás után nagyságrendileg kb. 200-300 kcal-val nő meg. Hát ez nem sok. Szóval csak óvatosan azzal, hogy akkor "most futottam, akkor megjutalmazom magam egy sütikével".</p>
    <p>Inkább jutalmazd meg magad bő fél liter vízzel és egy jóleső zuhannyal, váljon ez szokássá!</p>
    <p>Táplálkozás futás után. Sokan kérdeztétek, hogy mit egyek futás után?</p>
    <p>Ha ez a futás nem volt hosszabb 1 óránál (és itt folyamatos futásról beszélek, nem séta-futás váltogatásról), akkor nem szükséges különösebb változtatás az amúgy megszokott étrenden. Ha esetleg úgy érzed, hogy nagyon leesett a vércukorszinted, akkor egyél meg egy banánt! De a víz ilyen esetekben a legtöbbször segít (mert a vízhiány is okozhatja a szédülést).</p>
    <p>Ha a futás hosszabb volt egy óránál és az ráadásul közepes intenzitáson is túltett (sprintekkel, váltott tempóval, esetleg terepen sok felfele szakasz, vagy túl vagy egy félmarathonon), akkor érdemes futás után szénhidrátot venni magadhoz megspékelve egy kis fehérjével (kb 3:1 arányban).</p>
    <p>Ez lehet pl.:</p>
    <ul className="foodlist">
      <li>egy jó kis joghurtos zabkása, gyümölcsökkel</li>
      <li>egy tojásrántotta sok zöldséggel, teljeskiőrlésű kenyérrel,</li>
      <li>valamilyen husis/tonhalas tészta.</li>
    </ul>
    <h4>Táplálkozás futás előtt.</h4>
    <p>És mi a helyzet futás előtt?</p>
    <p>Na szerintem ez már sokkal lényegesebb kérdés kezdők, újrakezdők és haladók esetében is. Hogy miért? Azért, hogy ne legyen futás közben hányingerünk, ne rázkódjón a hasunkban az étel/ital, illetve ne émelyegjünk az éhségtől. Fontos megtalálni azt az optimális IDŐT, ÉTELT és MENNYISÉGET, ami épp hozzád passzol.</p>
    <p>Ez egyénileg eltérő, de adok néhány ökölszabályt.</p>
    <p>Ha nincs erre időd, akkor a reggelid legyen:</p>
    <ul className="foodlist">
      <li>egy banán,</li>
      <li>egy gyors gyümölcs turmix</li>
      <li>egy marék aszalt gyümölcs.</li>
    </ul>
    <p>Ha van 1 órád reggeli után, akkor reggelizz pl.:</p>
    <ul className="foodlist">
      <li>pirítóst lekvárral/mézzel/zöldségkrémmel/felvágottal,</li>
      <li>banános turmixot,</li>
      <li>palacsintát.</li>
    </ul>
    <p>A lényeg az alapanyagok minőségén van:</p>
    <ul className="foodlist">
      <li>teljes kiőrlésűt válassz,</li>
      <li>ahol lehet, ott cukor helyett gyümölccsel/datolyával édesíts.</li>
    </ul>
    <h4>Futás ebéd után</h4>
    <p>Ebédre amúgy eheted a szokásos egészséges ebéded.</p>
    <p>Nem kell salátalevélen élni, nyugodtan ehetsz:</p>
    <ul className="foodlist">
      <li>tésztát,</li>
      <li>rizst,</li>
      <li>kuszkuszt,</li>
      <li>hajdinát,</li>
      <li>soványabb húst/halat.</li>
    </ul>
    <p>A hangsúly a mértéken és a minőségen van. A mérték pedig ott van, ahol még nem etted magad degeszre, de nem is éhesen állsz fel az asztal mellől, ami kb. egy normál tányér étel.</p>
    <p>Tehát az ebéd után teljen el legalább 2 óra a futásig, hogy ne legyél rosszul. Viszont 4 óránál több már nem ajánlott, mert akkor meg már újra éhes leszel, ami megintcsak nem OK.</p>
    <p>Akkor uzsizz valami könnyűt, egyszerűt, pl.:</p>
    <ul className="foodlist">
      <li>egy teljeskiőrlésű házi muffin vagy keksz,</li>
      <li>banánturmix, zöldturmix,</li>
      <li>kuszkuszt,</li>
      <li>hajdinát,</li>
      <li>bármi ami könnyen emészthető és kicsi adag.</li>
    </ul>
  </div>
);
 
export default Food;
