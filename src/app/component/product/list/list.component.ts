import { Component, OnInit } from '@angular/core';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';
import { Seo } from '../../../../config/seo';
import { String } from 'typescript-string-operations';



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  seoKw: string;
  seoDes: string;

  constructor(private meta: Meta, private pageTitle: Title) { }

  ngOnInit() {
    // Set page title
    this.pageTitle.setTitle(String.Format(Seo.title_product_list, 'Cosmetic'));

    // Define the keyword
    const keywords: MetaDefinition = {
      name: 'keywords',
      content: String.Format(Seo.keyword_product_list, 'Cosmetic', 'Cosmetic')
    };

    // Define the description
    const description: MetaDefinition = {
      name: 'description',
      content: String.Format(Seo.description_product_list, 'Cosmetic')
    };


    this.meta.addTags([keywords, description]);
  }

}
