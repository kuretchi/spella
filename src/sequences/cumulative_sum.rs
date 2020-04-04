//! A cumulative sum.

use super::*;
use crate::algebra::structures::{Group, Monoid};

use std::iter::FromIterator;
use std::ops::{Range, RangeTo};

/// A cumulative sum.
///
/// # Space complexity
/// O(n log σ)
#[derive(Clone, PartialEq, Eq, Debug, Hash)]
pub struct CumulativeSum<T> {
  vec: Vec<T>,
}

impl<M: Monoid> CumulativeSum<M> {
  /// Returns the length of the sequence.
  ///
  /// # Time complexity
  /// O(1)
  pub fn len(&self) -> usize {
    self.vec.len() - 1
  }

  /// Folds elements in the given prefix range with a monoid's binary operation.
  ///
  /// # Panics
  /// Panics if `index` is out of bounds.
  ///
  /// # Time complexity
  /// O(1)
  pub fn prefix_fold(&self, index: RangeTo<usize>) -> &M {
    assert_index_range_to(index, self.len());

    &self.vec[index.end]
  }
}

impl<G: Group> CumulativeSum<G> {
  /// Returns an element at the given index.
  ///
  /// # Panics
  /// Panics if `index` is out of bounds.
  ///
  /// # Time complexity
  /// O(1)
  pub fn get(&self, index: usize) -> G {
    assert_index(index, self.len());

    self.fold(index..index + 1)
  }

  /// Folds elements in the given range with a group's binary operation.
  ///
  /// # Panics
  /// Panics if `index` is out of bounds.
  ///
  /// # Time complexity
  /// O(1)
  pub fn fold(&self, index: Range<usize>) -> G {
    assert_index_range(&index, self.len());

    // [s, e) = [s, e - 1] = [0, s - 1] ^ -1 * [0, e - 1] = [0, s) ^ -1 * [0, e)
    let l = self.prefix_fold(..index.start).invert();
    let r = self.prefix_fold(..index.end);

    l.op(r)
  }
}

impl<M: Monoid> FromIterator<M> for CumulativeSum<M> {
  /// Creates a new `CumulativeSum` from an iterator.
  ///
  /// # Time complexity
  /// O(n)
  fn from_iter<I>(iter: I) -> Self
  where
    I: IntoIterator<Item = M>,
  {
    let iter = iter.into_iter();
    let mut vec = Vec::with_capacity(iter.size_hint().0);
    vec.push(M::identity());

    for (i, value) in iter.enumerate() {
      let sum = vec[i].op(&value);
      vec.push(sum);
    }

    vec.shrink_to_fit();
    CumulativeSum { vec: vec }
  }
}