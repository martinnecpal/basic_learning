---
title: Vektory
slug: Vektory
order: 6
summary: >-
  Tento dokument rozvíja obsah prezentácie *Vektory v 3D* do súvislého učebného textu. Je určený ako základ pre ďalšie témy, najmä matice, lineárne zobrazenia, tenzor napätia a tenzor deformácie.
mathjax: true
sections:
  - id: cieľ-štúdia
    title: Cieľ štúdia
  - id: prečo-začať-vektormi
    title: Prečo začať vektormi
  - id: definícia-vektora-v-3d
    title: Definícia vektora v 3D
  - id: kartézska-sústava-a-báza
    title: Kartézska sústava a báza
  - id: dĺžka-vektora
    title: Dĺžka vektora
  - id: jednotkový-vektor-a-smer
    title: Jednotkový vektor a smer
  - id: sčítanie-a-odčítanie-vektorov
    title: Sčítanie a odčítanie vektorov
  - id: násobenie-vektora-skalárom
    title: Násobenie vektora skalárom
  - id: skalárny-súčin
    title: Skalárny súčin
  - id: uhol-medzi-dvoma-vektormi
    title: Uhol medzi dvoma vektormi
  - id: vektorový-súčin
    title: Vektorový súčin
  - id: príklad-normála-na-rovinu
    title: "Príklad: normála na rovinu"
  - id: bod-polohový-vektor-a-vektor-medzi-bodmi
    title: Bod, polohový vektor a vektor medzi bodmi
  - id: komplexný-riešený-príklad
    title: Komplexný riešený príklad
  - id: typické-chyby
    title: Typické chyby
  - id: čo-je-potrebné-si-bezpodmienečne-pamätať
    title: Čo je potrebné si bezpodmienečne pamätať
  - id: odporúčaný-spôsob-učenia
    title: Odporúčaný spôsob učenia
---


# Vektory v 3D – študijný text a podrobný výklad



## Cieľ štúdia

Po zvládnutí tejto kapitoly má študent vedieť čítať a zapisovať 3D vektory, počítať ich dĺžku, smer, skalárny a vektorový súčin, chápať rovinu a normálu a pripraviť sa na tenzorový opis mechanických veličín.

Nestačí poznať iba vzorce. Potrebné je rozumieť aj geometrickému významu každého výpočtu, lebo v mechanike priestoru sa algebra a geometria stále dopĺňajú.

## Prečo začať vektormi

Vektory sú prvý prirodzený jazyk, ktorým sa opisuje fyzikálna realita v priestore. Sila má veľkosť aj smer, posun bodu v telese je vektor, normála roviny určuje orientáciu plochy a napätie na rovine sa určuje vzhľadom na smer normály.

Z matematického hľadiska je vektor usporiadaná trojica čísel a predstavuje spôsob, ako prepísať geometriu priestoru do algebraickej podoby. Bez vektorov sa nedá prirodzene prejsť na matice, vlastné smery ani na tenzory, takže každý ďalší krok mechaniky kontinua na nich priamo stojí.

## Definícia vektora v 3D

Vektor v priestore zapisujeme ako

$$
\mathbf{v}=(v_x,v_y,v_z)
$$

Má tri základné vlastnosti:

- veľkosť, teda ako „dlhý“ je,
- smer, teda kam ukazuje,
- orientáciu, teda odkiaľ kam je vedený.

Geometricky si vektor možno predstaviť ako orientovanú úsečku. Algebraicky ide o trojicu zložiek v smeroch osí x, y, z.

### Dôležité rozlíšenie: bod a vektor

Bod vyjadruje polohu v priestore, zatiaľ čo vektor vyjadruje zmenu polohy alebo smerovaný účinok. Toto rozlíšenie je nevyhnutné, pretože študenti si často zamieňajú súradnice bodu so zložkami vektora.

Príklad:

- bod: $$A=(2,1,4)$$,
- vektor: $$\mathbf{v}=(2,1,4)$$.

Zápis je podobný, ale význam je iný. V prvom prípade ide o miesto, v druhom o smerovaný objekt.

## Kartézska sústava a báza

Priestor opisujeme troma navzájom kolmými osami: x, y, z. V tejto sústave používame bázové vektory

$$
\mathbf{e}_x=(1,0,0),\qquad \mathbf{e}_y=(0,1,0),\qquad \mathbf{e}_z=(0,0,1)
$$

Každý vektor sa dá rozložiť do tejto bázy:

$$
\mathbf{v}=v_x\mathbf{e}_x+v_y\mathbf{e}_y+v_z\mathbf{e}_z
$$

Príklad:

$$
\mathbf{v}=(3,-2,5)=3\mathbf{e}_x-2\mathbf{e}_y+5\mathbf{e}_z
$$

Báza je možné chápať ako „abecedu priestoru“. Bez nej sa nedá žiadny vektor spoľahlivo zapísať číselne ani porovnávať s inými objektmi.

### Podrobnejší opis

Každá zložka vektora hovorí, koľko sa objekt posunie alebo pôsobí v danom smere osi. Kladná hodnota znamená smer podľa kladnej orientácie osi, záporná opačný smer a nulová zložka znamená, že v danom smere vektor nepôsobí.

## Dĺžka vektora

Veľkosť alebo norma vektora sa počíta vzťahom

$$
|\mathbf{v}|=\sqrt{v_x^2+v_y^2+v_z^2}
$$

Ide o priestorové rozšírenie Pytagorovej vety. Táto veličina vyjadruje skutočnú dĺžku vektora v priestore.

Príklad pre $$\mathbf{v}=(3,-2,6)$$:

$$
|\mathbf{v}|=\sqrt{3^2+(-2)^2+6^2}=\sqrt{9+4+36}=\sqrt{49}=7
$$

Teda veľkosť vektora je 7 jednotiek.

### Prečo je dĺžka taká dôležitá

Dĺžka je potrebná pri normalizácii vektora, pri určovaní uhla medzi vektormi a pri fyzikálnej interpretácii výslednice síl alebo posunov. Bez správnej práce s normou nie je možné korektne určiť smerové kosíny ani jednotkové normály.

## Jednotkový vektor a smer

Jednotkový vektor získame delením vektora jeho dĺžkou:

$$
\hat{\mathbf{v}}=\frac{\mathbf{v}}{|\mathbf{v}|}
$$

Takýto vektor má vždy dĺžku 1 a nesie iba informáciu o smere.

Pre $$\mathbf{v}=(3,-2,6)$$ a 
$${|\mathbf{v}|}=7$$ platí

$$
\hat{\mathbf{v}}=(3/7,-2/7,6/7)
$$

### Podrobný význam

Pri mnohých úlohách nie je dôležité, aký „silný“ je vektor, ale kam smeruje. Presne preto sa používa jednotkový vektor, napríklad pri normále roviny, kde treba jednoznačne určiť orientáciu plochy bez ohľadu na mierku obrázka alebo veľkosť pôvodného vektora.

### Kritické upozornenie

Nulový vektor sa nedá normalizovať, pretože jeho dĺžka je nulová a delenie nulou nie je dovolené.

[↗ Definícia vektora — otvoriť interaktívnu 3D vizualizáciu]({{ '/assets/interactive/vector-3d.html' | relative_url }}){:.interactive-cta target="_blank" rel="noopener"}

## Sčítanie a odčítanie vektorov

Sčítanie a odčítanie sa robí po zložkách:

$$
\mathbf{a}+\mathbf{b}=(a_x+b_x,a_y+b_y,a_z+b_z)
$$

$$
\mathbf{a}-\mathbf{b}=(a_x-b_x,a_y-b_y,a_z-b_z)
$$

Príklad pre \(\mathbf{a}=(2,1,-3)\) a \(\mathbf{b}=(4,-2,5)\):

$$
\mathbf{a}+\mathbf{b}=(6,-1,2)
$$

$$
\mathbf{a}-\mathbf{b}=(-2,3,-8)
$$

### Geometrický význam

Ak najprv vykoná objekt posun \(\mathbf{a}\) a potom posun \(\mathbf{b}\), výsledný posun je \(\mathbf{a}+\mathbf{b}\). To je dôvod, prečo je súčet vektorov prirodzeným modelom skladania účinkov v priestore.

### Ako si to predstaviť

Používa sa pravidlo trojuholníka alebo rovnobežníka. Keď sa začiatok druhého vektora priloží na koniec prvého, diagonála od začiatku prvého po koniec druhého dá výsledný vektor.

Tento princíp je základom pri:

- výslednici síl,
- kombinácii posunov,
- skladaní rýchlostí v jednoduchých modeloch.

[↗ Sčítanie a odčítanie vektorov — otvoriť interaktívnu 3D vizualizáciu]({{ '/assets/interactive/vector-addition-3d.html' | relative_url }}){:.interactive-cta target="_blank" rel="noopener"}

## Násobenie vektora skalárom

Ak \(\lambda\) je číslo, potom

$$
\lambda\mathbf{v}=(\lambda v_x,\lambda v_y,\lambda v_z)
$$

Ak \(\lambda>1\), vektor sa predĺži, ak \(0<\lambda<1\), skráti sa, a ak \(\lambda<0\), zmení orientáciu.

Príklad pre \(\mathbf{v}=(2,-1,4)\):

$$
3\mathbf{v}=(6,-3,12)
$$

$$
-\mathbf{v}=(-2,1,-4)
$$

### Fyzikálna interpretácia

Ak sa zdvojnásobí sila pri zachovaní smeru, ide o násobenie vektora skalárom. Pri zápornom násobku sa smer účinku obráti, čo môže predstavovať napríklad silu pôsobiacu presne opačne.

## Skalárny súčin

Skalárny súčin dvoch vektorov sa počíta vzťahom

$$
\mathbf{a}\cdot\mathbf{b}=a_xb_x+a_yb_y+a_zb_z
$$

Rovnaký vzťah možno zapísať aj geometricky:

$$
\mathbf{a}\cdot\mathbf{b}=|\mathbf{a}|\,|\mathbf{b}|\cos\theta
$$

Výsledok je číslo, nie vektor. Jeho význam spočíva v meraní toho, nakoľko majú vektory podobný smer.

Príklad pre \(\mathbf{a}=(1,2,3)\) a \(\mathbf{b}=(4,-1,2)\):

$$
\mathbf{a}\cdot\mathbf{b}=1\cdot4+2\cdot(-1)+3\cdot2=8
$$

### Interpretácia znamienka

- Ak je výsledok kladný, vektory zvierajú ostrý uhol.
- Ak je výsledok nulový, vektory sú kolmé.
- Ak je výsledok záporný, vektory zvierajú tupý uhol.

### Prečo je skalárny súčin zásadný

Skalárny súčin slúži na výpočet uhla medzi vektormi a na výpočet projekcie jedného vektora do smeru druhého. V mechanike má zásadný význam napríklad pri rozklade síl alebo pri určovaní normálovej zložky účinku na ploche.

## Uhol medzi dvoma vektormi

Ak sú známe dva vektory, ich uhol možno určiť zo vzťahu

$$
\cos\theta=\frac{\mathbf{a}\cdot\mathbf{b}}{|\mathbf{a}|\,|\mathbf{b}|}
$$

Na výpočet teda treba poznať skalárny súčin a dĺžky oboch vektorov.

Príklad pre \(\mathbf{a}=(1,0,0)\) a \(\mathbf{b}=(1,1,0)\):

$$
\cos\theta=\frac{1}{1\cdot\sqrt{2}}=\frac{1}{\sqrt{2}}
$$

Preto je

$$
\theta=45^\circ
$$

### Podrobný opis významu

Uhol medzi vektormi je dôležitý všade tam, kde sa porovnáva smer jedného javu so smerom druhého. Môže ísť o smer sily voči rovine, smer posunu voči normále alebo smer rýchlosti voči osi súradnicovej sústavy.

## Vektorový súčin

Vektorový súčin dvoch vektorov sa zapisuje ako

$$
\mathbf{a}\times\mathbf{b}=
\begin{vmatrix}
\mathbf{e}_x & \mathbf{e}_y & \mathbf{e}_z \\
a_x & a_y & a_z \\
b_x & b_y & b_z
\end{vmatrix}
$$

Výsledkom je nový vektor kolmý na oba vstupné vektory.

### Význam vektorového súčinu

Vektorový súčin:

- dáva normálu na rovinu,
- má veľkosť súvisiacu s obsahom rovnobežníka vytvoreného vektormi,
- nesie orientáciu určenú pravidlom pravej ruky.

### Pravidlo pravej ruky

Ak sa prsty pravej ruky ohýbajú od \(\mathbf{a}\) k \(\mathbf{b}\), vystretý palec ukazuje smer \(\mathbf{a}\times\mathbf{b}\). Tento smer sa zmení na opačný, ak sa zmení poradie vektorov.

To znamená:

$$
\mathbf{a}\times\mathbf{b}=-(\mathbf{b}\times\mathbf{a})
$$

## Príklad: normála na rovinu

Majme dva vektory ležiace v rovine:

$$
\mathbf{a}=(1,0,1),\qquad \mathbf{b}=(0,2,1)
$$

Normála na túto rovinu je

$$
\mathbf{n}=\mathbf{a}\times\mathbf{b}=(-2,-1,2)
$$

Normála je kolmá na oba vektory ležiace v rovine. Nemusí byť jednotková; ak je potrebný iba smer normály, treba ju ešte znormalizovať.

### Prečo je tento krok dôležitý

Pri neskoršom štúdiu mechaniky kontinua bude normála základným vstupom pre určenie napätia na ľubovoľne orientovanej ploche. Preto je schopnosť určiť normálu z dvoch smerov v rovine úplne kľúčová.

## Bod, polohový vektor a vektor medzi bodmi

Ak je bod v priestore daný súradnicami

$$
A=(x_A,y_A,z_A)
$$

potom jeho polohový vektor je vektor vedúci od počiatku do bodu \(A\).

Ak sú dané body \(A\) a \(B\), potom vektor medzi nimi je

$$
\overrightarrow{AB}=B-A
$$

Príklad pre \(A=(1,2,0)\) a \(B=(4,-1,5)\):

$$
\overrightarrow{AB}=(3,-3,5)
$$

### Praktický význam

Tento vzťah sa používa pri určovaní smeru hrany, posunu bodu, smeru segmentu v telese alebo pri stavbe vektorov ležiacich v jednej rovine.

## Komplexný riešený príklad

Majme body

$$
A=(1,0,2),\qquad B=(4,2,3),\qquad C=(2,5,1)
$$

Cieľ:

1. určiť \(\overrightarrow{AB}\) a \(\overrightarrow{AC}\),
2. určiť ich dĺžky,
3. vypočítať skalárny súčin a uhol medzi nimi,
4. určiť normálu na rovinu \(ABC\).

### Krok 1: vektory medzi bodmi

$$
\overrightarrow{AB}=B-A=(3,2,1)
$$

$$
\overrightarrow{AC}=C-A=(1,5,-1)
$$

### Krok 2: ich dĺžky

$$
|AB|=\sqrt{3^2+2^2+1^2}=\sqrt{14}
$$

$$
|AC|=\sqrt{1^2+5^2+(-1)^2}=\sqrt{27}
$$

### Krok 3: skalárny súčin

$$
AB\cdot AC=3\cdot1+2\cdot5+1\cdot(-1)=12
$$

### Krok 4: uhol medzi vektormi

$$
\cos\theta=\frac{12}{\sqrt{14}\sqrt{27}}
$$

$$
\theta\approx 51.9^\circ
$$

### Krok 5: normála na rovinu

$$
\mathbf{n}=AB\times AC=(-7,4,13)
$$

### Prečo je tento príklad výborný

V jednej úlohe sa spojí rozdiel bodov, dĺžka vektora, skalárny súčin, výpočet uhla aj vektorový súčin. Presne tento typ úloh pripravuje študenta na priestorovú mechaniku a neskôr na tenzorové veličiny.

## Typické chyby

Najčastejšie problémy pri tejto téme sú tieto:

- zamieňanie bodu a vektora,
- zabudnutie, že dĺžka je vždy nezáporná,
- očakávanie vektorového výsledku pri skalárnom súčine,
- zámena poradia pri vektorovom súčine,
- pokus normalizovať nulový vektor,
- zabudnutie deliť normami pri výpočte uhla,
- mechanické počítanie bez náčrtu.

### Ako sa chybám vyhnúť

Pri každom príklade pomáha jednoduchý náčrt. Obrázok nie je dekorácia, ale kontrola, či algebraický výsledok dáva geometrický zmysel.

## Čo je potrebné si bezpodmienečne pamätať

Nasledujúce vzťahy treba ovládať naspamäť a vedieť ich použiť bez váhania:

1. $$\mathbf{v}=(v_x,v_y,v_z)$$
2. $$|\mathbf{v}|=\sqrt{v_x^2+v_y^2+v_z^2}$$
3. $$\hat{\mathbf{v}}=\mathbf{v}/|\mathbf{v}|$$
4. $$\mathbf{a}\cdot\mathbf{b}=a_xb_x+a_yb_y+a_zb_z$$
5. $$\cos\theta=\dfrac{\mathbf{a}\cdot\mathbf{b}}{|\mathbf{a}||\mathbf{b}|}$$
6. $$\mathbf{a}\times\mathbf{b}$$ dá normálu na rovinu
7. vektor medzi bodmi je rozdiel bodov
8. pri 3D úlohách je náčrt takmer nevyhnutný.

## Odporúčaný spôsob učenia

Najefektívnejší postup je tento:

1. Najprv pochopiť význam každej operácie.
2. Potom sa naučiť presný zápis vzorca.
3. Následne prepočítať viacero krátkych príkladov ručne.
4. Potom riešiť kombinované úlohy s bodmi, uhlom a normálou.
5. Až nakoniec prejsť na matice a lineárne zobrazenia.

Bez pevného zvládnutia vektorov v 3D bývajú ďalšie kapitoly z mechaniky a tenzorovej matematiky zbytočne ťažké. Naopak, keď je tento základ pevný, prechod na tenzor napätia a deformácie je oveľa prirodzenejší.
