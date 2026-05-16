import React, { useState } from 'react';

export default function CodeBlock({ children, title }: { children: string; title?: string }): JSX.Element {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(children);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <motion.div className="shield-codeblock">
      {title && <motion.div className="code-title">{title}</motion.div>}
      <pre><code>{children}</code></pre>
      <button type="button" onClick={copy}>{copied ? 'Copied' : 'Copy'}</button>
    </motion.div>
  );
}
