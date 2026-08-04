---
title: Algebra Basics
slug: algebra
order: 7
summary: >-
  The symbols, rules, and equation-solving techniques that everything else in
  this course is built on.
mathjax: true
sections:
  - id: scalars-and-variables
    title: Scalars and Variables
  - id: basic-arithmetic-operations
    title: Basic Arithmetic Operations
  - id: exponents-and-roots
    title: Exponents and Roots
  - id: linear-equations
    title: Linear Equations
  - id: functions
    title: Functions
---

Before working with vectors, tensors, and matrices, you need to be fluent
with plain algebra: single numbers, the rules for combining them, and how
to solve for an unknown. This chapter is a fast refresher, not a full
course — skip ahead if it's already familiar.

## Scalars and Variables

A **scalar** is a single numeric quantity — a magnitude with no direction,
such as a temperature, a mass, or a friction coefficient. We usually write
scalars as lowercase italic letters:

$$
a = 5, \quad t = 293\ \text{K}, \quad \mu = 0.15
$$

A **variable** is a symbol that stands in for a scalar we don't know yet,
or one that can change, such as the punch velocity \\(v\\) in a forming
simulation.

## Basic Arithmetic Operations

The four basic operations and the properties that let you rearrange them
safely:

| Property | Example |
|---|---|
| Commutative (add/mul) | \\(a + b = b + a\\), \\(ab = ba\\) |
| Associative (add/mul) | \\((a+b)+c = a+(b+c)\\) |
| Distributive | \\(a(b+c) = ab + ac\\) |
| Identity | \\(a + 0 = a\\), \\(a \cdot 1 = a\\) |
| Inverse | \\(a + (-a) = 0\\), \\(a \cdot \tfrac{1}{a} = 1,\ a \ne 0\\) |

These rules are the ones you rely on, often without noticing, whenever you
rearrange a formula.

## Exponents and Roots

Exponents describe repeated multiplication:

$$
a^n = \underbrace{a \times a \times \dots \times a}_{n \text{ times}}
$$

Key rules used constantly in engineering formulas:

$$
a^m a^n = a^{m+n}, \qquad \frac{a^m}{a^n} = a^{m-n}, \qquad
\left(a^m\right)^n = a^{mn}, \qquad a^{-n} = \frac{1}{a^n}
$$

A root is the inverse of a power. The square root of \\(a\\) is the value
\\(x\\) such that \\(x^2 = a\\):

$$
\sqrt{a} = a^{1/2}, \qquad \sqrt[n]{a} = a^{1/n}
$$

## Linear Equations

A linear equation in one unknown can always be reduced to the form
\\(ax + b = 0\\), solved by isolating \\(x\\):

$$
ax + b = 0 \quad \Longrightarrow \quad x = -\frac{b}{a}, \qquad a \ne 0
$$

**Worked example.** Solve \\(3x - 7 = 11\\):

$$
3x - 7 = 11 \;\Rightarrow\; 3x = 18 \;\Rightarrow\; x = 6
$$

The same idea extends to *systems* of linear equations with several
unknowns — this is exactly what matrices in [Chapter 5](
{{ '/chapters/matrix-operations/' | relative_url }}) are built to solve
efficiently.

## Functions

A **function** \\(f\\) maps every input \\(x\\) to exactly one output
\\(f(x)\\), written \\(f: x \mapsto f(x)\\). Two forms you'll meet
constantly in mechanics and materials modeling:

$$
f(x) = kx \quad \text{(linear, e.g. Hooke's law } \sigma = E\varepsilon\text{)}
$$

$$
f(x) = x^n \quad \text{(power law, e.g. strain hardening } \sigma = K\varepsilon^n\text{)}
$$

Understanding a function as "a rule that takes a number in and returns a
number out" is exactly the mental model you'll extend to vectors and
tensors, where the input and output are no longer single numbers.
