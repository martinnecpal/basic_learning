---
title: Matice
slug: Matice
order: 2
summary: >-
  Tento dokument nadväzuje na časť o vektoroch v 3D a rozvíja pojem matice a lineárneho zobrazenia
  ako ďalší krok smerom k tenzorom napätia a deformácie.
mathjax: true
sections:
  - id: matrix-basics
    title: Matrix Basics
  - id: matrix-addition-and-multiplication
    title: Matrix Addition and Multiplication
  - id: transpose-and-symmetric-matrices
    title: Transpose and Symmetric Matrices
  - id: determinant-and-inverse
    title: Determinant and Inverse
  - id: eigenvalues-and-eigenvectors
    title: Eigenvalues and Eigenvectors
---
# Matice a lineárne zobrazenia v 3D – študijný text

Tento dokument nadväzuje na časť o vektoroch v 3D a rozvíja pojem matice a lineárneho zobrazenia
ako ďalší krok smerom k tenzorom napätia a deformácie.

## Ciele učenia

Po preštudovaní tejto kapitoly by si mal vedieť:

- čo je matica a čo je lineárne zobrazenie,
- ako sa násobí matica vektorom a čo to znamená geometricky,
- rozumieť rozdielu medzi škálovaním, rotáciou a šmykom,
- chápať pojem symetrickej matice, vlastného čísla a vlastného vektora,
- vidieť prepojenie na hlavné napätia a hlavné smery v mechanike kontinua.

---

## 1. Matica ako usporiadané pole čísel

Matica je usporiadané obdĺžnikové pole čísel zapísané v riadkoch a stĺpcoch.

Príklad 3×3 matice:

$$
A = \begin{pmatrix}
 a_{11} & a_{12} & a_{13} \\
 a_{21} & a_{22} & a_{23} \\
 a_{31} & a_{32} & a_{33}
\end{pmatrix}
$$

Každý prvok $$a_{ij}$$ je komponenta matice v $$i$$-tom riadku a $$j$$-tom stĺpci.

V mechanike kontinua sa matice používajú ako reprezentácie lineárnych zobrazení na vektorovom
priestore – typicky ako zápis tenzora (napätia, deformácie, tuhosti) v zvolenej báze.

---

## 2. Lineárne zobrazenie

Lineárne zobrazenie je funkcia medzi dvoma vektorovými priestormi $$T : V \to W$$,
ktorá spĺňa podmienku linearity:

$$
T(\alpha \mathbf{u} + \beta \mathbf{v}) = \alpha T(\mathbf{u}) + \beta T(\mathbf{v})
$$

pre všetky vektory $$\mathbf{u}, \mathbf{v}$$ a skaláre $$\alpha, \beta$$.

V našom kontexte pracujeme s $$V = W = \mathbb{R}^3$$.
Typickými príkladmi lineárnych zobrazení v 3D sú:

- rotácia okolo osi,
- škálovanie v jednom alebo viacerých smeroch,
- šmyk (shear).

Každé lineárne zobrazenie možno v zvolenej báze zapísať maticou $$A$$, takže píšeme jednoducho:

$$
T(\mathbf{x}) = A \mathbf{x}
$$

Matica je teda len konkrétny zápis operátora v zvolenej súradnicovej sústave.

---

## 3. Násobenie matice vektorom

Nech \(A\) je matica 3×3 a \(\mathbf{x} = (x_1, x_2, x_3)\) vektor.
Obraz \(\mathbf{y} = A\mathbf{x}\) je definovaný ako:

\[
\mathbf{y} =
\begin{pmatrix}
y_1 \\
y_2 \\
y_3
\end{pmatrix}
=
\begin{pmatrix}
 a_{11}x_1 + a_{12}x_2 + a_{13}x_3 \\
 a_{21}x_1 + a_{22}x_2 + a_{23}x_3 \\
 a_{31}x_1 + a_{32}x_2 + a_{33}x_3
\end{pmatrix}
\]

Každá zložka výsledného vektora je lineárna kombinácia zložiek pôvodného vektora.

### Príklad

Nech

\[
A =
\begin{pmatrix}
 2 & 0 & 0 \\
 0 & 1 & 0 \\
 0 & 0 & 1
\end{pmatrix},
\quad
\mathbf{x} = (1,2,3)
\]

Potom

\[
A\mathbf{x} =
\begin{pmatrix}
 2\cdot1 + 0\cdot2 + 0\cdot3 \\
 0\cdot1 + 1\cdot2 + 0\cdot3 \\
 0\cdot1 + 0\cdot2 + 1\cdot3
\end{pmatrix}
=
(2,2,3)
\]

Interpretácia: x-zložka vektora sa zdvojnásobila, y a z zostali rovnaké.

### Geometrický význam

Matica „zoberie“ vektor a zmení ho – natiahne, otočí, zdeformuje.
V mechanike to znamená napríklad:

- zmena posunu na lokálnu deformáciu (tenzor deformácie),
- z menu normály na trakčný vektor (tenzor napätia).

---

## 4. Typy lineárnych máp v 3D

### 4.1 Škálovanie (scaling)

Diagonálna matica

\[
D =
\begin{pmatrix}
 d_1 & 0 & 0 \\
 0 & d_2 & 0 \\
 0 & 0 & d_3
\end{pmatrix}
\]

vykoná škálovanie v jednotlivých osiach:

\[
D(x,y,z) = (d_1 x, d_2 y, d_3 z)
\]

Ak \(d_1, d_2, d_3 > 1\), priestor sa „nafúkne“, ak sú medzi 0 a 1, „stlačí“ sa.

### Príklad

Nech

\[
D = \mathrm{diag}(2,1,0.5),
\quad
\mathbf{x} = (1,2,2)
\]

Potom

\[
D\mathbf{x} = (2,2,1)
\]

X-zložka je dvojnásobná, y-sa nezmenila, z je polovičná.

### Prepojenie na mechaniku

Takéto škálovanie je analóg k materiálu, ktorý má rozdielnu tuhosť
v rôznych smeroch – natiahne sa viac v jednom smere, menej v inom.

---

### 4.2 Rotácia (rotation)

Rotačná matica okolo osi z:

\[
R_z(\varphi) =
\begin{pmatrix}
 \cos\varphi & -\sin\varphi & 0 \\
 \sin\varphi & \cos\varphi & 0 \\
 0 & 0 & 1
\end{pmatrix}
\]

Vlastnosti:

- zachová dĺžku vektora (ortogonálna matica),
- otočí vektor v rovine \(x-y\) o uhol \(\varphi\),
- z-zložka ostáva nezmenená.

Platí:

\[
R_z^T R_z = I, \quad R_z^{-1} = R_z^T
\]

### Príklad

Nech \(\varphi = 90^\circ\), \(\mathbf{x} = (1,0,0)\).
Potom

\[
R_z(90^\circ)\mathbf{x} = (0,1,0)
\]

---

### 4.3 Šmyk (shear)

Šmyková matica napríklad v rovine \(x-y\):

\[
H =
\begin{pmatrix}
 1 & k & 0 \\
 0 & 1 & 0 \\
 0 & 0 & 1
\end{pmatrix}
\]

Transformuje vektor

\[
H(x,y,z) = (x + k y, y, z)
\]

Ak máš mriežku štvorcov, po pôsobení šmyku sa zmení na kosoštvorce.
Dĺžky a uhly sa môžu meniť, ale „paralelné“ línie ostávajú paralelné.

---

## 5. Symetrická matica

Matica \(A\) je symetrická, ak platí

\[
A^T = A
\quad \text{t.j.} \quad
a_{ij} = a_{ji}
\]

Toto znamená, že prvky nad diagonálou a pod diagonálou sú rovnaké.

### Prečo sú symetrické matice dôležité

- Tenzor napätia (Cauchyho napätie) je symetrický – z rovnováhy momentov.
- Tenzor malých deformácií je symetrický – odfiltrovali sme rotáciu.

Na symetrické matice sa vzťahuje silný výsledok (Spektrálna veta):

- všetky vlastné čísla sú reálne,
- existuje ortogonálna báza vlastných vektorov (vlastné smery sú navzájom kolmé).

To umožňuje „diagonalizovať“ tenzor napätia – prejsť do sústavy, kde matica
má len diagonálne prvky a šmykové zložky sú nulové. Tieto diagonálne prvky sú
hlavné napätia.

---

## 6. Vlastné čísla a vlastné vektory

Vlastný vektor \(\mathbf{v} \neq \mathbf{0}\) a vlastné číslo \(\lambda\) matice \(A\) spĺňajú:

\[
A\mathbf{v} = \lambda \mathbf{v}
\]

Význam:

- vektor \(\mathbf{v}\) sa pri pôsobení \(A\) nemení smerovo,
- mení sa len jeho dĺžka (je naškálovaný faktorom \(\lambda\)).

Pri symetrických maticiach:

- všetky \(\lambda\) sú reálne,
- príslušné vlastné vektory sú navzájom kolmé,
- vlastné vektory tvoria bázu priestoru, takže každé napätie
  sa dá zapísať v „hlavnej“ báze.

### Prepojenie na tenzor napätia

Ak \(\boldsymbol{\sigma}\) je matica komponent tenzora napätia:

- jej vlastné čísla \(\sigma_1, \sigma_2, \sigma_3\) sú hlavné napätia,
- vlastné vektory \(\mathbf{n}_1, \mathbf{n}_2, \mathbf{n}_3\) sú hlavné smery,
- roviny kolmého na tieto smery sú hlavné roviny, na ktorých je šmykové napätie nulové.

---

## 7. Komplexný príklad – kombinácia škálovania a rotácie

Majme vektor \(\mathbf{x} = (1,2,0)\) a matice

\[
D = \mathrm{diag}(2,1,1), \quad
R_z(30^\circ) =
\begin{pmatrix}
 \cos 30^\circ & -\sin 30^\circ & 0 \\
 \sin 30^\circ & \cos 30^\circ & 0 \\
 0 & 0 & 1
\end{pmatrix}
\]

Definujme \(A = R_z(30^\circ) D\).

### Výpočet

1. Škálovanie:

\[
\mathbf{y} = D\mathbf{x} = (2\cdot1, 1\cdot2, 1\cdot0) = (2,2,0)
\]

2. Rotácia:

\[
\mathbf{z} = R_z(30^\circ)\mathbf{y}
\]

Po dosadení \(\cos 30^\circ = \sqrt{3}/2\), \(\sin 30^\circ = 1/2\):

\[
\mathbf{z} =
\begin{pmatrix}
 \sqrt{3}/2\cdot2 - 1/2\cdot2 \\
 1/2\cdot2 + \sqrt{3}/2\cdot2 \\
 0
\end{pmatrix}
=
\begin{pmatrix}
 \sqrt{3} - 1 \\
 1 + \sqrt{3} \\
 0
\end{pmatrix}
\]

Interpretácia:

- najprv sme vektor natiahli v smere x,
- potom sme celý výsledok otočili.

---

## 8. Komplexný príklad – symetrická matica

Uvažujme symetrickú maticu

\[
S =
\begin{pmatrix}
 4 & 1 & 0 \\
 1 & 3 & 0 \\
 0 & 0 & 2
\end{pmatrix}
\]

Úloha:

1. nájsť vlastné čísla \(\lambda_i\),
2. nájsť vlastné vektory \(\mathbf{v}_i\),
3. interpretovať výsledok.

### Postup (náčrt)

- vypočítaš \(\det(S - \lambda I) = 0\),
- dostaneš kubickú rovnicu v \(\lambda\), ktorá má tri reálne korene,
- pre každý \(\lambda_i\) riešiš systém \((S - \lambda_i I)\mathbf{v}_i = \mathbf{0}\),
- výsledné vlastné vektory sú navzájom kolmé.

Interpretácia v mechanike:

- smery \(\mathbf{v}_i\) sú „čisté“ smery ťahu/tlaku bez šmyku,
- hodnoty \(\lambda_i\) sú intenzity napätí v týchto smeroch.

---

## 9. Čo si bezpodmienečne pamätať

Zhrnutie kľúčových bodov:

1. Matica je reprezentácia lineárneho zobrazenia v zvolenej báze.
2. Násobenie matice vektorom \(A\mathbf{x}\) vždy dáva nový vektor – obraz pôvodného vektora.
3. Diagonálne matice reprezentujú škálovanie v jednotlivých osiach.
4. Rotačné matice sú ortogonálne (\(R^T R = I\)) a zachovávajú dĺžku vektora.
5. Symetrické matice majú reálne vlastné čísla a ortogonálne vlastné vektory.
6. Tenzor napätia v mechanike je práve takáto symetrická 3×3 matica;
   jeho vlastné čísla sú hlavné napätia, vlastné vektory sú hlavné smery.
7. Bez pochopenia týchto bodov je ďalšia práca s tenzormi (napätie, deformácia, konštitutívne zákony)
   oveľa ťažšia. Ak sú jasné, tenzorový aparát je len prirodzené rozšírenie týchto myšlienok.

---