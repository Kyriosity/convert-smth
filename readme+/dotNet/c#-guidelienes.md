# .NET\C# guidelines
## Important note
.NET is a mature fullstack platform, ever evolving and . It's C# is maybe the best language for writing clean expressive code.

Major advantage of C# is - you write clean code, and .NET cares for optimization. If a developer thinks there about boxing/unboxing, finalizing/desctructors, compiling, then it suggests either a false choice of language (may it be C++) or misunderstanding of C# concept.

## Other pros of C#
Powerfull LINQ. Just compare what are its current equivalents in Typescript 
https://decembersoft.com/posts/typescript-vs-csharp-linq

User-friendly and human-readable multi-threading TLP

## Coding and styles

## 

### Curly braces
Avoid braces for one line statement - indent does the job
```csharp
if (a == b)
    i++; // do we really need braces here?

apply(i);
```

Use in-line opening brace as in JS/Typescript 
```csharp
if (a == b) { // one line less but readability not hurt
    i++;
    j++;
}
```
### Strings
Avoid comparing with =
```csharp
```

Do not compare to the empty string
```csharp

```

### Enums
If a value from enum shall be explicitly set, reserve undefined value. This will 
```csharp
enum Go {

}
```
