use std::io::{self, BufRead};
use std::str::FromStr;

/// Wraps a reader and tokenizes its input.
///
/// Token separators are as follows:
/// * Space (U+0020) (` `)
/// * Line feed (U+000A) (`\n`)
/// * Carrige return (U+000D) + line feed (`\r\n`)
///
/// Empty tokens will be skipped since consecutive separators are always treated as one separator.
#[derive(Debug)]
pub struct Scanner<R> {
  reader: R,
  buf: String,
  pos: usize,
}

impl<R: BufRead> Scanner<R> {
  /// Creates a new `Scanner`.
  ///
  /// # Examples
  /// From stdin:
  /// ```
  /// use spella::io::Scanner;
  ///
  /// fn main() -> std::io::Result<()> {
  ///   let stdin = std::io::stdin();
  ///   let mut scanner = Scanner::new(stdin.lock());
  ///   Ok(())
  /// }
  /// ```
  pub fn new(reader: R) -> Self {
    Scanner {
      reader,
      buf: String::new(),
      pos: 0,
    }
  }

  /// Returns a next token splitted by whitespaces.
  ///
  /// # Examples
  /// ```
  /// use spella::io::Scanner;
  ///
  /// fn main() -> std::io::Result<()> {
  ///   let s = "12 34\n56 78";
  ///   let mut scanner = Scanner::new(s.as_bytes());
  ///
  ///   assert_eq!(scanner.next()?, "12");
  ///   assert_eq!(scanner.next()?, "34");
  ///   assert_eq!(scanner.next()?, "56");
  ///   assert_eq!(scanner.next()?, "78");
  ///   Ok(())
  /// }
  /// ```
  pub fn next(&mut self) -> io::Result<&str> {
    let start = loop {
      match self.rest().find(|c| c != ' ') {
        Some(i) => break i,
        None => self.fill_buf()?,
      }
    };
    self.consume(start);
    let len = self.rest().find(' ').unwrap_or_else(|| self.rest().len());
    Ok(self.consume(len))
  }

  /// Parses a next token splitted by whitespaces, and returns it.
  ///
  /// # Examples
  /// ```
  /// use spella::io::Scanner;
  ///
  /// fn main() -> std::io::Result<()> {
  ///   let s = "3.1415 9265";
  ///   let mut scanner = Scanner::new(s.as_bytes());
  ///
  ///   assert_eq!(scanner.parse_next::<f64>()?, Ok(3.1415));
  ///   assert_eq!(scanner.parse_next::<u64>()?, Ok(9265));
  ///   Ok(())
  /// }
  /// ```
  pub fn parse_next<T>(&mut self) -> io::Result<Result<T, T::Err>>
  where
    T: FromStr,
  {
    Ok(self.next()?.parse())
  }

  fn rest(&self) -> &str {
    &self.buf[self.pos..]
  }

  fn consume(&mut self, len: usize) -> &str {
    debug_assert!(len <= self.rest().len());
    let s = &self.buf[self.pos..][..len];
    self.pos += len;
    s
  }

  fn fill_buf(&mut self) -> io::Result<()> {
    self.buf.clear();
    self.pos = 0;
    let read = self.reader.read_line(&mut self.buf)?;
    if read == 0 {
      return Err(io::ErrorKind::UnexpectedEof.into());
    }
    if *self.buf.as_bytes().last().unwrap() == b'\n' {
      self.buf.pop();
      if self.buf.as_bytes().last().map_or(false, |&b| b == b'\r') {
        self.buf.pop();
      }
    }
    Ok(())
  }
}

#[cfg(test)]
mod tests {
  use super::*;

  #[test]
  fn test() {
    use crate::byte::ByteChar;

    let val0: f64 = 7.2973525693;
    let val1: &str = "abracadabra";
    let val2: i64 = -314;
    let val3: u64 = 0;
    let val4: ByteChar = ByteChar(b'a');

    let s = format!(
      " {} {}   \n\r\n  \n{}\r\n{} {}",
      val0, val1, val2, val3, val4
    );
    let mut scanner = Scanner::new(s.as_bytes());

    assert_eq!(scanner.parse_next::<f64>().unwrap(), Ok(val0));
    assert_eq!(scanner.parse_next::<String>().unwrap(), Ok(val1.to_owned()));
    assert_eq!(scanner.parse_next::<i64>().unwrap(), Ok(val2));
    assert_eq!(scanner.parse_next::<u64>().unwrap(), Ok(val3));
    assert_eq!(scanner.parse_next::<ByteChar>().unwrap(), Ok(val4));
    assert_eq!(
      scanner.parse_next::<i32>().unwrap_err().kind(),
      io::ErrorKind::UnexpectedEof
    );
  }
}
