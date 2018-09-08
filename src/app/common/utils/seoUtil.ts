import { MetaDefinition, Meta, Title } from '@angular/platform-browser';
import { String } from 'typescript-string-operations';

export class SeoUtil {

  /**
   * Set keyword as <meta name="keywords" content="Sample">
   * @param data A array string
   */
  public static setSeoMetaKeyword(meta: Meta, message: string, ...params: string[]): void {

    // Define the keyword
    const keywords: MetaDefinition = {
      name: 'keywords',
      content: String.Format(message, params[0], params[0], params[0], params[0], params[0], params[0], params[1])
    };

    meta.addTags([keywords]);
  }

  /**
   * Set description as <meta name="description" content="Sample">
   * @param data A array string
   */
  public static setSeoMetaDescription(meta: Meta, message: string, ...params: string[]): void {

    // Define the description
    const description: MetaDefinition = {
      name: 'description',
      content: String.Format(message, params[0])
    };

    meta.addTags([ description]);
  }

  /**
   * Set page title as <title>Sapmle</title>
   * @param data A array string
   */
  public static setPageTitle(title: Title, message: string, ...params: string[]): void {

    title.setTitle(String.Format(message, params[0]));
  }
}
