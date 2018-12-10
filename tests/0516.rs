#[macro_use]
mod common;

test!("0516", |reader, writer| {
  use spella::algebra::{Associative, Invertible, Magma, Unital};
  use spella::io::Scanner;
  use spella::sequences::CumulativeSum;

  use std::cmp;
  use std::iter::FromIterator;

  #[derive(Clone, Copy, PartialEq, Eq, PartialOrd, Ord, Debug)]
  pub struct Sum(pub i32);

  impl Magma for Sum {
    fn op(&self, rhs: &Self) -> Self {
      Sum(self.0 + rhs.0)
    }
  }

  impl Associative for Sum {}

  impl Unital for Sum {
    fn identity() -> Self {
      Sum(0)
    }
  }

  impl Invertible for Sum {
    fn invert(&self) -> Self {
      Sum(-self.0)
    }
  }

  let mut scanner = Scanner::new(reader);

  macro_rules! scan {
    ($T:ty) => {
      scanner.next::<$T>()?.unwrap()
    };
  }

  loop {
    let n = scan!(usize);
    let k = scan!(usize);

    if n == 0 && k == 0 {
      break;
    }

    let mut a = Vec::with_capacity(n);

    for _ in 0..n {
      a.push(Sum(scan!(i32)));
    }

    let a = CumulativeSum::from_iter(a);
    let mut acc = Sum(i32::min_value());

    for i in 0..n - (k - 1) {
      acc = cmp::max(acc, a.fold(i..i + k));
    }

    writeln!(writer, "{}", acc.0)?;

    assert_eq!(CumulativeSum::from_iter((0..a.len()).map(|i| a.get(i))), a);
  }
});