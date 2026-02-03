export const SNIPPETS = {
  python: [
    { label: "for", insertText: "for i in range(${1:n}):\n\t${2:pass}" },
    { label: "while", insertText: "while ${1:condition}:\n\t${2:pass}" },
    { label: "if", insertText: "if ${1:condition}:\n\t${2:pass}" },
    { label: "elif", insertText: "elif ${1:condition}:\n\t${2:pass}" },
    { label: "else", insertText: "else:\n\t${1:pass}" },
    { label: "def", insertText: "def ${1:func}(${2:args}):\n\t${3:return None}" },
    {
      label: "class",
      insertText:
        "class ${1:ClassName}:\n\tdef __init__(self, ${2:args}):\n\t\t${3:pass}",
    },
    {
      label: "try",
      insertText:
        "try:\n\t${1:pass}\nexcept Exception as e:\n\tprint(e)",
    },
    { label: "print", insertText: "print(${1:value})" },
    { label: "input", insertText: "${1:var} = input()" },
    {
      label: "main",
      insertText: "if __name__ == '__main__':\n\t${1:pass}",
    },
  ],

  c: [
    {
      label: "for",
      insertText:
        "for(int i=0;i<${1:n};i++){\n\t${2:// code}\n}",
    },
    {
      label: "while",
      insertText:
        "while(${1:condition}){\n\t${2:// code}\n}",
    },
    {
      label: "if",
      insertText:
        "if(${1:condition}){\n\t${2:// code}\n}",
    },
    {
      label: "else",
      insertText:
        "else{\n\t${1:// code}\n}",
    },
    {
      label: "switch",
      insertText:
        "switch(${1:var}){\n\tcase ${2:value}:\n\t\t${3:// code}\n\t\tbreak;\n\tdefault:\n\t\t${4:// code}\n}",
    },
    {
      label: "function",
      insertText:
        "${1:void} ${2:functionName}(${3:args}){\n\t${4:// code}\n}",
    },
    {
      label: "main",
      insertText:
        "int main(){\n\t${1:// code}\n\treturn 0;\n}",
    },
    { label: "printf", insertText: 'printf("${1:text}\\n");' },
    { label: "scanf", insertText: 'scanf("%d",&${1:var});' },
  ],


  java: [
    {
      label: "for",
      insertText:
        "for(int i=0;i<${1:n};i++){\n\t${2:// code}\n}",
    },
    {
      label: "while",
      insertText:
        "while(${1:condition}){\n\t${2:// code}\n}",
    },
    {
      label: "if",
      insertText:
        "if(${1:condition}){\n\t${2:// code}\n}",
    },
    {
      label: "else",
      insertText:
        "else{\n\t${1:// code}\n}",
    },
    {
      label: "method",
      insertText:
        "public static ${1:void} ${2:methodName}(${3:args}){\n\t${4:// code}\n}",
    },
    {
      label: "main",
      insertText:
        "public static void main(String[] args){\n\t${1:// code}\n}",
    },
    {
      label: "class",
      insertText:
        "public class ${1:ClassName} {\n\t${2:// code}\n}",
    },
    {
      label: "try",
      insertText:
        "try{\n\t${1:// code}\n}catch(Exception e){\n\te.printStackTrace();\n}",
    },
    { label: "println", insertText: "System.out.println(${1:value});" },
  ],
};
