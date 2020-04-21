use crate::algebra::structures::{AssociativeMagma, Magma};

#[derive(Clone, Copy, PartialEq, Eq, PartialOrd, Ord, Default, Hash, Debug)]
pub struct Last<T>(pub T);

impl<T> Magma for Last<T>
where
  T: Clone,
{
  fn op(&self, rhs: &Self) -> Self {
    Last(rhs.0.clone())
  }
}

impl<T> AssociativeMagma for Last<T> where T: Clone {}

#[cfg(test)]
mod tests {
  use super::*;

  #[test]
  fn test() {
    assert_eq!(Last(3).op(&Last(1)).op(&Last(4)), Last(4));
  }
}
