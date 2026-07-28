---
title: Tensors
slug: tensors
order: 3
summary: >-
  The mathematical object that generalizes scalars and vectors, and the
  language stress, strain, and material behavior are written in.
mathjax: true
sections:
  - id: from-scalars-to-tensors
    title: From Scalars to Tensors
  - id: tensor-rank-and-notation
    title: Tensor Rank and Notation
  - id: index-notation-and-einstein-summation
    title: Index Notation and Einstein Summation
  - id: tensor-operations
    title: Tensor Operations
  - id: tensors-in-forming-simulations
    title: Tensors in Forming Simulations
---

Tensors show up the moment a physical quantity needs more than one
direction to describe it fully — stress at a point, for instance, depends
on *both* which face you're looking at *and* which direction the force on
that face points.

## From Scalars to Tensors

There's a natural ladder of complexity:

| Order (rank) | Object | Components (3D) | Example |
|---|---|---|---|
| 0 | Scalar | 1 | Temperature \\(T\\) |
| 1 | Vector | 3 | Force \\(\mathbf{F}\\) |
| 2 | Tensor | 9 | Stress \\(\boldsymbol{\sigma}\\) |
| 3+ | Higher-order tensor | \\(3^n\\) | Stiffness tensor (rank 4) |

A scalar is a rank-0 tensor, a vector is a rank-1 tensor — "tensor" is the
general word for all of these, distinguished by how many indices are
needed to label a component.

## Tensor Rank and Notation

A rank-2 tensor in 3D is naturally written as a 3×3 matrix, but the two
should not be confused: a matrix is just a grid of numbers, while a tensor
is a grid of numbers *that transforms in a specific way* when you rotate
your coordinate system. The Cauchy stress tensor is the standard example:

$$
\boldsymbol{\sigma} =
\begin{pmatrix}
\sigma_{xx} & \tau_{xy} & \tau_{xz} \\
\tau_{yx} & \sigma_{yy} & \tau_{yz} \\
\tau_{zx} & \tau_{zy} & \sigma_{zz}
\end{pmatrix}
$$

Each entry \\(\sigma_{ij}\\) is the force per unit area, in direction
\\(j\\), acting on the face whose normal points in direction \\(i\\).

## Index Notation and Einstein Summation

Writing every component out gets unwieldy fast, so tensor equations are
usually written with subscript indices, using the **Einstein summation
convention**: any index repeated in a term is summed over automatically,
and the summation symbol is dropped.

$$
\mathbf{a} \cdot \mathbf{b} = a_i b_i = \sum_{i=1}^{3} a_i b_i
$$

$$
c_i = A_{ij} b_j = \sum_{j=1}^{3} A_{ij} b_j
$$

This compact notation is what you'll see in most continuum mechanics and
FEM literature, so it's worth getting comfortable reading it early.

## Tensor Operations

The operations you already know from vectors extend naturally:

- **Addition**: component-wise, \\((A + B)_{ij} = A_{ij} + B_{ij}\\)
- **Scalar multiplication**: \\((kA)_{ij} = k A_{ij}\\)
- **Contraction**: summing over a repeated index reduces the rank, e.g.
  the *trace* of a rank-2 tensor, \\(\mathrm{tr}(A) = A_{ii}\\), is a
  scalar
- **Double contraction**: \\(A:B = A_{ij}B_{ij}\\), used to compute scalar
  quantities like strain energy density from stress and strain tensors

## Tensors in Forming Simulations

In metal forming simulation, tensors are not optional bookkeeping — they
*are* the physics:

- The **stress tensor** \\(\boldsymbol{\sigma}\\) and **strain tensor**
  \\(\boldsymbol{\varepsilon}\\) describe the internal state of the
  material at every point.
- The **stiffness tensor** (rank 4) relates them through the material's
  constitutive law, the tensor generalization of Hooke's law:
  \\(\sigma_{ij} = C_{ijkl}\,\varepsilon_{kl}\\).
- The **deformation gradient tensor** \\(\mathbf{F}\\) tracks how a small
  material element stretches and rotates as a die pushes into it.

Every one of these is built from the same vector and matrix operations
covered in the previous chapters — a rank-2 tensor is stored and
manipulated exactly like the [matrices](
{{ '/chapters/matrix-operations/' | relative_url }}) in the next chapter.
