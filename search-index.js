var searchIndex={};
searchIndex["spella"] = {"doc":"GitHub","i":[[0,"algebra","spella","Algebra.",null,null],[0,"structures","spella::algebra","Algebraic structures.",null,null],[8,"AbelianGroup","spella::algebra::structures","An abelian group.",null,null],[8,"AssociativeMagma","","An associative magma.",null,null],[8,"CommutativeMagma","","A commutative magma.",null,null],[8,"Group","","A group.",null,null],[8,"InvertibleMagma","","A magma whose all elements have an inverse element.",null,null],[10,"invert","","Returns an inverse element.",0,[[["self"]],["self"]]],[11,"inverse_op","","Returns `self.op(&rhs.invert())`.",0,[[["self"]],["self"]]],[11,"inverse_op_assign_right","","Assigns `self.inverse_op(rhs)` to `self`.",0,[[["self"],["self"]]]],[11,"inverse_op_assign_left","","Assigns `lhs.inverse_op(self)` to `self`.",0,[[["self"],["self"]]]],[8,"Magma","","A magma.",null,null],[10,"op","","Performs a binary operation.",1,[[["self"]],["self"]]],[11,"op_assign_right","","Assigns `self.op(rhs)` to `self`.",1,[[["self"],["self"]]]],[11,"op_assign_left","","Assigns `lhs.op(self)` to `self`.",1,[[["self"],["self"]]]],[8,"Monoid","","A monoid.",null,null],[8,"Semigroup","","A semigroup.",null,null],[8,"UnitalMagma","","A magma that has an identity element.",null,null],[10,"identity","","Returns an identity element.",2,[[],["self"]]],[0,"systems","spella::algebra","Algebraic systems.",null,null],[3,"All","spella::algebra::systems","A monoid under conjunction `&&`.",null,null],[12,"0","","",3,null],[3,"Any","","A monoid under disjunction `||`.",null,null],[12,"0","","",4,null],[3,"First","","A left zero semigroup.",null,null],[12,"0","","",5,null],[3,"Last","","A right zero semigroup.",null,null],[12,"0","","",6,null],[3,"Max","","A monoid that returns the maximum value.",null,null],[12,"0","","",7,null],[3,"Min","","A monoid that returns the minimum value.",null,null],[12,"0","","",8,null],[0,"byte","spella","Single-byte character/string types.",null,null],[3,"ByteChar","spella::byte","A single-byte character.",null,null],[12,"0","","",9,null],[3,"ParseByteCharError","","An error which can be returned when parsing a `ByteChar`.",null,null],[0,"cmp","spella","Extensions for ordering and comparison.",null,null],[8,"Bounded","spella::cmp","Trait for types that have min/max values.",null,null],[10,"min_value","","",10,[[],["self"]]],[10,"max_value","","",10,[[],["self"]]],[0,"io","spella","Utilities related to I/O.",null,null],[3,"Scanner","spella::io","Wraps a reader and tokenize its input.",null,null],[11,"new","","Creates a new `Scanner`.",11,[[["r"]],["self"]]],[11,"next","","Returns a next token splitted by whitespaces.",11,[[["self"]],[["result",["str"]],["str"]]]],[11,"parse_next","","Parses a next token splitted by whitespaces, and returns it.",11,[[["self"]],[["result"],["result",["result"]]]]],[0,"sequences","spella","Data structures representing a sequence.",null,null],[0,"cumulative_sum","spella::sequences","A cumulative sum.",null,null],[3,"CumulativeSum","spella::sequences::cumulative_sum","A cumulative sum.",null,null],[11,"len","","Returns the length of the sequence.",12,[[["self"]],["usize"]]],[11,"prefix_fold","","Folds elements in the given prefix range with a monoid's…",12,[[["rangeto",["usize"]],["self"],["usize"]],["m"]]],[11,"get","","Returns an element at the given index.",12,[[["self"],["usize"]],["g"]]],[11,"fold","","Folds elements in the given range with a group's binary…",12,[[["range",["usize"]],["self"],["usize"]],["g"]]],[0,"fenwick_tree","spella::sequences","A fenwick tree (a.k.a. binary indexed tree).",null,null],[3,"FenwickTree","spella::sequences::fenwick_tree","A fenwick tree (a.k.a. binary indexed tree).",null,null],[11,"new","","Creates a new `FenwickTree` of the given length, filled…",13,[[["usize"]],["self"]]],[11,"len","","Returns the length of the sequence.",13,[[["self"]],["usize"]]],[11,"point_append","","Append the given value to an element at the given index…",13,[[["self"],["usize"],["m"]]]],[11,"prefix_fold","","Folds elements in the given prefix range with a monoid's…",13,[[["rangeto",["usize"]],["self"],["usize"]],["m"]]],[11,"get","","Returns an element at the given index.",13,[[["self"],["usize"]],["g"]]],[11,"replace","","Replaces an element at the given index with the given…",13,[[["self"],["usize"],["g"]],["g"]]],[11,"fold","","Folds elements in the given range with a group's binary…",13,[[["range",["usize"]],["self"],["usize"]],["g"]]],[0,"segment_tree","spella::sequences","A segment tree.",null,null],[3,"SegmentTree","spella::sequences::segment_tree","A segment tree.",null,null],[3,"GetMut","","Structure wrapping a mutable refenrece to an element on…",null,null],[11,"new","","Creates a new `SegmentTree` of the given length, filled…",14,[[["usize"]],["self"]]],[11,"len","","Returns the length of the sequence.",14,[[["self"]],["usize"]]],[11,"get","","Returns an element at the given index.",14,[[["self"],["usize"]],["m"]]],[11,"get_mut","","Returns a mutable reference to an element at the given…",14,[[["self"],["usize"]],["getmut"]]],[11,"fold","","Folds elements in the given range with a monoid's binary…",14,[[["range",["usize"]],["self"],["usize"]],["m"]]],[11,"update","","Updates the value using the given function.",15,[[["self"],["f"]]]],[11,"from","spella::algebra::systems","",3,[[["t"]],["t"]]],[11,"into","","",3,[[],["u"]]],[11,"to_owned","","",3,[[["self"]],["t"]]],[11,"clone_into","","",3,[[["self"],["t"]]]],[11,"try_from","","",3,[[["u"]],["result"]]],[11,"try_into","","",3,[[],["result"]]],[11,"borrow","","",3,[[["self"]],["t"]]],[11,"borrow_mut","","",3,[[["self"]],["t"]]],[11,"type_id","","",3,[[["self"]],["typeid"]]],[11,"from","","",4,[[["t"]],["t"]]],[11,"into","","",4,[[],["u"]]],[11,"to_owned","","",4,[[["self"]],["t"]]],[11,"clone_into","","",4,[[["self"],["t"]]]],[11,"try_from","","",4,[[["u"]],["result"]]],[11,"try_into","","",4,[[],["result"]]],[11,"borrow","","",4,[[["self"]],["t"]]],[11,"borrow_mut","","",4,[[["self"]],["t"]]],[11,"type_id","","",4,[[["self"]],["typeid"]]],[11,"from","","",5,[[["t"]],["t"]]],[11,"into","","",5,[[],["u"]]],[11,"to_owned","","",5,[[["self"]],["t"]]],[11,"clone_into","","",5,[[["self"],["t"]]]],[11,"try_from","","",5,[[["u"]],["result"]]],[11,"try_into","","",5,[[],["result"]]],[11,"borrow","","",5,[[["self"]],["t"]]],[11,"borrow_mut","","",5,[[["self"]],["t"]]],[11,"type_id","","",5,[[["self"]],["typeid"]]],[11,"from","","",6,[[["t"]],["t"]]],[11,"into","","",6,[[],["u"]]],[11,"to_owned","","",6,[[["self"]],["t"]]],[11,"clone_into","","",6,[[["self"],["t"]]]],[11,"try_from","","",6,[[["u"]],["result"]]],[11,"try_into","","",6,[[],["result"]]],[11,"borrow","","",6,[[["self"]],["t"]]],[11,"borrow_mut","","",6,[[["self"]],["t"]]],[11,"type_id","","",6,[[["self"]],["typeid"]]],[11,"from","","",7,[[["t"]],["t"]]],[11,"into","","",7,[[],["u"]]],[11,"to_owned","","",7,[[["self"]],["t"]]],[11,"clone_into","","",7,[[["self"],["t"]]]],[11,"try_from","","",7,[[["u"]],["result"]]],[11,"try_into","","",7,[[],["result"]]],[11,"borrow","","",7,[[["self"]],["t"]]],[11,"borrow_mut","","",7,[[["self"]],["t"]]],[11,"type_id","","",7,[[["self"]],["typeid"]]],[11,"from","","",8,[[["t"]],["t"]]],[11,"into","","",8,[[],["u"]]],[11,"to_owned","","",8,[[["self"]],["t"]]],[11,"clone_into","","",8,[[["self"],["t"]]]],[11,"try_from","","",8,[[["u"]],["result"]]],[11,"try_into","","",8,[[],["result"]]],[11,"borrow","","",8,[[["self"]],["t"]]],[11,"borrow_mut","","",8,[[["self"]],["t"]]],[11,"type_id","","",8,[[["self"]],["typeid"]]],[11,"from","spella::byte","",9,[[["t"]],["t"]]],[11,"into","","",9,[[],["u"]]],[11,"to_owned","","",9,[[["self"]],["t"]]],[11,"clone_into","","",9,[[["self"],["t"]]]],[11,"to_string","","",9,[[["self"]],["string"]]],[11,"try_from","","",9,[[["u"]],["result"]]],[11,"try_into","","",9,[[],["result"]]],[11,"borrow","","",9,[[["self"]],["t"]]],[11,"borrow_mut","","",9,[[["self"]],["t"]]],[11,"type_id","","",9,[[["self"]],["typeid"]]],[11,"from","","",16,[[["t"]],["t"]]],[11,"into","","",16,[[],["u"]]],[11,"to_owned","","",16,[[["self"]],["t"]]],[11,"clone_into","","",16,[[["self"],["t"]]]],[11,"to_string","","",16,[[["self"]],["string"]]],[11,"try_from","","",16,[[["u"]],["result"]]],[11,"try_into","","",16,[[],["result"]]],[11,"borrow","","",16,[[["self"]],["t"]]],[11,"borrow_mut","","",16,[[["self"]],["t"]]],[11,"type_id","","",16,[[["self"]],["typeid"]]],[11,"from","spella::io","",11,[[["t"]],["t"]]],[11,"into","","",11,[[],["u"]]],[11,"try_from","","",11,[[["u"]],["result"]]],[11,"try_into","","",11,[[],["result"]]],[11,"borrow","","",11,[[["self"]],["t"]]],[11,"borrow_mut","","",11,[[["self"]],["t"]]],[11,"type_id","","",11,[[["self"]],["typeid"]]],[11,"from","spella::sequences::cumulative_sum","",12,[[["t"]],["t"]]],[11,"into","","",12,[[],["u"]]],[11,"to_owned","","",12,[[["self"]],["t"]]],[11,"clone_into","","",12,[[["self"],["t"]]]],[11,"try_from","","",12,[[["u"]],["result"]]],[11,"try_into","","",12,[[],["result"]]],[11,"borrow","","",12,[[["self"]],["t"]]],[11,"borrow_mut","","",12,[[["self"]],["t"]]],[11,"type_id","","",12,[[["self"]],["typeid"]]],[11,"from","spella::sequences::fenwick_tree","",13,[[["t"]],["t"]]],[11,"into","","",13,[[],["u"]]],[11,"to_owned","","",13,[[["self"]],["t"]]],[11,"clone_into","","",13,[[["self"],["t"]]]],[11,"try_from","","",13,[[["u"]],["result"]]],[11,"try_into","","",13,[[],["result"]]],[11,"borrow","","",13,[[["self"]],["t"]]],[11,"borrow_mut","","",13,[[["self"]],["t"]]],[11,"type_id","","",13,[[["self"]],["typeid"]]],[11,"from","spella::sequences::segment_tree","",14,[[["t"]],["t"]]],[11,"into","","",14,[[],["u"]]],[11,"to_owned","","",14,[[["self"]],["t"]]],[11,"clone_into","","",14,[[["self"],["t"]]]],[11,"try_from","","",14,[[["u"]],["result"]]],[11,"try_into","","",14,[[],["result"]]],[11,"borrow","","",14,[[["self"]],["t"]]],[11,"borrow_mut","","",14,[[["self"]],["t"]]],[11,"type_id","","",14,[[["self"]],["typeid"]]],[11,"from","","",15,[[["t"]],["t"]]],[11,"into","","",15,[[],["u"]]],[11,"try_from","","",15,[[["u"]],["result"]]],[11,"try_into","","",15,[[],["result"]]],[11,"borrow","","",15,[[["self"]],["t"]]],[11,"borrow_mut","","",15,[[["self"]],["t"]]],[11,"type_id","","",15,[[["self"]],["typeid"]]],[11,"op","spella::algebra::systems","",3,[[["self"]],["self"]]],[11,"op","","",4,[[["self"]],["self"]]],[11,"op","","",5,[[["self"]],["self"]]],[11,"op","","",6,[[["self"]],["self"]]],[11,"op","","",7,[[["self"]],["self"]]],[11,"op","","",8,[[["self"]],["self"]]],[11,"identity","","",3,[[],["self"]]],[11,"identity","","",4,[[],["self"]]],[11,"identity","","",7,[[],["self"]]],[11,"identity","","",8,[[],["self"]]],[11,"drop","spella::sequences::segment_tree","",15,[[["self"]]]],[11,"from","spella::sequences::fenwick_tree","Creates a new `FenwickTree` from a `Vec`.",13,[[["vec"]],["self"]]],[11,"clone","spella::algebra::systems","",3,[[["self"]],["all"]]],[11,"clone","","",4,[[["self"]],["any"]]],[11,"clone","","",5,[[["self"]],["first"]]],[11,"clone","","",6,[[["self"]],["last"]]],[11,"clone","","",7,[[["self"]],["max"]]],[11,"clone","","",8,[[["self"]],["min"]]],[11,"clone","spella::byte","",9,[[["self"]],["bytechar"]]],[11,"clone","","",16,[[["self"]],["parsebytecharerror"]]],[11,"clone","spella::sequences::cumulative_sum","",12,[[["self"]],["cumulativesum"]]],[11,"clone","spella::sequences::fenwick_tree","",13,[[["self"]],["fenwicktree"]]],[11,"clone","spella::sequences::segment_tree","",14,[[["self"]],["segmenttree"]]],[11,"default","spella::algebra::systems","",3,[[],["all"]]],[11,"default","","",4,[[],["any"]]],[11,"default","","",5,[[],["first"]]],[11,"default","","",6,[[],["last"]]],[11,"default","","",7,[[],["max"]]],[11,"default","","",8,[[],["min"]]],[11,"default","spella::byte","",9,[[],["bytechar"]]],[11,"cmp","spella::algebra::systems","",3,[[["all"],["self"]],["ordering"]]],[11,"cmp","","",4,[[["self"],["any"]],["ordering"]]],[11,"cmp","","",5,[[["first"],["self"]],["ordering"]]],[11,"cmp","","",6,[[["self"],["last"]],["ordering"]]],[11,"cmp","","",7,[[["max"],["self"]],["ordering"]]],[11,"cmp","","",8,[[["self"],["min"]],["ordering"]]],[11,"cmp","spella::byte","",9,[[["self"],["bytechar"]],["ordering"]]],[11,"eq","spella::algebra::systems","",3,[[["all"],["self"]],["bool"]]],[11,"ne","","",3,[[["all"],["self"]],["bool"]]],[11,"eq","","",4,[[["self"],["any"]],["bool"]]],[11,"ne","","",4,[[["self"],["any"]],["bool"]]],[11,"eq","","",5,[[["first"],["self"]],["bool"]]],[11,"ne","","",5,[[["first"],["self"]],["bool"]]],[11,"eq","","",6,[[["self"],["last"]],["bool"]]],[11,"ne","","",6,[[["self"],["last"]],["bool"]]],[11,"eq","","",7,[[["max"],["self"]],["bool"]]],[11,"ne","","",7,[[["max"],["self"]],["bool"]]],[11,"eq","","",8,[[["self"],["min"]],["bool"]]],[11,"ne","","",8,[[["self"],["min"]],["bool"]]],[11,"eq","spella::byte","",9,[[["self"],["bytechar"]],["bool"]]],[11,"ne","","",9,[[["self"],["bytechar"]],["bool"]]],[11,"eq","","",16,[[["self"],["parsebytecharerror"]],["bool"]]],[11,"ne","","",16,[[["self"],["parsebytecharerror"]],["bool"]]],[11,"eq","spella::sequences::cumulative_sum","",12,[[["cumulativesum"],["self"]],["bool"]]],[11,"ne","","",12,[[["cumulativesum"],["self"]],["bool"]]],[11,"eq","spella::sequences::fenwick_tree","",13,[[["fenwicktree"],["self"]],["bool"]]],[11,"ne","","",13,[[["fenwicktree"],["self"]],["bool"]]],[11,"eq","spella::sequences::segment_tree","",14,[[["segmenttree"],["self"]],["bool"]]],[11,"ne","","",14,[[["segmenttree"],["self"]],["bool"]]],[11,"partial_cmp","spella::algebra::systems","",3,[[["all"],["self"]],[["ordering"],["option",["ordering"]]]]],[11,"lt","","",3,[[["all"],["self"]],["bool"]]],[11,"le","","",3,[[["all"],["self"]],["bool"]]],[11,"gt","","",3,[[["all"],["self"]],["bool"]]],[11,"ge","","",3,[[["all"],["self"]],["bool"]]],[11,"partial_cmp","","",4,[[["self"],["any"]],[["ordering"],["option",["ordering"]]]]],[11,"lt","","",4,[[["self"],["any"]],["bool"]]],[11,"le","","",4,[[["self"],["any"]],["bool"]]],[11,"gt","","",4,[[["self"],["any"]],["bool"]]],[11,"ge","","",4,[[["self"],["any"]],["bool"]]],[11,"partial_cmp","","",5,[[["first"],["self"]],[["ordering"],["option",["ordering"]]]]],[11,"lt","","",5,[[["first"],["self"]],["bool"]]],[11,"le","","",5,[[["first"],["self"]],["bool"]]],[11,"gt","","",5,[[["first"],["self"]],["bool"]]],[11,"ge","","",5,[[["first"],["self"]],["bool"]]],[11,"partial_cmp","","",6,[[["self"],["last"]],[["ordering"],["option",["ordering"]]]]],[11,"lt","","",6,[[["self"],["last"]],["bool"]]],[11,"le","","",6,[[["self"],["last"]],["bool"]]],[11,"gt","","",6,[[["self"],["last"]],["bool"]]],[11,"ge","","",6,[[["self"],["last"]],["bool"]]],[11,"partial_cmp","","",7,[[["max"],["self"]],[["ordering"],["option",["ordering"]]]]],[11,"lt","","",7,[[["max"],["self"]],["bool"]]],[11,"le","","",7,[[["max"],["self"]],["bool"]]],[11,"gt","","",7,[[["max"],["self"]],["bool"]]],[11,"ge","","",7,[[["max"],["self"]],["bool"]]],[11,"partial_cmp","","",8,[[["self"],["min"]],[["ordering"],["option",["ordering"]]]]],[11,"lt","","",8,[[["self"],["min"]],["bool"]]],[11,"le","","",8,[[["self"],["min"]],["bool"]]],[11,"gt","","",8,[[["self"],["min"]],["bool"]]],[11,"ge","","",8,[[["self"],["min"]],["bool"]]],[11,"partial_cmp","spella::byte","",9,[[["self"],["bytechar"]],[["ordering"],["option",["ordering"]]]]],[11,"lt","","",9,[[["self"],["bytechar"]],["bool"]]],[11,"le","","",9,[[["self"],["bytechar"]],["bool"]]],[11,"gt","","",9,[[["self"],["bytechar"]],["bool"]]],[11,"ge","","",9,[[["self"],["bytechar"]],["bool"]]],[11,"deref","spella::sequences::segment_tree","",15,[[["self"]],["m"]]],[11,"deref_mut","","",15,[[["self"]],["m"]]],[11,"fmt","spella::algebra::systems","",3,[[["formatter"],["self"]],["result"]]],[11,"fmt","","",4,[[["formatter"],["self"]],["result"]]],[11,"fmt","","",5,[[["formatter"],["self"]],["result"]]],[11,"fmt","","",6,[[["formatter"],["self"]],["result"]]],[11,"fmt","","",7,[[["formatter"],["self"]],["result"]]],[11,"fmt","","",8,[[["formatter"],["self"]],["result"]]],[11,"fmt","spella::byte","",9,[[["formatter"],["self"]],["result"]]],[11,"fmt","","",16,[[["formatter"],["self"]],["result"]]],[11,"fmt","spella::io","",11,[[["formatter"],["self"]],["result"]]],[11,"fmt","spella::sequences::cumulative_sum","",12,[[["formatter"],["self"]],["result"]]],[11,"fmt","spella::sequences::fenwick_tree","",13,[[["formatter"],["self"]],["result"]]],[11,"fmt","spella::sequences::segment_tree","",14,[[["formatter"],["self"]],["result"]]],[11,"fmt","spella::byte","",9,[[["formatter"],["self"]],["result"]]],[11,"fmt","","",16,[[["formatter"],["self"]],["result"]]],[11,"hash","spella::algebra::systems","",3,[[["self"],["__h"]]]],[11,"hash","","",4,[[["self"],["__h"]]]],[11,"hash","","",5,[[["self"],["__h"]]]],[11,"hash","","",6,[[["self"],["__h"]]]],[11,"hash","","",7,[[["self"],["__h"]]]],[11,"hash","","",8,[[["self"],["__h"]]]],[11,"hash","spella::byte","",9,[[["self"],["__h"]]]],[11,"hash","","",16,[[["self"],["__h"]]]],[11,"hash","spella::sequences::cumulative_sum","",12,[[["self"],["__h"]]]],[11,"hash","spella::sequences::fenwick_tree","",13,[[["self"],["__h"]]]],[11,"hash","spella::sequences::segment_tree","",14,[[["self"],["__h"]]]],[11,"from_iter","spella::sequences::cumulative_sum","Creates a new `CumulativeSum` from an iterator.",12,[[["i"]],["self"]]],[11,"from_iter","spella::sequences::fenwick_tree","Creates a new `FenwickTree` from an iterator.",13,[[["i"]],["self"]]],[11,"from_iter","spella::sequences::segment_tree","",14,[[["i"]],["self"]]],[11,"from_str","spella::byte","",9,[[["str"]],[["result",["bytechar","parsebytecharerror"]],["bytechar"],["parsebytecharerror"]]]],[11,"inverse_op","spella::algebra::structures","Returns `self.op(&rhs.invert())`.",0,[[["self"]],["self"]]],[11,"inverse_op_assign_right","","Assigns `self.inverse_op(rhs)` to `self`.",0,[[["self"],["self"]]]],[11,"inverse_op_assign_left","","Assigns `lhs.inverse_op(self)` to `self`.",0,[[["self"],["self"]]]],[11,"op_assign_right","","Assigns `self.op(rhs)` to `self`.",1,[[["self"],["self"]]]],[11,"op_assign_left","","Assigns `lhs.op(self)` to `self`.",1,[[["self"],["self"]]]]],"p":[[8,"InvertibleMagma"],[8,"Magma"],[8,"UnitalMagma"],[3,"All"],[3,"Any"],[3,"First"],[3,"Last"],[3,"Max"],[3,"Min"],[3,"ByteChar"],[8,"Bounded"],[3,"Scanner"],[3,"CumulativeSum"],[3,"FenwickTree"],[3,"SegmentTree"],[3,"GetMut"],[3,"ParseByteCharError"]]};
addSearchOptions(searchIndex);initSearch(searchIndex);