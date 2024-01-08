import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import "./styles.css";

const MarkdownPreviewer = () => {
  const [markdown, setMarkdown] = useState(
    `# This is an H1 Header\n## Subtítulo\n[Link para o Google](https://www.google.com)\n\`Código em linha\`\n\`\`\`\n// Código de bloco\nconst exemplo = "Hello, World!";\n\`\`\`\n- Lista de itens\n> Blockquote\n![Imagem de Exemplo](https://via.placeholder.com/150)\n**Texto em negrito**`
  );

  return (
    <div className="container">
      <textarea
        id="editor"
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
      />
      <div id="preview">
        <ReactMarkdown id="preview">{markdown}</ReactMarkdown>
      </div>
    </div>
  );
};

export default MarkdownPreviewer;
