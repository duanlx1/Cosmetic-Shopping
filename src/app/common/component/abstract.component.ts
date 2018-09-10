import { Breadcrumbs } from '../object/breadcrumb';
import { MetaDefinition, Meta, Title } from '@angular/platform-browser';
import { String } from 'typescript-string-operations';

export abstract class AbstractComponent {

  public pTitle: string;
  public mKeywords: string;
  public mDescription: string;
  public breadcrumbsDtoList: Array<Breadcrumbs>;

  protected addBreadCrumbs(title: string, url: string, link: boolean) {
      if (this.breadcrumbsDtoList == null) {
          this.breadcrumbsDtoList = new Array<Breadcrumbs>();
      }

      this.breadcrumbsDtoList.push(new Breadcrumbs(title, url, link));
  }

  /**
   * Set keyword as <meta name="keywords" content="Sample">
   * @param data A array string
   */
  protected setSeoMetaKeyword(meta: Meta, message: string, ...params: string[]): void {

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
  protected setSeoMetaDescription(meta: Meta, message: string, ...params: string[]): void {

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
  protected setPageTitle(title: Title, message: string, ...params: string[]): void {

    title.setTitle(String.Format(message, params[0]));
  }
}
