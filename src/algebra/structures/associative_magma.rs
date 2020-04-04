use super::Magma;

/// An associative magma.
///
/// # Laws
/// * Associativity: ∀`x` ∀`y` ∀`z` (`x.op(&y).op(&z)` = `x.op(&y.op(&z))`)
pub trait AssociativeMagma: Magma {}

impl AssociativeMagma for () {}

impl<T> AssociativeMagma for Option<T> where T: AssociativeMagma {}