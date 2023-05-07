import { Component } from '@angular/core';
import { Player } from './models/player.model';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent {
  public players: Player[] = [
    {
      name: 'Lewis Hamilton',
      achievementNum: 44,
      achievementName: 'Legtöbb győzelem',
      img: 'https://www.racetechmag.com/wp-content/uploads/2020/12/Lewis-Hamilton-F1-image.png',
      color: '#14b7ba',
    },
    {
      name: 'Max Verstappen',
      achievementNum: 1,
      achievementName: 'Legfiatalabb pontszerző',
      img: 'https://cdn.racingnews365.com/Riders/Verstappen/_570x570_crop_center-center_none/f1_2023_mv_red_lg.png?v=1677514463',
      color: '#11169e',
    },
    {
      name: 'Charles Leclerc',
      achievementNum: 16,
      achievementName: 'Győzelem Monza-ban',
      img: 'https://cdn.racingnews365.com/Riders/Leclerc/_570x570_crop_center-center_none/f1_2023_cl_fer_lg.png?v=1677514905',
      color: '#fc031c',
    },
    {
      name: 'Fernando Alonso',
      achievementNum: 14,
      achievementName: 'Legidősebb pilóta',
      img: 'https://cdn.racingnews365.com/Riders/Alonso/_570x570_crop_center-center_none/f1_2023_fa_ast_lg.png?v=1677515919',
      color: '#074a3c',
    },
    {
      name: 'Oscar Piastri',
      achievementNum: 81,
      achievementName: 'Legfiatalabb pilóta',
      img: 'https://cdn.racingnews365.com/Riders/Piastri/_570x570_crop_center-center_none/f1_2023_op_mcl_lg.png?v=1677515515',
      color: '#cf7317',
    }
  ]
}
