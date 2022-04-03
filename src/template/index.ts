export default {
  HTML: (title: string, body: string, isLogined?: boolean) => {
    return `
    <!doctype html>
    <html>
    <head>
      <title>${title}</title>
      <meta charset="utf-8">
    </head>
    <body>
      ${isLogined ? `<a href="http://localhost:3000/auth/logout"><a>` : ''}
      ${body}
    </body>
    </html>
    `;
  },
  list: (list: any[]) => {
    const htmlStr = list.map((item: any, i: number) => {
      return `
      <div>
        <p>${item.name}</p>      
        <p>${item.content}</p>
      </div>`
    }).join('')
    return htmlStr;
  },
}
