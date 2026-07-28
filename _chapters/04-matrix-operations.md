---
title: Matrix Operations
slug: matrix-operations
order: 4
summary: >-
  The computational toolkit for solving systems of equations and
  manipulating tensors in practice.
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

A matrix is the practical, computational form that vectors and
rank-2 tensors take once you actually need to calculate with them. This
chapter covers the operations every simulation tool performs internally,
thousands of times per second.

## Matrix Basics

An \\(m \times n\\) matrix is a rectangular array of numbers with \\(m\\)
rows and \\(n\\) columns:

$$
A = \begin{pmatrix}
a_{11} & a_{12} & \cdots & a_{1n} \\
a_{21} & a_{22} & \cdots & a_{2n} \\
\vdots & \vdots & \ddots & \vdots \\
a_{m1} & a_{m2} & \cdots & a_{mn}
\end{pmatrix}
$$

Entry \\(a_{ij}\\) sits in row \\(i\\), column \\(j\\). A vector is just an
\\(n \times 1\\) matrix (a column) or a \\(1 \times n\\) matrix (a row).

## Matrix Addition and Multiplication

Two matrices of the *same shape* add component-wise, just like vectors:

$$
(A+B)_{ij} = a_{ij} + b_{ij}
$$

Matrix multiplication is less obvious: to compute \\(C = AB\\), each entry
is the dot product of a row of \\(A\\) with a column of \\(B\\):

$$
C_{ij} = \sum_{k=1}^{n} A_{ik} B_{kj}
$$

This requires the number of columns of \\(A\\) to match the number of rows
of \\(B\\), and — unlike scalar multiplication — matrix multiplication is
**not commutative**: in general \\(AB \ne BA\\).

**Worked example.**

$$
\begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}
\begin{pmatrix} 5 & 6 \\ 7 & 8 \end{pmatrix}
=
\begin{pmatrix} 1\cdot5+2\cdot7 & 1\cdot6+2\cdot8 \\ 3\cdot5+4\cdot7 & 3\cdot6+4\cdot8 \end{pmatrix}
=
\begin{pmatrix} 19 & 22 \\ 43 & 50 \end{pmatrix}
$$

## Transpose and Symmetric Matrices

The **transpose** \\(A^T\\) flips a matrix over its diagonal, swapping
rows and columns: \\((A^T)_{ij} = A_{ji}\\).

A matrix is **symmetric** if it equals its own transpose, \\(A = A^T\\).
The stress tensor from the previous chapter is symmetric
(\\(\tau_{xy} = \tau_{yx}\\)) as a direct consequence of moment
equilibrium on an infinitesimal element — this is why it only has 6
independent components instead of 9.

## Determinant and Inverse

The **determinant** of a square matrix is a single scalar that tells you,
among other things, whether the matrix is invertible (\\(\det A \ne 0\\))
and how it scales volume/area under the linear transformation it
represents. For a 2×2 matrix:

$$
\det\begin{pmatrix} a & b \\ c & d \end{pmatrix} = ad - bc
$$

The **inverse** \\(A^{-1}\\) is the matrix that undoes \\(A\\):
\\(AA^{-1} = A^{-1}A = I\\), where \\(I\\) is the identity matrix. It only
exists when \\(\det A \ne 0\\). Inverses are how systems of linear
equations are solved directly:

$$
A\mathbf{x} = \mathbf{b} \quad \Longrightarrow \quad \mathbf{x} = A^{-1}\mathbf{b}
$$

In practice, solvers rarely compute a full inverse — methods like LU or
Cholesky decomposition solve the system more efficiently — but the
inverse is the concept that explains *why* a unique solution exists.

## Eigenvalues and Eigenvectors

An **eigenvector** of a matrix \\(A\\) is a special direction that \\(A\\)
only stretches or shrinks, without rotating:

$$
A\mathbf{v} = \lambda \mathbf{v}
$$

Here \\(\lambda\\) is the corresponding **eigenvalue** — the scaling
factor along that direction. For the symmetric stress tensor, the
eigenvectors are the **principal directions** and the eigenvalues are the
**principal stresses**: the orientation at each point where the material
experiences pure tension/compression with no shear at all. Finding these
is one of the most common post-processing steps in any forming
simulation, used directly to predict failure and necking.

This closes the loop back to [Chapter 3](
{{ '/chapters/tensors/' | relative_url }}): every tensor operation used
in mechanics — rotating stress into a new coordinate system, contracting
it with a stiffness tensor, finding principal values — is executed as one
of the matrix operations on this page.
