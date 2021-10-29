import { Controller, Get, UseGuards } from '@nestjs/common';
import JwtAuthGuard from 'src/auth/JwtAuth.guard';

@Controller('collections')
export class CollectionsController {

    @Get()
    @UseGuards(JwtAuthGuard)
    async getCollections() {
        return "You should get collections"
    }
}

