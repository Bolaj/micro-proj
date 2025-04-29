import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateRiderCoordinatesDto } from './dto/create-coordinates.dto';


@Controller('rider-coordinates')
export class RiderCoordinatesController {
    @Get()
    getRiderCoordinates(){
        return 'Hello from rider coordinates'
    }

    @Post()
    createRiderCoordinates(
        @Body() createRiderCoordinatesDto: CreateRiderCoordinatesDto
    ){
        return {
            message: 'Rider coordinates created successfully',
            data: createRiderCoordinatesDto
        }

    }
}
