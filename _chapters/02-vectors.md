---
title: Vectors
slug: vectors
order: 2
summary: >-
  Quantities with both magnitude and direction — displacement, velocity,
  and force — and the operations you can do with them.
mathjax: true
sections:
  - id: what-is-a-vector
    title: What Is a Vector
  - id: vector-addition-and-scalar-multiplication
    title: Vector Addition and Scalar Multiplication
  - id: dot-product
    title: Dot Product
  - id: cross-product
    title: Cross Product
  - id: vector-norm-and-unit-vectors
    title: Vector Norm and Unit Vectors
---

Where a scalar is just "how much," a vector is "how much, in which
direction." Forces on a workpiece, tool velocities, and surface normals in
a forming simulation are all vectors.

## What Is a Vector

A vector in 3D space is an ordered triple of components along the
\\(x\\), \\(y\\), and \\(z\\) axes:

$$
\mathbf{v} = \begin{pmatrix} v_x \\ v_y \\ v_z \end{pmatrix}
$$

Geometrically it's an arrow: its length is the magnitude, and it points in
a specific direction. We write vectors in bold (\\(\mathbf{v}\\)) or with
an arrow (\\(\vec v\\)) to distinguish them from scalars.

## Vector Addition and Scalar Multiplication

Vectors add component-by-component (this is the parallelogram rule you
may have seen drawn geometrically):

$$
\mathbf{a} + \mathbf{b} =
\begin{pmatrix} a_x + b_x \\ a_y + b_y \\ a_z + b_z \end{pmatrix}
$$

Multiplying by a scalar \\(k\\) scales every component, stretching or
shrinking the vector (and flipping it if \\(k < 0\\)):

$$
k\mathbf{a} = \begin{pmatrix} k a_x \\ k a_y \\ k a_z \end{pmatrix}
$$

## Dot Product

The **dot product** (or scalar product) of two vectors returns a single
scalar and tells you how much two vectors point in the same direction:

$$
\mathbf{a} \cdot \mathbf{b} = a_x b_x + a_y b_y + a_z b_z
= |\mathbf{a}||\mathbf{b}|\cos\theta
$$

If \\(\mathbf{a} \cdot \mathbf{b} = 0\\) the vectors are perpendicular. The
dot product is how you compute, for example, the component of a contact
force acting along a surface normal.

## Cross Product

The **cross product** of two 3D vectors returns a new *vector*,
perpendicular to both, whose magnitude equals the area of the
parallelogram they span:

$$
\mathbf{a} \times \mathbf{b} =
\begin{pmatrix}
a_y b_z - a_z b_y \\
a_z b_x - a_x b_z \\
a_x b_y - a_y b_x
\end{pmatrix}, \qquad
|\mathbf{a} \times \mathbf{b}| = |\mathbf{a}||\mathbf{b}|\sin\theta
$$

This is how surface normals, moments, and torques are computed from two
edge vectors or a force and a lever arm.

## Vector Norm and Unit Vectors

The **norm** (length, magnitude) of a vector is found with the
Pythagorean theorem extended to three dimensions:

$$
|\mathbf{v}| = \sqrt{v_x^2 + v_y^2 + v_z^2}
$$

A **unit vector** has length 1 and represents pure direction. Any nonzero
vector can be normalized by dividing by its own norm:

$$
\hat{\mathbf{v}} = \frac{\mathbf{v}}{|\mathbf{v}|}
$$

Unit vectors like \\(\hat{\mathbf i}, \hat{\mathbf j}, \hat{\mathbf k}\\)
along the coordinate axes are the building blocks used to write any
vector as a linear combination:
\\(\mathbf{v} = v_x\hat{\mathbf i} + v_y\hat{\mathbf j} + v_z\hat{\mathbf k}\\).
Stacking several vectors together as rows or columns is exactly how a
[matrix](
{{ '/chapters/matrix-operations/' | relative_url }}) is formed, and
generalizing a vector to more directions and more indices is how you get a
[tensor](
{{ '/chapters/tensors/' | relative_url }}).
