import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { WidgetsModule } from './widgets/widgets.module';

@Module({
  imports: [ProductsModule, WidgetsModule, MongooseModule.forRoot('mongodb://localhost/donation', {
    useNewUrlParser: true
  })],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
