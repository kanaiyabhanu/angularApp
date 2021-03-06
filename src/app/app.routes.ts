import { Route } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';
import { GenderComponent } from './gender.component';
import { SongListComponent } from './songlist.component';
import { ProductsComponent } from './products/products.component';
import { HomepageComponent } from './Product Project/homepage/homepage.component';
import { ProductSearch } from './Product Project/productsearch.component';

export const routes: Route[] = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
    children: [
      {
        path: 'gender',
        component: GenderComponent,
      },
      {
        path: 'songlist',
        component: SongListComponent,
      },
    ],
  },
  {
    path: 'product/:id',
    component: ProductComponent,
  },
  {
    path: 'products',
    component: ProductsComponent,
  },
  {
    path: 'homepage',
    component: HomepageComponent,
  },
  {
    path: 'productlist',
    component: ProductSearch,
  },
];
