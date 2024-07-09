import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ChatModule } from './chat/chat.module';
import { EmployeeModule } from './employee/employee.module';
import { SectorModule } from './sector/sector.module';
import { WhatsappNumberModule } from './whatsapp-number/whatsapp-number.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [UserModule, WhatsappNumberModule, SectorModule, EmployeeModule, ChatModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
