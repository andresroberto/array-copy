# Array Copy method
A too simple JavaScript implementation of the [Java 'arraycopy' method](https://docs.oracle.com/javase/10/docs/api/java/lang/System.html#arraycopy(java.lang.Object,int,java.lang.Object,int,int)).

# Exceptions

Java's arraycopy throws three exceptions. This is the parallel with JavaScript:

- **IndexOutOfBoundsException:** There won't be an exception because JavaScript array objects don't have boundaries or fixed length. Instead, passing wrong parameters will result in either positions filled with undefined or array holes.

- **ArrayStoreException:** There won't be an exception because JavaScript array objects don't have type restrictions, so we won't ever have a case of type mismatch.

- **NullPointerException:** There will be a `TypeException` if either the `src` or the `dest` parameter is either `null` or `undefined`.

# Important

The only purpose of this code is to illustrate and complement an educational activity. I am not claiming any authorship or relationship with the original Java method implementation and this code has no commercial purposes.
