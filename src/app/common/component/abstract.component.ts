import { Breadcrumbs } from '../object/breadcrumb';
import { MetaDefinition, Meta, Title } from '@angular/platform-browser';
import { String } from 'typescript-string-operations';

export abstract class AbstractComponent {

  public pTitle: string;
  public mKeywords: string;
  public mDescription: string;
  public breadcrumbsDtoList: Array<Breadcrumbs>;

  /**
   * Add breadcrumb
   * @param title Page title
   * @param url Url
   * @param link true or false
   */
  protected addBreadCrumbs(title: string, url: string, link: boolean) {
      if (this.breadcrumbsDtoList == null) {
          this.breadcrumbsDtoList = new Array<Breadcrumbs>();
      }

      this.breadcrumbsDtoList.push(new Breadcrumbs(title, url, link));
  }

  protected getBreadcrumbTitle(title: string, ...params: string[]): string {
    if (params.length > 0) {
      return String.Format(title, ...params);
    }
    return title;
  }

  protected getBreadcrumbUrl(url: string, ...params: string[]): string {
    if (params.length > 0) {
      return String.Format(url, ...params);
    }
    return url;
  }

  /**
   * Set keyword as <meta name="keywords" content="Sample">
   * @param data A array string
   */
  protected setSeoMetaKeyword(meta: Meta, message: string, ...params: string[]): void {

    // Define the keyword
    const keywords: MetaDefinition = {
      name: 'keywords',
      content: String.Format(message, ...params)
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
      content: String.Format(message, ...params)
    };

    meta.addTags([ description]);
  }

  /**
   * Set page title as <title>Sapmle</title>
   * @param data A array string
   */
  protected setPageTitle(title: Title, message: string, ...params: string[]): void {

    title.setTitle(String.Format(message, ...params));
  }
}
