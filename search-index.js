var searchIndex = JSON.parse('{\
"k7lib":{"doc":"My own competitive programming library for Rust.","i":[[0,"algebra","k7lib","Algebra.",null,null],[0,"structures","k7lib::algebra","Algebraic structures.",null,null],[8,"CommutativeSemigroup","k7lib::algebra::structures","A commutative semigroup.",null,null],[8,"CommutativeSemiring","","A commutative semiring.",null,null],[8,"Group","","A group.",null,null],[10,"invert","","Returns an inverse element.",0,[[]]],[11,"inverse_op","","Returns <code>self.op(&rhs.invert())</code>.",0,[[]]],[11,"inverse_op_assign_right","","Assigns <code>self.inverse_op(rhs)</code> to <code>self</code>.",0,[[]]],[11,"inverse_op_assign_left","","Assigns <code>lhs.inverse_op(self)</code> to <code>self</code>.",0,[[]]],[8,"Monoid","","A monoid.",null,null],[10,"identity","","Returns an identity element.",1,[[]]],[8,"Ring","","A ring.",null,null],[10,"neg","","Returns an additive inverse.",2,[[]]],[8,"Semigroup","","A semigroup.",null,null],[10,"op","","Performs a binary operation.",3,[[]]],[11,"op_assign_right","","Assigns <code>self.op(rhs)</code> to <code>self</code>.",3,[[]]],[11,"op_assign_left","","Assigns <code>lhs.op(self)</code> to <code>self</code>.",3,[[]]],[8,"Semiring","","A semiring.",null,null],[10,"add","","Performs addition.",4,[[]]],[10,"mul","","Performs multiplication.",4,[[]]],[10,"zero","","Returns the additive identity.",4,[[]]],[10,"one","","Returns the multiplicative identity.",4,[[]]],[3,"All","","A monoid under conjunction <code>&&</code>.",null,null],[12,"0","","",5,null],[3,"Any","","A monoid under disjunction <code>||</code>.",null,null],[12,"0","","",6,null],[3,"Concat","","A monoid under string concatenation.",null,null],[12,"0","","",7,null],[3,"First","","A left zero semigroup.",null,null],[12,"0","","",8,null],[3,"Last","","A right zero semigroup.",null,null],[12,"0","","",9,null],[3,"Max","","A monoid that returns the maximum value.",null,null],[12,"0","","",10,null],[3,"Min","","A monoid that returns the minimum value.",null,null],[12,"0","","",11,null],[3,"Product","","A monoid under semiring multiplication.",null,null],[12,"0","","",12,null],[3,"Sum","","A commutative monoid under semiring addition.",null,null],[12,"0","","",13,null],[3,"ModInt","k7lib::algebra","A ring of integers modulo $n$ ($\\\\mathbb{Z}/n\\\\mathbb{Z}$).",null,null],[5,"pow","","Raises <code>x</code> to the power of <code>n</code>, using exponentiation by …",null,[[]]],[0,"byte","k7lib","Single-byte character/string types.",null,null],[3,"ByteChar","k7lib::byte","A single-byte character.",null,null],[12,"0","","",14,null],[3,"ParseByteCharError","","An error which can be returned when parsing a <code>ByteChar</code>.",null,null],[0,"cmp","k7lib","Extensions for ordering and comparison.",null,null],[8,"Bounded","k7lib::cmp","Trait for types that have min/max values.",null,null],[18,"MIN","","",15,null],[18,"MAX","","",15,null],[0,"constant","k7lib","Utilities related to constant values.",null,null],[8,"Constant","k7lib::constant","A trait for marker types that represents a constant value.",null,null],[10,"get","","Returns the constant value.",16,[[]]],[0,"disjoint_sets","k7lib","Disjoint-set data structures (a.k.a. union-find data …",null,null],[3,"QuickFind","k7lib::disjoint_sets","A disjoint-set data structure based on the weighted …",null,null],[3,"QuickUnion","","A disjoint-set data structure based on the weighted …",null,null],[0,"io","k7lib","Utilities related to I/O.",null,null],[5,"run","k7lib::io","",null,[[["option",4]],["result",6]]],[3,"Scanner","","Wraps a reader and tokenizes its input.",null,null],[0,"num","k7lib","Utilities related to numeric types.",null,null],[0,"primitive","k7lib::num","Traits for primitive numeric types.",null,null],[8,"Int","k7lib::num::primitive","A trait for primitive integer types.",null,null],[18,"ZERO","","The constant value <code>0</code>.",17,null],[18,"ONE","","The constant value <code>1</code>.",17,null],[10,"from_str_radix","","",17,[[],[["result",4],["parseinterror",3]]]],[10,"count_ones","","",17,[[]]],[10,"count_zeros","","",17,[[]]],[10,"leading_zeros","","",17,[[]]],[10,"trailing_zeros","","",17,[[]]],[10,"rotate_left","","",17,[[]]],[10,"rotate_right","","",17,[[]]],[10,"swap_bytes","","",17,[[]]],[10,"reverse_bits","","",17,[[]]],[10,"checked_add","","",17,[[],["option",4]]],[10,"checked_sub","","",17,[[],["option",4]]],[10,"checked_mul","","",17,[[],["option",4]]],[10,"checked_div","","",17,[[],["option",4]]],[10,"checked_div_euclid","","",17,[[],["option",4]]],[10,"checked_rem","","",17,[[],["option",4]]],[10,"checked_rem_euclid","","",17,[[],["option",4]]],[10,"checked_neg","","",17,[[],["option",4]]],[10,"checked_shl","","",17,[[],["option",4]]],[10,"checked_shr","","",17,[[],["option",4]]],[10,"checked_pow","","",17,[[],["option",4]]],[10,"saturating_add","","",17,[[]]],[10,"saturating_sub","","",17,[[]]],[10,"saturating_mul","","",17,[[]]],[10,"saturating_pow","","",17,[[]]],[10,"wrapping_add","","",17,[[]]],[10,"wrapping_sub","","",17,[[]]],[10,"wrapping_mul","","",17,[[]]],[10,"wrapping_div","","",17,[[]]],[10,"wrapping_div_euclid","","",17,[[]]],[10,"wrapping_rem","","",17,[[]]],[10,"wrapping_rem_euclid","","",17,[[]]],[10,"wrapping_neg","","",17,[[]]],[10,"wrapping_shl","","",17,[[]]],[10,"wrapping_shr","","",17,[[]]],[10,"wrapping_pow","","",17,[[]]],[10,"overflowing_add","","",17,[[]]],[10,"overflowing_sub","","",17,[[]]],[10,"overflowing_mul","","",17,[[]]],[10,"overflowing_div","","",17,[[]]],[10,"overflowing_div_euclid","","",17,[[]]],[10,"overflowing_rem","","",17,[[]]],[10,"overflowing_rem_euclid","","",17,[[]]],[10,"overflowing_neg","","",17,[[]]],[10,"overflowing_shl","","",17,[[]]],[10,"overflowing_shr","","",17,[[]]],[10,"overflowing_pow","","",17,[[]]],[10,"pow","","",17,[[]]],[10,"div_euclid","","",17,[[]]],[10,"rem_euclid","","",17,[[]]],[8,"SignedInt","","A trait for primitive signed integer types.",null,null],[10,"checked_abs","","",18,[[],["option",4]]],[10,"wrapping_abs","","",18,[[]]],[10,"overflowing_abs","","",18,[[]]],[10,"abs","","",18,[[]]],[10,"signum","","",18,[[]]],[10,"is_positive","","",18,[[]]],[10,"is_negative","","",18,[[]]],[8,"UnsignedInt","","A trait for primitive unsigned integer types.",null,null],[10,"is_power_of_two","","",19,[[]]],[10,"next_power_of_two","","",19,[[]]],[10,"checked_next_power_of_two","","",19,[[],["option",4]]],[5,"div_ceil","k7lib::num","Returns $\\\\lceil x / y \\\\rceil$, the smallest integer …",null,[[]]],[5,"div_floor","","Returns $\\\\lfloor x / y \\\\rfloor$, the greatest integer …",null,[[]]],[5,"gcd","","Returns the greatest common divisor.",null,[[]]],[5,"lcm","","Returns the least common multiple.",null,[[]]],[0,"sequences","k7lib","Data structures representing a sequence.",null,null],[0,"cumulative_sum","k7lib::sequences","A cumulative sum.",null,null],[3,"CumulativeSum","k7lib::sequences::cumulative_sum","A cumulative sum.",null,null],[11,"new","","Creates an empty sequence.",20,[[]]],[11,"push","","Appends an element to the back of the sequence.",20,[[]]],[11,"len","","Returns the length of the sequence.",20,[[]]],[11,"prefix_sum","","Folds elements in the given prefix range with a monoid\'s …",20,[[["rangeto",3]]]],[11,"point_get","","Returns an element at the given index.",20,[[]]],[11,"range_sum","","Folds elements in the given range with a group\'s binary …",20,[[["range",3]]]],[0,"fenwick_tree","k7lib::sequences","A fenwick tree (a.k.a. binary indexed tree).",null,null],[3,"FenwickTree","k7lib::sequences::fenwick_tree","A fenwick tree (a.k.a. binary indexed tree).",null,null],[11,"new","","Creates a new <code>FenwickTree</code> of the given length, filled …",21,[[]]],[11,"len","","Returns the length of the sequence.",21,[[]]],[11,"point_append","","Append the given value to an element at the given index …",21,[[]]],[11,"prefix_sum","","Folds elements in the given prefix range with a monoid\'s …",21,[[["rangeto",3]]]],[11,"point_get","","Returns an element at the given index.",21,[[]]],[11,"point_set","","Replaces an element at the given index with the given …",21,[[]]],[11,"range_sum","","Folds elements in the given range with a group\'s binary …",21,[[["range",3]]]],[0,"segment_tree","k7lib::sequences","A segment tree.",null,null],[3,"SegmentTree","k7lib::sequences::segment_tree","A segment tree.",null,null],[11,"new","","Creates a new <code>SegmentTree</code> of the given length, filled …",22,[[]]],[11,"len","","Returns the length of the sequence.",22,[[]]],[11,"point_get","","Returns an element at the given index.",22,[[]]],[11,"point_get_mut","","Returns a mutable reference to an element at the given …",22,[[],["pointgetmut",3]]],[11,"range_sum","","Folds elements in the given range with a monoid\'s binary …",22,[[["range",3]]]],[3,"PointGetMut","","Structure wrapping a mutable refenrece to an element on […",null,null],[11,"update","","Updates the value using the given function.",23,[[]]],[0,"string","k7lib","Algorithms and data structures for processing strings.",null,null],[5,"inversion_number","k7lib::string","Calculates the inversion number.",null,[[]]],[5,"next_permutation","","Permutes the slice into the next greater permutation in …",null,[[]]],[5,"next_permutation_by","","Permutes the slice into the next greater permutation in …",null,[[]]],[5,"next_permutation_by_key","","Permutes the slice into the next greater permutation in …",null,[[]]],[5,"run_length_encode","","Creates a run-length encoded iterator of the given …",null,[[],["runlengthencode",3]]],[3,"RunLengthEncode","","An iterator created by [<code>run_length_encode</code>].",null,null],[14,"constant","k7lib","Creates a marker type that represents a constant value.",null,null],[11,"from","k7lib::algebra","",24,[[]]],[11,"into","","",24,[[]]],[11,"to_owned","","",24,[[]]],[11,"clone_into","","",24,[[]]],[11,"to_string","","",24,[[],["string",3]]],[11,"borrow","","",24,[[]]],[11,"borrow_mut","","",24,[[]]],[11,"try_from","","",24,[[],["result",4]]],[11,"try_into","","",24,[[],["result",4]]],[11,"type_id","","",24,[[],["typeid",3]]],[11,"from","k7lib::algebra::structures","",5,[[]]],[11,"into","","",5,[[]]],[11,"to_owned","","",5,[[]]],[11,"clone_into","","",5,[[]]],[11,"borrow","","",5,[[]]],[11,"borrow_mut","","",5,[[]]],[11,"try_from","","",5,[[],["result",4]]],[11,"try_into","","",5,[[],["result",4]]],[11,"type_id","","",5,[[],["typeid",3]]],[11,"from","","",6,[[]]],[11,"into","","",6,[[]]],[11,"to_owned","","",6,[[]]],[11,"clone_into","","",6,[[]]],[11,"borrow","","",6,[[]]],[11,"borrow_mut","","",6,[[]]],[11,"try_from","","",6,[[],["result",4]]],[11,"try_into","","",6,[[],["result",4]]],[11,"type_id","","",6,[[],["typeid",3]]],[11,"from","","",7,[[]]],[11,"into","","",7,[[]]],[11,"to_owned","","",7,[[]]],[11,"clone_into","","",7,[[]]],[11,"borrow","","",7,[[]]],[11,"borrow_mut","","",7,[[]]],[11,"try_from","","",7,[[],["result",4]]],[11,"try_into","","",7,[[],["result",4]]],[11,"type_id","","",7,[[],["typeid",3]]],[11,"from","","",8,[[]]],[11,"into","","",8,[[]]],[11,"to_owned","","",8,[[]]],[11,"clone_into","","",8,[[]]],[11,"borrow","","",8,[[]]],[11,"borrow_mut","","",8,[[]]],[11,"try_from","","",8,[[],["result",4]]],[11,"try_into","","",8,[[],["result",4]]],[11,"type_id","","",8,[[],["typeid",3]]],[11,"from","","",9,[[]]],[11,"into","","",9,[[]]],[11,"to_owned","","",9,[[]]],[11,"clone_into","","",9,[[]]],[11,"borrow","","",9,[[]]],[11,"borrow_mut","","",9,[[]]],[11,"try_from","","",9,[[],["result",4]]],[11,"try_into","","",9,[[],["result",4]]],[11,"type_id","","",9,[[],["typeid",3]]],[11,"from","","",10,[[]]],[11,"into","","",10,[[]]],[11,"to_owned","","",10,[[]]],[11,"clone_into","","",10,[[]]],[11,"borrow","","",10,[[]]],[11,"borrow_mut","","",10,[[]]],[11,"try_from","","",10,[[],["result",4]]],[11,"try_into","","",10,[[],["result",4]]],[11,"type_id","","",10,[[],["typeid",3]]],[11,"from","","",11,[[]]],[11,"into","","",11,[[]]],[11,"to_owned","","",11,[[]]],[11,"clone_into","","",11,[[]]],[11,"borrow","","",11,[[]]],[11,"borrow_mut","","",11,[[]]],[11,"try_from","","",11,[[],["result",4]]],[11,"try_into","","",11,[[],["result",4]]],[11,"type_id","","",11,[[],["typeid",3]]],[11,"from","","",12,[[]]],[11,"into","","",12,[[]]],[11,"to_owned","","",12,[[]]],[11,"clone_into","","",12,[[]]],[11,"borrow","","",12,[[]]],[11,"borrow_mut","","",12,[[]]],[11,"try_from","","",12,[[],["result",4]]],[11,"try_into","","",12,[[],["result",4]]],[11,"type_id","","",12,[[],["typeid",3]]],[11,"from","","",13,[[]]],[11,"into","","",13,[[]]],[11,"to_owned","","",13,[[]]],[11,"clone_into","","",13,[[]]],[11,"borrow","","",13,[[]]],[11,"borrow_mut","","",13,[[]]],[11,"try_from","","",13,[[],["result",4]]],[11,"try_into","","",13,[[],["result",4]]],[11,"type_id","","",13,[[],["typeid",3]]],[11,"from","k7lib::byte","",14,[[]]],[11,"into","","",14,[[]]],[11,"to_owned","","",14,[[]]],[11,"clone_into","","",14,[[]]],[11,"to_string","","",14,[[],["string",3]]],[11,"borrow","","",14,[[]]],[11,"borrow_mut","","",14,[[]]],[11,"try_from","","",14,[[],["result",4]]],[11,"try_into","","",14,[[],["result",4]]],[11,"type_id","","",14,[[],["typeid",3]]],[11,"from","","",25,[[]]],[11,"into","","",25,[[]]],[11,"to_owned","","",25,[[]]],[11,"clone_into","","",25,[[]]],[11,"to_string","","",25,[[],["string",3]]],[11,"borrow","","",25,[[]]],[11,"borrow_mut","","",25,[[]]],[11,"try_from","","",25,[[],["result",4]]],[11,"try_into","","",25,[[],["result",4]]],[11,"type_id","","",25,[[],["typeid",3]]],[11,"from","k7lib::disjoint_sets","",26,[[]]],[11,"into","","",26,[[]]],[11,"to_owned","","",26,[[]]],[11,"clone_into","","",26,[[]]],[11,"borrow","","",26,[[]]],[11,"borrow_mut","","",26,[[]]],[11,"try_from","","",26,[[],["result",4]]],[11,"try_into","","",26,[[],["result",4]]],[11,"type_id","","",26,[[],["typeid",3]]],[11,"from","","",27,[[]]],[11,"into","","",27,[[]]],[11,"to_owned","","",27,[[]]],[11,"clone_into","","",27,[[]]],[11,"borrow","","",27,[[]]],[11,"borrow_mut","","",27,[[]]],[11,"try_from","","",27,[[],["result",4]]],[11,"try_into","","",27,[[],["result",4]]],[11,"type_id","","",27,[[],["typeid",3]]],[11,"from","k7lib::io","",28,[[]]],[11,"into","","",28,[[]]],[11,"borrow","","",28,[[]]],[11,"borrow_mut","","",28,[[]]],[11,"try_from","","",28,[[],["result",4]]],[11,"try_into","","",28,[[],["result",4]]],[11,"type_id","","",28,[[],["typeid",3]]],[11,"from","k7lib::sequences::cumulative_sum","",20,[[]]],[11,"into","","",20,[[]]],[11,"to_owned","","",20,[[]]],[11,"clone_into","","",20,[[]]],[11,"borrow","","",20,[[]]],[11,"borrow_mut","","",20,[[]]],[11,"try_from","","",20,[[],["result",4]]],[11,"try_into","","",20,[[],["result",4]]],[11,"type_id","","",20,[[],["typeid",3]]],[11,"from","k7lib::sequences::fenwick_tree","",21,[[]]],[11,"into","","",21,[[]]],[11,"to_owned","","",21,[[]]],[11,"clone_into","","",21,[[]]],[11,"borrow","","",21,[[]]],[11,"borrow_mut","","",21,[[]]],[11,"try_from","","",21,[[],["result",4]]],[11,"try_into","","",21,[[],["result",4]]],[11,"type_id","","",21,[[],["typeid",3]]],[11,"from","k7lib::sequences::segment_tree","",22,[[]]],[11,"into","","",22,[[]]],[11,"to_owned","","",22,[[]]],[11,"clone_into","","",22,[[]]],[11,"borrow","","",22,[[]]],[11,"borrow_mut","","",22,[[]]],[11,"try_from","","",22,[[],["result",4]]],[11,"try_into","","",22,[[],["result",4]]],[11,"type_id","","",22,[[],["typeid",3]]],[11,"from","","",23,[[]]],[11,"into","","",23,[[]]],[11,"borrow","","",23,[[]]],[11,"borrow_mut","","",23,[[]]],[11,"try_from","","",23,[[],["result",4]]],[11,"try_into","","",23,[[],["result",4]]],[11,"type_id","","",23,[[],["typeid",3]]],[11,"from","k7lib::string","",29,[[]]],[11,"into","","",29,[[]]],[11,"into_iter","","",29,[[]]],[11,"to_owned","","",29,[[]]],[11,"clone_into","","",29,[[]]],[11,"borrow","","",29,[[]]],[11,"borrow_mut","","",29,[[]]],[11,"try_from","","",29,[[],["result",4]]],[11,"try_into","","",29,[[],["result",4]]],[11,"type_id","","",29,[[],["typeid",3]]],[11,"invert","k7lib::algebra::structures","",13,[[]]],[11,"identity","","",5,[[]]],[11,"identity","","",6,[[]]],[11,"identity","","",7,[[]]],[11,"identity","","",10,[[]]],[11,"identity","","",11,[[]]],[11,"identity","","",12,[[]]],[11,"identity","","",13,[[]]],[11,"neg","k7lib::algebra","",24,[[]]],[11,"op","k7lib::algebra::structures","",5,[[]]],[11,"op","","",6,[[]]],[11,"op","","",7,[[]]],[11,"op","","",8,[[]]],[11,"op","","",9,[[]]],[11,"op","","",10,[[]]],[11,"op","","",11,[[]]],[11,"op","","",12,[[]]],[11,"op","","",13,[[]]],[11,"add","k7lib::algebra","",24,[[]]],[11,"mul","","",24,[[]]],[11,"zero","","",24,[[]]],[11,"one","","",24,[[]]],[11,"drop","k7lib::sequences::segment_tree","",23,[[]]],[11,"from","k7lib::algebra","",24,[[]]],[11,"from","k7lib::sequences::fenwick_tree","Creates a new <code>FenwickTree</code> from a <code>Vec</code>.",21,[[["vec",3]]]],[11,"next","k7lib::string","",29,[[],["option",4]]],[11,"size_hint","","",29,[[]]],[11,"clone","k7lib::algebra","",24,[[]]],[11,"clone","k7lib::algebra::structures","",5,[[],["all",3]]],[11,"clone","","",6,[[],["any",3]]],[11,"clone","","",7,[[],["concat",3]]],[11,"clone","","",8,[[],["first",3]]],[11,"clone","","",9,[[],["last",3]]],[11,"clone","","",10,[[],["max",3]]],[11,"clone","","",11,[[],["min",3]]],[11,"clone","","",12,[[],["product",3]]],[11,"clone","","",13,[[],["sum",3]]],[11,"clone","k7lib::byte","",14,[[],["bytechar",3]]],[11,"clone","","",25,[[],["parsebytecharerror",3]]],[11,"clone","k7lib::disjoint_sets","",26,[[],["quickfind",3]]],[11,"clone","","",27,[[],["quickunion",3]]],[11,"clone","k7lib::sequences::cumulative_sum","",20,[[],["cumulativesum",3]]],[11,"clone","k7lib::sequences::fenwick_tree","",21,[[],["fenwicktree",3]]],[11,"clone","k7lib::sequences::segment_tree","",22,[[],["segmenttree",3]]],[11,"clone","k7lib::string","",29,[[],["runlengthencode",3]]],[11,"default","k7lib::algebra","",24,[[]]],[11,"default","k7lib::algebra::structures","",5,[[],["all",3]]],[11,"default","","",6,[[],["any",3]]],[11,"default","","",7,[[],["concat",3]]],[11,"default","","",8,[[],["first",3]]],[11,"default","","",9,[[],["last",3]]],[11,"default","","",10,[[],["max",3]]],[11,"default","","",11,[[],["min",3]]],[11,"default","","",12,[[],["product",3]]],[11,"default","","",13,[[],["sum",3]]],[11,"default","k7lib::byte","",14,[[],["bytechar",3]]],[11,"cmp","k7lib::algebra::structures","",5,[[["all",3]],["ordering",4]]],[11,"cmp","","",6,[[["any",3]],["ordering",4]]],[11,"cmp","","",7,[[["concat",3]],["ordering",4]]],[11,"cmp","","",8,[[["first",3]],["ordering",4]]],[11,"cmp","","",9,[[["last",3]],["ordering",4]]],[11,"cmp","","",10,[[["max",3]],["ordering",4]]],[11,"cmp","","",11,[[["min",3]],["ordering",4]]],[11,"cmp","","",12,[[["product",3]],["ordering",4]]],[11,"cmp","","",13,[[["sum",3]],["ordering",4]]],[11,"cmp","k7lib::byte","",14,[[["bytechar",3]],["ordering",4]]],[11,"eq","k7lib::algebra","",24,[[]]],[11,"eq","k7lib::algebra::structures","",5,[[["all",3]]]],[11,"ne","","",5,[[["all",3]]]],[11,"eq","","",6,[[["any",3]]]],[11,"ne","","",6,[[["any",3]]]],[11,"eq","","",7,[[["concat",3]]]],[11,"ne","","",7,[[["concat",3]]]],[11,"eq","","",8,[[["first",3]]]],[11,"ne","","",8,[[["first",3]]]],[11,"eq","","",9,[[["last",3]]]],[11,"ne","","",9,[[["last",3]]]],[11,"eq","","",10,[[["max",3]]]],[11,"ne","","",10,[[["max",3]]]],[11,"eq","","",11,[[["min",3]]]],[11,"ne","","",11,[[["min",3]]]],[11,"eq","","",12,[[["product",3]]]],[11,"ne","","",12,[[["product",3]]]],[11,"eq","","",13,[[["sum",3]]]],[11,"ne","","",13,[[["sum",3]]]],[11,"eq","k7lib::byte","",14,[[["bytechar",3]]]],[11,"ne","","",14,[[["bytechar",3]]]],[11,"eq","","",25,[[["parsebytecharerror",3]]]],[11,"ne","","",25,[[["parsebytecharerror",3]]]],[11,"eq","k7lib::sequences::cumulative_sum","",20,[[["cumulativesum",3]]]],[11,"ne","","",20,[[["cumulativesum",3]]]],[11,"eq","k7lib::sequences::fenwick_tree","",21,[[["fenwicktree",3]]]],[11,"ne","","",21,[[["fenwicktree",3]]]],[11,"eq","k7lib::sequences::segment_tree","",22,[[["segmenttree",3]]]],[11,"ne","","",22,[[["segmenttree",3]]]],[11,"partial_cmp","k7lib::algebra::structures","",5,[[["all",3]],[["option",4],["ordering",4]]]],[11,"lt","","",5,[[["all",3]]]],[11,"le","","",5,[[["all",3]]]],[11,"gt","","",5,[[["all",3]]]],[11,"ge","","",5,[[["all",3]]]],[11,"partial_cmp","","",6,[[["any",3]],[["option",4],["ordering",4]]]],[11,"lt","","",6,[[["any",3]]]],[11,"le","","",6,[[["any",3]]]],[11,"gt","","",6,[[["any",3]]]],[11,"ge","","",6,[[["any",3]]]],[11,"partial_cmp","","",7,[[["concat",3]],[["option",4],["ordering",4]]]],[11,"lt","","",7,[[["concat",3]]]],[11,"le","","",7,[[["concat",3]]]],[11,"gt","","",7,[[["concat",3]]]],[11,"ge","","",7,[[["concat",3]]]],[11,"partial_cmp","","",8,[[["first",3]],[["option",4],["ordering",4]]]],[11,"lt","","",8,[[["first",3]]]],[11,"le","","",8,[[["first",3]]]],[11,"gt","","",8,[[["first",3]]]],[11,"ge","","",8,[[["first",3]]]],[11,"partial_cmp","","",9,[[["last",3]],[["option",4],["ordering",4]]]],[11,"lt","","",9,[[["last",3]]]],[11,"le","","",9,[[["last",3]]]],[11,"gt","","",9,[[["last",3]]]],[11,"ge","","",9,[[["last",3]]]],[11,"partial_cmp","","",10,[[["max",3]],[["option",4],["ordering",4]]]],[11,"lt","","",10,[[["max",3]]]],[11,"le","","",10,[[["max",3]]]],[11,"gt","","",10,[[["max",3]]]],[11,"ge","","",10,[[["max",3]]]],[11,"partial_cmp","","",11,[[["min",3]],[["option",4],["ordering",4]]]],[11,"lt","","",11,[[["min",3]]]],[11,"le","","",11,[[["min",3]]]],[11,"gt","","",11,[[["min",3]]]],[11,"ge","","",11,[[["min",3]]]],[11,"partial_cmp","","",12,[[["product",3]],[["option",4],["ordering",4]]]],[11,"lt","","",12,[[["product",3]]]],[11,"le","","",12,[[["product",3]]]],[11,"gt","","",12,[[["product",3]]]],[11,"ge","","",12,[[["product",3]]]],[11,"partial_cmp","","",13,[[["sum",3]],[["option",4],["ordering",4]]]],[11,"lt","","",13,[[["sum",3]]]],[11,"le","","",13,[[["sum",3]]]],[11,"gt","","",13,[[["sum",3]]]],[11,"ge","","",13,[[["sum",3]]]],[11,"partial_cmp","k7lib::byte","",14,[[["bytechar",3]],[["option",4],["ordering",4]]]],[11,"lt","","",14,[[["bytechar",3]]]],[11,"le","","",14,[[["bytechar",3]]]],[11,"gt","","",14,[[["bytechar",3]]]],[11,"ge","","",14,[[["bytechar",3]]]],[11,"deref","k7lib::sequences::segment_tree","",23,[[]]],[11,"deref_mut","","",23,[[]]],[11,"fmt","k7lib::algebra","",24,[[["formatter",3]],["result",6]]],[11,"fmt","k7lib::algebra::structures","",5,[[["formatter",3]],["result",6]]],[11,"fmt","","",6,[[["formatter",3]],["result",6]]],[11,"fmt","","",7,[[["formatter",3]],["result",6]]],[11,"fmt","","",8,[[["formatter",3]],["result",6]]],[11,"fmt","","",9,[[["formatter",3]],["result",6]]],[11,"fmt","","",10,[[["formatter",3]],["result",6]]],[11,"fmt","","",11,[[["formatter",3]],["result",6]]],[11,"fmt","","",12,[[["formatter",3]],["result",6]]],[11,"fmt","","",13,[[["formatter",3]],["result",6]]],[11,"fmt","k7lib::byte","",14,[[["formatter",3]],["result",6]]],[11,"fmt","","",25,[[["formatter",3]],["result",6]]],[11,"fmt","k7lib::disjoint_sets","",26,[[["formatter",3]],["result",6]]],[11,"fmt","","",27,[[["formatter",3]],["result",6]]],[11,"fmt","k7lib::io","",28,[[["formatter",3]],["result",6]]],[11,"fmt","k7lib::sequences::cumulative_sum","",20,[[["formatter",3]],["result",6]]],[11,"fmt","k7lib::sequences::fenwick_tree","",21,[[["formatter",3]],["result",6]]],[11,"fmt","k7lib::sequences::segment_tree","",22,[[["formatter",3]],["result",6]]],[11,"fmt","k7lib::string","",29,[[["formatter",3]],["result",6]]],[11,"fmt","k7lib::algebra","",24,[[["formatter",3]],["result",6]]],[11,"fmt","k7lib::byte","",14,[[["formatter",3]],["result",6]]],[11,"fmt","","",25,[[["formatter",3]],["result",6]]],[11,"div","k7lib::algebra","",24,[[]]],[11,"sub","","",24,[[]]],[11,"add","","",24,[[]]],[11,"mul","","",24,[[]]],[11,"neg","","",24,[[]]],[11,"add_assign","","",24,[[]]],[11,"sub_assign","","",24,[[]]],[11,"mul_assign","","",24,[[]]],[11,"div_assign","","",24,[[]]],[11,"hash","","",24,[[]]],[11,"hash","k7lib::algebra::structures","",5,[[]]],[11,"hash","","",6,[[]]],[11,"hash","","",7,[[]]],[11,"hash","","",8,[[]]],[11,"hash","","",9,[[]]],[11,"hash","","",10,[[]]],[11,"hash","","",11,[[]]],[11,"hash","","",12,[[]]],[11,"hash","","",13,[[]]],[11,"hash","k7lib::byte","",14,[[]]],[11,"hash","","",25,[[]]],[11,"hash","k7lib::sequences::cumulative_sum","",20,[[]]],[11,"hash","k7lib::sequences::fenwick_tree","",21,[[]]],[11,"hash","k7lib::sequences::segment_tree","",22,[[]]],[11,"from_str","k7lib::byte","",14,[[],[["result",4],["parsebytecharerror",3],["bytechar",3]]]],[11,"from_iter","k7lib::sequences::cumulative_sum","Creates a new <code>CumulativeSum</code> from an iterator.",20,[[]]],[11,"from_iter","k7lib::sequences::fenwick_tree","Creates a new <code>FenwickTree</code> from an iterator.",21,[[]]],[11,"from_iter","k7lib::sequences::segment_tree","",22,[[]]],[11,"sum","k7lib::algebra","",24,[[["iterator",8]]]],[11,"product","","",24,[[["iterator",8]]]],[11,"new","","Creates a new <code>ModInt</code> with the given representative.",24,[[]]],[11,"repr","","Returns the canonical representative.",24,[[]]],[11,"recip","","Returns the multiplicative inverse if it exists.",24,[[],["option",4]]],[11,"inverse_op","k7lib::algebra::structures","Returns <code>self.op(&rhs.invert())</code>.",0,[[]]],[11,"inverse_op_assign_right","","Assigns <code>self.inverse_op(rhs)</code> to <code>self</code>.",0,[[]]],[11,"inverse_op_assign_left","","Assigns <code>lhs.inverse_op(self)</code> to <code>self</code>.",0,[[]]],[11,"op_assign_right","","Assigns <code>self.op(rhs)</code> to <code>self</code>.",3,[[]]],[11,"op_assign_left","","Assigns <code>lhs.op(self)</code> to <code>self</code>.",3,[[]]],[18,"MIN","k7lib::cmp","",15,null],[18,"MAX","","",15,null],[11,"new","k7lib::disjoint_sets","Creates a new <code>QuickFind</code> with the given number of elements.",26,[[]]],[11,"len","","Returns the total number of elements that belong to …",26,[[]]],[11,"sets_len","","Returns the number of disjoint sets.",26,[[]]],[11,"find","","Returns the representative of the set that the given …",26,[[]]],[11,"unite","","Unites two disjoint sets that the given elements belong …",26,[[]]],[11,"belong_to_same_set","","Returns <code>true</code> iff the given elements belong to the same …",26,[[]]],[11,"set","","Returns the slice of elements that belong to the same set …",26,[[]]],[11,"new","","Creates a new <code>QuickUnion</code> with the given number of …",27,[[]]],[11,"len","","Returns the total number of elements that belong to …",27,[[]]],[11,"sets_len","","Returns the number of disjoint sets.",27,[[]]],[11,"find","","Returns the representative of the set that the given …",27,[[]]],[11,"unite","","Unites two disjoint sets that the given elements belong …",27,[[]]],[11,"belong_to_same_set","","Returns <code>true</code> iff the given elements belong to the same …",27,[[]]],[11,"set_len","","Returns the number of elements that belong to the same …",27,[[]]],[11,"new","k7lib::io","Creates a new <code>Scanner</code>.",28,[[]]],[11,"next","","Returns a next token splitted by whitespaces.",28,[[],["result",6]]],[11,"next_line","","Returns a whole string slice before the next newline …",28,[[],["result",6]]],[11,"parse_next","","Parses a next token splitted by whitespaces, and returns …",28,[[],[["result",4],["result",6]]]],[18,"ZERO","k7lib::num::primitive","The constant value <code>0</code>.",17,null],[18,"ONE","","The constant value <code>1</code>.",17,null]],"p":[[8,"Group"],[8,"Monoid"],[8,"Ring"],[8,"Semigroup"],[8,"Semiring"],[3,"All"],[3,"Any"],[3,"Concat"],[3,"First"],[3,"Last"],[3,"Max"],[3,"Min"],[3,"Product"],[3,"Sum"],[3,"ByteChar"],[8,"Bounded"],[8,"Constant"],[8,"Int"],[8,"SignedInt"],[8,"UnsignedInt"],[3,"CumulativeSum"],[3,"FenwickTree"],[3,"SegmentTree"],[3,"PointGetMut"],[3,"ModInt"],[3,"ParseByteCharError"],[3,"QuickFind"],[3,"QuickUnion"],[3,"Scanner"],[3,"RunLengthEncode"]]}\
}');
addSearchOptions(searchIndex);initSearch(searchIndex);