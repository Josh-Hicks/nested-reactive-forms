import { Coach } from './coach.model';
import { Player } from './player.model';

export interface Team {
    name: string;
    coaches: Coach[];
    players: Player[];
}