import * as fs from 'fs';
import * as path from 'path';

/**
 * Reads an HTML email template and replaces placeholders with actual data.
 * @param templateName The name of the template file (e.g., 'admin-notification.html')
 * @param data An object containing key-value pairs for replacement (e.g., { fullName: 'John Doe' })
 * @returns The templated HTML string.
 */
export function getEmailTemplate(templateName: string, data: Record<string, string>): string {
  const templatePath = path.join(process.cwd(), 'src', 'lib', 'email-templates', templateName);
  
  try {
    let html = fs.readFileSync(templatePath, 'utf8');

    // Replace all placeholders in the HTML content
    for (const key in data) {
      const regex = new RegExp(`{{${key}}}`, 'g');
      html = html.replace(regex, data[key]);
    }

    // Replace year placeholder
    html = html.replace(/{{year}}/g, new Date().getFullYear().toString());

    return html;
  } catch (error) {
    console.error(`Error reading email template ${templateName}:`, error);
    // Fallback to a simple text if template reading fails
    return `<h1>Error: Could not load email template.</h1><p>Data: ${JSON.stringify(data)}</p>`;
  }
}
