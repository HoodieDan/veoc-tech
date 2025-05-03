export function stripHtmlTags(html: string | undefined): string {
  if (html)
  return html.replace(/<[^>]*>/g, '');
else return ''
}