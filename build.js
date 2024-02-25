import fg from "fast-glob";
import fs from "fs";

const template = fs.readFileSync("template.html", "utf-8");

const files = fg.sync("src/**/*.md");

const toc = `
## 目录

${files
  .map(
    (file) =>
      "- https://kermanx.github.io" +
      file.replace(/^src/, "").replace(/.md$/, ".html")
  )
  .join("\n")}
`;

for (const file of files) {
  console.log("building", file);
  const content = fs.readFileSync(file, "utf-8") + toc;
  const html = template.replace("CONTENT", JSON.stringify([...content]));
  const out = file.replace(/^src/, "docs").replace(/.md$/, ".html");
  fs.mkdirSync(out.replace(/\/[^/]+$/, ""), { recursive: true });
  fs.writeFileSync(out, html);
}

console.log("done");
