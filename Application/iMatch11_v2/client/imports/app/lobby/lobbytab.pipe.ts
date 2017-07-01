import * as _ from "lodash";
import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: "lobbyFilter"
})
export class LobbyFilterPipe implements PipeTransform {

    transform(array: any[], query: string): any {
        if (query) {
            return _.filter(array, row=>row.SpilType.indexOf(query) > -1);
        }
        return array;
    }
}
